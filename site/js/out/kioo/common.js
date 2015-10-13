// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11085 = arguments.length;
var i__5767__auto___11086 = (0);
while(true){
if((i__5767__auto___11086 < len__5766__auto___11085)){
args__5773__auto__.push((arguments[i__5767__auto___11086]));

var G__11087 = (i__5767__auto___11086 + (1));
i__5767__auto___11086 = G__11087;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.content.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),body);
});
});

kioo.common.content.cljs$lang$maxFixedArity = (0);

kioo.common.content.cljs$lang$applyTo = (function (seq11084){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11084));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11089 = arguments.length;
var i__5767__auto___11090 = (0);
while(true){
if((i__5767__auto___11090 < len__5766__auto___11089)){
args__5773__auto__.push((arguments[i__5767__auto___11090]));

var G__11091 = (i__5767__auto___11090 + (1));
i__5767__auto___11090 = G__11091;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.append.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.append.cljs$lang$maxFixedArity = (0);

kioo.common.append.cljs$lang$applyTo = (function (seq11088){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11088));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11093 = arguments.length;
var i__5767__auto___11094 = (0);
while(true){
if((i__5767__auto___11094 < len__5766__auto___11093)){
args__5773__auto__.push((arguments[i__5767__auto___11094]));

var G__11095 = (i__5767__auto___11094 + (1));
i__5767__auto___11094 = G__11095;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,body,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
});
});

kioo.common.prepend.cljs$lang$maxFixedArity = (0);

kioo.common.prepend.cljs$lang$applyTo = (function (seq11092){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11092));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11097 = arguments.length;
var i__5767__auto___11098 = (0);
while(true){
if((i__5767__auto___11098 < len__5766__auto___11097)){
args__5773__auto__.push((arguments[i__5767__auto___11098]));

var G__11099 = (i__5767__auto___11098 + (1));
i__5767__auto___11098 = G__11099;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return body;
});
});

kioo.common.substitute.cljs$lang$maxFixedArity = (0);

kioo.common.substitute.cljs$lang$applyTo = (function (seq11096){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11096));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11103 = arguments.length;
var i__5767__auto___11104 = (0);
while(true){
if((i__5767__auto___11104 < len__5766__auto___11103)){
args__5773__auto__.push((arguments[i__5767__auto___11104]));

var G__11105 = (i__5767__auto___11104 + (1));
i__5767__auto___11104 = G__11105;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,((function (els){
return (function (n,p__11101){
var vec__11102 = p__11101;
var k = cljs.core.nth.call(null,vec__11102,(0),null);
var v = cljs.core.nth.call(null,vec__11102,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq11100){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11100));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11107 = arguments.length;
var i__5767__auto___11108 = (0);
while(true){
if((i__5767__auto___11108 < len__5766__auto___11107)){
args__5773__auto__.push((arguments[i__5767__auto___11108]));

var G__11109 = (i__5767__auto___11108 + (1));
i__5767__auto___11108 = G__11109;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,(function (n,k){
return cljs.core.dissoc.call(null,n,k);
}),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.remove_attr.cljs$lang$maxFixedArity = (0);

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq11106){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11106));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11113 = arguments.length;
var i__5767__auto___11114 = (0);
while(true){
if((i__5767__auto___11114 < len__5766__auto___11113)){
args__5773__auto__.push((arguments[i__5767__auto___11114]));

var G__11115 = (i__5767__auto___11114 + (1));
i__5767__auto___11114 = G__11115;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.reduce.call(null,(function (p1__11111_SHARP_,p2__11110_SHARP_){
return p2__11110_SHARP_.call(null,p1__11111_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq11112){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11112));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11120 = arguments.length;
var i__5767__auto___11121 = (0);
while(true){
if((i__5767__auto___11121 < len__5766__auto___11120)){
args__5773__auto__.push((arguments[i__5767__auto___11121]));

var G__11122 = (i__5767__auto___11121 + (1));
i__5767__auto___11121 = G__11122;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.call(null,(2),body);
var mp = cljs.core.reduce.call(null,((function (els){
return (function (m,p__11118){
var vec__11119 = p__11118;
var k = cljs.core.nth.call(null,vec__11119,(0),null);
var v = cljs.core.nth.call(null,vec__11119,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__11116_SHARP_){
return cljs.core.merge.call(null,p1__11116_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq11117){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11117));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11126 = arguments.length;
var i__5767__auto___11127 = (0);
while(true){
if((i__5767__auto___11127 < len__5766__auto___11126)){
args__5773__auto__.push((arguments[i__5767__auto___11127]));

var G__11128 = (i__5767__auto___11127 + (1));
i__5767__auto___11127 = G__11128;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
var style = cljs.core.reduce.call(null,(function (p1__11123_SHARP_,p2__11124_SHARP_){
return cljs.core.dissoc.call(null,p1__11123_SHARP_,cljs.core.name.call(null,p2__11124_SHARP_),p2__11124_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq11125){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11125));
});
kioo.common.get_class_regex = (function kioo$common$get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function kioo$common$has_class_QMARK_(cur_cls,cls){
var and__4696__auto__ = cur_cls;
if(cljs.core.truth_(and__4696__auto__)){
return cljs.core.re_find.call(null,kioo.common.get_class_regex.call(null,cls),cur_cls);
} else {
return and__4696__auto__;
}
});
kioo.common.set_class = (function kioo$common$set_class(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11132 = arguments.length;
var i__5767__auto___11133 = (0);
while(true){
if((i__5767__auto___11133 < len__5766__auto___11132)){
args__5773__auto__.push((arguments[i__5767__auto___11133]));

var G__11134 = (i__5767__auto___11133 + (1));
i__5767__auto___11133 = G__11134;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11129_SHARP_,p2__11130_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11129_SHARP_,p2__11130_SHARP_))){
return p1__11129_SHARP_;
} else {
return [cljs.core.str(p1__11129_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11130_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq11131){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11131));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11138 = arguments.length;
var i__5767__auto___11139 = (0);
while(true){
if((i__5767__auto___11139 < len__5766__auto___11138)){
args__5773__auto__.push((arguments[i__5767__auto___11139]));

var G__11140 = (i__5767__auto___11139 + (1));
i__5767__auto___11139 = G__11140;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11135_SHARP_,p2__11136_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11135_SHARP_,p2__11136_SHARP_))){
return p1__11135_SHARP_;
} else {
return [cljs.core.str(p1__11135_SHARP_),cljs.core.str(" "),cljs.core.str(p2__11136_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq11137){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11137));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11144 = arguments.length;
var i__5767__auto___11145 = (0);
while(true){
if((i__5767__auto___11145 < len__5766__auto___11144)){
args__5773__auto__.push((arguments[i__5767__auto___11145]));

var G__11146 = (i__5767__auto___11145 + (1));
i__5767__auto___11145 = G__11146;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__11141_SHARP_,p2__11142_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__11141_SHARP_,p2__11142_SHARP_))){
return clojure.string.replace.call(null,p1__11141_SHARP_,kioo.common.get_class_regex.call(null,p2__11142_SHARP_)," ");
} else {
return p1__11141_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq11143){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11143));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});

//# sourceMappingURL=common.js.map