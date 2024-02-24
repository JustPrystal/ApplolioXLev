import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';

function BasicSelect({title, options, value, setValue}) {
    
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const convertToHyphenatedFormat = str => str.toLowerCase().split(" ").join("-");

  return (
    
    <Box className={convertToHyphenatedFormat(title)}
    sx={{
        mb: "16px",
    }}>
      <FormControl fullWidth>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "14px",
            color: "black",
            mb: "6px",
            fontWeight: "500"
          }}
        >
          {title}
        </Typography>
        <Select
          value={value}
          onChange={handleChange}
          sx={{
            borderRadius: "8px",
            border: "1px solid #e5e5e5",
          }}
          
          MenuProps={{
            style: {
               maxHeight: 400,
                  },
            }}

        >
            {options && Object.entries(options).map(([key, {label, type}], index) => (
                <MenuItem key={index} value={key}>{label}</MenuItem>
            ))}
            
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
