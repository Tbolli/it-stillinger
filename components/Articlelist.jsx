import ArticlelistStyles from '../styles/Articlelist.module.css'

export default function Articlelist({Articles}){

    const Jobb = (Article)=>{
        try{
            return(
                <span id="Jobb"><b>{Article._source.properties.jobtitle}</b></span>
            )
        }catch (err){
        }
    }
    const Dato = (Article)=>{
        try{
            return(
                <span id="Dato">First: {Article._source.properties.applicationdue} || Publisert {Article._source.published}</span>
            )
        }catch (err){
        }
    }


    return(
        <div className={ArticlelistStyles.ArticleList}>
            {Articles.map(Article => (
                    <div key={Article._id} className={ArticlelistStyles.Card}>
                        <div  className={ArticlelistStyles.Top_Level}>
                            <h2 >{Article._source.title}</h2>
                            {!true ? <svg xmlns="http://www.w3.org/2000/svg" width="17.512" height="35.024" viewBox="0 0 17.512 35.024"><path id="iconmonstr-bookmark-2" d="M20.593,2.919V28.577l-5.837-5.125L8.919,28.577V2.919ZM23.512,0H6V35.024l8.756-7.689,8.756,7.689Z" transform="translate(-6)" fill="#2c27b7"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="17.512" height="35.024" viewBox="0 0 17.512 35.024"><path id="iconmonstr-bookmark-27" d="M6,0V35.024l8.756-7.689,8.756,7.689V0ZM18.365,20.139l-3.609-1.928-3.607,1.928.721-4.026L8.919,13.277l4.053-.559,1.785-3.682,1.785,3.68,4.053.56-2.949,2.835Z" transform="translate(-6)" fill="#2c27b7"/></svg> }
                        </div>
            
                        <div className={ArticlelistStyles.Main_Level}>
                            {Jobb(Article)}
                            <span id="Arbeidsgiver">{Article._source.businessName}</span>
                            <span id="Adresse">{Article._source.locationList[0].address +", "+Article._source.locationList[0].municipal}</span>
                        </div>
            
                        <div className={ArticlelistStyles.Bottom_Level}>
                            {Dato(Article)}
                        </div>
                    </div>  
            ))}
        </div>        
    )}


  


    