export {}
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

function removeEndSuffix(str: string): string {
  if (str.endsWith('_fluid_type')) {
    return str.slice(0, -11);   // 去掉最后 4 个字符
  }
  return str;
}

ServerEvents.recipes((event:Internal.RecipesEventJS) => {
    $ForgeRegistries.FLUID_TYPES.get().forEach((fluid:Internal.FluidType) => {
        let FluidId = removeEndSuffix(fluid.toString())
        event.recipes.mbd2.fluid()
            .outputFluids((FluidId + " 1000"))
            .inputItems(Item.of('packagedauto:volume_package', `{Fluid:{Amount:1000,FluidName:"${FluidId}"},Type:"minecraft:fluid"}`).weakNBT())
            .id(`mbd2:${FluidId.replace(":","_")}_package_to_fluid`);

        event.recipes.mbd2.fluid()
            .outputFluids((FluidId + " 1000"))
            .inputItems(Item.of('tconstruct:seared_fuel_tank',`{tank:{Amount:1000,FluidName:"${FluidId}"},tic_persistent:{}}`).weakNBT().withCount(1) as InputItem_)
    })
})