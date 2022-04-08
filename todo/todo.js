form = document.getElementById("form")
todo = document.getElementById("todo")
type = document.getElementById("type-input")

function addListItem(text) {
  listElement = document.createElement('li');
  listElement.textContent = text;
  todo.append(listElement);
};

form.addEventListener("submit",function submitHandler(e) {
  if(type.value.trim().length != 0){
    e.preventDefault();
    addListItem(type.value);
    type.value = "";
    }
  else{
    return;
  }
});

  todo.addEventListener("click", function listClickHandler(e) {
    if(e.target && e.target.nodeName == "LI") {
      if(e.target.classList.contains("done")){
        e.target.remove();
      }
      else{
        e.target.classList.add("done")
      }
    }
  });
