const contenedor = document.getElementById("contenedor-tarjetas")
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const dataApi = data.results;
        console.log(dataApi);

        let acc= "";
        for (let i = 0; i < dataApi.length; i++) {
            acc = acc + `
            
            <div class="card">
            <div class="contenedor-img">
                <img src="${dataApi[i].image}" alt=${dataApi[i].name}>
                </div>
                <p>${dataApi[i].name}</p>
                <p>${dataApi[i].gender}</p>
                <p>${dataApi[i].species}</p>
                <p>${dataApi[i].status}</p>
                <p>${dataApi[i].origin.name}</p>
                <p>${dataApi[i].location.name}</p>
                </div>

            `
        }

        contenedor.innerHTML = acc;
    })

const getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {renderCharacters(data.results)})
}

getCharacters();

const renderCharacters = (dataApi) => {
    dataApi.forEach(character => { 
        container
    })
}