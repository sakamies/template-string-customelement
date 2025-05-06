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

### Requires [Custom Elements Polyfill](https://github.com/ungap/custom-elements) in Safari.

Safari doesn't support extending built in elements as custom elements and probably for good reasons, but I couldn't figure out another way to have inert html in the document. Template elements don't allow reading their content as text, so that's a no go. The final way to go might be to have this be just a render function without being a custom element, but custom elements are just so nice and self contained.

Anyway, the polyfill will handle extended built ins just fine in Safari and is not a big overhead.

### Not a replacement for a reactive framework

This is great for simple cases and really I intend to use this for pages where I want to add some elements to a page based on a template. Not for realtime nested dom tree rendering. I like static pages.

## Licence, NPM module?

My repos lately are more of a journey of learning and writing, not necessarily meant as participation in the packages & components ecosystem.

This repo does not have a licence and is [not on NPM](https://htmx.org/essays/vendoring/). You do not have my permission for anything, but I hope your rebel spirit will let you learn from this, to code your own and make a package. Give credit and [behave](https://www.contributor-covenant.org).