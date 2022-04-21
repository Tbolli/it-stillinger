import React, { useState, useEffect } from 'react';
import Head from "next/head"
import Image from 'next/dist/client/image';

import Search from "../components/Search"
import Articlelist from '../components/Articlelist';
import Viewmore from '../components/Viewmore';

import ProfilePlaceholder from '../public/ProfilePlaceholder.png'

import indexStyles from '../styles/Index.module.css'


function index({asd}) {
  const [data, setData] = useState([]);
 

  const apiTest = async()=>{
    const res = await fetch("/api/SearchTags")
    const data = await res.json()
    
    return setData(data)
  }

  useEffect(()=>{apiTest()},[])
  
  
  return (
    <>
    {console.log(asd)}
    <Head>
      <title>IT_JOBB - Hjem</title>
      <meta charset="UTF-8"/>
      <meta name="description" content="Norgesledende innefor i å IT-jobber"/>
      <meta name="keywords" content="IT, Utvikler, Sustemutvikler, It-drift, Teknologi, jobb, jobber, it jobb" />
      <meta name="author" content="Thomas Bolli"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <div className={indexStyles.icon_lane}> 
      <div className={indexStyles.Image_wrapper}>
        <Image
          src={ProfilePlaceholder}
          width={48}
          height={48}
          alt="Profilbilde"
        />
      </div>
      
    </div>
    <h1 className={indexStyles.header}>IT Stillinger</h1>
    <Search Omraade={[3,1,1]}/>
    <Articlelist Articles={data}/>
    <Viewmore Visninger={2} TotalTreff={274}/>
  
  </>
  )
}


export async function getServerSideProps() {
  const res = await fetch("https://arbeidsplassen.nav.no/stillinger/api/locations")
  const asd = await res.json()
  return { props: { asd } }
}

export default index


