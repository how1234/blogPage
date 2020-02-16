var book = {
  title: "Professional JavaScript",
  authors: ["Nicholas C. Zakas"],
  edition: 3,
  year: 2011,
  toJSON:function(){
    return this.title
  }
};

var jsonText = JSON.stringify(book, null, 4); 

console.log('====================================');
console.log(jsonText);
console.log('====================================');


var parsedBook = JSON.parse(jsonText)

console.log(parsedBook);
