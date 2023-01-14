import React from 'react'
import { SidebarData } from './SidebarData'


 function SideBar() {
  console.log(SideBar,"link");
  return (
    <div className='sidebar'>
      <ul>
        
       {SidebarData.map((val, key) => {
        console.log("val", val);
        return (
<li 
key={key}
onClick={() =>
{window.location.pathname = val.link}}>

  <div>{val.icon}</div>
  <div>{val.title}</div>

</li>

        )
       }) }
       </ul>
    </div>
  )
}

export default SideBar