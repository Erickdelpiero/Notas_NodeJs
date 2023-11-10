function inscripcion(nombre1, callback){
    setTimeout(()=> {console.log('Callback1 de '+nombre1);
    callback(nombre1)},2000);
};

function adios(nombre2, callback_2){
    setTimeout(()=>{console.log('callback2 de '+nombre2);
    callback_2(nombre2)},1000);
};


var Name='Erick';
console.log('Iniciando solicitud de inscripción...');


//Los callbacks nos permiten asegurarnos que el calback 2
//se asegure que callback1 termine para recién ejecutarse
inscripcion(Name, (x)=>{
    console.log('Holaaaaa!, Bienvenido '+x);
    adios(Name,(y)=>console.log('Finalizando inscripción... Gracias '+y));
});

//Si se llama directamente a las funciones puede que la segunda sea más rápida y se ejecute antes
// inscripcion(Name,()=>{});
// adios(Name, ()=>{})
console.log('Otros procesos...');
