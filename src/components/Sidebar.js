import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Form from "./Form"
import { useState } from "react";
import ArrowIcon from '@mui/icons-material/KeyboardArrowDown';

function Sidebar({ send, data, updateStep, step, overflow, toggleOverflow}){

    const [isOpen, setIsOpen] = useState(true);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
      };
    return(
        <Box className={`sidebar ${isOpen ? "open" : "close"}`} 
        sx = {{
            pt : "24px",
            px : "32px",
            backgroundColor: "#fbfaf8",
            maxWidth: "516px",
            width: "100%",
            height: "calc(100vh - 143px)",
            // overflowX: "visible",
            // overflowY: "auto",
            borderRight: "1px solid #eae2d6",
            '@media(max-width: 1300px)' :{
                width: "70%",
                minWidth : "355px"
            },
            '@media(max-width: 991px)' :{
                width: "40%",
            },
            '@media(max-width: 767px)' :{
                height: "100%",
                maxHeight: "calc(100vh - 171px)",
                minWidth: "unset"
            },
        }}
        >
            <Box className="sidebar-inner" sx={{
                maxHeight: "100%",
                overflow: "auto"
            }}>
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
                <Box className="toggle-button" sx={{
                        position: "absolute",
                        display: "block",
                        bottom: "50px",
                        p: "2px",
                        pb: "0px",
                        left: "100%",
                        backgroundColor: "#fbfaf8",
                        border: "1px solid #eae2d6",
                        boxShadow: "5px 0 5px -3px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                }} 
                onClick={() => {
                    toggleDrawer();
                    toggleOverflow();
                }}>
                    <ArrowIcon sx={{
                        transform: "rotate(-90deg)",
                        fontSize: "36px"
                    }} />
                </Box>
                <Form data={data} send={send} toggleDrawer={toggleDrawer} updateStep={updateStep} step={step} toggleOverflow={toggleOverflow}/>
            </Box>
        </Box>
    )
}

export default Sidebar;