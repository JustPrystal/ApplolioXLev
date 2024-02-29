import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Typography } from "@mui/material";

function Main ({step}) {
    return(
        <Box className="main-wrap" sx={{
            p: "32px",
            backgroundColor: "#fbfaf8",
            height: "100vh",
            width: "100%"
        }}>
            {step == 1 && <SkeletonTable />}
            {step == 2 && <MainTable />}
        </Box>
    )
} 

function SkeletonTable (){
    const mockData = [
        {
            name: "Bank",
        },
        {
            name: "Debt Funds",
        },
        {
            name: "Life Co",
        },
        {
            name: "Credit unions",
        },
        {
            name: "Agencies",
        },
        {
            name: "CMBS",
        },
    ]

    return(
        <Box className="main-screen" sx={{
            display: "flex",
            alignItems: "flex-end",
            p: "32px",
            pt: "50px",
            borderRadius: "16px",
            backgroundColor: "white",
            overflow: "hidden",
            '@media(max-width: 1300px)' : {
                flexDirection: "column",

            }
        }}>
                <Box className="left" sx={{
                    mb: "50px",
                    width: "50%"
                }}>
                    <Typography className="heading" 
                    sx={{
                        fontFamily: "alv",
                        color: "#171717",
                        lineHeight: "1.166",
                        fontSize: "24px",
                        mb: "24px",
                    }}>
                        Refine your calculations to see your prequalified options.
                    </Typography>
                    <Typography className="description"
                    sx={{
                        color: "#737373",
                        lineHeight: "1.5",
                        fontSize: "16px",
                        fontWeight: "400"
                    }}>
                        Lev helps you get a headstart on your plan by showing you prequalified lender-types and terms.
                    </Typography>
                </Box>
                <Box className="right" sx={{width: "50%"}}>
                    <TableContainer sx={{
                        maxWidth: 600, 
                        overflowX:'hidden', 
                        border: "1px solid #eae2d6", 
                        borderTopLeftRadius: "25px",
                        position: "relative",
                        bottom: "-33px",
                        right: "-34px"
                    }} >
                        <Table sx={{
                            overflow: "hidden", 
                            tableLayout: 'fixed'
                        }}>
                            <TableBody>
                                {mockData.map((row, index)=> {
                                    return (
                                    <TableRow sx={{
                                        ":nth-child(2n)": {
                                            bgcolor: "#fbfaf8"
                                        }
                                    }}>
                                        <TableCell sx={{
                                            border: "1px solid #eee8df",
                                            width: "130px",
                                            whiteSpace: 'nowrap',
                                            borderLeft: "0",
                                            borderTop: "0",
                                            p: "12px 24px",
                                            fontWeight: "500",
                                            color: "#525252"
                                        }}>{row.name}</TableCell>
                                        {[...Array(6)].map((x, i) =>
                                            <TableCell key={i} sx={{
                                                borderBottom: "1px solid #f8f5f1",
                                                width: "70px",
                                            }} align="center">
                                                <Skeleton animation="wave" width={(i == 0 || i == 2) ? ((Math.random() * 30) + 10) : ((Math.random() * 70) + 30) } height={20}
                                                sx={{
                                                    margin: "0 auto",
                                                    borderRadius: "7px"
                                                }}></Skeleton>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
        </Box>
    )
}

function MainTable (){
    // const heads = {
    //     x: ["Bank", "Debt Fund", "Life Co", "Credit Union", "CMBS", "Agency"],
    //     y: ["Max LTV", "Rate", "Term", "Credit Union", "CMBS", "Agency"]
    // }
    const mockData = {
        "Max LTV":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
        "Rate":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
        "Term":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
        "Interest Only":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
        "Amortization":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
        "Pre Pay":{
            "Bank" : "57.5",
            "Debt Fund" : "75.0",
            "Life Co" : "65.0",
            "Credit Union" : "65.0",
            "CMBS" : "75.0",
            "Agency" : "75.0"
        },
    }
    console.log(Object.entries(mockData))

    return(
        <Box className="main-table-wrap" >
            <Typography
            sx={{
                color: "#171717",
                fontFamily: "alv-md",
                fontSize: "24px",
                mb: "16px",
                lineHeight: "1"
            }}>Current Market Terms</Typography>
            <Typography sx={{
                color: "#737373",
                fontSize: "18px",
                mb: "24px",
                lineHeight: "1.55"
            }}>Here are the eligible lender types and their expected terms based on your loan request. Your decisions on the loan request may disqualify some options.</Typography>
            <TableContainer sx={{ 
                border: "1px solid #eae2d6", 
                borderRadius: "16px",
                mb: "24px"
            }} >
                <Table sx={{
                    // tableLayout: 'fixed'
                }}>
                    <TableBody>
                        <TableRow className="head-x">
                            <TableCell sx={{
                                borderBottom: "1px solid #eae2d6",
                                borderRight: "1px solid #eae2d6",
                                backgroundColor: "#fbfaf8",
                            }}></TableCell>
                            {Object.entries(mockData["Max LTV"]).map((col, i) =>
                                <TableCell key={i} sx={{
                                    borderBottom: "1px solid #eae2d6",
                                    borderRight: "1px solid #eae2d6",
                                    backgroundColor: "#fbfaf8",
                                    ":last-child":{
                                        borderRight: "none",
                                    },
                                    color: "#525252",
                                    lineHeight: "1.43",
                                    fontSize: "14px",
                                    width: "50px",
                                    fontWeight: "500"
                                }} align="center">
                                    {col[0]}
                                </TableCell>
                            )}
                        </TableRow>
                        {Object.entries(mockData).map((row, index)=> {
                            return (
                            <TableRow sx={{
                                ":nth-child(2n)": {
                                    bgcolor: "#fff"
                                }
                            }}>
                                <TableCell sx={{
                                    border: "1px solid #eee8df",
                                    backgroundColor: "#fbfaf8",
                                    borderLeft: "0",
                                    borderTop: "0",
                                    borderBottom: index == (Object.entries(mockData).length - 1) && "0",
                                    width: "calc( 100% / 7)",
                                    p: "20px 16px",
                                    fontWeight: "500",
                                    color: "#525252"
                                }} >{row[0]}</TableCell>
                                {Object.entries(row[1]).map((cell, i) =>
                                    <TableCell key={i} sx={{
                                        border: "1px solid #eee8df",
                                        borderBottom: index == (Object.entries(mockData).length - 1) && "0",
                                        borderRight: i == (Object.entries(row[1]).length - 1) && "0",
                                        width: "calc( 100% / 7)",
                                        fontWeight: "500",
                                        color: "#525252",
                                        p: "16px"
                                    }} align="right">
                                        {cell[1]}
                                        {/* <Skeleton animation="wave" width={(i == 0 || i == 2) ? ((Math.random() * 30) + 10) : ((Math.random() * 70) + 30) } height={20}
                                        sx={{
                                            margin: "0 auto",
                                            borderRadius: "7px"
                                        }}></Skeleton> */}
                                    </TableCell>
                                )}
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography
            sx={{
                fontSize: "12px",
                lineHeight: "1",
                color: "#737373",
                fontStyle: "italic"
            }}>*These are estimated ranges based on current market conditions and internal data. Terms may vary at the deal level. </Typography>
        </Box>
    )
}


export default Main;