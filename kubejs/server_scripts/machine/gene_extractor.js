ServerEvents.recipes(event => { 
    let array = [
        ['botania:white_petal','kubejs:white_gene'],
        ['botania:red_petal','kubejs:red_gene'],
        ['botania:orange_petal','kubejs:orange_gene'],
        ['botania:yellow_petal','kubejs:yellow_gene'],
        ['botania:lime_petal','kubejs:lime_gene'],
        ['botania:green_petal','kubejs:green_gene'],
        ['botania:cyan_petal','kubejs:cyan_gene'],
        ['botania:light_blue_petal','kubejs:light_blue_gene'],
        ['botania:blue_petal','kubejs:blue_gene'],
        ['botania:purple_petal','kubejs:purple_gene'],
        ['botania:magenta_petal','kubejs:magenta_gene'],
        ['botania:gray_petal','kubejs:gray_gene'],
        ['botania:black_petal','kubejs:black_gene'],
        ['botania:light_gray_petal','kubejs:light_gray_gene'],
        ['botania:brown_petal','kubejs:brown_gene'],
        ['botania:pink_petal','kubejs:pink_gene']
    ]
    for (let i = 0; i < array.length - 1; i++) {
        event.recipes.mbd2.gene_extractor()
        .inputItems(array[i][0])
        .outputItems(array[i][1])
        .duration(100)
        .id("gene_" + i.toString())
        console.log("gene_" + i.toString())
    }
})