// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11072 = arguments.length;
var i__5622__auto___11073 = (0);
while(true){
if((i__5622__auto___11073 < len__5621__auto___11072)){
args__5628__auto__.push((arguments[i__5622__auto___11073]));

var G__11074 = (i__5622__auto___11073 + (1));
i__5622__auto___11073 = G__11074;
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

kioo.common.content.cljs$lang$applyTo = (function (seq11071){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11071));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11076 = arguments.length;
var i__5622__auto___11077 = (0);
while(true){
if((i__5622__auto___11077 < len__5621__auto___11076)){
args__5628__auto__.push((arguments[i__5622__auto___11077]));

var G__11078 = (i__5622__auto___11077 + (1));
i__5622__auto___11077 = G__11078;
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

kioo.common.append.cljs$lang$applyTo = (function (seq11075){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11075));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11080 = arguments.length;
var i__5622__auto___11081 = (0);
while(true){
if((i__5622__auto___11081 < len__5621__auto___11080)){
args__5628__auto__.push((arguments[i__5622__auto___11081]));

var G__11082 = (i__5622__auto___11081 + (1));
i__5622__auto___11081 = G__11082;
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

kioo.common.prepend.cljs$lang$applyTo = (function (seq11079){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11079));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11084 = arguments.length;
var i__5622__auto___11085 = (0);
while(true){
if((i__5622__auto___11085 < len__5621__auto___11084)){
args__5628__auto__.push((arguments[i__5622__auto___11085]));

var G__11086 = (i__5622__auto___11085 + (1));
i__5622__auto___11085 = G__11086;
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

kioo.common.substitute.cljs$lang$applyTo = (function (seq11083){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11083));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11090 = arguments.length;
var i__5622__auto___11091 = (0);
while(true){
if((i__5622__auto___11091 < len__5621__auto___11090)){
args__5628__auto__.push((arguments[i__5622__auto___11091]));

var G__11092 = (i__5622__auto___11091 + (1));
i__5622__auto___11091 = G__11092;
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
return (function (n,p__11088){
var vec__11089 = p__11088;
var k = cljs.core.nth.call(null,vec__11089,(0),null);
var v = cljs.core.nth.call(null,vec__11089,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq11087){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11087));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11094 = arguments.length;
var i__5622__auto___11095 = (0);
while(true){
if((i__5622__auto___11095 < len__5621__auto___11094)){
args__5628__auto__.push((arguments[i__5622__auto___11095]));

var G__11096 = (i__5622__auto___11095 + (1));
i__5622__auto___11095 = G__11096;
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

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq11093){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11093));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11100 = arguments.length;
var i__5622__auto___11101 = (0);
while(true){
if((i__5622__auto___11101 < len__5621__auto___11100)){
args__5628__auto__.push((arguments[i__5622__auto___11101]));

var G__11102 = (i__5622__auto___11101 + (1));
i__5622__auto___11101 = G__11102;
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
return cljs.core.reduce.call(null,(function (p1__11098_SHARP_,p2__11097_SHARP_){
return p2__11097_SHARP_.call(null,p1__11098_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq11099){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11099));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11107 = arguments.length;
var i__5622__auto___11108 = (0);
while(true){
if((i__5622__auto___11108 < len__5621__auto___11107)){
args__5628__auto__.push((arguments[i__5622__auto___11108]));

var G__11109 = (i__5622__auto___11108 + (1));
i__5622__auto___11108 = G__11109;
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
return (function (m,p__11105){
var vec__11106 = p__11105;
var k = cljs.core.nth.call(null,vec__11106,(0),null);
var v = cljs.core.nth.call(null,vec__11106,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__11103_SHARP_){
return cljs.core.merge.call(null,p1__11103_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq11104){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11104));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11113 = arguments.length;
var i__5622__auto___11114 = (0);
while(true){
if((i__5622__auto___11114 < len__5621__auto___11113)){
args__5628__auto__.push((arguments[i__5622__auto___11114]));

var G__11115 = (i__5622__auto___11114 + (1));
i__5622__auto___11114 = G__11115;
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
var style = cljs.core.reduce.call(null,(function (p1__11110_SHARP_,p2__11111_SHARP_){
return cljs.core.dissoc.call(null,p1__11110_SHARP_,cljs.core.name.call(null,p2__11111_SHARP_),p2__11111_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq11112){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11112));
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
var len__5621__auto___11119 = arguments.length;
var i__5622__auto___11120 = (0);
while(true){
if((i__5622__auto___11120 < len__5621__auto___11119)){
args__5628__auto__.push((arguments[i__5622__auto___11120]));

var G__11121 = (i__5622__auto___11120 + (1));
i__5622__auto___11120 = G__11121;
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
var new_class = cljs.core.reduce.call(null,(function (p1__11116_SHARP_,p2__11117_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11116_SHARP_,p2__11117_SHARP_))){
return p1__11116_SHARP_;
} else {
return [cljs.core.str(p1__11116_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11117_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq11118){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11118));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11125 = arguments.length;
var i__5622__auto___11126 = (0);
while(true){
if((i__5622__auto___11126 < len__5621__auto___11125)){
args__5628__auto__.push((arguments[i__5622__auto___11126]));

var G__11127 = (i__5622__auto___11126 + (1));
i__5622__auto___11126 = G__11127;
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
var new_class = cljs.core.reduce.call(null,(function (p1__11122_SHARP_,p2__11123_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11122_SHARP_,p2__11123_SHARP_))){
return p1__11122_SHARP_;
} else {
return [cljs.core.str(p1__11122_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11123_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq11124){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11124));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11131 = arguments.length;
var i__5622__auto___11132 = (0);
while(true){
if((i__5622__auto___11132 < len__5621__auto___11131)){
args__5628__auto__.push((arguments[i__5622__auto___11132]));

var G__11133 = (i__5622__auto___11132 + (1));
i__5622__auto___11132 = G__11133;
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
var new_class = cljs.core.reduce.call(null,(function (p1__11128_SHARP_,p2__11129_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11128_SHARP_,p2__11129_SHARP_))){
return clojure.string.replace.call(null,p1__11128_SHARP_,kioo.common.get_class_regex.call(null,p2__11129_SHARP_)," ");
} else {
return p1__11128_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq11130){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11130));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});

//# sourceMappingURL=common.js.map