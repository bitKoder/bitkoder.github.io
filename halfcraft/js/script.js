var supportedBlocksDiv;

function toggleSupportedBlocks(el)
{
	supportedBlocksDiv.classList.toggle("expandable-hide");
	if (supportedBlocksDiv.classList.contains("expandable-hide")) el.textContent = "Show supported blocks";
	else el.textContent = "Hide supported blocks";
}

function GenerateExtCustom()
{
	var b = document.getElementById("block-type").value.toLowerCase();
	var d = document.getElementById("block-data").value.toLowerCase();
	document.getElementById("output").value = 
	"summon falling_block ~ ~.55 ~ {Time:1,DropItem:0,Block:redstone_block,Passengers:[{id:falling_block,Time:1,DropItem:0,Block:activator_rail},{id:commandblock_minecart,Tags:[khc-eg],Command:\"execute @e[tag=khcT_" + b + "_" + d + "] ~ ~ ~ tellraw @a[r=20] [{\\\"text\\\":\\\"\\\\nThere is already an extension for " + b + ":" + d + " in your world!\\\",\\\"color\\\":\\\"red\\\"},\\\"\\\\n\\\",{\\\"text\\\":\\\"[Click here to teleport to it]\\\",\\\"color\\\":\\\"yellow\\\",\\\"clickEvent\\\":{\\\"action\\\":\\\"run_command\\\",\\\"value\\\":\\\"/tp @e[tag=khcTP_" + b + "_" + d + ",c=1]\\\"}},{\\\"text\\\":\\\" and make sure it is activated.\\\"}]\"},{id:commandblock_minecart,Command:\"execute @e[tag=khcT_" + b + "_" + d + "] ~ ~ ~ kill @e[tag=khc-eg]\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~-2 ~-2 ~2 ~2 ~ ~5 concrete 15\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~-2 ~-1 ~2 ~2 ~-1 ~5 stained_glass 3\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~-1 ~-1 ~2 ~1 ~ ~5 stained_glass 15\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~-1 ~ ~5 ~1 ~ ~5 concrete 15\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~-1 ~ ~2 ~1 ~ ~2 " + b + " " + d + "\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~ ~-2 ~2 ~ ~ ~5 concrete 3\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"fill ~ ~-1 ~2 ~ ~-1 ~5 stained_glass 3\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~ ~-1 ~1 wall_sign 0\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~-1 ~-2 ~3 chain_command_block 3 - {auto:1,TrackOutput:0b,Command:\\\"kill @e[tag=khcTA_" + b + "_" + d + "]\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~-1 ~-2 ~4 chain_command_block 2 - {auto:1,TrackOutput:0b,Command:\\\"fill ~-1 ~ ~-3 ~3 ~2 ~2 air\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~-1 ~-1 ~3 command_block 3 - {TrackOutput:0b,Command:\\\"blockdata ~ ~ ~ {auto:0}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~-1 ~-1 ~4 chain_command_block 2 - {auto:1,TrackOutput:0b,Command:\\\"blockdata ~1 ~ ~-3 {Text1:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/scoreboard players tag @e[tag=khcT_" + b + "_" + d + "] add khcS\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text2:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/fill ~-2 ~-1 ~1 ~2 ~1 ~4 concrete 3 replace concrete 14\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[ACTIVATE]\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"color\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"dark_green\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"bold\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}]\\\\\\\",Text3:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/fill ~-2 ~-1 ~1 ~2 ~1 ~4 stained_glass 3 replace stained_glass 14\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text4:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/blockdata ~1 ~ ~2 {auto:1}\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\"}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~ ~-2 ~3 command_block 4 - {TrackOutput:0b,Command:\\\"tellraw @a[r=20] [{\\\\\\\"text\\\\\\\":\\\\\\\"Extension for " + b + ":" + d + " removed\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"red\\\\\\\"}]\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~ ~-1 ~3 command_block 3 - {TrackOutput:0b,Command:\\\"blockdata ~ ~ ~ {auto:0}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~ ~-1 ~4 chain_command_block 2 - {auto:1,TrackOutput:0b,Command:\\\"execute @e[tag=khcC] ~ ~-.5 ~ detect ~ ~ ~ " + b + " " + d + " summon armor_stand ~ ~ ~ {NoGravity:1,Marker:1,Tags:[khcD],Passengers:[{id:Shulker,NoAI:1,Tags:[khcD]},{id:falling_block,Block:" + b + ",Data:" + d + ",Tags:[khcD]}]}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~1 ~-2 ~3 command_block 3 - {TrackOutput:0b,Command:\\\"setblock ~-2 ~1 ~3 wall_sign 3 - {Text1:\\\\\\\"[{\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text2:\\\\\\\"[{\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[CANCEL]\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"color\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"dark_red\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"bold\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}]\\\\\\\",Text3:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"setblock ~2 ~ ~ air\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text4:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"setblock ~ ~ ~ air\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\"}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~1 ~-2 ~4 chain_command_block 2 - {auto:1,TrackOutput:0b,Command:\\\"setblock ~ ~1 ~2 wall_sign 3 - {Text1:\\\\\\\"[{\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text2:\\\\\\\"[{\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[CONFIRM]\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"color\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"dark_green\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"bold\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}]\\\\\\\",Text3:\\\\\\\"[{\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text4:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/blockdata ~-1 ~-1 ~-3 {auto:1}\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\"}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~1 ~-1 ~3 command_block 3 - {TrackOutput:0b,Command:\\\"blockdata ~ ~ ~ {auto:0}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~1 ~-1 ~4 chain_command_block 2 - {auto:1,TrackOutput:0b,Command:\\\"blockdata ~-1 ~ ~-3 {Text1:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/scoreboard players tag @e[tag=khcT_" + b + "_" + d + "] remove khcS\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text2:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/fill ~-2 ~-1 ~1 ~2 ~1 ~4 concrete 14 replace concrete 3\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"[DEACTIVATE]\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"color\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"dark_red\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"bold\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}]\\\\\\\",Text3:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/fill ~-2 ~-1 ~1 ~2 ~1 ~4 stained_glass 14 replace stained_glass 3\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\",Text4:\\\\\\\"[{\\\\\\\\\\\\\\\"clickEvent\\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\\"action\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"run_command\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"/blockdata ~-1 ~ ~2 {auto:1}\\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\\"text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}]\\\\\\\"}\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"setblock ~ ~-1 ~6 wall_sign 3 - {Text1:\\\"[{\\\\\\\"text\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",Text2:\\\"[{\\\\\\\"text\\\\\\\":\\\\\\\"[UNINSTALL]\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"dark_red\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"true\\\\\\\"}]\\\",Text3:\\\"[{\\\\\\\"clickEvent\\\\\\\":{\\\\\\\"action\\\\\\\":\\\\\\\"run_command\\\\\\\",\\\\\\\"value\\\\\\\":\\\\\\\"blockdata ~1 ~-1 ~-3 {auto:1}\\\\\\\"},\\\\\\\"text\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",Text4:\\\"[{\\\\\\\"clickEvent\\\\\\\":{\\\\\\\"action\\\\\\\":\\\\\\\"run_command\\\\\\\",\\\\\\\"value\\\\\\\":\\\\\\\"blockdata ~1 ~-1 ~-3 {auto:0}\\\\\\\"},\\\\\\\"text\\\\\\\":\\\\\\\"\\\\\\\"}]\\\"}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"summon armor_stand ~ ~-1 ~3 {NoGravity:1,Tags:[khcTA_" + b + "_" + d + ",khcT_" + b + "_" + d + ",khcT,khcS]}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"summon armor_stand ~ ~-2 ~-1 {NoGravity:1,Invisible:1,Marker:1,Tags:[khcTA_" + b + "_" + d + ",khcTP_" + b + "_" + d + ",khcTP]}\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"tellraw @a[r=20] [{\\\"text\\\":\\\"\\\\nExtension installed\\\\n" + b + ":" + d + " can now be freed from the grid!\\\",\\\"color\\\":\\\"green\\\"}]\"},{id:commandblock_minecart,Tags:[khc-eg],Command:\"blockdata ~1 ~-1 ~3 {auto:1}\"},{id:commandblock_minecart,Command:\"setblock ~ ~1 ~ command_block 0 replace {auto:1,Command:\\\"fill ~ ~-3 ~ ~ ~ ~ air\\\"}\"},{id:commandblock_minecart,Command:\"kill @e[type=commandblock_minecart,r=0]\"}]}";
}