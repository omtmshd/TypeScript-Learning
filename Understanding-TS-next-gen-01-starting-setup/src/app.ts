abstract class Department {
  static fiscalYear = 2020

  protected employess: string[] = []

  static createEmplyee(name: string) {
    return { name: name }
  }

  constructor(
    protected readonly id: string,
    public name: string,
  ) {
    console.log(Department.fiscalYear)
  }

  abstract discribe(this: Department): void

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
  discribe() {
    console.log('IT部門 - ID' + this.id)
  }

}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('レポートが見つかりません')

  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください')
    }
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }

  discribe() {
    console.log('会計部門 - ID' + this.id)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
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

const employee1 = Department.createEmplyee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max'])

console.log(it)

it.addEmployee('Max')
it.addEmployee('Manu')


it.discribe()
it.printEmployeeInfomation()



// const accounting = new AccountingDepartment('d2', [])

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()

console.log(accounting, accounting2)

accounting.mostRecentReport = '通期会計レポート'

accounting.addReport('Something')
// accounting.printReports()
console.log(accounting.mostRecentReport)

accounting.discribe()


accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.printEmployeeInfomation()
