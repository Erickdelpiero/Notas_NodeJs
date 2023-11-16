function inscripcion(nombre, callback){
    setTimeout(()=> {console.log('Holaaaaa!, Bienvenido '+nombre);
    callback(nombre)},1500);
};
function conversar(callbacks){  //hablar
    setTimeout(()=>{console.log("Bla Bla Bla")
        callbacks()},500);
}
function conversarx(nombre,i,callbackX){    //conversacion
    if(i>0){
        conversar(()=>{conversarx(nombre,--i,callbackX);});
    }
    else{
        callbackX(nombre);
    }
}
function adios(nombre2){
    setTimeout(()=>{console.log(nombre2+' ya terminamos');
    },1000);
};

var Name='Erick';
console.log('Iniciando solicitud de inscripción...');
inscripcion(Name, (a)=>{conversarx(a,5,adios);})

console.log('Otros procesos...');