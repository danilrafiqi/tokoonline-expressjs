module.exports = (repository) => {
    module.addCarts= (body)=>{
        return repository.addCarts(body)
    }
    module.updateCarts= (id,body)=>{
        return repository.updateCarts(id,body)
    }
    module.deleteCarts= (id)=>{
        return repository.deleteCarts(id)
    }
    module.deleteAllCarts= (userId)=>{
        return repository.deleteAllCarts(userId)
    }
    module.getAllCarts= (userId)=>{
        return repository.getAllCarts(userId)
    }
    module.getCartsById= (id)=>{
        return repository.getCartsById(id)
    }
    return module
}
