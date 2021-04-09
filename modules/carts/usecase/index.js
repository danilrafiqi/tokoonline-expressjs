module.exports = (repository) => {
  module.addCarts = (body) => {
    return repository.addCarts(body);
  };
  module.updateCarts = (id, body) => {
    return repository.updateCarts(id, body);
  };
  module.deleteCartsById = (id) => {
    return repository.deleteCartsById(id);
  };
  module.deleteAllCartsByCustomer = (customerId) => {
    return repository.deleteAllCartsByCustomer(customerId);
  };
  module.getAllCartsByCustomer = (customerId, pagination) => {
    return repository.getAllCartsByCustomer(customerId, pagination);
  };
  module.getCartsById = (id) => {
    return repository.getCartsById(id);
  };
  return module;
};
