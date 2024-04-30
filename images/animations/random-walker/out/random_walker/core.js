// Compiled by ClojureScript 1.7.170 {}
goog.provide('random_walker.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
random_walker.core.width = (880);
random_walker.core.height = (640);
random_walker.core.step = (8);
random_walker.core.abs = (function random_walker$core$abs(v){
if((v < (0))){
return (- v);
} else {
return v;
}
});
random_walker.core.legal_y_QMARK_ = (function random_walker$core$legal_y_QMARK_(y){
return (random_walker.core.abs.call(null,y) <= ((random_walker.core.height / (2)) - random_walker.core.step));
});
random_walker.core.legal_x_QMARK_ = (function random_walker$core$legal_x_QMARK_(x){
return (random_walker.core.abs.call(null,x) <= ((random_walker.core.width / (2)) - random_walker.core.step));
});
random_walker.core.legal_pos_QMARK_ = (function random_walker$core$legal_pos_QMARK_(p__7142){
var vec__7144 = p__7142;
var x = cljs.core.nth.call(null,vec__7144,(0),null);
var y = cljs.core.nth.call(null,vec__7144,(1),null);
var and__4673__auto__ = random_walker.core.legal_x_QMARK_.call(null,x);
if(cljs.core.truth_(and__4673__auto__)){
return random_walker.core.legal_y_QMARK_.call(null,y);
} else {
return and__4673__auto__;
}
});
random_walker.core.update_pos = (function random_walker$core$update_pos(pos,vel,speed){
var new_pos = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,(function (p1__7145_SHARP_){
return (speed * p1__7145_SHARP_);
}),vel)));
if(cljs.core.truth_(random_walker.core.legal_pos_QMARK_.call(null,new_pos))){
return new_pos;
} else {
return pos;
}
});
random_walker.core.update_vel = (function random_walker$core$update_vel(vel){
var choices = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(4),vel], null);
return cljs.core.get.call(null,choices,cljs.core.rand_int.call(null,(5)));
});
random_walker.core.update_state = (function random_walker$core$update_state(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220),random_walker.core.update_pos,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"vel","vel",-110770822),random_walker.core.update_vel);
});
random_walker.core.draw_char = (function random_walker$core$draw_char(state){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(80),(160),(160),(40));

var vec__7147 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(state);
var x = cljs.core.nth.call(null,vec__7147,(0),null);
var y = cljs.core.nth.call(null,vec__7147,(1),null);
var tr__7042__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(random_walker.core.width / (2)),(random_walker.core.height / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__7042__auto__);

return quil.core.ellipse.call(null,x,y,random_walker.core.step,random_walker.core.step);
}finally {quil.core.pop_matrix.call(null);
}});
random_walker.core.draw_border = (function random_walker$core$draw_border(state){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

var step_7164 = new cljs.core.Keyword(null,"pix-per-unit","pix-per-unit",-107655645).cljs$core$IFn$_invoke$arity$1(state);
var roundoff_7165 = (step_7164 * 0.2);
var seq__7156_7166 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),random_walker.core.width,step_7164));
var chunk__7157_7167 = null;
var count__7158_7168 = (0);
var i__7159_7169 = (0);
while(true){
if((i__7159_7169 < count__7158_7168)){
var x_7170 = cljs.core._nth.call(null,chunk__7157_7167,i__7159_7169);
quil.core.rect.call(null,x_7170,(0),step_7164,step_7164,roundoff_7165);

quil.core.rect.call(null,x_7170,(random_walker.core.height - step_7164),step_7164,step_7164,roundoff_7165);

var G__7171 = seq__7156_7166;
var G__7172 = chunk__7157_7167;
var G__7173 = count__7158_7168;
var G__7174 = (i__7159_7169 + (1));
seq__7156_7166 = G__7171;
chunk__7157_7167 = G__7172;
count__7158_7168 = G__7173;
i__7159_7169 = G__7174;
continue;
} else {
var temp__4657__auto___7175 = cljs.core.seq.call(null,seq__7156_7166);
if(temp__4657__auto___7175){
var seq__7156_7176__$1 = temp__4657__auto___7175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7156_7176__$1)){
var c__5488__auto___7177 = cljs.core.chunk_first.call(null,seq__7156_7176__$1);
var G__7178 = cljs.core.chunk_rest.call(null,seq__7156_7176__$1);
var G__7179 = c__5488__auto___7177;
var G__7180 = cljs.core.count.call(null,c__5488__auto___7177);
var G__7181 = (0);
seq__7156_7166 = G__7178;
chunk__7157_7167 = G__7179;
count__7158_7168 = G__7180;
i__7159_7169 = G__7181;
continue;
} else {
var x_7182 = cljs.core.first.call(null,seq__7156_7176__$1);
quil.core.rect.call(null,x_7182,(0),step_7164,step_7164,roundoff_7165);

quil.core.rect.call(null,x_7182,(random_walker.core.height - step_7164),step_7164,step_7164,roundoff_7165);

var G__7183 = cljs.core.next.call(null,seq__7156_7176__$1);
var G__7184 = null;
var G__7185 = (0);
var G__7186 = (0);
seq__7156_7166 = G__7183;
chunk__7157_7167 = G__7184;
count__7158_7168 = G__7185;
i__7159_7169 = G__7186;
continue;
}
} else {
}
}
break;
}

