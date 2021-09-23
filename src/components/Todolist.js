import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask"
import Card from "./Card"
const Todolist= () => {

const [modal, setModal] = useState(false);
const [taskList, setTaskList] = useState([])

useEffect(() => {
  let arr= localStorage.getItem("taskList")
  if(arr){
     let object = JSON.parse(arr)
     setTaskList(object)
  }
}, [])

const deleteTask = (index) => {
  let tempList = taskList
  tempList.splice(index, 1)
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

const updateListArray =(object, index) => {
  let tempList = taskList
  tempList[index] = object
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

  const toggle = () => {
  setModal(modal);
 }
  const saveTask = (taskObject) => {
      let tempList = taskList
      tempList.push(taskObject)
      setTaskList(tempList)
      localStorage.setItem("taskList", JSON.stringify(tempList))   // array can not be directly stored so need to be converted into json string so instead of using tempList using JSON.stringify() function
      setModal(false)
      setTaskList(taskList)
  }
    return(
        <>
          <div className= "header text-center">
            <h3>Todo List</h3>
            <button className= "btn btn-outline-danger mt-2" onClick = {() => setModal(true)}>Create Task</button>
          </div>
          <div className="task-container">
          {taskList && taskList.map((object, index) => <Card taskObject={object} index={index} deleteTask= {deleteTask} updateListArray={updateListArray}/>)} 
          </div>
          <CreateTask toggle= {toggle} modal={modal} save={saveTask}/>
        </>

    ); //index is for different colors in card
};

export default Todolist;