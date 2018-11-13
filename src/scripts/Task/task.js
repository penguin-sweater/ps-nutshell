/*
  author(s): Nolan
  purpose: defines a class that builds a single task element
*/
import DOMComponent from "nss-domcomponent"

class Task {
  constructor(props) {
    this.name = props.name
    this.dueBy = props.dueBy
    this.status = props.status
  }

  //   <p>
  //   <label>
  //     <input name="group1" type="radio" checked />
  //     <span>Red</span>
  //   </label>
  // </p>

  buildTaskElement(targetContainer, uniqueTaskStatus) {
    let taskIcon = new DOMComponent("i", { classList: "material-icons circle" }, "storage")
    let taskTitle = new DOMComponent("span", { classList: "title" }, `${this.name}`)
    let taskDueBy = new DOMComponent("p", { classList: "time" }, `${this.dueBy}`)

    let statusInput = new DOMComponent("input", {
      classList: "container  status-radio status-radio0",
      name: `statusRadio${uniqueTaskStatus}`,
      type: "radio"
    })
    let statusSpan = new DOMComponent("span", { classList: "container" }, "To Do")
    let statusLabel = new DOMComponent("label", { classList: "container" }, statusInput, statusSpan)
    let statusRadioContainer = new DOMComponent("p", { classList: "container" }, statusLabel)

    let statusInput2 = new DOMComponent("input", {
      classList: "container status-radio status-radio1",
      name: `statusRadio${uniqueTaskStatus}`,
      type: "radio"
    })
    let statusSpan2 = new DOMComponent("span", { classList: "container" }, "Doing")
    let statusLabel2 = new DOMComponent("label", { classList: "container" }, statusInput2, statusSpan2)
    let statusRadioContainer2 = new DOMComponent("p", { classList: "container" }, statusLabel2)

    let statusInput3 = new DOMComponent("input", {
      classList: "container status-radio status-radio2",
      name: `statusRadio${uniqueTaskStatus}`,
      type: "radio"
    })
    let statusSpan3 = new DOMComponent("span", { classList: "container" }, "Done")
    let statusLabel3 = new DOMComponent("label", { classList: "container" }, statusInput3, statusSpan3)
    let statusRadioContainer3 = new DOMComponent("p", { classList: "container" }, statusLabel3)

    let statusRadioCollection = new DOMComponent("div", { classList: "container" }, statusRadioContainer, statusRadioContainer2, statusRadioContainer3)
    let taskEdit = new DOMComponent("button", { classList: "edit-button btn-small waves-effect waves-light" }, "Edit")
    let taskSave = new DOMComponent("button", { classList: "save-button btn-small waves-effect waves-light" }, "Save")
    let taskDelete = new DOMComponent("button", { classList: "delete-button btn-small waves-effect waves-light" }, "Delete")
    let taskSection = new DOMComponent("li", { classList: "collection-item avatar" }, taskIcon, taskTitle, taskDueBy, statusRadioCollection, taskEdit, taskSave, taskDelete)
    let taskCollection = new DOMComponent("ul", { classList: "collection task-collection" }, taskSection)
    taskCollection.render(targetContainer)
  }
}

export default Task