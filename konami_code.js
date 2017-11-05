const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  var cheats = []
  body.addEventListener('keydown', function(e) {
    console.log(e.which)
    cheats.push(parseInt(e.which))
    console.log(cheats)
  })
}