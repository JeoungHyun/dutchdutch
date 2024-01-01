import React, { useState } from "react";
import { Container, Box, Card } from "@mui/material";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorUserList from "./CalculatorUserList";
import CalculatorAddMenu from "./CalculatorAddMenu";
import CalculatorHistory from "./CalculatorHistory";
import CalculatorFooter from "./CalculatorFooter";

export default function Calculator() {
  const [userList, setUserList] = useState([]);

  return (
    <Container maxWidth="md" sx={{marginTop: '20px', marginBottom:'20px'}} >
      <Card sx={{border: '1px solid black'}}>
        <CalculatorHeader />
        <CalculatorUserList userList={userList} setUserList={setUserList} />
        <CalculatorAddMenu userList={userList} />
        <CalculatorFooter />
      </Card>
    </Container>
  );
}
