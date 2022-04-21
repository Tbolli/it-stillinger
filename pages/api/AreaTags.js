export default function handler(req,res) {
    try{
        res.status(200).json()
    }
    catch{
        res.status(404)
    }


} 