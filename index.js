var $jscomp$destructuring$var0=console,log=$jscomp$destructuring$var0.log,xPosMouse,yPosMouse,fontLoad=document.querySelector("#floating-menu[data-v-ebbacb64]"),gridType=document.querySelector(".setGrid");
function initSketchpad(){function b(c){console.log("selectTool",c);a.setTool(c);fontLoad.style.display="type"===c?"block":"none";document.querySelectorAll(".toolbar .button").forEach(function(e){e.classList.remove("active")});document.getElementById("tool-"+c).classList.add("active");document.getElementById("size").style.display="none";var d=a.getCurrentTool();document.getElementById("toolName").innerHTML=d.toolLabel||"Undefined";"function"===typeof d.getSize&&(d=d.getSize(),document.getElementById("size-slider").value=
d);switch(c){case "pen":document.getElementById("size").style.display="block";break;case "highlighter":document.getElementById("size").style.display="block";break;case "rectangle":document.getElementById("size").style.display="block";break;case "circle":document.getElementById("size").style.display="block";break;case "line":document.getElementById("size").style.display="block"}}var f=document.getElementById("sketchpad"),a=new Sketchpad({containerEl:f,features:{displayCrosshair:!1,displayGrid:!1},
createPageConfig:{no:3,backgroundColor:"rgba(222,222,0, 0)"}});gridType.addEventListener("change",function(c){console.log("clicked");a.showGrid()});window.sketchpad=a;b("pen");document.getElementById("size-slider").addEventListener("change",function(c){"function"===typeof a.getCurrentTool().setSize&&a.getCurrentTool().setSize(c.target.value)});document.getElementById("tool-save").addEventListener("click",function(){console.log(this);console.log(a.canvas.toDataURL);this.setAttribute("href",a.canvas.toDataURL());
this.download="picture.png"});document.getElementById("tool-pen").addEventListener("click",function(){b("pen")});document.getElementById("tool-highlighter").addEventListener("click",function(){b("highlighter")});document.getElementById("tool-type").addEventListener("click",function(c){b("type")},!1);document.getElementById("tool-eraser").addEventListener("click",function(){b("eraser")});document.getElementById("tool-cutout").addEventListener("click",function(){b("cutout")});document.getElementById("tool-rectangle").addEventListener("click",
function(){b("rectangle")});document.getElementById("tool-line").addEventListener("click",function(){b("line")});document.getElementById("tool-circle").addEventListener("click",function(){b("circle")});document.getElementById("tool-rainbow").addEventListener("click",function(){b("rainbow")});document.getElementById("tool-move-viewport").addEventListener("click",function(){b("move-viewport")});document.getElementById("tool-rotate-viewport").addEventListener("click",function(){b("rotate-viewport")});
document.getElementById("tool-zoom-in").addEventListener("click",function(){a.setScale(2*a.scale)});document.getElementById("tool-zoom-out").addEventListener("click",function(){a.setScale(a.scale/2)});document.getElementById("reset").addEventListener("click",function(){a.clearSketchpad()});document.getElementById("tool-undo").addEventListener("click",function(){a.undo()});document.getElementById("tool-redo").addEventListener("click",function(){a.redo()})}initSketchpad();