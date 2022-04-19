export default function handler(req,res) {
    res.status(200).json(
        [
            {title: "Vil du bli våre nye utvilker?", 
            jobb:"Systemutvikler",
            arbeidsgiver:"ØSTHEIM MONTASJE AS", 
            adresse:"Eidsvåg i Åsene",
            bookmarked: true
            },
            {title: "IT-driftsteknikker hos Molde VGS", 
            jobb:"IT-driftstenknikker",
            arbeidsgiver:"Moldefylkeskommune", 
            adresse:"Fræna, frænavegen 19",
            bookmarked: false
            },
        ]
        )
}