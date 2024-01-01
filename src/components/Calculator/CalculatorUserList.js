import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Avatar,
  Stack,
  FormHelperText,
} from "@mui/material";

const CalculatorUserList = (props) => {
  const [user, setUser] = useState("");
  const [userNo, setUserNo] = useState(0);

  const handleUserName = (e) => {
    setUser(e.target.value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleButtonClick = () => {
    if (user === "") {
      alert("추가되는 사용자가 없습니다.");
      return;
    }
    if (props.userList.length == 8) {
      alert("8명까지만 추가 가능합니다.");
      return;
    }

    setUserNo((prev) => {
      prev += 1;
      props.setUserList((prevState) => {
        return [...prevState, { id: prev, name: user }];
      });
      return prev;
    });
    setUser("");
  };

  const handleXClick = (d) => {
    console.log(d);
    props.setUserList((list) => {
      return list.filter((user) => {
        return user.id !== d;
      });
    });
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          height: "50px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
        }}
      >
        <p>멤버 추가 </p> &nbsp;&nbsp;&nbsp;
        <TextField
          id="outlined-basic"
          onChange={handleUserName}
          value={user}
          size="small"
        ></TextField>&nbsp;
        <Button size="large" variant="outlined" onClick={handleButtonClick}>
          추가
        </Button>
      </Box>
      <Stack
        bgcolor={"#2b2f6a"}
        direction="row"
        spacing={1}
        sx={{ height: "50px", paddingLeft: "15px", alignItems:'center' }}
        alignItems="center"
      >
        <p style={{ color: "white" }}>정산 멤버: </p>
        {props.userList.length > 0
          ? props.userList.map((user) => {
              let nameLength = user.name.length;

              return (
                <Avatar
                  className="avatar"
                  sx={{
                    width: "75px",
                    fontSize: "16px",
                    bgcolor: "#748ba4",
                    borderRadius: "0%",
                    height:'21px'
                  }}
                >
                  {user.name}
                  <div
                    onClick={() => handleXClick(user.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: "14px",
                      position: "relative",
                      color: "red",
                      left: "4px",
                      top: "1px",
                    }}
                  >
                    X
                  </div>
                </Avatar>
              );
            })
          : ""}
          
      </Stack>
    </>
  );
};
export default CalculatorUserList;
