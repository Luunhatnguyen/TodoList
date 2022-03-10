import React from 'react'

function NotifyEdit({closeModalEdit, editModal}) {
  return (
    <div className="modal">
        <div className="modal-container">
            <button  className='modal-close' onClick={()=>closeModalEdit(false)}>X</button>
            <div className="modal-header">
                <h4>Bạn chắc chắn muốn thay đổi Todo này?</h4>
            </div>
            <div className="modal-body">
                <p>Hãy suy nghĩ cho thật kĩ!</p>
            </div>
            <div className="modal-footer">
                <button onClick={()=>closeModalEdit(false)}>Cancel</button>
                <button onClick={() => {editModal(); closeModalEdit(false)}}>Ok</button>
            </div>
        </div>
    </div>      
);
}

export default NotifyEdit