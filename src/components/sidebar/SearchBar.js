import { Icon } from "@iconify/react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box>
      <TextField
        label="Search"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            height: "45px",
          },
          "& .MuiInputBase-input": {
            padding: "10px 14px", // Adjust padding to center the text
          },
          "& .MuiInputLabel-root": {
            lineHeight: ".9", // Fine-tune for label positioning
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Icon icon="line-md:search" width="24" height="24" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
