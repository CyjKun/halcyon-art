import data from '../data'
// api/totebags
export default function handler(req,res){
    const { Totebags } = data;
    if(Totebags) return res.status(200).json(Totebags)
    return res.status(404).json({error: "Data Not Found"})
}