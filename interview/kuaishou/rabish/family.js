function marry(man,woman) {
  woman.husban = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman
  }
}
let family = marry({
  name: 'John'
},{
  name: 'Ann'
})

//     Global 
//       |
//     Object(Family)
//   |                 |
// Object(father) <-> Object(mother)