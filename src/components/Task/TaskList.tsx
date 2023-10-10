'use client'
import React, { useState } from 'react'
import Task from './Task'
import AddTask from './AddTask'

const TaskList = ({ allTask }: any) => {
    const [tasks, setTasks] = useState(allTask)
    const [addtask, setAddTask] = useState(false)


    console.log("task", tasks)

    const handleDelete = (id: any) => {
        const updatedTasks = tasks.filter((task: any) => task.id !== id);
        setTasks(updatedTasks);
    }

    const handleAdd = () => {
        setAddTask(true)
    }

    return (
        <div>
            <div className='text-right'>
                <button className='px-4 py-2 border bg-amber-500 rounded-md' onClick={handleAdd}>Add a task</button>
            </div>
            <div className='mt-2'>
                {tasks.map((task: any, index: number) => (
                    <Task task={task} key={index} handleDelete={handleDelete} />
                ))}
            </div>
            {
                addtask && <AddTask  setAddTask={setAddTask} setTasks={setTasks} tasks={tasks}/>
            }
        </div>
    )
}

export default TaskList
