function menuDrop(){
    let navlist = document.getElementById("nav-list")
    if(navlist.classList.contains("menu-active")){
        navlist.classList.remove("menu-active")
    }else{
        navlist.classList.add("menu-active")
    }
}
//Competencias
const competencias = ['javascript','html','css']
let contadorComp = 1
function switchComp(){
    if(contadorComp >= 1){
        document.getElementById(`comp-${competencias[contadorComp-1]}`).classList.remove("comp-active")
    }
    if(contadorComp == 0){
        document.getElementById(`comp-${competencias[competencias.length-1]}`).classList.remove("comp-active")
    }
    document.getElementById(`comp-${competencias[contadorComp]}`).classList.add("comp-active")
    if(contadorComp == competencias.length-1){
        contadorComp = 0
    }else{
        contadorComp += 1
    }
}
