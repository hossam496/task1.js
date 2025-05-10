
var continar = document .getElementById('continar')
var tool1 = document .getElementById('tool1')
var tool2 = document .getElementById('tool2')
var tool3 = document .getElementById('tool3')
var tool4 = document .getElementById('tool4')
var continar1 = document .getElementById('continar1')
var continar2 = document .getElementById('continar2')
var continar3 = document .getElementById('continar3')
var continar4 = document .getElementById('continar4')

tool1.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'tool1'))
tool2.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'tool2'))
tool3.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'tool3'))
tool4.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'tool4'))

continar1.addEventListener('dragover' , (e) => e.preventDefault())
continar2.addEventListener('dragover' , (e) => e.preventDefault())
continar3.addEventListener('dragover' , (e) => e.preventDefault())
continar4.addEventListener('dragover' , (e) => e.preventDefault())


continar1.addEventListener('drop', (e) =>{
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    continar1.appendChild(element)
})
continar2.addEventListener('drop', (e) =>{
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    continar2.appendChild(element)
})
continar3.addEventListener('drop', (e) =>{
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    continar3.appendChild(element)
})
continar4.addEventListener('drop', (e) =>{
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    continar4.appendChild(element)
})

tool1.addEventListener('dblclick' , ()=>{
    continar.appendChild(tool1)
})
tool2.addEventListener('dblclick' , ()=>{
    continar.appendChild(tool2)
})
tool3.addEventListener('dblclick' , ()=>{
    continar.appendChild(tool3)
})
tool4.addEventListener('dblclick' , ()=>{
    continar.appendChild(tool4)
})