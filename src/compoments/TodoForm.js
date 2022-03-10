import React, { useState } from 'react'
import moment from 'moment'

function TodoForm(props, {clearList}) {
    const [text, setText] = useState('')
    const [dates, setDates] = useState('')

    const handleChange = event => {
        setText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: text,
            isComplete: false,
            date: dates,
            dateComplete: ''
        })
        setText('')
    }

    const handleTime = event => {
        const dateMoment = moment().format('DD/MM/YYYY')
        setDates(dateMoment)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='input' type='text' placeholder='Thêm....'name='input' value={text} onChange={handleChange}/>
                <div className='btn-container'>
                    <button className='add-btn btn' onClick={handleTime}>Thêm</button>

                </div>
            </form>

        </div>
    )
}

export default TodoForm