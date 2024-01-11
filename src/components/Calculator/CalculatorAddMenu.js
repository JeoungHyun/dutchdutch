import React, { useState } from "react";
import Graph from "graphlib";
import { Box, Button, Stack, Modal, Input, FormControl, Select, MenuItem, Avatar } from "@mui/material";
import CalculatorHistory from "./CalculatorHistory";

const CalculatorAddMenu = (props) => {
  const [calList, setCalList] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [calHistory, setCalHistory] = useState([]);
  const [modalOpen, setMdoalOpen] = useState(false);
  const [pick, setPick] = useState("");
  const [userList2, setUserList2] = useState([]);

  const [price,setPrice] = useState(0);
  
  const regExp = new RegExp(/^[0-9,]+$/);
  const  priceChange = (e) =>{

    if((regExp.test(e.target.value))){
      setPrice(e.target.value);
    }
    
    
  }

  


  const handlePick = (e) => {
    setPick(() => e.target.value);
    setUserList2(() => {
      return props.userList.filter((i) => {
        return !(i.id === e.target.value);
      });
    });
  };

  const modalBoxstyle = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 12,
    p: 2,
  };

  const handleXClick = (d) => {
    console.log(d);
    props.setUserList((list) => {
      return list.filter((user) => {
        return user.id !== d;
      });
    });
  };



  const handleCal = () => {};
  return (
    <Box>
      <Stack direction="row" justifyContent="flex-end">
        {/* <Button onClick={handleCal}>계산하기</Button>{" "} */}
        <Button
          onClick={() => {
            setMdoalOpen(true);
          }}
        >
          정산 내역 추가
        </Button>
      </Stack>
      <Box
        sx={{
          paddingLeft: "15px",
          backgroundColor: "#2b2f6a",
          color: "white",
          fontSize: "20px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        정산내역
      </Box>
      <Modal
        open={modalOpen}
        onClose={() => {
          setMdoalOpen(false);
          setPrice();
          setPick();
        }}
      >
        <Box sx={modalBoxstyle}>
          <Stack spacing={2}>
          <Stack direction="row"sx={{height:'55px'}} spacing={1} >
            <p style={{width:'80px',display:'flex',justifyContent:'center', alignItems:'center'}}>제목: </p>
            <Input></Input>
          </Stack>
          <Stack direction="row" sx={{height:'55px'}} spacing={1}  >
            <p style={{width:'80px' ,display:'flex',justifyContent:'center', alignItems:'center'}}>결제자: </p>
            <FormControl sx={{  minWidth: 190 }}>
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
          </Stack>
          <Stack direction="row" sx={{height:'50px'}} spacing={1}>
            <p style={{width:'80px', align:'center' ,display:'flex',justifyContent:'center', alignItems:'center'}}>결제 금액: </p>
            <Input dir="rtl" value={price} onChange={priceChange} sx={{textAlign:'end'}}></Input>
          </Stack>
          <Stack direction="row" sx={{alignItems:'center'}} >
          <p>정산 멤버: </p>&nbsp;&nbsp;&nbsp;
        {props.userList.length > 0
          ? props.userList.map((user) => {
              

              return (
                <Avatar
                  className="avatar"
                  sx={{
                    width: "75px",
                    fontSize: "16px",
                    bgcolor: "#748ba4",
                    borderRadius: "0%",
                    height:'21px',
                    margin:'0px 3px'
                  }}
                >
                  {user.name}
                  <div
                    onClick={() => handleXClick(user.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: "18px",
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
          </Stack>
        </Box>
      </Modal>
      <Box
        sx={{
          minHeight: "240px",
        }}
      >
        {calList.length > 0 &&
          calList.map((data) => {
            return (
              <CalculatorHistory
                index={data.id}
                key={data.id}
                userList={props.userList}
                setCalHistory={setCalHistory}
              />
            );
          })}
      </Box>
    </Box>
  );
};
export default CalculatorAddMenu;
