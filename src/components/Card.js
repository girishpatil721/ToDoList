import React, {useState} from 'react';
import EditTaskPopup from '../models/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
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

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"margin" : "10px","color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTaskPopup modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;


// import React, { useState } from 'react';
// import EditTaskPopup from '../models/EditTask';

// const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
//   const [modal, setModal] = useState(false);

//   const colors = [
//     {
//       primaryColor: "#5D93E1",
//       secondaryColor: "#ECF3FC"
//     },
//     {
//       primaryColor: "#F9D288",
//       secondaryColor: "#FEFAF1"
//     },
//     {
//       primaryColor: "#5DC250",
//       secondaryColor: "#F2FAF1"
//     },
//     {
//       primaryColor: "#F48687",
//       secondaryColor: "#FDF1F1"
//     },
//     {
//       primaryColor: "#B964F7",
//       secondaryColor: "#F3F0FD"
//     }
//   ];

//   const toggle = () => {
//     setModal(!modal);
//   };

//   const updateTaskOnServer = async (updatedTaskObj) => {
//     try {
//       // Replace with your API endpoint for updating a task
//       const response = await fetch(`https://your-api-endpoint/update-task/${taskObj.id}`, {
//         method: 'PUT', // Use PUT or PATCH depending on your API design
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedTaskObj),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update task');
//       }

//       // Assuming the server responds with the updated task object
//       const updatedTask = await response.json();
//       return updatedTask;
//     } catch (error) {
//       console.error('Error updating task:', error);
//       throw error;
//     }
//   };

//   const updateTask = async (updatedTaskObj) => {
//     try {
//       const updatedTask = await updateTaskOnServer(updatedTaskObj);
//       // Update the taskObj with the updated values
//       updateListArray(updatedTask, index);
//       toggle(); // Close the modal after updating
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleDeleteOnServer = async () => {
//     try {
//       // Replace with your API endpoint for deleting a task
//       const response = await fetch(`https://your-api-endpoint/delete-task/${taskObj.id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete task');
//       }

//       // No need to parse the response since you're deleting the task
//       deleteTask(index);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleDelete = () => {
//     handleDeleteOnServer();
//   };

//   return (
//     <div className="card-wrapper mr-5">
//       <div className="card-top" style={{ "backgroundColor": colors[index % 5].primaryColor }}></div>
//       <div className="task-holder">
//         <span className="card-header" style={{ "backgroundColor": colors[index % 5].secondaryColor, "borderRadius": "10px" }}>{taskObj.Name}</span>
//         <p className="mt-3">{taskObj.Description}</p>

//         <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
//           <i className="far fa-edit mr-3" style={{ "margin": "10px", "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
//           <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
//         </div>
//       </div>
//       <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
//     </div>
//   );
// };

// export default Card;
