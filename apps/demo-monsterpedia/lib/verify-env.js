#!/usr/bin/env node
require('dotenv').config()
const missing = [];
if (process.env.UNIFORM_PROJECT_ID == "[!!! YOUR PROJECT ID !!!]") {
    missing.push("UNIFORM_PROJECT_ID");
}
if (process.env.UNIFORM_API_KEY == "[!!! YOUR API KEY !!!]") {
    missing.push("UNIFORM_API_KEY");
}
if (missing.length > 0) {
    console.error("The following env vars must be set: ");
    missing.forEach(name => {
        console.error(` * ${name}`);
    })
    process.exit(1)
}
