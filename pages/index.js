import React, { useState, useEffect } from 'react';
import Head from "next/head"

import Search from "../components/Search"
import Articlelist from '../components/Articlelist';
import Viewmore from '../components/Viewmore';

import indexStyles from '../styles/Index.module.css'


function index() {

  const [data, setData] = useState([]);

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
    <Articlelist Articles={data}/>
    <Viewmore Visninger={2} TotalTreff={274}/>
    </>
  )
}

export default index