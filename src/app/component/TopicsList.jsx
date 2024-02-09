import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// https://next-todo-app-pi.vercel.app/
const getTopic = async () => {
  try {
    const res = await fetch("https://next-todo-app-pi.vercel.app/api/topics",
      { cache: "no-store", });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return ("Error loading Topics", error);
  }
}

export default async function TopicsList() {
  const { topics } = await getTopic();

  return (
    <>
      {topics.map((key,i) => (

        <div key={i} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start bg-slate-200">
          <div>
            <h2 className="font-bold text-2xl">{key.title}</h2>
            <div className="pt-2  font-mono">
              <h3>{key.description}</h3>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={key._id} />
            <Link href={`/editTopic/${key._id}`}> <HiPencilAlt size={24} /></Link>
          </div>

        </div>
      ))}
    </>
  );
}