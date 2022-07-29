	// Navigation //

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

    // Navigation End //


    
    //Type Writer Effect //

        var span, textArr, textIndex, textToShow, textToShowLen, letterIndex, textTimer, letterTimer, textDelay, letterDelay, emptyTimer;

    textArr = [
    "Events",
    'Personal Use',
    'Buisness',
    'Learning',
    'You'
    ]

    span = document.getElementsByClassName("type_writer-effect")[0];
    textIndex = 0;
    textDelay= 2300;
    letterDelay = 130;

    function showText() {
    textToShow = textArr[textIndex];
    textToShowLen = textToShow.length;
    letterIndex = 0;
    
    letterTimer = setInterval(function() {
        span.textContent += textToShow[letterIndex];
        console.log(textToShow[letterIndex]);
        letterIndex++;
        if (letterIndex > textToShowLen-1) {
        clearInterval(letterTimer);
        textTimer = setTimeout(nextText, textDelay)
        }
    } ,letterDelay)
    
    }

    function nextText() {
    clearTimeout(textTimer);
    textIndex++;
    if (textIndex > textArr.length-1) {
        textIndex = 0;
    }
    emptySpan();

    }

    function emptySpan() {
    emptyTimer = setInterval(removeLetter, letterDelay/2)
    }


    function removeLetter() {
    if (span.textContent.length != 0) {
        popedSpan = Array.prototype.slice.call(span.textContent).slice(0,span.textContent.length-1).join('');
        span.textContent = popedSpan;
    } else {
        clearInterval(emptyTimer);
        showText();
    }
    }

    emptySpan();

    // Type Writer Effect End //
	