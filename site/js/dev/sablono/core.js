// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11138__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11137 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11137,(0),null);
var body = cljs.core.nthnext.call(null,vec__11137,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11139__i = 0, G__11139__a = new Array(arguments.length -  0);
while (G__11139__i < G__11139__a.length) {G__11139__a[G__11139__i] = arguments[G__11139__i + 0]; ++G__11139__i;}
  args = new cljs.core.IndexedSeq(G__11139__a,0);
} 
return G__11138__delegate.call(this,args);};
G__11138.cljs$lang$maxFixedArity = 0;
G__11138.cljs$lang$applyTo = (function (arglist__11140){
var args = cljs.core.seq(arglist__11140);
return G__11138__delegate(args);
});
G__11138.cljs$core$IFn$_invoke$arity$variadic = G__11138__delegate;
return G__11138;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5335__auto__ = (function sablono$core$update_arglists_$_iter__11145(s__11146){
return (new cljs.core.LazySeq(null,(function (){
var s__11146__$1 = s__11146;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11146__$1);
if(temp__4425__auto__){
var s__11146__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11146__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11146__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11148 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11147 = (0);
while(true){
if((i__11147 < size__5334__auto__)){
var args = cljs.core._nth.call(null,c__5333__auto__,i__11147);
cljs.core.chunk_append.call(null,b__11148,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11149 = (i__11147 + (1));
i__11147 = G__11149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11148),sablono$core$update_arglists_$_iter__11145.call(null,cljs.core.chunk_rest.call(null,s__11146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11148),null);
}
} else {
var args = cljs.core.first.call(null,s__11146__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11145.call(null,cljs.core.rest.call(null,s__11146__$2)));
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
var len__5621__auto___11155 = arguments.length;
var i__5622__auto___11156 = (0);
while(true){
if((i__5622__auto___11156 < len__5621__auto___11155)){
args__5628__auto__.push((arguments[i__5622__auto___11156]));

var G__11157 = (i__5622__auto___11156 + (1));
i__5622__auto___11156 = G__11157;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5335__auto__ = (function sablono$core$iter__11151(s__11152){
return (new cljs.core.LazySeq(null,(function (){
var s__11152__$1 = s__11152;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11152__$1);
if(temp__4425__auto__){
var s__11152__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11152__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11152__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11154 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11153 = (0);
while(true){
if((i__11153 < size__5334__auto__)){
var style = cljs.core._nth.call(null,c__5333__auto__,i__11153);
cljs.core.chunk_append.call(null,b__11154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11158 = (i__11153 + (1));
i__11153 = G__11158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11154),sablono$core$iter__11151.call(null,cljs.core.chunk_rest.call(null,s__11152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11154),null);
}
} else {
var style = cljs.core.first.call(null,s__11152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11151.call(null,cljs.core.rest.call(null,s__11152__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq11150){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11150));
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
sablono.core.link_to11159 = (function sablono$core$link_to11159(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11162 = arguments.length;
var i__5622__auto___11163 = (0);
while(true){
if((i__5622__auto___11163 < len__5621__auto___11162)){
args__5628__auto__.push((arguments[i__5622__auto___11163]));

var G__11164 = (i__5622__auto___11163 + (1));
i__5622__auto___11163 = G__11164;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.link_to11159.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.link_to11159.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11159.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11159.cljs$lang$applyTo = (function (seq11160){
var G__11161 = cljs.core.first.call(null,seq11160);
var seq11160__$1 = cljs.core.next.call(null,seq11160);
return sablono.core.link_to11159.cljs$core$IFn$_invoke$arity$variadic(G__11161,seq11160__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11159);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11165 = (function sablono$core$mail_to11165(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11170 = arguments.length;
var i__5622__auto___11171 = (0);
while(true){
if((i__5622__auto___11171 < len__5621__auto___11170)){
args__5628__auto__.push((arguments[i__5622__auto___11171]));

var G__11172 = (i__5622__auto___11171 + (1));
i__5622__auto___11171 = G__11172;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11165.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.mail_to11165.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11168){
var vec__11169 = p__11168;
var content = cljs.core.nth.call(null,vec__11169,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4563__auto__ = content;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11165.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11165.cljs$lang$applyTo = (function (seq11166){
var G__11167 = cljs.core.first.call(null,seq11166);
var seq11166__$1 = cljs.core.next.call(null,seq11166);
return sablono.core.mail_to11165.cljs$core$IFn$_invoke$arity$variadic(G__11167,seq11166__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11165);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11173 = (function sablono$core$unordered_list11173(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5335__auto__ = (function sablono$core$unordered_list11173_$_iter__11178(s__11179){
return (new cljs.core.LazySeq(null,(function (){
var s__11179__$1 = s__11179;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11179__$1);
if(temp__4425__auto__){
var s__11179__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11179__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11179__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11181 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11180 = (0);
while(true){
if((i__11180 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11180);
cljs.core.chunk_append.call(null,b__11181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11182 = (i__11180 + (1));
i__11180 = G__11182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11181),sablono$core$unordered_list11173_$_iter__11178.call(null,cljs.core.chunk_rest.call(null,s__11179__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11181),null);
}
} else {
var x = cljs.core.first.call(null,s__11179__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11173_$_iter__11178.call(null,cljs.core.rest.call(null,s__11179__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11173);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11183 = (function sablono$core$ordered_list11183(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5335__auto__ = (function sablono$core$ordered_list11183_$_iter__11188(s__11189){
return (new cljs.core.LazySeq(null,(function (){
var s__11189__$1 = s__11189;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11189__$1);
if(temp__4425__auto__){
var s__11189__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11189__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11189__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11191 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11190 = (0);
while(true){
if((i__11190 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11190);
cljs.core.chunk_append.call(null,b__11191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11192 = (i__11190 + (1));
i__11190 = G__11192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11191),sablono$core$ordered_list11183_$_iter__11188.call(null,cljs.core.chunk_rest.call(null,s__11189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11191),null);
}
} else {
var x = cljs.core.first.call(null,s__11189__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11183_$_iter__11188.call(null,cljs.core.rest.call(null,s__11189__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11183);
/**
 * Create an image element.
 */
sablono.core.image11193 = (function sablono$core$image11193(var_args){
var args11194 = [];
var len__5621__auto___11197 = arguments.length;
var i__5622__auto___11198 = (0);
while(true){
if((i__5622__auto___11198 < len__5621__auto___11197)){
args11194.push((arguments[i__5622__auto___11198]));

var G__11199 = (i__5622__auto___11198 + (1));
i__5622__auto___11198 = G__11199;
continue;
} else {
}
break;
}

var G__11196 = args11194.length;
switch (G__11196) {
case 1:
return sablono.core.image11193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11194.length)].join('')));

}
});

sablono.core.image11193.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11193.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11193.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11193);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11201_SHARP_,p2__11202_SHARP_){
return [cljs.core.str(p1__11201_SHARP_),cljs.core.str("["),cljs.core.str(p2__11202_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11203_SHARP_,p2__11204_SHARP_){
return [cljs.core.str(p1__11203_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11204_SHARP_)].join('');
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
sablono.core.color_field11205 = (function sablono$core$color_field11205(var_args){
var args11206 = [];
var len__5621__auto___11273 = arguments.length;
var i__5622__auto___11274 = (0);
while(true){
if((i__5622__auto___11274 < len__5621__auto___11273)){
args11206.push((arguments[i__5622__auto___11274]));

var G__11275 = (i__5622__auto___11274 + (1));
i__5622__auto___11274 = G__11275;
continue;
} else {
}
break;
}

var G__11208 = args11206.length;
switch (G__11208) {
case 1:
return sablono.core.color_field11205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11206.length)].join('')));

}
});

sablono.core.color_field11205.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.color_field11205.call(null,name__7565__auto__,null);
});

sablono.core.color_field11205.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.color_field11205.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11205);

/**
 * Creates a date input field.
 */
sablono.core.date_field11209 = (function sablono$core$date_field11209(var_args){
var args11210 = [];
var len__5621__auto___11277 = arguments.length;
var i__5622__auto___11278 = (0);
while(true){
if((i__5622__auto___11278 < len__5621__auto___11277)){
args11210.push((arguments[i__5622__auto___11278]));

var G__11279 = (i__5622__auto___11278 + (1));
i__5622__auto___11278 = G__11279;
continue;
} else {
}
break;
}

var G__11212 = args11210.length;
switch (G__11212) {
case 1:
return sablono.core.date_field11209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11210.length)].join('')));

}
});

sablono.core.date_field11209.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.date_field11209.call(null,name__7565__auto__,null);
});

sablono.core.date_field11209.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.date_field11209.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11209);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11213 = (function sablono$core$datetime_field11213(var_args){
var args11214 = [];
var len__5621__auto___11281 = arguments.length;
var i__5622__auto___11282 = (0);
while(true){
if((i__5622__auto___11282 < len__5621__auto___11281)){
args11214.push((arguments[i__5622__auto___11282]));

var G__11283 = (i__5622__auto___11282 + (1));
i__5622__auto___11282 = G__11283;
continue;
} else {
}
break;
}

var G__11216 = args11214.length;
switch (G__11216) {
case 1:
return sablono.core.datetime_field11213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11214.length)].join('')));

}
});

sablono.core.datetime_field11213.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.datetime_field11213.call(null,name__7565__auto__,null);
});

sablono.core.datetime_field11213.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.datetime_field11213.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11213);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11217 = (function sablono$core$datetime_local_field11217(var_args){
var args11218 = [];
var len__5621__auto___11285 = arguments.length;
var i__5622__auto___11286 = (0);
while(true){
if((i__5622__auto___11286 < len__5621__auto___11285)){
args11218.push((arguments[i__5622__auto___11286]));

var G__11287 = (i__5622__auto___11286 + (1));
i__5622__auto___11286 = G__11287;
continue;
} else {
}
break;
}

var G__11220 = args11218.length;
switch (G__11220) {
case 1:
return sablono.core.datetime_local_field11217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11218.length)].join('')));

}
});

sablono.core.datetime_local_field11217.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.datetime_local_field11217.call(null,name__7565__auto__,null);
});

sablono.core.datetime_local_field11217.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.datetime_local_field11217.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11217);

/**
 * Creates a email input field.
 */
sablono.core.email_field11221 = (function sablono$core$email_field11221(var_args){
var args11222 = [];
var len__5621__auto___11289 = arguments.length;
var i__5622__auto___11290 = (0);
while(true){
if((i__5622__auto___11290 < len__5621__auto___11289)){
args11222.push((arguments[i__5622__auto___11290]));

var G__11291 = (i__5622__auto___11290 + (1));
i__5622__auto___11290 = G__11291;
continue;
} else {
}
break;
}

var G__11224 = args11222.length;
switch (G__11224) {
case 1:
return sablono.core.email_field11221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11222.length)].join('')));

}
});

sablono.core.email_field11221.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.email_field11221.call(null,name__7565__auto__,null);
});

sablono.core.email_field11221.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.email_field11221.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11221);

/**
 * Creates a file input field.
 */
sablono.core.file_field11225 = (function sablono$core$file_field11225(var_args){
var args11226 = [];
var len__5621__auto___11293 = arguments.length;
var i__5622__auto___11294 = (0);
while(true){
if((i__5622__auto___11294 < len__5621__auto___11293)){
args11226.push((arguments[i__5622__auto___11294]));

var G__11295 = (i__5622__auto___11294 + (1));
i__5622__auto___11294 = G__11295;
continue;
} else {
}
break;
}

var G__11228 = args11226.length;
switch (G__11228) {
case 1:
return sablono.core.file_field11225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11226.length)].join('')));

}
});

sablono.core.file_field11225.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.file_field11225.call(null,name__7565__auto__,null);
});

sablono.core.file_field11225.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.file_field11225.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11225);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11229 = (function sablono$core$hidden_field11229(var_args){
var args11230 = [];
var len__5621__auto___11297 = arguments.length;
var i__5622__auto___11298 = (0);
while(true){
if((i__5622__auto___11298 < len__5621__auto___11297)){
args11230.push((arguments[i__5622__auto___11298]));

var G__11299 = (i__5622__auto___11298 + (1));
i__5622__auto___11298 = G__11299;
continue;
} else {
}
break;
}

var G__11232 = args11230.length;
switch (G__11232) {
case 1:
return sablono.core.hidden_field11229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11230.length)].join('')));

}
});

sablono.core.hidden_field11229.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.hidden_field11229.call(null,name__7565__auto__,null);
});

sablono.core.hidden_field11229.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.hidden_field11229.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11229);

