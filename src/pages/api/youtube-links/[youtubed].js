import data from '../data'

export default function handler(req, res) {
    const { youtubeId } = req.query;
    const { YoutubeLinks } = data;

    if(youtubeId){
        const youtube = YoutubeLinks.find( value => value.id == youtubeId)
        return res.status(200).json(youtube)
    }
    return res.status(400).json({error: "Post Not Found"})
}