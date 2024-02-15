const scrollClickLink = (e) => {
  e.preventDefault();
  if (e.target.nodeName === "A") {
    scrollTo(pageYOffset, 0);
  }
};
addEventListener("click", scrollClickLink);
