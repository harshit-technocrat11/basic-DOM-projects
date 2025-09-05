// Get query string from URL
const queryString = window.location.search;

// Convert query string to URLSearchParams object
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

// Get user ID from URL parameters
const userId = urlParams.get("id");
console.log(userId);

// Find the user object by ID
let user = users.filter((obj) => {
  if (obj.id == userId) return obj;
});
user = user[0];
console.log(user);
console.log(user.name);
console.log(user.email);

// Function to generate user profile HTML
function showProfile(user) {
  return `
        <div class="user-profile-container">
            <img src="${user.profileURL}" id="user-avatar" alt="loading profile pic">
            <h2 id="user-name">${user.name}</h2>
            <p id="user-email">${user.email}</p>
            <p id="user-desc">${user.description}</p>
        </div>
    `;
}

// Select the profile card container
let profileCard = document.querySelector(".profile-card");

console.log(profileCard);
// Render the user's profile in the container
profileCard.innerHTML = showProfile(user);
