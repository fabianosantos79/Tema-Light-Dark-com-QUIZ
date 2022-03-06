$(function(){

    //Alterar Tema da página
    $('#formTema').bind('change', function(){
        $('body').toggleClass("modo-escuro");

        if($('body').hasClass('modo-escuro')){
            $('.container').addClass('background2');
        }else{
            $('.container').removeClass('background2');
        }

        if($('body').hasClass('modo-escuro')){
            $('.modulo').addClass('circulo_header2');
        }else{
            $('.modulo').removeClass('circulo_header2');
        }

        if($('body').hasClass('modo-escuro')){
            $('.destaque').addClass('destaque2');
        }else{
            $('.destaque').removeClass('destaque2');
        }

        if($('body').hasClass('modo-escuro')){
            $('.modulo2').addClass('modulo3');
        }else{
            $('.modulo2').removeClass('modulo3');
        }


    });

    //Placar
    var result = 0;
    function atualizarPlacar() {
        $('.result').html(result);   
    }

    //Indice
    var indice = 1;
    function atualizarIndice() {
        $('.indice').html(indice);
    }

    //Quiz - Pergunta 1
    $('#confirmar').bind('click', function(){
        var selecionado = $("input[name='quiz']:checked").val();
        $('.opcoes_quiz')
        $('i').css('display', 'block');
        if(selecionado == 1){
            $('.resposta_certa').css('display', 'block');
            result++;
            atualizarPlacar();
        }else{
            $('.resposta_errada').css('display', 'block');
        }
    });

    $('.proximo').bind('click', function() {
        $('.quiz2').removeClass('esconder');
        $('.resposta_certa').hide();
        $('.resposta_errada').hide();
        $('.quiz1').remove();
        $('i').css('display', 'none');
        indice ++; 
        atualizarIndice();
    });


    //Quiz - Pergunta 2
    $('#confirmar2').bind('click', function(){
        var selecionado = $("input[name='quiz']:checked").val();
        $('i').css('display', 'block');
        if(selecionado == 2){
            $('.resposta_certa2').css('display', 'block');
            result++;
            atualizarPlacar();
        }else{
            $('.resposta_errada2').css('display', 'block');
        }
    });

    $('.proximo2').bind('click', function() {
        $('.quiz3').removeClass('esconder');
        $('.resposta_certa2').hide();
        $('.resposta_errada2').hide();
        $('.quiz2').remove();
        $('i').css('display', 'none');
        indice ++; 
        atualizarIndice();
    });


    //Quiz - Pergunta 3
    $('#confirmar3').bind('click', function(){
        var selecionado = $("input[name='quiz']:checked").val();
        $('i').css('display', 'block');
        if(selecionado == 3){
            $('.resposta_certa3').css('display', 'block');
            result++;
            atualizarPlacar();
        }else{
            $('.resposta_errada3').css('display', 'block');
        }
    });

    $('.proximo3').bind('click', function() {
        $('.quiz4').removeClass('esconder');
        $('.resposta_certa3').hide();
        $('.resposta_errada3').hide();
        $('.quiz3').remove();
        $('i').css('display', 'none');
        indice ++; 
        atualizarIndice();
    });



    //Quiz - Pergunta 4
    $('#confirmar4').bind('click', function(){
        var selecionado = $("input[name='quiz']:checked").val();
        $('i').css('display', 'block');
        if(selecionado == 4){
            $('.resposta_certa4').css('display', 'block');
            result++;
            atualizarPlacar();
        }else{
            $('.resposta_errada4').css('display', 'block');
        }
    });

    $('.proximo4').bind('click', function() {
        $('.quiz1').removeClass('esconder');
        $('.resposta_certa4').hide();
        $('.resposta_errada4').hide();
        $('.quiz4').remove();
        $('i').css('display', 'none');
    });

});