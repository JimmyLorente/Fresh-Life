const fecha=document.getElementById("fecha");
const edad=document.getElementById("edad");

/*Constante para hacer fechas */
const calcular=(fecha)=>{
    const fechaActual=new Date();
    const añoActual=parseInt(fechaActual.getFullYear());
    const mesActual=parseInt(fechaActual.getMonth()) + 1;
    const diaActual=parseInt(fechaActual.getFullYear());

    const añoNacimiento = parseInt(String(fechaNacimiento).substring(0 , 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5 , 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8 , 10));

    let edad = añoActual-añoNacimiento;
    if(mesActual < mesNacimiento){
        edad--;
    }else if(mesActual===mesNacimiento){
        if(diaActual < diaNacimiento){
            edad--;
        }
    }
return edad;
}

window.addEventListener('load', function () {
 fecha.addEventListener('change',function(){
    if(this.value){
        edad.innerText= 'la edad es: ${calcular(this.value)} años';
    }

    })   
})

