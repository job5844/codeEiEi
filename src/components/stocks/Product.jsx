import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [name, setName] = useState('')
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')

    const [data , setData] = useState([])

    const addproduct = async()=>{
        try {
            const url = 'https://workshop-react-api.vercel.app/product'
            const user_id = localStorage.getItem('user_id')

            const res = await axios.post(url,{name,qty,price,image,user_id})
            fetchData()

        } catch (error) {
            console.log(error)
        }
    }

    const fetchData =async() =>{
        try {
            const user_id = localStorage.getItem('user_id')
            const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`

            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)

            
        } catch (error) {

            console.log(error)
            
        }
    }


    const deleteProduct = async(id) =>{
        try {
            const url = `https://workshop-react-api.vercel.app/product/${id}`
            const res = await axios.delete(url)
            
            fetchData()
        } catch (error) {
            
        }
    }

    useEffect(()=>{  fetchData()  },[])


    return (

        <div>
            {/* name : {name} <br />
            qty : {qty} <br />
            price : {price} <br />
            image : {image} <br /> */}
            <div>
                <div className='bg-slate-50 rounded-lg shadow-lg m-10 p-5 flex justify-center items-center'>
                    <input placeholder='ชื่อสินค้า' className='border border-gray-400 py-2 m-4' type="text" name='name' onChange={(e) => setName(e.target.value)} />
                    <input placeholder='จำนวน' className='border border-gray-400 py-2 m-4' type="number" name='qty' onChange={(e) => setQty(e.target.value)} />
                    <input placeholder='ราคา' className='border border-gray-400 py-2 m-4' type="number" name='price' onChange={(e) => setPrice(e.target.value)} />
                    <input placeholder='รูปภาพ' className='border border-gray-400 py-2 m-4' type="text" name='image' onChange={(e) => setImage(e.target.value)} />
                    <button className='bg-purple-500 text-white py-2 px-4' onClick={addproduct}>บันถึก</button>
                </div>
            </div>





            <div className='bg-white rounded-lg shadow-lg m-10 p-5'>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                        แก้ไข / ลบ
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            { data.map((item,index) =>( 
                            <tr key={index}>
                                <td>
                                    <img className = "w-40 " src = {item.image} alt=""/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick ={()=>deleteProduct(item.id)} className='bg-red-200 rounded-lg shadow-lg m-3 px-3 py-3'>ลบ</button>
                                </td>

                            </tr>
                            )) } 


                            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    <button className='bg-green-200 rounded-lg shadow-lg m-3 px-2 py-3'>แก้ไข</button>
                                    <button className='bg-red-200 rounded-lg shadow-lg m-3 px-3 py-3'>ลบ</button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>


    )
}

export default Product