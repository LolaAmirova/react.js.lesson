import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Posts from './Posts'
import { Route, Routes } from 'react-router-dom';
import Comments from './Comments';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';
import Albums from './Albums';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black w-full h-[100vh] px-8' >
        <Navbar />
        <div className='flex justify-between'>
          <Sidebar />


          <Routes>
            <Route path='/' element={<Posts />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/comments' element={<Comments />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
            <Route path='/photos' element={<Photos />}></Route>
            <Route path='/todos' element={<Todos />}></Route>
            <Route path='/users' element={<Users />}></Route>
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
