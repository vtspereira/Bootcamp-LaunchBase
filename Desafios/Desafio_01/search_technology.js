const users = [
  { name: "Carlos", technologies: ["HTML", "CSS"] },
  { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
  { name: "Tuane", technologies: ["HTML", "Node.js"] }
]

function checkIfTheUserUsesCSS(user) {
  for (let technology of user.technologies) {
    if (technology == 'CSS')
      return true
  }
}

for (let i = 0; i < users.length; i++) {
  const userWorksWithmCSS = checkIfTheUserUsesCSS(users[i])

  if (userWorksWithmCSS) {
    console.log(`User ${users[i].name} works with CSS`)
  }
}