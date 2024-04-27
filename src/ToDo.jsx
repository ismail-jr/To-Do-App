import React, { useState } from 'react'

function ToDo(){

    const [task, setTask] = useState(['Go to gym', 'Go to Mosques', 'Eat breakfast']);
    const [newTask, setNewTask] = useState("");

    function handleChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if(newTask.trim() !==("")){
            setTask(task =>[...task, newTask])
            setNewTask("");

        }
    }

    function deleteTask(index){
        const updateTask = task.filter((_, i)=> index!== i);
        setTask(updateTask)

    }

    function toMoveUp(index){
        if(index >0){
            const updateTask = [...task];
            [updateTask[index], updateTask[index-1]]=
            [updateTask[index-1], updateTask[index]];
            setTask(updateTask);
        }

    }

    function toMoveDown(index){
        if(index < task.length -1){
            const updateTask = [...task];
            [updateTask[index], updateTask[index+1]]=
            [updateTask[index+1], updateTask[index]];
            setTask(updateTask);
        }

    }




    return(

        <div className="to-do">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a Task...' value={newTask} onChange={handleChange}/>
                <button className='add-btn' onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((task, index)  =>

                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn' onClick={()=> deleteTask(index)}>❌</button>
                    <button className='moveUp-btn' onClick={()=> toMoveUp(index)}>⬆️</button>
                    <button className='moveDown-btn' onClick={()=> toMoveDown(index)}>⬇️</button>
                </li>
                )}
            </ol>
        </div>


    )
}
export default ToDo