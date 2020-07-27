import apiService from'./apiService.js';
import items from '../templates/items.hbs';
import handleOriginalImage from './basicLightbox';

const refs = {
  searchForm: document.querySelector('#search-form'),
  button: document.querySelector('button[data-action="load-more"]'),
  modal: document.querySelector('#gallery')
}
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.button.addEventListener('click', loadMoreBtnHandler);
refs.modal.addEventListener('click', handleOriginalImage);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  apiService.page;

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  apiService.resetPage();
  apiService.searchQuery = input.value;
  requestImagesApi();

  input.value = '';
}

function requestImagesApi() {
  apiService
    .requestImages()
    .then(images => {
      insertListItems(images);
      const displayBlock = refs.button.style.display = 'block';
      if (apiService.page > 1) {
        displayBlock;
      } else {refs.button.style.display = 'none';}
    })
    .catch(error => console.warn(error))
};

function insertListItems(images) {
  const markup = items(images);

  refs.modal.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.modal.innerHTML = '';
}

function loadMoreBtnHandler() {
    apiService
    .requestImages()
    .then(images => {
      insertListItems(images);
    });
}
 