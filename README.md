# Template String Custom Element

Write a naked template string inside a script tag with this custom element. It's nice because you can write your template in your html file with html syntax highlighting, but it's a real javascript template literal.

```html
<script id="template" is="template-string" type="text/html">
  <b>Hello</b>, <i>${name.toUpperCase()}</i>
  <br>
  2 + 2 = ${2 + 2}
  <br>
  `backticks are escaped`
</script>
```

Render it with some data.

```js
const output = template.render({ name: 'Santa' })
```

Maybe set that rendered html somewhere. Mayby render any old string, doesn't have to be html.

```js
someElement.innerHTML = output
```