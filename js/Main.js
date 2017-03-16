// Excersise for beginner todolist
function todoList() {
  var item = document.getElementById("todoInput").value
  var text = document.createtextNode(item)
  var newItem = document.createElement("Li")
  newItem.appendChild(text)
  document.getElementById("todoList").appendChild(newItem)
}
