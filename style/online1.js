<!--
 
 // Copyright (c) 1996-1997 Tomer Shiran. All rights reserved.
 // Permission given to use the script provided that this notice remains as is.
 // Additional scripts can be found at http://www.webmastersonline.hpage.net
 
 // Boolean variable specified if alert should be displayed if cookie exceeds 4KB
 var caution = false
 
 // name - name of the cookie
 // value - value of the cookie
 // [expires] - expiration date of the cookie (defaults to end of current session)
 // [path] - path for which the cookie is valid (defaults to path of calling document)
 // [domain] - domain for which the cookie is valid (defaults to domain of calling document)
 // [secure] - Boolean value indicating if the cookie transmission requires a secure transmission
 // * an argument defaults when it is assigned null as a placeholder
 // * a null placeholder is not required for trailing omitted arguments
 function setCookie(name, value, expires, path, domain, secure) {
 var curCookie = name + "=" + escape(value) +
 ((expires) ? "; expires=" + expires.toGMTString() : "") +
 ((path) ? "; path=" + path : "") +
 ((domain) ? "; domain=" + domain : "") +
 ((secure) ? "; secure" : "")
 if (!caution || (name + "=" + escape(value)).length <= 4000)
 document.cookie = curCookie
 else
 if (confirm("Cookie exceeds 4KB and will be cut!"))
 document.cookie = curCookie
 }
 
 // name - name of the desired cookie
 // * return string containing value of specified cookie or null if cookie does not exist
 function getCookie(name) {
 var prefix = name + "="
 var cookieStartIndex = document.cookie.indexOf(prefix)
 if (cookieStartIndex == -1)
 return null
 var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
 if (cookieEndIndex == -1)
 cookieEndIndex = document.cookie.length
 return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
 }
 
 // name - name of the cookie
 // [path] - path of the cookie (must be same as path used to create cookie)
 // [domain] - domain of the cookie (must be same as domain used to create cookie)
 // * path and domain default if assigned null or omitted if no explicit argument proceeds
 function deleteCookie(name, path, domain) {
 if (getCookie(name)) {
 document.cookie = name + "=" + 
 ((path) ? "; path=" + path : "") +
 ((domain) ? "; domain=" + domain : "") +
 "; expires=Thu, 01-Jan-70 00:00:01 GMT"
 }
 }
 
 // date - any instance of the Date object
 // * you should hand all instances of the Date object to this function for "repairs"
 // * this function is taken from Chapter 14, "Time and Date in JavaScript", in "Learn Advanced JavaScript Programming"
 function fixDate(date) {
 var base = new Date(0)
 var skew = base.getTime()
 if (skew > 0)
 date.setTime(date.getTime() - skew)
 }
 
 var now = new Date()
 fixDate(now)
 now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
 var visits = getCookie("counter")
 if (!visits)
 visits = 1
 else
 visits = parseInt(visits) + 1
 setCookie("counter", visits, now)
 document.write("Kunjungan Anda yang ke : " + visits + " Kali")

 
 // -->
