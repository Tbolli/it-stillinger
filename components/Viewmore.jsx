import ViewmoreStyles from '../styles/Viewmore.module.css'

function Viewmore ({Visninger,TotalTreff}) {
    return(
        <div className={ViewmoreStyles.seFlereDiv}>
            <span>Viser {Visninger} av {TotalTreff} treff</span>
            <button className={ViewmoreStyles.btn}>Se flere</button>
        </div>
    )
}   


export default Viewmore