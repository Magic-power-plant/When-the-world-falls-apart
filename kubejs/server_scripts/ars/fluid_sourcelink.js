ServerEvents.recipes(event =>{
    event.custom(
    {
	"type": "starbunclemania:fluid_sourcelink",
	"fluid": "kubejs:compression_liquid_source",
	"mb_to_source_ratio": 10
    }
    )
    event.custom(
    {
	"type": "starbunclemania:fluid_sourcelink",
	"fluid": "kubejs:double_compression_liquid_source",
	"mb_to_source_ratio": 100
    }
    )
})