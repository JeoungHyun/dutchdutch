import react from "react";
import { Box, Button } from "@mui/material";

const CalculatorFooter = () => {
  return (
    <Box sx={{ cursor:'pointer',color:'white',fontSize:'15px',backgroundColor: "#666e8e", height: "40px",display:'flex',alignItems:'center',justifyContent:'center' }}>
      정산 하기!
    </Box>
  );
};
export default CalculatorFooter;
