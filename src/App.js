import React, { useState, Fragment} from "react";
import "./App.css";
import data from"./mock-data.json";
import Employeelist from "./components/test";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData,setAddFormData] = useState({
    Name: " ",
    Surname: " ",
    Date: " ",
    Email: " ",
  })

  const [editFormData, setEditFormData] = useState({
    Name: " ",
    Surname: " ",
    Date: " ",
    Email: " ",
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Surname: addFormData.Surname,
      Date: addFormData.Date,
      Email: addFormData.Email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Surname: editFormData.Surname,
      Date: editFormData.Date,
      Email: editFormData.Email,
    };

    const newContacts = [...contacts];

   const index = contacts.findIndex((contact)=> contact.id === editContactId);

   newContacts[index] = editedContact;

   setContacts(newContacts);
   setEditContactId(null);

  };

  const handleEditClick = (event, contact)=> {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
     Name: contact.Name,
     Surname: contact.Surname,
     Date: contact.Date,
     Email: contact.Email,
    }

    setEditFormData(formValues);
  };

 const handleCancelClick = () => {
   setEditContactId(null);
 }

 const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
 }
      
 return (
    <div className="app-container">
      <h2>Register Here</h2>
      <form onSubmit={handleEditFormSubmit}>
       <table>
          <thead>
           <tr>
             <th>Name</th>
             <th>Surname</th>
             <th>Birthdate</th>
             <th>Email</th>
             <th>Actions</th>
           </tr>
          </thead>
          <tbody>
           {contacts.map((contact) => (
             <Fragment>
               {editContactId === contact.id ? ( 
                <EditableRow 
                 editFormData={editFormData} 
                 handleEditFormChange={handleEditFormChange}
                 handleCancelClick={handleCancelClick}
                />
               ) : (
               <ReadOnlyRow 
                 contact={contact} 
                 handleEditClick={handleEditClick}
                 handleDeleteClick={handleDeleteClick}
               />
               )}
              </Fragment>
           ))}
          </tbody>
        </table>
      </form>
  

    <h2>Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
        type="text"
        name="Name" 
        required="required" 
        placeholder="Enter a name"
        onChange={handleAddFormChange}
      />
      <input 
        type="text"
        name="Surname" 
        required="required" 
        placeholder="Enter a Surname"
        onChange={handleAddFormChange}
      />
      <input 
        type="text"
        name="Date" 
        required="required" 
        placeholder="Enter a Date"
        onChange={handleAddFormChange}
      />
      <input 
        type="email"
        name="Email" 
        required="required" 
        placeholder="Enter a Email"
        onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
    </form>
   </div>
 );
};

export default App;
