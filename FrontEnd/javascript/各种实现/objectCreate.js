function objCreate(fun){

    let F = function(){

    }
    F.prototype = fun

    return new F()
}