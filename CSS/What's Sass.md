* [What's Sass](#whats-sass)
* [Compilation](#sass-compilation)
* [SCSS Sytax](#scss-sytax)
* [Numeric Operation](#numeric-operation)
* [Flow Control](#flow-control)


# What's Sass

Sass(SCSS) is a CSS preprocessor, which is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS. Sass(SCSS) is perhaps the most popular preprocessor around right now.

## What's difference between SASS and SCSS

### Suffix
The Sass file end in *.sass* suffix, and SCSS file end in *.scss* suffix.

### Syntax Rule 
There has no brackets and semicolons in Sass, which is different from the original CSS. Sass has a more strict requirement for intention since it doesn't have brackets and semicolons. However, SCSS has a similar rule as CSS. 

**Sass** 

```sass
$font-stack: Helvetica, sans-serif 
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

**SCSS**

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```
For convenience, we decide to use SCSS syntax in the following contents.
# Sass Compilation
We need to compile an SCSS file to a CSS file. 
## Command compilation
### Single file compile command

```terminal
    sass <input path>/style.scss:<output path>/style.css
```

###Multiple files compiles command

```terminal
    sass sass/:css/
```
This command means compile all *.sass*(or *.scss*) files under *sass* directory to *.css* file,and put all these files in *css* directory.

### Watch flag
You can also watch individual files or directories with the --watch flag. The watch flag tells Sass to watch your source files for changes and re-compile CSS each time you save your Sass. If you wanted to watch (instead of manually build) your *input.scss* file, you'd just add the watch flag to your command. 
The above commands now can be the following commands: 

```terminal
    sass --watch <input path>/style.scss:<output path>/style.css
    sass --watch sass/:css/
```

### Output style
There have four different output styles of SCSS, which directly affect the style of output CSS files:

* Nested 
* Expanded
* Compact
* Compressed

```terminal
    sass --watch test.scss:test.css --style nested/expanded/compact/compressed/
```
We won't cover the details of the difference between these four styles.


## Automated compilation
There are some tools like **Grunt** and **Gulp** we can use to compile SCSS, but we won't cover it in this article.

## Common error
### Encoding error
In the processing of compiling SCSS file, it does not support the **GBK** encoding, so the file encoding should be set as **utf-8** 


# SCSS Sytax
## Variable
### Variable definition
```scss
$backgroundWidth: 200px;
```
### Default Variable 
```scss
$backgroundWidth: 200px;
$backgroundWidth: 150px !default;
```
From the sass documentation:

>You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.

So the value of the variable *backgroundWidth* in the above code will be 200px.

### Calling variable

```scss
$width: 200px;
.box {
    width: $width;
}
```

### Global variable and local variable
```scss
$color:orange !default; //global variable
.block {
  color: $color;
}
em {
  $color: red; //local variable
  a {
    color: $color;
  }
}
```

### Selector nesting

Now we have the following CSS rules.

```css
nav a {
    color:red;
}
header nav a {
    color:green;
}
        
```


And we can apply selector nesting in SCSS:

```scss
nav {
  a {
    color: red;
    header & { //header a
      color:green;
    }
  }  
}
```

The **&** character in Scss is unique in that it represents the current selector.


### Property nesting

Now we have the following CSS rules:

```css
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}
        
```
And we can apply property nesting in SCSS:

```scss
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```


### Pseudo-class
Now we have following CSS rules:

```css
clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
        
```

And we can apply pseudo-class nesting in SCSS:

```scss
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}
```


### @mixin

According to the [Sass document](https://sass-lang.com/documentation/at-rules/mixin)

>Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.

So we can define a *mixin* in SCSS:

```scss
    @mixin border-radius {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
    //With parameter(its default value is 5px)
    @mixin border-radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}

    //Complex mixin
    
    @mixin box-shadow($shadow...) {
       @if length($shadow) >= 1 {
        @include prefixer(box-shadow, $shadow);
  } @else{
        $shadow:0 0 4px rgba(0,0,0,.3);
        @include prefixer(box-shadow, $shadow);
  }
}
```

Then we can call this *mixin* by using **@include**

```scss
    @mixin border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}

    button {
        @include border-radius;
    }

```

But it has limitations; it can generate redundant CSS rules.

For example, there is a piece of SCSS:

```scss
@mixin border-radius{
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.box {
  @include border-radius;
  margin-bottom: 5px;
}

.btn {
  @include border-radius;
}

```

Then its the compiled CSS file:

```
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

```

We can see it has repeated rules.

### Extend

```scss
//SCSS
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```


```css
//CSS
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
}

.btn-second {
  background-clor: orange;
  color: #fff;
}

```

 
### Placeholder

 **%** is a placeholder symbol, and if this piece of code is not be called by **@extend**. Otherwise, the compiled code can merge the same code.
 
```scss
 //SCSS
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
```
```css
//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
 ```
 
 
 
### Interpolation
 
 
 ```scss
     @mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
 
 ```

### Comment

* Using '/\*' start. and end in "\*/"
* Start with "//"

``` scss
//Comments

%mt5 {
  margin-top: 5px;
}

/Comments

.box {
  @extend %mt5;
}
```

## Numeric Operation

### Addition

We can do the property addition, but it should be in the same unit.

```scss
//SCSS
.box {
  width: 20px + 8in;
}
//CSS
.box {
  width: 788px;
}

```
Otherwise, the compiler will pop up an error.

```scss
.box {
  width: 20px + 1em; //Incompatible units: 'em' and ‘px'.
}

```

### Substraction
The rule is as same as in addition.

```scss
//SCSS

$full-width: 960px;
$sidebar-width: 200px;

.content {
  width: $full-width -  $sidebar-width;
}
```

```css
//CSS
$full-width: 960px;

.content {
  width: $full-width -  1em;
}

```

### Multiplication

Just look the code pieces:

```scss

//SCSS
.box {
  width:10px * 2px; //compile error
}

.box {
  width: 10px * 2; //compile success
}

.box {
  width: 20px * 2em; //error: 40em*px isn't a valid CSS value.
}
```

```css
//CSS

.box {
  width: 20px;
}


```

### Division

Since **"/"** is a valid symbol in CSS, so we can't directly use **"/"** in SCSS, so we need to use it in three ways:

* If the expression contains a function or a variable, we can directly use it.
* If the expression only contains values, we should wrap it in parentheses.
* If the expression contains other numeric operations.

```scss
p {
  font: 10px/8px;             
  // Pure CSS, so it isn't division
  
  $width: 1000px;
  width: $width/2;            
  // It has Variable, so it's division
  width: round(1.5)/2;        
  // It has function，so it's division
  height: (500px/2);          
  // It has parentheses，so it's division
  margin-left: 5px + 8px/2px;
  // It contains other numberic operation(+), so it's division.
}

```

### Operation priority

The operation priority is the same as we do in our life.

```scss
//SCSS

.box {
  width: ((220px + 720px) - 11 * 20 ) / 12 ;  
}
```
```css
//CSS
.box {
  width: 60px;
}
```

###Color numberic operation

```scss
//SCSS

p {
  color: #010203 + #040506;  //Addition
}

p {
  color: #010203 * 2; //Multiplication
}
```
```css
//CSS
p {
  color: #050709; //Addition
}

p {
  color: #020406; //Multiplication
}

```

There have three color parts in the color value(red, green, and blue); the addition will add the values in these three parts, respectively. Therefore, the calculated value above is #05(01+04)07(02+05)09(03+06). Multiplication applies in the same rule.

### String splice

We can use **"+"** to splice to string directly. Whatever a string gets wrapped by a quote or not, and it can always be spliced with another string.

```
//SCSS
1.
$content: "Hello" + "" + "Sass!";
.box:before {
  content: " #{$content} ";
}

2.
div {
  cursor: e + -resize;
}

3.
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```
```css
//CSS

1.
.box:before {
  content: " Hello Sass! ";
}

2.
div {
  cursor: e-resize;
}

3.
p:before {
  content: "Foo Bar";
  font-family: sans-serif; }
```


The quotes' existence in the compiled CSS depends on the string in the most left of the expression. "Foo" has quotes, so "Foo Bar" has quotes, and **sans-** has no quotes, so the **sans-serif** won't get wrapped. 


# Flow control
## @if

**@if** rule is a SassScript, it will return a CSS rule based on its condition. Moreover, we can use it with **@else if** and **@else**.

```scss
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
      @debug "$boolean is #{$boolean}";
      display: block;
    }
  @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.block {
  @include blockOrHidden;
}

.hidden{
  @include blockOrHidden(false);
}

```

```css
//Compiled CSS
.block {
  display: block;
}

.hidden {
  display: none;
}

```


## @for

There has two ways in using **@for**:

```scss
@for $i from <start> through <end>
@for $i from <start> to <end>

```

* **start** stands for starting value
* **end** stands ending value
* **$i** stands for variable


```SCSS
//scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

@for $i from 1 to 4 {
  .item-#{$i} { width: 2em * $i; }
}
```

```CSS
//compiled
.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}
```

We can see the difference between keyword **through** and **to** is **through** include the ending value but **to** doesn't.

## @while

```scss
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}

```

```css
.while-4 {
  width: 24px;
}

.while-3 {
  width: 23px;
}

.while-2 {
  width: 22px;
}

.while-1 {
  width: 21px;
}

```

## @Each

**@Each** is iterating whole list.

```scss
@each $var in <list>


$list: adam john wynn mason kuroir;//$list is a list

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/#{$author}.png") no-repeat;
        }
    }
}

.author-bio {
    @include author-images;
}
```

```css
//compiled css
.author-bio .photo-adam {
  background: url("/images/adam.png") no-repeat; }
.author-bio .photo-john {
  background: url("/images/john.png") no-repeat; }
.author-bio .photo-wynn {
  background: url("/images/wynn.png") no-repeat; }
.author-bio .photo-mason {
  background: url("/images/mason.png") no-repeat; }
.author-bio .photo-kuroir {
  background: url("/images/kuroir.png") no-repeat; }

```


# Function
Some useful built-in function

### Unquote()

```scss
//SCSS
.test1 {
    content:  unquote('Hello Sass!') ;
}
.test2 {
    content: unquote("'Hello Sass!");
}
.test3 {
    content: unquote("I'm Web Designer");
}
.test4 {
    content: unquote("'Hello Sass!'");
}
.test5 {
    content: unquote('"Hello Sass!"');
}
.test6 {
    content: unquote(Hello Sass);
}
```

```css
//CSS
.test1 {
  content: Hello Sass!; }

.test2 {
  content: 'Hello Sass!; }

.test3 {
  content: I'm Web Designer; }

.test4 {
  content: 'Hello Sass!'; }

.test5 {
  content: "Hello Sass!"; }

.test6 {
  content: Hello Sass; }

```

From the test cases, it can be seen that the unquote() only can remove the first and last quotes from the string.


## quote()
quote() has the oppsite function with unquote().
