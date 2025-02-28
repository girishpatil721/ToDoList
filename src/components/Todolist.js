import React, {useEffect, useState} from 'react';
import CreateTask from '../models/CreateTask';
import Card from './Card';

const Todolist = () => {
    const [model, setModal, closeBtn] = useState(false);
    const [taskList, settaskList] = useState([])
   

    const deleteTask = (index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        settaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!model);
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        settaskList(tempList)
        window.location.reload()
    }

     //the data which is store in local storage will store in local storage
     useEffect(() =>{
        let arr = localStorage.getItem("taskList")
        //it will convert array string in JSON formate
        if(arr){
            let obj = JSON.parse(arr)
            settaskList(obj)
        }
        //will'l pass empty array when the component is rerender then task is save in empty array
    }, [])
    // will passing empty so that our useeffect will run ones


    const saveTask = (taskobj) => {
        let templist = taskList
        templist.push(taskobj)
        //for Local Storage to store the data
        localStorage.setItem("taskList", JSON.stringify(templist))
        settaskList(templist)
        setModal(false)
    }


    return (
        <>
        <div className='header text-center'>
            <h3>CheckList Task</h3>
            <button className='btn btn-primary mt-2' onClick={() => setModal(true)} >Create Task</button>
        </div>
        <div className='task-container'>
            {taskList && taskList.map((obj, index) => <Card taskObj ={obj} index = {index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
        </div>
       <CreateTask toggle = {toggle} model = {model} closeBtn={closeBtn} save={saveTask} />
        </>
    );
};

export default Todolist;

// import React, { useEffect, useState } from 'react';
// import CreateTask from '../models/CreateTask';
// import Card from './Card';

// // Define your API call functions here (similar to the previous response)
// const createTaskOnServer = async (taskObj) => {
//   // ...
//   try {
//     const createdTask = await createTaskOnServer(taskObj);
//     // Update the taskList state with the created task
//     const updatedTaskList = [...taskList, createdTask];
//     setTaskList(updatedTaskList);
//     setModal(false);
//   } catch (error) {
//     console.error('Error creating task:', error);
//   }p=[-]
// };

// const updateTaskOnServer = async (taskObj) => {
//   // ...
//   try {
//     const updatedTask = await updateTaskOnServer(obj);
//     // Update the taskList state with the updated task
//     const updatedTaskList = [...taskList];
//     updatedTaskList[index] = updatedTask;
//     setTaskList(updatedTaskList);
//   } catch (error) {
//     console.error('Error updating task:', error);
//   }
// };

// const deleteTaskOnServer = async (taskId) => {
//   // ...
//   try {
//     await deleteTaskOnServer(taskId);
//     // Update the taskList state after successfully deleting the task
//     const updatedTaskList = [...taskList];
//     updatedTaskList.splice(index, 1);
//     setTaskList(updatedTaskList);
//   } catch (error) {
//     console.error('Error deleting task:', error);
//   }
// };

// const fetchTasksFromServer = async () => {
//   // ...
// };

// const Todolist = () => {
//   const [model, setModal, closeBtn] = useState(false);
//   const [taskList, setTaskList] = useState([]);

//   const deleteTask = async (taskId, index) => {
//     try {
//       await deleteTaskOnServer(taskId);
//       const updatedTaskList = [...taskList];
//       updatedTaskList.splice(index, 1);
//       setTaskList(updatedTaskList);
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggle = () => {
//     setModal(!model);
//   };

//   const updateListArray = async (obj, index) => {
//     try {
//       const updatedTask = await updateTaskOnServer(obj);
//       const updatedTaskList = [...taskList];
//       updatedTaskList[index] = updatedTask;
//       setTaskList(updatedTaskList);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const tasks = await fetchTasksFromServer();
//         setTaskList(tasks);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const saveTask = async (taskObj) => {
//     try {
//       const createdTask = await createTaskOnServer(taskObj);
//       const updatedTaskList = [...taskList, createdTask];
//       setTaskList(updatedTaskList);
//       setModal(false);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   return (
//     <>
//       <div className='header text-center'>
//         <h3>CheckList Task</h3>
//         <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
//       </div>
//       <div className='task-container'>
//         {taskList.map((obj, index) => (
//           <Card
//             key={index}
//             taskObj={obj}
//             index={index}
//             deleteTask={() => deleteTask(obj.id, index)}
//             updateListArray={(updatedObj) => updateListArray(updatedObj, index)}
//           />
//         ))}
//       </div>
//       <CreateTask toggle={toggle} model={model} closeBtn={closeBtn} save={saveTask} />
//     </>
//   );
// };

// export default Todolist;
