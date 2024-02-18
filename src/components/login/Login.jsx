import React, { useState } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const clickLoginApp = async() => {
        try {

            const url = 'https://workshop-react-api.vercel.app/login'
            const res = await axios.post(url,{ username , password })
            const decode = jwtDecode(res.data.token) 
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user_id',decode.user_id)
            setTimeout(() => {
                window.location.reload()
            }, 100);

        } catch (error) {

            console.log(error)

        }
    }

    return (
        <div className=' bg-black h-screen flex justify-center items-center'>
            <div className=' bg-yellow-400 px-40 py-9 rounded-lg shadow-lg'>
                <h2 className=' text-2xl'>
                    เข้าสู่ระบบ
                </h2>
                

                <div className='flex flex-col'   >
                    <input onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username' type='text'
                        className=' border boder- to-green-600 rounded-lg mt-3 p-2'></input>

                    <input onChange={(e)=> setPassword(e.target.value)} placeholder='Password' type='text' className=' border boder- to-green-600 rounded-lg mt-3 p-2'></input>

                    <button onClick={clickLoginApp} className='bg-green-500 border boder- to-green-950 rounded-lg mt-5 p-2'>Login</button>
                </div>
            </div>

        </div>
    )
}


export default Login