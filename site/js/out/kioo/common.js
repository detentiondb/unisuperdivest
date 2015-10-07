// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12051 = arguments.length;
var i__5622__auto___12052 = (0);
while(true){
if((i__5622__auto___12052 < len__5621__auto___12051)){
args__5628__auto__.push((arguments[i__5622__auto___12052]));

var G__12053 = (i__5622__auto___12052 + (1));
i__5622__auto___12052 = G__12053;
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

kioo.common.content.cljs$lang$applyTo = (function (seq12050){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12050));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12055 = arguments.length;
var i__5622__auto___12056 = (0);
while(true){
if((i__5622__auto___12056 < len__5621__auto___12055)){
args__5628__auto__.push((arguments[i__5622__auto___12056]));

var G__12057 = (i__5622__auto___12056 + (1));
i__5622__auto___12056 = G__12057;
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

kioo.common.append.cljs$lang$applyTo = (function (seq12054){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12054));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12059 = arguments.length;
var i__5622__auto___12060 = (0);
while(true){
if((i__5622__auto___12060 < len__5621__auto___12059)){
args__5628__auto__.push((arguments[i__5622__auto___12060]));

var G__12061 = (i__5622__auto___12060 + (1));
i__5622__auto___12060 = G__12061;
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

kioo.common.prepend.cljs$lang$applyTo = (function (seq12058){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12058));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12063 = arguments.length;
var i__5622__auto___12064 = (0);
while(true){
if((i__5622__auto___12064 < len__5621__auto___12063)){
args__5628__auto__.push((arguments[i__5622__auto___12064]));

var G__12065 = (i__5622__auto___12064 + (1));
i__5622__auto___12064 = G__12065;
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

kioo.common.substitute.cljs$lang$applyTo = (function (seq12062){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12062));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12069 = arguments.length;
var i__5622__auto___12070 = (0);
while(true){
if((i__5622__auto___12070 < len__5621__auto___12069)){
args__5628__auto__.push((arguments[i__5622__auto___12070]));

var G__12071 = (i__5622__auto___12070 + (1));
i__5622__auto___12070 = G__12071;
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
return (function (n,p__12067){
var vec__12068 = p__12067;
var k = cljs.core.nth.call(null,vec__12068,(0),null);
var v = cljs.core.nth.call(null,vec__12068,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq12066){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12066));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12073 = arguments.length;
var i__5622__auto___12074 = (0);
while(true){
if((i__5622__auto___12074 < len__5621__auto___12073)){
args__5628__auto__.push((arguments[i__5622__auto___12074]));

var G__12075 = (i__5622__auto___12074 + (1));
i__5622__auto___12074 = G__12075;
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

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq12072){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12072));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12079 = arguments.length;
var i__5622__auto___12080 = (0);
while(true){
if((i__5622__auto___12080 < len__5621__auto___12079)){
args__5628__auto__.push((arguments[i__5622__auto___12080]));

var G__12081 = (i__5622__auto___12080 + (1));
i__5622__auto___12080 = G__12081;
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
return cljs.core.reduce.call(null,(function (p1__12077_SHARP_,p2__12076_SHARP_){
return p2__12076_SHARP_.call(null,p1__12077_SHARP_);
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq12078){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12078));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12086 = arguments.length;
var i__5622__auto___12087 = (0);
while(true){
if((i__5622__auto___12087 < len__5621__auto___12086)){
args__5628__auto__.push((arguments[i__5622__auto___12087]));

var G__12088 = (i__5622__auto___12087 + (1));
i__5622__auto___12087 = G__12088;
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
return (function (m,p__12084){
var vec__12085 = p__12084;
var k = cljs.core.nth.call(null,vec__12085,(0),null);
var v = cljs.core.nth.call(null,vec__12085,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__12082_SHARP_){
return cljs.core.merge.call(null,p1__12082_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq12083){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12083));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12092 = arguments.length;
var i__5622__auto___12093 = (0);
while(true){
if((i__5622__auto___12093 < len__5621__auto___12092)){
args__5628__auto__.push((arguments[i__5622__auto___12093]));

var G__12094 = (i__5622__auto___12093 + (1));
i__5622__auto___12093 = G__12094;
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
var style = cljs.core.reduce.call(null,(function (p1__12089_SHARP_,p2__12090_SHARP_){
return cljs.core.dissoc.call(null,p1__12089_SHARP_,cljs.core.name.call(null,p2__12090_SHARP_),p2__12090_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq12091){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12091));
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
var len__5621__auto___12098 = arguments.length;
var i__5622__auto___12099 = (0);
while(true){
if((i__5622__auto___12099 < len__5621__auto___12098)){
args__5628__auto__.push((arguments[i__5622__auto___12099]));

var G__12100 = (i__5622__auto___12099 + (1));
i__5622__auto___12099 = G__12100;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12095_SHARP_,p2__12096_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12095_SHARP_,p2__12096_SHARP_))){
return p1__12095_SHARP_;
} else {
return [cljs.core.str(p1__12095_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12096_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq12097){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12097));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12104 = arguments.length;
var i__5622__auto___12105 = (0);
while(true){
if((i__5622__auto___12105 < len__5621__auto___12104)){
args__5628__auto__.push((arguments[i__5622__auto___12105]));

var G__12106 = (i__5622__auto___12105 + (1));
i__5622__auto___12105 = G__12106;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12101_SHARP_,p2__12102_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12101_SHARP_,p2__12102_SHARP_))){
return p1__12101_SHARP_;
} else {
return [cljs.core.str(p1__12101_SHARP_),cljs.core.str(" "),cljs.core.str(p2__12102_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq12103){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12103));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12110 = arguments.length;
var i__5622__auto___12111 = (0);
while(true){
if((i__5622__auto___12111 < len__5621__auto___12110)){
args__5628__auto__.push((arguments[i__5622__auto___12111]));

var G__12112 = (i__5622__auto___12111 + (1));
i__5622__auto___12111 = G__12112;
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
var new_class = cljs.core.reduce.call(null,(function (p1__12107_SHARP_,p2__12108_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__12107_SHARP_,p2__12108_SHARP_))){
return clojure.string.replace.call(null,p1__12107_SHARP_,kioo.common.get_class_regex.call(null,p2__12108_SHARP_)," ");
} else {
return p1__12107_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq12109){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12109));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
