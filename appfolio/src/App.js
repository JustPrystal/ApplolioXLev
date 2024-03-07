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

function App() {
  const [step, setStep] = useState(3);
  const [data, setData] = useState(null);
  const [overflow, setOverflow] = useState(false);

  const toggleOverflow = () => {
    setOverflow(!overflow);
  };

  const csvData = FetchCSVData();
  
  const {enqueueSnackbar} = useSnackbar()
  const {setCsvData} = useFormData();

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
  
  useEffect(() => {
    if(!csvData){
      // CSV Data not available show error
      enqueueSnackbar("Error getting csv details", {variant: 'error'});
      return;
    }
    setCsvData(csvData);
  }, [csvData])

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
              <Sidebar data={data} updateStep={updateStep} step={step} toggleOverflow={toggleOverflow}/>
              <Main step={step} updateStep={updateStep} />
            </Box> }
            {step === 3 && <CallScheduler data={data} updateStep={updateStep} step={step } />}
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