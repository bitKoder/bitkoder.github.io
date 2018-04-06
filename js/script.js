var navExpanded = false;

var website = {
	init: function() {
		includeHTML();
		if (document.getElementById("splash-text")) randomSplash();

		window.addEventListener("resize", window_onResize);

		var cmdSpans = document.getElementsByClassName("cmd");
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
		if (pagePrevButtons.length > 0 || pageNextButtons.length > 0)
		{
			initPages();
			setTimeout(initPages, 1000);
		}
		window_onResize();
		setTimeout(window_onResize, 1000);
	}
};


function randomSplash()
{
	document.getElementById("splash-text").innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
}

function showNavLink(n)
{
	 document.getElementsByClassName("nav-link")[n].style.display = "block";
	setTimeout(function() {  document.getElementsByClassName("nav-link")[n].classList.add("nav-link-show"); }, n * 30 + 2);
}

function closeNav()
{
	navExpanded = false;
	document.getElementById("nav-close").style.display = "none";
	for (var i = 0; i <  document.getElementsByClassName("nav-link").length; i++)
	{
		hideNavLink(i);
	}
}

function hideNavLink(n)
{
	 document.getElementsByClassName("nav-link")[n].style.display = "";
	 document.getElementsByClassName("nav-link")[n].classList.remove("nav-link-show");
}

function window_onResize()
{
	if (window.innerWidth >= 1000)
	{
		closeNav();
	}

	if (document.body.classList.contains("nav-margin")) document.getElementsByTagName("MAIN")[0].style.minHeight = (window.innerHeight - 60 - document.getElementsByTagName("FOOTER")[0].clientHeight) + "px";

	if (pagePrevButtons.length > 0 || pageNextButtons.length > 0) initPages();
}

// this function will resize an element (el)
// such that the combined height of all the
// elements in el's parent is at least as
// much as the height of el's parent, such
// that they 'fill' the container.
function fitContainer(el)
{
	var elementToResize = el;
	var parentContainer = el.parentNode;
	var allElementsInParent = parentContainer.children;

	//loop through all children of parentContainer (except elementToResize)
	// and add up their heights to get their combined height
	var combinedHeight = 0;
	for (var i = 0; i < allElementsInParent.length; i++)
	{
		if (allElementsInParent[i] !== elementToResize)
		{
			combinedHeight += allElementsInParent[i].clientHeight;
		}
	}
}

function navMenu_onClick()
{
	navExpanded = !navExpanded;
	if (navExpanded)
	{
		document.getElementById("nav-close").style.display = "block";

		for (var i = 0; i <  document.getElementsByClassName("nav-link").length; i++)
		{
			showNavLink(i);
		}
	}
	else closeNav();
}

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
	if (elem.classList.contains("prev-page"))
	{
		if (index <= 0) return;

		parent.children[1].children[index].classList.remove("page-middle");
		parent.children[1].children[index].classList.add("page-right");
		parent.children[1].children[index - 1].classList.remove("page-left");
		parent.children[1].children[index - 1].classList.add("page-middle");

		parent.children[1].style.height = parent.children[1].children[index - 1].clientHeight + "px";
		parent.children[1].children[index - 1].children[0].click();

	}
	else if (elem.classList.contains("next-page"))
	{
		if (index >= parent.children[1].children.length - 1) return;

		parent.children[1].children[index].classList.remove("page-middle");
		parent.children[1].children[index].classList.add("page-left");
		parent.children[1].children[index + 1].classList.remove("page-right");
		parent.children[1].children[index + 1].classList.add("page-middle");

		parent.children[1].style.height = parent.children[1].children[index + 1].clientHeight + "px";
		parent.children[1].children[index + 1].children[0].click();
	}
}


function initPages()
{
	var pageContainers = document.getElementsByClassName("page-content");
	for (var i = 0; i < pageContainers.length; i++)
	{
		for (var j = 0; j < pageContainers[i].children.length; i++)
		{
			if (pageContainers[i].children[j].classList.contains("page-middle"))
			{
				pageContainers[i].style.height = pageContainers[i].children[j].clientHeight + "px";
				break;
			}
		}
	}
}