var seq__7160_7187 = cljs.core.seq.call(null,cljs.core.range.call(null,step_7164,random_walker.core.height,step_7164));
var chunk__7161_7188 = null;
var count__7162_7189 = (0);
var i__7163_7190 = (0);
while(true){
if((i__7163_7190 < count__7162_7189)){
var y_7191 = cljs.core._nth.call(null,chunk__7161_7188,i__7163_7190);
quil.core.rect.call(null,(0),y_7191,step_7164,step_7164,roundoff_7165);

quil.core.rect.call(null,(random_walker.core.width - step_7164),y_7191,step_7164,step_7164,roundoff_7165);

var G__7192 = seq__7160_7187;
var G__7193 = chunk__7161_7188;
var G__7194 = count__7162_7189;
var G__7195 = (i__7163_7190 + (1));
seq__7160_7187 = G__7192;
chunk__7161_7188 = G__7193;
count__7162_7189 = G__7194;
i__7163_7190 = G__7195;
continue;
} else {
var temp__4657__auto___7196 = cljs.core.seq.call(null,seq__7160_7187);
if(temp__4657__auto___7196){
var seq__7160_7197__$1 = temp__4657__auto___7196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7160_7197__$1)){
var c__5488__auto___7198 = cljs.core.chunk_first.call(null,seq__7160_7197__$1);
var G__7199 = cljs.core.chunk_rest.call(null,seq__7160_7197__$1);
var G__7200 = c__5488__auto___7198;
var G__7201 = cljs.core.count.call(null,c__5488__auto___7198);
var G__7202 = (0);
seq__7160_7187 = G__7199;
chunk__7161_7188 = G__7200;
count__7162_7189 = G__7201;
i__7163_7190 = G__7202;
continue;
} else {
var y_7203 = cljs.core.first.call(null,seq__7160_7197__$1);
quil.core.rect.call(null,(0),y_7203,step_7164,step_7164,roundoff_7165);

quil.core.rect.call(null,(random_walker.core.width - step_7164),y_7203,step_7164,step_7164,roundoff_7165);

var G__7204 = cljs.core.next.call(null,seq__7160_7197__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7160_7187 = G__7204;
chunk__7161_7188 = G__7205;
count__7162_7189 = G__7206;
i__7163_7190 = G__7207;
continue;
}
} else {
}
}
break;
}

