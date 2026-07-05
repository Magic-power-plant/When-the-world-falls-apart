export {}

const $Crafting = Java.loadClass("net.minecraft.world.item.crafting.ShapedRecipe")
const $ShapelessCrafting = Java.loadClass("net.minecraft.world.item.crafting.ShapelessRecipe")
const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")

type NumberByString = {
    [key: string]: number
}

const CRAFTER_SLOT_COUNT = 9
const PATTERN_INPUT_TARGET_COUNT = 81
const PATTERN_SPARSE_OUTPUT_COUNT = 27
const CRAFT_LOGGER_ITEM = "kubejs:craft_logoer"

const crafterSlotByName: NumberByString = {
    "crafter_0": 0,
    "crafter_1": 1,
    "crafter_2": 2,
    "crafter_3": 3,
    "crafter_4": 4,
    "crafter_5": 5,
    "crafter_6": 6,
    "crafter_7": 7,
    "crafter_8": 8,
}

const crafterSlotByBlock: NumberByString = {
    "mbd2:crafter_input_0": 0,
    "mbd2:crafter_input_1": 1,
    "mbd2:crafter_input_2": 2,
    "mbd2:crafter_input_3": 3,
    "mbd2:crafter_input_4": 4,
    "mbd2:crafter_input_5": 5,
    "mbd2:crafter_input_6": 6,
    "mbd2:crafter_input_7": 7,
    "mbd2:crafter_input_8": 8,
}

const faceNumberByDirection: NumberByString = {
    "down": 0,
    "up": 1,
    "north": 2,
    "south": 3,
    "west": 4,
    "east": 5,
}

function registerCrafterIngredient(recipe: any, index: number, ingredient: any) {
    if (ingredient != undefined && !ingredient.itemIds.isEmpty()) {
        recipe.slotName(`crafter_${index}`, (builder:Internal.MBDRecipeSchema$MBDRecipeJS) => builder.inputItems(ingredient)
        )
    }
}

function NonNullListHaveContent(list:Internal.NonNullList<Internal.Ingredient>) {
    if (list[0].isEmpty() && list[1].isEmpty() && list[2].isEmpty() && list[3].isEmpty() && list[4].isEmpty() && list[5].isEmpty() && list[6].isEmpty() && list[7].isEmpty() && list[8].isEmpty()) {
        return false
    } else {
        return true
    }
}

function transferShapedCrafting(event: Internal.TransferProxyRecipeEvent) {
    let proxyRecipe = event.proxyRecipe as Internal.ShapedRecipe
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")

    recipe.outputItems(proxyRecipe.result)
    for (let i = 0; i < CRAFTER_SLOT_COUNT; i++) {
        registerCrafterIngredient(recipe, i, proxyRecipe.getIngredients()[i])
    }

    if (proxyRecipe.result.isEmpty() || proxyRecipe.getIngredients().isEmpty() || !NonNullListHaveContent(proxyRecipe.getIngredients())) {
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = null
    } else {
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = recipe.buildMBDRecipe()
    }
}

function transferShapelessCrafting(event: Internal.TransferProxyRecipeEvent) {
    let shapelessRecipe = event.proxyRecipe as Internal.ShapelessRecipe
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2")
    let recipeIngredients = shapelessRecipe.getIngredients()
    let ingredientCount = recipeIngredients.size()

    recipe.outputItems(shapelessRecipe.result)
    for (let i = 0; i <= ingredientCount; i++) {
        registerCrafterIngredient(recipe, i, recipeIngredients[i])
    }

    if (shapelessRecipe.result.isEmpty() || recipeIngredients.isEmpty() || !NonNullListHaveContent(recipeIngredients)) {
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = null
    } else {
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = recipe.buildMBDRecipe()
    }
    
}

function createEmptyTags(count: number) {
    let tags = []
    for (let i = 0; i < count; i++) {
        tags.push({})
    }
    return tags
}

function createInputTargets(count: number) {
    let targets = []
    for (let i = 0; i < count; i++) {
        targets.push({ hasValue: false })
    }
    return targets
}

