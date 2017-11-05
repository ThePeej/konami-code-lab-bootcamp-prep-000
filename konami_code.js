const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const index = 0

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  var cheats = []
  body.addEventListener('keydown', function(e) {
    console.log(e.detail || e.which)
    cheats.push(parseInt(e.detail || e.which))
    debugger;
    console.log(cheats)
    if (cheats === code) {
      console.log('Nailed it!')
      alert('1337 HAXXOR!!')
    } 
    }
  })
}
