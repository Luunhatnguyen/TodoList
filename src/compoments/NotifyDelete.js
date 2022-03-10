import React from 'react'

function NotifyDelete({closeModalDelete, deleteModal}) {
  return (
    <div className="modal">
            <div className="modal-container">
                <button  className='modal-close' onClick={()=>closeModalDelete(false)}>X</button>
                <div className="modal-header">
                    <h4>Bạn chắc chắn muốn xóa Todo này?</h4>
                </div>
                <div className="modal-body">
                    <p>Hãy suy nghĩ cho thật kĩ!</p>
                </div>
                <div className="modal-footer">
                    <button onClick={()=>closeModalDelete(false)}>Cancel</button>
                    <button onClick={() => {deleteModal(); closeModalDelete(false)}}>Delete</button>
                </div>
            </div>
        </div>      
  )
}

export default NotifyDelete