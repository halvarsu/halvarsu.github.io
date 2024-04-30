// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cycloid.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('goog.string.format');
cycloid.core.linspace = (function cycloid$core$linspace(start,stop,num){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,window.Infinity,((stop - start) / (num - (1)))));
});
cycloid.core.inc_if = (function cycloid$core$inc_if(v,bool){
if(cljs.core.truth_(bool)){
return (v + (1));
} else {
return v;
}
});
cycloid.core.update_state = (function cycloid$core$update_state(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame], null),cycloid.core.inc_if,cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$i,(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(state) / cljs.core.cst$kw$frames_DASH_per_DASH_rev.cljs$core$IFn$_invoke$arity$1(state)));
});
cycloid.core.draw_state = (function cycloid$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1(0.0);

quil.core.stroke.cljs$core$IFn$_invoke$arity$3(0.3,0.7,0.7);

quil.core.fill.cljs$core$IFn$_invoke$arity$1(0.3);

quil.core.text.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$point_DASH_count.cljs$core$IFn$_invoke$arity$1(state))].join(''),(10),(20));

quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(state));

var i = cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(state);
var r = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(state);
var point_count = cljs.core.cst$kw$point_DASH_count.cljs$core$IFn$_invoke$arity$1(state);
quil.core.text.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),(10),(10));

quil.core.translate.cljs$core$IFn$_invoke$arity$2((quil.core.width() / (2)),(quil.core.height() / (2)));

var seq__10814_10818 = cljs.core.seq(cycloid.core.linspace((0),((20) * quil.core.PI),point_count));
var chunk__10815_10819 = null;
var count__10816_10820 = (0);
var i__10817_10821 = (0);
while(true){
if((i__10817_10821 < count__10816_10820)){
var t_10822 = chunk__10815_10819.cljs$core$IIndexed$_nth$arity$2(null,i__10817_10821);
var c_10823 = quil.core.cos((i * t_10822));
var s_10824 = quil.core.sin((i * t_10822));
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(((((2) * r) * c_10823) + (r * quil.core.cos(t_10822))),((((2) * r) * s_10824) + (r * quil.core.sin(t_10822))));

var G__10825 = seq__10814_10818;
var G__10826 = chunk__10815_10819;
var G__10827 = count__10816_10820;
var G__10828 = (i__10817_10821 + (1));
seq__10814_10818 = G__10825;
chunk__10815_10819 = G__10826;
count__10816_10820 = G__10827;
i__10817_10821 = G__10828;
continue;
} else {
var temp__4657__auto___10829 = cljs.core.seq(seq__10814_10818);
if(temp__4657__auto___10829){
var seq__10814_10830__$1 = temp__4657__auto___10829;
if(cljs.core.chunked_seq_QMARK_(seq__10814_10830__$1)){
var c__7633__auto___10831 = cljs.core.chunk_first(seq__10814_10830__$1);
var G__10832 = cljs.core.chunk_rest(seq__10814_10830__$1);
var G__10833 = c__7633__auto___10831;
var G__10834 = cljs.core.count(c__7633__auto___10831);
var G__10835 = (0);
seq__10814_10818 = G__10832;
chunk__10815_10819 = G__10833;
count__10816_10820 = G__10834;
i__10817_10821 = G__10835;
continue;
} else {
var t_10836 = cljs.core.first(seq__10814_10830__$1);
var c_10837 = quil.core.cos((i * t_10836));
var s_10838 = quil.core.sin((i * t_10836));
quil.core.vertex.cljs$core$IFn$_invoke$arity$2(((((2) * r) * c_10837) + (r * quil.core.cos(t_10836))),((((2) * r) * s_10838) + (r * quil.core.sin(t_10836))));

var G__10839 = cljs.core.next(seq__10814_10830__$1);
var G__10840 = null;
var G__10841 = (0);
var G__10842 = (0);
seq__10814_10818 = G__10839;
chunk__10815_10819 = G__10840;
count__10816_10820 = G__10841;
i__10817_10821 = G__10842;
continue;
}
} else {
}
}
break;
}

quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.not(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1(state))){
return quil.core.no_loop();
} else {
return null;
}
});
cycloid.core.setup = (function cycloid$core$setup(){
quil.core.color_mode.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hsb,1.0);

quil.core.frame_rate((30));

quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.text.cljs$core$IFn$_invoke$arity$3("By halvarsu",(quil.core.width() - (80)),(quil.core.height() - (10)));

quil.core.stroke_weight((2));

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$play_QMARK_,false,cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$point_DASH_count,(50),cljs.core.cst$kw$i,(0),cljs.core.cst$kw$r,(72),cljs.core.cst$kw$frames_DASH_per_DASH_rev,(500),cljs.core.cst$kw$mode,cljs.core.cst$kw$points], null);
});
cycloid.core.mouse_click = (function cycloid$core$mouse_click(state,event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$play_QMARK_,cljs.core.not(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1(state)));
});
cycloid.core.button_choices = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$q,cljs.core.cst$kw$down,cljs.core.cst$kw$r,cljs.core.cst$kw$n,cljs.core.cst$kw$e,cljs.core.cst$kw$up,cljs.core.cst$kw$1,cljs.core.cst$kw$2,cljs.core.cst$kw$right,cljs.core.cst$kw$d,cljs.core.cst$kw$x,cljs.core.cst$kw$3,cljs.core.cst$kw$p,cljs.core.cst$kw$a,cljs.core.cst$kw$left],[(function (p1__10844_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10844_SHARP_,cljs.core.cst$kw$point_DASH_count,cljs.core._PLUS_,(50));
}),(function (p1__10854_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10854_SHARP_,cljs.core.cst$kw$r,cljs.core.dec);
}),(function (p1__10857_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10857_SHARP_,cljs.core.cst$kw$frame,(0));
}),(function (p1__10847_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10847_SHARP_,cljs.core.cst$kw$frame,cljs.core.inc);
}),(function (p1__10846_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10846_SHARP_,cljs.core.cst$kw$point_DASH_count,cljs.core._,(50));
}),(function (p1__10853_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10853_SHARP_,cljs.core.cst$kw$r,cljs.core.inc);
}),(function (p1__10850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10850_SHARP_,cljs.core.cst$kw$mode,cljs.core.cst$kw$points);
}),(function (p1__10851_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10851_SHARP_,cljs.core.cst$kw$mode,cljs.core.cst$kw$lines);
}),(function (p1__10856_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10856_SHARP_,cljs.core.cst$kw$frames_DASH_per_DASH_rev,cljs.core._PLUS_,(50));
}),(function (p1__10845_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10845_SHARP_,cljs.core.cst$kw$point_DASH_count,cljs.core.dec);
}),(function (p1__10849_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10849_SHARP_,cljs.core.cst$kw$play_QMARK_,cljs.core.not(cljs.core.cst$kw$play_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10849_SHARP_)));
}),(function (p1__10852_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10852_SHARP_,cljs.core.cst$kw$mode,cljs.core.cst$kw$triangles);
}),(function (p1__10848_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10848_SHARP_,cljs.core.cst$kw$frame,cljs.core.dec);
}),(function (p1__10843_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10843_SHARP_,cljs.core.cst$kw$point_DASH_count,cljs.core.inc);
}),(function (p1__10855_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10855_SHARP_,cljs.core.cst$kw$frames_DASH_per_DASH_rev,cljs.core._,(50));
})]);
cycloid.core.key_pressed = (function cycloid$core$key_pressed(state,event){
quil.core.start_loop();

var c = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event);
var func = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(cycloid.core.button_choices) : c.call(null,cycloid.core.button_choices));
if(cljs.core.truth_(func)){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(state) : func.call(null,state));
} else {
return state;
}
});
cycloid.core.cycloid = (function cycloid$core$cycloid(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"cycloid",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(cycloid.core.update_state))?(function() { 
var G__10858__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cycloid.core.update_state,args);
};
var G__10858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10859__i = 0, G__10859__a = new Array(arguments.length -  0);
while (G__10859__i < G__10859__a.length) {G__10859__a[G__10859__i] = arguments[G__10859__i + 0]; ++G__10859__i;}
  args = new cljs.core.IndexedSeq(G__10859__a,0);
} 
return G__10858__delegate.call(this,args);};
G__10858.cljs$lang$maxFixedArity = 0;
G__10858.cljs$lang$applyTo = (function (arglist__10860){
var args = cljs.core.seq(arglist__10860);
return G__10858__delegate(args);
});
G__10858.cljs$core$IFn$_invoke$arity$variadic = G__10858__delegate;
return G__10858;
})()
:cycloid.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1280),(800)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(cycloid.core.setup))?(function() { 
var G__10861__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cycloid.core.setup,args);
};
var G__10861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10862__i = 0, G__10862__a = new Array(arguments.length -  0);
while (G__10862__i < G__10862__a.length) {G__10862__a[G__10862__i] = arguments[G__10862__i + 0]; ++G__10862__i;}
  args = new cljs.core.IndexedSeq(G__10862__a,0);
} 
return G__10861__delegate.call(this,args);};
G__10861.cljs$lang$maxFixedArity = 0;
G__10861.cljs$lang$applyTo = (function (arglist__10863){
var args = cljs.core.seq(arglist__10863);
return G__10861__delegate(args);
});
G__10861.cljs$core$IFn$_invoke$arity$variadic = G__10861__delegate;
return G__10861;
})()
:cycloid.core.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(cycloid.core.mouse_click))?(function() { 
var G__10864__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cycloid.core.mouse_click,args);
};
var G__10864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10865__i = 0, G__10865__a = new Array(arguments.length -  0);
while (G__10865__i < G__10865__a.length) {G__10865__a[G__10865__i] = arguments[G__10865__i + 0]; ++G__10865__i;}
  args = new cljs.core.IndexedSeq(G__10865__a,0);
} 
return G__10864__delegate.call(this,args);};
G__10864.cljs$lang$maxFixedArity = 0;
G__10864.cljs$lang$applyTo = (function (arglist__10866){
var args = cljs.core.seq(arglist__10866);
return G__10864__delegate(args);
});
G__10864.cljs$core$IFn$_invoke$arity$variadic = G__10864__delegate;
return G__10864;
})()
:cycloid.core.mouse_click),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(cycloid.core.key_pressed))?(function() { 
var G__10867__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cycloid.core.key_pressed,args);
};
var G__10867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10868__i = 0, G__10868__a = new Array(arguments.length -  0);
while (G__10868__i < G__10868__a.length) {G__10868__a[G__10868__i] = arguments[G__10868__i + 0]; ++G__10868__i;}
  args = new cljs.core.IndexedSeq(G__10868__a,0);
} 
return G__10867__delegate.call(this,args);};
G__10867.cljs$lang$maxFixedArity = 0;
G__10867.cljs$lang$applyTo = (function (arglist__10869){
var args = cljs.core.seq(arglist__10869);
return G__10867__delegate(args);
});
G__10867.cljs$core$IFn$_invoke$arity$variadic = G__10867__delegate;
return G__10867;
})()
:cycloid.core.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(cycloid.core.draw_state))?(function() { 
var G__10870__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cycloid.core.draw_state,args);
};
var G__10870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10871__i = 0, G__10871__a = new Array(arguments.length -  0);
while (G__10871__i < G__10871__a.length) {G__10871__a[G__10871__i] = arguments[G__10871__i + 0]; ++G__10871__i;}
  args = new cljs.core.IndexedSeq(G__10871__a,0);
} 
return G__10870__delegate.call(this,args);};
G__10870.cljs$lang$maxFixedArity = 0;
G__10870.cljs$lang$applyTo = (function (arglist__10872){
var args = cljs.core.seq(arglist__10872);
return G__10870__delegate(args);
});
G__10870.cljs$core$IFn$_invoke$arity$variadic = G__10870__delegate;
return G__10870;
})()
:cycloid.core.draw_state)], 0));
});
goog.exportSymbol('cycloid.core.cycloid', cycloid.core.cycloid);

if(cljs.core.truth_(cljs.core.some((function (p1__9881__9882__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__9881__9882__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cycloid.core.cycloid,cljs.core.cst$kw$host_DASH_id,"cycloid"], null));
}
