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


  return {
    start
  }
})();

App.start()
