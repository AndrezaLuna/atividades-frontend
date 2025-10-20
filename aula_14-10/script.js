function verificaComida(){
    const paragrafo = document.querySelector('#resultado');
    const inputComida = document.querySelector('#comida');

    //converte valores digitados para caixa baixa
    const comidaEntrada = inputComida.value.toLowerCase();
    // adciona as formatação css na mensagem que sera exibida
   let mensagem = document.querySelector('#resultado')
   mensagem.style.color = 'green'
   mensagem.style.fontSize = '24px'
   mensagem.style.fontFamily = 'arial'
   mensagem.style.fontWeight = '900'
    
    if(comidaEntrada === 'pão com ovo'|| comidaEntrada === 'ovo com pão'){
        paragrafo.innerText = 'Isso é cafe da manhã!'

    }else if (comidaEntrada === 'feijão com arroz'|| comidaEntrada === 'arroz com feijão'){
        paragrafo.innerText = 'Isso é almoço!'
    }
    else{
        paragrafo.innerText = 'Isso é jantar!'
        
         mensagem.style.color = 'red'
    }
}


