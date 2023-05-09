import data from '../data'
// api/comissions
export default function handler(req,res){
    const { Comissions } = data;
    if(Comissions) return res.status(200).json(Comissions)
    return res.status(404).json({error: "Data Not Found"})
}