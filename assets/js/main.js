let btn = document.querySelector("#action");

let action = () => {
  btn.addEventListener("click", () => {
    document.querySelector("#tooltip").classList.toggle("action");
  });
};

action();
