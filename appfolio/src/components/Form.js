import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import BasicSelect from "./Select";
import { useState } from "react";
import { NumericFormat } from 'react-number-format';

function Form({}){
    const [selectedAssetType, setSelectedAssetType] = useState(null);
    const [selectedLoanType, setSelectedLoanType] = useState(null);
    const [loanAmount , setLoanAmount] = useState(null);
    const [recourse,  setRecourse] = useState(null);
    
    const resetValues = () => {
        setSelectedAssetType(null)
    }
    const CalculateFieldProps = {
        
        // sx: {

        //     borderRadius: "80px",
        //     border: "1px solid #e5e5e5",
        // }
    };

    const handleCalculate = () => {
        if(!selectedAssetType){
            // show snackbar
            return;
        }
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
                    fontFamily: "Inter",
                    fontSize: "14px",
                    color: "#737373",
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
                        fontFamily: "Inter",
                        fontSize: "14px",
                        color: "black",
                        mb: "6px",
                        fontWeight: "500"
                    }}
                    >
                    Loan Amount
                    </Typography>
                    
                    <NumericFormat 
                        thousandSeparator="," 
                        value={loanAmount} 
                        customInput={TextField} 
                        {...CalculateFieldProps}
                    />
                </Box>
                <Box className="recourse">
                    <Typography 
                    sx = {{
                        fontFamily: "Inter",
                        pt: "24px",
                        fontSize: "16px",
                        pb: " 12px",
                    }}
                    >Are you able to accept some recourse?</Typography>
                    <Box className="button-group" sx={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap"
                    }}>
                        {
                          recourses && Object.entries(recourses).map(([key , {label, type}])=>(
                              <Button 
                                value={type}
                                key={key} 
                                variant="outlined"
                                sx={{
                                  color: "#404040",
                                  fontFamily: "inter",
                                  textTransform: "Capitalize",
                                  fontWeight:"500",
                                  fontSize:"14px",
                                  p: "12px 16px",
                                  borderColor: "#EAE2D6",
                                  borderRadius: "8px"
                              }}>{label}</Button>
                            )
                          )  
                        }
                    </Box>
                </Box>
            </Box>
            {(selectedAssetType && selectedLoanType) && <Button variant="contained" fullWidth onClick={() => handleCalculate()} >Calculate</Button>}            
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