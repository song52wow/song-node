interface setRouteMap {
  key: string;
  value: string
}

class Route {
  static routeMap = new Map()
  static prefix = ''
  static constructorName = ''

  static setRouteMap({key, value}: setRouteMap) {
    Route.routeMap.set(this.constructorName + key, this.prefix + value)
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
  return (constructor: any) => {
    Route.prefix = value

    Route.constructorName = constructor.name

    return constructor
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
    Route.setRouteMap({
      key: propertyKey,
      value
    })

    return descriptor
  }
}