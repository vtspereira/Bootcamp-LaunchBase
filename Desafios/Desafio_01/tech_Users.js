const users = [
  { nome: "Carlos", technologies: ["HTML", "CSS"] },
  { nome: "Jasmine", technologies: ["JavaScript", "CSS"] },
  { nome: "Tuane", technologies: ["HTML", "Node.js"] }
]

for (let user of users) {
  console.log(`${user.nome} works with ${user.technologies}`)
}

