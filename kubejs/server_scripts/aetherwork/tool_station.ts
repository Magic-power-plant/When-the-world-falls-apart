import {g} from "../globalFunction"
export {}

type ItemRef = string
type RecipeIngredient = ItemRef | Internal.Ingredient
type FiveRecipeIngredientList = [RecipeIngredient,RecipeIngredient,RecipeIngredient,RecipeIngredient,RecipeIngredient]
type AfterHandleElement = [] | Internal.JsonElement | null
type AfterHandleList = [AfterHandleElement,AfterHandleElement,AfterHandleElement,AfterHandleElement,AfterHandleElement]
type AetherworksToolStationRecipe = {
  input:FiveRecipeIngredientList
  output:ItemRef | Internal.Ingredient
  temperature:number
  temperature_rate:number
}

function ClassItem (item : RecipeIngredient) {
  if (typeof item === "string") {
    return g.json.ItemObjectToJson(item as string)
  } else {
    return item.toJson()
  }
}

function HandleList (list:FiveRecipeIngredientList) {
  let NEWList:AfterHandleList = [null,null,null,null,null]
  for (let i = 0 ; i < list.length ;i++) {
    let element = list[i]
    if (typeof element === "string") {
      if (element === " " || element === "") {
        NEWList[i] = []
      } else {
        NEWList[i] = ClassItem(element)
      }
    } else {
      NEWList[i] = element.toJson()
    }
  }
  if (NEWList.every(item => item === null)){
    NEWList.forEach((element:AfterHandleElement ,i ,array) => {
      if (element === null) array[i] = []
    })
  }
  return NEWList
}

function AetherworksToolStation(event:Internal.RecipesEventJS,recipe:AetherworksToolStationRecipe) {
  event.custom({
    type: "aetherworks:tool_station",
    inputs: HandleList(recipe.input),
    output:ClassItem(recipe.output),
    temperature:recipe.temperature,
    temperature_rate:recipe.temperature_rate
  } as unknown as Internal.JsonObject)
}

const RecipeList : AetherworksToolStationRecipe[] = [
  {
    input:["embers:stamper","embers:stamper",Item.of('avaritia:singularity', '{Id:"kubejs:bookshelf_singularity"}').weakNBT(),"embers:stamp_base","embers:stamp_base"],
    output:"kubejs:shattered_pages",
    temperature:2000,
    temperature_rate:20
  }
]

ServerEvents.recipes((event:Internal.RecipesEventJS) => {
  RecipeList.forEach(recipe => {
    AetherworksToolStation(event,recipe)
  })
})