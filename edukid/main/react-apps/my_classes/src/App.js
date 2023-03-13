import logo from './logo.svg';
import './App.css';
import ClassButton from"./Components/ClassButton";
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {
  const [classes, setClasses] = useState([
    {nameOfClass : "4В класс", classId : nanoid()},
    {nameOfClass : "5В класс", classId : nanoid()},
    {nameOfClass : "6В класс", classId : nanoid()}
  ])
  const [title, setTitle] = useState("")
  const addNewClass = (e) =>{
    e.preventDefault()
    console.log(title)
    const classId = nanoid()
    const newClass = {
      nameOfClass : title,
      classId
    }
    setClasses([...classes, newClass])
    setTitle("")
  }
  return (
    <div className="App">
        {classes.map(classs =>
          <ClassButton btn={classs} key={classs.classId}/>
        )}
        <div className="class-box">
          <form class="student-add">
              <button onClick={addNewClass} class="btn-in-profile" id="class-btn"><img src="/images/svg/plus.svg"/>Добавить класс</button>
              <input 
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" 
              placeholder="Название класса"
              />
          </form>
        </div>
    </div>
  );
}

export default App;
