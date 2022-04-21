export default function handler(req,res) {
    res.status(200).json(
        [
            {
            id: "5eca7911-49df-4093-a4d4-0e05adad7602",
            title: "Vil du bli våre nye utvilker?", 
            jobb:"Systemutvikler",
            arbeidsgiver:"ØSTHEIM MONTASJE AS", 
            adresse:"Eidsvåg i Åsene",
            frist:"Snarest",
            publisert:"30.03.2022",
            bookmarked: true
            },
            {
            id: "08a2c025-6c83-4453-a651-6a0e1ec7b089",    
            title: "IT-driftsteknikker hos Molde VGS", 
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