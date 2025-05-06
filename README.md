# Template String Custom Element

## Usage

Import the element and define it.

```js
import { TemplateStringElement } from '/template-string.js'
customElements.define('template-string', TemplateStringElement)
```

Write a naked template string inside a script tag with this custom element. It's nice because you can write your template in your html file with html syntax highlighting, but it's still a real javascript template literal.

```html
<template-string id="template">
  <script type="text/html">
    <b>Hello</b>, <i>${name.toUpperCase()}</i>
    <br>
    2 + 2 = ${2 + 2}
    <br>
    `backticks are escaped`
  </script>
</template-string>
```

Render it with some data.

```js
const output = templateElement.render({ name: 'Santa' })
```

Maybe set that rendered html somewhere. Maybe render any old string, doesn't have to be html.

```js
someElement.innerHTML = output
```

The rendered template will be.

```html
<b>Hello</b>, <i>ALIVE</i>
<br>
2 + 2 = 4
<br>
&#96;backticks are escaped&#96;
```

## Caveats

This element is so simple that there has to be a thousand thingys like this already, but it's a fun exercise.

## Can't extend built in elements

Extending the script tag to be a custom element with `<script is="template-string">` would work in browsers other than Safari. They have good reasons why they say doing that is a bad idea though. So this needs to be a nested script tag inside a custom element for now.

### Not a replacement for a reactive framework

This is great for simple cases and really I intend to use this for pages where I want to add some elements to a page based on a template. Not for realtime nested dom tree rendering. This only renders Javascript template string literals, doesn't deal with the DOM or html on its own.

You can of course render nested templates if you need to, should work just fine.

I really like simple static pages.

## Licence, NPM module?

My repos lately are more of a journey of learning and writing, not necessarily meant as participation in the packages & components ecosystem.

This repo does not have a licence and is [not on NPM](https://htmx.org/essays/vendoring/). You do not have my permission for anything, but I hope your rebel spirit will let you learn from this, to code your own and make a package. Give credit and [behave](https://www.contributor-covenant.org).