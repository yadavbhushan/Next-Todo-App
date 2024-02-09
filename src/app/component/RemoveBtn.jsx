"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"
export default function RemoveBtn({id}){
  const router=useRouter();



    const removeTopic=async ()=>{
        const confirmed=confirm("Are you sure want to delete?");

        if(confirmed){
            const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method:"DELETE",
            });
            if(res.ok){
            router.refresh();
            }
        }
    };


    return (
        <button onClick={removeTopic} className=" text-red-400">
           <HiOutlineTrash size={24}/>
        </button>
    )
}