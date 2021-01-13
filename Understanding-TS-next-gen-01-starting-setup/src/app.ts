class Department {
  protected employess: string[] = []

  constructor(
    private readonly id: string,
    public name: string,
  ) { }

  discribe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employess.push(employee)
  }

  printEmployeeInfomation() {
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employess.push(name)
  }
}

const it = new ITDepartment('d1', ['Max'])

console.log(it)

it.addEmployee('Max')
it.addEmployee('Manu')


it.discribe()
it.printEmployeeInfomation()

const accounting = new AccountingDepartment('d2', [])
accounting.addReport('Something')
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInfomation()
