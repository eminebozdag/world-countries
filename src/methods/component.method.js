class ComponentMethod {
  getCountryPopution = (items) => {
    const countryPopulation = {};
    items.forEach((country) => {
      countryPopulation[country.name] = country.population;
    });
    return countryPopulation;
  };

  getLanguageUsages = (items) => {
    const languageUsages = {};
    items.forEach((country) => {
      country.languages.forEach((language) => {
        if (!languageUsages[language.name]) languageUsages[language.name] = 0;
        languageUsages[language.name]++;
      });
    });
    return languageUsages;
  };

  findMostTenUsages = (usages) => {
    const arr = Object.keys(usages).map((name) => {
      return {
        name,
        count: usages[name],
      };
    });

    arr.sort(function (a, b) {
      if (a.count < b.count) return -1;
    });

    return arr.reverse().slice(0, 10);
  };
}

export default ComponentMethod;
