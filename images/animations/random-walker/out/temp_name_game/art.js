// Compiled by ClojureScript 1.9.473 {}
goog.provide('temp_name_game.art');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
temp_name_game.art.width = (1280);
temp_name_game.art.height = (800);
temp_name_game.art.step = (4);
temp_name_game.art.abs = (function temp_name_game$art$abs(v){
if((v < (0))){
return (- v);
} else {
return v;
}
});
temp_name_game.art.legal_y_QMARK_ = (function temp_name_game$art$legal_y_QMARK_(y){
return (temp_name_game.art.abs.call(null,y) <= ((temp_name_game.art.height / (2)) - temp_name_game.art.step));
});
temp_name_game.art.legal_x_QMARK_ = (function temp_name_game$art$legal_x_QMARK_(x){
return (temp_name_game.art.abs.call(null,x) <= ((temp_name_game.art.width / (2)) - temp_name_game.art.step));
});
temp_name_game.art.legal_pos_QMARK_ = (function temp_name_game$art$legal_pos_QMARK_(p__8475){
var vec__8479 = p__8475;
var x = cljs.core.nth.call(null,vec__8479,(0),null);
var y = cljs.core.nth.call(null,vec__8479,(1),null);
var and__6802__auto__ = temp_name_game.art.legal_x_QMARK_.call(null,x);
if(cljs.core.truth_(and__6802__auto__)){
return temp_name_game.art.legal_y_QMARK_.call(null,y);
} else {
return and__6802__auto__;
}
});
temp_name_game.art.update_pos = (function temp_name_game$art$update_pos(pos,vel,speed){
var new_pos = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,(function (p1__8482_SHARP_){
return (speed * p1__8482_SHARP_);
}),vel)));
if(cljs.core.truth_(temp_name_game.art.legal_pos_QMARK_.call(null,new_pos))){
return new_pos;
} else {
return pos;
}
});
temp_name_game.art.update_vel = (function temp_name_game$art$update_vel(vel){
var d = cljs.core.rand_int.call(null,(4));
if(cljs.core._EQ_.call(null,d,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
if(cljs.core._EQ_.call(null,d,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
if(cljs.core._EQ_.call(null,d,(2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core._EQ_.call(null,d,(3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
return null;
}
}
}
}
});
temp_name_game.art.update_state = (function temp_name_game$art$update_state(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220),temp_name_game.art.update_pos,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"vel","vel",-110770822),temp_name_game.art.update_vel);
});
temp_name_game.art.draw_char = (function temp_name_game$art$draw_char(state){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(80),(160),(160),(100));

var vec__8486 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(state);
var x = cljs.core.nth.call(null,vec__8486,(0),null);
var y = cljs.core.nth.call(null,vec__8486,(1),null);
var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(temp_name_game.art.width / (2)),(temp_name_game.art.height / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

return quil.core.ellipse.call(null,x,y,(4),(4));
}finally {quil.core.pop_matrix.call(null);
}});
temp_name_game.art.draw_border = (function temp_name_game$art$draw_border(state){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var step_8505 = new cljs.core.Keyword(null,"pix-per-unit","pix-per-unit",-107655645).cljs$core$IFn$_invoke$arity$1(state);
var roundoff_8506 = (step_8505 * 0.2);
var seq__8497_8507 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),temp_name_game.art.width,step_8505));
var chunk__8498_8508 = null;
var count__8499_8509 = (0);
var i__8500_8510 = (0);
while(true){
if((i__8500_8510 < count__8499_8509)){
var x_8511 = cljs.core._nth.call(null,chunk__8498_8508,i__8500_8510);
quil.core.rect.call(null,x_8511,(0),step_8505,step_8505,roundoff_8506);

quil.core.rect.call(null,x_8511,(temp_name_game.art.height - step_8505),step_8505,step_8505,roundoff_8506);

var G__8512 = seq__8497_8507;
var G__8513 = chunk__8498_8508;
var G__8514 = count__8499_8509;
var G__8515 = (i__8500_8510 + (1));
seq__8497_8507 = G__8512;
chunk__8498_8508 = G__8513;
count__8499_8509 = G__8514;
i__8500_8510 = G__8515;
continue;
} else {
var temp__4657__auto___8516 = cljs.core.seq.call(null,seq__8497_8507);
if(temp__4657__auto___8516){
var seq__8497_8517__$1 = temp__4657__auto___8516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_8517__$1)){
var c__7633__auto___8518 = cljs.core.chunk_first.call(null,seq__8497_8517__$1);
var G__8519 = cljs.core.chunk_rest.call(null,seq__8497_8517__$1);
var G__8520 = c__7633__auto___8518;
var G__8521 = cljs.core.count.call(null,c__7633__auto___8518);
var G__8522 = (0);
seq__8497_8507 = G__8519;
chunk__8498_8508 = G__8520;
count__8499_8509 = G__8521;
i__8500_8510 = G__8522;
continue;
} else {
var x_8523 = cljs.core.first.call(null,seq__8497_8517__$1);
quil.core.rect.call(null,x_8523,(0),step_8505,step_8505,roundoff_8506);

quil.core.rect.call(null,x_8523,(temp_name_game.art.height - step_8505),step_8505,step_8505,roundoff_8506);

var G__8524 = cljs.core.next.call(null,seq__8497_8517__$1);
var G__8525 = null;
var G__8526 = (0);
var G__8527 = (0);
seq__8497_8507 = G__8524;
chunk__8498_8508 = G__8525;
count__8499_8509 = G__8526;
i__8500_8510 = G__8527;
continue;
}
} else {
}
}
break;
}

