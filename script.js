var menuButton = document.getElementById('menuBtn');
var menuİslevCount = 0;
const myMenu = document.querySelector('.container');

//Eğer kullanıcı site sayfasındaki menu açıkken menu dışındaki bir alana tıklarsa çalışacak fonksiyon.
function eventWindowClick(){
    if (!myMenu.contains(event.target)) {
        document.querySelector('.menuEleman').setAttribute('style','visibility: hidden;');
        if (menuİslevCount % 2 === 1) {
            menuİslevCount = 0;
        }
    }
}

//Menu elemanlarını burada default olarak visibility lerini hidden yapıyoruz.
document.querySelector('.menuEleman').setAttribute('style','visibility: hidden;');

//Menu elemanlarını menuButton ile kontrol etme işlevinin fonksiyonunu yazıyoruz.
function toggleMenu(){
    if (menuİslevCount % 2 === 0) {
        document.querySelector('.menuEleman').setAttribute('style','visibility: ;');
        menuİslevCount++;
        document.addEventListener('click',eventWindowClick);
    }
    else {
        document.querySelector('.menuEleman').setAttribute('style','visibility: hidden;');
        menuİslevCount++;
    }
}

//menuButton a event olarak toggleMenu fonksiyonunu ekliyoruz.
menuButton.addEventListener('click', toggleMenu);