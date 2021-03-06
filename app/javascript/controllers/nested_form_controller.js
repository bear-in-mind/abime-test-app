import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "associations", "template", "association" ]

  connect() {
    this.wrapperClass = this.data.get("wrapperClass") || "nested-fields"
  }

  add_association(event) {
    event.preventDefault()
    const content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, this.timestamp)
    this.associationsTarget.insertAdjacentHTML('beforeend', content)
  }

  remove_association(event) {
    event.preventDefault()

    let wrapper = event.target.closest("." + this.wrapperClass)

    // New records are simply removed from the page
    if (wrapper.dataset.newRecord == "true") {
      wrapper.remove()

    // Existing records are hidden and flagged for deletion
    } else {
      wrapper.querySelector("input[name*='_destroy']").value = 1
      wrapper.style.display = 'none'
    }
  }

  replaceCounterInParam = (nameAttribute, parent, child) => {
    let regex = new RegExp(`.*(${parent})(\[${child}\])(.*)`, 'g');
    nameAttribute.replace(regex, `$1[${this.timestamp}]$2$3`)
  }

  get timestamp() {
    return new Date().valueOf();
  }
}
