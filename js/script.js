var prevWindowWidth = 0;
var popupContainer;


// website properties and functions
var website = {
	// 'init' - initialises the website (include html, set up 'command' spans and pagination controls, add window resize event etc.)
	init: function() {
		includeHTML();
		// if (document.getElementById("splash-text")) randomSplash();

		window.addEventListener("resize", window_onResize);
		window.addEventListener("scroll", window_onScroll);
		window_onResize();
		setTimeout(window_onResize, 1000);
		setTimeout(window_onResize, 2000);
	}
};

var helpFormValues = {
	version: "",
	mods: "false",
	multiplayer: "false"
};

window.addEventListener("load", window_onLoad);
document.addEventListener("keyup", function(e) {
	if (e.key === "Escape") {
		if (popupContainer.classList.contains("popup-container-visible")) {
			fadePopupOut();
		}
	}
});

function playVideo(el) {
	document.getElementById("main-video").src += "&autoplay=1";
	el.style.opacity = "0";
	setTimeout(function() {el.style.display = "none";}, 300);
}

function hideSectionCover(el) {
	el.parentElement.parentElement.style.removeProperty("height");
	el.parentElement.style.opacity = "0";
	setTimeout(function() {el.parentElement.style.display = "none";}, 300);
}

function parseEmailLink() {
	document.getElementById("help-email-link").href = "mailto:bitkoder.yt@gmail.com?subject=Website Help Request: " + document.body.getAttribute("packname") + "&body=Minecraft version: " + helpFormValues.version + "%0D%0AModded: " + helpFormValues.mods + "%0D%0AMultiplayer: " + helpFormValues.multiplayer + "%0D%0A%0D%0A&";
}

function fadePopupIn(popup) {
	popup.classList.add("popup-visible");
	popupContainer.style.visibility = "visible";
	setTimeout(function() { popupContainer.classList.add("popup-container-visible"); }, 20);

	var currentSlide = popup.getElementsByClassName("popup-slide-current")[0];
	checkSlideButtons(currentSlide);
}

function fadePopupOut() {
	if (!document.getElementById("popup-container").classList.contains("popup-container-visible")) return;
	
	popupContainer.classList.remove("popup-container-visible");
	setTimeout(function(){ popupContainer.style.removeProperty("visibility"); document.getElementsByClassName("popup-visible")[0].classList.remove("popup-visible"); }, 300);
}

function slideTo(nextSlide) {
	var currentSlide = nextSlide.parentElement.getElementsByClassName("popup-slide-current")[0];
	if (nextSlide.classList.contains("popup-slide-right")) {
		nextSlide.classList.remove("popup-slide-right");
		currentSlide.classList.add("popup-slide-left");
	}
	else if (nextSlide.classList.contains("popup-slide-left")) {
		nextSlide.classList.remove("popup-slide-left");
		currentSlide.classList.add("popup-slide-right");
	}
	nextSlide.classList.add("popup-slide-current");
	currentSlide.classList.remove("popup-slide-current");

	checkSlideButtons(nextSlide);
}

function previousSlide() {
	var currentSlide = document.getElementsByClassName("popup-visible")[0].getElementsByClassName("popup-slide-current")[0];
	if (currentSlide.getAttribute("prevslide")) {
		slideTo(document.getElementById("slide-" + currentSlide.getAttribute("prevslide")));
	}
}

function nextSlide() {
	var currentSlide = document.getElementsByClassName("popup-visible")[0].getElementsByClassName("popup-slide-current")[0];
	if (currentSlide.getAttribute("nextslide")) {
		slideTo(document.getElementById("slide-" + currentSlide.getAttribute("nextslide")));
	}
}

function checkSlideButtons(slide) {
	document.getElementsByClassName("popup-slide-button")[0].style.visibility = "hidden";
	document.getElementsByClassName("popup-slide-button")[1].style.visibility = "hidden";
	if (slide.getAttribute("prevslide") || slide.getAttribute("nextslide")) {
		document.getElementById("popup-slide-controls").classList.remove("popup-slide-controls-hidden");
		if (slide.getAttribute("prevslide")) {
			document.getElementsByClassName("popup-slide-button")[0].style.removeProperty("visibility");
		}
		if (slide.getAttribute("nextslide")) {
			document.getElementsByClassName("popup-slide-button")[1].style.removeProperty("visibility");
		}
	}
	else {
		document.getElementById("popup-slide-controls").classList.add("popup-slide-controls-hidden");
	}
}