/**
 * Creates a month input field.
 */
sablono.core.month_field11233 = (function sablono$core$month_field11233(var_args){
var args11234 = [];
var len__5621__auto___11301 = arguments.length;
var i__5622__auto___11302 = (0);
while(true){
if((i__5622__auto___11302 < len__5621__auto___11301)){
args11234.push((arguments[i__5622__auto___11302]));

var G__11303 = (i__5622__auto___11302 + (1));
i__5622__auto___11302 = G__11303;
continue;
} else {
}
break;
}

var G__11236 = args11234.length;
switch (G__11236) {
case 1:
return sablono.core.month_field11233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11234.length)].join('')));

}
});

sablono.core.month_field11233.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.month_field11233.call(null,name__7565__auto__,null);
});

sablono.core.month_field11233.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.month_field11233.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11233);

/**
 * Creates a number input field.
 */
sablono.core.number_field11237 = (function sablono$core$number_field11237(var_args){
var args11238 = [];
var len__5621__auto___11305 = arguments.length;
var i__5622__auto___11306 = (0);
while(true){
if((i__5622__auto___11306 < len__5621__auto___11305)){
args11238.push((arguments[i__5622__auto___11306]));

var G__11307 = (i__5622__auto___11306 + (1));
i__5622__auto___11306 = G__11307;
continue;
} else {
}
break;
}

var G__11240 = args11238.length;
switch (G__11240) {
case 1:
return sablono.core.number_field11237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11238.length)].join('')));

}
});

