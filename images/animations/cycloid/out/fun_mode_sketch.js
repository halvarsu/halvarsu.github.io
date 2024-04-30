// Compiled by ClojureScript 1.9.473 {}
goog.provide('fun_mode_sketch');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
fun_mode_sketch.min_r = (10);
fun_mode_sketch.setup = (function fun_mode_sketch$setup(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),fun_mode_sketch.min_r], null);
});
fun_mode_sketch.update = (function fun_mode_sketch$update(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.inc);
});
fun_mode_sketch.draw = (function fun_mode_sketch$draw(state){
quil.core.background.call(null,(255));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(state));
});
fun_mode_sketch.shrink = (function fun_mode_sketch$shrink(r){
var x__7150__auto__ = fun_mode_sketch.min_r;
var y__7151__auto__ = (r - (1));
return ((x__7150__auto__ > y__7151__auto__) ? x__7150__auto__ : y__7151__auto__);
});
fun_mode_sketch.mouse_moved = (function fun_mode_sketch$mouse_moved(state,event){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),fun_mode_sketch.shrink);
});
fun_mode_sketch.example = (function fun_mode_sketch$example(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"example",new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),((cljs.core.fn_QMARK_.call(null,fun_mode_sketch.mouse_moved))?(function() { 
var G__8475__delegate = function (args){
return cljs.core.apply.call(null,fun_mode_sketch.mouse_moved,args);
};
var G__8475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8476__i = 0, G__8476__a = new Array(arguments.length -  0);
while (G__8476__i < G__8476__a.length) {G__8476__a[G__8476__i] = arguments[G__8476__i + 0]; ++G__8476__i;}
  args = new cljs.core.IndexedSeq(G__8476__a,0);
} 
return G__8475__delegate.call(this,args);};
G__8475.cljs$lang$maxFixedArity = 0;
G__8475.cljs$lang$applyTo = (function (arglist__8477){
var args = cljs.core.seq(arglist__8477);
return G__8475__delegate(args);
});
G__8475.cljs$core$IFn$_invoke$arity$variadic = G__8475__delegate;
return G__8475;
})()
:fun_mode_sketch.mouse_moved),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,fun_mode_sketch.update))?(function() { 
var G__8478__delegate = function (args){
return cljs.core.apply.call(null,fun_mode_sketch.update,args);
};
var G__8478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8479__i = 0, G__8479__a = new Array(arguments.length -  0);
while (G__8479__i < G__8479__a.length) {G__8479__a[G__8479__i] = arguments[G__8479__i + 0]; ++G__8479__i;}
  args = new cljs.core.IndexedSeq(G__8479__a,0);
} 
return G__8478__delegate.call(this,args);};
G__8478.cljs$lang$maxFixedArity = 0;
G__8478.cljs$lang$applyTo = (function (arglist__8480){
var args = cljs.core.seq(arglist__8480);
return G__8478__delegate(args);
});
G__8478.cljs$core$IFn$_invoke$arity$variadic = G__8478__delegate;
return G__8478;
})()
:fun_mode_sketch.update),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,fun_mode_sketch.setup))?(function() { 
var G__8481__delegate = function (args){
return cljs.core.apply.call(null,fun_mode_sketch.setup,args);
};
var G__8481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8482__i = 0, G__8482__a = new Array(arguments.length -  0);
while (G__8482__i < G__8482__a.length) {G__8482__a[G__8482__i] = arguments[G__8482__i + 0]; ++G__8482__i;}
  args = new cljs.core.IndexedSeq(G__8482__a,0);
} 
return G__8481__delegate.call(this,args);};
G__8481.cljs$lang$maxFixedArity = 0;
G__8481.cljs$lang$applyTo = (function (arglist__8483){
var args = cljs.core.seq(arglist__8483);
return G__8481__delegate(args);
});
G__8481.cljs$core$IFn$_invoke$arity$variadic = G__8481__delegate;
return G__8481;
})()
:fun_mode_sketch.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,fun_mode_sketch.draw))?(function() { 
var G__8484__delegate = function (args){
return cljs.core.apply.call(null,fun_mode_sketch.draw,args);
};
var G__8484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8485__i = 0, G__8485__a = new Array(arguments.length -  0);
while (G__8485__i < G__8485__a.length) {G__8485__a[G__8485__i] = arguments[G__8485__i + 0]; ++G__8485__i;}
  args = new cljs.core.IndexedSeq(G__8485__a,0);
} 
return G__8484__delegate.call(this,args);};
G__8484.cljs$lang$maxFixedArity = 0;
G__8484.cljs$lang$applyTo = (function (arglist__8486){
var args = cljs.core.seq(arglist__8486);
return G__8484__delegate(args);
});
G__8484.cljs$core$IFn$_invoke$arity$variadic = G__8484__delegate;
return G__8484;
})()
:fun_mode_sketch.draw));
});
goog.exportSymbol('fun_mode_sketch.example', fun_mode_sketch.example);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),fun_mode_sketch.example,new cljs.core.Keyword(null,"host-id","host-id",742376279),"example"], null));
}

//# sourceMappingURL=fun_mode_sketch.js.map