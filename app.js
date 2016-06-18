(function() {
    'use strict';
    var audio;

    // All Shapes
    var shapes = [8251, 8268, 8269, 8277, 8284, 8718, 8752, 8859, 8903, 9608, 9618, 9619, 9625, 9626, 9627,
        9628, 9630, 9631, 9635, 9636, 9637, 9638, 9639, 9640, 9641, 9650, 9654, 9660, 9664, 9672, 9673, 9680,
        9681, 9682, 9683, 9698, 9699, 9700, 9701, 9703, 9704, 9705, 9706, 9726, 9728, 9729, 9730, 9733, 9737,
        9742, 9751, 9773, 9775, 9787, 9818, 9819, 9820, 9821, 9822, 9823, 9824, 9827, 9829, 9830, 9832, 9836,
        9864, 9865, 9873, 9880, 9918, 9954, 9986, 9990, 9991, 9992, 10020, 10021, 10022, 9852, 9993, 9996, 9997,
        9998, 9999, 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011, 10012,
        10013, 10014, 10015, 10016, 10017, 10018, 10019, 10023, 10026, 10027, 10028, 10029, 10030, 10031, 10032,
        10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 10044, 10045, 10046, 10047,
        10048, 10049, 10050, 10051, 10052, 10053, 10054, 10055, 10056, 10057, 10058, 10070, 10081, 10082, 10083,
        10084, 10085, 10086, 10087, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10132,
        10133, 10135, 10140, 10148, 10173
    ];

    // Geometric shapes
    var geometryShape = [9724, 9634, 9650, 9650, 9654, 9660, 9664, 9648, 9679, 9644, 9670, 9673, 9672];

    // RGB Colors
    var rgbCurrent = 'red';

    var rainbow = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

    // Colors
    var colors = ["lightcoral", "darkslateblue", "deepskyblue", "darkolivegreen", "chocolate", "gray",
        "darkgoldenrod", "darkblue", "indianred", "blue", "darkturquoise", "darkgray", "lime", "gold",
        "dodgerblue", "darkviolet", "palevioletred", "tomato", "olive", "yellowgreen", "limegreen", "mediumblue",
        "darkorange", "royalblue", "slategray", "hotpink", "olivedrab", "mediumpurple", "fuchsia", "cadetblue",
        "midnightblue", "darkcyan", "cornflowerblue", "steelblue", "mediumorchid", "forestgreen", "green", "darkslategray",
        "goldenrod", "orangered", "coral", "salmon", "burlywood", "darkred", "mediumvioletred", "brown", "navy",
        "peru", "rosybrown", "blueviolet", "firebrick", "purple", "dimgray", "lightslategrey", "maroon", "saddlebrown",
        "darkkhaki", "mediumseagreen", "seagreen", "dimgrey", "slateblue", "crimson", "lightslategray", "sandybrown",
        "sienna", "teal", "orchid", "orange", "slategrey", "darkslategrey", "mediumturquoise", "indigo", "lightseagreen",
        "deeppink", "turquoise", "rebeccapurple", "darkorchid", "violet", "darkmagenta", "darksalmon", "black", "mediumslateblue",
        "magenta", "red", "lightsalmon", "darkgreen"
    ];

    var lightColors = ["cornsilk", "blanchedalmond", "papayawhip", "mintcream", "aliceblue",
        "lightgoldenrodyellow", "lavenderblush", "beige", "linen", "seashell", "lavender", "lightcyan", "oldlace", "honeydew", "whitesmoke", "mistyrose", "ghostwhite", "azure", "ivory", "snow", "white", "floralwhite"
    ];

    // Gets a random shape
    function getRandomShape() {
        if (window.sec_shape === 'geometry') {
            return getRandomGeometryShape();
        } else {
            return '&#' + shapes[Math.floor(Math.random() * shapes.length)] + ';';
        }
    }

    // Gets a random geometry shape
    function getRandomGeometryShape() {
        return '&#' + geometryShape[Math.floor(Math.random() * geometryShape.length)] + ';';
    }

    // Gets a random color
    function getRandomColor(isLight) {
        if (isLight) {
            return lightColors[Math.floor(Math.random() * lightColors.length)];
        } else {
            if (window.sec_clr === 'rgb') {
                if (rgbCurrent === 'red') {
                    rgbCurrent = 'green';
                } else if (rgbCurrent === 'green') {
                    rgbCurrent = 'blue';
                } else {
                    rgbCurrent = 'red';
                }
                return rgbCurrent;
            } else if (window.sce_clr === 'rainbow') {
                return rainbow[Math.floor(Math.random() * rainbow.length)];
            } else {
                return colors[Math.floor(Math.random() * colors.length)];
            }
        }
    }

    // Localstorage operation function
    function ls(key, val) {
        if (val) {
            localStorage.setItem(key, val);
        } else {
            return localStorage.getItem(key);
        }
    }

    /**
     * Adds a class from an element
     */
    function addClass(element, classname) {
        var cn = element.className;
        //test for existance
        if (cn.match(new RegExp('^' + classname + '$| ' + classname + '$| ' + classname + ' |^' + classname + ' '))) {
            return;
        }
        //add a space if the element already has class
        if (cn !== '') {
            classname = ' ' + classname;
        }
        element.className = cn + classname;
    }

    /**
     * Removes a class from an element
     */
    function removeClass(element, classname) {
        element.className = element.className.replace(new RegExp('^' + classname + '$| ' + classname + '$| ' + classname + ' |^' + classname + ' '), '').trim();
    }

    // Plays music
    function playMusic() {
        if (window.sec_sound === 'mute') {
            if (audio) {
                audio.pause();
            }
        } else {
            var url = './music/' + window.sec_sound + '.mp3';
            if (!audio) {
                audio = new Audio(url);
                audio.loop = true;
            } else {
                audio.src = url;
                audio.load();
            }
            audio.play();
        }
    }

    // Stops music
    function stopMusic() {
        audio.pause();
    }

    /**
     * Splash Screeen Animation function
     */
    function splash() {
        // Splash Element
        var $splash = document.getElementById('splash');
        var $startBtn = document.getElementById('btnStart');

        removeClass($splash, 'h');

        var splashInterval = window.setInterval(function() {
            $splash.style['background-color'] = getRandomColor(true);
        }, 3000);

        // Starts the app
        function start() {
            $startBtn.removeEventListener('click', start);
            clearInterval(splashInterval);
            addClass($splash, 'h');
            init();
        }

        $startBtn.addEventListener('click', start);
    }

    /**
     * Initializes the shape/color screen
     */
    function init() {
        playMusic();

        // Shapes's parent
        var $sp = document.getElementById('sp');

        // Shape Element
        var $s = document.getElementById('s');

        // Full Color Element
        var $c = document.getElementById('c');

        if (window.sec_shape === 'colors') {
            removeClass($c, 'h');
        } else {
            removeClass($sp, 'h');
        }

        // Changes properties
        function change() {
            if (window.sec_shape === 'colors') {
                $c.style['background-color'] = getRandomColor();
            } else {
                $s.style.color = getRandomColor();
                $s.innerHTML = getRandomShape();
                $sp.style['background-color'] = getRandomColor(true);
            }
        }

        if (window.sec_transition === 'ontap') {
            $sp.addEventListener('click', change);
        } else {
            // Timer
            var appTimer = window.setInterval(change, window.sec_transition);
        }

        // Go to splash screen on double click
        function goToSplash() {
            clearInterval(appTimer);
            $sp.removeEventListener('click', change);
            $c.removeEventListener('dblclick', goToSplash);
            $sp.removeEventListener('dblclick', goToSplash);

            addClass($c, 'h');
            addClass($sp, 'h');

            stopMusic();
            splash();
        }

        $c.addEventListener('dblclick', goToSplash);
        $sp.addEventListener('dblclick', goToSplash);
    }

    // Converts array like to array
    function toArr(arrLike) {
        return Array.prototype.slice.call(arrLike);
    }

    window.sec_clr = ls('sec_clr') || "multi";
    window.sec_shape = ls('sec_shape') || "default";
    window.sec_transition = ls('sec_transition') || "2000";
    window.sec_sound = ls('sec_sound') || "buddy";

    var $sec_clr = document.getElementById('sec_clr');
    var $sec_shape = document.getElementById('sec_shape');
    var $sec_sound = document.getElementById('sec_sound');
    var $sec_transition = document.getElementById('sec_transition');

    // Add settings events
    function addSettingEvents() {
        [$sec_clr, $sec_shape, $sec_transition, $sec_sound].forEach(function($sec) {
            toArr($sec.getElementsByTagName('div')).forEach(function($el) {
                $el.addEventListener('click', function() {
                    loadSettings($sec, $el.getAttribute('data-val'));
                });
            });
        });
    }

    // Loads the settings
    function loadSettings($sel, value) {
        toArr($sel.getElementsByTagName('div')).forEach(function($el) {
            if ($el.getAttribute('data-val') === value) {
                addClass($el, 'selected');
                // Sets variable and localstorage value
                window[$sel.id] = value;
                ls($sel.id, value);
            } else {
                removeClass($el, 'selected');
            }
        });
    }

    splash();
    addSettingEvents();
    loadSettings($sec_clr, window.sec_clr);
    loadSettings($sec_sound, window.sec_sound);
    loadSettings($sec_shape, window.sec_shape);
    loadSettings($sec_transition, window.sec_transition);

})();
