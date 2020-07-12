import 'reflect-metadata'
import { RequestHandler } from "express";



export function use(middleware:RequestHandler){
  return function(target:any,key:any){
    Reflect.defineMetadata('middleware',middleware,target,key)
  }
}