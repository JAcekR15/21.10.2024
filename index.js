function one(){
   const inpColor = document.createElement("input")
   const div = document.createElement("div")



   document.body.appendChild(div)
   document.body.appendChild(inpColor)
 
   div.style.width = "200px"
      div.style.height = "200px"
      inpColor.type = "color" 

   inpColor.addEventListener("input", ()=>{
    div.style.backgroundColor = inpColor.value 
   })
}




function two(){
const inpL = document.createElement("input")
const butt = document.createElement("button")

const ul = document.createElement("ul")

document.body.appendChild(inpL)
document.body.appendChild(butt)
document.body.appendChild(ul)

butt.textContent = "LINK"

butt.addEventListener("click", ()=>{
    const li = document.createElement("li")
    const link = document.createElement("a")
    link.href = inpL.value;
    link.textContent = inpL.value
    ul.appendChild(li)
    li.appendChild(link)
})




}
function three(){
const inpW = document.createElement("input")
const inpS = document.createElement("input")
const butt = document.createElement("button")
const div = document.createElement("div")
const p = document.createElement("p")

document.body.appendChild(inpW)
document.body.appendChild(inpS)
document.body.appendChild(butt)
document.body.appendChild(div)


butt.textContent = "Zmień"
inpW.placeholder = "Wyskość"
inpS.placeholder = "Szerokość"

div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignItems = "center"


butt.addEventListener("click", ()=>{


    div.style.width = `${inpS.value}px`
    div.style.height = `${inpW.value}px`
    div.style.border = "2px solid black"
    p.textContent = `${inpS.value}px x ${inpW.value}px`
    div.appendChild(p)
})

}




function four(){
    const inp = document.createElement("input")
    const butt = document.createElement("button")
    const ul = document.createElement("ul")

    document.body.appendChild(inp)
    document.body.appendChild(butt)
    document.body.appendChild(ul)

    inp.placeholder = "Dodaj do listy"
    butt.textContent = "DODAJ"

        butt.addEventListener("click",()=>{
            const li = document.createElement("li")
            const buttRem = document.createElement("button")
            ul.appendChild(li)
            li.textContent = inp.value
            li.appendChild(buttRem)
            buttRem.textContent = "USUŃ"

            buttRem.addEventListener("click", ()=>{
                li.style.display = "none"
            })
        })

}