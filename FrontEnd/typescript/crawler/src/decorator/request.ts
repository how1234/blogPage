


import {CrawlerController,LoginController} from '../controller'


export enum Methods{
  get = 'get',
  post = 'post',
}




function methodsDecoratorFactory(methodName:Methods){
  return function(path:string){
    return function(target:CrawlerController | LoginController,key:string){
      Reflect.defineMetadata('path',path,target,key)
      Reflect.defineMetadata('method',methodName,target,key)
    }
  }
}



export const get = methodsDecoratorFactory(Methods.get)
export const post = methodsDecoratorFactory(Methods.post)
