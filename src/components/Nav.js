import React from 'react'
import { woLabel, wLabel } from './data/navdata.js'
import { FaShopify } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';

const Nav = () => {
  return (
    <nav className='flex justify-between px-8 pt-4 bg-black text-white'>
      {/* logo heading */}
        <div className='logos flex'>
          <h2 className='mr-2.5'>Meta Shop 3D</h2>
          <FaShopify/>
        </div>

        {/* menus */}
        <div className='menu-bar'>
          <ul className='inline-flex'>
            {
              woLabel.map((obj) => {
                const {name} = obj;
                return (
                  <li><a href='/' className='mx-5'>{name}</a></li>
                )
              })
            }
            {
              wLabel.map((obj, index) => {
                const {name} = obj;
                return (
                  <li className='dropdown'>
                    {name} <RiArrowDownSFill/> 
                    <div className='submenu'>
                      <ul>
                        {
                          obj.subLinks.map((ob)=>{
                            return <li><a href='/'>{ob.logo} {ob.site}</a></li>
                          })
                        }
                      </ul>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
        {/* buttons */}
        <div>
          <button>Sign Up</button>
          <button className='ml-6'>Download</button>
        </div>
    </nav>
  )
}

export default Nav