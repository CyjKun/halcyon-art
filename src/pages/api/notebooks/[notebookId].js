import data from '../data'

export default function handler(req, res) {
    const { notebookId } = req.query;
    const { Notebooks } = data;

    if(notebookId){
        const notebook = Notebooks.find( value => value.id == notebookId)
        return res.status(200).json(notebook)
    }
    return res.status(400).json({error: "Post Not Found"})
}