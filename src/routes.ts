interface routeConfig {
  [key: string]: any
}

// 路由列表
// const routes = {
//   'post /setup': pundix.setup
// }

let routes = {}

function routeDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // descriptor.writable = false
  
  console.log('target: ', target)
  console.log('propertyKey: ', propertyKey)
  console.log('descriptor: ', descriptor)


  return descriptor
}

export function Get(value: any) {
  console.log(value);

  return routeDecorator
}

export function Post(value: any) {
  console.log(value);

  // return routeDecorator

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // descriptor.writable = false
    
    console.log('target: ', target)
    console.log('propertyKey: ', propertyKey)
    console.log('descriptor: ', descriptor)
  
  
    return descriptor
  }
}

export default routes as routeConfig