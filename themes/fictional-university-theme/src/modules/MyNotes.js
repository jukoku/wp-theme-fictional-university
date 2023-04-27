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
    alert("you Clicked delete 이하하 ㅋㅋㅋ")
  }
}

export default MyNotes