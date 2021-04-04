const { comparePassword, generateJwt } = require("../../../utils");

const table = "users";
module.exports = (knex) => {
  module.register = (body) => {
    return knex.table(table).insert(body);
  };
  module.login = (email, password, type) => {
    return new Promise((resolve, reject) => {
      let query = knex.select().where("email", email).first().table(table);
      switch (type) {
        case "customers":
          query = query.innerJoin(
            "customers",
            "customers.user_id",
            "=",
            "users.id"
          );
          break;
        case "stores":
          query = query.innerJoin("stores", "stores.user_id", "=", "users.id");
          break;
        case "employees":
          query = query.innerJoin(
            "employess",
            "employess.user_id",
            "=",
            "users.id"
          );
          break;
        default:
          reject("ada error");
          break;
      }
      query
        .then((data) => {
          console.log("data", data, password);
          if (data) {
            if (comparePassword(password, data.password)) {
              resolve({
                accessToken: generateJwt({ id: data.id, type }),
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
