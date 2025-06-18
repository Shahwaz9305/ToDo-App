import { createSlice } from "@reduxjs/toolkit";
const localStorageKey = 'todoTasks';
const loadTasksFromLocalStorage =()=>{
  try{
      const serializedTasks = localStorage.getItem(localStorageKey);
      if(serializedTasks=== null){
        return [];
      }
      return JSON.parse(serializedTasks);
  }catch(e){
    console.warn("Could not load tasks from local storage",e);
    return [];
  }
};
const saveTasksToLocalStorage = (tasks)=>{
  try{
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(localStorageKey,serializedTasks);
  }catch(e){
    console.warn("Could not save tasks to local storage", e);
  }
};
const initialState = loadTasksFromLocalStorage();

// import data from '../Assets/Data/task_data.json'
const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload);
            saveTasksToLocalStorage(state);
        },
        deleteTask:(state,action)=>{
            const newState = state.filter(task=> task.id !== action.payload);

            saveTasksToLocalStorage(newState);
            return newState;
        },
        toggleTask:(state,action)=>{
            const task = state.find(task=> task.id === action.payload)
            if(task){
                task.completed = !task.completed;
                saveTasksToLocalStorage(state);
            }
        },
        editTaskDescripTion:(state,action)=>{
            const {id,newDescription} = action.payload;
            // console.log(newdescription)
            const taskToEdit= state.find(task=> task.id=== id)
            if(taskToEdit){
                taskToEdit.description = newDescription;
                saveTasksToLocalStorage(state);
            }
        },
    updateTaskImportant: (state, action) => {
      // HIGHLIGHT: updateTaskImportant action - updates the 'isImportant' status
      const { id, isImportant } = action.payload;
      const taskToUpdate = state.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.isImportant = isImportant;
        saveTasksToLocalStorage(state);
      }
    },
    // HIGHLIGHT: New action for toggling completion directly in TaskCard
    toggleTaskCompletion: (state, action) => {
      const { id, completed } = action.payload;
      const taskToUpdate = state.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.completed = completed;
        saveTasksToLocalStorage(state);
      }
    },

    },
});
export const {addTask,deleteTask,toggleTask,editTaskDescripTion,updateTaskImportant,toggleTaskCompletion} = taskSlice.actions;
export default taskSlice.reducer;