var seq__8501_8528 = cljs.core.seq.call(null,cljs.core.range.call(null,step_8505,temp_name_game.art.height,step_8505));
var chunk__8502_8529 = null;
var count__8503_8530 = (0);
var i__8504_8531 = (0);
while(true){
if((i__8504_8531 < count__8503_8530)){
var y_8532 = cljs.core._nth.call(null,chunk__8502_8529,i__8504_8531);
quil.core.rect.call(null,(0),y_8532,step_8505,step_8505,roundoff_8506);

quil.core.rect.call(null,(temp_name_game.art.width - step_8505),y_8532,step_8505,step_8505,roundoff_8506);

var G__8533 = seq__8501_8528;
var G__8534 = chunk__8502_8529;
var G__8535 = count__8503_8530;
var G__8536 = (i__8504_8531 + (1));
seq__8501_8528 = G__8533;
chunk__8502_8529 = G__8534;
count__8503_8530 = G__8535;
i__8504_8531 = G__8536;
continue;
} else {
var temp__4657__auto___8537 = cljs.core.seq.call(null,seq__8501_8528);
if(temp__4657__auto___8537){
var seq__8501_8538__$1 = temp__4657__auto___8537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_8538__$1)){
var c__7633__auto___8539 = cljs.core.chunk_first.call(null,seq__8501_8538__$1);
var G__8540 = cljs.core.chunk_rest.call(null,seq__8501_8538__$1);
var G__8541 = c__7633__auto___8539;
var G__8542 = cljs.core.count.call(null,c__7633__auto___8539);
var G__8543 = (0);
seq__8501_8528 = G__8540;
chunk__8502_8529 = G__8541;
count__8503_8530 = G__8542;
i__8504_8531 = G__8543;
continue;
} else {
var y_8544 = cljs.core.first.call(null,seq__8501_8538__$1);
quil.core.rect.call(null,(0),y_8544,step_8505,step_8505,roundoff_8506);

quil.core.rect.call(null,(temp_name_game.art.width - step_8505),y_8544,step_8505,step_8505,roundoff_8506);

var G__8545 = cljs.core.next.call(null,seq__8501_8538__$1);
var G__8546 = null;
var G__8547 = (0);
var G__8548 = (0);
seq__8501_8528 = G__8545;
chunk__8502_8529 = G__8546;
count__8503_8530 = G__8547;
i__8504_8531 = G__8548;
continue;
}
} else {
}
}
break;
}

