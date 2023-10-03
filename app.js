const container = document.querySelector(".container")
const dynasties = [
    {name: "Normans", image: "Images/normans.jpeg"},
    {name: "Plantaganets", image: "Images/plantaganet.png"},
    {name: "Lancaster", image: "Images/lancaster.png"},
    {name: "York", image: "Images/york.png"},
]

const showCoffees = () => {
    let output = ""
    dynasties.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Learn More</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator){
    window.addEventListener("load", function() {
        this.navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
  }