const { comparePassword, generateJwt } = require("../../../utils");

const table = "users";
module.exports = (knex) => {
  module.register = (body) => {
    return knex.table(table).insert(body);
  };
  module.login = (email, password, type) => {
    return new Promise((resolve, reject) => {
      let query;
      switch (type) {
        case "customers":
          query = knex
            .select("*", "customers.id as type_id")
            .where("email", email)
            .first()
            .table(table)
            .innerJoin("customers", "customers.user_id", "=", "users.id");
          break;
        case "stores":
          query = knex
            .select("*", "stores.id as type_id")
            .where("email", email)
            .first()
            .table(table)
            .innerJoin("stores", "stores.user_id", "=", "users.id");
          break;
        case "employees":
          query = knex
            .select("*", "employees.id as type_id")
            .where("email", email)
            .first()
            .table(table)
            .innerJoin("employess", "employess.user_id", "=", "users.id");
          break;
        default:
          reject("ada error");
          break;
      }

      query
        .then((data) => {
          if (data) {
            if (comparePassword(password, data.password)) {
              resolve({
                accessToken: generateJwt({
                  id: data.id,
                  type,
                  type_id: data.type_id,
                }),
              });
            } else {
              console.log("masuk sini");
              reject({
                message: "Authentication Failed",
              });
            }
          } else {
            reject({
              message: "Authentication Failed",
            });
          }
        })
        .catch((err) => {
          console.log("aslakslaksla", err);
          reject(err);
        });
    });
  };
  return module;
};
