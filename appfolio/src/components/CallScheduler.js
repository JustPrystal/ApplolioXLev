import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import callImage from "../assets/Lev_Illustration_Borrower 1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallIcon from "../assets/CallIcon.svg";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { CSSTransition } from 'react-transition-group';


function CallScheduler({ data, updateStep, step }) {
  const { user } = data;
  const theme = useTheme();

  const [phoneNum, setPhoneNum] = useState("");
  const handleChange = (event) => {
    let formattedPhoneNumber = event.target.value.replace(/\D/g, '');

    // If the first character is '1', exclude it from formatting
    if (formattedPhoneNumber.startsWith('1')) {
      formattedPhoneNumber = formattedPhoneNumber.slice(1);
    }

    // Format the phone number according to the desired format
    let formatted = '';
    if (formattedPhoneNumber.length > 0) {
      formatted = '+1 (' + formattedPhoneNumber.substring(0, 3);
      if (formattedPhoneNumber.length > 3) {
        formatted += ') ' + formattedPhoneNumber.substring(3, 6);
      }
      if (formattedPhoneNumber.length > 6) {
        formatted += '-' + formattedPhoneNumber.substring(6, 10);
      }
    }

    // Update the state with the formatted phone number
    setPhoneNum(formatted);
  };

  return (
    
    <Box
      className="call-scheduler-wrap"
      sx={{
        mt: "66px",
      }}
    >
      <Box
        className="call-scheduler"
        sx={{
          maxWidth: "860px",
          m: "0 auto",
          backgroundColor: "#f8f5f1",
          p: "80px 40px",
          display: "flex",
          borderRadius: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box className="left">
          <Typography
            sx={{
              color: "#404040",
              fontFamily: "alv",
              fontSize: "36px",
            }}
          >
            Let's schedule a call, {user.firstName}
          </Typography>
          <Typography
            sx={{
              color: "#404040",
              lineHeight: "1.43",
              mb: "32px",
              fontSize: "14px",
            }}
          >
            {" "}
            We'll be in touch within one business day
          </Typography>
          <FormControl sx={{ width: "320px" }} >
            <OutlinedInput
              autoFocus
              value={phoneNum}
              onChange={handleChange}
              sx={{
                borderRadius: "8px",
                boxShadow: "0 2px 15px -10px rgba(0,0,0,0.25)",
                p: "10.5px 14px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #e5e5e5",
                mb: "24px",
                bgcolor: "#fff",
                ">input": {
                  padding: "0",
                },
                ">fieldset": {
                  border: "0",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <img src={CallIcon} alt="" />
                </InputAdornment>
              }
            />
            <Button
              variant="contained"
              onClick={() => updateStep(4)}
              sx={{
                width: "175px",
                color: theme.palette.primary,
                borderRadius: "8px", 
                maxHeight: "44px",
                height: "100%",
                border: `1px solid ${theme.palette.primary}`, 
                fontSize: "16px",
                lineHeight: "1.4",
                textTransform: "capitalize",
                fontFamily: "inherit",
                p: "10px 18px",
              }}
            >
              Schedule a call
              <ArrowForwardIcon sx={{pl:"5px", width: "19px"}}/>
            </Button>
          </FormControl>
        </Box>
        <Box className="right">
          <img src={callImage} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default CallScheduler;
