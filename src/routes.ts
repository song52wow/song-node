import pundix from "./controllers/pundix";


interface routeConfig {
  [key: string]: any
}

const routes = {
  'post /setup': pundix.setup
}

export default routes as routeConfig