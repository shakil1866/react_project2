/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./style.css";
import Menu from "./api.js";
import { useState } from "react";
import MenuCard from "./MenuCard.jsx";
import Navbar from "./Navbar.jsx";

const uniqueList = [...new Set(Menu.map((curEle)=>{
  return curEle.category;
})
),
 "All",
];
console.log(uniqueList);


const Resturant = () => {
const[myData, setData] = useState(Menu)  //hook
const [menuList, setMenuList] = useState(uniqueList) //dobule hook

let filterItem = (category) => {

 if (category === "All"){
  setData(Menu);
  return;
 }
  let updateList = Menu.filter((curEle)=>{
    return curEle.category === category;
  })

  setData(updateList)
}

  return (
    <>
    <Navbar filterItem= {filterItem} menuList = {menuList}/>     {/* same compont dobule props */}
    <MenuCard myData = {myData} />  {/* props */}
    </>
  )
}

export default Resturant; 
