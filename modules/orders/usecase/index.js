module.exports = (repository) => {
    module.checkout= (body)=>{
        return repository.checkout(body)
    }
    module.getAllOrdersByUsersId= (userId)=>{
        return repository.getAllOrdersByUsersId(userId)
    }
    // module.updateCarts= (id,body)=>{
    //     return repository.updateCarts(id,body)
    // }
    // module.deleteCarts= (id)=>{
    //     return repository.deleteCarts(id)
    // }
    // module.deleteAllCarts= (userId)=>{
    //     return repository.deleteAllCarts(userId)
    // }
    // module.getCartsById= (id)=>{
    //     return repository.getCartsById(id)
    // }
    return module
}
