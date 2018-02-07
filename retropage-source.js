// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
window.onload = function() {
    var darkbtn = document.getElementById('darktoggle');
    var searchbox = document.getElementById('searchbox');
    var submitsearch = document.getElementById('submitsearch');
    var optionsbtn = document.getElementById('optionsbtn');
    var optionsbox = document.getElementById('options-box');
    var cssmodalbtn = document.getElementById('opencssmodal');
    var closecssmodal = document.getElementById('cssmodalclose');
    var cssmodal = document.getElementById('cssmodal');
    var customcsssubmit = document.getElementById('csssubmit');
    var clearcustomcss = document.getElementById('cssclear');
    var customcss = document.getElementById('customcssinput');
    var savedcustomcss = localStorage.getItem("customcss");
    var logomodalbtn = document.getElementById('openlogomodal');
    var logomodal = document.getElementById('logomodal');
    var logourlnotvalid = document.getElementById('logourlnotvalid');
    var closelogomodal = document.getElementById('logomodalclose');
    var logosubmit = document.getElementById('logosubmit');
    var logoclear = document.getElementById('logoclear');
    var logourl = document.getElementById('logourl');
    var savedlogourl = localStorage.getItem("logourl");
    var searchmodal = document.getElementById('searchmodal');
    var searchmodalbtn = document.getElementById('opensearchmodal');
    var customsearchname = document.getElementById('searchname');
    var customsearchurl = document.getElementById('searchurl');
    var customsearchsubmit = document.getElementById('customsearchsubmit');
    var customsearchclear = document.getElementById('customsearchclear');
    var closesearchmodal = document.getElementById('searchmodalclose');
    var customsearchinvalidurl = document.getElementById('csurlnotvalid');
    var savedcustomsearchname = localStorage.getItem('customsearchname');
    var savedcustomsearchurl = localStorage.getItem('customsearchurl');
    var kbdmodal = document.getElementById('kbdmodal');
    var kbdmodalbtn = document.getElementById('openkbdmodal');
    var kbdmodalmac = document.getElementById('kbd-mac');
    var kbdmodalother = document.getElementById('kbd-other');
    var closekbdmodal = document.getElementById('kbdmodalclose');
    var jsmodal = document.getElementById('jsmodal');
    var jsmodalbtn = document.getElementById('openjsmodal');
    var customjs = document.getElementById('customjsinput');
    var closejsmodal = document.getElementById('jsmodalclose');
    var jssubmit = document.getElementById('jssubmit');
    var jsclear = document.getElementById('jsclear');
    var savedcustomjs = localStorage.getItem('customjs');
    var exportmodal = document.getElementById('exportmodal');
    var exportmodalbtn = document.getElementById('openexportmodal');
    var closeexportmodal = document.getElementById('exportmodalclose');
    var exportmodaldone = document.getElementById('exportmodaldone');
    var exportmodalpg1 = document.getElementById('export-pg1');
    var exportmodalpg2 = document.getElementById('export-pg2');
    var exportmodalpg3 = document.getElementById('export-pg3');
    var exportmodalpg4 = document.getElementById('export-pg4');
    var exportmodalopt1 = document.getElementById('export-import');
    var exportmodalopt2 = document.getElementById('export-export');
    var importsubmit = document.getElementById('submitimport');
    var importdata = document.getElementById('importdata');
    var importreload = document.getElementById('importmodaldone');
    var importerror = document.getElementById('importinvalidjson');
    var darkstatus = localStorage.getItem('themestatus');
    var savedsearch = localStorage.getItem('selectedengine');
    var customsearchset = localStorage.getItem('customsearchset');
    var optionsopen = 0;
    var cssmodalopen = 0;
    var jsmodalopen = 0;
    var logomodalopen = 0;
    var searchmodalopen = 0;
    var kbdmodalopen = 0;
    var exportmodalopen = 0;
    var exportmodalpg = 1;
    var selectid = null;
    var exportObject = {
        'customcss': localStorage.getItem('customcss'),
        'customjs': localStorage.getItem('customjs'),
        'customsearchname': localStorage.getItem('customsearchname'),
        'customsearchset': localStorage.getItem('customsearchset'),
        'customsearchurl': localStorage.getItem('customsearchurl'),
        'logourl': localStorage.getItem('logourl'),
        'selectedengine': localStorage.getItem('selectedengine'),
        'themestatus': localStorage.getItem('themestatus')
    };

    function closeall() {
        optionsbox.style.display = "none";
        optionsopen = 0;
        cssmodal.style.display = "none";
        cssmodalopen = 0;
        jsmodal.style.display = "none";
        jsmodalopen = 0;
        logomodal.style.display = "none";
        logomodalopen = 0;
        searchmodal.style.display = "none";
        searchmodalopen = 0;
        kbdmodal.style.display = "none";
        kbdmodalopen = 0;
        exportmodal.style.display = "none";
        exportmodalopen = 0;
    }

    //Do search
    function dosearch() {
        var searchbox = document.searchbox;
        savedcustomsearchurl = localStorage.getItem('customsearchurl');
        savedsearch = localStorage.getItem('selectedengine');
        if (savedsearch == "google") {
            window.location.href = "https://encrypted.google.com/#q=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "bing") {
            window.location.href = "https://www.bing.com/search?q=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "yahoo") {
            window.location.href = "https://search.yahoo.com/search?p=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "ddg") {
            window.location.href = "https://duckduckgo.com/?q=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "startpage") {
            window.location.href = "https://www.startpage.com/do/search?query=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "searx") {
            window.location.href = "https://searx.me/?q=" + escape(searchbox.searchtext.value) + "&categories=general";
            return false;
        } else if (savedsearch == "ixquick") {
            window.location.href = "https://www.ixquick.eu/do/search?query=" + escape(searchbox.searchtext.value);
            return false;
        } else if (savedsearch == "custom") {
            window.location.href = savedcustomsearchurl + escape(searchbox.searchtext.value);
            return false;
        }
    }
    searchbox.onsubmit = dosearch;
    submitsearch.onclick = dosearch;

    //Set search engine
    function setengine() {
        var selectedsearch = $("#searchoption").val();
        if (selectedsearch == "google") {
            $('input[name="searchtext"]').attr("placeholder", "Google Search");
            localStorage.setItem("selectedengine", "google");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "bing") {
            $('input[name="searchtext"]').attr("placeholder", "Bing Search");
            localStorage.setItem("selectedengine", "bing");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "yahoo") {
            $('input[name="searchtext"]').attr("placeholder", "Yahoo Search");
            localStorage.setItem("selectedengine", "yahoo");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "ddg") {
            $('input[name="searchtext"]').attr("placeholder", "DuckDuckGo Search");
            localStorage.setItem("selectedengine", "ddg");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "startpage") {
            $('input[name="searchtext"]').attr("placeholder", "StartPage Search");
            localStorage.setItem("selectedengine", "startpage");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "searx") {
            $('input[name="searchtext"]').attr("placeholder", "Searx Search");
            localStorage.setItem("selectedengine", "searx");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "ixquick") {
            $('input[name="searchtext"]').attr("placeholder", "Ixquick.eu Search");
            localStorage.setItem("selectedengine", "ixquick");
            savedsearch = localStorage.getItem("selectedengine");
        } else if (selectedsearch == "custom") {
            localStorage.setItem("selectedengine", "custom");
            savedcustomsearchname = localStorage.getItem('customsearchname');
            var csplaceholdertext = savedcustomsearchname + " search";
            $('input[name="searchtext"]').attr("placeholder", csplaceholdertext);
        }
    }
    searchoption.onchange = setengine;

    //Set search engine on page load
    if (localStorage.getItem("selectedengine") !== null) {
        if (customsearchset == 1) {
            $("#searchoption").append('<option value="custom">' + localStorage.getItem("customsearchname") + '</option>');
            if (savedsearch == "custom") {
                $("#searchoption").val("custom");
                setengine();
            } else {
                searchoption.value = localStorage.getItem('selectedengine');
                setengine();
            }
        } else {
            searchoption.value = localStorage.getItem('selectedengine');
            setengine();
        }
    } else {
        $("#searchoption").val("google");
        localStorage.setItem("selectedengine", "google");
        setengine();
    }

    //Set theme on page load
    if (darkstatus === 0) {
        $('link[title=darktheme]')[0].disabled = true;
    } else if (darkstatus == 1) {
        $('link[title=darktheme]')[0].disabled = false;
    } else if (darkstatus == 2) {
        $('head').append('<style id="customstyling">' + savedcustomcss + '</style>');
        $('link[title=darktheme]')[0].disabled = true;
    } else {
        $('link[title=darktheme]')[0].disabled = true;
        localStorage.setItem("themestatus", "0");
        darkstatus = 0;
    }

    //remove darkmodeon and replace it with themestatus
    if (localStorage.getItem("darkmodeon") !== null) {
        localStorage.setItem("themestatus", localStorage.getItem("darkmodeon"));
        localStorage.removeItem("darkmodeon");
    } else {
        null;
    }

    //fix for customsearchset being set to 1 with no custom search engine set
    if (customsearchset == 1 && savedcustomsearchname == null || savedcustomsearchname == undefined || savedcustomsearchurl == null || savedcustomsearchurl == undefined) {
        localStorage.removeItem("customsearchset");
    }

    //open options menu
    optionsbtn.onclick = function() {
        if (optionsopen === 0) {
            closeall();
            optionsbox.style.display = "block";
            optionsopen = 1;
        } else {
            closeall();
        }
    };

    //Turn dark theme on/off upon dark theme button being clicked
    function toggledark() {
        if (darkstatus === 0) {
            darkstatus = 1;
            localStorage.setItem("themestatus", "1");
            $('link[title=darktheme]')[0].disabled = false;
        } else if (darkstatus == 1) {
            darkstatus = 0;
            localStorage.setItem("themestatus", "0");
            $('link[title=darktheme]')[0].disabled = true;
        } else if (darkstatus == 2) {
            darkstatus = 0;
            localStorage.setItem("themestatus", "0");
            $('link[title=darktheme]')[0].disabled = true;
            $("#customstyling").remove();
        }
    }
    darkbtn.onclick = toggledark;

    //Open custom CSS modal upon button being clicked
    function opencssmodal() {
        if (cssmodalopen === 0) {
            closeall();
            cssmodal.style.display = "block";
            cssmodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customcssinput"]').val(localStorage.getItem("customcss"));
        } else {
            closeall();
        }
    }
    cssmodalbtn.onclick = opencssmodal;

    //Close CSS modal
    closecssmodal.onclick = closeall;

    //Set custom CSS upon submit button being selected
    customcsssubmit.onclick = function() {
        if (customcss.value !== "" && customcss.value !== "null") {
            localStorage.setItem("customcss", customcss.value);
            $("#customstyling").remove();
            $('head').append('<style id="customstyling">' + customcss.value + '</style>');
            darkstatus = 2;
            localStorage.setItem("themestatus", "2");
            $('link[title=darktheme]')[0].disabled = true;
            closeall();
            return false;
        } else {
            localStorage.removeItem("customcss");
            $("#customstyling").remove();
            localStorage.setItem("themestatus", "0");
            closeall();
            return false;
        }
    };

    //clear custom css
    clearcustomcss.onclick = function() {
        localStorage.removeItem("customcss");
        $("#customstyling").remove();
        localStorage.setItem("themestatus", "0");
        closeall();
        return false;
    };

    //Open custom JS modal upon button being clicked
    function openjsmodal() {
        if (jsmodalopen === 0) {
            closeall();
            jsmodal.style.display = "block";
            jsmodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customjsinput"]').val(localStorage.getItem("customjs"));
        } else {
            closeall();
        }
    }
    jsmodalbtn.onclick = openjsmodal;

    //Close JS modal
    closejsmodal.onclick = closeall;

    //Set custom JS upon submit button being selected
    jssubmit.onclick = function() {
        if (customjs.value !== "" && customjs.value !== "null") {
            localStorage.setItem("customjs", customjs.value);
            $("#customjs").remove();
            closeall();
            location.reload();
            return false;
        } else {
            localStorage.removeItem("customjs");
            $("#customjs").remove();
            closeall();
            location.reload();
            return false;
        }
    };

    //clear custom js
    jsclear.onclick = function() {
        localStorage.removeItem("customjs");
        $("#customjs").remove();
        closeall();
        location.reload();
        return false;
    };

    //autoload custom js
    if (savedcustomjs !== "null" && savedcustomjs !== "" && savedcustomjs !== null) {
        $('head').append('<script id="customjs">' + savedcustomjs + "</script>");
    } else {
        null;
    }


    //Open custom logo modal upon button being selected
    function openlogomodal() {
        if (logomodalopen === 0) {
            closeall();
            logomodal.style.display = "block";
            logomodalopen = 1;
            optionsbox.style.display = "none";
            optionsopen = 0;
            $('textarea[name="customcssinput"]').val(localStorage.getItem("customcss"));
        } else {
            closeall();
        }
    }
    logomodalbtn.onclick = openlogomodal;

    //close logo modal
    closelogomodal.onclick = closeall;

    //submit custom logo
    logosubmit.onclick = function() {
        if (logourl.value !== "" && logourl.value !== "null") {
            if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#logourl").val())) {
                localStorage.setItem("logourl", logourl.value);
                $("#logo").attr("src", logourl.value);
                logourlnotvalid.style.display = "none";
                closeall();
                return false;
            } else {
                logourlnotvalid.style.display = "block";
                return false;
            }
        } else {
            localStorage.removeItem("logourl");
            closeall();
            location.reload();
            return false;
        }
    };

    //clear custom logo
    logoclear.onclick = function() {
        localStorage.removeItem("logourl");
        closeall();
        location.reload();
        return false;
    };

    //Load logo on page load
    if (savedlogourl !== null && savedlogourl !== "") {
        $("#logo").attr("src", savedlogourl);
    } else {
        null;
    }

    //open search modal
    function opensearchmodal() {
        if (searchmodalopen === 0) {
            closeall();
            searchmodal.style.display = "block";
            searchmodalopen = 1;
            $("#searchname").val(localStorage.getItem('customsearchname'));
            $("#searchurl").val(localStorage.getItem('customsearchurl'));
        } else {
            searchmodal.style.display = "none";
            searchmodalopen = 0;
        }
    }
    searchmodalbtn.onclick = opensearchmodal;

    //close search modal
    closesearchmodal.onclick = closeall;

    customsearchsubmit.onclick = function() {
        if (customsearchname !== "" && customsearchname !== "null" && /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#searchurl").val())) {
            customsearchinvalidurl.style.display = "none";
            localStorage.removeItem("customsearchname");
            localStorage.removeItem("customsearchurl");
            localStorage.removeItem("selectedengine");
            localStorage.setItem("customsearchname", customsearchname.value);
            localStorage.setItem("customsearchurl", customsearchurl.value);
            localStorage.setItem("customsearchset", "1");
            $("#searchoption option[value='custom']").remove();
            localStorage.setItem("selectedengine", "custom");
            $("#searchoption").append('<option value="custom">' + customsearchname.value + '</option>');
            $("#searchoption").val("custom");
            setengine();
            closeall();
            return false;
        } else if (customsearchurl.value !== "" && customsearchurl.value !== "null") {
            customsearchinvalidurl.style.display = "block";
            return false;
        }
    };

    customsearchclear.onclick = function() {
        localStorage.removeItem("customsearchname");
        localStorage.removeItem("customsearchurl");
        $("#searchoption").val("google");
        $("#searchoption option[value='custom']").remove();
        localStorage.setItem("selectedengine", "google");
        setengine();
        closeall();
        return false;
    }


    //open keyboard shortcut modal
    function openkbdmodal() {
        if (kbdmodalopen === 0) {
            if (window.navigator.platform == "Mac68K" || window.navigator.platform == "MacPPC" || window.navigator.platform == "MacIntel") {
                closeall();
                kbdmodal.style.display = "block";
                kbdmodalopen = 1;
                kbdmodalmac.style.display = "block";
                kbdmodalother.style.display = "none";
            } else {
                closeall();
                kbdmodal.style.display = "block";
                kbdmodalopen = 1;
                kbdmodalmac.style.display = "none";
                kbdmodalother.style.display = "block";
            }
        } else {
            kbdmodal.style.display = "none";
            kbdmodalopen = 0;
        }
    }
    kbdmodalbtn.onclick = openkbdmodal;
    closekbdmodal.onclick = closeall;

    //Open custom export modal upon button being selected
    function openexportmodal() {
        if (exportmodalopen === 0) {
            closeall();
            exportmodal.style.display = "block";
            exportmodalpg1.style.display = "block";
            importerror.style.display = "none";
            exportmodalopen = 1;
            exportmodalpg = 1;
            optionsbox.style.display = "none";
            exportmodalpg2.style.display = "none";
            exportmodalpg3.style.display = "none";
            exportmodalpg4.style.display = "none";
            optionsopen = 0;
        } else {
            closeall();
        }
    }
    exportmodalbtn.onclick = openexportmodal;
    closeexportmodal.onclick = closeall;
    exportmodaldone.onclick = closeall;

    function showimport() {
        exportmodalpg1.style.display = "none";
        exportmodalpg2.style.display = "block";
        exportmodalpg3.style.display = "none";
        exportmodalpg4.style.display = "none";
        importerror.style.display = "none";
    }
    exportmodalopt1.onclick = showimport;

    function doimport() {
        try {
            importdata = document.getElementById('importdata');
            var parsedimport = JSON.parse(importdata.value);
            if (parsedimport.customcss !== null) {
                localStorage.setItem("customcss", parsedimport.customcss);
            } else {
                null;
            }
            if (parsedimport.customjs !== null) {
                localStorage.setItem("customjs", parsedimport.customjs);
            } else {
                null;
            }
            if (parsedimport.customsearchname !== null) {
                localStorage.setItem("customsearchname", parsedimport.customsearchname);
            } else {
                null;
            }
            if (parsedimport.customsearchset !== null) {
                localStorage.setItem("customsearchset", parsedimport.customsearchset);
            } else {
                null;
            }
            if (parsedimport.customsearchurl !== null) {
                localStorage.setItem("customsearchurl", parsedimport.customsearchurl);
            } else {
                null;
            }
            if (parsedimport.logourl !== null) {
                localStorage.setItem("logourl", parsedimport.logourl);
            } else {
                null;
            }
            if (parsedimport.selectedengine !== null) {
                localStorage.setItem("selectedengine", parsedimport.selectedengine);
            } else {
                null;
            }
            if (parsedimport.themestatus !== null) {
                localStorage.setItem("themestatus", parsedimport.themestatus);
            } else {
                null;
            }
            importconfirm();
            return false;
        } catch (e) {
            importerror.style.display = "block";
            return false;
        }
    }
    importsubmit.onclick = doimport;

    function importconfirm() {
        exportmodalpg1.style.display = "none";
        exportmodalpg2.style.display = "none";
        exportmodalpg3.style.display = "none";
        exportmodalpg4.style.display = "block";
        $("#exportmodalclose").remove();
    }

    function reload() {
        location.reload();
    }
    importreload.onclick = reload;

    function retropageexport() {
        exportmodalpg1.style.display = "none";
        exportmodalpg2.style.display = "none";
        exportmodalpg3.style.display = "block";
        exportmodalpg4.style.display = "none";
        exportmodalpg = 3;
        exportObject = {
            'customcss': localStorage.getItem('customcss'),
            'customjs': localStorage.getItem('customjs'),
            'customsearchname': localStorage.getItem('customsearchname'),
            'customsearchset': localStorage.getItem('customsearchset'),
            'customsearchurl': localStorage.getItem('customsearchurl'),
            'logourl': localStorage.getItem('logourl'),
            'selectedengine': localStorage.getItem('selectedengine'),
            'themestatus': localStorage.getItem('themestatus')
        };
        document.getElementById("exportdata").value = JSON.stringify(exportObject);
    }
    exportmodalopt2.onclick = retropageexport;

    //Keyboard Shortcuts
    document.onkeydown = function(e) {
        if (e.ctrlKey && e.altKey && e.which == 222) {
            e.preventDefault();
            e.stopPropagation();
            toggledark();
        } else if (e.ctrlKey && e.altKey && e.which == 59 || e.ctrlKey && e.altKey && e.which == 186) {
            e.preventDefault();
            e.stopPropagation();
            opencssmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 76) {
            e.preventDefault();
            e.stopPropagation();
            openlogomodal();
        } else if (e.ctrlKey && e.altKey && e.which == 75) {
            e.preventDefault();
            e.stopPropagation();
            openjsmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 74) {
            e.preventDefault();
            e.stopPropagation();
            opensearchmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 72) {
            e.preventDefault();
            e.stopPropagation();
            openexportmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 82) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = "/reset";
        } else if (e.ctrlKey && e.altKey && e.which == 83) {
            e.preventDefault();
            e.stopPropagation();
            openkbdmodal();
        } else if (e.ctrlKey && e.altKey && e.which == 88) {
            e.preventDefault();
            e.stopPropagation();
            closeall();
        }
    };

    // Make pressing the Tab key insert an indent in Textarea
    $("textarea").keydown(function(e) {
        if (e.keyCode === 9) {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var $this = $(this);
            var value = $this.val();
            $this.val(value.substring(0, start) +
                "\t" +
                value.substring(end));
            this.selectionStart = this.selectionEnd = start + 1;
            e.preventDefault();
        }
    });
};
// @license-end
