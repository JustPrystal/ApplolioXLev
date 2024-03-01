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
// const { google } = require('googleapis');
// const keys = require('./assets/googlesheetapi.json');

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);

  const {enqueueSnackbar} = useSnackbar()

  const updateStep = (num) => {
    setStep(num);
  }

  useEffect(() => {
    const currentUrl = new URL(window.location.toLocaleString());
    const urlParams = currentUrl.searchParams;

    const URLData = urlParams.get('data'); 
    if(URLData){
      try{
        const JSONData = JSON.parse(atob(URLData));
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

  }, [])
  

  return (
    <div className="app">
      {data ? (
        <>
          {(step === 1 || step === 2 || step === 3) && <Box className="app-wrap">
            <Header data={data}/>
            {( step === 1 || step === 2 ) && 
            <Box sx={{ display: "flex"}}>
              <Sidebar data={data} updateStep={updateStep} step={step}/>
              <Main step={step} />
            </Box> }
            {step === 3 && <CallScheduler data={data} updateStep={updateStep} step={step}/>}
          </Box>}
          {step === 4 && <Thanks data={data} />}
        </>
      ) : <LoadingScreen variant="error" />}
    </div>
  );
}

export default App;
