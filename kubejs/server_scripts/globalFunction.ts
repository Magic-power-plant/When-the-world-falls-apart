export {}

type JsonHelpers = {
    ItemIdToJson: (id: string) => Internal.JsonElement
    FluidIdToJson: (id: string, num: number) => Internal.JsonObject
    ItemObjectToJson: (kjsid: string) => Internal.JsonElement
    FluidObjectToJson: (kjsid: string) => Internal.JsonObject
}

type GlobalHelper = {
    json: JsonHelpers
    // 兼容旧 global.ts 的别名
    ItemToJson: (id: string) => Internal.JsonElement
    FluidToJson: (id: string, num: number) => Internal.JsonObject
    createJson: () => void
    Item: { banits: string[] }
    // 兼容旧 machine/global.ts 的别名
    machine: { relativeToGlobal: (relLeft: number, relFore: number, relY: number, machine: any) => number[] }
    relativeToGlobal: (relLeft: number, relFore: number, relY: number, machine: any) => number[]
}

export const g = global as unknown as GlobalHelper

g.json = g.json || {} as unknown as JsonHelpers
g.Item = g.Item || {} as unknown as GlobalHelper["Item"]
g.machine = g.machine || {} as unknown as GlobalHelper["machine"]

g.json.ItemIdToJson = function (id: string) {
    return Item.of(id as Internal.ItemStack_).toJson()
}

g.json.FluidIdToJson = function (id: string, num: number) {
    return Fluid.of(id as Internal.FluidStackJS_, num).toJson()
}

g.json.ItemObjectToJson = function (kjsid: string) {
    if (kjsid.startsWith("#")) {
        return Ingredient.of(kjsid as Internal.Ingredient_).toJson()
    }

    let match = kjsid.match(/^(\d+)x\s+(.+)$/) || null
    if (match) {
        let count = parseInt(match[1]) || 1
        let id = match[2]
        let trimmedId = id.trim()
        if (trimmedId.startsWith("#")) {
            return Ingredient.of(trimmedId as Internal.Ingredient_, count).toJson()
        } else {
            return Item.of(id as Internal.ItemStack_, count).toJson()
        }
    } else {
        return Item.of(kjsid as Internal.ItemStack_).toJson()
    }
}

g.json.FluidObjectToJson = function (kjsid: string) {
    if (kjsid.startsWith("#")) {
        return FluidIngredient.of(kjsid).toJson()
    }

    let match = kjsid.match(/^(\d+)x\s+(.+)$/) || null
    if (match) {
        let count = parseInt(match[1]) || 1
        let id = match[2]
        let trimmedId = id.trim()
        if (trimmedId.startsWith("#")) {
            return FluidIngredient.of(trimmedId, count).toJson()
        } else {
            return Fluid.of(id as Internal.FluidStackJS_, count).toJson()
        }
    } else {
        return Fluid.of(kjsid as Internal.FluidStackJS_, 1).toJson()
    }
}

// ---- 旧 global.ts 的兼容别名 ----
g.ItemToJson = g.json.ItemIdToJson
g.FluidToJson = g.json.FluidIdToJson
g.createJson = function () {}
g.Item.banits = g.Item.banits || []

// ---- 共享类型 ----
export type ItemRef = string
export type FluidRef = string
export type IngredientRef = ItemRef | Internal.Ingredient
export type FluidJson = {
    amount: number
    fluid?: string
    tag?: string
}
export type MachineAnchor = {
    x: number
    y: number
    z: number
    direction: string
}
export type RelativePos = {
    left: number
    fore: number
    y: number
}

// ---- 共享转换函数 ----
export const itemJson = (value: ItemRef) => g.json.ItemObjectToJson(value)
export const fluidJson = (value: FluidRef) => g.json.FluidObjectToJson(value)
export const ingredientJson = (value: IngredientRef) => {
    return typeof value === "string" ? g.json.ItemObjectToJson(value) : value.toJson()
}

export const notEmptyTag = (tag: string) => ({
    type: "forge:not",
    value: {
        type: "forge:tag_empty",
        tag: tag
    }
})

// ---- 机器坐标辅助（原 machine/global.ts 与多个机器脚本的重复实现）----

/**
 * 将相对于机器的坐标转换为全局坐标，在MBD2机器事件中使用
 * @param relLeft  左偏移, 0为不偏移，正数向左，负数向右
 * @param relFore  前偏移，0为不偏移，正数向前，负数向后
 * @param relY     高偏移，0为不偏移，正数向上，负数向下
 * @param machine  机器坐标与朝向
 * @returns [x, y, z] 全局坐标
 */
export function relativeToGlobal(relLeft: number, relFore: number, relY: number, machine: any): number[] {
    let x = machine.x
    let z = machine.z

    switch (machine.direction) {
        case 'south':
            x += relLeft
            z += relFore
            break
        case 'north':
            x -= relLeft
            z -= relFore
            break
        case 'east':
            x += relFore
            z -= relLeft
            break
        case 'west':
            x -= relFore
            z += relLeft
            break
        default:
            break
    }

    const y = machine.y + relY
    return [x, y, z]
}

g.machine.relativeToGlobal = relativeToGlobal
g.relativeToGlobal = relativeToGlobal

/**
 * 从MBD2机器对象提取锚点坐标与朝向。
 * 兼容 machine.pos（sourcelink/drygmy）与 machine.getPos()（carnageReactor）两种写法。
 */
export function machineAnchor(machine: any): MachineAnchor {
    const pos = machine.pos != null ? machine.pos : machine.getPos()
    return {
        x: pos.getX(),
        y: pos.getY(),
        z: pos.getZ(),
        direction: machine.frontFacing.get(),
    }
}

/**
 * 将机器相对坐标转换为全局坐标。
 * @param legacySouthFallthrough 为 true 时 "south" 会贯通到 "north"（旧 agronomic 机器行为）
 */
export function relativeToMachine(anchor: MachineAnchor, pos: RelativePos, legacySouthFallthrough?: boolean) {
    let x = anchor.x
    let z = anchor.z

    switch (anchor.direction) {
        case "south":
            x += pos.left
            z += pos.fore
            if (!legacySouthFallthrough) {
                break
            }
        case "north":
            x -= pos.left
            z -= pos.fore
            break
        case "east":
            x += pos.fore
            z -= pos.left
            break
        case "west":
            x -= pos.fore
            z += pos.left
            break
        default:
            break
    }

    return [x, anchor.y + pos.y, z]
}
