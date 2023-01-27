import axios from 'axios';

export default class newApiImageService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchImage() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '32900641-8e4479d7696ea488ce1252de7';

    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
    );
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
