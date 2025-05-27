function colorirDia(){
    // Pegar valor do campo dia
    let days = document.getElementById('day').value;

    //Pegar a cor
    let color = document.getElementById('color').value;

    //Pega os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    //Verificar se o campo de dia foi preenchido
    if(!days){
        alert('Favor informar o dia');
    }else if((days > 0) && (days < 31)){
        //Se o número de dias está no intervalo
        //Aplicará a cor na célula do calendário
        let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
        td.style.backgroundColor = color;
    }else{
        alert("Favor digitar um dia do calendário");
    }

    //Elemento para pegar a célula da tabela
    let elementos = document.querySelectorAll('td');

    //Declarar e inicializar contadores
    let contAzul = 0, contVerde = 0, contRosa = 0, contRoxo = 0;

    //Loop para verificar o estilo de cada célula e contar quantas tem cor e qual cor
    for (let i = 0; i < elementos.length; i++){
    // obtém o estilo computado do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);

    //Obtém a cor de fundo atual da célula 
    var corEstilo = estilo.backgroundColor;

    //Verificar a cor e incrementa contador correspondente
    if(corEstilo == "rgb(173,216, 230)" || corEstilo === "LightBlue"){
        contAzul++;
        console.log(contAzul);

    }else if(corEstilo === "rgb(152,215,152)" || corEstilo === "PaleGreen"){
        contVerde++;
        console.log("Verde: " + contVerde);

    }else if(corEstilo === "rgb(255,182,193)" || corEstilo === "LightPink"){
        contRosa++;
        console.log("Rosa: " + contRosa);

    }else if(corEstilo =="rgb(106,90,205)" || corEstilo === "SlateBlue"){
        contRoxo++;
        console.log("Roxo: "+  contRoxo);
    }
    }

   
}