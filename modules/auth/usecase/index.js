module.exports = (repository) => {
  module.register = (body) => {
    return repository.register(body);
  };
  module.login = (email, password, type) => {
    return repository.login(email, password, type);
  };
  return module;
};
