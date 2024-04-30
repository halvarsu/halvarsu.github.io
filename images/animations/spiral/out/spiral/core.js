// Compiled by ClojureScript 1.9.293 {}
goog.provide('spiral.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
spiral.core.draw = (function spiral$core$draw(){
var t = (quil.core.frame_count.call(null) / (10));
var c = quil.core.map_range.call(null,quil.core.cos.call(null,t),(-1),(1),(0),(1));
var w2 = (quil.core.width.call(null) / (2));
var h2 = (quil.core.height.call(null) / (2));
var vec__8200 = spiral.core.f.call(null,t);
var x = cljs.core.nth.call(null,vec__8200,(0),null);
var y = cljs.core.nth.call(null,vec__8200,(1),null);
var tr__8120__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w2,h2], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8120__auto__);

quil.core.stroke.call(null,c,(1),(1));

return quil.core.point.call(null,x,y);
}finally {quil.core.pop_matrix.call(null);
}});
spiral.core.f = (function spiral$core$f(t){
var r = (((500) * quil.core.sin.call(null,t)) * quil.core.cos.call(null,t));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * quil.core.sin.call(null,(t * 0.22))),(r * quil.core.cos.call(null,(t * 0.22)))], null);
});
spiral.core.setup = (function spiral$core$setup(){
quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031),1.0);

quil.core.smooth.call(null,(8));

quil.core.frame_rate.call(null,(200));

quil.core.background.call(null,(0),(0),(0));

quil.core.text.call(null,"By halvarsu",(quil.core.width.call(null) - (80)),(quil.core.height.call(null) - (10)));

return quil.core.stroke_weight.call(null,(4));
});
spiral.core.spiral = (function spiral$core$spiral(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spiral",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spiral.core.setup))?(function() { 
var G__8203__delegate = function (args){
return cljs.core.apply.call(null,spiral.core.setup,args);
};
var G__8203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8204__i = 0, G__8204__a = new Array(arguments.length -  0);
while (G__8204__i < G__8204__a.length) {G__8204__a[G__8204__i] = arguments[G__8204__i + 0]; ++G__8204__i;}
  args = new cljs.core.IndexedSeq(G__8204__a,0);
} 
return G__8203__delegate.call(this,args);};
G__8203.cljs$lang$maxFixedArity = 0;
G__8203.cljs$lang$applyTo = (function (arglist__8205){
var args = cljs.core.seq(arglist__8205);
return G__8203__delegate(args);
});
G__8203.cljs$core$IFn$_invoke$arity$variadic = G__8203__delegate;
return G__8203;
})()
:spiral.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spiral.core.draw))?(function() { 
var G__8206__delegate = function (args){
return cljs.core.apply.call(null,spiral.core.draw,args);
};
var G__8206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8207__i = 0, G__8207__a = new Array(arguments.length -  0);
while (G__8207__i < G__8207__a.length) {G__8207__a[G__8207__i] = arguments[G__8207__i + 0]; ++G__8207__i;}
  args = new cljs.core.IndexedSeq(G__8207__a,0);
} 
return G__8206__delegate.call(this,args);};
G__8206.cljs$lang$maxFixedArity = 0;
G__8206.cljs$lang$applyTo = (function (arglist__8208){
var args = cljs.core.seq(arglist__8208);
return G__8206__delegate(args);
});
G__8206.cljs$core$IFn$_invoke$arity$variadic = G__8206__delegate;
return G__8206;
})()
:spiral.core.draw));
});
goog.exportSymbol('spiral.core.spiral', spiral.core.spiral);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7735__7736__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7735__7736__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spiral.core.spiral,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spiral"], null));
}

//# sourceMappingURL=core.js.map