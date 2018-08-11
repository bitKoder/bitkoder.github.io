var prevWindowWidth = 0;
var navExpanded = false; // whether the navigation bar is expanded - mobile view

// website properties and functions
var website = {
	// 'init' - initialises the website (include html, set up 'command' spans and pagination controls, add window resize event etc.)
	init: function() {
		includeHTML();
		if (document.getElementById("splash-text")) randomSplash();

		window.addEventListener("resize", window_onResize);
		window.addEventListener("scroll", window_onScroll);

		var cmdSpans = document.getElementsByClassName("cmd");
		for (var i = 0; i < cmdSpans.length; i++)
		{
			cmdSpans[i].setAttribute("onclick", "window.getSelection().selectAllChildren(this)");
		}
		cmdSpans = document.getElementsByClassName("sim-command-label");
		for (var i = 0; i < cmdSpans.length; i++)
		{
			cmdSpans[i].setAttribute("onclick", "window.getSelection().selectAllChildren(this)");
		}

		var pagePrevButtons = document.getElementsByClassName("prev-page");
		for (var i = 0; i < pagePrevButtons.length; i++)
		{
			pagePrevButtons[i].addEventListener("click", function() {changePage(this);});
		}
		var pageNextButtons = document.getElementsByClassName("next-page");
		for (var i = 0; i < pageNextButtons.length; i++)
		{
			pageNextButtons[i].addEventListener("click", function() {changePage(this);});
		}
		if (pageNextButtons.length > 0)
		{
			initPages();
			setTimeout(initPages, 1000);
		}
		window_onResize();
		setTimeout(window_onResize, 1000);
		setTimeout(window_onResize, 2000);
	}
};


// display a random splash message on the home page
function randomSplash()
{
	document.getElementById("splash-text").innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
}

// fade in an individual navigation link - these fade in one at a time when the nav is expanded in mobile view
function showNavLink(n)
{
	 document.getElementsByClassName("nav-link")[n].style.display = "block";
	setTimeout(function() {  document.getElementsByClassName("nav-link")[n].classList.add("nav-link-show"); }, n * 30 + 2);
}

// close (collapse) the navigation bar
function closeNav()
{
	navExpanded = false;
	document.getElementById("nav-close").style.display = "none";
	//hide each link in the navigation bar
	for (var i = 0; i <  document.getElementsByClassName("nav-link").length; i++)
	{
		hideNavLink(i);
	}
}

// instantly hide an individual navigation link - all links hide simultaneously when collapsing the navigation bar
function hideNavLink(n)
{
	 document.getElementsByClassName("nav-link")[n].style.display = "";
	 document.getElementsByClassName("nav-link")[n].classList.remove("nav-link-show");
}

// logic to perform when the window is resized
function window_onResize()
{
	if (window.innerWidth >= 1000 && prevWindowWidth < 1000)
	{
		if (document.getElementById("nav-close"))
		{
			closeNav();
		}

		var featuredOverlays = document.getElementsByClassName("featured-overlay")
		if (featuredOverlays[0])
		{	
			for (var i = 0; i < featuredOverlays.length; i++)
			{
				featuredOverlays[i].style.opacity = "";
			}
		}
	}
	if (window.innerWidth < 1000 && prevWindowWidth >= 1000)
	{
		var featuredOverlays = document.getElementsByClassName("featured-overlay")
		if (featuredOverlays[0])
		{	
			window_onScroll();
		}
	}

	if (document.getElementsByTagName("FOOTER")[0] && document.body.classList.contains("nav-margin")) document.getElementsByTagName("MAIN")[0].style.minHeight = (window.innerHeight - 60 - document.getElementsByTagName("FOOTER")[0].clientHeight) + "px";

	if (document.getElementsByClassName("next-page").length > 0) initPages();

	prevWindowWidth = window.innerWidth;
}

// logic to perform when the user scrolls
function window_onScroll()
{
	if (window.innerWidth >= 1000) return;

	var featuredOverlays = document.getElementsByClassName("featured-overlay");
	for (var i = 0; i < featuredOverlays.length; i++)
	{
		var rect = featuredOverlays[i].getBoundingClientRect();
		var dist = window.innerHeight / 2 - rect.top;
		var opacity = Math.sin(dist / (rect.height / Math.PI));
		if (opacity < 0) opacity = 0;
		featuredOverlays[i].style.opacity = "" + (opacity);
	}
}

// this function will resize an element (el) such that the combined height of all the elements in
// el's parent is at least as much as the height of el's parent, such that they 'fill' the container.
function fitContainer(el)
{
	var elementToResize = el;
	var parentContainer = el.parentNode;
	var allElementsInParent = parentContainer.children;

	//loop through all children of parentContainer (except elementToResize) and add up their heights to get their combined height
	var combinedHeight = 0;
	for (var i = 0; i < allElementsInParent.length; i++)
	{
		if (allElementsInParent[i] !== elementToResize)
		{
			combinedHeight += allElementsInParent[i].clientHeight;
		}
	}
}

// expands the navigation bar when the hamburger button is clicked
function navMenu_onClick()
{
	navExpanded = !navExpanded;
	if (navExpanded)
	{
		document.getElementById("nav-close").style.display = "block";

		// fade in each navigation link
		for (var i = 0; i <  document.getElementsByClassName("nav-link").length; i++)
		{
			showNavLink(i);
		}
	}
	else closeNav();
}

// changes a page for pagination
function changePage(elem)
{
	var index = 0;
	var parent = elem.parentElement;
	for (var i = 0; i < parent.children[1].children.length; i++)
	{
		if (parent.children[1].children[i].classList.contains("page-middle"))
		{
			index = i;
			break;
		}
	}
	if (elem.classList.contains("prev-page")) // if the button clicked was the 'previous page' button
	{
		if (index <= 0) return;

		parent.children[1].children[index].classList.remove("page-middle");
		parent.children[1].children[index].classList.add("page-right");
		parent.children[1].children[index - 1].classList.remove("page-left");
		parent.children[1].children[index - 1].classList.add("page-middle");

		// set height of the page container to match the page's height and run page's custom initialisation if present
		parent.children[1].style.height = parent.children[1].children[index - 1].clientHeight + "px";
		parent.children[1].children[index - 1].children[0].click();

	}
	else if (elem.classList.contains("next-page")) // if the button clicked was the 'next page' button
	{
		if (index >= parent.children[1].children.length - 1) return;

		parent.children[1].children[index].classList.remove("page-middle");
		parent.children[1].children[index].classList.add("page-left");
		parent.children[1].children[index + 1].classList.remove("page-right");
		parent.children[1].children[index + 1].classList.add("page-middle");

		// set height of the page container to match the page's height and run page's custom initialisation if present
		parent.children[1].style.height = parent.children[1].children[index + 1].clientHeight + "px";
		parent.children[1].children[index + 1].children[0].click();
	}
}


// set up individual pages for pagination
function initPages()
{
	var pageContainers = document.getElementsByClassName("page-content");
	for (var i = 0; i < pageContainers.length; i++)
	{
		for (var j = 0; j < pageContainers[i].children.length; i++)
		{
			if (pageContainers[i].children[j].classList.contains("page-middle"))
			{
				// set height of the page container to match the page's height
				pageContainers[i].style.height = pageContainers[i].children[j].clientHeight + "px";
				break;
			}
		}
	}
}