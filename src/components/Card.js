import React, {useState}from 'react';
import EditTask from "../modals/EditTask"
const Card = ({taskObject, index, deleteTask, updateListArray}) =>{
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    const toggle = () => {
        setModal(!modal);
    }
    const updateTask =(object) =>{
        updateListArray(object, index);
    }
    const handleDelete = ()=>{ 
        deleteTask(index)
    }
    return (
        <div class = "card-wrapper mr-4">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObject.Name}</span>
                <p className = "mt-3">{taskObject.Description}</p>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-4" style={{"padding-right": 8,"color" : colors[index%5].primaryColor ,"cursor": "pointer"}} onClick={() => setModal(true)} ></i>
                    <i class="fas fa-trash-alt mr-4" style = {{"color" : colors[index%5].primaryColor ,"cursor": "pointer"}} onClick={handleDelete} ></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObject = {taskObject}/>
        </div>
    );
};

export default Card;