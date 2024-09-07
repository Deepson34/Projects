import axios from "axios"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"

function Home(){
    const [products,setProducts] = useState([])
    const fetchProducts = async()=>{
        const response = await axios.get('https://66dc988a47d749b72acc07ae.mockapi.io/Products')
        if(response.status === 200){
            setProducts(response.data)
        }
    }

    useEffect(()=>{
       fetchProducts()
    },[])

    console.log(products)
    return(
        <>
        <Navbar/>
        <div className="flex space-x-6 space-y-5 mt-5 ml-5 flex-wrap" >
            {
                products.map((product)=>{
                    return(
                        <Card product={product}/>
                    )
                })
            }
     
        </div>
        

</>
    )
}

export default Home