sablono.core.number_field11237.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.number_field11237.call(null,name__7565__auto__,null);
});

sablono.core.number_field11237.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.number_field11237.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11237);

/**
 * Creates a password input field.
 */
sablono.core.password_field11241 = (function sablono$core$password_field11241(var_args){
var args11242 = [];
var len__5621__auto___11309 = arguments.length;
var i__5622__auto___11310 = (0);
while(true){
if((i__5622__auto___11310 < len__5621__auto___11309)){
args11242.push((arguments[i__5622__auto___11310]));

var G__11311 = (i__5622__auto___11310 + (1));
i__5622__auto___11310 = G__11311;
continue;
} else {
}
break;
}

var G__11244 = args11242.length;
switch (G__11244) {
case 1:
return sablono.core.password_field11241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11242.length)].join('')));

}
});

sablono.core.password_field11241.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.password_field11241.call(null,name__7565__auto__,null);
});

sablono.core.password_field11241.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.password_field11241.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11241);

/**
 * Creates a range input field.
 */
sablono.core.range_field11245 = (function sablono$core$range_field11245(var_args){
var args11246 = [];
var len__5621__auto___11313 = arguments.length;
var i__5622__auto___11314 = (0);
while(true){
if((i__5622__auto___11314 < len__5621__auto___11313)){
args11246.push((arguments[i__5622__auto___11314]));

var G__11315 = (i__5622__auto___11314 + (1));
i__5622__auto___11314 = G__11315;
continue;
} else {
}
break;
}

var G__11248 = args11246.length;
switch (G__11248) {
case 1:
return sablono.core.range_field11245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11246.length)].join('')));

}
});

