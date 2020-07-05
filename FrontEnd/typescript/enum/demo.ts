
//枚举类型
enum Status{
  OFFLINE,
  ONLINE,
  DELETED
}



function getResult(status){
  if(status === Status.OFFLINE){
    return 'offline'
  }else if(status === Status.ONLINE){
    return 'online'
  }else if(status === Status.DELETED){
    return 'deleted'
  }
  return 'error'
} 



const result = getResult(0)

console.log(Status.OFFLINE)
console.log(Status.ONLINE)
console.log(Status.DELETED)
console.log(result)
//正反向映射
console.log(Status[0])
                                                                                                                  