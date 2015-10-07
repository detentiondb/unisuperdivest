// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12021 = arguments.length;
var i__5622__auto___12022 = (0);
while(true){
if((i__5622__auto___12022 < len__5621__auto___12021)){
args__5628__auto__.push((arguments[i__5622__auto___12022]));

var G__12023 = (i__5622__auto___12022 + (1));
i__5622__auto___12022 = G__12023;
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

kioo.common.content.cljs$lang$applyTo = (function (seq12020){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12020));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12025 = arguments.length;
var i__5622__auto___12026 = (0);
while(true){
if((i__5622__auto___12026 < len__5621__auto___12025)){
args__5628__auto__.push((arguments[i__5622__auto___12026]));

var G__12027 = (i__5622__auto___12026 + (1));
i__5622__auto___12026 = G__12027;
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

kioo.common.append.cljs$lang$applyTo = (function (seq12024){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12024));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12029 = arguments.length;
var i__5622__auto___12030 = (0);
while(true){
if((i__5622__auto___12030 < len__5621__auto___12029)){
args__5628__auto__.push((arguments[i__5622__auto___12030]));

var G__12031 = (i__5622__auto___12030 + (1));
i__5622__auto___12030 = G__12031;
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

kioo.common.prepend.cljs$lang$applyTo = (function (seq12028){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12028));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12033 = arguments.length;
var i__5622__auto___12034 = (0);
while(true){
if((i__5622__auto___12034 < len__5621__auto___12033)){
args__5628__auto__.push((arguments[i__5622__auto___12034]));

var G__12035 = (i__5622__auto___12034 + (1));
i__5622__auto___12034 = G__12035;
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

kioo.common.substitute.cljs$lang$applyTo = (function (seq12032){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12032));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12039 = arguments.length;
var i__5622__auto___12040 = (0);
while(true){
if((i__5622__auto___12040 < len__5621__auto___12039)){
args__5628__auto__.push((arguments[i__5622__auto___12040]));

var G__12041 = (i__5622__auto___12040 + (1));
i__5622__auto___12040 = G__12041;
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
return (function (n,p__12037){
var vec__12038 = p__12037;
var k = cljs.core.nth.call(null,vec__12038,(0),null);
var v = cljs.core.nth.call(null,vec__12038,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq12036){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12036));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12043 = arguments.length;
var i__5622__auto___12044 = (0);
while(true){
if((i__5622__auto___12044 < len__5621__auto___12043)){
args__5628__auto__.push((arguments[i__5622__auto___12044]));

var G__12045 = (i__5622__auto___12044 + (1));
i__5622__auto___12044 = G__12045;
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

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq12042){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12042));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12049 = arguments.length;
var i__5622__auto___12050 = (0);
while(true){
if((i__5622__auto___12050 < len__5621__auto___12049)){
args__5628__auto__.push((arguments[i__5622__auto___12050]));

var G__12051 = (i__5622__auto___12050 + (1));
i__5622__auto___12050 = G__12051;
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
return cljs.core.reduce.call(null,(function (p1__12047_SHARP_,p2__12046_SHARP_){
return p2__12046_SHARP_.call(null,p1__12047_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq12048){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12048));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12056 = arguments.length;
var i__5622__auto___12057 = (0);
while(true){
if((i__5622__auto___12057 < len__5621__auto___12056)){
args__5628__auto__.push((arguments[i__5622__auto___12057]));

var G__12058 = (i__5622__auto___12057 + (1));
i__5622__auto___12057 = G__12058;
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
return (function (m,p__12054){
var vec__12055 = p__12054;
var k = cljs.core.nth.call(null,vec__12055,(0),null);
var v = cljs.core.nth.call(null,vec__12055,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__12052_SHARP_){
return cljs.core.merge.call(null,p1__12052_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq12053){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12053));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12062 = arguments.length;
var i__5622__auto___12063 = (0);
while(true){
if((i__5622__auto___12063 < len__5621__auto___12062)){
args__5628__auto__.push((arguments[i__5622__auto___12063]));

var G__12064 = (i__5622__auto___12063 + (1));
i__5622__auto___12063 = G__12064;
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
var style = cljs.core.reduce.call(null,(function (p1__12059_SHARP_,p2__12060_SHARP_){
return cljs.core.dissoc.call(null,p1__12059_SHARP_,cljs.core.name.call(null,p2__12060_SHARP_),p2__12060_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq12061){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12061));
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
var len__5621__auto___12068 = arguments.length;
var i__5622__auto___12069 = (0);
while(true){
if((i__5622__auto___12069 < len__5621__auto___12068)){
args__5628__auto__.push((arguments[i__5622__auto___12069]));

var G__12070 = (i__5622__auto___12069 + (1));
i__5622__auto___12069 = G__12070;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12065_SHARP_,p2__12066_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12065_SHARP_,p2__12066_SHARP_))){
return p1__12065_SHARP_;
} else {
return [cljs.core.str(p1__12065_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12066_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq12067){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12067));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12074 = arguments.length;
var i__5622__auto___12075 = (0);
while(true){
if((i__5622__auto___12075 < len__5621__auto___12074)){
args__5628__auto__.push((arguments[i__5622__auto___12075]));

var G__12076 = (i__5622__auto___12075 + (1));
i__5622__auto___12075 = G__12076;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12071_SHARP_,p2__12072_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12071_SHARP_,p2__12072_SHARP_))){
return p1__12071_SHARP_;
} else {
return [cljs.core.str(p1__12071_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12072_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq12073){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12073));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12080 = arguments.length;
var i__5622__auto___12081 = (0);
while(true){
if((i__5622__auto___12081 < len__5621__auto___12080)){
args__5628__auto__.push((arguments[i__5622__auto___12081]));

var G__12082 = (i__5622__auto___12081 + (1));
i__5622__auto___12081 = G__12082;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12077_SHARP_,p2__12078_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12077_SHARP_,p2__12078_SHARP_))){
return clojure.string.replace.call(null,p1__12077_SHARP_,kioo.common.get_class_regex.call(null,p2__12078_SHARP_)," ");
} else {
return p1__12077_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq12079){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12079));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
