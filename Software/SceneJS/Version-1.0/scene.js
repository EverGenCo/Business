var SCENE = {
 "NewScene": function(back){createNewScene(back);}
};
function createNewScene(back){
 var canvas1 = '<canvas width="';var canvas2 = '" height="';var canvas3 = '"></canvas>';
 var width = window.innerWidth();var height = windowinnerHeight();
 var canvas = canvas1+width+canvas2+height+canvas3;
 document.body.innerHTML += canvas;
}
