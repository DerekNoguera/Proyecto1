let inputxt1 = document.getElementById("textschool")
let boton1 = document.getElementById("botonschool")
let div1 = document.getElementById("div1f")

boton1.addEventListener("click", function () {
    let school = document.createElement("li")
    school.innerHTML = inputxt1.value;
    div1.appendChild(school)
})

let inputxt2 = document.getElementById("textschool2")
let boton2 = document.getElementById("botonschool2")
let div2 = document.getElementById("div2f")

boton2.addEventListener("click", function () {
    let school2 = document.createElement("li")
    school2.innerHTML = inputxt2.value;
    div2.appendChild(school2)
})

