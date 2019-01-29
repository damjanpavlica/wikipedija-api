const trazenaRec = "The Cure"
const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${trazenaRec}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`

fetch(url)
    .then(response => response.json())
    .then(podatak => {
        const pages = podatak.query.pages       
    })
