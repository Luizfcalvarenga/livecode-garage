console.log("Connected")
// Selecionar onde os cards dos carros serão inseridos
// fazer um fetch na API do wagon para trazer todos os nossos carros
// Montar nossa lista de card iterando na resposta da API
// https://wagon-garage-api.herokuapp.com/:garage/cars

const carList = document.querySelector(".cars-list")
const url ="https://wagon-garage-api.herokuapp.com/1452/cars"

const fetchAllCars = () => {
  fetch(url) // Make the HTTP request
    .then(response => response.json()) // Wait for the response and parse it as JSON
    .then((data) => {
      carList.innerHTML = ""
      data.forEach(car => {
        insertInList(car)

      });
    })
}



const insertInList = (car) => {
  const carCard = `<div class="car">
  <div class="car-image">
    <img src="http://loremflickr.com/280/280/${car.brand},${car.model}"/>
  </div>
    <div class="car-info">
      <h4>${car.brand},${car.model}</h4>
      <p><strong>Owner:</strong>${car.owner}</p>
      <p><strong>Plate:</strong>${car.plate}</p>
    </div>
  </div>`
  carList.insertAdjacentHTML("beforeend", carCard)
}

fetchAllCars()
