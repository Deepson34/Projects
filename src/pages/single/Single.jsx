import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"

function Single(){
    return (
        <>
        <Navbar/>

        <div class="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img class="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Converse sneakers" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">Converse Sneakers</h2>
      <span class="font-normal text-gray-600 dark:text-gray-300">High Top (Lemon Yellow)</span>
      <span class="font-semibold text-gray-800 dark:text-gray-50">$60</span>
    </div>

    <div class="flex gap-4 mt-4 px-4">
      <span class="sr-only">Colors available</span>

      <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

      <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

      <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

      <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
    </div>

    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
    <div class="flex space-x-4">
   <Link to='/edit'>
   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit
    </button>
   </Link>

    <Link>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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