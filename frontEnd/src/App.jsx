import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import EditPage from './Pages/EditPage'

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
          <div className="container mx-auto p-2">
              <Link to="/">
                <h2 className="text-white text-2xl font-bold">React Crud</h2>
              </Link>
          </div>
      </nav>
    <div className="container mx-auto p-2 h-full">
         <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path='/create' element={<CreatePage/>}></Route>
            <Route path='/edit' element={<EditPage/>}></Route>
          </Routes>
    </div>

      
    </div>
  )
}

export default App