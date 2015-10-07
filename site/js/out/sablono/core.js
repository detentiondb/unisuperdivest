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
var G__12117__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__12116 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__12116,(0),null);
var body = cljs.core.nthnext.call(null,vec__12116,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__12117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12118__i = 0, G__12118__a = new Array(arguments.length -  0);
while (G__12118__i < G__12118__a.length) {G__12118__a[G__12118__i] = arguments[G__12118__i + 0]; ++G__12118__i;}
  args = new cljs.core.IndexedSeq(G__12118__a,0);
} 
return G__12117__delegate.call(this,args);};
G__12117.cljs$lang$maxFixedArity = 0;
G__12117.cljs$lang$applyTo = (function (arglist__12119){
var args = cljs.core.seq(arglist__12119);
return G__12117__delegate(args);
});
G__12117.cljs$core$IFn$_invoke$arity$variadic = G__12117__delegate;
return G__12117;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5335__auto__ = (function sablono$core$update_arglists_$_iter__12124(s__12125){
return (new cljs.core.LazySeq(null,(function (){
var s__12125__$1 = s__12125;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12125__$1);
if(temp__4425__auto__){
var s__12125__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12125__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12125__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12127 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12126 = (0);
while(true){
if((i__12126 < size__5334__auto__)){
var args = cljs.core._nth.call(null,c__5333__auto__,i__12126);
cljs.core.chunk_append.call(null,b__12127,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__12128 = (i__12126 + (1));
i__12126 = G__12128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12127),sablono$core$update_arglists_$_iter__12124.call(null,cljs.core.chunk_rest.call(null,s__12125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12127),null);
}
} else {
var args = cljs.core.first.call(null,s__12125__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__12124.call(null,cljs.core.rest.call(null,s__12125__$2)));
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
var len__5621__auto___12134 = arguments.length;
var i__5622__auto___12135 = (0);
while(true){
if((i__5622__auto___12135 < len__5621__auto___12134)){
args__5628__auto__.push((arguments[i__5622__auto___12135]));

var G__12136 = (i__5622__auto___12135 + (1));
i__5622__auto___12135 = G__12136;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5335__auto__ = (function sablono$core$iter__12130(s__12131){
return (new cljs.core.LazySeq(null,(function (){
var s__12131__$1 = s__12131;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12131__$1);
if(temp__4425__auto__){
var s__12131__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12131__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12131__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12133 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12132 = (0);
while(true){
if((i__12132 < size__5334__auto__)){
var style = cljs.core._nth.call(null,c__5333__auto__,i__12132);
cljs.core.chunk_append.call(null,b__12133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__12137 = (i__12132 + (1));
i__12132 = G__12137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12133),sablono$core$iter__12130.call(null,cljs.core.chunk_rest.call(null,s__12131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12133),null);
}
} else {
var style = cljs.core.first.call(null,s__12131__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__12130.call(null,cljs.core.rest.call(null,s__12131__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq12129){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12129));
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
sablono.core.link_to12138 = (function sablono$core$link_to12138(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12141 = arguments.length;
var i__5622__auto___12142 = (0);
while(true){
if((i__5622__auto___12142 < len__5621__auto___12141)){
args__5628__auto__.push((arguments[i__5622__auto___12142]));

var G__12143 = (i__5622__auto___12142 + (1));
i__5622__auto___12142 = G__12143;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.link_to12138.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.link_to12138.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to12138.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12138.cljs$lang$applyTo = (function (seq12139){
var G__12140 = cljs.core.first.call(null,seq12139);
var seq12139__$1 = cljs.core.next.call(null,seq12139);
return sablono.core.link_to12138.cljs$core$IFn$_invoke$arity$variadic(G__12140,seq12139__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12138);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12144 = (function sablono$core$mail_to12144(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12149 = arguments.length;
var i__5622__auto___12150 = (0);
while(true){
if((i__5622__auto___12150 < len__5621__auto___12149)){
args__5628__auto__.push((arguments[i__5622__auto___12150]));

var G__12151 = (i__5622__auto___12150 + (1));
i__5622__auto___12150 = G__12151;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12144.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.mail_to12144.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12147){
var vec__12148 = p__12147;
var content = cljs.core.nth.call(null,vec__12148,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4563__auto__ = content;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12144.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12144.cljs$lang$applyTo = (function (seq12145){
var G__12146 = cljs.core.first.call(null,seq12145);
var seq12145__$1 = cljs.core.next.call(null,seq12145);
return sablono.core.mail_to12144.cljs$core$IFn$_invoke$arity$variadic(G__12146,seq12145__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12144);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list12152 = (function sablono$core$unordered_list12152(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5335__auto__ = (function sablono$core$unordered_list12152_$_iter__12157(s__12158){
return (new cljs.core.LazySeq(null,(function (){
var s__12158__$1 = s__12158;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12158__$1);
if(temp__4425__auto__){
var s__12158__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12158__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12158__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12160 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12159 = (0);
while(true){
if((i__12159 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12159);
cljs.core.chunk_append.call(null,b__12160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12161 = (i__12159 + (1));
i__12159 = G__12161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12160),sablono$core$unordered_list12152_$_iter__12157.call(null,cljs.core.chunk_rest.call(null,s__12158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12160),null);
}
} else {
var x = cljs.core.first.call(null,s__12158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list12152_$_iter__12157.call(null,cljs.core.rest.call(null,s__12158__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12152);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list12162 = (function sablono$core$ordered_list12162(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5335__auto__ = (function sablono$core$ordered_list12162_$_iter__12167(s__12168){
return (new cljs.core.LazySeq(null,(function (){
var s__12168__$1 = s__12168;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12168__$1);
if(temp__4425__auto__){
var s__12168__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12168__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12168__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12170 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12169 = (0);
while(true){
if((i__12169 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12169);
cljs.core.chunk_append.call(null,b__12170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__12171 = (i__12169 + (1));
i__12169 = G__12171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12170),sablono$core$ordered_list12162_$_iter__12167.call(null,cljs.core.chunk_rest.call(null,s__12168__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12170),null);
}
} else {
var x = cljs.core.first.call(null,s__12168__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list12162_$_iter__12167.call(null,cljs.core.rest.call(null,s__12168__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12162);
/**
 * Create an image element.
 */
sablono.core.image12172 = (function sablono$core$image12172(var_args){
var args12173 = [];
var len__5621__auto___12176 = arguments.length;
var i__5622__auto___12177 = (0);
while(true){
if((i__5622__auto___12177 < len__5621__auto___12176)){
args12173.push((arguments[i__5622__auto___12177]));

var G__12178 = (i__5622__auto___12177 + (1));
i__5622__auto___12177 = G__12178;
continue;
} else {
}
break;
}

var G__12175 = args12173.length;
switch (G__12175) {
case 1:
return sablono.core.image12172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image12172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12173.length)].join('')));

}
});

sablono.core.image12172.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image12172.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image12172.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12172);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__12180_SHARP_,p2__12181_SHARP_){
return [cljs.core.str(p1__12180_SHARP_),cljs.core.str("["),cljs.core.str(p2__12181_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__12182_SHARP_,p2__12183_SHARP_){
return [cljs.core.str(p1__12182_SHARP_),cljs.core.str("-"),cljs.core.str(p2__12183_SHARP_)].join('');
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
sablono.core.color_field12184 = (function sablono$core$color_field12184(var_args){
var args12185 = [];
var len__5621__auto___12252 = arguments.length;
var i__5622__auto___12253 = (0);
while(true){
if((i__5622__auto___12253 < len__5621__auto___12252)){
args12185.push((arguments[i__5622__auto___12253]));

var G__12254 = (i__5622__auto___12253 + (1));
i__5622__auto___12253 = G__12254;
continue;
} else {
}
break;
}

var G__12187 = args12185.length;
switch (G__12187) {
case 1:
return sablono.core.color_field12184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field12184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12185.length)].join('')));

}
});

sablono.core.color_field12184.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.color_field12184.call(null,name__8544__auto__,null);
});

sablono.core.color_field12184.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.color_field12184.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12184);

/**
 * Creates a date input field.
 */
sablono.core.date_field12188 = (function sablono$core$date_field12188(var_args){
var args12189 = [];
var len__5621__auto___12256 = arguments.length;
var i__5622__auto___12257 = (0);
while(true){
if((i__5622__auto___12257 < len__5621__auto___12256)){
args12189.push((arguments[i__5622__auto___12257]));

var G__12258 = (i__5622__auto___12257 + (1));
i__5622__auto___12257 = G__12258;
continue;
} else {
}
break;
}

var G__12191 = args12189.length;
switch (G__12191) {
case 1:
return sablono.core.date_field12188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field12188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12189.length)].join('')));

}
});

sablono.core.date_field12188.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.date_field12188.call(null,name__8544__auto__,null);
});

sablono.core.date_field12188.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.date_field12188.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12188);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field12192 = (function sablono$core$datetime_field12192(var_args){
var args12193 = [];
var len__5621__auto___12260 = arguments.length;
var i__5622__auto___12261 = (0);
while(true){
if((i__5622__auto___12261 < len__5621__auto___12260)){
args12193.push((arguments[i__5622__auto___12261]));

var G__12262 = (i__5622__auto___12261 + (1));
i__5622__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var G__12195 = args12193.length;
switch (G__12195) {
case 1:
return sablono.core.datetime_field12192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field12192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12193.length)].join('')));

}
});

sablono.core.datetime_field12192.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.datetime_field12192.call(null,name__8544__auto__,null);
});

sablono.core.datetime_field12192.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.datetime_field12192.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12192);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field12196 = (function sablono$core$datetime_local_field12196(var_args){
var args12197 = [];
var len__5621__auto___12264 = arguments.length;
var i__5622__auto___12265 = (0);
while(true){
if((i__5622__auto___12265 < len__5621__auto___12264)){
args12197.push((arguments[i__5622__auto___12265]));

var G__12266 = (i__5622__auto___12265 + (1));
i__5622__auto___12265 = G__12266;
continue;
} else {
}
break;
}

var G__12199 = args12197.length;
switch (G__12199) {
case 1:
return sablono.core.datetime_local_field12196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field12196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12197.length)].join('')));

}
});

sablono.core.datetime_local_field12196.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.datetime_local_field12196.call(null,name__8544__auto__,null);
});

sablono.core.datetime_local_field12196.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.datetime_local_field12196.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12196);

/**
 * Creates a email input field.
 */
sablono.core.email_field12200 = (function sablono$core$email_field12200(var_args){
var args12201 = [];
var len__5621__auto___12268 = arguments.length;
var i__5622__auto___12269 = (0);
while(true){
if((i__5622__auto___12269 < len__5621__auto___12268)){
args12201.push((arguments[i__5622__auto___12269]));

var G__12270 = (i__5622__auto___12269 + (1));
i__5622__auto___12269 = G__12270;
continue;
} else {
}
break;
}

var G__12203 = args12201.length;
switch (G__12203) {
case 1:
return sablono.core.email_field12200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field12200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12201.length)].join('')));

}
});

sablono.core.email_field12200.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.email_field12200.call(null,name__8544__auto__,null);
});

sablono.core.email_field12200.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.email_field12200.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12200);

/**
 * Creates a file input field.
 */
sablono.core.file_field12204 = (function sablono$core$file_field12204(var_args){
var args12205 = [];
var len__5621__auto___12272 = arguments.length;
var i__5622__auto___12273 = (0);
while(true){
if((i__5622__auto___12273 < len__5621__auto___12272)){
args12205.push((arguments[i__5622__auto___12273]));

var G__12274 = (i__5622__auto___12273 + (1));
i__5622__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var G__12207 = args12205.length;
switch (G__12207) {
case 1:
return sablono.core.file_field12204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field12204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12205.length)].join('')));

}
});

sablono.core.file_field12204.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.file_field12204.call(null,name__8544__auto__,null);
});

sablono.core.file_field12204.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.file_field12204.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12204);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field12208 = (function sablono$core$hidden_field12208(var_args){
var args12209 = [];
var len__5621__auto___12276 = arguments.length;
var i__5622__auto___12277 = (0);
while(true){
if((i__5622__auto___12277 < len__5621__auto___12276)){
args12209.push((arguments[i__5622__auto___12277]));

var G__12278 = (i__5622__auto___12277 + (1));
i__5622__auto___12277 = G__12278;
continue;
} else {
}
break;
}

var G__12211 = args12209.length;
switch (G__12211) {
case 1:
return sablono.core.hidden_field12208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field12208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12209.length)].join('')));

}
});

sablono.core.hidden_field12208.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.hidden_field12208.call(null,name__8544__auto__,null);
});

sablono.core.hidden_field12208.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.hidden_field12208.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12208);

/**
 * Creates a month input field.
 */
sablono.core.month_field12212 = (function sablono$core$month_field12212(var_args){
var args12213 = [];
var len__5621__auto___12280 = arguments.length;
var i__5622__auto___12281 = (0);
while(true){
if((i__5622__auto___12281 < len__5621__auto___12280)){
args12213.push((arguments[i__5622__auto___12281]));

var G__12282 = (i__5622__auto___12281 + (1));
i__5622__auto___12281 = G__12282;
continue;
} else {
}
break;
}

var G__12215 = args12213.length;
switch (G__12215) {
case 1:
return sablono.core.month_field12212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field12212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12213.length)].join('')));

}
});

