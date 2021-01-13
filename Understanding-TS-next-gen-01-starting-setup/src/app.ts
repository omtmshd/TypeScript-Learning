class Department {
  public name: string
  private employess: string[] = []

  constructor(n: string) {
    this.name = n
  }

  discribe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employess.push(employee)
  }

  printEmployeeInfomation() {
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')


accounting.discribe()
accounting.printEmployeeInfomation()

// const accountingCopy = {
//   name: 'DUMMY',
//   discribe: accounting.discribe
// }

// accountingCopy.discribe()
