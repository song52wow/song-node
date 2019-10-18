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

class Controller {}

export function Prefix(value: any) {
  console.log(value)

  return (constructor: any) => {
    console.log('Class: ', constructor)

    return constructor extends  {}
  }
}

export function Get(value: any) {
  console.log(value);

  return routeDecorator
}

export function Post(value: any) {
  console.log(value);

  return routeDecorator
}