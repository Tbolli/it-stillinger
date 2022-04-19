export default function handler(req,res) {
    res.status(200).json(
        [
            {title: "Vil du bli våre nye utvilker?", 
            jobb:"Systemutvikler",
            arbeidsgiver:"ØSTHEIM MONTASJE AS", 
            adresse:"Eidsvåg i Åsene",
            frist:"Snarest",
            publisert:"30.03.2022",
            bookmarked: true
            },
            {title: "IT-driftsteknikker hos Molde VGS", 
            jobb:"IT-driftstenknikker",
            arbeidsgiver:"Moldefylkeskommune", 
            adresse:"Fræna, frænavegen 19",
            frist:"28.04.2022",
            publisert:"11.02.2022",
            bookmarked: false
            },
        ]
        )
}