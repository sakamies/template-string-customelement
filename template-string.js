export class TemplateStringElement extends HTMLElement {
  #template
  #value

  constructor() {super()}

  #setTemplate = () => {
    if (!this.#template) {
      this.#template = this.firstElementChild?.text?.replaceAll('`', '&#96;')
    }
  }

  connectedCallback() {
    this.#setTemplate()
    if (document.readyState !== "complete") {
      document.addEventListener("DOMContentLoaded", this.#setTemplate)
    }
  }

  render(data) {
    if (document.readyState !== 'complete') {
      this.#setTemplate()
    }
    const dataKeys = Object.keys(data)
    const dataValues = Object.values(data)

    try {
      const renderFunction = new Function(...dataKeys, `return \`${this.#template}\``)
      const value = renderFunction(...dataValues)
      this.#value = value
      return value
    } catch (e) {
      console.error('Template rendering error:', e)
      return ''
    }
  }

  // Cached last render and escaped template.
  get value() {return this.#value}
  get template() {return this.#template}
}
