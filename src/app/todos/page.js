import DashboardLayout from "../dashboardLayout";
import Link from "next/link";

export default async function Todos() {
    
    async function getData() {
        const res = await fetch("http://localhost:3000/api/todo", {
          next: { tags: ["collection"] },
        });
      
        if (!res.ok) {
          throw new Error("Failed to fecth Data");
        }
      
        return res.json();
      }
   
    return (
    <DashboardLayout>
        <div>
            <h1 className="text-heading heading"></h1>
            <hr></hr>
        <ul>
            {todo?.map((item, index) => {
                return (<li key={index}>{ item.title }</li>)
        })}
        </ul>
      </div>
    </DashboardLayout>
    );
}
