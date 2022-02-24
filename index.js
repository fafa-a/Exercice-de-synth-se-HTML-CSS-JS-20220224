const divResult = document.getElementsByTagName("div")[1]

animaux.forEach(element => {
  divResult.innerHTML += `<img id='${element.name}' src='images/${element.file}'/>`
})

document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("click", function () {
    this.style.display = "none"
  })
})

document
  .querySelector("button:first-of-type")
  .addEventListener("click", function () {
    animaux
      .filter(animal => animal.domestic)
      .forEach(el => {
        document.getElementById(el.name).style.display = "none"
      })
  })

document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", function () {
    animaux
      .filter(animal => animal.domestic)
      .forEach(el => {
        document.getElementById(el.name).style.display = "inline"
      })
  })
