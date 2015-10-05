// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11244 = arguments.length;
var i__5622__auto___11245 = (0);
while(true){
if((i__5622__auto___11245 < len__5621__auto___11244)){
args__5628__auto__.push((arguments[i__5622__auto___11245]));

var G__11246 = (i__5622__auto___11245 + (1));
i__5622__auto___11245 = G__11246;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.content.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),body);
});
});

kioo.common.content.cljs$lang$maxFixedArity = (0);

kioo.common.content.cljs$lang$applyTo = (function (seq11243){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11243));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11248 = arguments.length;
var i__5622__auto___11249 = (0);
while(true){
if((i__5622__auto___11249 < len__5621__auto___11248)){
args__5628__auto__.push((arguments[i__5622__auto___11249]));

var G__11250 = (i__5622__auto___11249 + (1));
i__5622__auto___11249 = G__11250;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.append.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.append.cljs$lang$maxFixedArity = (0);

kioo.common.append.cljs$lang$applyTo = (function (seq11247){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11247));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11252 = arguments.length;
var i__5622__auto___11253 = (0);
while(true){
if((i__5622__auto___11253 < len__5621__auto___11252)){
args__5628__auto__.push((arguments[i__5622__auto___11253]));

var G__11254 = (i__5622__auto___11253 + (1));
i__5622__auto___11253 = G__11254;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,body,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
});
});

kioo.common.prepend.cljs$lang$maxFixedArity = (0);

kioo.common.prepend.cljs$lang$applyTo = (function (seq11251){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11251));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11256 = arguments.length;
var i__5622__auto___11257 = (0);
while(true){
if((i__5622__auto___11257 < len__5621__auto___11256)){
args__5628__auto__.push((arguments[i__5622__auto___11257]));

var G__11258 = (i__5622__auto___11257 + (1));
i__5622__auto___11257 = G__11258;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return body;
});
});

kioo.common.substitute.cljs$lang$maxFixedArity = (0);

kioo.common.substitute.cljs$lang$applyTo = (function (seq11255){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11255));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11262 = arguments.length;
var i__5622__auto___11263 = (0);
while(true){
if((i__5622__auto___11263 < len__5621__auto___11262)){
args__5628__auto__.push((arguments[i__5622__auto___11263]));

var G__11264 = (i__5622__auto___11263 + (1));
i__5622__auto___11263 = G__11264;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,((function (els){
return (function (n,p__11260){
var vec__11261 = p__11260;
var k = cljs.core.nth.call(null,vec__11261,(0),null);
var v = cljs.core.nth.call(null,vec__11261,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq11259){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11259));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11266 = arguments.length;
var i__5622__auto___11267 = (0);
while(true){
if((i__5622__auto___11267 < len__5621__auto___11266)){
args__5628__auto__.push((arguments[i__5622__auto___11267]));

var G__11268 = (i__5622__auto___11267 + (1));
i__5622__auto___11267 = G__11268;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,(function (n,k){
return cljs.core.dissoc.call(null,n,k);
}),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.remove_attr.cljs$lang$maxFixedArity = (0);

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq11265){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11265));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11272 = arguments.length;
var i__5622__auto___11273 = (0);
while(true){
if((i__5622__auto___11273 < len__5621__auto___11272)){
args__5628__auto__.push((arguments[i__5622__auto___11273]));

var G__11274 = (i__5622__auto___11273 + (1));
i__5622__auto___11273 = G__11274;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.reduce.call(null,(function (p1__11270_SHARP_,p2__11269_SHARP_){
return p2__11269_SHARP_.call(null,p1__11270_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq11271){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11271));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11279 = arguments.length;
var i__5622__auto___11280 = (0);
while(true){
if((i__5622__auto___11280 < len__5621__auto___11279)){
args__5628__auto__.push((arguments[i__5622__auto___11280]));

var G__11281 = (i__5622__auto___11280 + (1));
i__5622__auto___11280 = G__11281;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
var mp = cljs.core.reduce.call(null,((function (els){
return (function (m,p__11277){
var vec__11278 = p__11277;
var k = cljs.core.nth.call(null,vec__11278,(0),null);
var v = cljs.core.nth.call(null,vec__11278,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__11275_SHARP_){
return cljs.core.merge.call(null,p1__11275_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq11276){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11276));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11285 = arguments.length;
var i__5622__auto___11286 = (0);
while(true){
if((i__5622__auto___11286 < len__5621__auto___11285)){
args__5628__auto__.push((arguments[i__5622__auto___11286]));

var G__11287 = (i__5622__auto___11286 + (1));
i__5622__auto___11286 = G__11287;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
var style = cljs.core.reduce.call(null,(function (p1__11282_SHARP_,p2__11283_SHARP_){
return cljs.core.dissoc.call(null,p1__11282_SHARP_,cljs.core.name.call(null,p2__11283_SHARP_),p2__11283_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq11284){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11284));
});
kioo.common.get_class_regex = (function kioo$common$get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function kioo$common$has_class_QMARK_(cur_cls,cls){
var and__4551__auto__ = cur_cls;
if(cljs.core.truth_(and__4551__auto__)){
return cljs.core.re_find.call(null,kioo.common.get_class_regex.call(null,cls),cur_cls);
} else {
return and__4551__auto__;
}
});
kioo.common.set_class = (function kioo$common$set_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11291 = arguments.length;
var i__5622__auto___11292 = (0);
while(true){
if((i__5622__auto___11292 < len__5621__auto___11291)){
args__5628__auto__.push((arguments[i__5622__auto___11292]));

var G__11293 = (i__5622__auto___11292 + (1));
i__5622__auto___11292 = G__11293;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11288_SHARP_,p2__11289_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11288_SHARP_,p2__11289_SHARP_))){
return p1__11288_SHARP_;
} else {
return [cljs.core.str(p1__11288_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11289_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq11290){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11290));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11297 = arguments.length;
var i__5622__auto___11298 = (0);
while(true){
if((i__5622__auto___11298 < len__5621__auto___11297)){
args__5628__auto__.push((arguments[i__5622__auto___11298]));

var G__11299 = (i__5622__auto___11298 + (1));
i__5622__auto___11298 = G__11299;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11294_SHARP_,p2__11295_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11294_SHARP_,p2__11295_SHARP_))){
return p1__11294_SHARP_;
} else {
return [cljs.core.str(p1__11294_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11295_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq11296){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11296));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11303 = arguments.length;
var i__5622__auto___11304 = (0);
while(true){
if((i__5622__auto___11304 < len__5621__auto___11303)){
args__5628__auto__.push((arguments[i__5622__auto___11304]));

var G__11305 = (i__5622__auto___11304 + (1));
i__5622__auto___11304 = G__11305;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11300_SHARP_,p2__11301_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11300_SHARP_,p2__11301_SHARP_))){
return clojure.string.replace.call(null,p1__11300_SHARP_,kioo.common.get_class_regex.call(null,p2__11301_SHARP_)," ");
} else {
return p1__11300_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq11302){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11302));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
