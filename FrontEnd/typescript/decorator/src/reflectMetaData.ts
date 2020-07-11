import 'reflect-metadata'
@Reflect.metadata('data','test')
class User{
  name = 'dell'
}

console.log(Reflect.getMetadata('data',User))