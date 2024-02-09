 "use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

 export default function EditTopicForm({id,title,description}){
    const [newTitle,setNewTitle]=useState(title);
    const [newDescription,setNewDescription]=useState(description);
  const router=useRouter();


   const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const res=await fetch(`https://next-todo-app-pi.vercel.app/api/topics/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({newTitle,newDescription}),
        });

        if(!res.ok){
            throw new Error("Failed to update topics");
        }
        router.push("/");
        router.refresh();

      } catch (error) {
        console.log(error);
      }
   }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
        <input 
        onChange={(e)=>setNewTitle(e.target.value)}
        value={newTitle}
        type="text" placeholder="Topic title"
            className="border border-slate-500 px-8 py-2"
        />

        <input 
        onChange={(e)=>setNewDescription(e.target.value)}
        value={newDescription}
        type="text" placeholder="Topic Description"
            className="border border-slate-500 px-8 py-2"
        />

        <button className="bg-green-600 font-bold text-white w-fit py-3 px-6 rounded-md">Update  Topic</button>
    </form>
    );
 }