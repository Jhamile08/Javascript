console.log("✅ Script cargado correctamente");

const routes = {
  "/": "/html/users.html",
  "/users": "/html/users.html",
  "/new": "/html/newUser.html"
};

document.body.addEventListener("click", (e) => {
     console.log("click detectado en:", e.target);
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

async function navigate(pathname) {
  const route = routes[pathname];
  console.log("Navigating to:", pathname, "→", route);

  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;

if (pathname === "/users") {
    setupUsers();
  }

  history.pushState({}, "", pathname);
}

window.addEventListener("popstate", () =>
  navigate(location.pathname)
);


function setupUsers() {
    console.log("ola")
  const containerUser = document.getElementById("users");
  if (containerUser) {
    containerUser.innerHTML = `<h1>Hola</h1>`;
  }
}