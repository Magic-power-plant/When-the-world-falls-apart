function ItemToJson (id) {
    return Item.of(id).toJson()
}

function FluidToJson (id,num) {
    return Fluid.of(id,num).toJson()
}