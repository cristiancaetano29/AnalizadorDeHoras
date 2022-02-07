function carregar(){
    let msg = window.document.querySelector("div#msg")
    let img = window.document.querySelector("img#imagem")
    let frase = window.document.querySelector("div#frase")
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()

    if(hora != 1){
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    }
    else{
        msg.innerHTML = `Agora são ${hora} hora e ${min} minutos`
    }

    if(hora >= 0 && hora < 12){
        //Bom dia
        frase.innerHTML = 'Bom dia!'
        img.src = "imagens/manha.png"
        window.document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        frase.innerHTML = 'Boa tarde!'
        img.src = "imagens/tarde.png"
        window.document.body.style.background = '#b9846f'
    }
    else{
        //Boa noite
        frase.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#515154'
    }
}