import { use, useEffect, useState } from "react"
import axios from "axios"
import EmployeeCard from "../components/EmployeeCard"

const Employees = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers=async()=>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
      
    } catch (error) {
      console.log(error);
      setError("Failed to fetch users")
    }
    finally{
      setLoading(false)
    }

  }

  const filterUsers = users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))

  if(loading){
    return(
      <h1 className="text-3xl text-center mt-10">Loading...</h1>
    )
  }

  if(error){
    return(
      <h1 className="text-3xl text-center mt-10 text-red-500">
        {error}
      </h1>
    )
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">
         <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Employees Dashboard</h1>

         <div className="flex justify-center mb-8">
          <input 
          type="text"
          placeholder="Search employee...."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="w-full max-w-md p-3 rounded-xl border- border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-blue-400" />
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
            
            {
               filterUsers.map((user)=>(
                <EmployeeCard key={user.id} user={user}/>
               ))
            }
         </div>
    </div>
  )
}

export default Employees