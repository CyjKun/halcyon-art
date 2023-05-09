import data from '../data'

export default function handler(req, res) {
    const { comissionId } = req.query;
    const { Comissions } = data;

    if(comissionId){
        const comission = Comissions.find( value => value.id == comissionId)
        return res.status(200).json(comission)
    }
    return res.status(400).json({error: "Post Not Found"})
}