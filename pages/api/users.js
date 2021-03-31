import { db, pgp } from "../../utilities/postgres";

// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default async function handler(req, res) {
  // Get data from your database
  //get - get data , post- post data, unspecified will default to get
  const query = await db.any("SELECT * FROM bcdi.test_table");
  console.log(query)
  res.status(200).json(query)
}
