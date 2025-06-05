import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../Utilities/taskSlice'
import { Trash2Icon } from 'lucide-react'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  const [checkedTasks, setCheckedTasks] = useState({})
  const [statusFilter, setStatusFilter] = useState('All') 

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const toggleCheckbox = (id) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

 
  const filteredTasks =
    statusFilter === 'All'
      ? tasks
      : tasks.filter((task) => task.status === statusFilter)

  return (
    <div className='w-full'>
  
      <div className='mb-4 flex justify-end'>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
        >
          <option value='All'>All</option>
          <option value='To Do'>To Do</option>
          <option value='In Progress'>In Progress</option>
          
        </select>
      </div>

      <ul className='space-y-4'>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className='bg-white p-4 rounded-md shadow-sm flex justify-between items-center'
          >
            <div>
              <h3
                className={`font-semibold ${
                  checkedTasks[task.id] ? 'line-through text-gray-400' : ''
                }`}
              >
                {task.Task}
                <p className='mt-1 text-sm font-semibold'>
                  Status:{' '}
                  <span className='italic underline'>{task.status}</span>
                </p>
              </h3>
            </div>

            <div className='flex space-x-2 items-center'>
              <input
                type='checkbox'
                checked={!!checkedTasks[task.id]}
                onChange={() => toggleCheckbox(task.id)}
                className='w-4 h-4 accent-green-500'
              />
              <Trash2Icon
                onClick={() => handleDelete(task.id)}
                className='text-black cursor-pointer hover:text-red-700 transition'
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
