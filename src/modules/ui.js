export default () => {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const sideBar = document.createElement("div");
  const mainContainer = document.createElement("div");
  const title = document.createElement("h1");

  header.className = "header";
  title.textContent = "Tickr";
  title.className = "title";
  sideBar.className = "sidebar";
  mainContainer.className = "main-container";

  main.appendChild(sideBar);
  main.appendChild(mainContainer);
  header.appendChild(title);
  body.appendChild(header);
  body.appendChild(main);

  const listsBtn = document.createElement("button");
  const categoriesBtn = document.createElement("button");
  const aboutBtn = document.createElement("button");
  const homeBtn = document.createElement("button");

  listsBtn.textContent = "Lists";
  categoriesBtn.textContent = "Categories";
  aboutBtn.textContent = "About";
  homeBtn.textContent = "Home";

  sideBar.appendChild(listsBtn);
  sideBar.appendChild(categoriesBtn);
  sideBar.appendChild(aboutBtn);
  sideBar.appendChild(homeBtn);
};
