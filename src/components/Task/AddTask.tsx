import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ setAddTask,setTasks,tasks }: any) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleClose = () => {
        setAddTask(false)
    }

    const handleAdd = () => {
        const data = {
            id:uuidv4(),
            title:title,
            description:description
        }

        setTasks([...tasks, data]);
        setAddTask(false)

    }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900 bg-opacity-80">
            <div className="py-4 px-4 mx-2 flex flex-col relative bg-white shadow-md rounded-md w-full lg:w-1/3 ">
                <div className="absolute top-4 right-4">
                    <button
                        onClick={handleClose}
                        className="bg-[#c2c2d3] rounded-full w-8 h-8 flex justify-center items-center"
                    >
                        <IoClose className="text-white" />
                    </button>
                </div>

                <div className='mt-4'>
                    <label className="text-sm">Title</label>
                    <input
                        type="text"
                        className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2"
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className='mt-4'>
                    <label className="text-sm">Description</label>
                    <textarea
                        className="w-full px-4 bg-gray-100 rounded-md mt-2"
                        rows={4}
                      value={description}
                    onChange={(e)=>setDescription(e.target.value)}

                    />
                </div>
                <button className='px-4 py-2 border bg-blue-500 rounded-md mt-2' onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AddTask
