# Template String Custom Element

Import the element and define it.

```js
import { TemplateStringElement } from '/template-string.js'
customElements.define('template-string', TemplateStringElement, { extends: "script" })
```

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
const output = templateElement.render({ name: 'Santa' })
```

Maybe set that rendered html somewhere. Maybe render any old string, doesn't have to be html.

```js
someElement.innerHTML = output
```

## Caveats

Requires [Custom Elements Polyfill](https://github.com/ungap/custom-elements) in Safari.

Safari doesn't support extending built in elements as custom elements and probably for good reasons, but I couldn't figure out another way to have inert html in the document. Template elements don't allow reading their content as text, so that's a no go. The final way to go might be to have this be just a render function without being a custom element, but custom elements are just so nice and self contained.

Anyway, the polyfill will handle extended built ins just fine in Safari and is not a big overhead.