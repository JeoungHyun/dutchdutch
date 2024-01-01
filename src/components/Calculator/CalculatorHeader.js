import React from "react";
import { Box } from "@mui/material";

const CalculatorHeader = () => {
  return (
    <Box className="header" sx={{ bgcolor: "#666e8e", display:'flex', paddingLeft:'15px' }}>
      <p style={{fontSize:'30px', color:'white'}}>더치페이 계산기</p>
    </Box>
  );
};

export default CalculatorHeader;
