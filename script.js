/* Put new images in galleryItems */

const galleryItems = [
    {
        id: 0,
        file: 'img/1.jpg',
        title: 'Wykończenia'
    },
    {
        id: 1,
        file: 'img/2.jpg',
        title: 'Wygłuszenia'
    },
    {
        id: 2,
        file: 'img/3.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 3,
        file: 'img/4.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 4,
        file: 'img/5.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 5,
        file: 'img/6.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 6,
        file: 'img/7.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 7,
        file: 'img/8.jpg',
        title: 'Lakierowanie'
    },
    {
        id: 8,
        file: 'img/9.jpg',
        title: 'Lakierowanie'
    },

];


galleryItems.forEach((i) => {

    const sectionCountdownSelector = document.querySelector('#gallery');

    const docFragment = document.createDocumentFragment();
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'gallery-item');

    const imageElement = document.createElement('img');
    imageElement.src = i.file;

    const divHeadingElement = document.createElement('div');
    divHeadingElement.setAttribute('class', 'gallery-item-title');

    const headingElement = document.createElement('h3');
    headingElement.innerHTML = i.title;

    docFragment.appendChild(divElement);
    docFragment.appendChild(divHeadingElement);
    divElement.appendChild(imageElement);
    divElement.appendChild(divHeadingElement);
    divHeadingElement.appendChild(headingElement);

    sectionCountdownSelector.appendChild(docFragment);

});

