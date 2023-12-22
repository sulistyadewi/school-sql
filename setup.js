const pool = require("./connection")

const students = `
    DROP TABLE IF EXISTS "Students";
    CREATE TABLE IF NOT EXISTS "Students" (
        "id" SERIAL PRIMARY KEY,
        "first_name" VARCHAR NOT NULL,
        "last_name" VARCHAR,
        "email" VARCHAR,
        "gender" VARCHAR,
        "birth_date" VARCHAR
    ) ;
`

const teachers = `
        DROP TABLE IF EXISTS "Teachers";
        CREATE TABLE IF NOT EXISTS "Teachers" (
            "id" SERIAL PRIMARY KEY,
            "first_name" VARCHAR NOT NULL,
            "last_name" VARCHAR,
            "email" VARCHAR,
            "gender" VARCHAR
        ) ;
`

const mapels = `
            DROP TABLE IF EXISTS "Mapels";
            CREATE TABLE IF NOT EXISTS "Mapels" (
                "id" SERIAL PRIMARY KEY,
                "mapel" VARCHAR
            )
`

pool.query(students, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("create table students successfully");
        pool.query(teachers, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log("create table teachers successfully");
                pool.query(mapels, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("create table mapels successfully");
                        pool.end()
                    }
                })
            }
        })
    }
})