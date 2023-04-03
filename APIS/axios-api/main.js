const url = "http://localhost:5500/api";

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((erro) => console.error(erro));
}

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      console.log(response);
    })
    .catch((erro) => console.error(erro));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      const data = response.data;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userId.textContent = data.id;
      userAvatar.src = data.avatar;
    })
    .catch((erro) => console.error(erro));
}

function updateUser(id, userUpdate) {
  axios
    .put(`${url}/${id}`, userUpdate)
    .then((response) => {
      console.log(response);
    })
    .catch((erro) => console.error(erro));
}

function deleteUser(id){
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response))
  .catch(erro => console.error(erro))
}
// deleteUser(1)

getUsers();

// addNewUser(newUser)
const newUser = {
  name: "Rauane",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de janeiro",
};
// getUser(1)

const userUpdate = {
  name: "Marcelo calvo",
  avatar: "https://picsum.photos/200/300",
  city: "Maceió",
};
// updateUser(3, updateUser)
