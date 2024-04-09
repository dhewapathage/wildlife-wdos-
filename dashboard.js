let currentUser = localStorage.getItem("Current_User");



if (currentUser == "admin") {
  alert("Welcome Admin");
}

// Add event listeners to all edit buttons
const editBtns = document.querySelectorAll(".editBtn");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageName = btn.getAttribute("data-page");
    window.open(
      `editor.html`, 
      "Editor",
      "width=600,height=400"
    );
    editPage(pageName);
    if (user) {
      alert("Login successful! Welcome, " + user.username);
    
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});



if (currentUser == null) {
  document.getElementById("dash").style.display = "none";
} else {
  document.getElementById("dash").style.display = "block";
  // document.getElementById("message").style.display = "none";

  if (currentUser == "user") {
    document.getElementById("subscriptions").style.display = "none";
  } else {
    function sub(json_path) {
      // This is the function to create the table
      let code = ``;
      for (let i = 0; i < json_path.length; i++) {
        code += `<li>${json_path[i]}</li>`;
      }
      return code;
    }
    // Assuming subscriptions is retrieved from local storage and is an array of email addresses
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions"));

    // Check if subscriptions is not null and is an array
    if (subscriptions && Array.isArray(subscriptions)) {
      document.getElementById("emialLists").innerHTML = sub(subscriptions);
    } else {
      // Handle the case where subscriptions is not found or not an array
      console.error("Subscriptions data is missing or invalid.");
    }
  }
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {
  // Clear the current user from local storage
  localStorage.removeItem("Current_User");
  // Redirect to the login page or perform any other necessary actions
  window.location.href = "login.html";
});

// Add event listener to the logout button
document.getElementById("logoutBtn").addEventListener("click", logout);
