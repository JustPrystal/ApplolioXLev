import { Box, Button, Typography } from "@mui/material";
import Confetti from 'react-confetti'
import { useFormData } from "./store/provider";

function Thanks ({data}){
    const {user} = data;

    const {getLoanTypeData, getAssetTypeData, getRecourseData, getLoanAmountData} = useFormData();
    const loanType = getLoanTypeData();
    const assetType = getAssetTypeData();
    const recourse = getRecourseData();
    const loanAmount = getLoanAmountData();
    
    return(
        <Box className="thanks" sx={{
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#fbfaf8"
        }}>
            <Confetti
                // wind =  
                numberOfPieces={500}
                colors={["#5b90dc", "#4682d9", "#ebd8b3", "#dcbb78", "#cc9933", "#266dd3", "#b0c9eb", "#5b90dc", "#4682d9", "#ebd8b3", "#dcbb78", "#cc9933", "#266dd3", "#b0c9eb", "#279462"]}
                >
            </Confetti>
            <Typography sx={{
                fontFamily: "alv-sb",
                mb: "16px",
                fontSize: "48px",
                color: "#171717"
                
            }}>Thanks, {user.firstName}</Typography>
            <Typography sx={{
                fontFamily: "alv-md",
                lineHeight:"1.26",
                color: "#737373",
                fontSize: "30px",
                mb: "44px",

            }}>Someone from our team will be in touch shortly</Typography>
            <Typography sx={{
                fontFamily: "alv-md",
                lineHeight:"1.26",
                color: "#737373",
                fontSize: "30px",
                mb: "44px",

            }}>{assetType + " " + loanType + " " + loanAmount + " " + recourse}</Typography>
            <Button variant="contained"  className="learn-more" href="https://www.lev.co/"
            sx={{
                borderRadius: "8px",
                lineHeight: "1.66",
                fontSize: "14px",
                textTransform: "Capitalize",
                }}>Learn about Lev</Button>
        </Box>

    )
}

export default Thanks;