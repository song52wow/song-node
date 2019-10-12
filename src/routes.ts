import aa from "./controllers/aa";

interface routeConfig {
  [key: string]: any
}

const routes = {
  '/aa': aa
}

export default routes as routeConfig