sablono.core.range_field11245.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.range_field11245.call(null,name__7565__auto__,null);
});

sablono.core.range_field11245.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.range_field11245.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11245);

/**
 * Creates a search input field.
 */
sablono.core.search_field11249 = (function sablono$core$search_field11249(var_args){
var args11250 = [];
var len__5621__auto___11317 = arguments.length;
var i__5622__auto___11318 = (0);
while(true){
if((i__5622__auto___11318 < len__5621__auto___11317)){
args11250.push((arguments[i__5622__auto___11318]));

var G__11319 = (i__5622__auto___11318 + (1));
i__5622__auto___11318 = G__11319;
continue;
} else {
}
break;
}

var G__11252 = args11250.length;
switch (G__11252) {
case 1:
return sablono.core.search_field11249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11250.length)].join('')));

}
});

sablono.core.search_field11249.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.search_field11249.call(null,name__7565__auto__,null);
});

sablono.core.search_field11249.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.search_field11249.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11249);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11253 = (function sablono$core$tel_field11253(var_args){
var args11254 = [];
var len__5621__auto___11321 = arguments.length;
var i__5622__auto___11322 = (0);
while(true){
if((i__5622__auto___11322 < len__5621__auto___11321)){
args11254.push((arguments[i__5622__auto___11322]));

var G__11323 = (i__5622__auto___11322 + (1));
i__5622__auto___11322 = G__11323;
continue;
} else {
}
break;
}

var G__11256 = args11254.length;
switch (G__11256) {
case 1:
return sablono.core.tel_field11253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11254.length)].join('')));

}
});

