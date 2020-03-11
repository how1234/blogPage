function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  if (startIndex > -1 && startIndex < this.observerList) {
    return this.observerList(obj, startIndex);
  }
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

function Subject() {
  this.observerList = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observerList.add(observer);
 
};

Subject.prototype.removeObserver = function(observer) {
  let r_index = this.observerList.indexOf(observer, 0);
  this.observerList.removeAt(r_index);
};

Subject.prototype.notify = function(context) {

  for (var i = 0; i < this.observerList.count(); i++) {
    console.log(this.observerList.get(i))
    this.observerList.get(i).update(context);
  }
};

function Observer() {
    this.update = function(){

    }
}

function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

var controlCheckBox = document.getElementById("mainCheckbox"),
  addBtn = document.getElementById("addNewObserver"),
  container = document.getElementById("observersContainer");

extend(controlCheckBox, new Subject()); //assign the function,value of subject to DOM element

controlCheckBox.onclick = function() {
  controlCheckBox.notify(controlCheckBox.checked); 
};

addBtn.onclick = addNewObserver;

function addNewObserver() {
  var check = document.createElement("input");

  check.type = "checkbox";

  extend(check, new Observer()); //assign the function,value of Observer to DOM element
  
//   console.log(check.update)
  check.update = function(value) { //rewrite the update function.
    this.checked = value;
  };
//   console.log(check.update)

  
  console.log(check)
  controlCheckBox.addObserver(check);//The DOM element is still a element, but it has the function defined in Observer

  container.appendChild(check);
}
