StartupEvents.registry('enchanted:circle_magic/shape', (event:Registry.CircleMagicShape) => {
    event.create("kubejs:shape_1" , 'circle_shape')
        .pattern(
            'XOOOOOOOX',
            'OOXOOOXOO',
            'OXXOOOXXO',
            'OOOOOOOOO',
            'OOOOOOOOO',
            'OOOOOOOOO',
            'OXXOOOXXO',
            'OOXOOOXOO',
            'XOOOOOOOX'
        )
})