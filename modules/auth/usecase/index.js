module.exports = (repository) => {
    module.register= (body)=>{
        return repository.register(body)
    }
    module.login= (email, password)=>{
        return repository.login(email, password)
    }
    return module
}
