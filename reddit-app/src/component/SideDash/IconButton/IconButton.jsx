import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'; // or 'FaArrowUpRightFromSquare'

const IconButton = () => {
  return (
    <Button variant="dark" className="d-flex align-items-center gap-2  px-3 py-2" style={{width:"200px" ,borderRadius:"12px"}}>
      <FaArrowUpRightFromSquare />
      <span>Popular</span> 
    </Button>
  );
};

export default IconButton;
