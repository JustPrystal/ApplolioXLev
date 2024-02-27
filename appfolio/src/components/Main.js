import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Typography } from "@mui/material";

function Main () {
    
    return(
        <Box className="main-wrap" >
            <SkeletonTable />
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
        <Box className="main-screen">
                <Box className="left">
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
                <Box className="right">
                    <TableContainer sx={{ maxWidth: 600, overflowX:'hidden', border: "1px solid #eae2d6", borderTopLeftRadius: "25px"}} >
                        <Table sx={{overflow: "hidden"}}>
                            <TableBody>
                                {mockData.map((row, index)=> {
                                    return (
                                    <TableRow>
                                        <TableCell>{row.name}</TableCell>
                                        {[...Array(6)].map((x, i) =>
                                            <TableCell key={i}>
                                                <Skeleton width={Math.random() * 100 || 1 } height={15}></Skeleton>
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


export default Main;