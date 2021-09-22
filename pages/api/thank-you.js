const db = require("../../utilities/postgres").instance;

const getId = () => nanoid(12);

async function handleGet(request, response) {
  const averages = await db.any("SELECT bcdi.budget.category_id, bcdi.categories.name, AVG(bcdi.budget.category_value) AS avg FROM bcdi.budget INNER JOIN bcdi.categories ON bcdi.budget.category_id=bcdi.categories.id GROUP BY bcdi.budget.category_id, bcdi.categories.name;");
  // const categories = await db.any("SELECT id, name, descriptive_html, amount FROM bcdi.categories");
  const data = {
    averages: averages,
  };
  data.averages.forEach(o => o.avg = parseInt(o.avg));

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
