import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse } from 'reactstrap';

const CreateTask= ({modal, toggle, save})=>{
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

  const handleSave = () =>{
    let taskObject = {}
    taskObject["Name"] = taskName
    taskObject["Description"] = description
    save(taskObject)
  }
    return(
      <Modal isOpen={modal} toggle={Collapse}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
      <Button color="danger" onClick={handleSave}>Create</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
</Modal>
    );
};

export default CreateTask;