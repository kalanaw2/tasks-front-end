import TaskList from '@/components/Task/TaskList';
import Image from 'next/image'

export default function Home() {
  const allTask = [
    {
      id: 1,
      title: "Milan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Bari",
      description:
        "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Milan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className='my-2 px-5'>
      <h1 className='text-center text-xl font-bold'>Your Task List</h1>
      <div className='container mx-auto mt-2'>
        <TaskList  allTask={allTask}/>
      </div>
    </div>
  )
}
