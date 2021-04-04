exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "javascript" },
        { id: 2, name: "golang" },
        { id: 3, name: "python" },
        { id: 4, name: "php" },
        { id: 5, name: "c#" },
        { id: 6, name: "javascript" },
        { id: 7, name: "golang" },
        { id: 8, name: "python" },
        { id: 9, name: "php" },
        { id: 10, name: "c#" },
        { id: 11, name: "javascript" },
        { id: 12, name: "golang" },
        { id: 13, name: "python" },
        { id: 14, name: "php" },
        { id: 15, name: "c#" },
      ]);
    });
};