sablono.core.month_field12212.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.month_field12212.call(null,name__8544__auto__,null);
});

sablono.core.month_field12212.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.month_field12212.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12212);

/**
 * Creates a number input field.
 */
sablono.core.number_field12216 = (function sablono$core$number_field12216(var_args){
var args12217 = [];
var len__5621__auto___12284 = arguments.length;
var i__5622__auto___12285 = (0);
while(true){
if((i__5622__auto___12285 < len__5621__auto___12284)){
args12217.push((arguments[i__5622__auto___12285]));

var G__12286 = (i__5622__auto___12285 + (1));
i__5622__auto___12285 = G__12286;
continue;
} else {
}
break;
}

var G__12219 = args12217.length;
switch (G__12219) {
case 1:
return sablono.core.number_field12216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field12216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12217.length)].join('')));

}
});

sablono.core.number_field12216.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.number_field12216.call(null,name__8544__auto__,null);
});

sablono.core.number_field12216.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.number_field12216.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12216);

/**
 * Creates a password input field.
 */
sablono.core.password_field12220 = (function sablono$core$password_field12220(var_args){
var args12221 = [];
var len__5621__auto___12288 = arguments.length;
var i__5622__auto___12289 = (0);
while(true){
if((i__5622__auto___12289 < len__5621__auto___12288)){
args12221.push((arguments[i__5622__auto___12289]));

var G__12290 = (i__5622__auto___12289 + (1));
i__5622__auto___12289 = G__12290;
continue;
} else {
}
break;
}

var G__12223 = args12221.length;
switch (G__12223) {
case 1:
return sablono.core.password_field12220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field12220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12221.length)].join('')));

}
});

