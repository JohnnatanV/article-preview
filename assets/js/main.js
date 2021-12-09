let btn = document.querySelector("#action");

let action = () => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    document.querySelector("#tooltip").classList.toggle("action");
  });
};

action();
