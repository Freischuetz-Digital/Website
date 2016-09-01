$("button").popover({html:true});

if(window.activeNavLink) {
    $('#' + window.activeNavLink).addClass('active');
}

if(window.backLink) {
    $('#backlink').show();
}

var dudes = [{height: '330px', src: 'pix/dudes/freidi_ottokar.png', alt: 'Freischütz Papiertheaterfigur: Ottokar'}, 
            {height: '330px', src: 'pix/dudes/freidi_samiel.png', alt: 'Freischütz Papiertheaterfigur: Samiel'},
            {height: '330px', src: 'pix/dudes/freidi_kuno.png', alt: 'Freischütz Papiertheaterfigur: Kuno'}];

var rdm = Math.floor(Math.random() * 1000.0) % dudes.length;

var img = $('#figure-top img')[0];
img.src = dudes[rdm]['src'];
img.alt = dudes[rdm]['alt'];

function nav_back() {
    if(window.backLink) {
        location.href = window.backLink;
    }
}