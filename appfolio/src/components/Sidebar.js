import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Form from "./Form"

function Sidebar({ data, updateStep, step }){
    const { formDataPrefill } = data;
    return(
        <Box className="sidebar" 
        sx = {{
            pt : "24px",
            px : "32px",
            backgroundColor: "#fbfaf8",
            maxWidth: "516px",
            width: "100%",
            borderRight: "1px solid #eae2d6",
        }}
        >
            <Typography 
            sx = {{
                fontFamily: "alv-md",
                fontSize: "28px",
                pb: "18px",
                mb: "24px",
                lineHeight: "0.9",
                borderBottom: "1px solid #eae2d6"
            }}
            >Browse real-time market terms</Typography>
            <Form data={formDataPrefill} updateStep={updateStep} step={step} />
        </Box>
    )
}

export default Sidebar;