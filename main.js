/*
  Safe Text javascript code.

  Provide interactive elements for the demo.

*/

const App = (() => {
  const APP_NAME = 'safetext'
  const HUMAN_NAME = 'Safe Text'

  function start() {
    document.body.onload = listenForButtonPush()
  }

  const listenForButtonPush = () => {
    const pushMeBtn = document.getElementById('pushMe')
    pushMeBtn.addEventListener('click', handlePushMe)
  }

  const handlePushMe = () => {
    const rightSide = document.getElementById('rightSide')
    rightSide.classList.remove('hidden')
    rightSide.classList.add('visible')
    removePushMeBtn()
    showChatDialog()
  }

  const removePushMeBtn = () => {
    const pushMeBtn = document.getElementById('pushMe')
    pushMeBtn.remove()
  }

  const showChatDialog = () => {
    const chatDialog = document.getElementById('chatDialog')
    chatDialog.classList.remove('hidden')
    chatDialog.classList.add('visible')
  }

  const showUserScreen = () => {
    // get the dialog element
    const chatDialog = document.getElementById('chatDialog')

    // get the chat message input element
    const chatMessage = document.getElementById("chat-message");

    // create a new text node "hello there!"
    let textNode = document.createTextNode("Hello!");
    
    // insert text into chat-message area
    chatMessage.value = "test";

    // insert the node in the dialog
    chatDialog.append(textNode );

    // call setTimeout with the showDispatchScreen
    setTimeout(showDispatchScreen, 2000)
  }

  const showDispatchScreen = () => {
    // get the dispatch dialog element
    // create the user message for "Hello there!"
    // insert the user's mnessager node into the dialog
    // call setTimeout with nextUserMessage
  }

  return {
    start
  }
})();

App.start()
