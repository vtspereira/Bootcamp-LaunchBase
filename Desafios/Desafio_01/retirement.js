const name = "Marcos"
const sex = "M"
const age = 48
const contribution = 53

const retirement = age + contribution
const fitWoman = sex === "F" && retirement >= 85
const fitMan = sex === "M" && retirement >= 95

if (fitWoman || fitMan)
    console.log(`${name} you can retire!`)
else
    console.log(`${name} you cannot retire!`)
