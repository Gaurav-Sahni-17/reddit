import React from 'react'
import IconButton from '../SideDash/IconButton/IconButton.jsx';
import PopularButton from '../SideDash/PopularButton/PopularButton.jsx';
import {Col} from "react-bootstrap";
export const SideDash = () => {
  return (
   <>
   <Col className='bg-black ' style={{width:"250px", height:"auto",display:"grid", gap:"10px" , justifyContent:"center"}}>
     <PopularButton/>
     <div style={{width:"200px",height:"1px",backgroundColor:"gray"}}></div>
     <IconButton/>
      <PopularButton/>
     <IconButton/> <PopularButton/>
     <IconButton/> <PopularButton/>
     <IconButton/> <PopularButton/>
     <IconButton/> <PopularButton/>
     <IconButton/>
   </Col>
   
   </>
  )
}
