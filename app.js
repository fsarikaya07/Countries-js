const inputEl = document.getElementById("input");
const resultEl = document.querySelector(".result");

const getCounties = () => {
  const url = `https://restcountries.com/v3.1/name/${inputEl.value}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .then((data) => {
      createText(data[0]);
    });
};
const getCountries1 = async () => {
  const url = "https://restcountries.com/v3.1/name/Germany";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

const createText = (data) => {
  const {
    name: { common },
    capital,
    continents,
    languages,
    maps: { googleMaps },
    currencies,
    flags: { png },
  } = data;

  resultEl.innerHTML =
    `
  <div class="card" style="width: 18rem; background-color: rgba(224, 193, 141, 0.384); margin: 10px;">
        <img src="${png}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${common}</h5>
            <p class="card-text">Capital:${capital}</p>
        </div>
        <ul class="list-group list-group-flush" style=" background-color: rgba(224, 193, 141, 0.384);">
            <li class="list-group-item">Continents:${continents}
            </li>
            <li class="list-group-item">Language:${Object.values(languages)}</li>
            <li class="list-group-item">${Object.values(currencies)[0].name} ${
            Object.values(currencies)[0].symbol
            }</li>
        
            <li class="list-group-item"><i class="fa-solid fa-map-location-dot"></i><a href="${googleMaps}" class="card-link" style="text-decoration: none; color:black;">Maps</a></li>
        </ul>
    
    </div>
    ` + resultEl.innerHTML;
};

inputEl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const key = inputEl.value;
    getCounties(key);
    inputEl.value = "";
  }
});

getCountries1();
