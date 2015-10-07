// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__12087__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__12086 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__12086,(0),null);
var body = cljs.core.nthnext.call(null,vec__12086,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__12087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12088__i = 0, G__12088__a = new Array(arguments.length -  0);
while (G__12088__i < G__12088__a.length) {G__12088__a[G__12088__i] = arguments[G__12088__i + 0]; ++G__12088__i;}
  args = new cljs.core.IndexedSeq(G__12088__a,0);
} 
return G__12087__delegate.call(this,args);};
G__12087.cljs$lang$maxFixedArity = 0;
G__12087.cljs$lang$applyTo = (function (arglist__12089){
var args = cljs.core.seq(arglist__12089);
return G__12087__delegate(args);
});
G__12087.cljs$core$IFn$_invoke$arity$variadic = G__12087__delegate;
return G__12087;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5335__auto__ = (function sablono$core$update_arglists_$_iter__12094(s__12095){
return (new cljs.core.LazySeq(null,(function (){
var s__12095__$1 = s__12095;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12095__$1);
if(temp__4425__auto__){
var s__12095__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12095__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12095__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12097 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12096 = (0);
while(true){
if((i__12096 < size__5334__auto__)){
var args = cljs.core._nth.call(null,c__5333__auto__,i__12096);
cljs.core.chunk_append.call(null,b__12097,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__12098 = (i__12096 + (1));
i__12096 = G__12098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12097),sablono$core$update_arglists_$_iter__12094.call(null,cljs.core.chunk_rest.call(null,s__12095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12097),null);
}
} else {
var args = cljs.core.first.call(null,s__12095__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__12094.call(null,cljs.core.rest.call(null,s__12095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
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
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5335__auto__ = (function sablono$core$iter__12100(s__12101){
return (new cljs.core.LazySeq(null,(function (){
var s__12101__$1 = s__12101;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12101__$1);
if(temp__4425__auto__){
var s__12101__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12101__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12101__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12103 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12102 = (0);
while(true){
if((i__12102 < size__5334__auto__)){
var style = cljs.core._nth.call(null,c__5333__auto__,i__12102);
cljs.core.chunk_append.call(null,b__12103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__12107 = (i__12102 + (1));
i__12102 = G__12107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12103),sablono$core$iter__12100.call(null,cljs.core.chunk_rest.call(null,s__12101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12103),null);
}
} else {
var style = cljs.core.first.call(null,s__12101__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__12100.call(null,cljs.core.rest.call(null,s__12101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq12099){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12099));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to12108 = (function sablono$core$link_to12108(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12111 = arguments.length;
var i__5622__auto___12112 = (0);
while(true){
if((i__5622__auto___12112 < len__5621__auto___12111)){
args__5628__auto__.push((arguments[i__5622__auto___12112]));

var G__12113 = (i__5622__auto___12112 + (1));
i__5622__auto___12112 = G__12113;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.link_to12108.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.link_to12108.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to12108.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12108.cljs$lang$applyTo = (function (seq12109){
var G__12110 = cljs.core.first.call(null,seq12109);
var seq12109__$1 = cljs.core.next.call(null,seq12109);
return sablono.core.link_to12108.cljs$core$IFn$_invoke$arity$variadic(G__12110,seq12109__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12108);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12114 = (function sablono$core$mail_to12114(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12119 = arguments.length;
var i__5622__auto___12120 = (0);
while(true){
if((i__5622__auto___12120 < len__5621__auto___12119)){
args__5628__auto__.push((arguments[i__5622__auto___12120]));

var G__12121 = (i__5622__auto___12120 + (1));
i__5622__auto___12120 = G__12121;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12114.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.mail_to12114.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12117){
var vec__12118 = p__12117;
var content = cljs.core.nth.call(null,vec__12118,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4563__auto__ = content;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12114.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12114.cljs$lang$applyTo = (function (seq12115){
var G__12116 = cljs.core.first.call(null,seq12115);
var seq12115__$1 = cljs.core.next.call(null,seq12115);
return sablono.core.mail_to12114.cljs$core$IFn$_invoke$arity$variadic(G__12116,seq12115__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12114);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list12122 = (function sablono$core$unordered_list12122(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5335__auto__ = (function sablono$core$unordered_list12122_$_iter__12127(s__12128){
return (new cljs.core.LazySeq(null,(function (){
var s__12128__$1 = s__12128;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12128__$1);
if(temp__4425__auto__){
var s__12128__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12128__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12128__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12130 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12129 = (0);
while(true){
if((i__12129 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12129);
cljs.core.chunk_append.call(null,b__12130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12131 = (i__12129 + (1));
i__12129 = G__12131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12130),sablono$core$unordered_list12122_$_iter__12127.call(null,cljs.core.chunk_rest.call(null,s__12128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12130),null);
}
} else {
var x = cljs.core.first.call(null,s__12128__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list12122_$_iter__12127.call(null,cljs.core.rest.call(null,s__12128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12122);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list12132 = (function sablono$core$ordered_list12132(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5335__auto__ = (function sablono$core$ordered_list12132_$_iter__12137(s__12138){
return (new cljs.core.LazySeq(null,(function (){
var s__12138__$1 = s__12138;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12138__$1);
if(temp__4425__auto__){
var s__12138__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12138__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12138__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12140 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12139 = (0);
while(true){
if((i__12139 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12139);
cljs.core.chunk_append.call(null,b__12140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12141 = (i__12139 + (1));
i__12139 = G__12141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12140),sablono$core$ordered_list12132_$_iter__12137.call(null,cljs.core.chunk_rest.call(null,s__12138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12140),null);
}
} else {
var x = cljs.core.first.call(null,s__12138__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list12132_$_iter__12137.call(null,cljs.core.rest.call(null,s__12138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12132);
/**
 * Create an image element.
 */
sablono.core.image12142 = (function sablono$core$image12142(var_args){
var args12143 = [];
var len__5621__auto___12146 = arguments.length;
var i__5622__auto___12147 = (0);
while(true){
if((i__5622__auto___12147 < len__5621__auto___12146)){
args12143.push((arguments[i__5622__auto___12147]));

var G__12148 = (i__5622__auto___12147 + (1));
i__5622__auto___12147 = G__12148;
continue;
} else {
}
break;
}

var G__12145 = args12143.length;
switch (G__12145) {
case 1:
return sablono.core.image12142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image12142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12143.length)].join('')));

}
});

sablono.core.image12142.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image12142.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image12142.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12142);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__12150_SHARP_,p2__12151_SHARP_){
return [cljs.core.str(p1__12150_SHARP_),cljs.core.str("["),cljs.core.str(p2__12151_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__12152_SHARP_,p2__12153_SHARP_){
return [cljs.core.str(p1__12152_SHARP_),cljs.core.str("-"),cljs.core.str(p2__12153_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field12154 = (function sablono$core$color_field12154(var_args){
var args12155 = [];
var len__5621__auto___12222 = arguments.length;
var i__5622__auto___12223 = (0);
while(true){
if((i__5622__auto___12223 < len__5621__auto___12222)){
args12155.push((arguments[i__5622__auto___12223]));

var G__12224 = (i__5622__auto___12223 + (1));
i__5622__auto___12223 = G__12224;
continue;
} else {
}
break;
}

var G__12157 = args12155.length;
switch (G__12157) {
case 1:
return sablono.core.color_field12154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field12154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12155.length)].join('')));

}
});

sablono.core.color_field12154.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.color_field12154.call(null,name__8514__auto__,null);
});

sablono.core.color_field12154.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.color_field12154.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12154);

/**
 * Creates a date input field.
 */
sablono.core.date_field12158 = (function sablono$core$date_field12158(var_args){
var args12159 = [];
var len__5621__auto___12226 = arguments.length;
var i__5622__auto___12227 = (0);
while(true){
if((i__5622__auto___12227 < len__5621__auto___12226)){
args12159.push((arguments[i__5622__auto___12227]));

var G__12228 = (i__5622__auto___12227 + (1));
i__5622__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var G__12161 = args12159.length;
switch (G__12161) {
case 1:
return sablono.core.date_field12158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field12158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12159.length)].join('')));

}
});

sablono.core.date_field12158.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.date_field12158.call(null,name__8514__auto__,null);
});

sablono.core.date_field12158.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.date_field12158.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12158);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field12162 = (function sablono$core$datetime_field12162(var_args){
var args12163 = [];
var len__5621__auto___12230 = arguments.length;
var i__5622__auto___12231 = (0);
while(true){
if((i__5622__auto___12231 < len__5621__auto___12230)){
args12163.push((arguments[i__5622__auto___12231]));

var G__12232 = (i__5622__auto___12231 + (1));
i__5622__auto___12231 = G__12232;
continue;
} else {
}
break;
}

var G__12165 = args12163.length;
switch (G__12165) {
case 1:
return sablono.core.datetime_field12162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field12162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12163.length)].join('')));

}
});

sablono.core.datetime_field12162.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.datetime_field12162.call(null,name__8514__auto__,null);
});

sablono.core.datetime_field12162.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.datetime_field12162.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12162);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field12166 = (function sablono$core$datetime_local_field12166(var_args){
var args12167 = [];
var len__5621__auto___12234 = arguments.length;
var i__5622__auto___12235 = (0);
while(true){
if((i__5622__auto___12235 < len__5621__auto___12234)){
args12167.push((arguments[i__5622__auto___12235]));

var G__12236 = (i__5622__auto___12235 + (1));
i__5622__auto___12235 = G__12236;
continue;
} else {
}
break;
}

var G__12169 = args12167.length;
switch (G__12169) {
case 1:
return sablono.core.datetime_local_field12166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field12166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12167.length)].join('')));

}
});

sablono.core.datetime_local_field12166.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.datetime_local_field12166.call(null,name__8514__auto__,null);
});

sablono.core.datetime_local_field12166.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.datetime_local_field12166.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12166);

/**
 * Creates a email input field.
 */
sablono.core.email_field12170 = (function sablono$core$email_field12170(var_args){
var args12171 = [];
var len__5621__auto___12238 = arguments.length;
var i__5622__auto___12239 = (0);
while(true){
if((i__5622__auto___12239 < len__5621__auto___12238)){
args12171.push((arguments[i__5622__auto___12239]));

var G__12240 = (i__5622__auto___12239 + (1));
i__5622__auto___12239 = G__12240;
continue;
} else {
}
break;
}

var G__12173 = args12171.length;
switch (G__12173) {
case 1:
return sablono.core.email_field12170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field12170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12171.length)].join('')));

}
});

sablono.core.email_field12170.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.email_field12170.call(null,name__8514__auto__,null);
});

sablono.core.email_field12170.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.email_field12170.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12170);

/**
 * Creates a file input field.
 */
sablono.core.file_field12174 = (function sablono$core$file_field12174(var_args){
var args12175 = [];
var len__5621__auto___12242 = arguments.length;
var i__5622__auto___12243 = (0);
while(true){
if((i__5622__auto___12243 < len__5621__auto___12242)){
args12175.push((arguments[i__5622__auto___12243]));

var G__12244 = (i__5622__auto___12243 + (1));
i__5622__auto___12243 = G__12244;
continue;
} else {
}
break;
}

var G__12177 = args12175.length;
switch (G__12177) {
case 1:
return sablono.core.file_field12174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field12174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12175.length)].join('')));

}
});

sablono.core.file_field12174.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.file_field12174.call(null,name__8514__auto__,null);
});

sablono.core.file_field12174.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.file_field12174.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12174);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field12178 = (function sablono$core$hidden_field12178(var_args){
var args12179 = [];
var len__5621__auto___12246 = arguments.length;
var i__5622__auto___12247 = (0);
while(true){
if((i__5622__auto___12247 < len__5621__auto___12246)){
args12179.push((arguments[i__5622__auto___12247]));

var G__12248 = (i__5622__auto___12247 + (1));
i__5622__auto___12247 = G__12248;
continue;
} else {
}
break;
}

var G__12181 = args12179.length;
switch (G__12181) {
case 1:
return sablono.core.hidden_field12178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field12178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12179.length)].join('')));

}
});

sablono.core.hidden_field12178.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.hidden_field12178.call(null,name__8514__auto__,null);
});

sablono.core.hidden_field12178.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.hidden_field12178.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12178);

/**
 * Creates a month input field.
 */
sablono.core.month_field12182 = (function sablono$core$month_field12182(var_args){
var args12183 = [];
var len__5621__auto___12250 = arguments.length;
var i__5622__auto___12251 = (0);
while(true){
if((i__5622__auto___12251 < len__5621__auto___12250)){
args12183.push((arguments[i__5622__auto___12251]));

var G__12252 = (i__5622__auto___12251 + (1));
i__5622__auto___12251 = G__12252;
continue;
} else {
}
break;
}

var G__12185 = args12183.length;
switch (G__12185) {
case 1:
return sablono.core.month_field12182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field12182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12183.length)].join('')));

}
});

sablono.core.month_field12182.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.month_field12182.call(null,name__8514__auto__,null);
});