sablono.core.password_field12220.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.password_field12220.call(null,name__8544__auto__,null);
});

sablono.core.password_field12220.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.password_field12220.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12220);

/**
 * Creates a range input field.
 */
sablono.core.range_field12224 = (function sablono$core$range_field12224(var_args){
var args12225 = [];
var len__5621__auto___12292 = arguments.length;
var i__5622__auto___12293 = (0);
while(true){
if((i__5622__auto___12293 < len__5621__auto___12292)){
args12225.push((arguments[i__5622__auto___12293]));

var G__12294 = (i__5622__auto___12293 + (1));
i__5622__auto___12293 = G__12294;
continue;
} else {
}
break;
}

var G__12227 = args12225.length;
switch (G__12227) {
case 1:
return sablono.core.range_field12224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field12224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12225.length)].join('')));

}
});

sablono.core.range_field12224.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.range_field12224.call(null,name__8544__auto__,null);
});

sablono.core.range_field12224.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.range_field12224.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12224);

/**
 * Creates a search input field.
 */
sablono.core.search_field12228 = (function sablono$core$search_field12228(var_args){
var args12229 = [];
var len__5621__auto___12296 = arguments.length;
var i__5622__auto___12297 = (0);
while(true){
if((i__5622__auto___12297 < len__5621__auto___12296)){
args12229.push((arguments[i__5622__auto___12297]));

var G__12298 = (i__5622__auto___12297 + (1));
i__5622__auto___12297 = G__12298;
continue;
} else {
}
break;
}

var G__12231 = args12229.length;
switch (G__12231) {
case 1:
return sablono.core.search_field12228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field12228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12229.length)].join('')));

}
});

