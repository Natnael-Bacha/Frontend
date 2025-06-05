import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All',
}



const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
    addTask: (state, action) => {
         state.tasks.push(action.payload)
    },
    editTask: (state, action)=>{
      
        state.tasks = state.tasks.map(task => (
            task.id === action.payload.id? action.payload: task
        ))
    },

    deleteTask: (state, action) => {
          state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
    },

    extraReducers: (builder) => {

    }
})
export const {addTask, editTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer