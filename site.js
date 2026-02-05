const PASSWORD = "ss2027"; // change this

function unlocked(){
  return localStorage.getItem("ss_unlocked") === "1";
}

function protectInnerPages(){
  const path = location.pathname.split("/").pop() || "index.html";
  const isIndex = (path === "index.html" || path === "");
  if (!isIndex && !unlocked()){
    location.replace("index.html");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  protectInnerPages();
});

