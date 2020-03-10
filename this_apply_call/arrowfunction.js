// window.name = "dynamic name";
// var obj = {
//   a: function() {
//     this.name = "static name";
//     function a() {
//       console.log(this.name);
//     }
//     a();
//   },
//   b: function() {
//     this.name = "static name";
//     var a = () => {
//       console.log(this.name);
//     };
//     a();
//   }
// };

// var traditionalFunction = obj.a;
// var arrowFunction = obj.b;

// traditionalFunction(); //dynamic name
// arrowFunction(); // static name






this.name="first layer" //equals to window.name = "first layer"

const first = () => {
    console.log("1 " +this.name) // 1 first layer
    this.name = "second layer" 
    const second = () => {
        console.log("2 " + this.name) //2 second layer
        this.name="third layer"
        console.log("3 " + this.name) //3 third layer
    }
    console.log("4 " + this.name) //4 second layer
    second()
}

const firstLayer = first()



// var name="first layer" //equals to window.name = "first layer"

// const first = function(){
//     console.log("1 " + name) // 1 first layer
//     name = "second layer" 
//     const second = function(){
//         console.log("2 " + name) //2 second layer
//         name="third layer"
//         console.log("3 " + name) //3 third layer
//     }
//     console.log("4 " + name) //4 second layer
//     second()
// }

// const firstLayer = first()




