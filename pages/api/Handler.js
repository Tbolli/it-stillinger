import NextCors from 'nextjs-cors';

export default async function handler(req, res) {


    await NextCors(req, res, {
       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, 
    });
    let rrRes=null
    try{
        const rr = await fetch(`https://arbeidsplassen.nav.no/stillinger/api/search?from=${req.query.from}&size=${req.query.size}`)
        rrRes = await rr.json()
    }catch (err){
        console.log(err)
    }
    res.json(rrRes)
 }