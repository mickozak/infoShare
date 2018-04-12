var value = 2 // variable to check

var ternaryResult = value === 1
    ? 1 /* return 1 if value === 1 */
    : value === '1'
        ? 2  /* return 2 if value === '1' */
        :  value === 2
            ? 3 /* return 3 if value === 2 */
            : 0  /* default: return 0 */

console.log(ternaryResult)
