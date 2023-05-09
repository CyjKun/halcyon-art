const baseURL = "http://localhost:3000/api/paintings"
// endpoint: [url]/api/paintings

export default async function getPainting(id){
    const res = await fetch(`${baseURL}`);
    const paintings = await res.json()

    if(id) {
        return paintings.find(value => value.id == id)
    }
    return paintings;
}