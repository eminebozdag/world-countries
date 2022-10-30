class CountryService {
  baseUrl = "https://restcountries.com/v2";

  async getAllCountries() {
    const response = await fetch(`${this.baseUrl}/all`);
    const data = await response.json();

    return data;
  }
}

export default CountryService;
