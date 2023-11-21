import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [add,setAdd]=useState(false)
  function handleclick(){
    setAdd(add => !add)
  }

  return (
    <li className={add?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleclick} className="add">{add?"Remove From Cart":"Add To Cart"}</button>
    </li>
  );
}

export default Item;
