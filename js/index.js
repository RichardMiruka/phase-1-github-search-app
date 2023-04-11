const form = document.querySelector('#github-form');
const userList = document.querySelector('#user-list');
const reposList = document.querySelector('#repos-list');
let searchType = 'users'; // Default search type is users

// Add event listener for user search button
const userSearchButton = document.querySelector('#user-search');
userSearchButton.addEventListener('click', () => {
  searchType = 'users';
  document.querySelector('#search').placeholder = 'Search Users';
});

// Add event listener for repo search button
const repoSearchButton = document.querySelector('#repo-search');
repoSearchButton.addEventListener('click', () => {
  searchType = 'repositories';
  document.querySelector('#search').placeholder = 'Search Repositories';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = document.querySelector('#search').value;
  let searchEndpoint = '';
  if (searchType === 'users') {
    searchEndpoint = `https://api.github.com/search/users?q=${searchInput}`;
  } else {
    searchEndpoint = `https://api.github.com/search/repositories?q=${searchInput}`;
  }
  fetch(searchEndpoint)
    .then(response => response.json())
    .then(data => {
      if (searchType === 'users') {
        userList.innerHTML = '';
        data.items.forEach(user => {
          // Render user search results
        });
      } else {
        reposList.innerHTML = '';
        data.items.forEach(repo => {
          // Render repo search results
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
});
