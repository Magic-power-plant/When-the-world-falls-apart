StartupEvents.registry('enchanted:circle_magic/shape', (event:Registry.CircleMagicShape) => {
    event.create("wtwfacore:shape_1" , 'circle_shape')
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
    
    event.create("wtwfacore:shape_2" , "circle_shape")
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

    event.create("wtwfacore:shape_3" , "circle_shape")
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