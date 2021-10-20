const db = require("../../utilities/postgres").instance;

const getId = () => nanoid(12);

async function handleGet(request, response) {
  const categories = await db.any("SELECT bronx.categories.id, bronx.categories.name, bronx.categories.amount FROM bronx.categories;")
  const averages = await db.any("SELECT bronx.budget.category_id, bronx.categories.name, AVG(bronx.budget.category_value) AS avg FROM bronx.budget INNER JOIN bronx.categories ON bronx.budget.category_id=bronx.categories.id GROUP BY bronx.budget.category_id, bronx.categories.name;");
  const totalSubmissions = await db.any("SELECT COUNT (DISTINCT submission_id) AS count FROM bronx.budget;")
  // const categories = await db.any("SELECT id, name, descriptive_html, amount FROM bronx.categories");
  const data = {
    categories: categories,
    averages: averages,
    totalSubmissions: totalSubmissions[0].count,
  };
  data.averages.forEach(o => o.avg = parseFloat(o.avg));
  data.averages.sort((a, b) => alphabetSort(b.avg, a.avg));
  data.averages.forEach(o => o.avg = (o.avg).toFixed(1));

  const totalBudget = calculateFixedBudgetAmount(data);
  data.categories.forEach(o => {
    o.amount = parseFloat(o.amount);
    o.percentageValue = ((o.amount / totalBudget) * 100).toFixed(1);
    o.amount = undefined;
  });

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

// calculate the fixed budget amount
const calculateFixedBudgetAmount = (data) => {
  let sum = 0;
  data.categories.forEach(category => {
    sum = sum + parseFloat(category.amount);
  });
  return sum;
};
