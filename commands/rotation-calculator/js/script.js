var player, playerShadow, aec, aecShadow, rotationScoreLabel, commandLabel, descriptionParagraph;

var index = 0;
var rotationScore = 0;

var rotationList = [];
var yRotationList = [];
var scoreList = [0];
var yScoreList = [0];
var commandList =
[
	"/tp @e[tag=krc-] @s"
];
var yCommandList = [""];
var commandSuccess = [true];
var yCommandSuccess = [false];
var descriptionList =
[
	"Above is a visual demonstration of how the system works. Click on the arrows to learn about each step.",
	"In this example, the player is facing 0 degrees horizontally.",
	"To save the player's rotation to a scoreboard, the first thing we need to do is summon in an Area Effect Cloud. We'll use this for the calculations so the player won't be teleported around by the commands. The AEC will also be given a unique tag (krc-) so it can be individually targeted by the commands.",
	"Now, the AEC must be teleported to the player so their rotations match.",
	"If the AEC is rotated by at least 256 degrees horizontally (shown by white commands), these two commands will add 256 to its krc-rh score, then rotate it by -256 degrees. This process is then repeated with 128, 64, 32, 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 256 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 128 degrees horizontally (shown by white commands), these two commands will add 128 to its krc-rh score, then rotate it by -128 degrees. This process is then repeated with 64, 32, 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 128 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 64 degrees horizontally (shown by white commands), these two commands will add 64 to its krc-rh score, then rotate it by -64 degrees. This process is then repeated with 32, 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 64 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 32 degrees horizontally (shown by white commands), these two commands will add 32 to its krc-rh score, then rotate it by -32 degrees. This process is then repeated with 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 32 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 16 degrees horizontally (shown by white commands), these two commands will add 16 to its krc-rh score, then rotate it by -16 degrees. This process is then repeated with 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 16 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 8 degrees horizontally (shown by white commands), these two commands will add 8 to its krc-rh score, then rotate it by -8 degrees. This process is then repeated with 4, 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 8 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 4 degrees horizontally (shown by white commands), these two commands will add 4 to its krc-rh score, then rotate it by -4 degrees. This process is then repeated with 2 and 1 degrees to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 4 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 2 degrees horizontally (shown by white commands), these two commands will add 2 to its krc-rh score, then rotate it by -2 degrees. This process is then repeated with 1 degree to get the exact rotation and save it to krc-rh. If the commands in the preview are red, then the AEC is not rotated by at least 2 degrees horizontally and the commands will not run on it.",
	"If the AEC is rotated by at least 1 degree horizontally (shown by white commands), these two commands will add 1 to its krc-rh score, then rotate it by -1 degree. If the commands in the preview are red, then the AEC is not rotated by at least 1 degree horizontally and the commands will not run on it.",
	"Now that the player's horizontal rotation is fully stored to the AEC's krc-rh score, we simply need to copy that score to the player with a scoreboard operation.",
	"To calculate the player's vertical rotation, the method needs to be altered slightly. Since negative rotations are also interpreted as above 270 degrees, we cannot simply check if the AEC has a minimum vertical rotation. We also need to check for a maximum vertical rotation of 90 degrees, or, when checking negative rotations, a minimum of -90 degrees.",
	"If the AEC is rotated between 64 and 90 degrees vertically (shown by white commands), these two commands will add 64 to its krc-rv score, then rotate it by -64 degrees. This process is then repeated with 32, 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 64 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 32 and 90 degrees vertically (shown by white commands), these two commands will add 32 to its krc-rv score, then rotate it by -32 degrees. This process is then repeated with 16, 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 32 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 16 and 90 degrees vertically (shown by white commands), these two commands will add 16 to its krc-rv score, then rotate it by -16 degrees. This process is then repeated with 8, 4, 2 and 1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 16 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 8 and 90 degrees vertically (shown by white commands), these two commands will add 8 to its krc-rv score, then rotate it by -8 degrees. This process is then repeated with 4, 2 and 1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 8 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 4 and 90 degrees vertically (shown by white commands), these two commands will add 4 to its krc-rv score, then rotate it by -4 degrees. This process is then repeated with 2 and 1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 4 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 2 and 90 degrees vertically (shown by white commands), these two commands will add 2 to its krc-rv score, then rotate it by -2 degrees. This process is then repeated with 1 degree to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between 2 and 90 degrees vertically and the commands will not run on it.",
	"If the AEC is rotated between 1 and 90 degrees vertically (shown by white commands), these two commands will add 1 to its krc-rv score, then rotate it by -1 degree. By now, the AEC's krx-ry score perfectly matches the player's vertical rotation. If the commands in the preview are red, then the AEC is not rotated between 1 and 90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -64 and -90 degrees vertically (shown by white commands), these two commands will remove 64 from its krc-rv score, then rotate it by 64 degrees. This process is then repeated with -32, -16, -8, -4, -2 and -1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -64 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -32 and -90 degrees vertically (shown by white commands), these two commands will remove 32 from its krc-rv score, then rotate it by 32 degrees. This process is then repeated with -16, -8, -4, -2 and -1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -32 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -16 and -90 degrees vertically (shown by white commands), these two commands will remove 16 from its krc-rv score, then rotate it by 16 degrees. This process is then repeated with -8, -4, -2 and -1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -16 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -8 and -90 degrees vertically (shown by white commands), these two commands will remove 8 from its krc-rv score, then rotate it by 8 degrees. This process is then repeated with -4, -2 and -1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -8 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -4 and -90 degrees vertically (shown by white commands), these two commands will remove 4 from its krc-rv score, then rotate it by 4 degrees. This process is then repeated with -2 and -1 degrees to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -4 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -2 and -90 degrees vertically (shown by white commands), these two commands will remove 2 from its krc-rv score, then rotate it by 2 degrees. This process is then repeated with -1 degree to get the exact rotation and save it to krc-rv. If the commands in the preview are red, then the AEC is not rotated between -2 and -90 degrees vertically and the commands will not run on it.",
	"Now the negative rotations. If the AEC is rotated between -1 and -90 degrees vertically (shown by white commands), these two commands will remove 1 from its krc-rv score, then rotate it by 1 degree. By now, the AEC's krx-ry score perfectly matches the player's vertical rotation. If the commands in the preview are red, then the AEC is not rotated between -1 and -90 degrees vertically and the commands will not run on it.",
	"Now that the player's vertical rotation is fully stored to the AEC's krc-rv score, we will copy that score to the player with another scoreboard operation.",
	"Kill the AEC, and we're done! All that's left is simply to access the krc-rh and krc-rv scores of the player to use however we wish."
];

