var navLinks, navClose;

var navExpanded = false;

function init()
{
	navLinks = document.getElementsByClassName("nav-link");
	navClose = document.getElementById("nav-close");

	randomSplash();

	window.addEventListener("resize", window_onResize);
	document.getElementById("nav-menu").addEventListener("click", navMenu_onClick);	
	navClose.addEventListener("click", closeNav)
}

function randomSplash()
{
	document.getElementById("splash-text").innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
}

function showNavLink(n)
{
	navLinks[n].style.display = "block";
	setTimeout(function() { navLinks[n].classList.add("nav-link-show"); }, n * 30 + 2);
}

function closeNav()
{
	navExpanded = false;
	navClose.style.display = "none";
	for (var i = 0; i < navLinks.length; i++)
	{
		hideNavLink(i);
	}
}

function hideNavLink(n)
{
	navLinks[n].style.display = "";
	navLinks[n].classList.remove("nav-link-show");
}

function window_onResize()
{
	if (window.innerWidth >= 1000)
	{
		closeNav();
	}
}

function navMenu_onClick()
{
	navExpanded = !navExpanded;
	if (navExpanded)
	{
		navClose.style.display = "block";

		for (var i = 0; i < navLinks.length; i++)
		{
			showNavLink(i);
		}
	}
	else closeNav();
}