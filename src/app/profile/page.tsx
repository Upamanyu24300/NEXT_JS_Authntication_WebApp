"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"
export default function ProfilePage() {

    const router = useRouter()
    const [data, setData] = useState("nothing")

    const  logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
           router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
            
        }
    }

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me')
            console.log(res.data);
            setData(res.data.data._id)
        } catch (error: any) {
            console.log(error.message);
   
        }
        
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, doloremque!</p>
            {/* <h2 className="p-3 rounded bg-green-200 text-black font-bold">{data === "nothing" ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr /> */}
            <button
            onClick={logout}
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>
            {/* <button
            onClick={getUserDetails}
            className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >GetUser Details</button> */}
        </div>
    )
}