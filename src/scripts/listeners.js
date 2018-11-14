/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/
import clear from "./clear"
import eventPage from "./Event/eventOutput"
import eventFormBuilder from "./Event/eventForm"
import loadMessages from "./Message/msgOutput"
import taskPage from "./Task/taskOutput"
import API from "./api"
import userSession from "./sessionStorage"

// Grab nav elements
const friendsNav = document.getElementById("friends")
const chatNav = document.getElementById("chat")
const todoNav = document.getElementById("todo")
const eventsNav = document.getElementById("events")
const newsNav = document.getElementById("news")
const logoutNav = document.getElementById("logout")
const logo = document.querySelector(".brand-logo")

const mainContainer = document.querySelector(".main-container")

// adds event listeners to each nav element
let navListeners = () => {
  friendsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your Friends</h>"
  })
  chatNav.addEventListener("click", () => {
    clear()
    loadMessages()
  })
  todoNav.addEventListener("click", () => {
    clear()
    taskPage()
  })
  eventsNav.addEventListener("click", () => {
    clear()
    eventPage()
    eventFormBuilder.eventFormListener()
  })
  newsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your News</h>"
  })
  logoutNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>GET OUT WE DON'T WANT YOU ANYWAY!</h>"
  })
  logo.addEventListener("click", () => {
    clear()
    API.getData(`users/${userSession.getUser()}`).then((users) => {
      welcomePage(users.displayName)
    })
  })
}

export default navListeners