function createResonatingPatternData() {
    let data = new $CompoundTag()
    data.put("encoded_resonating_pattern", {} as Internal.Tag_)

    let pattern = data.get("encoded_resonating_pattern") as unknown as Internal.CompoundTag
    pattern.put("inputTargets", createInputTargets(PATTERN_INPUT_TARGET_COUNT) as unknown as Internal.Tag_)
    pattern.put("sparseInputs", createEmptyTags(PATTERN_INPUT_TARGET_COUNT) as unknown as Internal.Tag_)
    pattern.put("sparseOutputs", createEmptyTags(PATTERN_SPARSE_OUTPUT_COUNT) as unknown as Internal.Tag_)

    data.putInt("resonating_pattern_selected_input", 0)
    return data
}

function getRecipePatternItems(patternData: any) {
    let recipeItemArrayNbt = patternData.get("in")
    return recipeItemArrayNbt.toArray()
}

function getMbdRecipe(level: any, recipeId: string) {
    let recipeManager = level.getRecipeManager()
    return recipeManager.byKey(new ResourceLocation(recipeId + "_mbd2")).get()
}

function forEachMatchedRecipeStack(level: any, recipeId: string, recipeItems: any[], onMatch: any) {
    let mbdRecipe = getMbdRecipe(level, recipeId)
    let recipeInput = mbdRecipe.inputs.values().toArray()

    recipeInput[0].forEach((input:Internal.Content) => {
        let slot = input.slotName
        let itemStacks = input.getContent().getInner().getStacks()

        itemStacks.forEach((stack:Internal.ItemStack) => {
            let itemId = stack.getId()

            for (let i = 0; i < recipeItems.length; i++) {
                if (Object.keys(recipeItems[i]).length != 0 && itemId == recipeItems[i].id) {
                    onMatch(slot, stack, recipeItems[i])
                }
            }
        })
    })
}

function clearRecipeOrder(recipeOrder: any) {
    for (let i = 0; i < CRAFTER_SLOT_COUNT; i++) {
        recipeOrder.setStackInSlot(i, Item.of("minecraft:air"))
    }
}

function fillRecipeOrder(level: any, patternData: any, recipeOrder: any) {
    let oldRecipeId = patternData.getString("recipe")
    let recipeItems = getRecipePatternItems(patternData)

    clearRecipeOrder(recipeOrder)
    if (oldRecipeId != null) {
        forEachMatchedRecipeStack(level, oldRecipeId, recipeItems, (slot:string, stack:Internal.ItemStack) => {
            recipeOrder.setStackInSlot(crafterSlotByName[slot], stack)
        })
    }
}

function writeInputTarget(pattern: any, slotNum: number, dimension: string, crafterSlotData: any, recipeItem: any, itemId: string) {
    let faceNum = crafterSlotData.getInt("face")
    let blockPos = crafterSlotData.get("pos")
    let blockX = blockPos.getInt("x")
    let blockY = blockPos.getInt("y")
    let blockZ = blockPos.getInt("z")

    let inputTargetsSlot = pattern.get("inputTargets")[slotNum]
    let sparseInputsSlot = pattern.get("sparseInputs")[slotNum]

    inputTargetsSlot.putString("dimension", dimension)
    inputTargetsSlot.putInt("face", faceNum)
    inputTargetsSlot.putBoolean("hasValue", true)
    inputTargetsSlot.put("pos", { X: blockX, Y: blockY, Z: blockZ })

    sparseInputsSlot.putLong("#", recipeItem.Count)
    sparseInputsSlot.putString("#c", "ae2:i")
    sparseInputsSlot.putString("id", itemId)
}

function writePatternInputs(level: any, patternData: any, crafterData: any, resonatingPatternData: any) {
    let oldRecipeId = patternData.getString("recipe")
    let recipeItems = getRecipePatternItems(patternData)
    let dimension = crafterData.get("data").getString("dimension")
    let pattern = resonatingPatternData.get("encoded_resonating_pattern")

    if (oldRecipeId != null) {
        forEachMatchedRecipeStack(level, oldRecipeId, recipeItems, (slot:string, stack:Internal.ItemStack, recipeItem:any) => {
            let slotNum = crafterSlotByName[slot]
            let crafterSlotData = crafterData.get("data").get(`Slot${slotNum}`)
            writeInputTarget(pattern, slotNum, dimension, crafterSlotData, recipeItem, stack.getId())
        })
    }
}

