class EventEmitter {
    constructor(){
        this._event = this._event || new Map()
        this._maxListeners = this._maxListeners || 10;
    }


    addListener(type,cb){
        if(!this._event.get(type)){
            this._event.set(type,cb)
        }

    }
    emit (type) {
        let handler = this._event.get(type)
        if(handler){
            handler.apply(this,[...arguments].slice(1))
        }else{
            throw Error("Listener doesn't registered")
        }
    }
    removeListener(type){
        if(this._event.get(type)){
            this._event.delete(type)
        }else{
            throw Error("Listener doesn't registered")
        }
    }
    
}







let emitter = new EventEmitter()
// 监听事件
emitter.addListener('ages', age => {
  console.log(age)
})
// 触发事件
emitter.emit('ages', 18)  // 18


emitter.removeListener('ages')
emitter.emit('ages', 18)  // 18
