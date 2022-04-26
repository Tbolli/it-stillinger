import React, { useState, useEffect } from 'react';
import Head from "next/head"
import Image from 'next/dist/client/image';

import Search from "../components/Search"
import Articlelist from '../components/Articlelist';
import Viewmore from '../components/Viewmore';

import ProfilePlaceholder from '../public/ProfilePlaceholder.png'

import indexStyles from '../styles/Index.module.css'


const size = 50
async function fetchArticlesShallow(from, size){
  const responseObj = await fetch(`http://localhost:3000/api/Handler?from=${from}&size=${size}`)
  const jsonData = await responseObj.json()
  return jsonData
}

function index({locations, rrarticles}) {
  
  const [from, setFrom] = useState(0)
  const [totalArticles, setTotalArticles] = useState(rrarticles)
  const [force, setForce] = useState(false)
  
  


  async function ViewMoreClick(){
    const curr = await fetchArticlesShallow(from+size,size)
    const currUse = curr.hits.hits
    let resList= totalArticles
    resList.hits.hits =resList.hits.hits.concat(currUse)
    setTotalArticles(resList)
    setFrom(from + size)
    setForce(!force)
  }


  return (
    <>
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
    <Search Omraade={locations}/>
    <Articlelist Articles={totalArticles.hits.hits}/>
    <Viewmore OC={ViewMoreClick} Size={size}Articles={totalArticles.hits.hits} Visninger={from+size} TotalTreff={totalArticles.hits.total.value}/>
  
  </>
  )
}


export async function getServerSideProps() {
  const rrarticles = await fetchArticlesShallow(0, size)

  const res = await fetch("https://arbeidsplassen.nav.no/stillinger/api/locations")
  const locations = await res.json()
  return { props: { locations, rrarticles} }
}

export default index



