function propertyDecorator(target:any,key:string) : any{
  const descriptor : PropertyDescriptor = {
    writable:false

  }
  return descriptor 
}

class PropertyClass{
  // @propertyDecorator
  name = 'hello'


}


let instance1= new PropertyClass()
instance1.name = '1'