sablono.core.month_field12182.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.month_field12182.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12182);

/**
 * Creates a number input field.
 */
sablono.core.number_field12186 = (function sablono$core$number_field12186(var_args){
var args12187 = [];
var len__5621__auto___12254 = arguments.length;
var i__5622__auto___12255 = (0);
while(true){
if((i__5622__auto___12255 < len__5621__auto___12254)){
args12187.push((arguments[i__5622__auto___12255]));

var G__12256 = (i__5622__auto___12255 + (1));
i__5622__auto___12255 = G__12256;
continue;
} else {
}
break;
}

var G__12189 = args12187.length;
switch (G__12189) {
case 1:
return sablono.core.number_field12186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field12186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12187.length)].join('')));

}
});

sablono.core.number_field12186.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.number_field12186.call(null,name__8514__auto__,null);
});

sablono.core.number_field12186.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.number_field12186.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12186);

/**
 * Creates a password input field.
 */
sablono.core.password_field12190 = (function sablono$core$password_field12190(var_args){
var args12191 = [];
var len__5621__auto___12258 = arguments.length;
var i__5622__auto___12259 = (0);
while(true){
if((i__5622__auto___12259 < len__5621__auto___12258)){
args12191.push((arguments[i__5622__auto___12259]));

var G__12260 = (i__5622__auto___12259 + (1));
i__5622__auto___12259 = G__12260;
continue;
} else {
}
break;
}

var G__12193 = args12191.length;
switch (G__12193) {
case 1:
return sablono.core.password_field12190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field12190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12191.length)].join('')));

}
});

