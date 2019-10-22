import { config } from "../config";

interface setRoute {
  routeIndex: string;
  routeFunc: Function
}

export const routeList = new Map()

class Route {
  routeArr: [string, Function][]
  routeMap: Map<string, Function>;

  constructor() {
    this.routeArr = []
    this.routeMap = new Map()
  }

  setConstMap() {
    this.routeMap.forEach((value, key) => routeList.set(key, value))

    this.routeMap.clear()
  }

  setRouteArr({ routeIndex, routeFunc }: setRoute) {
    this.routeArr.push([routeIndex, routeFunc])
  }

  setRouteMap(prefix: string) {
    this.routeArr.forEach(
      ele => this.routeMap.set(config.prefix + prefix + ele[0], ele[1])
    )
    
    this.routeArr = []
  }
}

export default Route