sablono.core.search_field12228.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.search_field12228.call(null,name__8544__auto__,null);
});

sablono.core.search_field12228.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.search_field12228.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12228);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field12232 = (function sablono$core$tel_field12232(var_args){
var args12233 = [];
var len__5621__auto___12300 = arguments.length;
var i__5622__auto___12301 = (0);
while(true){
if((i__5622__auto___12301 < len__5621__auto___12300)){
args12233.push((arguments[i__5622__auto___12301]));

var G__12302 = (i__5622__auto___12301 + (1));
i__5622__auto___12301 = G__12302;
continue;
} else {
}
break;
}

var G__12235 = args12233.length;
switch (G__12235) {
case 1:
return sablono.core.tel_field12232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field12232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12233.length)].join('')));

}
});

sablono.core.tel_field12232.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.tel_field12232.call(null,name__8544__auto__,null);
});

sablono.core.tel_field12232.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.tel_field12232.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12232);

/**
 * Creates a text input field.
 */
sablono.core.text_field12236 = (function sablono$core$text_field12236(var_args){
var args12237 = [];
var len__5621__auto___12304 = arguments.length;
var i__5622__auto___12305 = (0);
while(true){
if((i__5622__auto___12305 < len__5621__auto___12304)){
args12237.push((arguments[i__5622__auto___12305]));

var G__12306 = (i__5622__auto___12305 + (1));
i__5622__auto___12305 = G__12306;
continue;
} else {
}
break;
}

var G__12239 = args12237.length;
switch (G__12239) {
case 1:
return sablono.core.text_field12236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field12236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12237.length)].join('')));

}
});

