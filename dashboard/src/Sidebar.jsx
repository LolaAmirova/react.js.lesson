import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='bg-white w-[20%] rounded-[20px] h-[80vh] mt-4'>
            <NavLink to='/posts'>   <div>
                <img src="" alt="" />
                <p>Posts</p>
            </div></NavLink>



            <NavLink to='/comments'> <div>
                <img src="" alt="" />
                <p>Comments</p>
            </div></NavLink>

            <NavLink to='/albums'>
                <div>
                    <img src="" alt="" />
                    <p>Albums</p>
                </div>
            </NavLink>
            <NavLink to='/photos'>
                <div>
                    <img src="" alt="" />
                    <p>Photos</p>
                </div>
            </NavLink>
            <NavLink to='/todos'>
                <div>
                    <img src="" alt="" />
                    <p>Todos</p>
                </div>
            </NavLink>
            <NavLink to='/users'>
                <div>
                    <img src="" alt="" />
                    <p>Users</p>
                </div>
            </NavLink>


        </div>
    )
}

export default Sidebar