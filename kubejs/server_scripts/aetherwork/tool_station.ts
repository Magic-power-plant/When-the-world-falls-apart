import {ingredientJson, ItemRef, IngredientRef} from "../globalFunction"
export {}

type FiveRecipeIngredientList = [IngredientRef, IngredientRef, IngredientRef, IngredientRef, IngredientRef]
type AfterHandleElement = [] | Internal.JsonElement | null
type AfterHandleList = [AfterHandleElement, AfterHandleElement, AfterHandleElement, AfterHandleElement, AfterHandleElement]
type AetherworksToolStationRecipe = {
  input: FiveRecipeIngredientList
  output: ItemRef | Internal.Ingredient
  temperature: number
  temperature_rate: number
}

function handleList (list: FiveRecipeIngredientList) {
  let newList: AfterHandleList = [null, null, null, null, null]
  for (let i = 0 ; i < list.length ;i++) {
    let element = list[i]
    if (typeof element === "string") {
      if (element === " " || element === "") {
        newList[i] = []
      } else {
        newList[i] = ingredientJson(element)
      }
    } else {
      newList[i] = element.toJson()
    }
  }
  if (newList.every(item => item === null)){
    newList.forEach((element: AfterHandleElement, i, array) => {
      if (element === null) array[i] = []
    })
  }
  return newList
}

function aetherworksToolStation(event: Internal.RecipesEventJS, recipe: AetherworksToolStationRecipe) {
  event.custom({
    type: "aetherworks:tool_station",
    inputs: handleList(recipe.input),
    output: ingredientJson(recipe.output),
    temperature: recipe.temperature,
    temperature_rate: recipe.temperature_rate
  } as unknown as Internal.JsonObject)
}

const toolStationRecipes: AetherworksToolStationRecipe[] = [
  {
    input: ["embers:stamper", "embers:stamper", Item.of('avaritia:singularity', '{Id:"kubejs:bookshelf_singularity"}').weakNBT(), "embers:stamp_base", "embers:stamp_base"],
    output: "kubejs:shattered_pages",
    temperature: 2000,
    temperature_rate: 20
  }
]

ServerEvents.recipes((event: Internal.RecipesEventJS) => {
  toolStationRecipes.forEach(recipe => {
    aetherworksToolStation(event, recipe)
  })
})
