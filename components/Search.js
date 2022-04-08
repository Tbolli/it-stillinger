import React from 'react'
import searchStyles from '../styles/Search.module.css'

function Search() {

let turn = true
const expand = ()=>{
    if (turn == true){
        document.getElementById("search_bar").style.height = "300px"
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


const liClick = (e)=>{
    return (e.target.parentElement.id ==="" ? displayerLayer_1(e.target.parentElement.parentElement.id): displayerLayer_1(e.target.parentElement.id))
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
                <span>Område</span>
                <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                    <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                </svg>
            </li>
            <li id="Yrke_2">
                <span>Yrke</span>
                <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                    <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                </svg>
            </li>
            <li id="Annsettelsesform_3">
                <span>Annsettelsesform</span>
                <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                    <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                </svg>
            </li>
            <li id="Sektor_4">
                <span>Sektor</span>
                <svg onClick={liClick} xmlns="http://www.w3.org/2000/svg" width="22.4" height="14" viewBox="0 0 22.4 14">
                    <path id="iconmonstr-arrow-63" d="M2.641,22.4,0,19.76,8.716,11.2,0,2.64,2.641,0,14,11.2Z" transform="translate(22.4) rotate(90)" fill="#fff"/>
                </svg>
            </li>
        </ul>

    </div>

    </div>
  )
}

export default Search