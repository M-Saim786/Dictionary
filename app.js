var searchInp = document.getElementById("searchInp");
var searchBtn = document.getElementById("search");
// // console.log(searchInp);
// // console.log(search);

// const dictionary = (word) => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "548d6622a0mshd5fdd11d991d42fp1cac2fjsnd646ae1fe16a",
//       "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
//     },
//   };

//   fetch(
//     `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=abandon`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       wordname.innerHTML = response.word;
//       definition.innerHTML = response.definition

//       moreDef.innerHTML = `<p class='boldText'> More In Depth </p>  ${response.definition
//         }`;
//     })
//     .catch((err) => console.error(err));
// };

const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "548d6622a0mshd5fdd11d991d42fp1cac2fjsnd636ae1fe16a",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wordname.innerHTML = `"${response.word}"`;
      definition.innerHTML = response.definition
        .replace(";", ",")
        .substring(0, 106);
      moreDef.innerHTML = `<p class='boldText'> More In Depth </p>  ${response.definition
        .replace("1.", "1.")
        .replace("2.", "<br>2.")
        .replace("3.", "<br>3.")
        .replace("4.", "<br>4.")}`;
    })
    .catch((err) => console.error(err));
};

// Search Word Btn
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // convert String to title case
  let searchval = searchInp.value;
  searchval = searchval.charAt(0).toUpperCase();
  searchval = searchval + searchInp.value.slice(1).toLowerCase();
  dictionary(searchval);
});

//              Function of Dark Mode
var dark = document.getElementById("switch");
dark.addEventListener("click", () => {
  var icon = document.getElementById("icon");
  var body = document.body;
  body.classList.toggle("darkmode");
  var nav = document.getElementsByClassName("navbar")[0];
  nav.classList.toggle("navbar-dark");
  nav.classList.toggle("bg-dark");
  var switchText = document.getElementById("switchText");
  if (body.classList == "darkmode") {
    switchText.innerHTML = "Disbale Dark Mode";
    icon.style.color = "white";
  } else {
    switchText.innerHTML = "Enable Dark Mode";
  }
});
