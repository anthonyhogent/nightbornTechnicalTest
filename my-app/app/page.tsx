"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import listItem from "./listItem";


export default function Home() {
  const [value, setValue] = useState([]);
  fetch('https://dummyjson.com/todos?limit=10')
.then(res => res.json())
.then(data=>setValue(data.todos));

console.log(value)
value.map(e=>console.log(e.todo));

  return (
    <>
    <ul>
      {value.map(e=><li key={e.todo}>{e.todo}</li>)}
    </ul>
    </>
  );
}
