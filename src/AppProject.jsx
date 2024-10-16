import { React, useState } from 'react'

const AppProject = () => {
    const [title, settitle] = useState("");
    const [tasks, settasks] = useState([]);

    const TaskHandler = (e) => {
        e.preventDefault();
        const newTask = { title, completed: false }
        // const copytask =[...tasks]
        // copytask.push(newTask)
        // settasks(copytask)

        settasks([...tasks, newTask]);
        settitle("");
    }

    const CompleteHandler = (e, i) =>{
        const copytasks = [...task];
        copytasks[i].completed = !copytasks[i].completed;
        settasks(copytasks);
    };

    const DeleteHandler = (e, i) =>{
    //     const copytasks = [...tasks];
    //     copytasks.splice(i, 1)
    //     settasks(copytasks)

    settasks(tasks.filter((tasks, index) => index !== i));
    };

    let rendertasks = (
        <h1 className='text-orange-600 text-2xl font-extrabold text-center mt-10'>
            No pending Tasks
        </h1>
    );
    
    if(tasks.length > 0){
        rendertasks = tasks.map((task, index) =>{
            <li key={index}
            className='mb-5 flex justify-between items-center border rounded-xl p-5'>
            <div className='flex items-center'>
                <div onClick={(e) = CompleteHandler(e, index)}
                    className={`${task.completed ? "bg-green-400" : "border"} mr-4 rounded-full w-[30px] h-[30px] border-orange-600`}
                ></div>
                <h1 className={` ${task.completed ? "line-through":""} text-2xl font-extrabold text-yellow-100`}>
                    {task.title}
                </h1>
            </div>
            <div className='flex gap-3 text-2xl text-yellow-100'>
                <i className='ri-file-edit-line '></i>
                <i onClick={(e) = DeleteHandler(e, index)} className='ri-delete-bin-3-line'></i>
            </div>
        </li>
        });
    };


    return (
        <div className='overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex items-center flex-col'>
            <div className='mt-[7%] w-[35%]] h-[30vh] border p-10 rounded-3xl flex justify-around items-center'>
                <div className='text-yellow-100'>
                    <h1 className='text-3xl'>LETS TODO</h1>
                    <p>Keeps doing things</p>
                </div>
                <div className='text-3xl m-5 font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-orange-600'>
                   {tasks.filter(task => task.completed).length}/{tasks.length}
                </div>
            </div>
            {/* */}
            <form onSubmit={TaskHandler} className='w-[35%] flex justify-between px-5 my-[2%]'>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    placeholder='write your next task...'
                    className='px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700'
                    type="text"
                />
                <button className='outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600'>
                    <i class="ri-add-line"></i>
                </button>
            </form>
            {/* */}
            <ul className='list-none w-[35%]'> {rendertasks}</ul>
        </div>
    );
};

export default AppProject