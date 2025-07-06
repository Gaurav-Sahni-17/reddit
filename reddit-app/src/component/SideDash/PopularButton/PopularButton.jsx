import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'; // or 'FaArrowUpRightFromSquare'

const PopularButton = () => {
  const[click,setClick]=useState("notclick");
  const onTab = () =>{
    setClick("onclick");
  }
  return (
    <Button onClick={onTab} className={click} >
      <FaArrowUpRightFromSquare />
      <span>Popular</span> <span style={{color:"red"}}>BETA</span>
    </Button>
  );
};

export default PopularButton;
