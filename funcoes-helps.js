function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

//console.log(moeda(100.99));

// Saida formatado

function stringImg(imgFomart){
    return imgFomart.replace(/\w\.jpg/gi, 'W.jpg');
}

console.log('teste')

// Função auto invocavel
(function somar(a=10, b=5){
  console.log(a+b);
})();
