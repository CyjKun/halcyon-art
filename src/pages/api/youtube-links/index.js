import data from '../data'
// api/youtube-links
export default function handler(req,res){
    const { YoutubeLinks } = data;
    if(YoutubeLinks) return res.status(200).json(YoutubeLinks)
    return res.status(404).json({error: "Data Not Found"})
}