function init()
{
	var c = document.getElementById("simulator").children;
	playerShadow = c[0];
	player = c[1];
	aecShadow = c[2];
	aec = c[3];
	rotationScoreLabel = c[4];
	commandLabel = c[5];
	descriptionParagraph = document.getElementById("sim-description");
	
	setupRotations();
}

function setupRotations()
{
	rotationList[0] = Math.floor(Math.random() * 360);
	descriptionList[1] = "In this example, the player is facing " + rotationList[0] + " degrees horizontally.";
	var reduce = 256;
	for (var i = 1; i < 10; i++)
	{
		commandList[i] = "/scoreboard players add @e[tag=krc-,rym=" + reduce + "] krc-rh " + reduce + "<br>/tp @e[tag=krc-,rym=" + reduce + "] ~ ~ ~ ~-" + reduce + " ~";
		commandSuccess[i] = false;
		rotationList[i] = rotationList[i - 1];
		scoreList[i] = scoreList[i - 1];
		if (rotationList[i] >= reduce)
		{
			rotationList[i] -= reduce;
			scoreList[i] += reduce;
			commandSuccess[i] = true;
		}
		reduce /= 2;
	}
	
	yRotationList[0] = Math.floor(Math.random() * 181) - 90;
	reduce = 64;
	for (var i = 1; i < 8; i++)
	{
		yCommandList[i] = "/scoreboard players add @e[tag=krc-,rx=90,rxm=" + reduce + "] krc-rv " + reduce + "<br>/tp @e[tag=krc-,rx=90,rym=" + reduce + "] ~ ~ ~ ~ ~-" + reduce;
		yCommandSuccess[i] = false;
		yRotationList[i] = yRotationList[i - 1];
		yScoreList[i] = yScoreList[i - 1];
		if (yRotationList[i] >= reduce)
		{
			yRotationList[i] -= reduce;
			yScoreList[i] += reduce;
			yCommandSuccess[i] = true;
		}
		reduce /= 2;
	}
	reduce = 64;
	for (var i = 8; i < 15; i++)
	{
		yCommandList[i] = "/scoreboard players remove @e[tag=krc-,rx=-" + reduce + ",rxm=-90] krc-rv " + reduce + "<br>/tp @e[tag=krc-,rx=-" + reduce + ",rxm=-90] ~ ~ ~ ~ ~" + reduce;
		yCommandSuccess[i] = false;
		yRotationList[i] = yRotationList[i - 1];
		yScoreList[i] = yScoreList[i - 1];
		if (yRotationList[i] <= -reduce)
		{
			yRotationList[i] += reduce;
			yScoreList[i] -= reduce;
			yCommandSuccess[i] = true;
		}
		reduce /= 2;
	}
}

