class Department {
  // private readonly id: string
  // public name: string
  private employess: string[] = []

  constructor(
    private readonly id: string,
    public name: string
  ) {
    // this.id = id
    // this.name = n
  }

  discribe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    // this.id = 'd2'
    this.employess.push(employee)
  }

  printEmployeeInfomation() {
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

const accounting = new Department('d1', 'NEW NAME')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')


accounting.discribe()
accounting.printEmployeeInfomation()

// const accountingCopy = {
//   name: 'DUMMY',
//   discribe: accounting.discribe
// }

// accountingCopy.discribe()
