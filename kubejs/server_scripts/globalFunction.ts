export {}

const g = global as unknown as {
    json : {
        ItemIdToJson : (id: string) => Internal.JsonElement;
        FluidIdToJson : (id: string, num: number) => Internal.JsonObject;
        ItemObjectToJson : (kjsid:string) => Internal.JsonElement;
        FluidObjectToJson : (kjsid:string) => Internal.JsonObject
    }
}

g.json = g.json || {} as typeof g.json

g.json.ItemIdToJson = function (id:string) {
    return Item.of(id as Internal.ItemStack_).toJson()
}

g.json.FluidIdToJson = function (id:string,num:number) {
    return Fluid.of(id as Internal.FluidStackJS_ , num).toJson()
}
g.json.ItemObjectToJson = function (kjsid:string) {
    if (kjsid.startsWith("#")) {
        return Ingredient.of(kjsid as Internal.Ingredient_).toJson();
    }

    let match = kjsid.match(/^(\d+)x\s+(.+)$/) || null;
    if (match) {
        let count = parseInt(match[1]) || 1;
        let id = match[2];
        let trimmedId = id.trim();
        if (trimmedId.startsWith("#")) {
            return Ingredient.of(trimmedId as Internal.Ingredient_,count).toJson();
        } else {
            return Item.of(id as Internal.ItemStack_, count).toJson();
        }
    } else {
        return Item.of(kjsid as Internal.ItemStack_, 1).toJson();
    }
};
g.json.FluidObjectToJson = function (kjsid:string) {
    if (kjsid.startsWith("#")) {
        return FluidIngredient.of(kjsid).toJson();
    }

    let match = kjsid.match(/^(\d+)x\s+(.+)$/) || null;
    if (match) {
        let count = parseInt(match[1]) || 1;
        let id = match[2];
        let trimmedId = id.trim();
        if (trimmedId.startsWith("#")) {
            return FluidIngredient.of(trimmedId,count).toJson();
        } else {
            return Fluid.of(id as Internal.FluidStackJS_, count).toJson();
        }
    } else {
        return Fluid.of(kjsid as Internal.FluidStackJS_, 1).toJson();
    }
};
