import React, { useState } from "react";


const Todo=()=>{

    const [todo, setTodo] = useState("");

    const [array, setArray] = useState([]);

    const handleChange=(event)=>{
        setTodo(event.target.value);
        
    }

    const handleSave=()=>{
        if(todo != "" && todo.trim().length>0){
            if(array.includes(todo)!=true){
                setArray([...array, todo]);
                console.log(array);
            }
            else{
                alert("This element is already present in the array");
            }
        }

        setTodo("");
    }

    const handleDelete=(index)=>{
        const updateArray = array.filter((elem, id)=>{
           return  index !== id
        })
        setArray(updateArray);
    }


 


    return (
        <>
            <div className="container w-full mt-12 flex justify-center items-center ">
                <div className="todo_container w-[40%] h-[90%] p-4 bg-blue-100 flex flex-col justify-center items-center gap-4 rounded-lg">
                    <h1 className=" mt-2 text-2xl font-bold">iTask - Manage your todos at one place</h1>
                    <h3 className="w-full font-bold">Add a todo</h3>

                    <div className="todo_container_btn w-full flex flex-col justify-center gap-4">

                        <div className="input_text w-full h-9 flex gap-4">
                        <input onChange={()=>{ handleChange(event)}} value={todo}  type="text" className="w-full px-6 border-solid border-2 rounded-xl border-black "  />
                        <button onClick={handleSave} className=" bg-blue-800 text-white rounded-xl p-4 flex justify-center items-center hover:bg-green-600 hover:text-white">Save</button>
                        </div>
                        
                      
  
                    </div>
                    
                    <h3 className="w-full mt-8 font-bold text-xl flex justify-start">Add Todos</h3>

                    {
                        array.map((elem, index)=>{
                            
                            return(
                                <div className="w-full flex justify-between">
                                <p> {elem} </p>
                                <div className="todo_btn">
                                    {/* <button onClick={()=>{handleDone(elem)}} className="mx-3 bg-blue-800 text-white rounded-xl py-1 px-1.5 text-sm">Done</button> */}
                                    <button onClick={()=>{handleDelete(index)}}  className="mx-3 bg-blue-800 text-white rounded-xl py-1 px-1.5 text-sm ">Delete</button>
                                </div>
                       
                                </div>
                            )
                        })
                    }

                   
                    
                    
                    
                    
                </div>
            </div>

        </>
    )
}

export default Todo;