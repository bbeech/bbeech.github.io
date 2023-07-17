const button = document.getElementById('toggle-1');

button.addEventListener('click', function() {
    
    const li1 = document.getElementById('untitled-list-1');

    if (li1.classList.contains('hide')) {
        li1.classList.remove('hide');
    }
    else {
        li1.classList.add('hide');
    }

});

const button2 = document.getElementById('toggle-2');

button2.addEventListener('click', function() {
    
    const li2 = document.getElementById('untitled-list-2');

    if (li2.classList.contains('hide')) {
        li2.classList.remove('hide');
    }
    else {
        li2.classList.add('hide');
    }

});

const button3 = document.getElementById('toggle-3');

button3.addEventListener('click', function() {
    
    const li3 = document.getElementById('untitled-list-3');

    if (li3.classList.contains('hide')) {
        li3.classList.remove('hide');
    }
    else {
        li3.classList.add('hide');
    }

});

const button4 = document.getElementById('gallery-header');

button4.addEventListener('click', function() {
    
    const galleryImg = document.getElementById("gallery");

    if (galleryImg.classList.contains('hide')) {
        galleryImg.classList.remove('hide');
    }
    else {
        galleryImg.classList.add('hide');
    }

});