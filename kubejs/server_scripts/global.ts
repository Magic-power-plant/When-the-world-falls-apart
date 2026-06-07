export {}

const g = global as any

g.ItemToJson = function (id: string) {
    return Item.of(id as any).toJson()
}

g.FluidToJson = function (id: string, num: number) {
    return Fluid.of(id as any, num).toJson()
}

g.createJson = function () {}
