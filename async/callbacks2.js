//Quiero enviar un mensaje cuando estoy seguro que un proceso ya terminó (Solicitus o API por ejemplo)
function proceso1(callback1){
    setTimeout(()=> {console.log("Procesando 1A")
    callback1(proceso3);
    proceso4();},3000);
}

function proceso2(callback2){
    setTimeout(()=> {console.log("Procesando 2B")
    callback2()},5000);
}

function proceso3(){
    setTimeout(()=> console.log("Procesando 3C"),7000);
}

function proceso4(){
    setTimeout(()=> console.log("Procesando 4D"),2000);}

console.log("Bienvenido, iniciando proceso");
proceso1(proceso2);