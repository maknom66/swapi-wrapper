import { swapiClient } from "../client";
import { resources } from "../constants";

const getFilms = async (params) => await swapiClient(resources.FILMS, params);
const getPeople = async (params) => await swapiClient(resources.PEOPLE, params);
const getPlanets = async (params) => await swapiClient(resources.PLANETS, params);
const getSpecies = async (params) => await swapiClient(resources.SPECIES, params);
const getStarships = async (params) => await swapiClient(resources.STARSHIPS, params);
const getVehicles = async (params) => await swapiClient(resources.VEHICLES, params);

export { getFilms, getPeople, getPlanets, getSpecies, getStarships, getVehicles };
