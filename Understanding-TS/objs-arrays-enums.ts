// const person: {
//   name: string
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sport', 'Cooking'],
//   role: [2, 'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHER = 2

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('管理者ユーザ　')
}
