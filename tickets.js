const form = document.getElementById("form");
const buttondelete = document.getElementById("button-delete");
const priceTicket = 200;
const totalDiv = document.getElementById("total");

function resumen() {
  form.addEventListener("submit", (event) => {
    let priceTotal;
    const inputCategory = document.getElementById("inputCategory").value;
    const inputCount = document.getElementById("inputCount").value;
    event.preventDefault();
    if (inputCategory == "Estudiante") {
      priceTotal = (priceTicket - priceTicket * 0.8) * inputCount;
    } else if (inputCategory == "Trainee") {
      priceTotal = (priceTicket - priceTicket * 0.5) * inputCount;
    } else {
      priceTotal = (priceTicket - priceTicket * 0.15) * inputCount;
    }
    totalDiv.innerHTML = `
    <span>$${priceTotal}</span>
    `;
  });
}
function borrar(){
    buttondelete.addEventListener("click", (event) => {
        event.preventDefault()
        document.getElementById("inputCount").value = ""
        document.getElementById("inputName").value = ""
        document.getElementById("inputLastName").value = ""
        document.getElementById("inputEmail").value = ""
        totalDiv.innerText = 
        ""
    })
}
resumen()
borrar()