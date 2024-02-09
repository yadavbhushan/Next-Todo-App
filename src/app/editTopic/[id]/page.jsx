import EditTopicForm from "@/app/component/EditTopicForm";

 const getTopicByid=async (id)=>{
    try {
        const res=await fetch(`https://next-todo-app-pi.vercel.app/api/topics/${id}`,{
            cache:"no-store",
        });

        if(!res.ok){
            throw new Error("Failed to fetch topic")
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
 }

export default async function EditTopic({params}){
    const {id}=params;
   // console.log(id);
   const {topic}=await getTopicByid(id);
   const {title,description}=topic;

    return <EditTopicForm  id={id} title={title} description={description}  />;
}