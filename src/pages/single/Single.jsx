import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function Single(){
    const {id}=useParams()
    const navigate=useNavigate()
    const[product,setProduct]=useState({
      productName : "sjakhjkashd",
      productDescription: "ahjsdhda",
      productprice : "123"
    })
    const fetchProduct =async()=>{
        const response = await axios.get("https://66dc988a47d749b72acc07ae.mockapi.io/Products/"+id)
        if(response.status === 200){
            setProduct(response.data)
        }
    }

    const deleteMe =async()=>{
      const response = await axios.get("https://66dc988a47d749b72acc07ae.mockapi.io/Products/"+id)
      if(response.status === 200){
        navigate("/")
      }else{
        alert("not delete!!!")
      }
  }



    useEffect(()=>{
        fetchProduct()
    },[])
    return (
        <>
        <Navbar/>

        <div class="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img class="object-cover h-64 w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Converse sneakers" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">{product.productName}</h2>
      <span class="font-normal text-gray-600 dark:text-gray-300">{product.productDescription}</span>
      <span class="font-semibold text-gray-800 dark:text-gray-50">${product.productPrice}</span>
    </div>



    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
    <div class="flex space-x-4">
   <Link to='/edit'>
   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit
    </button>
   </Link>

    <Link>
    <button onClick={deleteMe} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
    </button>
    </Link>
    </div>
    </div>
  </article>
</div>

        </>
    )
}

export default Single