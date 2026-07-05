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
        if (accessor.getBlockEntity() == null) return;
        if (accessor.getBlockEntity().getMaxSource == null || accessor.getBlockEntity().getSource == null ) return;
        let maxSource = accessor.getBlockEntity().getMaxSource();
        let source = accessor.getBlockEntity().getSource();
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        addToTooltip(Text.lightPurple(`魔源: ${source}/${maxSource}`));
    })
})