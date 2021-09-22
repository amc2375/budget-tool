const db = require("../../utilities/postgres").instance;

const getId = () => nanoid(12);

async function handleGet(request, response) {
  const districts = await db.any("SELECT id, district_id, name FROM bcdi.districts");
  const categories = await db.any("SELECT id, name, descriptive_html, amount FROM bcdi.categories");
  const data = {
    districts: districts,
    categories: categories
  };
  data.categories.forEach(c => c.amount = parseInt(c.amount));

  response.status(200).json(data);
};

export default function handler(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET": {
      handleGet(req, res);
      break;
    }
  }
};
