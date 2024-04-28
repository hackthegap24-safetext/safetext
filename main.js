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
    showUserScreen()
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

    // get the chat message input element
    const userMessage1 = document.getElementById("usrMsg1");

    // insert text into chat-message area
    const usr_msg_1_text = ":white_heart: Happy hour today?"
    setTimeout(() => {
      chatMessage.value = usr_msg_1_text
      setTimeout(() => {
        userMessage1.innerText = usr_msg_1_text
        setTimeout(showDispatchScreen, 2000)
      }, 2000)
    }, 3000)
  }

  const showDispatchScreen = () => {
    // get the dispatch dialog element
    // create the user message for "Hello there!"
    // insert the user's mnessager node into the dialog
    // call setTimeout with nextUserMessage
    console.log('sshow dispatch screen')
  }

  return {
    start
  }
})();

App.start()
