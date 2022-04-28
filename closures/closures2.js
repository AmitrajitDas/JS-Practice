function x() {
  var i = 1
  setTimeout(function () {
    console.log(i)
  }, 3000)
  console.log('Namaste Javascript')
}
x()
// Output:
// Namaste Javascript
// 1 // after waiting 3 seconds

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste Javascript')
}
x()
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i)
      }, i * 1000)
      // put the setT function inside new function close()
    }
    close(i) // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
  console.log('Namaste Javascript')
}
x()
