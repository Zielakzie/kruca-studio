// GALLERY

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

    const gallery = document.querySelector('#gallery');

    const docFragment = document.createDocumentFragment();

    const galleryItem = document.createElement('div');
    galleryItem.setAttribute('class', 'gallery-item');

    const galleryItemImg = document.createElement('img');
    galleryItemImg.src = i.file;

    const galleryDescription = document.createElement('div');
    galleryDescription.setAttribute('class', 'gallery-item-title');

    const itemTitle = document.createElement('h3');
    itemTitle.innerHTML = i.title;

    docFragment.appendChild(galleryItem);
    galleryItem.appendChild(galleryItemImg);
    galleryItem.appendChild(galleryDescription);
    galleryDescription.appendChild(itemTitle);

    gallery.appendChild(docFragment);

});



// FIXME: should listen to swipe only on gallery div

document.addEventListener('swiped-left', function (e) {
    document.getElementById("gallery-nav").style.display = "none";
    document.getElementById("gallery").scrollLeft = 260;
    document.getElementById("gallery").style.scrollBehavior = "auto";


});


function navHide() {
    document.getElementById("gallery-nav").style.display = "none";
    document.getElementById("gallery").scrollLeft = 260;
    document.getElementById("gallery").style.scrollBehavior = "auto";


}

// ANIMATION OBSERVER

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const shortDescription = entry.target.querySelector('.short-description');
  
      if (entry.isIntersecting) {
        shortDescription.classList.add('short-description-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      shortDescription.classList.remove('short-description-animation');
    });
  });
  
  observer.observe(document.querySelector('.short-description-wrapper'));