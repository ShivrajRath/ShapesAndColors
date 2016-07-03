(function() {
    'use strict';

    // Phonegap plugin initialization
    function phonegapinit() {
        window.plugins.insomnia.keepAwake();
    }

    document.addEventListener('deviceready', phonegapinit, false);

    var audio;

    // All Shapes
    var shapes = [8251, 8268, 8269, 8277, 8284, 8718, 8752, 8859, 8903, 9608, 9618, 9619, 9625, 9626, 9627,
        9628, 9630, 9631, 9635, 9636, 9637, 9638, 9639, 9640, 9641, 9650, 9658, 9660, 9668, 9670, 9672, 9673, 9680,
        9681, 9682, 9683, 9698, 9699, 9700, 9701, 9703, 9704, 9705, 9706, 9632, 9685, 9716, 9733, 9737, 9751, 9773, 9775,
        9787, 9818, 9819, 9820, 9821, 9822, 9823, 9832, 9836, 9864, 9865, 9873, 9880,
        9990, 9991, 10020, 10021, 10022, 9852, 9998, 10000, 10001, 10003,
        10005, 10007, 10008, 10009, 10010, 10011, 10012, 10014, 10015, 10016, 10018, 10019,
        10023, 10026, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10037, 10038, 10039,
        10040, 10041, 10042, 10043, 10044, 10045, 10046, 10047, 10048, 10049, 10050, 10051, 10053, 10054,
        10056, 10057, 10058, 10070, 10081, 10082, 10085, 10086, 10087, 10102, 10103, 10104, 10105, 10106,
        10107, 10108, 10109, 10110, 10111, 10132, 10140, 10148, 10173
    ];

    var emojis = ["1f302", "1f351", "1f407", "1f426", "1f696", "1f319", "1f352", "1f408", "1f427", "1f951", "1f32d", "1f353", "1f409", "1f428", "1f952", "1f32e", "1f354", "1f40a", "1f429", "1f955", "1f32f", "1f355", "1f40b", "1f42a", "1f95a", "1f331", "1f35c", "1f40c", "1f42b", "1f95b", "1f332", "1f35d", "1f40d", "1f42c", "1f95c", "1f333", "1f35e", "1f40e", "1f42d", "1f95d", "1f334", "1f361", "1f40f", "1f42e", "1f95e", "1f335", "1f366", "1f410", "1f42f", "1f980", "1f336", "1f367", "1f411", "1f430", "1f981", "1f337", "1f368", "1f412", "1f431", "1f982", "1f339", "1f369", "1f413", "1f432", "1f983", "1f33a", "1f36a", "1f414", "1f433", "1f984", "1f33b", "1f36b", "1f415", "1f434", "1f985", "1f33c", "1f36c", "1f416", "1f435", "1f986", "1f33d", "1f36d", "1f417", "1f436", "1f987", "1f33f", "1f36e", "1f418", "1f437", "1f988", "1f344", "1f370", "1f419", "1f438", "1f989", "1f345", "1f379", "1f41a", "1f439", "1f98a", "1f346", "1f382", "1f41b", "1f43a", "1f98b", "1f347", "1f383", "1f41c", "1f43b", "1f98c", "1f348", "1f384", "1f41d", "1f43c", "1f98d", "1f349", "1f388", "1f41e", "1f452", "1f98e", "1f34a", "1f400", "1f41f", "1f680", "1f98f", "1f34b", "1f401", "1f420", "1f681", "1f990", "1f34c", "1f402", "1f421", "1f682", "1f991", "1f34d", "1f403", "1f422", "1f683", "1f34e", "1f404", "1f423", "1f684", "1f34f", "1f405", "1f424", "1f691", "1f350", "1f406", "1f425", "1f694"];

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
        if (window.sec_shape === 'life') {
            return './svg/' + emojis[Math.floor(Math.random() * emojis.length)] + '.svg';
        } else {
            return '&#' + shapes[Math.floor(Math.random() * shapes.length)] + ';';
        }
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
        if (audio) {
            audio.pause();
        }
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

        // Shapes's / life's parent
        var $sp = document.getElementById('sp');

        // Shape / life Element
        var $s = document.getElementById('s');

        // Full Color Element
        var $c = document.getElementById('c');

        if (window.sec_shape === 'colors') {
            removeClass($c, 'h');
        } else {
            // Life element
            if (window.sec_shape === 'life') {
                // Life's parent
                $sp = document.getElementById('lp');

                // Life Element
                $s = document.getElementById('l');
            }
            removeClass($sp, 'h');
        }

        // Changes properties
        function change() {
            if (window.sec_shape === 'colors') {
                $c.style['background-color'] = getRandomColor();
            } else {
                if (window.sec_shape === 'life') {
                    $s.src = getRandomShape();
                    $sp.style['background-color'] = 'white';
                } else {
                    $s.style.color = getRandomColor();
                    $s.innerHTML = getRandomShape();
                    $sp.style['background-color'] = getRandomColor(true);
                }
            }
        }

        if (window.sec_transition === 'ontap') {
            if (window.sec_shape === 'colors') {
                $c.addEventListener('click', change);
            } else {
                $sp.addEventListener('click', change);
            }
        } else {
            // Timer
            var appTimer = window.setInterval(change, window.sec_transition);
        }

        // Go to splash screen on double click
        function goToSplash() {

            // Set default
            $c.style['background-color'] = 'sandybrown';
            $s.style.color = 'darkslateblue';
            $s.innerHTML = '&#9679;';
            $sp.style['background-color'] = getRandomColor(true);

            clearInterval(appTimer);

            // Removes event listeners
            $c.removeEventListener('click', change);
            $sp.removeEventListener('click', change);
            document.body.removeEventListener('mouseup', clrTimeout);
            document.body.removeEventListener('mousedown', gtsTimer);

            addClass($c, 'h');
            addClass($sp, 'h');

            stopMusic();
            splash();
        }

        var pressTimer;

        // Clears the timeout
        function clrTimeout() {
            clearTimeout(pressTimer);
            // Clear timeout
            return false;
        }

        // Go to splash after a second delay
        function gtsTimer() {
            // Set timeout
            pressTimer = window.setTimeout(function() {
                goToSplash();
            }, 1000);
            return false;
        }

        document.body.addEventListener('mouseup', clrTimeout);
        document.body.addEventListener('mousedown', gtsTimer);

    }

    // Converts array like to array
    function toArr(arrLike) {
        return Array.prototype.slice.call(arrLike);
    }

    window.sec_clr = ls('sec_clr') || "multi";
    window.sec_shape = ls('sec_shape') || "life";
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
