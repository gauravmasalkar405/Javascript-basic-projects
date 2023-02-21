const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const products = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    let match = products[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
};
