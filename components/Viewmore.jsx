import ViewmoreStyles from '../styles/Viewmore.module.css'



function Viewmore ({Visninger,TotalTreff, OC}) {
   

    

    return(
        <div className={ViewmoreStyles.seFlereDiv}>
            <span>Viser {Visninger} av {TotalTreff} treff</span>
            <button onClick={OC} className={ViewmoreStyles.btn}>Se flere</button>
        </div>
    )
}   


export default Viewmore