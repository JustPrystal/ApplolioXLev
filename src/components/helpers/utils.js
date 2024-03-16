import axios from "axios";
import {recourses} from "../data/constants";

let id = null;

export function sendMessageToSlack(message, timestamp, update=false) {
    // Define the URL of your Express backend endpoint
    const expressUrl = 'http://localhost:3001/slack-proxy'; // Update with your Express server URL

    const payload = {
        channel: 'C06N8FSPJT1', // Update with your Slack channel ID
        text: message,
        ts: id,
        update: update
    };

    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: expressUrl,
            data: payload
        })
        .then(response => {
            id = response.data.ts; 
            resolve(true); 
        })
        .catch(error => {
            console.error('Error sending message to Slack:', error);
            reject(false); 
        });
    });
  }
  export async function sendDataToSlackIfChanged() {
    // Get the stored data from cookies
    let existingLead = getCookies('leadData');
    if(!existingLead){
      return;
    }

    existingLead = JSON.parse(existingLead);

    if (existingLead.slackMessageStatus === true) {
      const updatedMessage = getFormattedMessage(existingLead); 
      const response = await sendMessageToSlack(updatedMessage, id, true); // Setting update flag to true
      if (response) {
          setCookie('leadData', JSON.stringify(existingLead));
      }
    } else {
      const message = getFormattedMessage(existingLead);
      const response = await sendMessageToSlack(message, id);
      if (response) {
          existingLead.slackMessageStatus = true;
          setCookie('leadData', JSON.stringify(existingLead));
      }
    }

  }
  function getFormattedMessage(data) {
    return `New Lead (_*${data.leadType.toUpperCase()}*_)\n\`\`\`` +
    `Full Name: ${data.data.user.firstName} ${data.data.user.lastName}\n` +
    `Address: ${data.data.asset.streetAddress} ${data.data.asset.city} ${data.data.asset.state} ${data.data.asset.zip}\n` +
    `Company: ${data.data.company}\n` +
    `Source: ${data.data.source}\n` +
    `Asset Type: ${data.data.asset.type}\n` +
    `Email: ${data.data.user.email}\n` +
    `Loan Type: ${data.data.formDataPrefill.loanType}\n` +
    `Valuation: ${data.data.formDataPrefill.valuation}\n` +
    `Net Operating Income: ${data.data.formDataPrefill.netOperatingIncome}\n` +
    `Renovation Costs: ${data.data.formDataPrefill.renovationCosts}\n` +
    `Projected Net Operating Income: ${data.data.formDataPrefill.projectedNetOperatingIncome}\n` +
    `Land Price: ${data.data.formDataPrefill.landPrice}\n` +
    `Construction Budget: ${data.data.formDataPrefill.constructionBudget}\n` +
    `Expenses Spent To Date: ${data.data.formDataPrefill.expensesSpentToDate}\n` +
    `Desired Leverage: ${data.data.formDataPrefill.desiredLeverage}\n\n` +
    `${data.loanAmount ? `Loan Amount: ${data.loanAmount}\n` : ''}` +
    `${data.recourse ? `Recourse: ${recourses[data.recourse]["label"]}\n` : ''}` +
    `${data.phoneNum ? `Phone Number: ${data.phoneNum}\n` : ''}\n\`\`\``;
  }


  export function handleLead(data, type, other) {
    let existingLead = getCookies('leadData');
    let dataObject = null;
    if(existingLead){
      existingLead = JSON.parse(existingLead);
        
        dataObject ={
            timestamp: id,
            data: existingLead.data, 
            slackMessageStatus:true,
            leadType:type,
            loanAmount: existingLead?.loanAmount,
            recourse: existingLead?.recourse,
            phoneNum: existingLead?.phoneNum,
            ...other
        }

    }else{
      //new lead
      dataObject = {
        timestamp: id,
        data: data,
        slackMessageStatus : false, //not sent if false
        leadType : type,
        ...other
      }
    }

    console.log(dataObject)
    setCookie('leadData', JSON.stringify(dataObject));
    return true;
  }
  // Function to get cookie value by name
  export function getCookies(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
  }
  export function setCookie(name, value) {
      document.cookie = `${name}=${value}; path=/`;
  }