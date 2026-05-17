let $Crafting = Java.loadClass("net.minecraft.world.item.crafting.ShapedRecipe")
let $ShapelessCrafting = Java.loadClass("net.minecraft.world.item.crafting.ShapelessRecipe")
let $shapedRecipe = Java.loadClass("net.minecraftforge.common.crafting.IShapedRecipe")
MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:crafter", e => {
    let event = e.event
    const {recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe} = event
    if (proxyTypeId == "minecraft:crafting") {
        //以后加一个功能，根据不同原料数量，使用不同的催化剂，防止串配方
        if (proxyRecipe instanceof $Crafting) {
            let output = proxyRecipe.result
            let recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")
            recipe.outputItems(output)
            for (let i = 0; i < 9; i++) {
                let inputslot = proxyRecipe.getIngredients()[i]
                if (inputslot != undefined) {
                    if (!inputslot.itemIds.isEmpty()) {
                        recipe.slotName(`crafter_${i}` , builder => builder
                            .inputItems(inputslot)
                        )
                    }
                }
            }

            event.mbdRecipe = recipe.buildMBDRecipe()
        }else if (proxyRecipe instanceof $ShapelessCrafting) {
            /**@type {Internal.ShapelessRecipe}*/
            let shepelessRecipe = proxyRecipe
            let output = shepelessRecipe.result
            let recipe = recipeType.recipeBuilder().id(proxyRecipeId + "_mbd2")
            recipe.outputItems(output)

            let recipeIngredients = shepelessRecipe.getIngredients()
            let l = recipeIngredients.size()
            for (let i = 0; i <= l; i++) {
                let inputslot = recipeIngredients[i]
                if (inputslot != undefined) {
                    if (!inputslot.itemIds.isEmpty()) {
                        recipe.slotName(`crafter_${i}` , builder => builder
                            .inputItems(inputslot)
                        )
                    }
                }
            }

            event.mbdRecipe = recipe.buildMBDRecipe()
        }else {
            event.mbdRecipe = null
        }
    }
})

