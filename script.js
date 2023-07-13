var images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/img/11.jpg',
    '/img/12.jpg',
    '/img/13.jpg',
    '/img/14.jpg',
    '/img/15.jpg'
];

function render() {
    var container = document.getElementById('container');

    for (var i = 0; i < images.length; i++) {
        var thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.style.backgroundImage = 'url(' + images[i] + ')';
        container.appendChild(thumbnail);
    }
}

render();

function openImage(index) {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    var image = document.createElement('img');
    image.classList.add('overlay-image');
    image.src = images[index];

    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';

    var prevBtn = document.createElement('span');
    prevBtn.classList.add('nav-btn');
    prevBtn.classList.add('prev-btn');
    prevBtn.innerHTML = '&lt;';

    var nextBtn = document.createElement('span');
    nextBtn.classList.add('nav-btn');
    nextBtn.classList.add('next-btn');
    nextBtn.innerHTML = '&gt;';

    overlay.appendChild(prevBtn);
    overlay.appendChild(image);
    overlay.appendChild(closeBtn);
    overlay.appendChild(nextBtn);

    document.body.appendChild(overlay);

    prevBtn.addEventListener('click', function () {
        navigate(-1);
    });

    nextBtn.addEventListener('click', function () {
        navigate(1);
    });

    closeBtn.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    function navigate(direction) {
        document.body.removeChild(overlay);
        var newIndex = index + direction;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }
        openImage(newIndex);
    }
}

var thumbnails = document.getElementsByClassName('thumbnail');

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        var index = Array.prototype.indexOf.call(thumbnails, this);
        openImage(index);
    });
}