export {}

const g = global as unknown as {
    ItemToJson : (id: string) => Internal.JsonElement;
    FluidToJson : (id: string, num: number) => Internal.JsonObject;
    createJson : () => void;
    Item:{
        banits : string[];
    }
}
g.Item = g.Item || {} as typeof g.Item

g.ItemToJson = function (id: string) {
    return Item.of(id as any).toJson()
}

g.FluidToJson = function (id: string, num: number) {
    return Fluid.of(id as any, num).toJson()
}

g.createJson = function () {}
