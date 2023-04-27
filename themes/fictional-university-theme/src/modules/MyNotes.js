import $ from 'jquery'

class MyNotes {
  constructor() {
    this.events()
  }

  events() {
    $(".delete-note").on("click", this.deleteNote)
  }

  // Methods will go here
  deleteNote() {
    alert("you Clicked delete MOM")
  }
}

export default MyNotes