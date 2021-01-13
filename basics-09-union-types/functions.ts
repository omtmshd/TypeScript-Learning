function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})

let combineValues: (a: number, b: number) => number
// combineValues = 5

combineValues = add
// combineValues = printResult

printResult(combineValues(5, 12))
