import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";


function Form({type}){
    const navigate=useNavigate()
    const[data,setData]=useState({
        productName : "",
        productDescription : "",
        productCategory : "",
        productBrand : "",
        productPrice : "",
        productImage : ""
    });

    const handleChange = (e)=>{
  
        const{name,value}=e.target;
     console.log(name,value)
     setData({
        ...data,
        [name] : value
     });
    };

    const createProduct = async(e)=>{
        e.preventDefault()
        try {
      const response = await axios.post(
        'https://66dc988a47d749b72acc07ae.mockapi.Products',
        data
      );
      console.log('API response:', response); // Log the response for debugging

      if (response.status === 201 || response.status === 200) {
        // If the request is successful, navigate to the home page
        navigate('/');
      } else {
        alert('Error: Request failed with status code ' + response.status);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('An error occurred while creating the product');
    }
  };




    return(
        <div class="bg-white border border-4 rounded-lg shadow relative m-10">

        <div class="flex items-start justify-between p-5 border-b rounded-t">
            <h3 class="text-xl font-semibold">
                {type} product
            </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
               <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    
        <div class="p-6 space-y-6">
            <form onSubmit={createProduct}>
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                        <input type="text" name="productName" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Product Name" required="" onChange={handleChange}/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
                        <input type="text" name="productCategory" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required="" onChange={handleChange}/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                        <input type="text" name="productBrand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required="" onChange={handleChange}/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Price</label>
                        <input type="number" name="productPrice" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" onChange={handleChange}/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
                        <input type="text" name="productImage" id="image" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="https//exampl.com/hello.png" required="" onChange={handleChange}/>
                    </div>
                    <div class="col-span-full">
                        <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                        <textarea id="productDescription" name="productDescription" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                    </div>
                </div>
                <div class="p-6 border-t border-gray-200 rounded-b">
            <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">{type}</button>
        </div>
            </form>
        </div>
    
      
    
    </div>
    )
}

export default Form