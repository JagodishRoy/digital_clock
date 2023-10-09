// const clock = () => {
//   const dateTime = new Date();
//   let hrs = dateTime.getHours();
//   const min = dateTime.getMinutes();
//   const sec = dateTime.getSeconds();
//   const session = document.getElementById("session");

//   if (hrs >= 12) {
//     session.innerHTML = "PM";
//   } else {
//     session.innerHTML = "AM";
//   }

//   if (hrs > 12) {
//     hrs = hrs - 12;
//   }
//   document.getElementById("hours").innerHTML = hrs;
//   document.getElementById("minutes").innerHTML = min;
//   document.getElementById("seconds").innerHTML = sec;
// };

// setInterval(() => {
//   clock();
// }, 1000);

const clock = () => {
  const dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  if (hrs >= 12) {
    document.getElementById("session").innerHTML = "PM";
  } else {
    document.getElementById("session").innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
};
setInterval(() => {
  clock();
}, 1000);
