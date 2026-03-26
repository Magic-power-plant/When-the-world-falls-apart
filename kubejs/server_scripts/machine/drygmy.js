const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams")
const $LootTable = Java.loadClass("net.minecraft.world.level.storage.loot.LootTable")
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")
const $LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams")
const $HashMap = Java.loadClass("java.util.HashMap")
const $ANFakePlayer = Java.loadClass("com.hollingsworth.arsnouveau.api.ANFakePlayer")

ServerEvents.recipes( event => {
    event.recipes.mbd2.modular_drygmy()
    .inputItems("ars_nouveau:source_gem")
})

MBDMachineEvents.onBeforeRecipeModify("mbd2:modular_drygmy",e =>{
    const { machine, recipe } = e.event
    let level = machine.getLevel()

    const machineX = machine.pos.getX();
    const machineY = machine.pos.getY();
    const machineZ = machine.pos.getZ();

    const direction = machine.frontFacing.get()

    function relativeToGlobal(relLeft, relFore, relY) {
        let x = machineX;
        let z = machineZ;

        switch (direction) {
            case 'south':
                x += relLeft;       // 左 => +X
                z += relFore;       // 前 => +Z
                break;
            case 'north':
                x -= relLeft;       // 左 => -X
                z -= relFore;       // 前 => -Z
                break;
            case 'east':
                x += relFore;       // 前 => +X
                z -= relLeft;       // 左 => -Z
                break;
            case 'west':
                x -= relFore;       // 前 => -X
                z += relLeft;       // 左 => +Z
                break;
            default:
                break;
        }

        const y = machineY + relY;
        return [x, y, z];
    }

    function getLootFromMultiplePositions(level, relativePositions) {
        const fakePlayer = $ANFakePlayer.getPlayer(level)
        const damageSource = level.damageSources().playerAttack(fakePlayer)
        const allLootItems = []

        for (let i = 0; i < relativePositions.length; i++) {
            let relPos = relativePositions[i]
            let globalPos = relativeToGlobal(relPos[0], relPos[1], relPos[2])
            let block = level.getBlock(globalPos)
            if (!block) {
                console.log(`No block found at position ${globalPos}`)
                continue
            }
            
            let blockId = block.getId().toString()
            if (blockId !== 'ars_nouveau:mob_jar') {
                console.log(`Block at position ${globalPos} is not mob jar (${blockId}), skipping`)
                continue
            }
            
            if (!block.getEntity()) {
                console.log(`No entity found in mob jar at position ${globalPos}`)
                continue
            }

            let entity = block.getEntity().getEntity()
            if (!entity) {
                console.log(`Entity is null in mob jar at position ${globalPos}`)
                continue
            }

            let paramsMap = new $HashMap()
            paramsMap.put($LootContextParams.THIS_ENTITY, entity)
            paramsMap.put($LootContextParams.ORIGIN, entity.position())
            paramsMap.put($LootContextParams.DAMAGE_SOURCE, damageSource)
            paramsMap.put($LootContextParams.KILLER_ENTITY, fakePlayer)
            paramsMap.put($LootContextParams.LAST_DAMAGE_PLAYER, fakePlayer)

            let dynamicDrops = new $HashMap()
            let lootParams = new $LootParams(
                level,
                paramsMap,
                dynamicDrops,
                0
            )

            let lootTable = entity.getEntityType().getDefaultLootTable()
            let lootDate = level.getServer().getLootData()
            let loot = lootDate.getLootTable(lootTable)
            let itemStack = loot.getRandomItems(lootParams)

            itemStack.forEach(item => {
                if (item && item.getItem()) {
                    allLootItems.push(item)
                }
            })
        }

        return allLootItems
    }

    let outputCon = getLootFromMultiplePositions(level, [
        [0, -2, 1],
        [1, -2, 1],
        [-1,-2, 1],
        [-2,-3, 1],
        [-2,-4, 1],
        [-2,-5, 1],
        [2, -3, 1],
        [2, -4, 1],
        [2, -5, 1],
        [0, -6, 1],
        [1, -6, 1],
        [-1,-6, 1]
    ])

    let builder = recipe.toBuilder()
    builder.inputItems("ars_nouveau:source_gem")
    builder.outputItems(outputCon)
    let newRecipe = builder.buildMBDRecipe()

    e.event.setRecipe(newRecipe)
})