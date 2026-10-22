export const renderUI = () => {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const main = document.createElement("main");

  const sideBar = document.createElement("div");
  const mainContainer = document.createElement("div");

  const title = document.createElement("h1");

  header.setAttribute(
    "style",
    "height:50px;width:100vw;background-color:navy;text-align:center;vertical-align:center;margin:0;padding:0",
  );
  title.textContent = "Tickr";
  title.setAttribute("style", "font-size:2rem;color:white");
  sideBar.setAttribute("style", "width:200px;background-color:grey");

  main.appendChild(sideBar);
  main.appendChild(mainContainer);
  header.appendChild(title);
  body.appendChild(header);
  body.appendChild(main);
};
