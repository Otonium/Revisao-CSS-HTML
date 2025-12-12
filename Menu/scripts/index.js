// Ativando o menu mobile

function mostraMenu(){
    $('header nav#nav-esq ul#menu-principal').css('display', 'flex');
    $('header nav#nav-esq ul#menu-principal').addClass('animate_animated animate_fadeInRight animate_slow');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'none');
    $('header nav#nav-esq ul#icone-menu li#menux').css('display', 'flex');
}

function escondeMenu(){
    $('header nav#nav-esq ul#menu-principal').css('display', 'none');
    
    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'flex');
    $('header nav#nav-esq ul#icone-menu li#menux').css('display', 'none');
}

let controle = true;

$('header nav#nav-esq ul#icone-menu li#menu').click(function(){
    if(controle == true){
        mostraMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})