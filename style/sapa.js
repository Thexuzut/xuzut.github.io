<!-- begin xuzut.github.io -- >
/*
 * Notes on hue
 *
 * This script uses hue rotation in the following manner:
 * hue=0   is red (#FF0000)
 * hue=60  is yellow (#FFFF00)
 * hue=120 is green (#00FF00)
 * hue=180 is cyan (#00FFFF)
 * hue=240 is blue (#0000FF)
 * hue=300 is magenta (#FF00FF)
 * hue=360 is hue=0 (#FF0000)
 *
 * Notes on the script
 *
 * This script should function in any browser that supports document.getElementById
 * It has been tested in Netscape7, Mozilla Firefox 1.0, and Internet Explorer 6
 *
 * Accessibility
 *
 * The script does not write the string out, but rather takes it from an existing
 * HTML element. Therefore, users with javascript disabled will not be adverely affected.
 * They just won't get the pretty colors.
 */

/*
 * splits par.firstChild.data into 1 span for each letter
 * ARGUMENTS
 *   span - HTML element containing a text node as the only element
 */
function toSpans(span) {
  var str=span.firstChild.data;
  var a=str.length;
  span.removeChild(span.firstChild);
  for(var i=0; i<a; i++) {
    var theSpan=document.createElement("SPAN");
    theSpan.appendChild(document.createTextNode(str.charAt(i)));
    span.appendChild(theSpan);
  }
}
function RainbowSpan(span, hue, deg, brt, spd, hspd) {
    this.deg=(deg==null?360:Math.abs(deg));
    this.hue=(hue==null?0:Math.abs(hue)%360);
    this.hspd=(hspd==null?3:Math.abs(hspd)%360);
    this.length=span.firstChild.data.length;
    this.span=span;
    this.speed=(spd==null?50:Math.abs(spd));
    this.hInc=this.deg/this.length;
    this.brt=(brt==null?255:Math.abs(brt)%256);
    this.timer=null;
    toSpans(span);
    this.moveRainbow();
}
RainbowSpan.prototype.moveRainbow = function() {
  if(this.hue>359) this.hue-=360;
  var color;
  var b=this.brt;
  var a=this.length;
  var h=this.hue;

  for(var i=0; i<a; i++) {

    if(h>359) h-=360;

    if(h<60) { color=Math.floor(((h)/60)*b); red=b;grn=color;blu=0; }
    else if(h<120) { color=Math.floor(((h-60)/60)*b); red=b-color;grn=b;blu=0; }
    else if(h<180) { color=Math.floor(((h-120)/60)*b); red=0;grn=b;blu=color; }
    else if(h<240) { color=Math.floor(((h-180)/60)*b); red=0;grn=b-color;blu=b; }
    else if(h<300) { color=Math.floor(((h-240)/60)*b); red=color;grn=0;blu=b; }
    else { color=Math.floor(((h-300)/60)*b); red=b;grn=0;blu=b-color; }

    h+=this.hInc;

    this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")";
  }
  this.hue+=this.hspd;
}
//-->
var GMT = +7;
var now = new Date();
now.setUTCMinutes(now.getUTCMinutes() + (GMT+0)*60);
var jam=now.getUTCHours();
var menit=now.getUTCMinutes();
var detik=now.getUTCSeconds();
jam=""+jam+"";
menit=""+menit+"";
detik=""+detik+"";
if(jam<1)jam=document.write('<h id="r504">Met Tengah Malam Broot..!!</h>');
if(jam<2)jam=document.write('<h id="r504">Met dini hari Brot, udah mlm tidur..??</h>');
if(jam<4)jam=document.write('<h id="r504">Met Malam Jelang Pagi euy broot..!!</h>');
if(jam<5)jam=document.write('<h id="r504">Met pagi,Met sholat subuh brooot..!!!</h>');
if(jam<6)jam=document.write('<h id="r504">Met pagi,Met Berktifitas Broot..!!</h>');
if(jam<7)jam=document.write('<h id="r504">Met pagi,mandi sob cepet broot bau tuh..!!</h>');
if(jam<8)jam=document.write('<h id="r504">Met pagi,hati2 n jgn lupa sarapannya..!!</h>');
if(jam<9)jam=document.write('<h id="r504">Met pagi Met Sibuk Broot..!!</h>');
if(jam<10)jam=document.write('<h id="r504">Met pagi menjelang siang..</h>');
if(jam<14)jam=document.write('<h id="r504">Met siang, lg istirahatnya pain nih broot..??</h>');
if(jam<15)jam=document.write('<h id="r504">Met siang menjelang sore broot..</h>');
if(jam<17)jam=document.write('<h id="r504">Met sore.., waktunya mandi broot..</h>');
if(jam<18)jam=document.write('<h id="r504">Met petang, met nyantai aja prends..</h>');
if(jam<19)jam=document.write('<h id="r504">Met Malam broot, Jgn Lupa Sholat Maghribnya..!!!</h>');
if(jam<21)jam=document.write('<h id="r504">Met malam.., Met Nyantai aja lah broot..</h>');
if(jam<23)jam=document.write('<h id="r504">Met malam.., Met ya istirahat broot..</h>');
if(jam<24)jam=document.write('<b><h id="r504">Met berganti hari broot...!!</h>');
setTimeout("jam()",1000);
// -->
var r504=document.getElementById("r504"); //get span to apply rainbow
var myRainbowSpan=new RainbowSpan(r504, 0, 360, 255, 50, 18);
myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
