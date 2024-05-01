let inputxt1 = document.getElementById("textschool")
let boton1 = document.getElementById("botonschool")
let div1 = document.getElementById("div1f")

boton1.addEventListener("click", function () {
    if (inputxt1.value === "") {
        alert("No puedes dejar el campo en blanco");
    } else {
        let school = document.createElement("li")
        school.innerHTML = inputxt1.value;
        div1.appendChild(school)
    }
})

let inputxt2 = document.getElementById("textschool2")
let boton2 = document.getElementById("botonschool2")
let div2 = document.getElementById("div2f")

boton2.addEventListener("click", function () {
    if (inputxt2.value === "") {
        alert("No puedes dejar el campo en blanco")
    } else {
        let school2 = document.createElement("li")
        school2.innerHTML = inputxt2.value;
        div2.appendChild(school2)
    }
})
let inputxt3= document.getElementById("textschool3")
let boton3 = document.getElementById("botonschool3")
let div3 = document.getElementById("lista1")
boton3.addEventListener("click", function () {
    if (inputxt3.value === "") {
        alert("No puedes dejar el campo en blanco")
    } else {
        let school3 = document.createElement("li")
        school3.innerHTML = inputxt3.value;
        div3.appendChild(school3)
    }
})
let inputxt4= document.getElementById("textschool4")
let boton4 = document.getElementById("botonschool4")
let div4 = document.getElementById("lista2")
boton4.addEventListener("click", function () {
    if (inputxt4.value === "") {
        alert("No puedes dejar el campo en blanco")
    } else {
        let school4 = document.createElement("li")
        school4.innerHTML = inputxt4.value;
        div4.appendChild(school4)
    }
})