// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args9933 = [];
var len__7927__auto___9936 = arguments.length;
var i__7928__auto___9937 = (0);
while(true){
if((i__7928__auto___9937 < len__7927__auto___9936)){
args9933.push((arguments[i__7928__auto___9937]));

var G__9938 = (i__7928__auto___9937 + (1));
i__7928__auto___9937 = G__9938;
continue;
} else {
}
break;
}

var G__9935 = args9933.length;
switch (G__9935) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9933.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__9952 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__9953 = null;
var count__9954 = (0);
var i__9955 = (0);
while(true){
if((i__9955 < count__9954)){
var vec__9956 = chunk__9953.cljs$core$IIndexed$_nth$arity$2(null,i__9955);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,(1),null);
var temp__4657__auto___9964 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___9964)){
var handler_9965 = temp__4657__auto___9964;
(prc[cljs.core.name(processing_name)] = ((function (seq__9952,chunk__9953,count__9954,i__9955,handler_9965,temp__4657__auto___9964,vec__9956,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_9959 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9965.cljs$core$IFn$_invoke$arity$0 ? handler_9965.cljs$core$IFn$_invoke$arity$0() : handler_9965.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9959;
}});})(seq__9952,chunk__9953,count__9954,i__9955,handler_9965,temp__4657__auto___9964,vec__9956,processing_name,quil_name))
);
} else {
}

var G__9966 = seq__9952;
var G__9967 = chunk__9953;
var G__9968 = count__9954;
var G__9969 = (i__9955 + (1));
seq__9952 = G__9966;
chunk__9953 = G__9967;
count__9954 = G__9968;
i__9955 = G__9969;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__9952);
if(temp__4657__auto__){
var seq__9952__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9952__$1)){
var c__7633__auto__ = cljs.core.chunk_first(seq__9952__$1);
var G__9970 = cljs.core.chunk_rest(seq__9952__$1);
var G__9971 = c__7633__auto__;
var G__9972 = cljs.core.count(c__7633__auto__);
var G__9973 = (0);
seq__9952 = G__9970;
chunk__9953 = G__9971;
count__9954 = G__9972;
i__9955 = G__9973;
continue;
} else {
var vec__9960 = cljs.core.first(seq__9952__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9960,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9960,(1),null);
var temp__4657__auto___9974__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___9974__$1)){
var handler_9975 = temp__4657__auto___9974__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__9952,chunk__9953,count__9954,i__9955,handler_9975,temp__4657__auto___9974__$1,vec__9960,processing_name,quil_name,seq__9952__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_9963 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9975.cljs$core$IFn$_invoke$arity$0 ? handler_9975.cljs$core$IFn$_invoke$arity$0() : handler_9975.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9963;
}});})(seq__9952,chunk__9953,count__9954,i__9955,handler_9975,temp__4657__auto___9974__$1,vec__9960,processing_name,quil_name,seq__9952__$1,temp__4657__auto__))
);
} else {
}

var G__9976 = cljs.core.next(seq__9952__$1);
var G__9977 = null;
var G__9978 = (0);
var G__9979 = (0);
seq__9952 = G__9976;
chunk__9953 = G__9977;
count__9954 = G__9978;
i__9955 = G__9979;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__9980_SHARP_){
return (p1__9980_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9980_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__9980_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__6814__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.array_seq([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7934__auto__ = [];
var len__7927__auto___9983 = arguments.length;
var i__7928__auto___9984 = (0);
while(true){
if((i__7928__auto___9984 < len__7927__auto___9983)){
args__7934__auto__.push((arguments[i__7928__auto___9984]));

var G__9985 = (i__7928__auto___9984 + (1));
i__7928__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var argseq__7935__auto__ = ((((0) < args__7934__auto__.length))?(new cljs.core.IndexedSeq(args__7934__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7935__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__9982 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__9982);
})();
var renderer = (function (){var or__6814__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq9981){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9981));
});

quil.sketch.sketch_init_list = (function (){var G__9986 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9986) : cljs.core.atom.call(null,G__9986));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__9999 = quil.sketch.empty_body_QMARK_();
var seq__9993_10000 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__9994_10001 = null;
var count__9995_10002 = (0);
var i__9996_10003 = (0);
while(true){
if((i__9996_10003 < count__9995_10002)){
var sk_10004 = chunk__9994_10001.cljs$core$IIndexed$_nth$arity$2(null,i__9996_10003);
if(cljs.core.truth_(add_elem_QMARK__9999)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_10004));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_10004).call(null);

var G__10005 = seq__9993_10000;
var G__10006 = chunk__9994_10001;
var G__10007 = count__9995_10002;
var G__10008 = (i__9996_10003 + (1));
seq__9993_10000 = G__10005;
chunk__9994_10001 = G__10006;
count__9995_10002 = G__10007;
i__9996_10003 = G__10008;
continue;
} else {
var temp__4657__auto___10009 = cljs.core.seq(seq__9993_10000);
if(temp__4657__auto___10009){
var seq__9993_10010__$1 = temp__4657__auto___10009;
if(cljs.core.chunked_seq_QMARK_(seq__9993_10010__$1)){
var c__7633__auto___10011 = cljs.core.chunk_first(seq__9993_10010__$1);
var G__10012 = cljs.core.chunk_rest(seq__9993_10010__$1);
var G__10013 = c__7633__auto___10011;
var G__10014 = cljs.core.count(c__7633__auto___10011);
var G__10015 = (0);
seq__9993_10000 = G__10012;
chunk__9994_10001 = G__10013;
count__9995_10002 = G__10014;
i__9996_10003 = G__10015;
continue;
} else {
var sk_10016 = cljs.core.first(seq__9993_10010__$1);
if(cljs.core.truth_(add_elem_QMARK__9999)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_10016));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_10016).call(null);

var G__10017 = cljs.core.next(seq__9993_10010__$1);
var G__10018 = null;
var G__10019 = (0);
var G__10020 = (0);
seq__9993_10000 = G__10017;
chunk__9994_10001 = G__10018;
count__9995_10002 = G__10019;
i__9996_10003 = G__10020;
continue;
}
} else {
}
}
break;
}

var G__9997 = quil.sketch.sketch_init_list;
var G__9998 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9997,G__9998) : cljs.core.reset_BANG_.call(null,G__9997,G__9998));
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
