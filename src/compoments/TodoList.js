import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Page from './Page'
import moment from 'moment'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [showCompleteTime, setShowCompleteTime] = useState(false)
    const [status, setStatus] = useState('all')
    const [fillterTodos, setFillterTodos] = useState([])
    const [searchTodo, setSearchTodo] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)

    useEffect(() => {
        handleFillter()
    }, [todos, status])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo = [todo,...todos]
        console.log(newTodo.complete)
        setTodos(newTodo)


    }

    const clearList = () => {
        setTodos([])
    }

    const removeTodo = (id) => {
        const newTodo = [...todos].filter(todo => todo.id !== id)
        setTodos(newTodo)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete

                if (todo.isComplete) {
                    handleCompleteTime(id)
                    setShowCompleteTime(true)
                } else {
                    todo.dateComplete=''

                }


            }
            return todo 
        })
        setTodos(updatedTodos)
    }

    const checkAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.isComplete = !todo.isComplete

            if (todo.isComplete) {
                handleCompleteAllTime()
                setShowCompleteTime(true)
            } else {
                todo.dateComplete=''
                setShowCompleteTime(false)
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editValue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if ( todo.id === id) {
                todo.text = editValue
            }
        })
        console.log(newTodos)   
        setTodos(newTodos)
    }



    const handleEditTime = id => {
        const dateMoment = moment().format('DD/MM/YYYY')

        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.date = dateMoment
            }
        })
    }

    const handleCompleteTime = id => {
        const dateMoment = moment().format('DD/MM/YYYY hh:mm')

        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.dateComplete = dateMoment
            }
        })
    }

    const handleCompleteAllTime = () => {
        const dateMoment = moment().format('DD/MM/YYYY hh:mm')

        const newTodos = [...todos]
        newTodos.forEach((todo) => {
                todo.dateComplete = dateMoment
        })
    }

    const handleFillter = () => {
        switch (status) {
            case "complete":
                setFillterTodos(todos.filter(todo => todo.isComplete === true))
                break;
            case "unComplete" :
                setFillterTodos(todos.filter(todo => todo.isComplete === false))
                break;
            default :
                setFillterTodos(todos)
                break;
        }
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const currentPosts = fillterTodos.filter(todoValue => {
        if (searchTodo === '') {
            return todoValue
        } else if (todoValue.text.toLowerCase().includes(searchTodo.toLowerCase())) {
            return todoValue
        }
    })
    .slice(indexOfFirstPost, indexOfLastPost)


    const paginate = pageNumber => setCurrentPage(pageNumber)

    const handlePrev = () => {
        let Prev = currentPage -1
        if (Prev > 0) {
            setCurrentPage(Prev)
        }
    }

    const handleNext = () => {
        let Next = currentPage+1
        if (Next <= Math.ceil(fillterTodos.length / postsPerPage)) {
            setCurrentPage(Next)
        }
    }

    
    return (
        <div>
            <TodoForm onSubmit={addTodo} clearList={clearList}/>
            <div className="clear-container">

                <input type="checkbox" className='checkeAll btn-check' onClick={checkAll}/>
                <label className='label-check-all'>Complete All</label>

            <button className='clear-btn' onClick={clearList}>Clear</button>
            
            </div>
            
            <div className='todo-container-item'>
                {
                    // fillterTodos.filter
                    currentPosts.map( (todo, index) =>(
                        <Todo key={index}  
                        todo={todo} 
                        removeTodo={removeTodo} 
                        checkAll={checkAll} 
                        completeTodo={completeTodo}
                        handleEditTodos={handleEditTodos}
                        handleEditTime={handleEditTime}
                        showCompleteTime={showCompleteTime}
                        />
                    ))
                }
                
            </div>
            <Page postsPerPage={postsPerPage} 
            totalPosts={fillterTodos.length} 
            paginate={paginate}  
            currentPage={currentPage}
            handlePrev={handlePrev}
            handleNext={handleNext}
            />
        </div>
    )
}

export default TodoList