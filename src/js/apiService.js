const baseUrl = 'https://pixabay.com/api/';
export default {
  page: 1,
  query: '',
  key: '16836748-77bdb9d8e6a7ff11ccb0a1780',
  image_type: 'photo',
  requestImages() {
    const params = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=10&key=${this.key}`;
    return fetch(baseUrl + params)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      })
      .catch(error => console.warn(error));
  },

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};