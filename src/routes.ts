import aa from "./controllers/aa";

interface routeConfig {
  [key: string]: any
}

const routes = {
  'post /aa': aa.list
}

export default routes as routeConfig