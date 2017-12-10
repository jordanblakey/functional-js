// NAMED EXPORT METHOD
export function double(x) {
  return x * 2
}

// module.exports = {
//   double: function(x) {
//     return x * 2
//   }
// }

// EXPORT BY DECONSTRUCTION
function triple(x) {
  return x * 3
}
function quadruple(x) {
  return x * 4
}
export { triple, quadruple }

// EXPORT BY DEFAULT (NO DECONSTRUCTION NEEDED ON RECEIVING END)
export default function quintuple(x) {
  return x * 5
}
