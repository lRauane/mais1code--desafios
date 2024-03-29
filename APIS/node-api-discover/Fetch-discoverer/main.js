const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      (userName.textContent = data.name),
        (userCity.textContent = data.city),
        (userAvatar.src = data.avatar);
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(erro => console.error(erro))
}

function updateUser(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Rauane",
  avatar: "https://avatars.githubusercontent.com/u/102835801?v=4",
  city: "Heliopolis",
};

const updateUsers = {
  name: "Jake",
  avatar: "https://picsum.photos/200/300",
  city: "Recife",
};

addUser(newUser);
updateUser(updateUsers, 1);
deleteUser(2);
getUsers();
getUser(1);
