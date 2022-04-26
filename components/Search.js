import React from 'react'
import { useState } from 'react';
import Image from 'next/dist/client/image';

import ArrowDown from '../public/ArrowDown.png'
import jsonFile from '../public/options.json'
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
    let turnTable ={
        "Omraade": false,
        "Yrke": true,
        "Annsettelsesform": true,
        "Sektor": true,
    }

    const displayerLayer_1 = (id)=>{
        turnTable.id = !turnTable.id
        turnTable.id ? document.getElementById(id+"_trey").style.display ="flex" : document.getElementById(id+"_trey").style.display ="none"
        
    }
    const liClick = (e)=>{
        displayerLayer_1(e.target.id.split("_")[0])
    }

    const layerOneClick =(e)=>{
        let subject = e.target.id.split("_")[1]
        let assert = filter
        if(e.target.checked === false){
            assert.splice(assert.indexOf(subject),1)
            if(e.target.id.split("_")[0]=="inputID"){
                console.log(e.target.id)
                document.getElementById("inputIdUnder_"+e.target.value).style.display ="none"
            }
        }else{
            assert.push(subject)
            if(e.target.id.split("_")[0]=="inputID"){
                document.getElementById("inputIdUnder_"+e.target.value).style.display ="flex"
            }
        }
        setFilter(assert)
        console.log(filter)
        
        
    }

    const upporOptionRemove = (obj)=>{    
        if (!obj.municipals.length > 0) return null
        return(
            <div className={searchStyles.option_span_wrapper}>
                <input onClick={layerOneClick} value={obj.key}id={"inputID_"+ obj.key} className={searchStyles.checkbox} type="checkbox"/>
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
        
        <p onClick={expand}>filter</p>
    </div>

    <div id="outerList" className={searchStyles.outerList}>
        <ul>
            <li id="Omraade_1">
                <div className={searchStyles.span_wrapper}>
                    <span>Område</span>
                    <Image id="Omraade_arrow" onClick={liClick} className={searchStyles.Image}
                      src={ArrowDown}
                      width={23}
                      height={14}
                      alt="Pil"
                    />
                </div>
                <div id="Omraade_trey" className={searchStyles.omraader_trey}>
                    {Omraade.map(obj =>( 
                        <div className="upper_option_wrapper">
                            {upporOptionRemove(obj)}
                            <div id={"inputIdUnder_"+obj.key} className={searchStyles.municipals}>
                                {obj.municipals.map(municipal => (
                                    <div className={searchStyles.option_span_wrapper}>
                                        <input onClick={layerOneClick} id={"inputIDSecond_"+ municipal.key} className={searchStyles.checkbox} type="checkbox"/>
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
                    <Image id="Yrke_arrow" onClick={liClick} className={searchStyles.Image}
                      src={ArrowDown}
                      width={23}
                      height={14}
                      alt="Pil"
                    />
                </div>
                <div id="Yrke_trey" className={searchStyles.omraader_trey}>
                    <div className="upper_option_wrapper">
                        {jsonFile.Yrke.map(yrke => (
                            <div className={searchStyles.option_span_wrapper}>
                                <input onClick={layerOneClick} id={"inputIDSecondYrke_"+ yrke} className={searchStyles.checkbox} type="checkbox"/>
                                <span>{yrke}</span>
                            </div>
                        ))}          
                    </div>
                </div>
            </li>
            <li id="Annsettelsesform_3">
                <div className={searchStyles.span_wrapper}>
                    <span>Annsettelsesform</span>
                    <Image id="Annsettelsesform_arrow" onClick={liClick} className={searchStyles.Image}
                      src={ArrowDown}
                      width={23}
                      height={14}
                      alt="Pil"
                    />
                </div>
                <div id="Annsettelsesform_trey" className={searchStyles.omraader_trey}>
                    <div className="upper_option_wrapper">
                        {jsonFile.Annsettelsesform.map(form => (
                            <div className={searchStyles.option_span_wrapper}>
                                <input onClick={layerOneClick} id={"inputIDSecondForm_"+ form} className={searchStyles.checkbox} type="checkbox"/>
                                <span>{form}</span>
                            </div>
                        ))}          
                    </div>
                </div>
            </li>
            <li id="Sektor_4">
                <div className={searchStyles.span_wrapper}>
                    <span>Sektor</span>
                    <Image id="Sektor_arrow" onClick={liClick} className={searchStyles.Image}
                      src={ArrowDown}
                      width={23}
                      height={14}
                      alt="Pil"
                    />
                </div>
                <div id="Sektor_trey" className={searchStyles.omraader_trey}>
                    <div className="upper_option_wrapper">
                        {jsonFile.Sektor.map(Sektor => (
                            <div className={searchStyles.option_span_wrapper}>
                                <input onClick={layerOneClick} id={"inputIDSecondSektor_"+ Sektor} className={searchStyles.checkbox} type="checkbox"/>
                                <span>{Sektor}</span>
                            </div>
                        ))}          
                    </div>
                </div>
            </li>
        </ul>

    </div>

    </div>
  )
}

export default Search