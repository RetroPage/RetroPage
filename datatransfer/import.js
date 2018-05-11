window.onload = function() {
  var baddataerr = document.getElementById("baddataerr");
  var nodataerr = document.getElementById("nodataerr");
  var securityalert = document.getElementById("securityalert");
  var doimportbtn = document.getElementById("security-continue");
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  function dodatatransfer() {
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('transferdata') === true) {
        try {
          var importdata = getParameterByName('transferdata');
          var parsedimport = JSON.parse(importdata);
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
          window.location.href = "/";
        } catch (e) {
          console.log("data is bad.");
          baddataerr.style.display = "block";
        }
      } else {
        //show no/invalid data error
        console.log("no data.");
        nodataerr.style.display = "block";
      }
  }
    doimportbtn.onclick = function() {
      securityalert.style.display = "none";
      dodatatransfer();
    };
  var referhost = document.referrer.split('/')[2];
  if (referhost === "retropage.co") {
    dodatatransfer();
  } else {
    securityalert.style.display = "block";
    if (referhost === undefined) {
      document.getElementById("referrer-domain").innerHTML = "an unknown source";
    } else {
      document.getElementById("referrer-domain").innerHTML = referhost;
    }
    return false;
  }
};
