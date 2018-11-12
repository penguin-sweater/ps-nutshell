/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/

// Grab nav elements
const friendsNav = document.getElementById("friends")
const chatNav = document.getElementById("chat")
const todoNav = document.getElementById("todo")
const eventsNav = document.getElementById("events")
const newsNav = document.getElementById("news")

const mainContainer = document.querySelector(".main-container")

// adds event listeners to each nav element
let navListeners = () => {
  friendsNav.addEventListener("click", e => {
    mainContainer.innerHTML = "<h>Your Friends</h>"
  })
  chatNav.addEventListener("click", e => {
    mainContainer.innerHTML = "<h>Your Chat</h>"
  })
  todoNav.addEventListener("click", e => {
    mainContainer.innerHTML = "<h>Your To Do List</h>"
  })
  eventsNav.addEventListener("click", e => {
    mainContainer.innerHTML = "<h>Your Events</h>"
  })
  newsNav.addEventListener("click", e => {
    mainContainer.innerHTML = "<h>Your News</h>"
  })
}

export default navListeners