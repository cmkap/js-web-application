class MessageView {
  constructor() {
    // this.inputEl = document.querySelector('#message-input')
    
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {

    let value = document.querySelector('#message-input').value
    let messageEl = document.createElement('div')
    messageEl.id = 'message';
    messageEl.innerText = value;
    this.mainContainerEl.append(messageEl);
    console.log("Thanks for clicking me");
  }

  hideMessage() {
    let messages = document.querySelectorAll('#message');
    // document.querySelector('#message').style.display = "none";
    messages.forEach(message => {
      message.remove();
    })
    console.log("Thanks for clicking me too")
  }
}

module.exports = MessageView;
