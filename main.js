/*
  Safe Text javascript code.

  Provide interactive elements for the demo.

*/

const App = (() => {
  const APP_NAME = 'safetext'
  const HUMAN_NAME = 'Safe Text'

  // Just a simple dialog.Let me know if you guys thing we should change something
  const DIALOG = [
    { victimSends: "🤍 Happy hour today ?", dispatcherReceives: "Location + Domestic violence happening SEND HELP NOW!!" },
    {
      dispatcherSends: "Has anyone been injured ?",
      victimReceives: "Is anyone else coming as well ?"
    },
    {
      victimSends: "Only me right now",
      dispatcherReceives: "One but with a potential for more"
    },
    {
      dispatcherSends: "Are weapons involved ?",
      victimReceives: "Anything I should bring ?"
    },
    {
      victimSends: "Yes: ❤️",
      dispatcherReceives: "Yes and bleeding"
    },
    {
      dispatcherSends: "Help is on the way", victimReceives: "OK! See ya there!👋"
    }
  ]

  let chatDialog;

  // @param sendOrReceive [Boolean] true if sending, false if receiving
  const chatMsgTemplate = (msg, sendOrReceive = false) => {
    const newLine = document.createElement('div')
    newLine.classList = ['row no-gutters']
    const newLineConstraint = document.createElement('div')
    newLineConstraint.classList = ['col-md-9']
    if (sendOrReceive) {
      newLineConstraint.classList.add('offset-md-3')
    }
    const newLineChatBubble = document.createElement('div')
    newLineChatBubble.classList = [`chat-bubble chat-bubble--${sendOrReceive ? 'right' : 'left'}`]
    const textNode = document.createTextNode(msg)
    console.log(textNode)
    newLineChatBubble.appendChild(textNode)
    newLineConstraint.appendChild(newLineChatBubble)
    newLine.appendChild(newLineConstraint)

    console.log(newLine)
    return newLine
  }


  function start() {
    document.body.onload = listenForButtonPush()
    chatDialog = document.getElementById('chatDialog')
  }

  const listenForButtonPush = () => {
    const pushMeBtn = document.getElementById('pushMe')
    pushMeBtn.addEventListener('click', handlePushMe)
  }

  const handlePushMe = () => {
    const rightSide = document.getElementById('dispatcherSide')
    rightSide.classList.remove('hidden')
    rightSide.classList.add('visible')
    removePushMeBtn()
    showChatDialog()
    runDialog()
  }

  const removePushMeBtn = () => {
    const pushMeBtn = document.getElementById('pushMe')
    pushMeBtn.remove()
  }

  const showChatDialog = () => {
    chatDialog.classList.remove('hidden')
    chatDialog.classList.add('visible')
  }

  const delayTimer = ms => new Promise(res => setTimeout(res, ms))

  const runDialog = async () => {
    let line
    for (let index = 0; index < DIALOG.length; index++) {
      line = DIALOG[index]
      // showLine(DIALOG[index], index)
      const userTextBox = document.querySelector('#victimSide #chat-message')
      const userDialog = document.querySelector(`#victimSide #chat-panel`)
      // add dispatch side elements
      const disTextBox = document.querySelector('#dispatcherSide #chat-message')
      const disDialog = document.querySelector(`#dispatcherSide #chat-panel`)

      if (line.victimSends) {
        await delayTimer(1000)
        userTextBox.innerText = line.victimSends
        await delayTimer(1500)
        userTextBox.innerText = ''
        userDialog.appendChild(chatMsgTemplate(line.victimSends, true))
        await delayTimer(1000)
        disDialog.appendChild(chatMsgTemplate(line.dispatcherReceives, false))
      } else {
        await delayTimer(1000)
        disTextBox.innerText = line.dispatcherSends
        await delayTimer(1500)
        disTextBox.innerText = ''
        disDialog.appendChild(chatMsgTemplate(line.dispatcherSends, true))
        await delayTimer(1000)
        userDialog.appendChild(chatMsgTemplate(line.victimReceives, false))
      }
      await delayTimer(500)
    }
  }

  // const showLine = (line, index) => {
  //   const userTextBox = document.querySelector('#victimSide #chat-message')
  //   const userDialog = document.querySelector(`#victimSide #chat-panel`)
  //   // add dispatch side elements
  //   const disTextBox = document.querySelector('#dispatcherSide #chat-message')
  //   const disDialog = document.querySelector(`#dispatcherSide #chat-panel`)

  //   if (line.victimSends) {
  //     setTimeout(
  //       () => {
  //         console.log(line)
  //         userTextBox.innerText = line.victimSends
  //         setTimeout(() => {
  //           userTextBox.innerText = ''
  //           userDialog.appendChild(chatMsgTemplate(line.victimSends, true))
  //           setTimeout(() => { disDialog.appendChild(chatMsgTemplate(line.dispatcherReceives, false)) }, 1000)
  //         }, 1500)
  //       }, 3000)
  //   } else {
  //     setTimeout(
  //       () => {
  //         console.log(line)
  //         disTextBox.innerText = line.dispatcherSends
  //         setTimeout(() => {
  //           disTextBox.innerText = ''
  //           disDialog.appendChild(chatMsgTemplate(line.dispatcherSends, true))
  //           setTimeout(() => { userDialog.appendChild(chatMsgTemplate(line.victimReceives, false)) }, 1000)
  //         }, 1500)
  //       }, 3000)
  //   }
  // }

  return {
    start
  }
})();

App.start()

// Returns a Promise that resolves after "ms" Milliseconds
// const timer = ms => new Promise(res => setTimeout(res, ms))

// async function load() { // We need to wrap the loop into an async function for this to work
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//     await timer(3000); // then the created Promise can be awaited
//   }
// }