sablono.core.text_field12236.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.text_field12236.call(null,name__8544__auto__,null);
});

sablono.core.text_field12236.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.text_field12236.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12236);

/**
 * Creates a time input field.
 */
sablono.core.time_field12240 = (function sablono$core$time_field12240(var_args){
var args12241 = [];
var len__5621__auto___12308 = arguments.length;
var i__5622__auto___12309 = (0);
while(true){
if((i__5622__auto___12309 < len__5621__auto___12308)){
args12241.push((arguments[i__5622__auto___12309]));

var G__12310 = (i__5622__auto___12309 + (1));
i__5622__auto___12309 = G__12310;
continue;
} else {
}
break;
}

var G__12243 = args12241.length;
switch (G__12243) {
case 1:
return sablono.core.time_field12240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field12240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12241.length)].join('')));

}
});

sablono.core.time_field12240.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.time_field12240.call(null,name__8544__auto__,null);
});

sablono.core.time_field12240.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.time_field12240.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12240);

/**
 * Creates a url input field.
 */
sablono.core.url_field12244 = (function sablono$core$url_field12244(var_args){
var args12245 = [];
var len__5621__auto___12312 = arguments.length;
var i__5622__auto___12313 = (0);
while(true){
if((i__5622__auto___12313 < len__5621__auto___12312)){
args12245.push((arguments[i__5622__auto___12313]));

var G__12314 = (i__5622__auto___12313 + (1));
i__5622__auto___12313 = G__12314;
continue;
} else {
}
break;
}

var G__12247 = args12245.length;
switch (G__12247) {
case 1:
return sablono.core.url_field12244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field12244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12245.length)].join('')));

}
});

