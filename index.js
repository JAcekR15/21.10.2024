function one(){
   const inpColor = document.createElement("input")
   inpColor.type = "color" 
   const div = document.createElement("div")
   document.body.appendChild(inpColor)
   document.body.appendChild(div)
   div.style.width = "200px"
      div.style.height = "200px"
   inpColor.addEventListener("input", ()=>{
    div.style.backgroundColor = inpColor.value
    
   })
}
function two(){
const inpL = document.createElement("input")
const butt = document.createElement("button")
const link = document.createElement("a")

document.body.appendChild(inpL)
document.body.appendChild(butt)
butt.textContent = "LINK"
butt.addEventListener("click", ()=>{
    link.href = inpL.value;
    link.textContent = inpL.value
    document.body.appendChild(link)
})
}
function three(){
const inpW = document.createElement("input")
const inpS = document.createElement("input")
const butt = document.createElement("button")
const div = document.createElement("div")

document.body.appendChild(inpW)
document.body.appendChild(inpS)
document.body.appendChild(butt)

butt.textContent = "Zmien"

butt.addEventListener("click", ()=>{
    document.body.appendChild(div)
    div.style.border = "2px solid black"
    div.style.width = `${inpS.value}px`
    div.style.height = `${inpW.value}px`

})

}
function four(){
    const inp = document.createElement("input")
    const butt = document.createElement("button")
    const ul = document.createElement("ul")

    document.body.appendChild(inp)
    document.body.appendChild(butt)
    document.body.appendChild(ul)

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