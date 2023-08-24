import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import DiaryContext from "../context/Diary/DiaryContext";

const AddDiary = () => {
  const context = useContext(DiaryContext);
  const {  addDiary } = context;
  const [diary, setdiary] = useState({ DayWas: "", Descryption: "" });
  const handleclick = (e) => {
    e.preventDefault();
    addDiary(diary.DayWas, diary.Descryption);
    setdiary({DayWas:"" ,Descryption:""})
  };
  const onchange = (e) => {
    setdiary({ ...diary, [e.target.name]: e.target.value });
  };
  return (
    <>

      <h1><p>   My Diary</p></h1>
      <Form className="mb-3  mx-5 d-block m-auto">
        <Form.Group className="mb-3" controlId="DayWas">
          <Form.Label>Day Was</Form.Label>
          <Form.Control
            type="text"
            placeholder="Like Good Bad what? "
            minLength={3}
            name="DayWas"
            value={diary.DayWas}
            onChange={onchange}
          />
          <Form.Text className="text-muted">
            Hey buddy share your day with me
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Descryption">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="h-75 d-inline-block"
            type="text"
            name="Descryption"
            onChange={onchange}
            value={diary.Descryption}
            placeholder="Describe About Your Day"
          />
        </Form.Group>

        <Button disabled ={diary.DayWas.length < 4}variant="primary" type="submit" onClick={handleclick}>
          Save
        </Button>
      </Form>
    </>
  );
};

export default AddDiary;
