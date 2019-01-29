const dugme = document.getElementById('dugme');
const trazeniPojam = document.getElementById('trazeni-pojam');
const drzacZaClanak = document.getElementById('drzac-za-clanak');
const naslov = document.getElementById('naslov');

function ucitajWiki() {
    const trazenaRec = trazeniPojam.value;
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${trazenaRec}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`;
    drzacZaClanak.innerHTML = '';
    naslov.innerText = '';

    fetch(url)
        .then(response => response.json())
        .then(podatak => {
            const pages = podatak.query.pages;
            const clanak = Object.values(pages)[0] // pretvara vrednosti objekta u niz
            const imgSrc = clanak.thumbnail.source;
    
            naslov.innerText = clanak.title;
            drzacZaClanak.innerHTML += `<img src="${imgSrc}" alt="${clanak.title}">`
            drzacZaClanak.innerHTML += clanak.extract;
        })
}

dugme.addEventListener('click', ucitajWiki)
