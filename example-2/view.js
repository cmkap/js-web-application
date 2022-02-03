class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let paragraphEl = document.createElement('p');
    paragraphEl.append("This paragraph has been dynamically added by JavaScript!")
    this.mainContainerEl.append(paragraphEl);
  }
}

module.exports = View;