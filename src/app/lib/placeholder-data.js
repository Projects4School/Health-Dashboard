const { faker } = require('@faker-js/faker');

function getRandomPatient() {
    let gender = faker.person.sexType(),
        firstname = faker.person.firstName(gender),
        lastname = faker.person.lastName(gender),
        email = faker.internet.email({
            firstName: firstname,
            lastName: lastname
        }),
        image_url = faker.image.avatarLegacy();

    return {
        gender: gender == "male" ? 1 : 2,
        firstname,
        lastname,
        email,
        image_url
    }
}

module.exports.getListOfPatients = (numbers) => {
    const patients = [];
    for (let i = 0; i < numbers; i++) {
        patients.push(getRandomPatient())
    }
    return patients;
}