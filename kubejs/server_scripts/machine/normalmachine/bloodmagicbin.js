//LP输入仓
let $Binding = Java.loadClass("wayoftime.bloodmagic.core.data.Binding")
let $NetworkHelper = Java.loadClass("wayoftime.bloodmagic.util.helper.NetworkHelper")
let $SoulTicket = Java.loadClass("wayoftime.bloodmagic.core.data.SoulTicket")
let $SoulNetwork = Java.loadClass("wayoftime.bloodmagic.core.data.SoulNetwork")

let NBTLp = "LP"
let NBTLpMaker = "LPMaker"
let NBTOwner = "Owner"

MBDMachineEvents.onTick("mbd2:lp_in_bin",e => {
    let event = e.event
    const {machine} = event
    let data = machine.customData

    let orb = machine.getTraitByName("orb")
    let lp = machine.getTraitByName("lp")

    if (orb != null) {
        /**@type {ItemStackTransfer.prototype}*/
        let orbStorage = orb.storage
        let orbSlot1 = orbStorage.getStackInSlot(0)

        if(orbSlot1.hasTag("forge:bloodorbs") && orbSlot1.nbt != null) {
            let playerUUID = $Binding.fromStack(orbSlot1).getOwnerId()

            /**@type {ItemStackTransfer.prototype}*/
            let lpStorage = lp.storage
            let lpSlot1 = lpStorage.getStackInSlot(0)

            let LpAmount = $NetworkHelper["getSoulNetwork(java.util.UUID)"](playerUUID).getCurrentEssence()

            if (LpAmount > 0) {

                if (lpSlot1.getId() === "minecraft:air") {
                    lpStorage.setStackInSlot(0,Item.of("kubejs:lp_maker",LpAmount))
                    data.putInt(NBTLp,LpAmount)
                    data.putInt(NBTLpMaker,lpSlot1.getCount())
                    data.putString(NBTOwner,$Binding.fromStack(orbSlot1).getOwnerName())
                }else if (lpSlot1.getId() != "minecraft:air") {
                    let lpMakerItemAmount = lpSlot1.getCount()
                    let diff = (lpMakerItemAmount - data.getInt(NBTLpMaker))

                    if (diff < 0) {
                        $NetworkHelper["getSoulNetwork(java.util.UUID)"](playerUUID).syphon(new $SoulTicket(-diff))
                        lpStorage.setStackInSlot(0,Item.of("kubejs:lp_maker",LpAmount))
                    }else if (diff > 0) {
                        $NetworkHelper["getSoulNetwork(java.util.UUID)"](playerUUID).add(new $SoulTicket(diff),diff)
                        lpStorage.setStackInSlot(0,Item.of("kubejs:lp_maker",LpAmount))
                    }else {
                        lpStorage.setStackInSlot(0,Item.of("kubejs:lp_maker",LpAmount))
                    }

                    data.putInt(NBTLp,LpAmount)
                    data.putInt(NBTLpMaker,lpMakerItemAmount)
                }
            }else if (LpAmount === 0) {
                lpStorage.setStackInSlot(0,Item.of("minecraft:air",1))
            }else {
                $NetworkHelper["getSoulNetwork(java.util.UUID)"](playerUUID).currentEssence = 0
                lpStorage.setStackInSlot(0,Item.of("minecraft:air",1))
            }
        }else if (!orbSlot1.hasTag("forge:bloodorbs") || orbSlot1.nbt == null) {
            data.putInt(NBTLp,0)
            data.putInt(NBTLpMaker,0)
            lp.storage.setStackInSlot(0,Item.of("minecraft:air",1))
        }
    }
})

MBDMachineEvents.onUI("mbd2:lp_in_bin",e => {
    const { machine, root } = e.event
    const lpLabel = root.getFirstWidgetById("lp_amount")
    let data = machine.customData

    lpLabel.setTextProvider(() => data.getString(NBTOwner)+":"+data.getInt(NBTLpMaker).toString())
})

//意志输入仓
let $willChunk = Java.loadClass("wayoftime.bloodmagic.demonaura.WillChunk")
let $WorldDemonWillHandler = Java.loadClass("wayoftime.bloodmagic.demonaura.WorldDemonWillHandler")

