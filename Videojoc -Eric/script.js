let vida = 100;
let cremat = false
let enverinat = false
const poció = 20;
const fenix = 50;

function mostraVida(){

    if(vida == 0){
        alert("Has mort, espabila retrasat")
    }
    
    alert("La teva vida és: " + vida)

}

function atac(){

    let torn = Math.floor(Math.random()*3);

    if(torn == 0){
        atacEnemic("Atac Bàsic");

    }

    else if(torn == 1){
        atacEnemic("Bolla de foc");

    }

    else if(torn == 2){
        atacEnemic("Àcid sulfúric");

    }

}

function atacEnemic(atac){

    if(vida <= 0){
        alert("No te poden atacar perquè estas mort")
        cremat = false
        enverinat = false
    }

    else{
        if(atac == "Atac Bàsic"){
            damage = 10

            if(cremat == true){
                vida -= 5
            }

        
            if(enverinat == true){
                vida -= 8
            }

          
        }

        else if(atac == "Bolla de foc"){
            damage = 10
            cremat = true

            if(cremat == true){
                vida -= 5
            }

            else if(cremat == false){
                vida -= 0
            }
        }
        
        else if(atac == "Àcid sulfúric"){
            damage = 10
            enverinat = true

            if(enverinat == true){
                vida -= 8
            }

            else if(enverinat == false){
                vida -= 0
            }
        }

        vida -= damage
        alert("El teu enemic t'ha atacat amb un " +atac)

        if(vida <= 0){
            vida = 0
            alert("T'acaben de matar")
        }
        
        else{
        alert("La teva vida és: " + vida)

        }

    }

}

function beurePocio(){

    if(vida >= 100){
        alert("La poció no funciona perquè tens tota la vida")
    }

    else if(vida == 90){
        vida += 10;
        alert("Acabes de beure una poció")
        alert("La teva vida és: " + vida)
    }

    else if(vida <= 0){
        alert("No te pots curar perquè estas mort")
    }

    else{
        vida += poció
        alert("Acabes de beure una poció")
        alert("La teva vida és: " + vida)
    }


}

function colaFenix(){

    if(vida <= 0){
        vida += fenix;
        cremat = false
        enverinat = false
        alert("Acabes d'utilitzar la cola de Fénix")
        alert("La teva vida és: " + vida)
        
    }
    else{
        alert("No la pots utilitzar perquè estas viu")
    }

}

function antiCremat(){

    if(cremat == false){
        alert("No la pots utilitzar perquè no estàs cremat")
    }

    else if(cremat == true){
        cremat = false
        alert("T'has llevat l'efecte de cremada")
    }

    if(vida <= 0){
        alert("No et pots llevar les cremades perquè estàs mort")

    }

}

function antiEnverinat(){

    if(enverinat == false){
        alert("No la pots utilitzar perquè no estàs enverinat")
    }

    else if(enverinat == true){
        enverinat = false
        alert("T'has llevat l'efecte de verí")
    }

    if(vida <= 0){
        alert("No et pots llevar l'efecte de verí perquè estàs mort")

    }

}