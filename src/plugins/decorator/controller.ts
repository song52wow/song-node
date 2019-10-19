interface setRouteMap {
  key: string;
  value: string
}

class Route {
  static routeMap = new Map()
  static prefix = ''

  static setRouteMap({key, value}: setRouteMap) {
    Route.routeMap.set(key, this.prefix + value)
  }
}

function routeDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('target: ', target)
  console.log('propertyKey: ', propertyKey)
  console.log('descriptor: ', descriptor)


  return descriptor
}

export function Prefix(value: any) {
  // Route.prefix = value

  return (constructor: any) => {
    // console.log('Class: ', constructor)
  }
}

export function Get(value: any) {
  console.log(value);

  return routeDecorator
}

export function Post(value: string) {

  
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    // const filterTarget = target.replace(/.*( {})$/, '')

    // console.log(filterTarget);
    

    // Route.setRouteMap({
    //   key: filterTarget + propertyKey,
    //   value
    // })


    
  console.log('target: ', typeof target)
  console.log('propertyKey: ', propertyKey)
  console.log('descriptor: ', descriptor)


    return descriptor
  }
}