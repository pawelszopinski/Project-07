import { getPosterLink } from './poster';
import { openModal } from './modal-movie';
const buttons = document.querySelector('.header-library__buttons-list');
const resultContainer = document.querySelector('.result__container');
// Problem z włączeniem modala w library

// resultContainer.addEventListener('click', e => {
//   if (e.target.classList.contains('movie__poster')) {
//     console.log('clicked');
//     e.preventDefault();
//     const backdrop = document.querySelector('.backdrop');
//     backdrop.classList.remove('is-hidden');
//     openModal(movie);
//   }
// });

// Koniec
buttons.addEventListener('click', e => {
  if (e.target.classList.contains('header-library__buttons-item')) {
    if (e.target.textContent === 'WATCHED') {
      console.log('watched');
      hideItem(resultContainer);
    }
    if (e.target.textContent === 'QUEUE') {
      console.log('queue');
      showItem(resultContainer);
    }
  }
});

function hideItem(item) {
  item.classList.add('is-hidden');
}

function showItem(item) {
  item.classList.remove('is-hidden');
}

function displayQueue() {
  const resultContainer = document.querySelector('.result__container');
  const queuedMovies = localStorage.getItem('movieList');
  if (queuedMovies) {
    const movieList = JSON.parse(queuedMovies);
    movieList.forEach(movie => {
      const movieCard = `<div class="movie__card">
        <a href="#"><img class="movie__poster" src='${getPosterLink(movie)}'></a>
        <ul class="movie__short-descr">
          <li class="movie__title">${movie.title}</li>
          <li class="movie__genre">${movie.genres} | ${movie.release_date.slice(0, 4)}</li>
        </ul>
      </div>`;

      resultContainer.insertAdjacentHTML('beforeend', movieCard);

    });
  } else {
    console.log('Brak filmów w kolejce.');
  }
}

displayQueue();