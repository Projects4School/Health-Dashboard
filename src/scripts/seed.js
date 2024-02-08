const { db } = require('@vercel/postgres');
const {
    getListOfPatients, getUsers
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            getUsers().map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                    INSERT INTO users (firstname, lastname, email, password)
                    VALUES (${user.firstname}, ${user.lastname}, ${user.email}, ${hashedPassword})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedPatients(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "patients" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS patients (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            gender INTEGER NOT NULL,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            image_url TEXT NOT NULL
        );
        `;

        console.log(`Created "patients" table`);

        // Insert data into the "patients" table
        const insertedPatients = await Promise.all(
            getListOfPatients(10).map(async (patient) => {
                return client.sql`
                INSERT INTO patients (gender, firstname, lastname, email, image_url)
                VALUES (${patient.gender}, ${patient.firstname}, ${patient.lastname}, ${patient.email}, ${patient.image_url})
                ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );

        console.log(`Seeded ${insertedPatients.length} patients`);

        return {
            createTable,
            patients: insertedPatients,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedPatients(client);
    await seedUsers(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
