import data from '../data'

export default function handler(req, res) {
    const { paintingId } = req.query;
    const { Paintings } = data;

    if(paintingId){
        const painting = Paintings.find( value => value.id == paintingId)
        return res.status(200).json(painting)
    }
    return res.status(400).json({error: "Post Not Found"})
}