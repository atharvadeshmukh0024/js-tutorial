const clock = document.getElementById('clock');

//same can be done by document.querSelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString()); // if declare after sometime it will not give current

// if we use set interval the value current value get updated

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleString();
}, 1000);