sablono.core.password_field12190.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.password_field12190.call(null,name__8514__auto__,null);
});

sablono.core.password_field12190.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.password_field12190.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12190);

/**
 * Creates a range input field.
 */
sablono.core.range_field12194 = (function sablono$core$range_field12194(var_args){
var args12195 = [];
var len__5621__auto___12262 = arguments.length;
var i__5622__auto___12263 = (0);
while(true){
if((i__5622__auto___12263 < len__5621__auto___12262)){
args12195.push((arguments[i__5622__auto___12263]));

var G__12264 = (i__5622__auto___12263 + (1));
i__5622__auto___12263 = G__12264;
continue;
} else {
}
break;
}

var G__12197 = args12195.length;
switch (G__12197) {
case 1:
return sablono.core.range_field12194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field12194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12195.length)].join('')));

}
});

sablono.core.range_field12194.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.range_field12194.call(null,name__8514__auto__,null);
});

sablono.core.range_field12194.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.range_field12194.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12194);

/**
 * Creates a search input field.
 */
sablono.core.search_field12198 = (function sablono$core$search_field12198(var_args){
var args12199 = [];
var len__5621__auto___12266 = arguments.length;
var i__5622__auto___12267 = (0);
while(true){
if((i__5622__auto___12267 < len__5621__auto___12266)){
args12199.push((arguments[i__5622__auto___12267]));

var G__12268 = (i__5622__auto___12267 + (1));
i__5622__auto___12267 = G__12268;
continue;
} else {
}
break;
}

var G__12201 = args12199.length;
switch (G__12201) {
case 1:
return sablono.core.search_field12198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field12198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12199.length)].join('')));

}
});

