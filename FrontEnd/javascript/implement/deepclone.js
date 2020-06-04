function clone(obj) {
  if (obj instanceof Array) return Array.from(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") {
    return obj;
  }
  let o = Object.create(obj.__proto__);

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = clone(obj[i]);
    }
  }
  return o;
}

function person(pname) {
  this.name = pname;
}

const Messi = new person("Messi");

function say() {
  console.log("hi");
}

const oldObj = {
  a: say,
  c: new RegExp("ab+c", "i"),
  d: Messi,
  e:[1,2,3]
};

const newObj = clone(oldObj);
console.log(oldObj)
console.log(newObj)