function addClient() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const list = document.getElementById("list");

  const li = document.createElement("li");
  li.textContent = name + " - " + email;

  list.appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}


