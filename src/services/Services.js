class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) throw new Error(`Ошибка загрузки ${url}, статус соединения ${res.status}.`);
    return await res.json();
  }

  async getAllPeoples() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }

  async getAppPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }
  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }
}

export default SwapiService;

