# What's Sass

Sass(SCSS) is a CSS preprocessor, which is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS. Sass(SCSS) is perhaps the most popular preprocessor around right now.

## What's difference between SASS and SCSS

###Suffix
The Sass file end in *.sass* suffix, and SCSS file end in *.scss* suffix.

###Syntax Rule 
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
#Compilation
We need to compile SCSS file to CSS file. 
##Command compilation
###Single file compile command

```terminal
	sass <input path>/style.scss:<output path>/style.css
```

###Multiple file compiles command

```terminal
	sass sass/:css/
```
This command means compile all *.sass*(or *.scss*) files under *sass* directory to *.css* file,and put all these files in *css* directory.

###Watch flag
You can also watch individual files or directories with the --watch flag. The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. If you wanted to watch (instead of manually build) your *input.scss* file, you'd just add the watch flag to your command. 
The above commands now can be the following commands: 

```terminal
	sass --watch <input path>/style.scss:<output path>/style.css
	sass --watch sass/:css/
```

###Output style
There have four different output styles of SCSS, which directly affect the style of output CSS files:

* Nested 
* Expanded
* Compact
* Compressed

```terminal
	sass --watch test.scss:test.css --style nested/expanded/compact/compressed/
```
We won't cover the details of the difference between these four styles.


##Automated compilation
There are some tools like **Grunt** and **Gulp** we can use to compile SCSS, but we won't cover it in this article.

##Common error
### Encoding error
In the processing of compiling SCSS file, it does not support the **GBK** encoding, so the file encoding should be set as **utf-8** 


#SCSS Sytax
##Variable
###Variable definition
```scss
	$backgroundWidth: 200px;
```
###Default Variable 
```scss
	$backgroundWidth: 200px;
	$backgroundWidth: 150px !default;
```
From the sass documentation:

>You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.

So the value of the variable *backgroundWidth* in the above code will be 200px.

###Calling variable

```scss
	$width: 200px;
	.box {
	    width: $width;
	}
```

###Global variable and local variable
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

###Selector nesting

Now we have following CSS rules

```
nav a {
	color:red;
}
header nav a {
	color:green;
}
		
```


And we can apply selector nesting in SCSS:

```
nav {
  a {
    color: red;
    header & { //header a
      color:green;
    }
  }  
}
```

The **&**c haracter in Scss is unique in that it represents the current selector.


###Property nesting

Now we have following CSS rules:

```
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}
		
```
And we can apply property nesting in SCSS:

```
.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```


###Pseudo-class
Now we have following CSS rules:

```
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

```
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


###@mixin

According to the [Sass document](https://sass-lang.com/documentation/at-rules/mixin)

>Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.

So we can define a *mixin* in SCSS:

```
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

```
	@mixin border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}

	button {
	    @include border-radius;
	}

```

But it has limitations, it will generate redundant CSS rules.

For example, there has a piece of SCSS:

```
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

We can see it has a repeated rules.

### Extend

```
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


###Placeholder

 **%** is a placehoder sign, if this piece of code is not be called by **@extend**, otherwise the compiled code will merge the same code together.
 
 ```
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

//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
 ```
 
 
 
###Interpolation
 
 
 ```
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

###Comment

* Using '/\*' start. and end in "\*/"
* Start with "//"

```
//Comments

%mt5 {
  margin-top: 5px;
}

/Comments

.box {
  @extend %mt5;
}
```
