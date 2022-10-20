const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const PORT = 8000


app.listen(PORT, () => {
console.log(`Listening at port ${PORT}`)
})

const createUser = () => {
    return (
        {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            _id: faker.datatype.uuid()
        }
    )
}

const createCompany = () => {
    return (
        {
            _id: faker.datatype.uuid(),
            name: faker.name.findName(),
            address: {
                street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        }
    )
}

app.get("/api/users/new",(req,res) => {
    const newUser = createUser()
    res.json(newUser)
})

app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get("/api/user/company", (req,res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    res.json({newUser, newCompany})
})