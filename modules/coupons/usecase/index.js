module.exports = (repository) => {
    module.getAllCoupons= ()=>{
        return repository.getAllCoupons()
    }
    module.getCouponsById= (id)=>{
        return repository.getCouponsById(id)
    }
    module.createCoupons= (body)=>{
        return repository.createCoupons(body)
    }
    module.updateCoupons= (id,body)=>{
        return repository.updateCoupons(id,body)
    }
    module.deleteCoupons= (id)=>{
        return repository.deleteCoupons(id)
    }
    return module
}
