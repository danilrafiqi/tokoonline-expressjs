module.exports = (repository) => {
  module.getAllAddressByUserId = (userId) => {
    return repository.getAllAddressByUserId(userId);
  };
  module.getAddressById = (id) => {
    return repository.getAddressById(id);
  };
  module.createAddress = (body) => {
    return repository.createAddress(body);
  };
  module.updateAddressById = (id, body) => {
    return repository.updateAddressById(id, body);
  };
  module.deleteAddressById = (id) => {
    return repository.deleteAddressById(id);
  };
  return module;
};
