const tableHeader = "orders";
const tableDetail = "orders_detail";

module.exports = (knex) => {
  module.checkout = (body) => {
    knex.transaction(function (trx) {
      carts = body.cart;
      return trx
        .insert({
          total: body.total,
          address_id: body.address_id,
          customer_id: body.customer_id,
          coupon_id: body.coupon_id,
          status: "ordered",
        })
        .into(tableHeader)
        .then((ids) => {
          const newCart = carts.map((cart) => {
            return {
              order_id: ids[0],
              cart_id: cart,
            };
          });
          return trx(tableDetail).insert(newCart);
        });
    });
  };

  module.getAllOrdersByCustomer = async (customerId, pagination) => {
    const result = await knex
      .select(
        "orders.id as _id",
        "orders.total as _total",
        "orders.status as _status",
        "addresses.id as _address_id",
        "addresses.address as _address_address",
        "coupons.id as _coupon_id",
        "coupons.description as _coupon_description",
        "coupons.percentage as _coupon_percentage",
        "coupons.fixedDiscount as _coupon_fixedDiscount",
        "carts.id as _cart_id",
        "carts.quantity as _cart_quantity",
        "products.id as _product_id",
        "products.name as _product_name",
        "products.description as _product_description",
        "products.image as _product_image",
        "products.price as _product_price",
        "products.stock as _product_stock"
      )
      .where("orders.customer_id", customerId)
      .table(tableHeader)
      .innerJoin(tableDetail, "orders_detail.order_id", "=", "orders.id")
      .innerJoin("carts", "carts.id", "=", "orders_detail.cart_id")
      .innerJoin("products", "products.id", "=", "carts.product_id")
      .innerJoin("addresses", "addresses.id", "=", "orders.address_id")
      .innerJoin("coupons", "coupons.id", "=", "orders.coupon_id")
      .paginate(pagination);
    const newData = result.data.reduce((obj, item) => {
      if (obj[item._id]) {
        obj[item._id].cart.push({
          id: item._cart_id,
          quantity: item._cart_quantity,
          product: {
            id: item._product_id,
            name: item._product_name,
            description: item._product_description,
            image: item._product_image,
            price: item._product_price,
            stock: item._product_stock,
          },
        });
      } else {
        obj[item._id] = {
          id: item._id,
          total: item._total,
          status: item._status,
          cart: [
            {
              id: item._cart_id,
              quantity: item._cart_quantity,
              product: {
                id: item._product_id,
                name: item._product_name,
                description: item._product_description,
                image: item._product_image,
                price: item._product_price,
                stock: item._product_stock,
              },
            },
          ],
          address: {
            id: item._address_id,
            address: item._address_address,
          },
          coupon: {
            id: item._coupon_id,
            description: item._coupon_description,
            percentage: item._coupon_percentage,
            fixedDiscount: item._coupon_fixedDiscount,
          },
        };
      }
      return obj;
    }, {});
    return {
      data: Object.values(newData),
      pagination: result.pagination,
    };
  };
  return module;
};
