"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Error from "next/error";

export default  function AddTopic() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");


    const router=useRouter();

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if(!title || !description){
        alert("plz Fill Require things");
        return;
    }

    try{
        const res=await fetch("https://next-todo-app-pi/api/topics",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify({title,description}),
        });
         if(res.ok){
            router.push("/");
            router.refresh();
         }
         else{
            throw new Error("failed to create Topic");
         }

    }catch(error){
      console.log(error);
    }
  };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
            <input 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            type="text" placeholder="Topic title"
                className="border border-slate-500 px-8 py-2"
            />

            <input 
             onChange={(e)=>setDescription(e.target.value)}
             value={description}
            type="text" placeholder="Topic Description"
                className="border border-slate-500 px-8 py-2"
            />

            <button type="submit" className="bg-green-600 font-bold text-white w-fit py-3 px-6 rounded-md">Add Topic</button>
        </form>
    )
}