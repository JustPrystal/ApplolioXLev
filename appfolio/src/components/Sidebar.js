import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Form from "./Form"

function Sidebar({ data }){
    const { formDataPrefill } = data;
    return(
        <Box className="sidebar" 
        sx = {{
            pt : "24px",
            px : "32px",
            backgroundColor: "#fbfaf8",
            maxWidth: "516px"
        }}
        >
            <Typography 
            sx = {{
                fontFamily: "alv-sb",
                fontSize: "28px",
                pb: "18px",
                mb: "24px",
                borderBottom: "1px solid #eae2d6"
            }}
            >Browse real-time market terms</Typography>
            <Form data={formDataPrefill} />
        </Box>
    )
}

export default Sidebar;