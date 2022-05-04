export declare const swapiPlugins: {
  /**
   * Fetches Films based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getFilms(params: { id: number; page: number; search: string }): Promise<any>;

  /**
   * Fetches People based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getPeople(params: { id: number; page: number; search: string }): Promise<any>;

  /**
   * Fetches Planets based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getPlanets(params: { id: number; page: number; search: string }): Promise<any>;

  /**
   * Fetches Species based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getSpecies(params: { id: number; page: number; search: string }): Promise<any>;

  /**
   * Fetches Starships based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getStarships(params: { id: number; page: number; search: string }): Promise<any>;

  /**
   * Fetches Vehicles based on params from SWAPI
   *
   * @param {Object} params The params include id, page and search
   * @returns {Promise} Promise object represents the data from SWAPI
   */
  getVehicles(params: { id: number; page: number; search: string }): Promise<any>;
};
