import data from '../data'
// api/paintings
export default function handler(req,res){
    const { Paintings } = data;
    if(Paintings) return res.status(200).json(Paintings)
    return res.status(404).json({error: "Data Not Found"})
}