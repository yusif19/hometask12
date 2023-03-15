let add = document.querySelector("#add")
let input = document.querySelector(".input")
let error = document.querySelector(".error")
let ul = document.querySelector("ul")
let spancount = document.querySelector(".span1")
input.addEventListener("keyup", function (e) {
    e.preventDefault()
    if (e.target.value.length <= 3 || e.target.value.trim() == "") {
        error.style.display = "inline"
        add.setAttribute("disabled", "")
    } else {
        error.style.display = "none"
        add.removeAttribute("disabled", "")
    }
})
add.addEventListener("click", function (e) {
    e.preventDefault()
    let newlist = document.createElement("li")
    ul.classList.add("list-group")
    ul.classList.add("list-unstyled")
    newlist.classList.add("list-group-item")
    newlist.classList.add("d-flex")
    newlist.classList.add("align-items-center")
    newlist.classList.add("justify-content-between")
    let span = document.createElement("span")
    span.textContent = input.value
    let divbutton = document.createElement("div")
    let btn1 = document.createElement("button")
    btn1.classList.add("btn")
    btn1.classList.add("btn-danger")
    btn1.classList.add("btn-dan")
    btn1.textContent = "delete"
    let btn2 = document.createElement("button")
    btn2.classList.add("btn")
    btn2.classList.add("btn-primary")
    btn2.textContent = "mark"
    btn2.classList.add("btn-dan")
    divbutton.append(btn1, btn2)
    newlist.append(span, divbutton)
    ul.append(newlist)
    spancount.innerHTML++
    input.value = ""
    btn1.addEventListener("click", function (e) {
        e.preventDefault
        btn1.parentElement.parentElement.remove()
        spancount.innerHTML--
    })
    btn2.addEventListener("click", function (e) {

        span.style.textDecoration = "line-through"
    })
    let btnclear = document.querySelector(".btn-dark")
    btnclear.addEventListener("click", function (e) {
        e.preventDefault()
        ul.remove()
        spancount.innerHTML = "0"
        input.value = ""
    })
    let update = document.querySelector("#update")
    let editbtn = document.createElement("button")
    editbtn.classList.add("btn")
    editbtn.classList.add("btn-info")
    editbtn.classList.add("btn-dan")
    editbtn.textContent = "edit"
    divbutton.append(editbtn)
    newlist.append(divbutton)
    editbtn.addEventListener("click", function (e) {
        e.preventDefault()
        add.setAttribute("disabled", "")
        btnclear.setAttribute("disabled", "")
        for (let i = 0; i < document.querySelectorAll(".btn-dan").length; i++) {
            document.querySelectorAll(".btn-dan")[i].setAttribute("disabled", "")
        }
        update.style.display = "inline"
        input.focus()
        input.value = editbtn.parentElement.previousSibling.textContent
        update.addEventListener("click", function (e) {
            e.preventDefault()
            add.removeAttribute("disabled", "")
            btnclear.removeAttribute("disabled", "")
            for (let i = 0; i < document.querySelectorAll(".btn-dan").length; i++) {
                document.querySelectorAll(".btn-dan")[i].removeAttribute("disabled", "")
            }
            editbtn.parentElement.previousSibling.textContent = input.value
            update.style.display = "none"
            input.value=""
        })
    })
})
