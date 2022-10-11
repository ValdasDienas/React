import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
      return (
        <tr>
            <td>
              <input 
                type="text"
                required="required" 
                placeholder="Enter name..." 
                name="Name"
                value={editFormData.Name}
                onChange={handleEditFormChange}
              ></input>
            </td>
            <td>
              <input 
                type="text"
                required="required" 
                placeholder="Enter surname..." 
                name="Surname"
                value={editFormData.Surname}
                onChange={handleEditFormChange}
              ></input>
            </td>
            <td>
              <input 
                type="text"
                required="required" 
                placeholder="Enter date..." 
                name="Date"
                value={editFormData.Date}
                onChange={handleEditFormChange}
              ></input>
            </td>
            <td>
              <input 
                type="email"
                required="required" 
                placeholder="Enter Email..." 
                name="Email"
                value={editFormData.Email}
                onChange={handleEditFormChange}
              ></input>
            </td>
            <td>
              <button type="submit">Save</button>
              <button type="button"onClick={handleCancelClick}>
                Cancel
              </button>
            </td>
        </tr>
    )
}

export default EditableRow