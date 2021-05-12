exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "ini product 1",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 2,
          name: "ini product 2",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 3,
          name: "ini product 3",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 4,
          name: "ini product 4",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 5,
          name: "ini product 5",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 6,
          name: "ini product 6",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 7,
          name: "ini product 7",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
        {
          id: 8,
          name: "ini product 8",
          description: "ini desc",
          price: 100000,
          stock: 10,
          image: "https://placeimg.com/480/480/tech",
        },
      ]);
    });
};
