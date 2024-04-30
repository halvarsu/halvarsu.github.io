// Compiled by ClojureScript 1.9.473 {}
goog.provide('stuff.cycloid');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
stuff.cycloid.linspace = (function stuff$cycloid$linspace(start,stop,num){
return cljs.core.take.call(null,num,cljs.core.range.call(null,start,Double.POSITIVE_INFINITY,((stop - start) / (num - (1)))));
});
stuff.cycloid.inc_if = (function stuff$cycloid$inc_if(v,bool){
if(cljs.core.truth_(bool)){
return (v + (1));
} else {
return v;
}
});
stuff.cycloid.update_state = (function stuff$cycloid$update_state(state){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588)], null),stuff.cycloid.inc_if,new cljs.core.Keyword(null,"play?","play?",1098824048).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"i","i",-1386841315),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(state) / (500)));
});
stuff.cycloid.draw_state = (function stuff$cycloid$draw_state(state){
quil.core.background.call(null,0.2);

quil.core.stroke.call(null,0.3,0.8,0.7);

quil.core.fill.call(null,0.3);

quil.core.text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"point-count","point-count",-234732819).cljs$core$IFn$_invoke$arity$1(state))].join(''),(10),(20));

quil.core.begin_shape.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state));

var i = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state);
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(state);
var point_count = new cljs.core.Keyword(null,"point-count","point-count",-234732819).cljs$core$IFn$_invoke$arity$1(state);
quil.core.text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),(10),(10));

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

var seq__8479_8483 = cljs.core.seq.call(null,stuff.cycloid.linspace.call(null,(0),((20) * stuff.cycloid.Math.PI()),point_count));
var chunk__8480_8484 = null;
var count__8481_8485 = (0);
var i__8482_8486 = (0);
while(true){
if((i__8482_8486 < count__8481_8485)){
var t_8487 = cljs.core._nth.call(null,chunk__8480_8484,i__8482_8486);
var c_8488 = quil.core.cos.call(null,(i * t_8487));
var s_8489 = quil.core.sin.call(null,(i * t_8487));
quil.core.vertex.call(null,((((2) * r) * c_8488) + (r * quil.core.cos.call(null,t_8487))),((((2) * r) * s_8489) + (r * quil.core.sin.call(null,t_8487))));

var G__8490 = seq__8479_8483;
var G__8491 = chunk__8480_8484;
var G__8492 = count__8481_8485;
var G__8493 = (i__8482_8486 + (1));
seq__8479_8483 = G__8490;
chunk__8480_8484 = G__8491;
count__8481_8485 = G__8492;
i__8482_8486 = G__8493;
continue;
} else {
var temp__4657__auto___8494 = cljs.core.seq.call(null,seq__8479_8483);
if(temp__4657__auto___8494){
var seq__8479_8495__$1 = temp__4657__auto___8494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_8495__$1)){
var c__7633__auto___8496 = cljs.core.chunk_first.call(null,seq__8479_8495__$1);
var G__8497 = cljs.core.chunk_rest.call(null,seq__8479_8495__$1);
var G__8498 = c__7633__auto___8496;
var G__8499 = cljs.core.count.call(null,c__7633__auto___8496);
var G__8500 = (0);
seq__8479_8483 = G__8497;
chunk__8480_8484 = G__8498;
count__8481_8485 = G__8499;
i__8482_8486 = G__8500;
continue;
} else {
var t_8501 = cljs.core.first.call(null,seq__8479_8495__$1);
var c_8502 = quil.core.cos.call(null,(i * t_8501));
var s_8503 = quil.core.sin.call(null,(i * t_8501));
quil.core.vertex.call(null,((((2) * r) * c_8502) + (r * quil.core.cos.call(null,t_8501))),((((2) * r) * s_8503) + (r * quil.core.sin.call(null,t_8501))));

var G__8504 = cljs.core.next.call(null,seq__8479_8495__$1);
var G__8505 = null;
var G__8506 = (0);
var G__8507 = (0);
seq__8479_8483 = G__8504;
chunk__8480_8484 = G__8505;
count__8481_8485 = G__8506;
i__8482_8486 = G__8507;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.call(null);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"play?","play?",1098824048).cljs$core$IFn$_invoke$arity$1(state))){
return quil.core.no_loop.call(null);
} else {
return null;
}
});
stuff.cycloid.setup = (function stuff$cycloid$setup(){
quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031),1.0);

