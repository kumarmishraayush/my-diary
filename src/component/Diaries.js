import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DiaryContext from "../context/Diary/DiaryContext";
import DiaryItem from "./DiaryItem";
import AddDiary from "./AddDiary";

import Form from "react-bootstrap/Form";

const Diaries = () => {
  const context = useContext(DiaryContext);
  const { diarys, getDiary , editDiary } = context;
  const [diary, setdiary] = useState({ id: "", eDayWas: "", eDescryption: "" });
   useEffect(() => {
    getDiary();
   }, []);

  const ref = useRef("null");
  const refclose = useRef("null");
  const updatediary = (currentDiary) => {
    ref.current.click();
    setdiary({
      id: currentDiary._id,
      eDayWas: currentDiary.DayWas,
      eDescryption: currentDiary.Descryption,
    });
  };
  const handleclick = (e) => {
    console.log("update kar rha hu", diary);
    editDiary(diary.id , diary.eDayWas ,diary.eDescryption)
    refclose.current.click();
  };
  const onchange = (e) => {
    setdiary({ ...diary, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(diarys)

  return (
    <>

      
        
      
      <AddDiary />
      <Button
        ref={ref}
        className="d-none"
        variant="primary"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Diary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-3 w-50  d-block m-auto">
            <Form.Group className="mb-3" controlId="eDayWas">
              <Form.Label>Day Was</Form.Label>
              <Form.Control
                type="text"
                placeholder="Like Good Bad what? "
                name="eDayWas"
                minLength={3}
                required
                value={diary.eDayWas}
                onChange={onchange}
              />
              <Form.Text className="text-muted">
                Hey buddy share your day with me
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="eDescryption">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="h-75 d-inline-block"
                type="text"
                value={diary.eDescryption}
                name="eDescryption"
                onChange={onchange}
                minLength={3}
                placeholder="Describe About Your Day"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" ref ={refclose} onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled = {diary.eDayWas.length < 3} onClick={handleclick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row row-cols-auto ">
        {diarys.length === 0 && '*#@%$@^%%$@#@$^%&^$Bhai pahle likh to lo'}
        {
        diarys.map((diarys) => {
          return (
            <DiaryItem
              key={diarys._id}
              updatediary={updatediary}
              diary={diarys}
            />
          );
        })}
      </div>
    
 catch
 {

 }
    </>
  );
};

export default Diaries;
