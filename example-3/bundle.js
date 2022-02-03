(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayMessage() {
          let value = document.querySelector("#message-input").value;
          let messageEl = document.createElement("div");
          messageEl.id = "message";
          messageEl.innerText = value;
          this.mainContainerEl.append(messageEl);
          console.log("Thanks for clicking me");
        }
        hideMessage() {
          let messages = document.querySelectorAll("#message");
          messages.forEach((message) => {
            message.remove();
          });
          console.log("Thanks for clicking me too");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