// logic to perform when the page finishes loading
function window_onLoad() {
	popupContainer = document.getElementById("popup-container");

	var idLinks = document.querySelectorAll("a[href^='#']");
	for (var i = 0; i < idLinks.length; i++) {
		idLinks[i].addEventListener("click", function(e) { 
			var el = e.target;
			if (el.tagName == "SPAN") el = e.target.parentElement;
			var offset = 0;
			if (document.getElementById(el.getAttribute("href").slice(1)).classList.contains("home-banner")) offset += 50;
			window.scrollTo({
				top: document.getElementById(el.getAttribute("href").slice(1)).getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth'
			});
			window.history.pushState("", "", window.location.pathname + el.getAttribute("href"));
			e.preventDefault();
			e.stopPropagation();
		})
	}

	var buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++) {
		if (!buttons[i].classList.contains("backward-arrow")) buttons[i].innerHTML = "<span>" + buttons[i].innerHTML + "</span> <svg viewBox='0 0 15.46 26.35'><polyline points='2 24.35 13.46 13.18 2 2'/></svg>";
		else buttons[i].innerHTML = "<svg viewBox='0 0 -15.46 26.35'><polyline points='-2 24.35 -13.46 13.18 -2 2'/></svg> <span>" + buttons[i].innerHTML + "</span>";
	}

	var cmdSpans = document.getElementsByClassName("cmd");
	for (var i = 0; i < cmdSpans.length; i ++) {
		cmdSpans[i].addEventListener("click", function(e) { window.getSelection().selectAllChildren(e.target); });
	}

	var cmdBoxes = document.getElementsByClassName("cmd-box");
	for (var i = 0; i < cmdBoxes.length; i ++) {
		cmdBoxes[i].addEventListener("click", function(e) { e.target.setSelectionRange(0, e.target.value.length); });
	}
}

// runs after html is included
function postLoad() {
	document.getElementById("copyright-year").innerHTML = "" + new Date().getFullYear();

	if (document.getElementById("help-supported-versions-list") && document.body.getAttribute("supportedversions")) {
		document.getElementById("help-supported-versions-list").innerText = document.body.getAttribute("supportedversions");
	}
}


// toggles the visibility of the scrollbar - this function is only accessible through the browser console and only works on some browsers
function toggleScrollbar() {
	document.body.classList.toggle("hide-scrollbar");
}

// expands or collapses the navigation bar
function toggleNav() {
	document.getElementsByClassName("nav-new")[0].classList.toggle("nav-new-expanded");
}

// collapses the navigation bar
function closeNav() {
	document.getElementsByClassName("nav-new")[0].classList.remove("nav-new-expanded");
}

// toggles focus on a 'featured' item - used on the home page
function toggleFeaturedItem(el) {
	if (el.classList.contains("featured-item-active")) {
		el.classList.remove("featured-item-active");
		setTimeout(function() {el.children[0].style.display = "none";}, 300)
	}
	else {
		var activeItem = el.parentElement.getElementsByClassName("featured-item-active")[0];
		if (activeItem) {
			activeItem.classList.remove("featured-item-active");
			setTimeout(function() {activeItem.children[0].style.display = "none";}, 300)
		}
		el.children[0].style.removeProperty("display");
		setTimeout(function() {el.classList.add("featured-item-active");}, 1);

	}
}

// logic to perform when the window is resized (not used)
/*
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
*/

// logic to perform when the user scrolls (not used)
/*
function window_onScroll()
{
	if (window.innerWidth >= 1000) return;

	var featuredOverlays = document.getElementsByClassName("featured-overlay");
	for (var i = 0; i < featuredOverlays.length; i++)
	{
		var rect = featuredOverlays[i].getBoundingClientRect();
		var dist = window.innerHeight / 2 - rect.top;
		var opacity = Math.sin(dist / (rect.height / Math.PI)) * 1.5;
		if (opacity < 0) opacity = 0;
		if (opacity > 1) opacity = 1;
		featuredOverlays[i].style.opacity = "" + (opacity);
	}
*/