sablono.core.url_field12244.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.url_field12244.call(null,name__8544__auto__,null);
});

sablono.core.url_field12244.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.url_field12244.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12244);

/**
 * Creates a week input field.
 */
sablono.core.week_field12248 = (function sablono$core$week_field12248(var_args){
var args12249 = [];
var len__5621__auto___12316 = arguments.length;
var i__5622__auto___12317 = (0);
while(true){
if((i__5622__auto___12317 < len__5621__auto___12316)){
args12249.push((arguments[i__5622__auto___12317]));

var G__12318 = (i__5622__auto___12317 + (1));
i__5622__auto___12317 = G__12318;
continue;
} else {
}
break;
}

var G__12251 = args12249.length;
switch (G__12251) {
case 1:
return sablono.core.week_field12248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field12248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12249.length)].join('')));

}
});

sablono.core.week_field12248.cljs$core$IFn$_invoke$arity$1 = (function (name__8544__auto__){
return sablono.core.week_field12248.call(null,name__8544__auto__,null);
});

sablono.core.week_field12248.cljs$core$IFn$_invoke$arity$2 = (function (name__8544__auto__,value__8545__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__8544__auto__,value__8545__auto__);
});

sablono.core.week_field12248.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12248);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box12320 = (function sablono$core$check_box12320(var_args){
var args12321 = [];
var len__5621__auto___12324 = arguments.length;
var i__5622__auto___12325 = (0);
while(true){
if((i__5622__auto___12325 < len__5621__auto___12324)){
args12321.push((arguments[i__5622__auto___12325]));

var G__12326 = (i__5622__auto___12325 + (1));
i__5622__auto___12325 = G__12326;
continue;
} else {
}
break;
}

var G__12323 = args12321.length;
switch (G__12323) {
case 1:
return sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12321.length)].join('')));

}
});

sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box12320.call(null,name,null);
});

sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box12320.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box12320.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box12320.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12320);
/**
 * Creates a radio button.
 */
sablono.core.radio_button12328 = (function sablono$core$radio_button12328(var_args){
var args12329 = [];
var len__5621__auto___12332 = arguments.length;
var i__5622__auto___12333 = (0);
while(true){
if((i__5622__auto___12333 < len__5621__auto___12332)){
args12329.push((arguments[i__5622__auto___12333]));

var G__12334 = (i__5622__auto___12333 + (1));
i__5622__auto___12333 = G__12334;
continue;
} else {
}
break;
}

var G__12331 = args12329.length;
switch (G__12331) {
case 1:
return sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12329.length)].join('')));

}
});

sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button12328.call(null,group,null);
});

sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button12328.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button12328.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button12328.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12328);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options12336 = (function sablono$core$select_options12336(var_args){
var args12337 = [];
var len__5621__auto___12348 = arguments.length;
var i__5622__auto___12349 = (0);
while(true){
if((i__5622__auto___12349 < len__5621__auto___12348)){
args12337.push((arguments[i__5622__auto___12349]));

var G__12350 = (i__5622__auto___12349 + (1));
i__5622__auto___12349 = G__12350;
continue;
} else {
}
break;
}

var G__12339 = args12337.length;
switch (G__12339) {
case 1:
return sablono.core.select_options12336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options12336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12337.length)].join('')));

}
});

