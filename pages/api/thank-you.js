const db = require("../../utilities/postgres").instance;

const getId = () => nanoid(12);

async function handleGet(request, response) {
  const averages = await db.any("SELECT bcdi.budget.category_id, bcdi.categories.name, AVG(bcdi.budget.category_value) AS avg FROM bcdi.budget INNER JOIN bcdi.categories ON bcdi.budget.category_id=bcdi.categories.id GROUP BY bcdi.budget.category_id, bcdi.categories.name;");
  const totalSubmissions = await db.any("SELECT COUNT (DISTINCT submission_id) AS count FROM bcdi.budget;")
  // const categories = await db.any("SELECT id, name, descriptive_html, amount FROM bcdi.categories");
  const data = {
    averages: averages,
    totalSubmissions: totalSubmissions[0].count
  };
  data.averages.forEach(o => o.avg = parseInt(o.avg));
  data.averages.sort((a, b) => alphabetSort(b.avg, a.avg));

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

// sorting data alphabetically
const alphabetSort = (a, b) => (
  (a > b) ? 1 : ((b > a) ? -1 : 0)
);
