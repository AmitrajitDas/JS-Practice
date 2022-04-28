var a = 100 // this var will be shadowed
let b = 200 // this will be shadowed (script scoped)
const c = 300
{
  var a = 10 // now a points to 10
  let b = 20 // block scoped
  const c = 30
  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(a) // so this also ouputs 10 regardless of block scope
console.log(b) // will ouput 200
console.log(c) // will ouput 300
