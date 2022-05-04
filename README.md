## swapi-wrapper

A JS wrapper library for [SWAPI](https://swapi.dev/)

## Getting Started

### Usage

```js
import { swapiPlugins } from "swapi-wrapper";

const main = async () => {
  const peoples = await swapiPlugins.getPeople(); // fetch all people
  const peopleWithId1 = await swapiPlugins.getPeople({ id: 1 }); // fetch people with id 1
  const peopleMatchinSearchTerm = await swapiPlugins.getPeople({ search: "r2" }); // fetch people whose name matches with the search string
  const peoplesPage0 = await swapiPlugins.getPeople({ page: 0 }); // fetch 1st people page
};
```

### Available resource plugins

| Plugin       | Description              |
| ------------ | ------------------------ |
| getFilms     | Retrieves Film data      |
| getPeople    | Retrieves People data    |
| getPlanets   | Retrieves Planet data    |
| getSpecies   | Retrieves Species data   |
| getStarships | Retrieves Starships data |
| getVehicles  | Retrieves Vehicles data  |

### Resource plugin params

All resource plugins accepts 3 params `id`, `page`, `search` and can be used like below

```
swapiPlugins.getPeople({id: 1})
swapiPlugins.getPeople({page: 0})
swapiPlugins.getPeople({search: 'r2'})
swapiPlugins.getPeople({search: 'r2', page: 0})
```

NOTE: if `id` param is passed, `search` and `page` param won't work simultaneously.

## How to add a resource plugin to this library

Adding a new plugin to this wrapper library is very easy.

- Add the plugin resource name in the [constants](src/constants/index.js) file.
- Add the corresponding resource plugin function in [plugins](src/plugins/index.js) file.
- Add the corresponding type defenition in [index.d.ts](index.d.ts) file.
- Run command `yarn build`.
- And finally you can raise a PR with the new resource plugin.