sablono.core.tel_field11253.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.tel_field11253.call(null,name__7565__auto__,null);
});

sablono.core.tel_field11253.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.tel_field11253.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11253);

/**
 * Creates a text input field.
 */
sablono.core.text_field11257 = (function sablono$core$text_field11257(var_args){
var args11258 = [];
var len__5621__auto___11325 = arguments.length;
var i__5622__auto___11326 = (0);
while(true){
if((i__5622__auto___11326 < len__5621__auto___11325)){
args11258.push((arguments[i__5622__auto___11326]));

var G__11327 = (i__5622__auto___11326 + (1));
i__5622__auto___11326 = G__11327;
continue;
} else {
}
break;
}

var G__11260 = args11258.length;
switch (G__11260) {
case 1:
return sablono.core.text_field11257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11258.length)].join('')));

}
});

sablono.core.text_field11257.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.text_field11257.call(null,name__7565__auto__,null);
});

sablono.core.text_field11257.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.text_field11257.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11257);

/**
 * Creates a time input field.
 */
sablono.core.time_field11261 = (function sablono$core$time_field11261(var_args){
var args11262 = [];
var len__5621__auto___11329 = arguments.length;
var i__5622__auto___11330 = (0);
while(true){
if((i__5622__auto___11330 < len__5621__auto___11329)){
args11262.push((arguments[i__5622__auto___11330]));

var G__11331 = (i__5622__auto___11330 + (1));
i__5622__auto___11330 = G__11331;
continue;
} else {
}
break;
}

var G__11264 = args11262.length;
switch (G__11264) {
case 1:
return sablono.core.time_field11261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11262.length)].join('')));

}
});

sablono.core.time_field11261.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.time_field11261.call(null,name__7565__auto__,null);
});

sablono.core.time_field11261.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.time_field11261.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11261);

/**
 * Creates a url input field.
 */
