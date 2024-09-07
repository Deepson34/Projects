import Card from "../../components/Card"
import Navbar from "../../components/Navbar"

function Home(){
    return(
        <>
        <Navbar/>
        <div className="flex space-x-6 mt-5 ml-3">
        <Card/>
        <Card/>
        <Card/>
        </div>
        

</>
    )
}

export default Home