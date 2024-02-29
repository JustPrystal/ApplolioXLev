import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import BasicSelect from "./Select";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Form({data, updateStep, step}){
    const theme = useTheme();

    const [selectedAssetType, setSelectedAssetType] = useState(null);
    const [selectedLoanType, setSelectedLoanType] = useState(data.loanType);
    const [loanAmount , setLoanAmount] = useState(null);
    const [recourse,  setRecourse] = useState(null);
    
    const thousandSeparatedFormat = (value) => {
        return Number(value).toLocaleString();
    };

    const handleCalculate = () => {
        if(!selectedAssetType){
            // show snackbar
            return;
        }
        updateStep(2)
    }
    return(
        <Box className="form"> 
            <Box className = "instructions"
            sx = {{
                mb: " 16px",
            }}>
                <Typography 
                sx = {{
                    fontFamily: "alv",
                    fontSize: "20px",
                    pb: " 8px",
                }}
                >Refine Calculations</Typography>
                <Typography 
                sx = {{
                    fontSize: "14px",
                    color: "#737373",
                    letterSpacing: "-0.5px",
                }}
                >Use this to automatically update prequalified lending terms.</Typography>
            </Box>
            <Box className="form-options">
                <Box className="fields"
                sx={{
                    borderBottom: "1px solid #eae2d6"
                }}>
                    <BasicSelect title="Asset Type" 
                        options={assetTypes}
                        value={selectedAssetType}
                        setValue={(value) => setSelectedAssetType(value)}
                    />
                    <BasicSelect title="Loan Type" 
                        options={loanTypes}
                        value={selectedLoanType}
                        setValue={(value) => setSelectedLoanType(value)}
                    />
                    <Typography
                    sx={{
                        fontSize: "14px",
                        color: "black",
                        letterSpacing: "-0.5px",
                        mb: "6px",
                        fontWeight: "500"
                    }}
                    >
                    Loan Amount
                    </Typography>
                    <FormControl fullWidth sx={{  
                        borderRadius: "8px", 
                        border: "1px solid #e5e5e5", 
                        mb: "24px", 
                        boxShadow: "0 2px 15px -10px rgba(0,0,0,0.25)",
                        bgcolor: "#fff",
                    }}> 
                        <OutlinedInput 
                        value={thousandSeparatedFormat(loanAmount)}
                        onChange={(event)=>{ setLoanAmount(event.target.value.replace(/\D/g, '')) }}
                        sx={{  
                            borderRadius: "8px", 
                            p: "10.5px 14px",
                            fontSize : "16px",
                            ">input": {
                              padding: "0"
                            },
                            ">fieldset": {
                              border: "0"
                            },
                        }} 
                            startAdornment={<InputAdornment position="start">$</InputAdornment>} 
                        /> 
                    </FormControl> 

                </Box>
                <Box className="recourse">
                    <Typography 
                    sx = {{

                        pt: "24px",
                        letterSpacing: "-0.5px",
                        fontSize: "16px",
                        pb: " 12px",
                    }}
                    >Are you able to accept some recourse?</Typography>
                    <Box className="button-group" sx={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        mb: "16px"
                    }}>
                        {
                          recourses && Object.entries(recourses).map(([key , {label, type}])=>(
                              <Button 
                                value={type.toLowerCase()}
                                key={key}
                                color="primary" 
                                variant={recourse === key ? "contained" : "outlined"}
                                onClick={(event) => {
                                    setRecourse(key)
                                }}
                                sx={{
                                  letterSpacing: "-0.5px",
                                  textTransform: "Capitalize",
                                  fontWeight:"500",
                                  fontSize:"14px",
                                  p: "12px 16px",
                                  lineHeight: "1.3",
                                  borderColor: "#EAE2D6",
                                  borderRadius: "8px",
                                  color: recourse === key ? "#ffffff" : "#404040",
                                  border: recourse === key && `1px solid ${theme.palette.secondary.main}`
                                }}>{label}</Button>
                            )
                          )  
                        }
                    </Box>
                </Box>
            </Box>
            <Box className="calculate" sx={{
                borderBottom: "1px solid #eae2d6",
            }}>
                <Button  
                disabled={!selectedAssetType || !selectedLoanType || !loanAmount || !recourse} 
                variant="outlined" 
                sx={{
                    color: "#404040",
                    borderRadius: "8px", 
                    border: "1px solid #d9d9d9", 
                    fontSize: "16px",
                    lineHeight: "1.4",
                    bgcolor: "#fff",
                    textTransform: "capitalize",
                    letterSpacing: "-0.5px",
                    mb: "24px",
                    p: "10px 18px",
                    maxHeight: "44px",
                    height: "100%",
                    boxShadow: "0 2px 15px -10px rgba(0,0,0,0.25)",
                }} 
                fullWidth 
                onClick={() => handleCalculate()} 
                >Calculate</Button>           
            </Box>
            {
                step == 2 && <Box className="next-step">
                <Button className="get-financing" fullWidth color="primary"
                variant="contained"
                onClick={()=>updateStep(3)}
                sx={{
                    mt: "24px",
                    color: theme.palette.primary,
                    borderRadius: "8px", 
                    maxHeight: "44px",
                    mb: "24px",
                    height: "100%",
                    border: `1px solid ${theme.palette.primary}`, 
                    fontSize: "16px",
                    lineHeight: "1.4",
                    textTransform: "capitalize",
                    letterSpacing: "-0.5px",
                    fontFamily: "inherit",
                    p: "10px 18px",
                }}>get financing 
                <ArrowForwardIcon sx={{pl:"5px"}}/>
                </Button>
            </Box>
            }
        </Box>
    )
}