let MBDRecipeContent = Java.loadClass("com.lowdragmc.mbd2.api.recipe.content.Content")
MBDMachineEvents.onUI("mbd2:patten_handler", e => {
    const { machine , root } = e.event

    let level = machine.getLevel()
    /**@type {ButtonWidget}*/
    let query = root.getFirstWidgetById("query")
    /**@type {ButtonWidget}*/
    let trans = root.getFirstWidgetById("trans")

    let bin = {
            "crafter_0": 0,
            "crafter_1": 1,
            "crafter_2": 2,
            "crafter_3": 3,
            "crafter_4": 4,
            "crafter_5": 5,
            "crafter_6": 6,
            "crafter_7": 7,
            "crafter_8": 8
    }

    query.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON, new TextTexture("查询"))
    query.setOnPressCallback(clickData => {

        /**@type {ItemStackTransfer.prototype}*/
        let oldPatten = machine.getTraitByName("crafter_patten").storage
        let craftPattenSlot = oldPatten.getStackInSlot(0)

        /**@type {ItemStackTransfer.prototype}*/
        let recipeOrder = machine.getTraitByName("recipe_order").storage

        if (clickData.isRemote) {

            if (!craftPattenSlot.isEmpty()) {

                let CraftPattenData = craftPattenSlot.getNbt()

                if (CraftPattenData != null) {

                    let oldRecipeId = CraftPattenData.getString("recipe")
                    
                    /**@type {Internal.ListTag}*/
                    let recipeItemArrayNbt = CraftPattenData.get("in")
                    let recipeItemArray = recipeItemArrayNbt.toArray()
                    let recipeItemArrayLength = recipeItemArray.length

                    for (let i = 0; i < 9; i++) {
                        recipeOrder.setStackInSlot(i, Item.of("minecraft:air"))
                    }

                    if (oldRecipeId != null) {

                        let recipeManager = level.getRecipeManager()

                        /**@type {Internal.MBDRecipe}*/
                        let MBDrecipe = recipeManager.byKey(new ResourceLocation(oldRecipeId + "_mbd2")).get()
                        let recipeInput = MBDrecipe.inputs.values().toArray()

                        recipeInput[0].forEach(input => {

                            /**@type {Internal.Content}*/
                            let InputContent = input
                            let slot = InputContent.slotName

                            /**@type {Internal.ArrayList}*/
                            let itemStack = InputContent.getContent().getInner().getStacks()

                            itemStack.forEach(stack => {
                                let itemId = stack.getId()

                                for (let i = 0; i < recipeItemArrayLength; i++) {
                                    if (Object.keys(recipeItemArray[i]).length != 0 ) {
                                        if (itemId == recipeItemArray[i].id) {
                                            recipeOrder.setStackInSlot(bin[slot], stack)
                                        }
                                    }
                                }
                            })
                        })
                    }
                }
            }
        }
    })

    let temporaryData = new $CompoundTag()
    temporaryData.put("encoded_resonating_pattern",{})
    temporaryData.get("encoded_resonating_pattern").put("inputTargets",[{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false},{hasValue:false}])
    temporaryData.get("encoded_resonating_pattern").put("sparseInputs",[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
    temporaryData.get("encoded_resonating_pattern").put("sparseOutputs",[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
    temporaryData.putInt("resonating_pattern_selected_input",0)

    trans.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON, new TextTexture("转换"))
    trans.setOnPressCallback(clickData => {

        /**@type {ItemStackTransfer.prototype}*/
        let oldPatten = machine.getTraitByName("crafter_patten").storage
        let craftPattenSlot = oldPatten.getStackInSlot(0)

        /**@type {ItemStackTransfer.prototype}*/
        let CrafterInformation = machine.getTraitByName("crafter_Information").storage

        /** @type {ItemStackTransfer.prototype}*/
        let output = machine.getTraitByName("output").storage

        if (!clickData.isRemote) {

            if (!CrafterInformation.getStackInSlot(0).isEmpty()) {

                let crafterInformationItem = CrafterInformation.getStackInSlot(0)
                if (Object.keys(crafterInformationItem.getNbt()).length != 0) {
                    let crafterInformationData = crafterInformationItem.getNbt()

                    if (!craftPattenSlot.isEmpty()) {

                        let CraftPattenData = craftPattenSlot.getNbt()

                        if (CraftPattenData != null) {

                            let oldRecipeId = CraftPattenData.getString("recipe")
                            
                            /**@type {Internal.ListTag}*/
                            let recipeItemArrayNbt = CraftPattenData.get("in")
                            let recipeItemArray = recipeItemArrayNbt.toArray()
                            let recipeItemArrayLength = recipeItemArray.length

                            if (oldRecipeId != null) {

                                let recipeManager = level.getRecipeManager()

                                /**@type {Internal.MBDRecipe}*/
                                let MBDrecipe = recipeManager.byKey(new ResourceLocation(oldRecipeId + "_mbd2")).get()
                                let recipeInput = MBDrecipe.inputs.values().toArray()

                                let dimension = crafterInformationData.get("data").getString("dimension")

                                /**@type {Internal.CompoundTag}*/
                                let NBTencodedResonatingPattern = temporaryData.get("encoded_resonating_pattern")

                                recipeInput[0].forEach(input => {

                                    /**@type {Internal.Content}*/
                                    let InputContent = input
                                    let slot = InputContent.slotName

                                    /**@type {Internal.ArrayList}*/
                                    let itemStack = InputContent.getContent().getInner().getStacks()

                                    itemStack.forEach(stack => {
                                        let itemId = stack.getId()

                                        for (let i = 0; i < recipeItemArrayLength; i++) {
                                            if (Object.keys(recipeItemArray[i]).length != 0 ) {
                                                if (itemId == recipeItemArray[i].id) {
                                                    let slotNum = bin[slot]

                                                    let crafterInformationDataSlot = crafterInformationData.get("data").get(`Slot${slotNum}`)
                                                    let faceNum = crafterInformationDataSlot.getInt("face")

                                                    let blockPos = crafterInformationDataSlot.get("pos")
                                                    let blockX = blockPos.getInt("x")
                                                    let blockY = blockPos.getInt("y")
                                                    let blockZ = blockPos.getInt("z")

                                                    /**@type {Internal.CompoundTag}*/
                                                    let inputTargetsSlot = NBTencodedResonatingPattern.get("inputTargets")[slotNum]
                                                    /**@type {Internal.CompoundTag}*/
                                                    let sparseInputsSlot = NBTencodedResonatingPattern.get("sparseInputs")[slotNum]

                                                    inputTargetsSlot.putString("dimension", dimension)
                                                    inputTargetsSlot.putInt("face", faceNum)
                                                    inputTargetsSlot.putBoolean("hasValue", true)
                                                    inputTargetsSlot.put("pos", {X:blockX,Y:blockY,Z:blockZ})

                                                    sparseInputsSlot.putLong("#",recipeItemArray[i].Count)
                                                    sparseInputsSlot.putString("#c","ae2:i")
                                                    sparseInputsSlot.putString("id",itemId)
                                                }
                                            }
                                        }
                                    })
                                })

                                /**@type {Internal.CompoundTag}*/
                                let recipeOutput = CraftPattenData.get("out")
                                let outputCount = recipeOutput.getByte("Count")
                                let outputId = recipeOutput.getString("id")

                                let sparseOutputsSlot = NBTencodedResonatingPattern.get("sparseOutputs")[0]
                                sparseOutputsSlot.putLong("#",outputCount)
                                sparseOutputsSlot.putString("#c","ae2:i")
                                sparseOutputsSlot.putString("id",outputId)

                                oldPatten.setStackInSlot(0, Item.of("minecraft:air",1))
                                output.setStackInSlot(0, Item.of("ae2cs:resonating_pattern",1,temporaryData))
                            }
                        }
                    }
                }
            }
        }
    })

})

let $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")
MBDMachineEvents.onStructureFormed("mbd2:ultimate_crafter", e => {
    const { machine } = e.event
    let level = machine.getLevel()
    let data = machine.getCustomData()

    /** @type {Internal.MBDMultiblockMachine} */
    let multiblock = machine
    let parts = multiblock.getParts()

    let dimension = level.getDimension().toString()
    data.putString("dimension", dimension)

    let binToSlot = {
        "mbd2:crafter_input_0": 0,
        "mbd2:crafter_input_1": 1,
        "mbd2:crafter_input_2": 2,
        "mbd2:crafter_input_3": 3,
        "mbd2:crafter_input_4": 4,
        "mbd2:crafter_input_5": 5,
        "mbd2:crafter_input_6": 6,
        "mbd2:crafter_input_7": 7,
        "mbd2:crafter_input_8": 8
    }

    let faceToNum = {
        "down": 0,
        "up": 1,
        "north": 2,
        "south": 3,
        "west": 4,
        "east": 5
    }

    parts.forEach(part => {
        let partPos = part.getPos()
        let partId = level.getBlock(partPos.getX(), partPos.getY(), partPos.getZ()).getId()
        if (binToSlot[partId] != null) {
            let partFace = part.getFrontFacing().get()
            let slot = binToSlot[partId]
            let faceNum = Math.floor(faceToNum[partFace])
            
            let temporaryData = new $CompoundTag()
            temporaryData.put("pos", {x:partPos.getX(),y:partPos.getY(),z:partPos.getZ()})
            temporaryData.putInt("face", faceNum)

            data.put(`Slot${slot}`, temporaryData.copy())
        }
    })
})

BlockEvents.rightClicked(event => {
    if (event.getPlayer() != null) {

        let player = event.getPlayer()

        if (player.getMainHandItem().getId() === "kubejs:craft_logoer") {

            let mainHandItem = player.getMainHandItem()
            mainHandItem.setNbt("{}")
            let itemData = mainHandItem.getNbt()

            if (event.getBlock().getId() === "mbd2:ultimate_crafter") {

                let crafterBlock = event.getBlock()
                let blockData = crafterBlock.getEntityData()

                if (blockData.getString("machineState") === "formed") {
                    if (Object.keys(blockData.get("customData")).length != 0) {
                        itemData.put("data",blockData.get("customData").copy())
                        player.tell("已绑定合成器,NBT已写入")
                    }
                } else {
                    player.tell("合成器的多方块结构未成型,NBT清空")
                }
            } else {
                player.tell("该方块不是合成器,NBT清空")
            }
        }
    }
})