sablono.core.url_field11265 = (function sablono$core$url_field11265(var_args){
var args11266 = [];
var len__5621__auto___11333 = arguments.length;
var i__5622__auto___11334 = (0);
while(true){
if((i__5622__auto___11334 < len__5621__auto___11333)){
args11266.push((arguments[i__5622__auto___11334]));

var G__11335 = (i__5622__auto___11334 + (1));
i__5622__auto___11334 = G__11335;
continue;
} else {
}
break;
}

var G__11268 = args11266.length;
switch (G__11268) {
case 1:
return sablono.core.url_field11265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11266.length)].join('')));

}
});

sablono.core.url_field11265.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.url_field11265.call(null,name__7565__auto__,null);
});

sablono.core.url_field11265.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.url_field11265.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11265);

/**
 * Creates a week input field.
 */
sablono.core.week_field11269 = (function sablono$core$week_field11269(var_args){
var args11270 = [];
var len__5621__auto___11337 = arguments.length;
var i__5622__auto___11338 = (0);
while(true){
if((i__5622__auto___11338 < len__5621__auto___11337)){
args11270.push((arguments[i__5622__auto___11338]));

var G__11339 = (i__5622__auto___11338 + (1));
i__5622__auto___11338 = G__11339;
continue;
} else {
}
break;
}

var G__11272 = args11270.length;
switch (G__11272) {
case 1:
return sablono.core.week_field11269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11270.length)].join('')));

}
});

sablono.core.week_field11269.cljs$core$IFn$_invoke$arity$1 = (function (name__7565__auto__){
return sablono.core.week_field11269.call(null,name__7565__auto__,null);
});

sablono.core.week_field11269.cljs$core$IFn$_invoke$arity$2 = (function (name__7565__auto__,value__7566__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__7565__auto__,value__7566__auto__);
});

sablono.core.week_field11269.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11269);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11341 = (function sablono$core$check_box11341(var_args){
var args11342 = [];
var len__5621__auto___11345 = arguments.length;
var i__5622__auto___11346 = (0);
while(true){
if((i__5622__auto___11346 < len__5621__auto___11345)){
args11342.push((arguments[i__5622__auto___11346]));

var G__11347 = (i__5622__auto___11346 + (1));
i__5622__auto___11346 = G__11347;
continue;
} else {
}
break;
}

var G__11344 = args11342.length;
switch (G__11344) {
case 1:
return sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11342.length)].join('')));

}
});

sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11341.call(null,name,null);
});

sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11341.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11341.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11341.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11341);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11349 = (function sablono$core$radio_button11349(var_args){
var args11350 = [];
var len__5621__auto___11353 = arguments.length;
var i__5622__auto___11354 = (0);
while(true){
if((i__5622__auto___11354 < len__5621__auto___11353)){
args11350.push((arguments[i__5622__auto___11354]));

var G__11355 = (i__5622__auto___11354 + (1));
i__5622__auto___11354 = G__11355;
continue;
} else {
}
break;
}

var G__11352 = args11350.length;
switch (G__11352) {
case 1:
return sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11350.length)].join('')));

}
});

sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11349.call(null,group,null);
});

sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11349.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11349.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11349.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11349);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11357 = (function sablono$core$select_options11357(var_args){
var args11358 = [];
var len__5621__auto___11369 = arguments.length;
var i__5622__auto___11370 = (0);
while(true){
if((i__5622__auto___11370 < len__5621__auto___11369)){
args11358.push((arguments[i__5622__auto___11370]));

var G__11371 = (i__5622__auto___11370 + (1));
i__5622__auto___11370 = G__11371;
continue;
} else {
}
break;
}

var G__11360 = args11358.length;
switch (G__11360) {
case 1:
return sablono.core.select_options11357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options11357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11358.length)].join('')));

}
});

sablono.core.select_options11357.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options11357.call(null,coll,null);
});

