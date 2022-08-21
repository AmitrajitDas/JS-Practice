function z() {
  let a = 23
  function y() {
    const a = 31
    function x() {
      console.log(a)
    }
    x()
  }
  y()
}
z()
