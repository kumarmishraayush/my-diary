import { useState } from "react";
import DiaryContext from "./DiaryContext";
import { Navigate } from "react-router-dom";


const DiaryState = (props) => {
  const diaryInitial = []
  const [diarys, setdiary] = useState(diaryInitial);
  // get all diary 




  
  const getDiary = async () => {
    console.log("adding a new diary");

    /// api call for add note
    const response = await fetch(
      "http://localhost:3000/api/diary/fetchdiary",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
             
        },
        
      }
    );
    const json = await response.json()
    console.log(json);
    setdiary(json)
  }
 








  // add diary
  const addDiary = async(DayWas, Descryption) => {
    console.log("adding a new diary");

    /// api call for add note
    const response = await fetch(
      "http://localhost:3000/api/diary/adddiary",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
            
        },
        body: JSON.stringify({DayWas , Descryption}),
      }
    );
    const json = response.json();
    console.log(json);
    const diary = json;
    setdiary(diarys.concat(diary));
  };










  //Delete diary
  const deleteDiary = async(id) => {
    // api call
    console.log(id);
    const response = await fetch(
      'http://localhost:3000/api/diary/deleteDiary/'+id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
             
        },
        
      }
    );
    const json = response.json();
    console.log(json);
    
    console.log("Deleting the node from the node with id" + id);
    const newDiaries = diarys.filter((diary) => {
      return diary._id !== id;
    });
    setdiary(newDiaries);
  };


















  // eddit a diary
  const editDiary = async (id, DayWas, Descryption) => {
    /// api call for edit
    const response = await fetch(
      'http://localhost:3000/api/diary/updateDiary/'+id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZmNhYzM5Njc1NGNkYmFhZDE2MTQ5In0sImlhdCI6MTY4OTMwMzMyNn0.cftVkmmU0YRgsaBRblAeZ0K3DY8o7FvylehFz7cKKus",
        },
        body: JSON.stringify({DayWas ,Descryption}),
      }
      );
      const json = response.json();
      console.log(json);
      let newdiary = JSON.parse(JSON.stringify(diarys))

    for (let index = 0; index < diarys.length; index++) {
      const element = newdiary[index];
      if (element.id === id) {
        newdiary[index].DayWas = DayWas;
        newdiary[index].Descryption = Descryption;
        break;
      }
    }
    
    if(localStorage.getItem('token'))
    {
      getDiary();
    }
    else{
      Navigate("/Login")
    }
    setdiary(newdiary);
  };











  return (
    <DiaryContext.Provider value={{ diarys, addDiary, deleteDiary,getDiary, editDiary }}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryState;
