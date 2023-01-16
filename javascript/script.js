
    let xAleatorio;
    let yAleatorio;
    const radio = 10;
    const pantalla = document.querySelector("canvas");
    const  pincel = pantalla.getContext("2d");
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400);

    function disenharCircunferencia(x,y,radio,color){
        pincel.fillStyle = color;
        pincel.beginPath(); // sirve para indicar que comenzaremos a dibujar
        pincel.arc(x,y,radio,0,2*Math.PI) //recibe 5 parametros, coordenadas x e y, radio, angulo inicial y final
        pincel.fill() // con esto lleno la circunferencia

    }

    function limpiarPantalla(){ // con esto limpiamos la pantalla para borra la circunferncia anterior y ver como se va moviendo
        pincel.clearRect(0,0,600,400)
    }
    // function exibirMensaje(){
    //     console.log("mostrar mesanek");
    // }
    
    let x = 0;

    function actualizarPantalla(){
        limpiarPantalla();
        xAleatorio = sortearPosicion(600);
        yAleatorio = sortearPosicion(400);
        disenharObj(xAleatorio,yAleatorio)
    }


    // desarrollo de funcion para que cree el objetivo

    function disenharObj (x,y){
    disenharCircunferencia(x,y,radio +20,"red")
    disenharCircunferencia(x,y,radio +10,"white")
    disenharCircunferencia(x,y,radio,"red")
    }

    function sortearPosicion (maximo){ // el floor redondea para abajo
        return Math.floor(Math.random()* maximo)
    }
    
    setInterval(actualizarPantalla,1000)

    let count = 0;
    function disparar (evento){
    let x = evento.pageX - pantalla.offsetLeft; 
    let y = evento.pageY - pantalla.offsetTop;

    if( (x < xAleatorio + radio)&&
        (x > xAleatorio - radio)&&
        (y < yAleatorio + radio)&&
        (y > yAleatorio - radio)){
        alert("Acertaste el tiro")
        count++
    }
    calculadorScore(count)
    return count

    } 


    pantalla.onclick = disparar
    


let bienvenida = () =>{
    let nombre = document.querySelector(".input_n").value
    let pNombre = document.querySelector(".nombre")
    pNombre.innerHTML = `Jugador: ${nombre}`
}




let btn = document.querySelector(".btn")
btn.addEventListener(`click`,function(e){
    e.preventDefault()
    bienvenida()
    let canvas = document.querySelector("canvas")
    canvas.setAttribute("style","display:block")

})

let calculadorScore = (score) => {
    let count = score;

    let scoreP = document.querySelector(".score")
    scoreP.innerHTML =`Score: ${count} `

}


