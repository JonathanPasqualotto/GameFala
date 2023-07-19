function verificaValorChute(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor invalido</div>'
    return
  }

  if (numeroForMaioOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido: fale um numero entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `

        <h2>Você ACERTOU!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>

    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    
    <div>O numero secreto é menor <i class="fa-solid fa-arrows-down-to-line"></i></div>
    
    `
  } else {
    elementoChute.innerHTML += `
    
    <div>O numero secreto é maior <i class="fa-solid fa-arrow-up-from-bracket"></i></div>
    
    `
  }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaioOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})