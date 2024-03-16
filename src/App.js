import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CallScheduler from './components/CallScheduler';
import Main from './components/Main';
import Thanks from './components/Thanks';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/helpers/LoadingScreen';
import { useSnackbar } from 'notistack';
import FetchCSVData from './FetchData';
import { useFormData } from './components/store/provider';
import {assetTypes, loanTypes} from './components/data/constants';
import axios from 'axios';


function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [overflow, setOverflow] = useState(false);

  const {setLoanTypeData, setAssetTypeData} = useFormData();

  const currentUrl = new URL(window.location.toLocaleString());
  const urlParams = currentUrl.searchParams; 
  const URLData = urlParams.get('data');

  const toggleOverflow = () => {
    setOverflow(!overflow);
  };
  
  function sendMessageToSlack(message) {
    // Define the URL of your Express backend endpoint
    const expressUrl = 'http://localhost:3001/slack-proxy'; // Update with your Express server URL

    const payload = {
        channel: 'C06N8FSPJT1', // Update with your Slack channel ID
        text: message
    };

    // Make the HTTP POST request to the Express backend
    axios.post(expressUrl, payload)
        .then(response => {
            console.log('Message sent to Slack successfully');
        })
        .catch(error => {
            console.error('Error sending message to Slack:', error);
        });
  }
  function sendDataToSlackIfChanged(data) {
    // Get the stored data from cookies
    const storedData = getCookies('storedData');

    // Check if stored data is different from new data
    if (storedData !== JSON.stringify(data)) {
        // Update stored data in cookies
        setCookie('storedData', JSON.stringify(data));
        // Send message to Slack
        sendMessageToSlack(data);
    } else {
        console.log('Data is unchanged. Skipping message to Slack.');
    }
}

// Function to get cookie value by name
function getCookies(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set cookie value
function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

function resetCookiesAfterHalfHour() {
  setInterval(() => {
      setCookie('storedData', '', 0); // Reset stored data cookie
  }, 30 * 60 * 1000); // 30 minutes in milliseconds
}
  const csvData = FetchCSVData();
  
  const {enqueueSnackbar} = useSnackbar()
  const {setCsvData} = useFormData();

  const updateStep = (num) => {
    setStep(num);
  }
  

  useEffect(() => {
    
    if(URLData){
      try{
        const JSONData = JSON.parse(atob(URLData));
        if(JSONData.asset.type){
          const assetType = getKeyByValue(assetTypes, JSONData.asset.type);
          if(assetType){
            setAssetTypeData(assetType);
          }
        }
        if(JSONData.formDataPrefill.loanType){
          const loanType = getKeyByValue(loanTypes, JSONData.formDataPrefill.loanType);
          if(loanType){
            setLoanTypeData(loanType);
          }
        }
     
        sendDataToSlackIfChanged(JSONData.user.firstName)
        resetCookiesAfterHalfHour()
        setData(JSONData);
      }catch(error){
        console.log(error);
        enqueueSnackbar("The link is broken or inaccessible. Please ensure it is valid and try again later.", { variant: 'error' });
        setData(null)
      }
      
    }else{
      enqueueSnackbar("An error occurred while processing the link. Please try again later.", { variant: 'error' });
      setData(null);
    } 
  }, [URLData])
  
  useEffect(() => {
    if(!csvData){
      // CSV Data not available show error
      enqueueSnackbar("Error getting csv details", {variant: 'error'});
      return;
    }
    setCsvData(csvData);
  }, [csvData])

  function getKeyByValue(dataType, value) {
    for (const key in dataType) {
        if (dataType.hasOwnProperty(key)) {
            if (dataType[key].label === value) {
                return key;
            }
        }
    }
    return null; // Return null if value not found
  }

  return (
    <div className={`app ${overflow ? "overflow-visible" : "overflow-hidden"}`}>
      {data ? (
        <>
          {(step === 1 || step === 2 || step === 3) && <Box className="app-wrap">
            <Header data={data}/>
            {( step === 1 || step === 2 ) && 
            <Box sx={{ 
              display: "flex",
              position: "relative"
            }}>
              <Sidebar data={data} updateStep={updateStep} send={sendDataToSlackIfChanged} step={step} toggleOverflow={toggleOverflow}/>
              <Main step={step} updateStep={updateStep} />
            </Box> }
            {step === 3 && <CallScheduler data={data} send={sendDataToSlackIfChanged} updateStep={updateStep} step={step } />}
          </Box>}
          {step === 4 && <Thanks data={data} />}
        </>
      ) : <LoadingScreen variant="error" />}
    </div>
  );
}

export default App;

//link
//https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzDpfdIB-Vqbew0N_M1HBnBEQdQuMwgvzIRFPpCyKYk_ACmmZTcb6VG_8WuLIVkRoHQBpdq50iVzg/pub?output=csv