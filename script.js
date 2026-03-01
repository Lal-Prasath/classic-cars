function Details(btn) {
  const details = btn.previousElementSibling;
  if (details.style.display === "block") {
    details.style.display = "none";
    btn.innerText = "View Details";
  } else {
    details.style.display = "block";
    btn.innerText = "Hide Details";
  }
}
///Fact Counter Animation on Scroll-----------------
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounter() {
  counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;
    let speed = target / 80;

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(speed);
        counter.innerText = count + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + "+";
      }
    };

    counter.style.opacity = 1;
    updateCount();
  });
}

function onScroll() {
  const factSection = document.querySelector('.fact');
  if (!factSection) return;

  const rect = factSection.getBoundingClientRect();
  if (!started && rect.top < window.innerHeight - 100) {
    startCounter();
    started = true;
  }
}

window.addEventListener('scroll', onScroll);
////login--------------------------------------------------------

const loginBtn = document.getElementById("loginBtn");

// Check login state on load
if (localStorage.getItem("isLoggedIn") === "true") {
  loginBtn.textContent = "Logout";
} else {
  loginBtn.textContent = "Login";
}

// Handle click
loginBtn.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    localStorage.setItem("isLoggedIn", "false");
    loginBtn.textContent = "Login";
    alert("You have logged out!");
  } else {
    window.location.href = "login.html";
  }
});
//--------------------Login Page-------------
function loginUser(event) {
  event.preventDefault();
  localStorage.setItem("isLoggedIn", "true"); 
  alert("Login Successful!");
  window.location.href = "index.html";
}



