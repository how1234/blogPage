function parameterDecorator(target:any,key:string,paramIndex:number){
  console.log(target,key,paramIndex)
}


class ParameterTest{
  getInfo(@parameterDecorator name:string){

  }
}