MBDMachineEvents.onTick("mbd2:will_in_bin",e => {
    let event = e.event
    const {machine} = event
    let data = machine.customData
    let level = machine.getLevel()
    let pos = machine.getPos()

    let rawSlot = machine.getTraitByName("raw_will")
    let vengefulSlot = machine.getTraitByName("vengeful_will")
    let steadfastSlot = machine.getTraitByName("steadfast_will")
    let destructiveSlot = machine.getTraitByName("destructive_will")
    let corrosiveSlot = machine.getTraitByName("corrosive_will")

    let CurrentWill = $WorldDemonWillHandler.getWillChunk(level,pos).getCurrentWill()

    /**
     * @param {Internal.EnumDemonWillType_} willType
     * @param {Internal.DemonWillHolder} CurrentWill
     * @param {Internal.ITrait} slot
     * @param {Internal.CompoundTag} data
    */
    function willProcess (willType,CurrentWill,slot,data) {
        /**@type {ItemStackTransfer.prototype}*/
        let storage = slot.storage
        let StackInSlot = storage.getStackInSlot(0)

        function willMaker (willType) {
            switch (willType) {
                case "default" :
                    return "kubejs:raw_will_maker"
                case "vengeful" :
                    return "kubejs:vengeful_will_maker"
                case "corrosive" :
                    return "kubejs:corrosive_will_maker"
                case "steadfast" :
                    return "kubejs:steadfast_will_maker"
                case "destructive" :
                    return "kubejs:destructive_will_maker"
                default :
                    return undefined
            }
        }

        let willTypeAmount = CurrentWill.getWill(willType)

        if (willTypeAmount > 0) {
            if (StackInSlot.getId() === "minecraft:air") {
                storage.setStackInSlot(0,Item.of(willMaker(willType),Math.floor(willTypeAmount)))
                data.putDouble(willType,willTypeAmount)
            }else {
                let willSlotAmount = StackInSlot.getCount()
                let diff = willSlotAmount - data.getDouble(willType)

                if(diff > 0) {
                    CurrentWill.addWill(willType,diff)
                    storage.setStackInSlot(0,Item.of(willMaker(willType),Math.floor(willTypeAmount)))
                }else if (diff < 0) {
                    CurrentWill.drainWill(willType,-diff)
                    storage.setStackInSlot(0,Item.of(willMaker(willType),Math.floor(willTypeAmount)))
                }else {
                    storage.setStackInSlot(0,Item.of(willMaker(willType),Math.floor(willTypeAmount)))
                }

                data.putDouble(willType,willTypeAmount)
            }
        }else if (willTypeAmount === 0 ) {
            storage.setStackInSlot(0,Item.of("minecraft:air",1))
        }else {
            CurrentWill.addWill(willType,-willTypeAmount)
            storage.setStackInSlot(0,Item.of("minecraft:air",1))
        }
    }

    willProcess("default",CurrentWill,rawSlot,data)
    willProcess("corrosive",CurrentWill,corrosiveSlot,data)
    willProcess("destructive",CurrentWill,destructiveSlot,data)
    willProcess("steadfast",CurrentWill,steadfastSlot,data)
    willProcess("vengeful",CurrentWill,vengefulSlot,data)
})

MBDMachineEvents.onUI("mbd2:will_in_bin",e => {
    const { machine, root } = e.event

    const raw = root.getFirstWidgetById("raw")
    const corrosive = root.getFirstWidgetById("corrosive")
    const destructive = root.getFirstWidgetById("destructive")
    const steadfast = root.getFirstWidgetById("steadfast")
    const vengeful = root.getFirstWidgetById("vengeful")

    let rawSlot = machine.getTraitByName("raw_will").storage.getStackInSlot(0)
    let vengefulSlot = machine.getTraitByName("vengeful_will").storage.getStackInSlot(0)
    let steadfastSlot = machine.getTraitByName("steadfast_will").storage.getStackInSlot(0)
    let destructiveSlot = machine.getTraitByName("destructive_will").storage.getStackInSlot(0)
    let corrosiveSlot = machine.getTraitByName("corrosive_will").storage.getStackInSlot(0)

    let data = machine.customData

    raw.setTextProvider(() => "原生意志:"+rawSlot.getCount().toString())
    corrosive.setTextProvider(() => "腐蚀意志:"+corrosiveSlot.getCount().toString())
    destructive.setTextProvider(() => "破坏意志:"+destructiveSlot.getCount().toString())
    vengeful.setTextProvider(() => "复仇意志:"+vengefulSlot.getCount().toString())
    steadfast.setTextProvider(() => "坚毅意志:"+steadfastSlot.getCount().toString())
})