const assetTypes = {
    "land_development": {
        label: 'Land/Development',
        type: 'Land'
    },
    "mixed_use_mutifamily": {
        label: 'Mixed Use (Multifamily/Retail)',
        type: 'Multi'
    },
    "industrial": {
        label: 'Industrial',
        type: 'Industrial'
    },
    "cold_storage": {
        label: 'Cold Storage',
        type: 'Industrial'
    },
    "data_center": {
        label: 'Data Center',
        type: 'Industrial'
    },
    "anchored_retail": {
        label: 'Anchored Retail',
        type: 'Retail'
    },
    "nnn_retail": {
        label: 'NNN Retail',
        type: 'Retail'
    },
    "specialty": {
        label: 'Specialty',
        type: 'Specialty'
    },
    "parking_garage": {
        label: 'Parking Garage',
        type: 'Specialty'
    },
    "cannabis": {
        label: 'Cannabis',
        type: 'Retail'
    },
    "1_4_residential": {
        label: '1-4 Residential',
        type: 'SFR'
    },
    "hospitality_hotel": {
        label: 'Hospitality/Hotel',
        type: 'Hospitality'
    },
    "multifamily": {
        label: 'Multifamily',
        type: 'Multi'
    },
    "fractured_condo": {
        label: 'Fractured Condo',
        type: 'Multi'
    },
    "mobile_home_parks": {
        label: 'Mobile Home Parks',
        type: 'Multi'
    },
    "student_housing": {
        label: 'Student Housing',
        type: 'Multi'
    },
    "senior_housing": {
        label: 'Senior Housing',
        type: 'Senior Housing'
    },
    "nursing_homes": {
        label: 'Nursing Homes',
        type: 'Senior Housing'
    },
    "office": {
        label: 'Office',
        type: 'Office'
    },
    "medical_office": {
        label: 'Medical Office',
        type: 'Office'
    },
    "mixed_use_office": {
        label: 'Mixed Use (Office/Retail)',
        type: 'Office'
    },
    "retail": {
        label: 'Retail',
        type: 'Retail'
    },
    "self_storage": {
        label: 'Self-Storage',
        type: 'Industrial'
    },
    "single_family_portfolio": {
        label: 'Single Family Portfolio',
        type: 'SFR'
    }
};
const loanTypes = {
    "permanent-financing": {
        label: 'Permanent Financing',
        type: 'Permanent'
    },
    "light-value-add": {
        label: 'Light Value-Add',
        type: 'Bridge'
    },
    "redevelopment": {
        label: 'Redevelopment',
        type: 'Bridge'
    },
    "construction": {
        label: 'Construction',
        type: 'Construction'
    },
    "pre-development": {
        label: 'Pre-Development',
        type: 'Construction'
    }
};
const recourses = {
    "personal-recourse": {
        label: 'Personal Recourse',
        type: 'Recourse'
    },
    "fund-recourse": {
        label: 'Fund Recourse',
        type: 'Recourse'
    },
    "no-recourse": {
        label: 'No Recourse',
        type: 'Non-recourse'
    }
}



export default Form;