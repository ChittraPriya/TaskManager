import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [taskList,setTaskList] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] );

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ''){
            return null;
        }
        const newTask = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTaskList((prev)=> [...prev, newTask]);
        inputRef.current.value = "";

    }

    const deleteTask = (id) => {
        setTaskList((prevTask)=>{
           return prevTask.filter((task) => task.id !== id)
        })
    }

    const toggle = (id) => {
        setTaskList((prevTask)=>{
            return prevTask.map((task)=>{
                if(task.id === id){
                    return {...task, isComplete: !task.isComplete}
                }
                return task;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(taskList))
    },[taskList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt='' />
            <h1 className='text-3xl font-semibold'>Task Manager</h1>
        </div>
        {/* Input box */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your Task' />
            <button onClick={add} className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>
        {/* Task Managers */}
        <div>
            {taskList.map((item, index) => {
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTask={deleteTask} toggle={toggle} />
            })}
           
        </div>
    </div>
  )
}

export default Todo