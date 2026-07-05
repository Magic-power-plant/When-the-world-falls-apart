let $WailaClientRegistration;
let $WailaBlockAccessor;
if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass('snownee.jade.impl.WailaClientRegistration');
    $WailaBlockAccessor = Java.loadClass('snownee.jade.api.BlockAccessor');
}

StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment()) return;

    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        let blockEntity = accessor.getBlockEntity();
        if (blockEntity == null) return;
        let maxSourceMethod = null;
        let sourceMethod = null;
        let blockEntityMethods = blockEntity.getClass().getMethods();
        for (let i = 0; i < blockEntityMethods.length; i++) {
            let method = blockEntityMethods[i];
            if (method.getParameterCount() != 0) continue;
            let methodName = String(method.getName());
            if (methodName == 'getMaxSource') maxSourceMethod = method;
            if (methodName == 'getSource') sourceMethod = method;
        }
        if (maxSourceMethod == null || sourceMethod == null) return;
        let maxSource = maxSourceMethod.invoke(blockEntity);
        let source = sourceMethod.invoke(blockEntity);
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        addToTooltip(Text.lightPurple(`魔源: ${source}/${maxSource}`));
    })
})