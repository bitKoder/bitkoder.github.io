var player, playerShadow, aec, aecShadow, rotationScoreLabel, commandLabel;

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

function init()
{
	player = document.getElementById("sim-player");
	playerShadow = document.getElementById("sim-player-shadow");
	aec = document.getElementById("sim-aec");
	aecShadow = document.getElementById("sim-aec-shadow");
	rotationScoreLabel = document.getElementById("rotation-score-label");
	commandLabel = document.getElementById("command-label");
	
	window.addEventListener("keypress", onKeyPress, false);
	
	setupRotations();
}

function setupRotations()
{
	rotationList[0] = Math.floor(Math.random() * 360);
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

function onKeyPress(event)
{
	if (event.which !== 49) return;

	index++;
	index %= 31;
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
		player.style.transform = "rotate(" + rotationList[0] + "deg)";
		playerShadow.style.transform = "rotate(" + rotationList[0] + "deg)";
		rotationScoreLabel.innerHTML = "&nbsp;<br>Player's Rotation: " + rotationList[0] + "";
	}
	else if (index === 2)
	{
		aec.style.display = "inline-block";
		aecShadow.style.display = "inline-block";
		commandLabel.style.display = "inline-block";
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
		rotationScoreLabel.innerHTML = "Player's Rotation: " + rotationList[0] + "<br>Player's Score: " + scoreList[9];
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
		rotationScoreLabel.innerHTML = "Player's Rotation: " + yRotationList[0] + "<br>Player's Score: " + yScoreList[14];
		commandLabel.style.color = "#FFFFFF";
		commandLabel.innerHTML = "/scoreboard players operation @s krc-rv = @e[tag=krc-] krc-rv";
	}
	else if (index === 30)
	{
		aec.style.display = "none";
		aecShadow.style.display = "none";
		commandLabel.innerHTML = "/kill @e[tag=krc-]";
	}
	console.log(index);
}