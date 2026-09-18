const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(20),
  message VARCHAR(255),
  added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (name, message)
VALUES
  ('Alex', 'Hello World!'),
  ('Belle', 'Hello World from Belle!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  try {
    await client.connect();
    console.log("connected");
    await client.query(SQL);
    console.log("seeded");
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();