quil.core.frame_rate.call(null,(20));

quil.core.background.call(null,(0),(0),(0));

quil.core.text.call(null,"By halvarsu",(quil.core.width.call(null) - (80)),(quil.core.height.call(null) - (10)));

quil.core.stroke_weight.call(null,(2));

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"play?","play?",1098824048),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"point-count","point-count",-234732819),(50),new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"r","r",-471384190),(72),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});
stuff.cycloid.mouse_click = (function stuff$cycloid$mouse_click(state,event){
cljs.core.println.call(null,state);

if(((quil.core.width.call(null) / (2)) > quil.core.mouse_x.call(null))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.dec);
}
});
stuff.cycloid.save_frame = (function stuff$cycloid$save_frame(state){
return quil.core.save.call(null,stuff.cycloid.format.call(null,"cycloid%.2f.png",new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(state)));
});
stuff.cycloid.button_choices = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"a","a",-2123407586)],[(function (p1__8509_SHARP_){
return cljs.core.update.call(null,p1__8509_SHARP_,new cljs.core.Keyword(null,"point-count","point-count",-234732819),cljs.core._PLUS_,(50));
}),(function (p1__8519_SHARP_){
return cljs.core.update.call(null,p1__8519_SHARP_,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.dec);
}),(function (p1__8520_SHARP_){
return cljs.core.assoc.call(null,p1__8520_SHARP_,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
}),(function (p1__8512_SHARP_){
return cljs.core.update.call(null,p1__8512_SHARP_,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
}),(function (p1__8511_SHARP_){
return cljs.core.update.call(null,p1__8511_SHARP_,new cljs.core.Keyword(null,"point-count","point-count",-234732819),cljs.core._,(50));
}),stuff.cycloid.save_frame,(function (p1__8518_SHARP_){
return cljs.core.update.call(null,p1__8518_SHARP_,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.inc);
}),(function (p1__8515_SHARP_){
return cljs.core.assoc.call(null,p1__8515_SHARP_,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"points","points",-1486596883));
}),(function (p1__8516_SHARP_){
return cljs.core.assoc.call(null,p1__8516_SHARP_,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"lines","lines",-700165781));
}),(function (p1__8510_SHARP_){
return cljs.core.update.call(null,p1__8510_SHARP_,new cljs.core.Keyword(null,"point-count","point-count",-234732819),cljs.core.dec);
}),(function (p1__8514_SHARP_){
return cljs.core.assoc.call(null,p1__8514_SHARP_,new cljs.core.Keyword(null,"play?","play?",1098824048),cljs.core.not.call(null,new cljs.core.Keyword(null,"play?","play?",1098824048).cljs$core$IFn$_invoke$arity$1(p1__8514_SHARP_)));
}),(function (p1__8517_SHARP_){
return cljs.core.assoc.call(null,p1__8517_SHARP_,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"triangles","triangles",-1525417058));
}),(function (p1__8513_SHARP_){
return cljs.core.update.call(null,p1__8513_SHARP_,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.dec);
}),(function (p1__8508_SHARP_){
return cljs.core.update.call(null,p1__8508_SHARP_,new cljs.core.Keyword(null,"point-count","point-count",-234732819),cljs.core.inc);
})]);
stuff.cycloid.key_pressed = (function stuff$cycloid$key_pressed(state,event){
quil.core.start_loop.call(null);

var c = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
var func = c.call(null,stuff.cycloid.button_choices);
if(cljs.core.truth_(func)){
return func.call(null,state);
} else {
return state;
}
});
stuff.cycloid.cycloid = (function stuff$cycloid$cycloid(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"cycloid",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,stuff.cycloid.update_state))?(function() { 
var G__8521__delegate = function (args){
return cljs.core.apply.call(null,stuff.cycloid.update_state,args);
};
var G__8521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8522__i = 0, G__8522__a = new Array(arguments.length -  0);
while (G__8522__i < G__8522__a.length) {G__8522__a[G__8522__i] = arguments[G__8522__i + 0]; ++G__8522__i;}
  args = new cljs.core.IndexedSeq(G__8522__a,0);
} 
return G__8521__delegate.call(this,args);};
G__8521.cljs$lang$maxFixedArity = 0;
G__8521.cljs$lang$applyTo = (function (arglist__8523){
var args = cljs.core.seq(arglist__8523);
return G__8521__delegate(args);
});
G__8521.cljs$core$IFn$_invoke$arity$variadic = G__8521__delegate;
return G__8521;
})()
:stuff.cycloid.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1280),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,stuff.cycloid.setup))?(function() { 
var G__8524__delegate = function (args){
return cljs.core.apply.call(null,stuff.cycloid.setup,args);
};
var G__8524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8525__i = 0, G__8525__a = new Array(arguments.length -  0);
while (G__8525__i < G__8525__a.length) {G__8525__a[G__8525__i] = arguments[G__8525__i + 0]; ++G__8525__i;}
  args = new cljs.core.IndexedSeq(G__8525__a,0);
} 
return G__8524__delegate.call(this,args);};
G__8524.cljs$lang$maxFixedArity = 0;
G__8524.cljs$lang$applyTo = (function (arglist__8526){
var args = cljs.core.seq(arglist__8526);
return G__8524__delegate(args);
});
G__8524.cljs$core$IFn$_invoke$arity$variadic = G__8524__delegate;
return G__8524;
})()
:stuff.cycloid.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,stuff.cycloid.mouse_click))?(function() { 
var G__8527__delegate = function (args){
return cljs.core.apply.call(null,stuff.cycloid.mouse_click,args);
};
var G__8527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8528__i = 0, G__8528__a = new Array(arguments.length -  0);
while (G__8528__i < G__8528__a.length) {G__8528__a[G__8528__i] = arguments[G__8528__i + 0]; ++G__8528__i;}
  args = new cljs.core.IndexedSeq(G__8528__a,0);
} 
return G__8527__delegate.call(this,args);};
G__8527.cljs$lang$maxFixedArity = 0;
G__8527.cljs$lang$applyTo = (function (arglist__8529){
var args = cljs.core.seq(arglist__8529);
return G__8527__delegate(args);
});
G__8527.cljs$core$IFn$_invoke$arity$variadic = G__8527__delegate;
return G__8527;
})()
:stuff.cycloid.mouse_click),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.pause_on_error,quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,stuff.cycloid.key_pressed))?(function() { 
var G__8530__delegate = function (args){
return cljs.core.apply.call(null,stuff.cycloid.key_pressed,args);
};
var G__8530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8531__i = 0, G__8531__a = new Array(arguments.length -  0);
while (G__8531__i < G__8531__a.length) {G__8531__a[G__8531__i] = arguments[G__8531__i + 0]; ++G__8531__i;}
  args = new cljs.core.IndexedSeq(G__8531__a,0);
} 
return G__8530__delegate.call(this,args);};
G__8530.cljs$lang$maxFixedArity = 0;
G__8530.cljs$lang$applyTo = (function (arglist__8532){
var args = cljs.core.seq(arglist__8532);
return G__8530__delegate(args);
});
G__8530.cljs$core$IFn$_invoke$arity$variadic = G__8530__delegate;
return G__8530;
})()
:stuff.cycloid.key_pressed),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,stuff.cycloid.draw_state))?(function() { 
var G__8533__delegate = function (args){
return cljs.core.apply.call(null,stuff.cycloid.draw_state,args);
};
var G__8533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8534__i = 0, G__8534__a = new Array(arguments.length -  0);
while (G__8534__i < G__8534__a.length) {G__8534__a[G__8534__i] = arguments[G__8534__i + 0]; ++G__8534__i;}
  args = new cljs.core.IndexedSeq(G__8534__a,0);
} 
return G__8533__delegate.call(this,args);};
G__8533.cljs$lang$maxFixedArity = 0;
G__8533.cljs$lang$applyTo = (function (arglist__8535){
var args = cljs.core.seq(arglist__8535);
return G__8533__delegate(args);
});
G__8533.cljs$core$IFn$_invoke$arity$variadic = G__8533__delegate;
return G__8533;
})()
:stuff.cycloid.draw_state));
});
goog.exportSymbol('stuff.cycloid.cycloid', stuff.cycloid.cycloid);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),stuff.cycloid.cycloid,new cljs.core.Keyword(null,"host-id","host-id",742376279),"cycloid"], null));
}
