const scrollArrow = document.querySelector(".isShownArrow");
window.onscroll = () => {
  if (window.scrollY > 500) {
    document
      .querySelector(".isShownArrow")
      .classList.remove("isShownArrow__hide");
  } else if (window.screenY < 500) {
    document.querySelector(".isShownArrow").classList.add("isShownArrow__hide");
  }
};

function goUp() {
  window.scrollTo(0, 0);
}
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > 70) {
    document.getElementById("navbar").classList.add("sticky");
  } else if (window.screenY < 70) {
    document.getElementById("navbar").classList.remove("sticky");
  }
}


// body {
//   margin: 0;
//   font-size: 28px;
//   font-family: Arial, Helvetica, sans-serif;
// }

// .header {
//   background-color: #f1f1f1;
//   padding: 30px;
//   text-align: center;
// }

// #navbar {
//   overflow: hidden;
//   background-color: #333;
// }

// #navbar a {
//   float: left;
//   display: block;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }

// #navbar a:hover {
//   background-color: #ddd;
//   color: black;
// }

// #navbar a.active {
//   background-color: #04AA6D;
//   color: white;
// }

// .content {
//   padding: 16px;
// }



// .sticky + .content {
//   padding-top: 60px;
// }
// </style>
// </head>
// <body>

// <div class="header">
//   <h2>Scroll Down</h2>
//   <p>Scroll down to see the sticky effect.</p>
// </div>

// <div id="navbar">
//   <a class="active" href="javascript:void(0)">Home</a>
//   <a href="javascript:void(0)">News</a>
//   <a href="javascript:void(0)">Contact</a>
// </div>
