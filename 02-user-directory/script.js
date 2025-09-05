const userContainer = document.querySelector(".user-container");

const searchInput = document.querySelector("#searchInput");

const outputText = document.querySelector("#outputText");

function renderUsers(users_objs) {
  userContainer.innerHTML = "";

  const userCards = users_objs.map((user) => {
    console.log(user);
    console.log(user.profileURL);
    return `
        <a href="userProfile.html?id=${user.id}" >
        <div class="userItem">
          <img src="${user.profileURL}" alt="error loading image" />

          <div class="userDetails">
            <p>${user.name}</p>
            <span>${user.email}</span>
          </div>
        </div>
      </a>
        `;
  });

  userContainer.innerHTML = userCards.join("");

  const userItems = userContainer.querySelectorAll(".userItem");

  console.log(userItems);

  

}



//for filtered display -searchedUsers
searchInput.addEventListener("input", (e) => {
  outputText.textContent = e.target.value;

  // adding serach functionality
  const searchItem = e.target.value.toLowerCase();

  const filteredUsers = users.filter((user) => {
    const email = user.email.toLowerCase();
    const name = user.name.toLowerCase();

    return name.includes(searchItem) || email.includes(searchItem);
  });

  renderUsers(filteredUsers);
});

//direect to user profile

//normal - render users - if search - empty
renderUsers(users);
