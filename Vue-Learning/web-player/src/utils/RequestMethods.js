function getJSON(url){
    return new Promise( (resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.send(null)


        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status ===  200){
                    try{
                        var res = JSON.parse(xhr.responseText)
                        resolve(res)
                    }catch(e){
                        reject(e)
                    }
                }else{
                    reject(new Error(xhr.status))
                }
            }
        }
    })
}

export {
    getJSON
}