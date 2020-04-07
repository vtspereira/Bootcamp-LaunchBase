const programmer = {
    name: "Carlos",
    age: 32
}

const technologies = {
    property: [
        { name: 'C++', specialty: 'Desktop' },
        { name: 'Python', specialty: 'Data Science' },
        { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years old and uses technology ${technologies.property[0].name} with specialty in ${technologies.property[0].specialty}`)