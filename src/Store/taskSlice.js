import { createSlice } from "@reduxjs/toolkit";
// import data from '../Assets/Data/task_data.json'
const taskSlice = createSlice({
    name:"tasks",
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload);
        },
        deleteTask:(state,action)=>{
            return state.filter(task=> task.id !== action.payload);
        },
        toggleTask:(state,action)=>{
            const task = state.find(task=> task.id === action.payload)
            if(task){
                task.completed = !task.completed;
            }
        },
        editTaskDescripTion:(state,action)=>{
            const {id,newDescription} = action.payload;
            // console.log(newdescription)
            const taskToEdit= state.find(task=> task.id=== id)
            if(taskToEdit){
                taskToEdit.description = newDescription;
            }
        },
    updateTaskImportant: (state, action) => {
      // HIGHLIGHT: updateTaskImportant action - updates the 'isImportant' status
      const { id, isImportant } = action.payload;
      const taskToUpdate = state.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.isImportant = isImportant;
      }
    },
    // HIGHLIGHT: New action for toggling completion directly in TaskCard
    toggleTaskCompletion: (state, action) => {
      const { id, completed } = action.payload;
      const taskToUpdate = state.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.completed = completed;
      }
    },

    },
});
export const {addTask,deleteTask,toggleTask,editTaskDescripTion,updateTaskImportant,toggleTaskCompletion} = taskSlice.actions;
export default taskSlice.reducer;