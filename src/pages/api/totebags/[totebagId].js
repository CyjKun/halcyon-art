import data from '../data'

export default function handler(req, res) {
    const { totebagId } = req.query;
    const { Totebags } = data;

    if(totebagId){
        const totebag = Totebags.find( value => value.id == totebagId)
        return res.status(200).json(totebag)
    }
    return res.status(400).json({error: "Post Not Found"})
}