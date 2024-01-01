import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CalculatorHistory = (props) => {
  console.log("props:", props);
  const [pick, setPick] = useState("");
  const [userList2, setUserList2] = useState([]);
  const [pirce, setPrice] = useState();

  const handlePirceMod = (e) => {
    setPrice(() => {
      return e.target.value;
    });
  };

  const handlePick = (e) => {
    setPick(() => e.target.value);
    setUserList2(() => {
      return props.userList.filter((i) => {
        return !(i.id === e.target.value);
      });
    });
  };

  const handleSave = () => {
    props.setCalHistory((prev) => {
      return [
        ...prev,
        {
          id: props.index,
          payUser: pick,
          payUserList: userList2,
          price: pirce,
        },
      ];
    });
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        제목
      </AccordionSummary>
      <AccordionDetails>
        <div>결제자:</div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={pick}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={handlePick}
          >
            {props.userList.map((user) => {
              return (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div>참석자:</div>
        <div>
          {userList2.length > 0 &&
            userList2.map((user) => {
              return <div key={user.id}> {user.name}</div>;
            })}
        </div>
        <div>정산금액:</div>
        <TextField
          id="outlined-basic"
          onChange={handlePirceMod}
          value={pirce}
        ></TextField>

        <Button variant="outlined" onClick={handleSave}>
          저장
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
export default CalculatorHistory;
