import React, { useState } from 'react';
import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({model, toggle, closeBtn, save}) => {

  const [taskName, setTaskName] = useState(' ');
  const [description, setdescription] = useState(' ');


  const handlechange = (e) =>{
    // const name = e.target.name
    // const value = e.target.value

    const {name, value} = e.target

    if(name === "taskName"){
      setTaskName(value)
    }else{
      setdescription(value)
    }

  }
  const handleSave = () => {
    let taskobj = {}
    taskobj["Name"] = taskName
    taskobj["Description"] = description
    save(taskobj)
}

    return (
        <Modal isOpen={model} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Task
        </ModalHeader>
        <ModalBody>
         <form>
          <div className='form-group'>
            <label>Task Name</label>
              <input type='text' className='form-control' value={taskName} onChange={handlechange} name='taskName' />
          </div>
          <div className='form-group'>
            <label>Description</label>
              <textarea rows={5} className='form-control' value={description} onChange={handlechange} name='taskdescription' />
          </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave} >
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreateTask;


// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const CreateTask = ({ model, toggle, closeBtn, save }) => {
//   const [taskName, setTaskName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "taskName") {
//       setTaskName(value);
//     } else if (name === "taskdescription") {
//       setDescription(value);
//     }
//   };

//   const handleSave = async () => {
//     try {
//       // Create a task object from the form data
//       const taskObj = {
//         Name: taskName,
//         Description: description
//       };

//       // Call the save function to create a new task on the server
//       await save(taskObj);

//       // Reset the form fields
//       setTaskName('');
//       setDescription('');

//       // Close the modal
//       toggle();
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   return (
//     <Modal isOpen={model} toggle={toggle}>
//       <ModalHeader toggle={toggle} close={closeBtn}>
//         New Task
//       </ModalHeader>
//       <ModalBody>
//         <form>
//           <div className='form-group'>
//             <label>Task Name</label>
//             <input
//               type='text'
//               className='form-control'
//               value={taskName}
//               onChange={handleChange}
//               name='taskName'
//             />
//           </div>
//           <div className='form-group'>
//             <label>Description</label>
//             <textarea
//               rows={5}
//               className='form-control'
//               value={description}
//               onChange={handleChange}
//               name='taskdescription'
//             />
//           </div>
//         </form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSave}>
//           Create
//         </Button>{' '}
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default CreateTask;
