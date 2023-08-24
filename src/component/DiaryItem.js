import React, { useContext } from "react";
 
import DiaryContext from "../context/Diary/DiaryContext";
import Card from 'react-bootstrap/Card';

const DiaryItem = (props) => {
  const  {diary,updatediary} = props;
  const context = useContext(DiaryContext);
  const {deleteDiary} = context;
  return (
    <div >
    
      <Card  style={{ width: '20rem' , margin : "20px" , }}>
      <Card.Body>
        <Card.Title>{diary.DayWas}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <Card.Text>
        {diary.Descryption}
        </Card.Text>
        
        <i className="fa-solid fa-trash  mx-2" onClick={() => {deleteDiary(diary._id)}}></i>
        <i className="fa-regular fa-pen-to-square mx-2 " onClick = {()=>{updatediary(diary)}}></i>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DiaryItem