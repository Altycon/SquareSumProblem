
const Back_Button = document.querySelector('.js-back_button');
const SumSquareSolutionImages = [...document.querySelectorAll('img')];
const viewer = document.querySelector('.viewer');

function lockBody(){
    document.body.style.overflow = 'hidden';
}
function unLockBody(){
    document.body.style.overflow = 'auto';
}

function closeImageViewer({target}){
    viewer.querySelector('img').setAttribute('src',"");
    viewer.classList.remove('open');
    unLockBody();
    target.removeEventListener('click',closeImageViewer);
}
function openImageViewer({target}){
    const target_source = target.getAttribute('src');
    const viewer_close_button = viewer.querySelector('.js-viewer-close_button');
    const viewer_image = viewer.querySelector('img');
    viewer_close_button.addEventListener('click', closeImageViewer);
    viewer_image.setAttribute('src', target_source);
    viewer.classList.add('open');
    lockBody();
}

function init(){
    SumSquareSolutionImages.forEach( img => {
        img.addEventListener('click', openImageViewer)
    });
}
document.addEventListener('DOMContentLoaded', init);