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
    
    event.create("kubejs:shape_2" , "circle_shape")
        .pattern(
            'XXOOOOOOOOOOOXX',
            'XOOOOOOOOOOOOOX',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'OOOOOOOOOOOOOOO',
            'XOOOOOOOOOOOOOX',
            'XXOOOOOOOOOOOXX'
        )

    event.create("kubejs:shape_3" , "circle_shape")
        .pattern(
            'OOOOXOOOO',
            'OOOOXOOOO',
            'OOOOOOOOO',
            'OOOOOOOOO',
            'XXXOOOXXX',
            'OOOOOOOOO',
            'OOOOOOOOO',
            'OOOOXOOOO',
            'OOOOXOOOO'
        )
})