/*
  Safe Text javascript code.

  Provide interactive elements for the demo.

*/

const App = (() => {
  const APP_NAME = 'safetext'
  const HUMAN_NAME = 'Safe Text'

  function start() {
    document.body.onload = showHumanAndAppNames()
  }

  const showHumanAndAppNames = () => {
    const header = document.createElement('h1')
    header.appendChild(
      document.createTextNode(`this is ${HUMAN_NAME}`)
    )
    document.body.appendChild(header)
  }


  return {
    start
  }
})();

App.start()