return state;
});
temp_name_game.art.draw_state = (function temp_name_game$art$draw_state(state){
var i_8549 = (0);
var new_state_8550 = state;
while(true){
if((i_8549 < (200000))){
temp_name_game.art.draw_char.call(null,new_state_8550);

var G__8551 = (i_8549 + (1));
var G__8552 = temp_name_game.art.update_state.call(null,new_state_8550);
i_8549 = G__8551;
new_state_8550 = G__8552;
continue;
} else {
}
break;
}

quil.core.no_loop.call(null);

return state;
});
temp_name_game.art.setup = (function temp_name_game$art$setup(){
quil.core.frame_rate.call(null,(30));

var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pix-per-unit","pix-per-unit",-107655645),temp_name_game.art.step,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(temp_name_game.art.step / (2)),(temp_name_game.art.step / (2))], null),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mass","mass",-2138950046),(10),new cljs.core.Keyword(null,"speed","speed",1257663751),temp_name_game.art.step], null);
temp_name_game.art.draw_border.call(null,state);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"graphic","graphic",262278575),quil.core.create_graphics.call(null,(100),temp_name_game.art.height));
});
temp_name_game.art.random_walker = (function temp_name_game$art$random_walker(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"random-walker",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,temp_name_game.art.update_state))?(function() { 
var G__8553__delegate = function (args){
return cljs.core.apply.call(null,temp_name_game.art.update_state,args);
};
var G__8553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8554__i = 0, G__8554__a = new Array(arguments.length -  0);
while (G__8554__i < G__8554__a.length) {G__8554__a[G__8554__i] = arguments[G__8554__i + 0]; ++G__8554__i;}
  args = new cljs.core.IndexedSeq(G__8554__a,0);
} 
return G__8553__delegate.call(this,args);};
G__8553.cljs$lang$maxFixedArity = 0;
G__8553.cljs$lang$applyTo = (function (arglist__8555){
var args = cljs.core.seq(arglist__8555);
return G__8553__delegate(args);
});
G__8553.cljs$core$IFn$_invoke$arity$variadic = G__8553__delegate;
return G__8553;
})()
:temp_name_game.art.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [temp_name_game.art.width,temp_name_game.art.height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,temp_name_game.art.setup))?(function() { 
var G__8556__delegate = function (args){
return cljs.core.apply.call(null,temp_name_game.art.setup,args);
};
var G__8556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8557__i = 0, G__8557__a = new Array(arguments.length -  0);
while (G__8557__i < G__8557__a.length) {G__8557__a[G__8557__i] = arguments[G__8557__i + 0]; ++G__8557__i;}
  args = new cljs.core.IndexedSeq(G__8557__a,0);
} 
return G__8556__delegate.call(this,args);};
G__8556.cljs$lang$maxFixedArity = 0;
G__8556.cljs$lang$applyTo = (function (arglist__8558){
var args = cljs.core.seq(arglist__8558);
return G__8556__delegate(args);
});
G__8556.cljs$core$IFn$_invoke$arity$variadic = G__8556__delegate;
return G__8556;
})()
:temp_name_game.art.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,temp_name_game.art.draw_state))?(function() { 
var G__8559__delegate = function (args){
return cljs.core.apply.call(null,temp_name_game.art.draw_state,args);
};
var G__8559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8560__i = 0, G__8560__a = new Array(arguments.length -  0);
while (G__8560__i < G__8560__a.length) {G__8560__a[G__8560__i] = arguments[G__8560__i + 0]; ++G__8560__i;}
  args = new cljs.core.IndexedSeq(G__8560__a,0);
} 
return G__8559__delegate.call(this,args);};
G__8559.cljs$lang$maxFixedArity = 0;
G__8559.cljs$lang$applyTo = (function (arglist__8561){
var args = cljs.core.seq(arglist__8561);
return G__8559__delegate(args);
});
G__8559.cljs$core$IFn$_invoke$arity$variadic = G__8559__delegate;
return G__8559;
})()
:temp_name_game.art.draw_state));
});
goog.exportSymbol('temp_name_game.art.random_walker', temp_name_game.art.random_walker);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),temp_name_game.art.random_walker,new cljs.core.Keyword(null,"host-id","host-id",742376279),"random-walker"], null));
}

//# sourceMappingURL=art.js.map