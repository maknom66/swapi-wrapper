import axios from "axios";

import { swapiBaseUrl } from "../constants";

const client = axios.create({
  baseURL: swapiBaseUrl,
});

const buildUrl = (resource, params) => {
  let url = resource;
  if (params?.id) {
    return `${url}/${params?.id}`;
  }
  return `${url}/?search=${params?.search || ""}&page=${params?.page || ""}`;
};

const swapiClient = async (resource, params) => {
  const url = buildUrl(resource, params);
  const res = await client.get(url);
  return res?.data;
};

export { swapiClient };
