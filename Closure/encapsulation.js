function Student(param_name,param_age){
    var m_name,m_age;
 
    this.setName = function(name){
        m_name  = name;
    };   
   this.getName = function(){
        return m_name;
    };
 
 
    this.setName(param_name);
}
 
var student = new Student('John');
console.log(student._mname) //undefine
console.log(student.getName()); //john
 
student.setName('zjw');
console.log(student.getName());
