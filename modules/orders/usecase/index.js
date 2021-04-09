module.exports = (repository) => {
  module.checkout = (body) => {
    return repository.checkout(body);
  };
  module.getAllOrdersByCustomer = (customerId, pagination) => {
    return repository.getAllOrdersByCustomer(customerId, pagination);
  };
  module.getOrdersById = (id) => {
    return repository.getOrdersById(id);
  };
  module.completeOrders = (id) => {
    return repository.completeOrders(id);
  };
  module.cancelOrders = (id) => {
    return repository.cancelOrders(id);
  };
  // module.updateCarts= (id,body)=>{
  //     return repository.updateCarts(id,body)
  // }
  // module.deleteCarts= (id)=>{
  //     return repository.deleteCarts(id)
  // }
  // module.deleteAllCarts= (userId)=>{
  //     return repository.deleteAllCarts(userId)
  // }
  return module;
};
