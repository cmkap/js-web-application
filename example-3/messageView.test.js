/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const MessageView = require('./messageView');
 
 describe('MessageView', () => {
   it('clicks the button', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const view = new MessageView();

     const inputEl = document.querySelector("#message-input")
     inputEl.value = 'Heyyy'
     
 
     const buttonEl = document.querySelector('#show-message-button');
     buttonEl.click();
 
     expect(document.querySelector('div#message').innerText).toEqual('Heyyy');
   });
 
   it('hides the message', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const view = new MessageView();

     const inputEl = document.querySelector('#message-input')
 
     const buttonEl = document.querySelector('#show-message-button');
     buttonEl.click();
     buttonEl.click();
 
     const hideButtonEl = document.querySelector('#hide-message-button');
     hideButtonEl.click();
 
     expect(document.querySelector('#message')).toBeNull();
   })
 });