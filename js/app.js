const loadAllData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadAllData();

const displayData = countries => {
    const container = document.getElementById('dataContainer');

    for(const country of countries){
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div class="ccard pt-4 ps-4 pb-2">
            <div class="mb-3">
                <img class="flag me-1" src="${country.flags.svg}" alt=""><span>${country.name.common}</span>
                            
            </div>
                <hr>
            <div class="card-info">
                <p class="lh-1"><span class="title">Capital: </span><span>${country.capital}</span></p>
                <p class="lh-1"><span class="title">Currencies: </span><span></span></p>
                <p class="lh-1"><span class="title">Population: </span><span>${country.population}</span></p>
                <p class="lh-1"><span class="title">Region: </span><span>${country.region}</span></p>
                <p class="lh-1"><span class="title">Time zone: </span><span>${country.timezones[0]}</span></p>
                <button class="btn-src" onclick="loadDataByName('${country.name.common}')">Get details</button>
            </div>
        </div>
        `
        container.appendChild(div)
    }
}

const loadDataByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}