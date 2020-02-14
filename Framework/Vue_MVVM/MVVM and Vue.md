# MVVM and Vue


model-view-viewmodel 


## Difference between jQuery and Vue
In jQuery, we should manipulate the view(DOM node) directly, but we only care about the model(data) in Vue.
## Vue 


### Reactivity

When data changed, the Vue listener will be triggered

data will be proxied on View-Model



Object.defineProperty is the key function of Reactivity. It can implement the getter and setter of an instance. Vue will react to every attribute changed in the object.

```javascript
Object.defineProperty(obj,"name",{

})


```



### Template Parsing

What is template in Vue. 

- Essence: String
- Has Logic like **v-for** and **v-if**
- Looks like HTML but it is different from HTML, which is statical.
- Finally template will finally transfer to HTML.
- First it should be translated to JS
	- It has logic
	- Rendering HTML
	- render()


### render()

render() 


The whole process of Vue Implement

1. Parsing template to render() method
2. Reactivity start listen
3. Render first and display page, then data binding.
4. Data change and trigger the rerender() method.
	




