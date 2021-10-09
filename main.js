// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphs = document.querySelectorAll(".like-glyph")

glyphs.forEach(glyph => {
  glyph.addEventListener("click", (e) => {
    toggleLike(e)
  })
})

function toggleLike(e) {
  let heart = e.target

  mimicServerCall()
  .then(() => {
    console.log(alert)
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add("activated-heart");
    }
    else if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart");
    };
  })
  .catch(alert => {
    let modalMessage = document.querySelector("#modal-message")
    modalMessage.parentElement.classList.remove("hidden")
    setTimeout(() => {modalMessage.parentElement.classList.add("hidden")}, 3000)
    modalMessage.innerText = alert
    console.log(modalMessage)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
