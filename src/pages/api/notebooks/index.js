import data from '../data'
// api/notebooks
export default function handler(req,res){
    const { Notebooks } = data;
    if(Notebooks) return res.status(200).json(Notebooks)
    return res.status(404).json({error: "Data Not Found"})
}