sablono.core.select_options11357.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5335__auto__ = (function sablono$core$iter__11361(s__11362){
return (new cljs.core.LazySeq(null,(function (){
var s__11362__$1 = s__11362;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11362__$1);
if(temp__4425__auto__){
var s__11362__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11362__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11362__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11364 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11363 = (0);
while(true){
if((i__11363 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11363);
cljs.core.chunk_append.call(null,b__11364,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11367 = x;
var text = cljs.core.nth.call(null,vec__11367,(0),null);
var val = cljs.core.nth.call(null,vec__11367,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11367,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11357.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__11373 = (i__11363 + (1));
i__11363 = G__11373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11364),sablono$core$iter__11361.call(null,cljs.core.chunk_rest.call(null,s__11362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11364),null);
}
} else {
var x = cljs.core.first.call(null,s__11362__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11368 = x;
var text = cljs.core.nth.call(null,vec__11368,(0),null);
var val = cljs.core.nth.call(null,vec__11368,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11368,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11357.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__11361.call(null,cljs.core.rest.call(null,s__11362__$2)));
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

sablono.core.select_options11357.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11357);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11374 = (function sablono$core$drop_down11374(var_args){
var args11375 = [];
var len__5621__auto___11378 = arguments.length;
var i__5622__auto___11379 = (0);
while(true){
if((i__5622__auto___11379 < len__5621__auto___11378)){
args11375.push((arguments[i__5622__auto___11379]));

var G__11380 = (i__5622__auto___11379 + (1));
i__5622__auto___11379 = G__11380;
continue;
} else {
}
break;
}

var G__11377 = args11375.length;
switch (G__11377) {
case 2:
return sablono.core.drop_down11374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11374.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11375.length)].join('')));

}
});

sablono.core.drop_down11374.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11374.call(null,name,options,null);
});

sablono.core.drop_down11374.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11374.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11374);
/**
 * Creates a text area element.
 */
sablono.core.text_area11382 = (function sablono$core$text_area11382(var_args){
var args11383 = [];
var len__5621__auto___11386 = arguments.length;
var i__5622__auto___11387 = (0);
while(true){
if((i__5622__auto___11387 < len__5621__auto___11386)){
args11383.push((arguments[i__5622__auto___11387]));

var G__11388 = (i__5622__auto___11387 + (1));
i__5622__auto___11387 = G__11388;
continue;
} else {
}
break;
}

var G__11385 = args11383.length;
switch (G__11385) {
case 1:
return sablono.core.text_area11382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11383.length)].join('')));

}
});

sablono.core.text_area11382.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11382.call(null,name,null);
});

sablono.core.text_area11382.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area11382.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11382);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11390 = (function sablono$core$label11390(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11390);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11391 = (function sablono$core$submit_button11391(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11391);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11392 = (function sablono$core$reset_button11392(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11392);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11393 = (function sablono$core$form_to11393(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11398 = arguments.length;
var i__5622__auto___11399 = (0);
while(true){
if((i__5622__auto___11399 < len__5621__auto___11398)){
args__5628__auto__.push((arguments[i__5622__auto___11399]));

var G__11400 = (i__5622__auto___11399 + (1));
i__5622__auto___11399 = G__11400;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.form_to11393.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.form_to11393.cljs$core$IFn$_invoke$arity$variadic = (function (p__11396,body){
var vec__11397 = p__11396;
var method = cljs.core.nth.call(null,vec__11397,(0),null);
var action = cljs.core.nth.call(null,vec__11397,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to11393.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11393.cljs$lang$applyTo = (function (seq11394){
var G__11395 = cljs.core.first.call(null,seq11394);
var seq11394__$1 = cljs.core.next.call(null,seq11394);
return sablono.core.form_to11393.cljs$core$IFn$_invoke$arity$variadic(G__11395,seq11394__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11393);

//# sourceMappingURL=core.js.map