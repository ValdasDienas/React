import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
      <tr>
         <td>{contact.Name}</td>
         <td>{contact.Surname}</td>
         <td>{contact.Date}</td>
         <td>{contact.Email}</td>
         <td>
             <button type="button" 
              onClick={(event)=> handleEditClick(event, contact)}
            >
              Edit
            </button>
            <button type="button" onClick={()=> handleDeleteClick(contact.id)}>
              Delete
            </button>
         </td>
      </tr>
  );
};

export default ReadOnlyRow;