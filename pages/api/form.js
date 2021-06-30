import { db, pgp } from "../../utilities/postgres";
import { nanoid } from "nanoid";
import {
  BRONX_COUNCIL_DISTRICTS,
  BRONX_FY2022_BUDGET
} from "../../utilities/constants.js";


const getId = () => nanoid(12);

// for DB interaction
async function handleGet(request, response) {
  // get districts
  const districts = await db.any("SELECT * FROM bcdi.districts");
  const categories = await db.any("SELECT * FROM bcdi.categories");
  const data = {
    districts: districts,
    categories: categories
  };
  response.status(200).json(data);
};

// no DB; uses data stored in constances in ../../utilities/constants.js
async function handleGetNoDB(request, response) {
  const data = {
    districts: BRONX_COUNCIL_DISTRICTS,
    categories: BRONX_FY2022_BUDGET
  };
  response.status(200).json(data);
};

async function handlePost(request, response) {
  const submission_id = getId();
  const submissionContents = Object.keys(request.body.reallocations).map(category_id => {
    return {
      submission_id: submission_id,
      district_id: request.body.district,
      category_id: category_id,
      category_value: request.body.reallocations[category_id]
    };
  });
  const insert = pgp.helpers.insert(
    submissionContents,
    ['submission_id', 'district_id', 'category_id', 'category_value'],
    'bcdi.budget'
  ).replace('"bcdi.budget"', "bcdi.budget");
  const query = await db.any(insert)
  response.status(200).json(query);
};

async function handlePostNoDB(request, response) {
  response.status(200).json("great! thanks for the submission.");
};

export default function handler(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET": {
      // // commented out for user testing + DB hosting cutover
      // handleGet(req, res);
      handleGetNoDB(req, res);
      break;
    }
    case "POST": {
      // // commented out for user testing + DB hosting cutover
      // handlePost(req, res);
      handlePostNoDB(req, res);

      //INSERT INTO bcdi.budget (submission_id, location_id, category_id, category_value) VALUES ()

      break;
    }
    case "PUT": {
      // console.log("this is put");
      // const body = req.body;
      // console.log(body);
      // const response = await db.one(
      //   "update bcdi.test_table SET name=$1 WHERE id = 1",
      //   [body]
      // );
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
};
