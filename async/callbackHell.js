function inscripcion(nombre1, callback){
    setTimeout(()=> {console.log('Holaaaaa!, Bienvenido '+nombre1);
    callback()},2000);
};
function conversar(callbackX){
    setTimeout(()=>{console.log("Bla Bla Bla")
        callbackX()},2000);
}

function adios(nombre2){
    setTimeout(()=>{console.log(nombre2+' ya terminamos');
    },1000);
};


var Name='Erick';
var veces=3;
console.log('Iniciando solicitud de inscripción...');
inscripcion(Name, ()=>{
    conversar(()=>conversar(()=>conversar(()=>adios(Name))));
});

console.log('Otros procesos...');