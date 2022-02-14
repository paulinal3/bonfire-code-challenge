// grab elem
const allBtn = document.getElementById("allBtn")
const evenBtn = document.getElementById("evenBtn")
const oddBtn = document.getElementById("oddBtn")
const oddBoxes = document.querySelectorAll(".odd")
const evenBoxes = document.querySelectorAll(".even")

// start with "all" btn selected
allBtn.classList.add("activeTab")

// create functions that will add/hide visibility based on btn clicked
const showAll = (e) => {
    const allBoxes = document.querySelectorAll(".boxContainer")

    activeShow(e)
    allBoxes.forEach(box => box.style.visibility = "visible")
}

const showEven = (e) => {
    activeShow(e)
    evenBoxes.forEach(box => box.style.visibility = "visible")
    oddBoxes.forEach(box => box.style.visibility = "hidden")
}

const showOdd = (e) => {
    activeShow(e)
    oddBoxes.forEach(box => box.style.visibility = "visible")
    evenBoxes.forEach(box => box.style.visibility = "hidden")
}

const activeShow = (e) => {
    console.log(e.target)
    const showBtns = document.querySelectorAll(".btn")

    showBtns.forEach(btn => btn.classList.remove("activeTab"))
    e.target.classList.add("activeTab")
}

// add click event listenrs to btns
allBtn.addEventListener("click", showAll)
evenBtn.addEventListener("click", showEven)
oddBtn.addEventListener("click", showOdd)