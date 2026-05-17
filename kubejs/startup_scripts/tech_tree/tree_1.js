StartupEvents.postInit(event => {
  TechTree.restrict.clear()
  TechTree.recipes.clear()

  // TECH_TREE:GENERATED:BEGIN tech_tree:tree_1
/**
 * [TechTree] 自动生成区域（GENERATED）
 * 手动修改本区域可能导致编辑器无法解析回填；允许改值，不要改结构/标记/调用形态。
 */

// TECH_TREE:NODE:BEGIN tech_tree:tree_1_node_1
TechTree.recipes.out('木板', Item.of('minecraft:oak_planks'))
// TECH_TREE:NODE:END tech_tree:tree_1_node_1
// TECH_TREE:GENERATED:END tech_tree:tree_1
})
