form = document.getElementById("form")
receive = document.getElementById("receive-input")
type = document.getElementById("type-input")

form.addEventListener("submit",function submitHandler(e) {
  if(type.value.trim().length != 0){
  e.preventDefault();
  receive.textContent = type.value;
  type.value = "";
  }
  else{
    receive.textContent = receive.textContent;
  }
});