sablono.core.search_field12198.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.search_field12198.call(null,name__8514__auto__,null);
});

sablono.core.search_field12198.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.search_field12198.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12198);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field12202 = (function sablono$core$tel_field12202(var_args){
var args12203 = [];
var len__5621__auto___12270 = arguments.length;
var i__5622__auto___12271 = (0);
while(true){
if((i__5622__auto___12271 < len__5621__auto___12270)){
args12203.push((arguments[i__5622__auto___12271]));

var G__12272 = (i__5622__auto___12271 + (1));
i__5622__auto___12271 = G__12272;
continue;
} else {
}
break;
}

var G__12205 = args12203.length;
switch (G__12205) {
case 1:
return sablono.core.tel_field12202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field12202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12203.length)].join('')));

}
});

sablono.core.tel_field12202.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.tel_field12202.call(null,name__8514__auto__,null);
});

sablono.core.tel_field12202.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.tel_field12202.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12202);

/**
 * Creates a text input field.
 */
sablono.core.text_field12206 = (function sablono$core$text_field12206(var_args){
var args12207 = [];
var len__5621__auto___12274 = arguments.length;
var i__5622__auto___12275 = (0);
while(true){
if((i__5622__auto___12275 < len__5621__auto___12274)){
args12207.push((arguments[i__5622__auto___12275]));

var G__12276 = (i__5622__auto___12275 + (1));
i__5622__auto___12275 = G__12276;
continue;
} else {
}
break;
}

var G__12209 = args12207.length;
switch (G__12209) {
case 1:
return sablono.core.text_field12206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field12206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12207.length)].join('')));

}
});

