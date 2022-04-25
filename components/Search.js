import React from 'react'
import { useState } from 'react';

import searchStyles from '../styles/Search.module.css'

function Search({Omraade}) {
    const [filter,setFilter] = useState([])
    let turn = true
    const expand = ()=>{
        if (turn == true){
            document.getElementById("search_bar").style.height = "auto"
            document.getElementById("outerList").style.display = "flex"

            turn = false
            return; 
        }
        document.getElementById("search_bar").style.height = "52px"
        document.getElementById("outerList").style.display = "none"
        turn = true
    }
    const displayerLayer_1 = (id)=>{
        console.log(id)
    }

    const checkboxFill =(e)=>{
        console.log(e.target)
        try{
            if(e.target.id.split("_")[1]==="id"){
                e.target.style.fill === "white" ? e.target.style.fill= "#2C27B7" : e.target.style.fill = "white"
            }
        }catch{
            return null
        }

    }

    const liClick = (e)=>{
        return (e.target.parentElement.id ==="" ? displayerLayer_1(e.target.parentElement.parentElement.id): displayerLayer_1(e.target.parentElement.id))
    }

    const layerOneClick =(e)=>{
        let assert = filter
        if(e.target.checked === false){
            assert.splice(assert.indexOf(e.target.id),1)
        }else{
            assert.push(e.target.id)
        }
        setFilter(assert)
        console.log(filter)
    }

    const upporOptionRemove = (obj)=>{    
        if (!obj.municipals.length > 0) return null
        return(
            <div className={searchStyles.option_span_wrapper}>
                <input onClick={layerOneClick} id={"inputID_"+ obj.key} className={searchStyles.checkbox} type="checkbox"/>
                <span>{obj.key.toLowerCase()}</span>
            </div>
        )
    }

  return (
    <div id="search_bar" className={searchStyles.search_bar}>
    <div className={searchStyles.encaps_search}>
        
        <div className={searchStyles.Search_search_function}> 
            <svg id="Group_11" data-name="Group 11" xmlns="http://www.w3.org/2000/svg" width="24.056" height="24.036" viewBox="0 0 24.056 24.036">
                <path id="Path_1" data-name="Path 1" d="M23.753,22.523l-6.9-6.907A9.324,9.324,0,0,0,19.03,9.621,9.515,9.515,0,0,0,0,9.626a9.525,9.525,0,0,0,15.416,7.38l6.927,6.927a1,1,0,1,0,1.41-1.41ZM2.021,9.626A7.489,7.489,0,0,1,17,9.626a7.489,7.489,0,0,1-14.977,0Z" transform="translate(0 -0.2)" fill="#fff"/>
            </svg>
            <input type="text" placeholder='Søk'></input>
        </div>
        
        <svg onClick={expand} xmlns="http://www.w3.org/2000/svg" width="26.578" height="16.611" viewBox="0 0 26.578 16.611">
            <path id="iconmonstr-arrow-63" d="M3.134,26.578,0,23.445,10.342,13.285,0,3.133,3.134,0,16.611,13.285Z" transform="translate(26.578) rotate(90)" fill="#fff"/>
        </svg>
    </div>

    <div id="outerList" className={searchStyles.outerList}>
        <ul>
            <li id="Område_1">
                <div className={searchStyles.span_wrapper}>
                    <span>Område</span>
                    <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                        <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                    </svg>
                </div>
                <div className={searchStyles.omraader_trey}>
                    {Omraade.map(obj =>( 
                        <div className="upper_option_wrapper">
                            {upporOptionRemove(obj)}
                            <div className={searchStyles.municipals}>
                                {obj.municipals.map(municipal => (
                                    <div className={searchStyles.option_span_wrapper}>
                                        <svg onClick={checkboxFill} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
                                        <g id={obj.key+"_municipals_id"}  data-name="Path 2479" fill="#2C27B7">
                                          <path d="M3,0h9a3,3,0,0,1,3,3v9a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" stroke="none"/>
                                          <path d="M 3 1.399999618530273 C 2.117759704589844 1.399999618530273 1.399999618530273 2.117759704589844 1.399999618530273 3 L 1.399999618530273 12 C 1.399999618530273 12.88224029541016 2.117759704589844 13.60000038146973 3 13.60000038146973 L 12 13.60000038146973 C 12.88224029541016 13.60000038146973 13.60000038146973 12.88224029541016 13.60000038146973 12 L 13.60000038146973 3 C 13.60000038146973 2.117759704589844 12.88224029541016 1.399999618530273 12 1.399999618530273 L 3 1.399999618530273 M 3 0 L 12 0 C 13.65684986114502 0 15 1.34315013885498 15 3 L 15 12 C 15 13.65684986114502 13.65684986114502 15 12 15 L 3 15 C 1.34315013885498 15 0 13.65684986114502 0 12 L 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z" stroke="none" fill="#fff"/>
                                        </g>
                                        </svg>
                                        <span>{municipal.key.split(".")[1].toLowerCase()}</span>
                                    </div>
                                ))}
                            </div>
                        
                        </div>
                     ) )}
                </div>
            </li>
            <li id="Yrke_2">
                <div className={searchStyles.span_wrapper}>
                    <span>Yrke</span>
                    <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                        <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                    </svg>
                </div>
            </li>
            <li id="Annsettelsesform_3">
                <div className={searchStyles.span_wrapper}>
                    <span>Annsettelsesform</span>
                    <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                        <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                    </svg>
                </div>
            </li>
            <li id="Sektor_4">
                <div className={searchStyles.span_wrapper}>
                    <span>Sektor</span>
                    <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                        <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                    </svg>
                </div>
            </li>
        </ul>

    </div>

    </div>
  )
}

export default Search