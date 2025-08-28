document.getElementById("registrationForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save data locally (MVP only – backend needed for real apps)
  localStorage.setItem("candidateData", JSON.stringify({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    domain: document.getElementById("domain").value,
    password: password
  }));

  // Redirect to payment page
  window.location.href = "payment.html";
});
