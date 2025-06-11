let searchDish = document.getElementById("searchDish");
let searchResult = document.getElementById("searchResults");
let s = document.getElementById("s");
if (searchDish.value === "") {
  searchResults.textContent = "";
}

function createAndAppendFood(meal) {
  let { strMealThumb, strMeal, strTags, strCategory, strYoutube } = meal;

  let mainDiv = document.createElement("div");
  mainDiv.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-5");
  searchResult.appendChild(mainDiv);

  let card = document.createElement("div");
  card.classList.add("fud-container", "h-100", "block");
  mainDiv.appendChild(card);

  let d = document.createElement("div");
  d.classList.add("fud-container");
  card.appendChild(d);

  let img = document.createElement("img");
  img.src = strMealThumb;
  img.classList.add("img1000", "img25");
  d.appendChild(img);

  let foodDetails = document.createElement("div");
  foodDetails.classList.add("p-3", "d-flex", "justify-content-between");
  card.appendChild(foodDetails);

  let part11 = document.createElement("div");
  foodDetails.appendChild(part11);

  let foodName = document.createElement("h5");
  foodName.classList.add("fud-start");
  foodName.textContent = strMeal;
  part11.appendChild(foodName);

  let foodCategory = document.createElement("p");
  foodCategory.textContent = strCategory;
  foodCategory.classList.add("fud-para");
  part11.appendChild(foodCategory);

  let part22 = document.createElement("div");
  foodDetails.appendChild(part22);

  let foodTAg = document.createElement("p");
  foodTAg.textContent = strTags;
  part22.classList.add("fud-para");
  part22.appendChild(foodTAg);

  let foodVideo = document.createElement("a");
  foodVideo.href = strYoutube;
  foodVideo.target = "_blank";
  foodVideo.textContent = "Recipe Video...";
  foodVideo.classList.add("fud-video");
  part22.appendChild(foodVideo);

  setTimeout(function () {
    img.classList.add("loaded");
  }, 3000);
}

function displayFoodDetails(mealss) {
  for (let meal of mealss) {
    createAndAppendFood(meal);
  }
}

function getFoodDetails(event) {
  if (searchDish.value === "") {
    s.classList.remove("con1");
    searchResult.textContent = "";

    return 0;
  }
  if (event.key === "Enter") {
    searchResult.textContent = "";
    s.classList.add("con1");
    let url =
      "https://themealdb.com/api/json/v1/1/search.php?s=" + searchDish.value;

    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { meals } = jsonData;
        displayFoodDetails(meals);
      });
  }
}

searchDish.addEventListener("keydown", getFoodDetails);

let caretDown = document.getElementById("caretDown");
let caretState = false;
let resendOtp = document.getElementById("resendOtp");
caretDown.onclick = function () {
  if (caretState === false) {
    caretDown.classList.add("caret-down-onclick");

    caretState = true;
  } else {
    caretDown.classList.remove("caret-down-onclick");
    caretState = false;
  }
};

let place = document.getElementById("place");
let placee = document.getElementById("placee");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");
let i5 = document.getElementById("i5");
let i6 = document.getElementById("i6");
let i7 = document.getElementById("i7");
let i8 = document.getElementById("i8");
let i9 = document.getElementById("i9");
let showMoree = document.getElementById("showMoree");
let showLess = document.getElementById("showLess");

showMoree.onclick = function () {
  i1.style.display = "block";
  i2.style.display = "block";
  i3.style.display = "block";
  i4.style.display = "block";
  i5.style.display = "block";
  i6.style.display = "block";
  i7.style.display = "block";
  i8.style.display = "block";
  i9.style.display = "block";
  showMoree.style.display = "none";
  showLess.style.display = "block";
};

showLess.onclick = function () {
  i1.style.display = "none";
  i2.style.display = "none";
  i3.style.display = "none";
  i4.style.display = "none";
  i5.style.display = "none";
  i6.style.display = "none";
  i7.style.display = "none";
  i8.style.display = "none";
  i9.style.display = "none";
  showMoree.style.display = "block";
  showLess.style.display = "none";
};

function f1() {
  place.placeholder = "Email";

  placee.value = "";
}

function f2() {
  place.placeholder = "Phone";
  placee.value = "";
}

function f3() {
  placee.placeholder = "Email";
  place.value = "";
}

