let body = document.querySelector("body")
let divcon = document.createElement("div")
divcon.classList.add(".container")
divcon.classList.add("px-5")
let rowdiv = document.createElement("div")
rowdiv.classList.add("row")
divcon.append(rowdiv)
divcon.style.margin = "0px 150px"
body.append(divcon)
let divbodytop=document.createElement("div")
divbodytop.style.width="960px"
divbodytop.style.height="360px"
divbodytop.style.width="97.5%"
divbodytop.style.marginLeft="12px"

divbodytop.style.backgroundColor="black"
let pbodytop=document.createElement("p")
pbodytop.textContent="960 x 360px"
pbodytop.style.color="white"
pbodytop.style.fontSize="20px"
pbodytop.style.fontFamily="Georgia, 'Times New Roman', Times, serif"
divbodytop.style.display="flex"
divbodytop.style.alignItems="center"
divbodytop.style.paddingLeft="395px"
divbodytop.append(pbodytop)
rowdiv.append(divbodytop)
let rowdiv1 = document.createElement("div")
rowdiv1.classList.add("row")
rowdiv1.classList.add("py-4")
//col 1
let coldiv1 = document.createElement("div")
coldiv1.classList.add("col-4")
let carddiv1 = document.createElement("div")
let divbody1 = document.createElement("div")
divbody1.style.width = "290px"
divbody1.style.height = "180px"
divbody1.style.backgroundColor = "black"
divbody1.style.border = "3px solid white"
divbody1.style.outline = "1px solid black"
divbody1.style.display = "flex"
divbody1.style.alignItems = "center"
let pdivbody1 = document.createElement("p")
pdivbody1.textContent = "290 x 180px"
pdivbody1.style.color = "white"
pdivbody1.style.paddingLeft = "110px"
pdivbody1.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
divbody1.append(pdivbody1)
let heading1 = document.createElement("h6")
heading1.style.padding = "10px 0"
heading1.textContent = "Indonectetus facilis"
heading1.style.fontStyle = "italic"
heading1.classList.add("text-secondary")
let p1 = document.createElement("p")
p1.textContent = "Nullamlacus dui ipsum conseque loborttis non eusque morbi penas dapibulum orna."
p1.classList.add("text-secondary")
let btn1 = document.createElement("button")
btn1.textContent = "Read more >>"
btn1.style.float = "right"
btn1.classList.add("text-warning")
btn1.style.border = "none"
btn1.style.backgroundColor = "white"
carddiv1.append(divbody1, heading1, p1, btn1)
coldiv1.append(carddiv1)
rowdiv1.append(coldiv1)
divcon.append(rowdiv1)
//col 2
let coldiv2 = document.createElement("div")
coldiv2.classList.add("col-4")
let carddiv2 = document.createElement("div")
let divbody2 = document.createElement("div")
divbody2.style.width = "290px"
divbody2.style.height = "180px"
divbody2.style.backgroundColor = "black"
divbody2.style.border = "3px solid white"
divbody2.style.outline = "1px solid black"
divbody2.style.display = "flex"
divbody2.style.alignItems = "center"
let pdivbody2 = document.createElement("p")
pdivbody2.textContent = "290 x 180px"
pdivbody2.style.color = "white"
pdivbody2.style.paddingLeft = "110px"
pdivbody2.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
divbody2.append(pdivbody2)
let heading2 = document.createElement("h6")
heading2.style.padding = "10px 0"
heading2.textContent = "Indonectetus facilis"
heading2.style.fontStyle = "italic"
heading2.classList.add("text-secondary")
let p2 = document.createElement("p")
p2.textContent = "Nullamlacus dui ipsum conseque loborttis non eusque morbi penas dapibulum orna."
p2.classList.add("text-secondary")
let btn2 = document.createElement("button")
btn2.textContent = "Read more >>"
btn2.style.float = "right"
btn2.classList.add("text-warning")
btn2.style.border = "none"
btn2.style.backgroundColor = "white"
carddiv2.append(divbody2, heading2, p2, btn2)
coldiv2.append(carddiv2)
rowdiv1.append(coldiv2)
divcon.append(rowdiv1)
//col 3
let coldiv3 = document.createElement("div")
coldiv3.classList.add("col-4")
let carddiv3 = document.createElement("div")
let divbody3 = document.createElement("div")
divbody3.style.width = "290px"
divbody3.style.height = "180px"
divbody3.style.backgroundColor = "black"
divbody3.style.border = "3px solid white"
divbody3.style.outline = "1px solid black"
divbody3.style.display = "flex"
divbody3.style.alignItems = "center"
let pdivbody3 = document.createElement("p")
pdivbody3.textContent = "290 x 180"
pdivbody3.style.color = "white"
pdivbody3.style.paddingLeft = "110px"
pdivbody3.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
divbody3.append(pdivbody3)
let heading3 = document.createElement("h6")
heading3.style.padding = "10px 0"
heading3.textContent = "Indonectetus facilis"
heading3.style.fontStyle = "italic"
heading3.classList.add("text-secondary")
let p3 = document.createElement("p")
p3.textContent = "Nullamlacus dui ipsum conseque loborttis non eusque morbi penas dapibulum orna."
p3.classList.add("text-secondary")
let btn3 = document.createElement("button")
btn3.textContent = "Read more >>"
btn3.style.float = "right"
btn3.classList.add("text-warning")
btn3.style.border = "none"
btn3.style.backgroundColor = "white"
carddiv3.append(divbody3, heading3, p3, btn3)
coldiv3.append(carddiv3)
rowdiv1.append(coldiv3)
divcon.append(rowdiv1)



