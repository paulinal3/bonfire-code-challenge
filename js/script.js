// grab elem
const allBtn = document.getElementById("allBtn")
const evenBtn = document.getElementById("evenBtn")
const oddBtn = document.getElementById("oddBtn")
const allBoxes = document.querySelectorAll(".boxContainer")
const oddBoxes = document.querySelectorAll(".odd")
const evenBoxes = document.querySelectorAll(".even")

// create functions that will add/hide visibility based on btn clicked
const showAll = () => {
    allBoxes.forEach(box => box.style.visibility = "visible")
}

const showEven = () => {
    evenBoxes.forEach(box => box.style.visibility = "visible")
    oddBoxes.forEach(box => box.style.visibility = "hidden")
}

const showOdd = () => {
    oddBoxes.forEach(box => box.style.visibility = "visible")
    evenBoxes.forEach(box => box.style.visibility = "hidden")
}

// add click event listenrs to btns
allBtn.addEventListener("click", showAll)
evenBtn.addEventListener("click", showEven)
oddBtn.addEventListener("click", showOdd)