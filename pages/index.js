import React, { useState, useEffect } from 'react';
import Head from "next/head"
import Search from "../components/Search"

import indexStyles from '../styles/Index.module.css'


function index() {

  const [data, setData] = useState({});

  const apiTest = async()=>{
    const res = await fetch("/api/SearchTags")
    const data = await res.json()

    return setData(data)
  }

  useEffect(()=>{apiTest()},[])
  

  return (
    <>
    <Head>
      <title>IT_JOBB - Hjem</title>
    </Head>
    <div className={indexStyles.icon_lane}> 

    </div>
    <h1 className={indexStyles.header}>IT Stillinger</h1>
    <Search/>
    {data.map(val=>(
      <h1>{val}</h1>
    ))}


    {
      //<Search/>
      //<Articlelist/>
      //<Viewmore/>
    }
    </>
  )
}

export default index