function writePatternOutput(patternData: any, resonatingPatternData: any) {
    let recipeOutput = patternData.get("out")
    let sparseOutputsSlot = resonatingPatternData.get("encoded_resonating_pattern").get("sparseOutputs")[0]

    sparseOutputsSlot.putLong("#", recipeOutput.getByte("Count"))
    sparseOutputsSlot.putString("#c", "ae2:i")
    sparseOutputsSlot.putString("id", recipeOutput.getString("id"))
}

function saveCrafterPart(data: any, level: any, part: any) {
    let partPos = part.getPos()
    let partId = level.getBlock(partPos.getX(), partPos.getY(), partPos.getZ()).getId()

    if (crafterSlotByBlock[partId] == null) {
        return
    }

    let partFace = part.getFrontFacing().get()
    let slot = crafterSlotByBlock[partId]
    let faceNum = Math.floor(faceNumberByDirection[partFace])
    let temporaryData = new $CompoundTag()

    temporaryData.put("pos", { x: partPos.getX(), y: partPos.getY(), z: partPos.getZ() } as unknown as Internal.Tag_)
    temporaryData.putInt("face", faceNum)
    data.put(`Slot${slot}`, temporaryData.copy())
}

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:crafter", e => {
    let event = e.event
    const { proxyTypeId, proxyRecipe } = event

    if (proxyTypeId as unknown as string == "minecraft:crafting") {
        if (proxyRecipe instanceof $Crafting) {
            transferShapedCrafting(event)
        } else if (proxyRecipe instanceof $ShapelessCrafting) {
            transferShapelessCrafting(event)
        } else {
            (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = null
        }
    }
})

MBDMachineEvents.onUI("mbd2:patten_handler", e => {
    const { machine, root } = e.event
    let level = machine.getLevel()
    let query = root.getFirstWidgetById("query") as ButtonWidget
    let trans = root.getFirstWidgetById("trans") as ButtonWidget

    query.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON as unknown as Internal.IGuiTexture_, new TextTexture("查询") as unknown as Internal.IGuiTexture_)
    query.setOnPressCallback(clickData => {
        let patternStorage = (machine.getTraitByName("crafter_patten") as Internal.ItemSlotCapabilityTrait).storage
        let patternSlot = patternStorage.getStackInSlot(0)
        let recipeOrder = (machine.getTraitByName("recipe_order") as Internal.ItemSlotCapabilityTrait).storage

        if (clickData.isRemote && !patternSlot.isEmpty()) {
            let patternData = patternSlot.getNbt()
            if (patternData != null) {
                fillRecipeOrder(level, patternData, recipeOrder)
            }
        }
    })

    let temporaryData = createResonatingPatternData()

    trans.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON as unknown as Internal.IGuiTexture_, new TextTexture("转换") as unknown as Internal.IGuiTexture_)
    trans.setOnPressCallback(clickData => {
        let patternStorage = (machine.getTraitByName("crafter_patten") as Internal.ItemSlotCapabilityTrait).storage
        let patternSlot = patternStorage.getStackInSlot(0)
        let crafterInformation = (machine.getTraitByName("crafter_Information") as Internal.ItemSlotCapabilityTrait).storage
        let output = (machine.getTraitByName("output") as Internal.ItemSlotCapabilityTrait).storage

        if (!clickData.isRemote && !crafterInformation.getStackInSlot(0).isEmpty()) {
            let crafterInformationItem = crafterInformation.getStackInSlot(0)
            if (Object.keys(crafterInformationItem.getNbt()).length != 0 && !patternSlot.isEmpty()) {
                let crafterData = crafterInformationItem.getNbt()
                let patternData = patternSlot.getNbt()

                if (patternData != null && patternData.getString("recipe") != null) {
                    writePatternInputs(level, patternData, crafterData, temporaryData)
                    writePatternOutput(patternData, temporaryData)
                    patternStorage.setStackInSlot(0, Item.of("minecraft:air", 1))
                    output.setStackInSlot(0, Item.of("ae2cs:resonating_pattern", 1, temporaryData))
                }
            }
        }
    })
})

