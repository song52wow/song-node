import { readdir } from "fs";
import path from "path";

import Route from "../routes"
import { _root_ } from "../../config";
import { IncomingMessage } from "http";

const route = new Route()

interface setRouteParam {
  method: 'post' | 'get' | 'put' | 'delete';
  value: string;
  routeFunc: Function;
}

function setRouteFormat({method ,value, routeFunc}: setRouteParam) {
  const routeIndex = `${value} ${method}`

  route.setRouteArr({ routeIndex, routeFunc})
}

export function Controller(constructor: any) {
  route.setConstMap()

  return constructor
}

export function Prefix(value: any) {
  return (constructor: any) => {
    route.setRouteMap(value)
    
    return constructor
  }
}

export function Get(value: any) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => { 
    setRouteFormat({
      method: 'get',
      value,
      routeFunc:descriptor.value
    })

    return descriptor
  }
}

export function Post(value: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    setRouteFormat({
      method: 'post',
      value,
      routeFunc: descriptor.value
    })

    return descriptor
  }
}

export default class ControllerDirRead {
  // 读取Controller文件夹
  static dirFileList(): Promise<string[]> {
    return new Promise(resolve => {
      const dirPath = path.join(process.cwd(), _root_, '/controllers')
  
      readdir(dirPath, (error, fileList) => {
        const fileListMap = fileList.map(file => path.resolve(dirPath, file))

        resolve(fileListMap)
      })
    })
  }

  // 实例化
  static async instantiation() {
    const controllerList = await this.dirFileList()

    controllerList.forEach(list => import(list))
  }
}