function simStep(forwards)
{
	if (forwards) index++;
	else index--;
	index %= 31;
	while (index < 0) index += 31;
	if (index === 0)
	{
		player.src = "img/player_top.png";
		player.style.transform = "rotate(0deg)";
		playerShadow.style.transform = "rotate(0deg)";
		aec.style.display = "none";
		aecShadow.style.display = "none";
		commandLabel.style.display = "none";
		commandLabel.style.color = "#FFFFFF";
		rotationScoreLabel.innerHTML = "&nbsp;<br>Player's Rotation: 0";
		setupRotations();
	}
	else if (index === 1)
	{
		aec.style.display = "none";
		aecShadow.style.display = "none";
		player.style.transform = "rotate(" + rotationList[0] + "deg)";
		playerShadow.style.transform = "rotate(" + rotationList[0] + "deg)";
		rotationScoreLabel.innerHTML = "&nbsp;<br>Player's Rotation: " + rotationList[0] + "";
		commandLabel.style.display = "none";
	}
	else if (index === 2)
	{
		aec.style.display = "inline-block";
		aecShadow.style.display = "inline-block";
		aec.style.transform = "rotate(0deg)";
		aecShadow.style.transform = "rotate(0deg)";
		rotationScoreLabel.innerHTML = "&nbsp;<br>Player's Rotation: " + rotationList[0] + "";
		commandLabel.style.display = "block";
		commandLabel.style.color = "#FFFFFF";
		commandLabel.innerHTML = "/summon area_effect_cloud ~ ~ ~ {Tags:[krc-]}";
	}
	var t = index - 3;
	if (t >= 0 && t <= 9)
	{
		aec.style.transform = "rotate(" + rotationList[t] + "deg)";
		aecShadow.style.transform = "rotate(" + rotationList[t] + "deg)";
		rotationScoreLabel.innerHTML = "AEC's Rotation: " + rotationList[t] + "<br>AEC's Score: " + scoreList[t];
		if (commandSuccess[t]) commandLabel.style.color = "#FFFFFF";
		else commandLabel.style.color = "#FF4444";
		commandLabel.innerHTML = commandList[t];
	}
	else if (index === 13)
	{
		player.src = "img/player_top.png";
		player.style.transform = "rotate(" + rotationList[0] + "deg)";
		playerShadow.style.transform = "rotate(" + rotationList[0] + "deg)";
		aec.style.transform = "rotate(0deg)";
		aecShadow.style.transform = "rotate(0deg)";
		rotationScoreLabel.innerHTML = "Player's Rotation: " + rotationList[0] + "<br>Player's Score: " + scoreList[9];
		commandLabel.style.display = "block";
		commandLabel.style.color = "#FFFFFF";
		commandLabel.innerHTML = "/scoreboard players operation @s krc-rh = @e[tag=krc-] krc-rh";
	}
	var t2 = index - 14;
	if (t2 >= 0 && t2 <= 14)
	{
		if (t2 === 0)
		{
			player.src = "img/player_side.png";
			player.style.transform = "rotate(" + (-yRotationList[t2]) + "deg)";
			playerShadow.style.transform = "rotate(" + (-yRotationList[t2]) + "deg)";
			commandLabel.style.display = "none";
		}
		else commandLabel.style.display = "inline-block";
		aec.style.transform = "rotate(" + (-yRotationList[t2]) + "deg)";
		aecShadow.style.transform = "rotate(" + (-yRotationList[t2]) + "deg)";
		rotationScoreLabel.innerHTML = "AEC's Rotation: " + yRotationList[t2] + "<br>AEC's Score: " + yScoreList[t2];
		if (yCommandSuccess[t2]) commandLabel.style.color = "#FFFFFF";
		else commandLabel.style.color = "#FF4444";
		commandLabel.innerHTML = yCommandList[t2];
	}
	else if (index == 29)
	{
		aec.style.display = "inline-block";
		aecShadow.style.display = "inline-block";
		rotationScoreLabel.innerHTML = "Player's Rotation: " + yRotationList[0] + "<br>Player's Score: " + yScoreList[14];
		commandLabel.style.color = "#FFFFFF";
		commandLabel.innerHTML = "/scoreboard players operation @s krc-rv = @e[tag=krc-] krc-rv";
	}
	else if (index === 30)
	{
		player.src = "img/player_side.png";
		player.style.transform = "rotate(" + (-yRotationList[0]) + "deg)";
		playerShadow.style.transform = "rotate(" + (-yRotationList[0]) + "deg)";
		aec.style.display = "none";
		aecShadow.style.display = "none";
		rotationScoreLabel.innerHTML = "Player's Rotation: " + yRotationList[0] + "<br>Player's Score: " + yScoreList[14];
		commandLabel.style.display = "block";
		commandLabel.innerHTML = "/kill @e[tag=krc-]";
	}
	descriptionParagraph.innerHTML = descriptionList[index];
}