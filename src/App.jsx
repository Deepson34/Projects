

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Edit from './pages/edit/Edit'
import Single from './pages/single/Single'



function App() {
 

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/edit' element={<Edit/>}/>
  <Route path="/singe/:id" element={<Single/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
