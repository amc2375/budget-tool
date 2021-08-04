const db = require("../../utilities/postgres").instance;
const pgp = require("pg-promise")(/*initOptions*/);

const getId = () => nanoid(12);

async function handleGet(request, response) {

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
