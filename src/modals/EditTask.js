import React, {useState, useEffect} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask= ({modal, toggle, updateTask, taskObject})=>{
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const handleChange = (e) =>{
    //const name=e.target.name
    //const value=e.target.value
    const {name,value} = e.target
    if (name ==="taskName"){
      setTaskName(value)
    }
    else{
      setDescription(value)
    }
  }
  useEffect(() => {
    setTaskName(taskObject.Name)
    setDescription(taskObject.Description)
},[])

const handleUpdate = (e) => { //event parameter by default we use "e" in ()
    e.preventDefault();
    let tempObject = {}
    tempObject['Name'] = taskName
    tempObject['Description'] = description
    updateTask(tempObject)
}
    return(
      <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update</ModalHeader>
      <ModalBody>
      
              <div className = "form-group">
                  <label>Task Name</label>
                  <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
              </div>
              <div className = "form-group">
                  <label>Description</label>
                  <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
              </div>
          
      </ModalBody>
      <ModalFooter>
      <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
</Modal>
    );
};

export default EditTask;