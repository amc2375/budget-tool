import { db, pgp } from "../../utilities/postgres";
import { nanoid } from "nanoid";

const getId = () => nanoid(12)

export default async function handler(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET": {
      const locations = await db.any("SELECT * FROM bcdi.locations");
      const categories = await db.any("SELECT * FROM bcdi.categories");
      const data = {locations: locations,
                    categories: categories}
      console.log(data)
      const budget = await db.any("SELECT * FROM bcdi.budget")
      console.log(budget)
      res.status(200).json(data);
      break;
    }
    case "POST": {
      console.log("this is post");
      const body = req.body;
      const submission_id = getId()
      console.log(body);
      //const insert = await db.one("INSERT INTO bcdi.test_table (name) VALUES ($1) RETURNING *", [body.location])
      const dataMulti = Object.keys(body.testValues).map(category_id => 
          ({submission_id: submission_id,
            location_id:body.location,
            category_id: category_id,
            category_value: body.testValues[category_id]})
        )
      const insert = pgp.helpers.insert(dataMulti, 
          ['submission_id', 'location_id', 'category_id', 'category_value'], 
            'bcdi.budget').replace('"bcdi.budget"', "bcdi.budget");
      const query = await db.any(insert)
      res.status(200).json(query);

      //INSERT INTO bcdi.budget (submission_id, location_id, category_id, category_value) VALUES ()


      //console.log(response)
      //const dataSingle = {id: 1, name: body}
      //const query = pgp.helpers.update(dataSingle, null, "bcdi.test_table") + "WHERE id = 1"
      //console.log(query)
      //const response = await db.one(query)
      // const query = "UPDATE bcdi.test_table SET name = $1 RETURNING *"
      // const update = await db.
      break;
    }
    case "PUT": {
      console.log("this is put");
      const body = req.body;
      console.log(body);
      const response = await db.one(
        "update bcdi.test_table SET name=$1 WHERE id = 1",
        [body]
      );
      //const dataSingle = {id: 1, name: body}
      //const query = pgp.helpers.update(dataSingle, null, "bcdi.test_table") + "WHERE id = 1"
      //console.log(query)
      //const response = await db.one(query)
      // const query = "UPDATE bcdi.test_table SET name = $1 RETURNING *"
      // const update = await db.
      break;
    }
  }

  // 	const dataSingle = {id: 1, val: 123, msg: 'hello'};
  // const dataMulti = [{id: 1, val: 123, msg: 'hello'}, {id: 2, val: 456, msg: 'world!'}];

  // // Although column details can be taken from the data object, it is not
  // // a likely scenario for an update, unless updating the whole table:

  // pgp.helpers.update(dataSingle, null, 'my-table')

  // switch (method) {
  //      case “GET”: {
  //      	const query = await db.any("SELECT * FROM bcdi.test_table");
  //      	console.log(query)
  //      	 res.status(200).json(query)
  //        break;
  //      }
  //      case “POST”: {
  //        break;
  //      }
  //      default:
  //        res.setHeader(“Allow”, [“GET”, “POST”, “PUT”, “DELETE”]);
  //        res.status(405).end(`Method ${method} Not Allowed`);
  //    }
}