return state;
});
random_walker.core.draw_state = (function random_walker$core$draw_state(state){
var i_7208 = (0);
var new_state_7209 = state;
while(true){
if((i_7208 < (10000))){
random_walker.core.draw_char.call(null,new_state_7209);

var G__7210 = (i_7208 + (1));
var G__7211 = random_walker.core.update_state.call(null,new_state_7209);
i_7208 = G__7210;
new_state_7209 = G__7211;
continue;
} else {
}
break;
}

quil.core.no_loop.call(null);

return state;
});
random_walker.core.init_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pix-per-unit","pix-per-unit",-107655645),random_walker.core.step,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(random_walker.core.step / (2)),(random_walker.core.step / (2))], null),new cljs.core.Keyword(null,"draw-points","draw-points",808385979),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),random_walker.core.step,new cljs.core.Keyword(null,"play?","play?",1098824048),true], null);
random_walker.core.setup = (function random_walker$core$setup(){
quil.core.frame_rate.call(null,(30));

var state = random_walker.core.init_state;
random_walker.core.draw_border.call(null,state);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"graphic","graphic",262278575),quil.core.create_graphics.call(null,(100),random_walker.core.height));
});
random_walker.core.random_walker = (function random_walker$core$random_walker(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"random-walker",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,random_walker.core.update_state))?(function() { 
var G__7212__delegate = function (args){
return cljs.core.apply.call(null,random_walker.core.update_state,args);
};
var G__7212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7213__i = 0, G__7213__a = new Array(arguments.length -  0);
while (G__7213__i < G__7213__a.length) {G__7213__a[G__7213__i] = arguments[G__7213__i + 0]; ++G__7213__i;}
  args = new cljs.core.IndexedSeq(G__7213__a,0);
} 
return G__7212__delegate.call(this,args);};
G__7212.cljs$lang$maxFixedArity = 0;
G__7212.cljs$lang$applyTo = (function (arglist__7214){
var args = cljs.core.seq(arglist__7214);
return G__7212__delegate(args);
});
G__7212.cljs$core$IFn$_invoke$arity$variadic = G__7212__delegate;
return G__7212;
})()
:random_walker.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_walker.core.width,random_walker.core.height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,random_walker.core.setup))?(function() { 
var G__7215__delegate = function (args){
return cljs.core.apply.call(null,random_walker.core.setup,args);
};
var G__7215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7216__i = 0, G__7216__a = new Array(arguments.length -  0);
while (G__7216__i < G__7216__a.length) {G__7216__a[G__7216__i] = arguments[G__7216__i + 0]; ++G__7216__i;}
  args = new cljs.core.IndexedSeq(G__7216__a,0);
} 
return G__7215__delegate.call(this,args);};
G__7215.cljs$lang$maxFixedArity = 0;
G__7215.cljs$lang$applyTo = (function (arglist__7217){
var args = cljs.core.seq(arglist__7217);
return G__7215__delegate(args);
});
G__7215.cljs$core$IFn$_invoke$arity$variadic = G__7215__delegate;
return G__7215;
})()
:random_walker.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,random_walker.core.draw_state))?(function() { 
var G__7218__delegate = function (args){
return cljs.core.apply.call(null,random_walker.core.draw_state,args);
};
var G__7218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7219__i = 0, G__7219__a = new Array(arguments.length -  0);
while (G__7219__i < G__7219__a.length) {G__7219__a[G__7219__i] = arguments[G__7219__i + 0]; ++G__7219__i;}
  args = new cljs.core.IndexedSeq(G__7219__a,0);
} 
return G__7218__delegate.call(this,args);};
G__7218.cljs$lang$maxFixedArity = 0;
G__7218.cljs$lang$applyTo = (function (arglist__7220){
var args = cljs.core.seq(arglist__7220);
return G__7218__delegate(args);
});
G__7218.cljs$core$IFn$_invoke$arity$variadic = G__7218__delegate;
return G__7218;
})()
:random_walker.core.draw_state));
});
goog.exportSymbol('random_walker.core.random_walker', random_walker.core.random_walker);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5925__5926__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5925__5926__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),random_walker.core.random_walker,new cljs.core.Keyword(null,"host-id","host-id",742376279),"random-walker"], null));
}

//# sourceMappingURL=core.js.map