MBDMachineEvents.onStructureFormed("mbd2:ultimate_crafter", e => {
    const { machine } = (e.event as unknown as {machine : Internal.MBDMultiblockMachine})
    let level = machine.getLevel()
    let data = machine.getCustomData()
    let parts = machine.getParts()

    data.putString("dimension", level.getDimension().toString())
    parts.forEach(part => {
        saveCrafterPart(data, level, part)
    })
})

BlockEvents.rightClicked(event => {
    if (event.getPlayer() != null) {
        let player = event.getPlayer()

        if (player.getMainHandItem().getId() === CRAFT_LOGGER_ITEM) {
            let mainHandItem = player.getMainHandItem()
            mainHandItem.setNbt("{}")
            let itemData = mainHandItem.getNbt()

            if (event.getBlock().getId() === "mbd2:ultimate_crafter") {
                let crafterBlock = event.getBlock()
                let blockData = crafterBlock.getEntityData()

                if (blockData.getString("machineState") === "formed") {
                    if (Object.keys(blockData.get("customData")).length != 0) {
                        itemData.put("data", blockData.get("customData").copy())
                        player.tell("宸茬粦瀹氬悎鎴愬櫒,NBT宸插啓鍏?" as unknown as net.minecraft.network.chat.Component_)
                    }
                } else {
                    player.tell("鍚堟垚鍣ㄧ殑澶氭柟鍧楃粨鏋勬湭鎴愬瀷,NBT娓呯┖" as unknown as net.minecraft.network.chat.Component_)
                }
            } else {
                player.tell("璇ユ柟鍧椾笉鏄悎鎴愬櫒,NBT娓呯┖" as unknown as net.minecraft.network.chat.Component_)
            }
        }
    }
})


function CanCompression (Ingredient : Internal.NonNullList<Internal.Ingredient>) {
    let firstIngredient = null
    let hasValue = false

    for (let i = 0; i < Ingredient.size(); i++) {
        if (!Ingredient[i].isEmpty()) {
            if (!hasValue) {
                firstIngredient = Ingredient[i]
                hasValue = true
            } else {
                if (Ingredient[i] !== firstIngredient) {
                    return false
                }
            }
        }
    }
    return true
}

function CompressionIngredient (Ingredient : Internal.NonNullList<Internal.Ingredient>) {
    let firstIngredient = null
    let count = 0
    for (let i = 0; i < Ingredient.size(); i++) {
        if (!Ingredient[i].isEmpty()) {
            if (firstIngredient == null) {
                firstIngredient = Ingredient[i]
                count++
            } else {
                if (Ingredient[i] === firstIngredient) {
                    count++
                }
            }
        }
    }
    return firstIngredient?.withCount(count)
}

function ApplyRecipe (recipe :Internal.MBDRecipeSchema$MBDRecipeJS, event : Internal.TransferProxyRecipeEvent) {
    let proxyRecipe = event.proxyRecipe as Internal.ShapelessRecipe | Internal.ShapedRecipe
    let ingredients = proxyRecipe.getIngredients()
    if (CanCompression(ingredients)) {
        let compressedIngredient = CompressionIngredient(ingredients) as Internal.InputItem
        recipe.inputItems(compressedIngredient as InputItem_).outputItems(proxyRecipe.result);
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = recipe.buildMBDRecipe()
    }
}

function CompressionCraftRecipe (event: Internal.TransferProxyRecipeEvent) {
    let proxyedRecipe = event.proxyRecipe
    let proxyTypeId = event.proxyTypeId
    let recipe = event.recipeType.recipeBuilder().id(event.proxyRecipeId + "_mbd2") as Internal.MBDRecipeSchema$MBDRecipeJS
    if (proxyedRecipe instanceof $ShapelessCrafting) {
        ApplyRecipe(recipe, event)
    } else if (proxyedRecipe instanceof $Crafting) {
        ApplyRecipe(recipe, event)
    } else {
        (event as {mbdRecipe : Internal.MBDRecipe | null}).mbdRecipe = null
    }
}