sablono.core.text_field12206.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.text_field12206.call(null,name__8514__auto__,null);
});

sablono.core.text_field12206.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.text_field12206.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12206);

/**
 * Creates a time input field.
 */
sablono.core.time_field12210 = (function sablono$core$time_field12210(var_args){
var args12211 = [];
var len__5621__auto___12278 = arguments.length;
var i__5622__auto___12279 = (0);
while(true){
if((i__5622__auto___12279 < len__5621__auto___12278)){
args12211.push((arguments[i__5622__auto___12279]));

var G__12280 = (i__5622__auto___12279 + (1));
i__5622__auto___12279 = G__12280;
continue;
} else {
}
break;
}

var G__12213 = args12211.length;
switch (G__12213) {
case 1:
return sablono.core.time_field12210.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field12210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12211.length)].join('')));

}
});

sablono.core.time_field12210.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.time_field12210.call(null,name__8514__auto__,null);
});

sablono.core.time_field12210.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.time_field12210.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12210);

/**
 * Creates a url input field.
 */
sablono.core.url_field12214 = (function sablono$core$url_field12214(var_args){
var args12215 = [];
var len__5621__auto___12282 = arguments.length;
var i__5622__auto___12283 = (0);
while(true){
if((i__5622__auto___12283 < len__5621__auto___12282)){
args12215.push((arguments[i__5622__auto___12283]));

var G__12284 = (i__5622__auto___12283 + (1));
i__5622__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var G__12217 = args12215.length;
switch (G__12217) {
case 1:
return sablono.core.url_field12214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field12214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12215.length)].join('')));

}
});

sablono.core.url_field12214.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.url_field12214.call(null,name__8514__auto__,null);
});

sablono.core.url_field12214.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.url_field12214.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12214);

/**
 * Creates a week input field.
 */
sablono.core.week_field12218 = (function sablono$core$week_field12218(var_args){
var args12219 = [];
var len__5621__auto___12286 = arguments.length;
var i__5622__auto___12287 = (0);
while(true){
if((i__5622__auto___12287 < len__5621__auto___12286)){
args12219.push((arguments[i__5622__auto___12287]));

var G__12288 = (i__5622__auto___12287 + (1));
i__5622__auto___12287 = G__12288;
continue;
} else {
}
break;
}

var G__12221 = args12219.length;
switch (G__12221) {
case 1:
return sablono.core.week_field12218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field12218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12219.length)].join('')));

}
});

sablono.core.week_field12218.cljs$core$IFn$_invoke$arity$1 = (function (name__8514__auto__){
return sablono.core.week_field12218.call(null,name__8514__auto__,null);
});

sablono.core.week_field12218.cljs$core$IFn$_invoke$arity$2 = (function (name__8514__auto__,value__8515__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__8514__auto__,value__8515__auto__);
});

sablono.core.week_field12218.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12218);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box12290 = (function sablono$core$check_box12290(var_args){
var args12291 = [];
var len__5621__auto___12294 = arguments.length;
var i__5622__auto___12295 = (0);
while(true){
if((i__5622__auto___12295 < len__5621__auto___12294)){
args12291.push((arguments[i__5622__auto___12295]));

var G__12296 = (i__5622__auto___12295 + (1));
i__5622__auto___12295 = G__12296;
continue;
} else {
}
break;
}

var G__12293 = args12291.length;
switch (G__12293) {
case 1:
return sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12291.length)].join('')));

}
});

sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box12290.call(null,name,null);
});

sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box12290.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box12290.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box12290.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12290);
/**
 * Creates a radio button.
 */
sablono.core.radio_button12298 = (function sablono$core$radio_button12298(var_args){
var args12299 = [];
var len__5621__auto___12302 = arguments.length;
var i__5622__auto___12303 = (0);
while(true){
if((i__5622__auto___12303 < len__5621__auto___12302)){
args12299.push((arguments[i__5622__auto___12303]));

var G__12304 = (i__5622__auto___12303 + (1));
i__5622__auto___12303 = G__12304;
continue;
} else {
}
break;
}

var G__12301 = args12299.length;
switch (G__12301) {
case 1:
return sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12299.length)].join('')));

}
});

sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button12298.call(null,group,null);
});

sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button12298.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button12298.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button12298.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12298);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options12306 = (function sablono$core$select_options12306(var_args){
var args12307 = [];
var len__5621__auto___12318 = arguments.length;
var i__5622__auto___12319 = (0);
while(true){
if((i__5622__auto___12319 < len__5621__auto___12318)){
args12307.push((arguments[i__5622__auto___12319]));

var G__12320 = (i__5622__auto___12319 + (1));
i__5622__auto___12319 = G__12320;
continue;
} else {
}
break;
}

var G__12309 = args12307.length;
switch (G__12309) {
case 1:
return sablono.core.select_options12306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options12306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12307.length)].join('')));

}
});

sablono.core.select_options12306.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options12306.call(null,coll,null);
});

sablono.core.select_options12306.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5335__auto__ = (function sablono$core$iter__12310(s__12311){
return (new cljs.core.LazySeq(null,(function (){
var s__12311__$1 = s__12311;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12311__$1);
if(temp__4425__auto__){
var s__12311__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12311__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12311__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12313 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12312 = (0);
while(true){
if((i__12312 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12312);
cljs.core.chunk_append.call(null,b__12313,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12316 = x;
var text = cljs.core.nth.call(null,vec__12316,(0),null);
var val = cljs.core.nth.call(null,vec__12316,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12316,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12306.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__12322 = (i__12312 + (1));
i__12312 = G__12322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12313),sablono$core$iter__12310.call(null,cljs.core.chunk_rest.call(null,s__12311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12313),null);
}
} else {
var x = cljs.core.first.call(null,s__12311__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12317 = x;
var text = cljs.core.nth.call(null,vec__12317,(0),null);
var val = cljs.core.nth.call(null,vec__12317,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12317,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12306.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__12310.call(null,cljs.core.rest.call(null,s__12311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,coll);
});

sablono.core.select_options12306.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12306);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12323 = (function sablono$core$drop_down12323(var_args){
var args12324 = [];
var len__5621__auto___12327 = arguments.length;
var i__5622__auto___12328 = (0);
while(true){
if((i__5622__auto___12328 < len__5621__auto___12327)){
args12324.push((arguments[i__5622__auto___12328]));

var G__12329 = (i__5622__auto___12328 + (1));
i__5622__auto___12328 = G__12329;
continue;
} else {
}
break;
}

var G__12326 = args12324.length;
switch (G__12326) {
case 2:
return sablono.core.drop_down12323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12323.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12324.length)].join('')));

}
});

sablono.core.drop_down12323.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12323.call(null,name,options,null);
});

sablono.core.drop_down12323.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down12323.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12323);
/**
 * Creates a text area element.
 */
sablono.core.text_area12331 = (function sablono$core$text_area12331(var_args){
var args12332 = [];
var len__5621__auto___12335 = arguments.length;
var i__5622__auto___12336 = (0);
while(true){
if((i__5622__auto___12336 < len__5621__auto___12335)){
args12332.push((arguments[i__5622__auto___12336]));

var G__12337 = (i__5622__auto___12336 + (1));
i__5622__auto___12336 = G__12337;
continue;
} else {
}
break;
}

var G__12334 = args12332.length;
switch (G__12334) {
case 1:
return sablono.core.text_area12331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12332.length)].join('')));

}
});

sablono.core.text_area12331.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12331.call(null,name,null);
});

sablono.core.text_area12331.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area12331.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12331);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12339 = (function sablono$core$label12339(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12339);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12340 = (function sablono$core$submit_button12340(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12340);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12341 = (function sablono$core$reset_button12341(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12341);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12342 = (function sablono$core$form_to12342(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12347 = arguments.length;
var i__5622__auto___12348 = (0);
while(true){
if((i__5622__auto___12348 < len__5621__auto___12347)){
args__5628__auto__.push((arguments[i__5622__auto___12348]));

var G__12349 = (i__5622__auto___12348 + (1));
i__5622__auto___12348 = G__12349;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.form_to12342.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.form_to12342.cljs$core$IFn$_invoke$arity$variadic = (function (p__12345,body){
var vec__12346 = p__12345;
var method = cljs.core.nth.call(null,vec__12346,(0),null);
var action = cljs.core.nth.call(null,vec__12346,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to12342.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12342.cljs$lang$applyTo = (function (seq12343){
var G__12344 = cljs.core.first.call(null,seq12343);
var seq12343__$1 = cljs.core.next.call(null,seq12343);
return sablono.core.form_to12342.cljs$core$IFn$_invoke$arity$variadic(G__12344,seq12343__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12342);
