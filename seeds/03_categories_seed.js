exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "Makanan" },
        { id: 2, name: "Minuman" },
        { id: 3, name: "Ibu dan Anak" },
        { id: 4, name: "Kecantikan" },
        { id: 5, name: "Kesehatan" },
        { id: 6, name: "Dapur" },
      ]);
    });
};
