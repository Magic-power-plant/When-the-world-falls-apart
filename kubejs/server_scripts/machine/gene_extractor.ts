export {}

type GeneRecipe = {
    petal: string
    gene: string
}

const petalGeneRecipes: GeneRecipe[] = [
    { petal: "botania:white_petal", gene: "wtwfacore:white_gene" },
    { petal: "botania:red_petal", gene: "wtwfacore:red_gene" },
    { petal: "botania:orange_petal", gene: "wtwfacore:orange_gene" },
    { petal: "botania:yellow_petal", gene: "wtwfacore:yellow_gene" },
    { petal: "botania:lime_petal", gene: "wtwfacore:lime_gene" },
    { petal: "botania:green_petal", gene: "wtwfacore:green_gene" },
    { petal: "botania:cyan_petal", gene: "wtwfacore:cyan_gene" },
    { petal: "botania:light_blue_petal", gene: "wtwfacore:light_blue_gene" },
    { petal: "botania:blue_petal", gene: "wtwfacore:blue_gene" },
    { petal: "botania:purple_petal", gene: "wtwfacore:purple_gene" },
    { petal: "botania:magenta_petal", gene: "wtwfacore:magenta_gene" },
    { petal: "botania:gray_petal", gene: "wtwfacore:gray_gene" },
    { petal: "botania:black_petal", gene: "wtwfacore:black_gene" },
    { petal: "botania:light_gray_petal", gene: "wtwfacore:light_gray_gene" },
    { petal: "botania:brown_petal", gene: "wtwfacore:brown_gene" },
    { petal: "botania:pink_petal", gene: "wtwfacore:pink_gene" },
]

function registerGeneExtractorRecipe(event: any, recipe: GeneRecipe, index: number) {
    event.recipes.wtwfacore.gene_extractor()
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
