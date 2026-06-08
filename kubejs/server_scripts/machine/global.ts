export {}

const g = global as any
g.machine = g.machine || {}

/**
 * 将相对于机器的坐标转换为全局坐标，在MBD2机器事件中使用
 * @param {number} relLeft  左偏移, 0为不偏移，正数向左，负数向右
 * @param {number} relFore  前偏移，0为不偏移，正数向前，负数向后
 * @param {number} relY   高偏移，0为不偏移，正数向上，负数向下
 * @param {{
 *  x: number,
 *  y: number,
 *  z: number,
 *  direction: 'south'|'north'|'east'|'west'
 * }} machine   机器坐标与朝向
 * @returns {number[]} [x, y, z]    全局坐标
 */

g.machine.relativeToGlobal = function (relLeft: number, relFore: number, relY: number, machine: any) {
    let x = machine.x;
    let z = machine.z;

    switch (machine.direction) {
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

    const y = machine.y + relY;
    return [x, y, z];
}

g.relativeToGlobal = g.machine.relativeToGlobal
