import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

// import Select, { SelectChangeEvent } from '@mui/material/Select';

function BasicSelect({title, options, value, setValue}) {
    
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [open, setOpen] = useState(false);


  const handleOpenClose = () => {
    setOpen(!open);
  }

  const convertToHyphenatedFormat = str => str.toLowerCase().split(" ").join("-");

  return (
    
    <Box className={convertToHyphenatedFormat(title)}
    sx={{
        mb: "16px",
    }}>
      <FormControl fullWidth>
        <Typography
          sx={{
            fontSize: "14px",
            color: "black",
            mb: "6px",
            letterSpacing: "-0.5px",
            fontWeight: "500"
          }}
        >
          {title}
        </Typography>
        <Select
          value={value}
          onChange={handleChange}
          IconComponent={() => (
            <KeyboardArrowDownIcon onClick={handleOpenClose} 
            sx={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              cursor: "pointer",
              opacity: "0.55"

            }} />
          )}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          sx={{
            borderRadius: "8px",
            border: "1px solid #e5e5e5",
            p: "10px 14px",
            color: "#737373",
            bgcolor: "#fff",
            fontSize : "16px",
            maxHeight: "44px",
            height: "100%",
            ">div": {
              padding: "0"
            },
            ">fieldset": {
              border: "0"
            },
          }}
          
          MenuProps={{
            style: {
              maxHeight: 400,
            },
            }}

        >
            {options && Object.entries(options).map(([key, {label, type}], index) => (
                <MenuItem key={index} 
                sx={{
                  fontSize: "16px",
                  letterSpacing: "-0.5px",
                }} 
                value={key}>{label}</MenuItem>
            ))}
            
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
