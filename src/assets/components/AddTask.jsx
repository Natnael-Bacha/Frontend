import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid4} from 'uuid'
import { addTask } from '../Utilities/taskSlice'
import {Plus} from 'lucide-react'
import TaskList from './TaskList'
const AddTask = () => {

      const [Task, setTask] = useState('')
    const [status, setStatus] = useState('') 
    
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask ={
            id:uuid4(),
            Task,
           status
        }
        dispatch( addTask(newTask))
        setTask('')
        setStatus('To Do')
    }


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='w-3/4  height-100   flex-col items-center justify-center shadow-2xl'>
         <div className='w-full h-30 flex items-center justify-center '>
            <p className='text-2xl font-extrabold text-center'>Task Manager</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center mb-10'> 
            <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-row'>
                  <div className="text w-100 h-10 border border-gray-300 rounded-sm self-center">
               <input 
    type="text" 
    value={Task}
   onChange={(e) => setTask(e.target.value)}
   required
    className="w-full h-full border-none outline-none px-2" 
    placeholder='Add new task...'
  />
</div>  


         
                  
            

               <div className='ml-2'>
    <select 
      value={status}
    onChange={(e) => setStatus(e.target.value)}
    name="" id="" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'>
  
       <option value="To Do">To Do</option>
       <option value="In Progress">In Progress</option>
       
</select>
    </div>

      <button type='submit' className='flex items-center justify-center ml-2 w-10 bg-[#1D4ED8] text-white py-2 rounded-md hover:bg-indigo-700'>
             <Plus color='white' size={20}/>
           </button>
            </div>
              
</form>
        </div>
        <TaskList/>
      </div>
                   
    </div>
  )
}

export default AddTask
