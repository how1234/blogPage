
import router from '../router'
import { RequestHandler } from 'express';

import {Methods} from './request'

export function controller(root:string) {
  return function (target: new (...args:any[]) => any){
    for(let key in target.prototype){
  
      const path:string = Reflect.getMetadata('path',target.prototype,key)
  
      const method:Methods = Reflect.getMetadata('method',target.prototype,key)
      const handler = target.prototype[key]
      const middleware:RequestHandler = Reflect.getMetadata('middleware',target.prototype,key)
      if(path && method){
        const fullpath = root === '/' ? path : `${root}${path}`
        if(middleware){
          router[method](fullpath,middleware,handler)
        }else{
          router[method](fullpath,handler)
        }
      
      }
  
    }
  }
}



