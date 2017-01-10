$("button").popover({html:true});

if(window.activeNavLink) {
    $('#' + window.activeNavLink).addClass('active');
}

if(window.backLink) {
    $('#backlink').show();
}

var pathArray = window.location.pathname.split( '/' );
var isEnglish = (pathArray.length > 1 && pathArray[pathArray.length - 2] == 'en');

var dudes = [{height: '330px', src: (isEnglish?'../':'') + 'pix/dudes/freidi_ottokar.png', alt: 'Freischütz Papiertheaterfigur: Ottokar'}, 
            {height: '330px', src: (isEnglish?'../':'') + 'pix/dudes/freidi_samiel.png', alt: 'Freischütz Papiertheaterfigur: Samiel'},
            {height: '330px', src: (isEnglish?'../':'') + 'pix/dudes/freidi_kuno.png', alt: 'Freischütz Papiertheaterfigur: Kuno'}];

var rdm = Math.floor(Math.random() * 1000.0) % dudes.length;

var img = $('#figure-top img')[0];
img.src = dudes[rdm]['src'];
img.alt = dudes[rdm]['alt'];

function nav_back() {
    if(window.backLink) {
        location.href = window.backLink;
    }
}

function setLang(lang) {

    var pathArray = window.location.pathname.split( '/' );
    var last = pathArray[pathArray.length - 1];
    
    var newPathname = "";
    for (i = 0; i < pathArray.length; i++) {
        if(i == pathArray.length - 2 && lang == 'de' && pathArray[i] == 'en')
            continue;
        
        if(i > 0)
            newPathname += "/";
            
        newPathname += pathArray[i];

        if(i == pathArray.length - 2 && lang == 'en' && pathArray[i] !== 'en')
            newPathname += '/en';
    }

    location.href = window.location.protocol + '//' + window.location.host + newPathname ;   
}