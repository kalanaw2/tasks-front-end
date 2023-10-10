import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Task = ({ task,handleDelete }: any) => {
    
   

    return (
        <div className='flex gap-4 border-b px-4 py-2 shadow-lg bg-gradient-to-r from-amber-200 to-amber-100 rounded-md' >
            <div className='grow'>
                <div className='text-lg font-semibold'>{task.title}</div>
                <div className='text-md'>{task.description}</div>
            </div>
            <div className='flex justity-center items-center'>
                <FaTrash className="w-3 h-3 fill-red-500 cursor-pointer" onClick={()=>handleDelete(task.id)}/>
            </div>
        </div>
    )
}

export default Task