sablono.core.select_options12336.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options12336.call(null,coll,null);
});

sablono.core.select_options12336.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5335__auto__ = (function sablono$core$iter__12340(s__12341){
return (new cljs.core.LazySeq(null,(function (){
var s__12341__$1 = s__12341;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12341__$1);
if(temp__4425__auto__){
var s__12341__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12341__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__12341__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__12343 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__12342 = (0);
while(true){
if((i__12342 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__12342);
cljs.core.chunk_append.call(null,b__12343,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12346 = x;
var text = cljs.core.nth.call(null,vec__12346,(0),null);
var val = cljs.core.nth.call(null,vec__12346,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12346,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12336.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__12352 = (i__12342 + (1));
i__12342 = G__12352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),sablono$core$iter__12340.call(null,cljs.core.chunk_rest.call(null,s__12341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),null);
}
} else {
var x = cljs.core.first.call(null,s__12341__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12347 = x;
var text = cljs.core.nth.call(null,vec__12347,(0),null);
var val = cljs.core.nth.call(null,vec__12347,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__12347,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options12336.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__12340.call(null,cljs.core.rest.call(null,s__12341__$2)));
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

sablono.core.select_options12336.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12336);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12353 = (function sablono$core$drop_down12353(var_args){
var args12354 = [];
var len__5621__auto___12357 = arguments.length;
var i__5622__auto___12358 = (0);
while(true){
if((i__5622__auto___12358 < len__5621__auto___12357)){
args12354.push((arguments[i__5622__auto___12358]));

var G__12359 = (i__5622__auto___12358 + (1));
i__5622__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var G__12356 = args12354.length;
switch (G__12356) {
case 2:
return sablono.core.drop_down12353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12353.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12354.length)].join('')));

}
});

sablono.core.drop_down12353.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12353.call(null,name,options,null);
});

sablono.core.drop_down12353.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down12353.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12353);
/**
 * Creates a text area element.
 */
sablono.core.text_area12361 = (function sablono$core$text_area12361(var_args){
var args12362 = [];
var len__5621__auto___12365 = arguments.length;
var i__5622__auto___12366 = (0);
while(true){
if((i__5622__auto___12366 < len__5621__auto___12365)){
args12362.push((arguments[i__5622__auto___12366]));

var G__12367 = (i__5622__auto___12366 + (1));
i__5622__auto___12366 = G__12367;
continue;
} else {
}
break;
}

var G__12364 = args12362.length;
switch (G__12364) {
case 1:
return sablono.core.text_area12361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12362.length)].join('')));

}
});

sablono.core.text_area12361.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12361.call(null,name,null);
});

sablono.core.text_area12361.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area12361.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12361);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12369 = (function sablono$core$label12369(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12369);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12370 = (function sablono$core$submit_button12370(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12370);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12371 = (function sablono$core$reset_button12371(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12371);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12372 = (function sablono$core$form_to12372(var_args){
var args__5628__auto__ = [];
var len__5621__auto___12377 = arguments.length;
var i__5622__auto___12378 = (0);
while(true){
if((i__5622__auto___12378 < len__5621__auto___12377)){
args__5628__auto__.push((arguments[i__5622__auto___12378]));

var G__12379 = (i__5622__auto___12378 + (1));
i__5622__auto___12378 = G__12379;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.form_to12372.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.form_to12372.cljs$core$IFn$_invoke$arity$variadic = (function (p__12375,body){
var vec__12376 = p__12375;
var method = cljs.core.nth.call(null,vec__12376,(0),null);
var action = cljs.core.nth.call(null,vec__12376,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to12372.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12372.cljs$lang$applyTo = (function (seq12373){
var G__12374 = cljs.core.first.call(null,seq12373);
var seq12373__$1 = cljs.core.next.call(null,seq12373);
return sablono.core.form_to12372.cljs$core$IFn$_invoke$arity$variadic(G__12374,seq12373__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12372);
