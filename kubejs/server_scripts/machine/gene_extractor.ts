export {}

type GeneRecipe = {
    petal: string
    gene: string
}

const petalGeneRecipes: GeneRecipe[] = [
    { petal: "botania:white_petal", gene: "kubejs:white_gene" },
    { petal: "botania:red_petal", gene: "kubejs:red_gene" },
    { petal: "botania:orange_petal", gene: "kubejs:orange_gene" },
    { petal: "botania:yellow_petal", gene: "kubejs:yellow_gene" },
    { petal: "botania:lime_petal", gene: "kubejs:lime_gene" },
    { petal: "botania:green_petal", gene: "kubejs:green_gene" },
    { petal: "botania:cyan_petal", gene: "kubejs:cyan_gene" },
    { petal: "botania:light_blue_petal", gene: "kubejs:light_blue_gene" },
    { petal: "botania:blue_petal", gene: "kubejs:blue_gene" },
    { petal: "botania:purple_petal", gene: "kubejs:purple_gene" },
    { petal: "botania:magenta_petal", gene: "kubejs:magenta_gene" },
    { petal: "botania:gray_petal", gene: "kubejs:gray_gene" },
    { petal: "botania:black_petal", gene: "kubejs:black_gene" },
    { petal: "botania:light_gray_petal", gene: "kubejs:light_gray_gene" },
    { petal: "botania:brown_petal", gene: "kubejs:brown_gene" },
    { petal: "botania:pink_petal", gene: "kubejs:pink_gene" },
]

function registerGeneExtractorRecipe(event: any, recipe: GeneRecipe, index: number) {
    event.recipes.mbd2.gene_extractor()
        .inputItems(recipe.petal)
        .outputItems(recipe.gene)
        .duration(100)
        .id("gene_" + index.toString())
}

ServerEvents.recipes(event => {
    for (let i = 0; i < petalGeneRecipes.length - 1; i++) {
        registerGeneExtractorRecipe(event, petalGeneRecipes[i], i)
    }
})
