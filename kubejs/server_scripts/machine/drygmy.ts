import {machineAnchor, relativeToMachine, MachineAnchor, RelativePos} from "../globalFunction"
export {}

const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams")
const $LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams")
const $HashMap = Java.loadClass("java.util.HashMap")
const $ANFakePlayer = Java.loadClass("com.hollingsworth.arsnouveau.api.ANFakePlayer")

const drygmyMobJarPositions: RelativePos[] = [
    { left: 0, fore: -2, y: 1 },
    { left: 1, fore: -2, y: 1 },
    { left: -1, fore: -2, y: 1 },
    { left: -2, fore: -3, y: 1 },
    { left: -2, fore: -4, y: 1 },
    { left: -2, fore: -5, y: 1 },
    { left: 2, fore: -3, y: 1 },
    { left: 2, fore: -4, y: 1 },
    { left: 2, fore: -5, y: 1 },
    { left: 0, fore: -6, y: 1 },
    { left: 1, fore: -6, y: 1 },
    { left: -1, fore: -6, y: 1 },
]

function addMobJarDrops(level: any, block: any, fakePlayer: any, damageSource: any, drops: any[]) {
    if (!block || block.getId().toString() !== "ars_nouveau:mob_jar" || !block.getEntity()) {
        return
    }

    let entity = block.getEntity().getEntity()
    if (!entity) {
        return
    }

    let paramsMap = new $HashMap()
    paramsMap.put($LootContextParams.THIS_ENTITY, entity)
    paramsMap.put($LootContextParams.ORIGIN, entity.position())
    paramsMap.put($LootContextParams.DAMAGE_SOURCE, damageSource)
    paramsMap.put($LootContextParams.KILLER_ENTITY, fakePlayer)
    paramsMap.put($LootContextParams.LAST_DAMAGE_PLAYER, fakePlayer)

    let lootParams = new $LootParams(level, paramsMap, new $HashMap(), 0)
    let lootTable = entity.getEntityType().getDefaultLootTable()
    let lootData = level.getServer().getLootData()
    let loot = lootData.getLootTable(lootTable)

    loot.getRandomItems(lootParams).forEach((item:Internal.ItemStack) => {
        if (item && item.getItem()) {
            drops.push(item)
        }
    })
}

function getLootFromMobJarPositions(level: any, anchor: MachineAnchor, positions: RelativePos[]) {
    const fakePlayer = $ANFakePlayer.getPlayer(level)
    const damageSource = level.damageSources().playerAttack(fakePlayer)
    const drops : Internal.ItemStack[] = []

    for (let i = 0; i < positions.length; i++) {
        let blockPos = relativeToMachine(anchor, positions[i])
        addMobJarDrops(level, level.getBlock(blockPos), fakePlayer, damageSource, drops)
    }

    return drops
}

ServerEvents.recipes(event => {
    event.recipes.mbd2.modular_drygmy()
        .inputItems("ars_nouveau:source_gem")
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:modular_drygmy", e => {
    const { machine, recipe } = e.event
    let level = machine.getLevel()
    let outputCon = getLootFromMobJarPositions(level, machineAnchor(machine), drygmyMobJarPositions)

    let builder = recipe.toBuilder()
    builder.inputItems("ars_nouveau:source_gem")
    builder.outputItems(outputCon)
    let newRecipe = builder.buildMBDRecipe()

    e.event.setRecipe(newRecipe)
})