function f4() {
  placee.placeholder = "Phone";
  place.value = "";
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 5,
  centerSlide: "true",
  fade: true,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 100, // Adjust transition speed in milliseconds
  effect: "slide", // Options: 'slide', 'fade', 'cube', 'coverflow', 'flip'
  autoplay: {
    delay: 4000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

let b777 = document.getElementById("b77");
let state = false;
let name = document.getElementById("name");
let nameValue = document.getElementById("name").value;
let email = document.getElementById("email");
let p = document.getElementById("p");
let popup = document.getElementById("Popup");

let closePop = document.getElementById("closePop");
let mModal = document.getElementById("mModal");
let spinner = document.getElementById("spinner");

function checkBox() {
  if (state === false) {
    b777.style.backgroundColor = "#fc392b";
    b777.style.cursor = "pointer";
    state = true;
    b777.onclick = function () {
      if (name.value === "") {
        alert("Enter Your Full Name");
        return;
      } else if (email.value === "") {
        alert("Enter Your Eamil");
        return;
      } else if (name.value === "" && email.value === "") {
        alert("Enter Following Data");
        return;
      } else {
        popup.classList.add("openpop");
      }
    };
  } else {
    b777.style.backgroundColor = "#e8e6e6";
    b777.style.cursor = "not-allowed";
    p.textContent = "";
    b777.onclick = function () {
      p.textContent = "";
    };
    state = false;
  }
}

let modalTitle = document.getElementById("modalTitle");
let user = document.getElementById("user");
let hiddensign = document.getElementById("hiddensign");
let modalTitleIcon = document.getElementById("modalTitleIcon");
let item3 = document.getElementById("item3");
closePop.onclick = function () {
  b777.style.backgroundColor = "#e8e6e6";
  b777.style.cursor = "not-allowed";
  p.textContent = "";
  state = false;

  document.getElementById("modalTitle").textContent = name.value;
  localStorage.setItem("profilename", name.value);

  email.value = "";
  spinner.style.display = "block";

  setTimeout(function () {
    spinner.style.display = "none"; // Hide spinner after 3 seconds
    popup.classList.remove("openpop"); // Hide popup after 3 seconds
    name.value = "";
    signUpModel.style.display = "none";
    hiddensign.style.display = "block";
    item3.style.display = "none";
  }, 3000);
};

function loadState() {
  let profileName = localStorage.getItem("profilename");
  if (profileName !== null) {
    document.getElementById("modalTitle").textContent = profileName;
  }
}

document.addEventListener("DOMContentLoaded", loadState);

let man = document.getElementById("");

let inputElement24 = document.getElementById("inputElement24");
let but24 = document.getElementById("but24");
let login1 = document.getElementById("login1");
let login2 = document.getElementById("login2");
let spinner24 = document.getElementById("spinner24");
let loginButtonContent = document.getElementById("loginButtonContent");
let otpHr = document.getElementById("otpHr");
let otp1 = document.getElementById("otp1");
let food = document.getElementById("food");
let otpMesseage = document.getElementById("otpMesseage");
let OTP = document.getElementById("OTP");

but24.onclick = function () {
  if (inputElement24.value === "") {
    alert("Enter your phone No.");
    return;
  } else if (
    typeof inputElement24.value !== "number" &&
    inputElement24.value.length !== 10
  ) {
    alert("Invalid phone No.");
    return;
  } else {
    OTP.value = Math.ceil(Math.random() * 1000000);
    resendOtp.style.display = "block";
    loginButtonContent.style.display = "none";
    spinner24.style.display = "block";
    but24.style.backgroundColor = "#edeefa";
    setTimeout(function () {
      login1.style.display = "none";
      login2.style.display = "block";
      spinner24.style.display = "none";
      but24.style.backgroundColor = "#f72358";
      otpHr.style.display = "none";
      otp1.style.display = "none";
      food.style.display = "none";
      otpMesseage.classList.add("open-otp-popup");
    }, 3000);

    setTimeout(function () {
      otpMesseage.classList.remove("open-otp-popup");
    }, 8000);
  }
};

let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let part5 = document.getElementById("part5");
let part6 = document.getElementById("part6");
let closeButton = document.getElementById("closeButton");

closeButton.onclick = function () {
  part1.value = "";
  part2.value = "";
  part3.value = "";
  part4.value = "";
  part5.value = "";
  part6.value = "";
  inputElement24.value = "";
  login1.style.display = "block";
  login2.style.display = "none";
  otpHr.style.display = "block";
  otp1.style.display = "block";
  food.style.display = "block";
  loginButtonContent.style.display = "block";
  resendOtp.style.display = "none";
};

resendOtp.onclick = function () {
  OTP.value = Math.ceil(Math.random() * 1000000);
  otpMesseage.classList.add("open-otp-popup");
  setTimeout(function () {
    otpMesseage.classList.remove("open-otp-popup");
  }, 5000);
};

let shareApp = document.getElementById("shareApp");
let wrap = document.getElementById("wrapUp");
let wrap2 = document.getElementById("wrapUp2");
let spinner2 = document.getElementById("spinner2");
let shareid = document.getElementById("shareid");
let otp = document.getElementById("otp");
let clickSound = document.getElementById("clickSound");
let statex3 = false;
shareApp.onclick = function () {
  if (place.value === "") {
    alert("Enter the data");
    return;
  } else {
    shareid.style.display = "none";
    spinner2.style.display = "block";

    shareApp.style.backgroundColor = "#e3fae6";
    otp.classList.add("open-otp-popup");
    place.value = "";
    shareApp.style.paddingTop = "0px";

    clickSound.play();
    setTimeout(function () {
      spinner2.style.display = "none"; // Hide spinner after 3 seconds
      shareid.style.display = "block";
      wrap2.style.display = "none";
      shareApp.style.paddingTop = "8px";
      shareApp.style.backgroundImage = "none";
    }, 3000);

    setTimeout(function () {
      otp.classList.remove("open-otp-popup");
    }, 5000);
  }
};

let popup3 = document.getElementById("Popup3");
let openPopUp3 = document.getElementById("openPopup3");
let angle0 = document.getElementById("angle0");
let statex = false;

openPopUp3.onclick = function () {
  if (statex === false) {
    popup3.classList.add("openpop3");
    angle0.style.transform = "rotate(180deg)";
    angle0.classList.add("angle");
    statex = true;
  } else {
    popup3.classList.remove("openpop3");
    angle0.style.transform = "rotate(360deg)";
    statex = false;
  }
};

let popup2 = document.getElementById("Popup2");
let openPopUp2 = document.getElementById("openPopup2");
let angle1 = document.getElementById("angle1");
let statex2 = false;

openPopUp2.onclick = function () {
  if (statex2 === false) {
    popup2.classList.add("openpop3");
    angle1.style.transform = "rotate(180deg)";
    angle1.classList.add("angle");

    statex2 = true;
  } else {
    popup2.classList.remove("openpop3");
    angle1.style.transform = "rotate(360deg)";
    statex2 = false;
  }
};

let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
emailInput.onclick = function () {
  phoneInput.style.display = "none";
  emailInput.classList.add("email-shift");
  setTimeout(function () {
    phoneInput.style.display = "block";
  }, 40000);
};

phoneInput.onclick = function () {
  emailInput.style.display = "none";
  phoneInput.classList.add("phone-shift");
  setTimeout(function () {
    emailInput.style.display = "block";
  }, 40000);
};

let zomimg1 = document.getElementById("zomimg1");
let zomimg2 = document.getElementById("zomimg2");
let zomimgp = document.getElementById("zomimgp");
let zominput = document.getElementById("zominput");
let I7 = document.getElementById("I7");
let logOutPopUp = document.getElementById("logOutPopUp");
I7.onclick = function () {
  zomimg1.style.display = "none";
  zomimg2.style.display = "none";
  zomimgp.style.display = "none";
  zominput.style.display = "none";
  userPopUp.style.visibility = "hidden";
  logOutPopUp.classList.add("log-out-popup-open");
  setTimeout(function () {
    zomimg1.style.display = "block";
    zomimg2.style.display = "block";
    zomimgp.style.display = "block";
    zominput.style.display = "block";
    item3.style.display = "block";
    hiddensign.style.display = "none";
    logOutPopUp.classList.remove("log-out-popup-open");
  }, 5000);
};

function moveToNextInput(current, next) {
  document.getElementById(current).addEventListener("input", function () {
    if (this.value.length === this.maxLength) {
      document.getElementById(next).focus();
    }
  });
}

moveToNextInput("part1", "part2");
moveToNextInput("part2", "part3");
moveToNextInput("part3", "part4");
moveToNextInput("part4", "part5");
moveToNextInput("part5", "part6");

let loginButton = document.getElementById("loginButton");
let spinner26 = document.getElementById("spinner26");
let loginContent = document.getElementById("loginContent");
let upperState = false;
loginButton.onclick = function () {
  if (
    OTP.value ==
    part1.value +
      part2.value +
      part3.value +
      part4.value +
      part5.value +
      part6.value
  ) {
    console.log("log in");
  } else {
    alert("Wrong OTP");
    return;
  }

  spinner26.style.display = "block";
  loginContent.style.display = "none";
  loginButton.style.backgroundColor = "white";
  setTimeout(function () {
    spinner26.style.display = "none";
    loginContent.style.display = "block";
    hiddensign.style.display = "block";
    loginButton.style.backgroundColor = "#f22c61";

    item3.style.display = "none";
  }, 3000);
};

let userPopUp = document.getElementById("userPopUp");
let userState = false;
let angle2 = document.getElementById("angle2");

hiddensign.onclick = function () {
  if (userState === false) {
    userPopUp.style.visibility = "visible";

    userPopUp.classList.add("open-user-pop-up");

    angle2.classList.add("angle-reverse");

    userState = true;
  } else {
    userPopUp.classList.remove("open-user-pop-up");
    angle2.classList.remove("angle-reverse");
    userState = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelectorAll(".img25");

  images.forEach((image) => {
    image.classList.add("loaded");
  });
});
