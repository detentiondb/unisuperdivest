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
var G__11310__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11309 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11309,(0),null);
var body = cljs.core.nthnext.call(null,vec__11309,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11311__i = 0, G__11311__a = new Array(arguments.length -  0);
while (G__11311__i < G__11311__a.length) {G__11311__a[G__11311__i] = arguments[G__11311__i + 0]; ++G__11311__i;}
  args = new cljs.core.IndexedSeq(G__11311__a,0);
} 
return G__11310__delegate.call(this,args);};
G__11310.cljs$lang$maxFixedArity = 0;
G__11310.cljs$lang$applyTo = (function (arglist__11312){
var args = cljs.core.seq(arglist__11312);
return G__11310__delegate(args);
});
G__11310.cljs$core$IFn$_invoke$arity$variadic = G__11310__delegate;
return G__11310;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5335__auto__ = (function sablono$core$update_arglists_$_iter__11317(s__11318){
return (new cljs.core.LazySeq(null,(function (){
var s__11318__$1 = s__11318;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11318__$1);
if(temp__4425__auto__){
var s__11318__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11318__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11318__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11320 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11319 = (0);
while(true){
if((i__11319 < size__5334__auto__)){
var args = cljs.core._nth.call(null,c__5333__auto__,i__11319);
cljs.core.chunk_append.call(null,b__11320,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11321 = (i__11319 + (1));
i__11319 = G__11321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11320),sablono$core$update_arglists_$_iter__11317.call(null,cljs.core.chunk_rest.call(null,s__11318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11320),null);
}
} else {
var args = cljs.core.first.call(null,s__11318__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11317.call(null,cljs.core.rest.call(null,s__11318__$2)));
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
 * Render the React `component` as an HTML string.
 */
sablono.core.render = (function sablono$core$render(component){
return React.renderComponentToString(component);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11327 = arguments.length;
var i__5622__auto___11328 = (0);
while(true){
if((i__5622__auto___11328 < len__5621__auto___11327)){
args__5628__auto__.push((arguments[i__5622__auto___11328]));

var G__11329 = (i__5622__auto___11328 + (1));
i__5622__auto___11328 = G__11329;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5335__auto__ = (function sablono$core$iter__11323(s__11324){
return (new cljs.core.LazySeq(null,(function (){
var s__11324__$1 = s__11324;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11324__$1);
if(temp__4425__auto__){
var s__11324__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11324__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11324__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11326 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11325 = (0);
while(true){
if((i__11325 < size__5334__auto__)){
var style = cljs.core._nth.call(null,c__5333__auto__,i__11325);
cljs.core.chunk_append.call(null,b__11326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11330 = (i__11325 + (1));
i__11325 = G__11330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11326),sablono$core$iter__11323.call(null,cljs.core.chunk_rest.call(null,s__11324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11326),null);
}
} else {
var style = cljs.core.first.call(null,s__11324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11323.call(null,cljs.core.rest.call(null,s__11324__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq11322){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11322));
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
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to11331 = (function sablono$core$link_to11331(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11334 = arguments.length;
var i__5622__auto___11335 = (0);
while(true){
if((i__5622__auto___11335 < len__5621__auto___11334)){
args__5628__auto__.push((arguments[i__5622__auto___11335]));

var G__11336 = (i__5622__auto___11335 + (1));
i__5622__auto___11335 = G__11336;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.link_to11331.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.link_to11331.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11331.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11331.cljs$lang$applyTo = (function (seq11332){
var G__11333 = cljs.core.first.call(null,seq11332);
var seq11332__$1 = cljs.core.next.call(null,seq11332);
return sablono.core.link_to11331.cljs$core$IFn$_invoke$arity$variadic(G__11333,seq11332__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11331);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11337 = (function sablono$core$mail_to11337(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11342 = arguments.length;
var i__5622__auto___11343 = (0);
while(true){
if((i__5622__auto___11343 < len__5621__auto___11342)){
args__5628__auto__.push((arguments[i__5622__auto___11343]));

var G__11344 = (i__5622__auto___11343 + (1));
i__5622__auto___11343 = G__11344;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11337.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.mail_to11337.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11340){
var vec__11341 = p__11340;
var content = cljs.core.nth.call(null,vec__11341,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4563__auto__ = content;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11337.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11337.cljs$lang$applyTo = (function (seq11338){
var G__11339 = cljs.core.first.call(null,seq11338);
var seq11338__$1 = cljs.core.next.call(null,seq11338);
return sablono.core.mail_to11337.cljs$core$IFn$_invoke$arity$variadic(G__11339,seq11338__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11337);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11345 = (function sablono$core$unordered_list11345(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5335__auto__ = (function sablono$core$unordered_list11345_$_iter__11350(s__11351){
return (new cljs.core.LazySeq(null,(function (){
var s__11351__$1 = s__11351;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11351__$1);
if(temp__4425__auto__){
var s__11351__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11351__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11351__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11353 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11352 = (0);
while(true){
if((i__11352 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11352);
cljs.core.chunk_append.call(null,b__11353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11354 = (i__11352 + (1));
i__11352 = G__11354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11353),sablono$core$unordered_list11345_$_iter__11350.call(null,cljs.core.chunk_rest.call(null,s__11351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11353),null);
}
} else {
var x = cljs.core.first.call(null,s__11351__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11345_$_iter__11350.call(null,cljs.core.rest.call(null,s__11351__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11345);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11355 = (function sablono$core$ordered_list11355(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5335__auto__ = (function sablono$core$ordered_list11355_$_iter__11360(s__11361){
return (new cljs.core.LazySeq(null,(function (){
var s__11361__$1 = s__11361;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11361__$1);
if(temp__4425__auto__){
var s__11361__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11361__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11361__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11363 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11362 = (0);
while(true){
if((i__11362 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11362);
cljs.core.chunk_append.call(null,b__11363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11364 = (i__11362 + (1));
i__11362 = G__11364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11363),sablono$core$ordered_list11355_$_iter__11360.call(null,cljs.core.chunk_rest.call(null,s__11361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11363),null);
}
} else {
var x = cljs.core.first.call(null,s__11361__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11355_$_iter__11360.call(null,cljs.core.rest.call(null,s__11361__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11355);
/**
 * Create an image element.
 */
sablono.core.image11365 = (function sablono$core$image11365(var_args){
var args11366 = [];
var len__5621__auto___11369 = arguments.length;
var i__5622__auto___11370 = (0);
while(true){
if((i__5622__auto___11370 < len__5621__auto___11369)){
args11366.push((arguments[i__5622__auto___11370]));

var G__11371 = (i__5622__auto___11370 + (1));
i__5622__auto___11370 = G__11371;
continue;
} else {
}
break;
}

var G__11368 = args11366.length;
switch (G__11368) {
case 1:
return sablono.core.image11365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11366.length)].join('')));

}
});

sablono.core.image11365.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11365.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11365.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11365);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11373_SHARP_,p2__11374_SHARP_){
return [cljs.core.str(p1__11373_SHARP_),cljs.core.str("["),cljs.core.str(p2__11374_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11375_SHARP_,p2__11376_SHARP_){
return [cljs.core.str(p1__11375_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11376_SHARP_)].join('');
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
sablono.core.color_field11377 = (function sablono$core$color_field11377(var_args){
var args11378 = [];
var len__5621__auto___11445 = arguments.length;
var i__5622__auto___11446 = (0);
while(true){
if((i__5622__auto___11446 < len__5621__auto___11445)){
args11378.push((arguments[i__5622__auto___11446]));

var G__11447 = (i__5622__auto___11446 + (1));
i__5622__auto___11446 = G__11447;
continue;
} else {
}
break;
}

var G__11380 = args11378.length;
switch (G__11380) {
case 1:
return sablono.core.color_field11377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11378.length)].join('')));

}
});

sablono.core.color_field11377.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.color_field11377.call(null,name__8367__auto__,null);
});

sablono.core.color_field11377.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.color_field11377.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11377);

/**
 * Creates a date input field.
 */
sablono.core.date_field11381 = (function sablono$core$date_field11381(var_args){
var args11382 = [];
var len__5621__auto___11449 = arguments.length;
var i__5622__auto___11450 = (0);
while(true){
if((i__5622__auto___11450 < len__5621__auto___11449)){
args11382.push((arguments[i__5622__auto___11450]));

var G__11451 = (i__5622__auto___11450 + (1));
i__5622__auto___11450 = G__11451;
continue;
} else {
}
break;
}

var G__11384 = args11382.length;
switch (G__11384) {
case 1:
return sablono.core.date_field11381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11382.length)].join('')));

}
});

sablono.core.date_field11381.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.date_field11381.call(null,name__8367__auto__,null);
});

sablono.core.date_field11381.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.date_field11381.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11381);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11385 = (function sablono$core$datetime_field11385(var_args){
var args11386 = [];
var len__5621__auto___11453 = arguments.length;
var i__5622__auto___11454 = (0);
while(true){
if((i__5622__auto___11454 < len__5621__auto___11453)){
args11386.push((arguments[i__5622__auto___11454]));

var G__11455 = (i__5622__auto___11454 + (1));
i__5622__auto___11454 = G__11455;
continue;
} else {
}
break;
}

var G__11388 = args11386.length;
switch (G__11388) {
case 1:
return sablono.core.datetime_field11385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11386.length)].join('')));

}
});

sablono.core.datetime_field11385.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.datetime_field11385.call(null,name__8367__auto__,null);
});

sablono.core.datetime_field11385.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.datetime_field11385.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11385);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11389 = (function sablono$core$datetime_local_field11389(var_args){
var args11390 = [];
var len__5621__auto___11457 = arguments.length;
var i__5622__auto___11458 = (0);
while(true){
if((i__5622__auto___11458 < len__5621__auto___11457)){
args11390.push((arguments[i__5622__auto___11458]));

var G__11459 = (i__5622__auto___11458 + (1));
i__5622__auto___11458 = G__11459;
continue;
} else {
}
break;
}

var G__11392 = args11390.length;
switch (G__11392) {
case 1:
return sablono.core.datetime_local_field11389.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11389.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11390.length)].join('')));

}
});

sablono.core.datetime_local_field11389.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.datetime_local_field11389.call(null,name__8367__auto__,null);
});

sablono.core.datetime_local_field11389.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.datetime_local_field11389.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11389);

/**
 * Creates a email input field.
 */
sablono.core.email_field11393 = (function sablono$core$email_field11393(var_args){
var args11394 = [];
var len__5621__auto___11461 = arguments.length;
var i__5622__auto___11462 = (0);
while(true){
if((i__5622__auto___11462 < len__5621__auto___11461)){
args11394.push((arguments[i__5622__auto___11462]));

var G__11463 = (i__5622__auto___11462 + (1));
i__5622__auto___11462 = G__11463;
continue;
} else {
}
break;
}

var G__11396 = args11394.length;
switch (G__11396) {
case 1:
return sablono.core.email_field11393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11394.length)].join('')));

}
});

sablono.core.email_field11393.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.email_field11393.call(null,name__8367__auto__,null);
});

sablono.core.email_field11393.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.email_field11393.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11393);

/**
 * Creates a file input field.
 */
sablono.core.file_field11397 = (function sablono$core$file_field11397(var_args){
var args11398 = [];
var len__5621__auto___11465 = arguments.length;
var i__5622__auto___11466 = (0);
while(true){
if((i__5622__auto___11466 < len__5621__auto___11465)){
args11398.push((arguments[i__5622__auto___11466]));

var G__11467 = (i__5622__auto___11466 + (1));
i__5622__auto___11466 = G__11467;
continue;
} else {
}
break;
}

var G__11400 = args11398.length;
switch (G__11400) {
case 1:
return sablono.core.file_field11397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11398.length)].join('')));

}
});

sablono.core.file_field11397.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.file_field11397.call(null,name__8367__auto__,null);
});

sablono.core.file_field11397.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.file_field11397.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11397);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11401 = (function sablono$core$hidden_field11401(var_args){
var args11402 = [];
var len__5621__auto___11469 = arguments.length;
var i__5622__auto___11470 = (0);
while(true){
if((i__5622__auto___11470 < len__5621__auto___11469)){
args11402.push((arguments[i__5622__auto___11470]));

var G__11471 = (i__5622__auto___11470 + (1));
i__5622__auto___11470 = G__11471;
continue;
} else {
}
break;
}

var G__11404 = args11402.length;
switch (G__11404) {
case 1:
return sablono.core.hidden_field11401.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11401.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11402.length)].join('')));

}
});

sablono.core.hidden_field11401.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.hidden_field11401.call(null,name__8367__auto__,null);
});

sablono.core.hidden_field11401.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.hidden_field11401.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11401);

/**
 * Creates a month input field.
 */
sablono.core.month_field11405 = (function sablono$core$month_field11405(var_args){
var args11406 = [];
var len__5621__auto___11473 = arguments.length;
var i__5622__auto___11474 = (0);
while(true){
if((i__5622__auto___11474 < len__5621__auto___11473)){
args11406.push((arguments[i__5622__auto___11474]));

var G__11475 = (i__5622__auto___11474 + (1));
i__5622__auto___11474 = G__11475;
continue;
} else {
}
break;
}

var G__11408 = args11406.length;
switch (G__11408) {
case 1:
return sablono.core.month_field11405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11406.length)].join('')));

}
});

sablono.core.month_field11405.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.month_field11405.call(null,name__8367__auto__,null);
});

sablono.core.month_field11405.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.month_field11405.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11405);

/**
 * Creates a number input field.
 */
sablono.core.number_field11409 = (function sablono$core$number_field11409(var_args){
var args11410 = [];
var len__5621__auto___11477 = arguments.length;
var i__5622__auto___11478 = (0);
while(true){
if((i__5622__auto___11478 < len__5621__auto___11477)){
args11410.push((arguments[i__5622__auto___11478]));

var G__11479 = (i__5622__auto___11478 + (1));
i__5622__auto___11478 = G__11479;
continue;
} else {
}
break;
}

var G__11412 = args11410.length;
switch (G__11412) {
case 1:
return sablono.core.number_field11409.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11409.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11410.length)].join('')));

}
});

sablono.core.number_field11409.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.number_field11409.call(null,name__8367__auto__,null);
});

sablono.core.number_field11409.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.number_field11409.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11409);

/**
 * Creates a password input field.
 */
sablono.core.password_field11413 = (function sablono$core$password_field11413(var_args){
var args11414 = [];
var len__5621__auto___11481 = arguments.length;
var i__5622__auto___11482 = (0);
while(true){
if((i__5622__auto___11482 < len__5621__auto___11481)){
args11414.push((arguments[i__5622__auto___11482]));

var G__11483 = (i__5622__auto___11482 + (1));
i__5622__auto___11482 = G__11483;
continue;
} else {
}
break;
}

var G__11416 = args11414.length;
switch (G__11416) {
case 1:
return sablono.core.password_field11413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11414.length)].join('')));

}
});

sablono.core.password_field11413.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.password_field11413.call(null,name__8367__auto__,null);
});

sablono.core.password_field11413.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.password_field11413.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11413);

/**
 * Creates a range input field.
 */
sablono.core.range_field11417 = (function sablono$core$range_field11417(var_args){
var args11418 = [];
var len__5621__auto___11485 = arguments.length;
var i__5622__auto___11486 = (0);
while(true){
if((i__5622__auto___11486 < len__5621__auto___11485)){
args11418.push((arguments[i__5622__auto___11486]));

var G__11487 = (i__5622__auto___11486 + (1));
i__5622__auto___11486 = G__11487;
continue;
} else {
}
break;
}

var G__11420 = args11418.length;
switch (G__11420) {
case 1:
return sablono.core.range_field11417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11418.length)].join('')));

}
});

sablono.core.range_field11417.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.range_field11417.call(null,name__8367__auto__,null);
});

sablono.core.range_field11417.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.range_field11417.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11417);

/**
 * Creates a search input field.
 */
sablono.core.search_field11421 = (function sablono$core$search_field11421(var_args){
var args11422 = [];
var len__5621__auto___11489 = arguments.length;
var i__5622__auto___11490 = (0);
while(true){
if((i__5622__auto___11490 < len__5621__auto___11489)){
args11422.push((arguments[i__5622__auto___11490]));

var G__11491 = (i__5622__auto___11490 + (1));
i__5622__auto___11490 = G__11491;
continue;
} else {
}
break;
}

var G__11424 = args11422.length;
switch (G__11424) {
case 1:
return sablono.core.search_field11421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11422.length)].join('')));

}
});

sablono.core.search_field11421.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.search_field11421.call(null,name__8367__auto__,null);
});

sablono.core.search_field11421.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.search_field11421.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11421);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11425 = (function sablono$core$tel_field11425(var_args){
var args11426 = [];
var len__5621__auto___11493 = arguments.length;
var i__5622__auto___11494 = (0);
while(true){
if((i__5622__auto___11494 < len__5621__auto___11493)){
args11426.push((arguments[i__5622__auto___11494]));

var G__11495 = (i__5622__auto___11494 + (1));
i__5622__auto___11494 = G__11495;
continue;
} else {
}
break;
}

var G__11428 = args11426.length;
switch (G__11428) {
case 1:
return sablono.core.tel_field11425.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11425.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11426.length)].join('')));

}
});

sablono.core.tel_field11425.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.tel_field11425.call(null,name__8367__auto__,null);
});

sablono.core.tel_field11425.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.tel_field11425.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11425);

/**
 * Creates a text input field.
 */
sablono.core.text_field11429 = (function sablono$core$text_field11429(var_args){
var args11430 = [];
var len__5621__auto___11497 = arguments.length;
var i__5622__auto___11498 = (0);
while(true){
if((i__5622__auto___11498 < len__5621__auto___11497)){
args11430.push((arguments[i__5622__auto___11498]));

var G__11499 = (i__5622__auto___11498 + (1));
i__5622__auto___11498 = G__11499;
continue;
} else {
}
break;
}

var G__11432 = args11430.length;
switch (G__11432) {
case 1:
return sablono.core.text_field11429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11430.length)].join('')));

}
});

sablono.core.text_field11429.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.text_field11429.call(null,name__8367__auto__,null);
});

sablono.core.text_field11429.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.text_field11429.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11429);

/**
 * Creates a time input field.
 */
sablono.core.time_field11433 = (function sablono$core$time_field11433(var_args){
var args11434 = [];
var len__5621__auto___11501 = arguments.length;
var i__5622__auto___11502 = (0);
while(true){
if((i__5622__auto___11502 < len__5621__auto___11501)){
args11434.push((arguments[i__5622__auto___11502]));

var G__11503 = (i__5622__auto___11502 + (1));
i__5622__auto___11502 = G__11503;
continue;
} else {
}
break;
}

var G__11436 = args11434.length;
switch (G__11436) {
case 1:
return sablono.core.time_field11433.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11433.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11434.length)].join('')));

}
});

sablono.core.time_field11433.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.time_field11433.call(null,name__8367__auto__,null);
});

sablono.core.time_field11433.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.time_field11433.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11433);

/**
 * Creates a url input field.
 */
sablono.core.url_field11437 = (function sablono$core$url_field11437(var_args){
var args11438 = [];
var len__5621__auto___11505 = arguments.length;
var i__5622__auto___11506 = (0);
while(true){
if((i__5622__auto___11506 < len__5621__auto___11505)){
args11438.push((arguments[i__5622__auto___11506]));

var G__11507 = (i__5622__auto___11506 + (1));
i__5622__auto___11506 = G__11507;
continue;
} else {
}
break;
}

var G__11440 = args11438.length;
switch (G__11440) {
case 1:
return sablono.core.url_field11437.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11437.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11438.length)].join('')));

}
});

sablono.core.url_field11437.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.url_field11437.call(null,name__8367__auto__,null);
});

sablono.core.url_field11437.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.url_field11437.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11437);

/**
 * Creates a week input field.
 */
sablono.core.week_field11441 = (function sablono$core$week_field11441(var_args){
var args11442 = [];
var len__5621__auto___11509 = arguments.length;
var i__5622__auto___11510 = (0);
while(true){
if((i__5622__auto___11510 < len__5621__auto___11509)){
args11442.push((arguments[i__5622__auto___11510]));

var G__11511 = (i__5622__auto___11510 + (1));
i__5622__auto___11510 = G__11511;
continue;
} else {
}
break;
}

var G__11444 = args11442.length;
switch (G__11444) {
case 1:
return sablono.core.week_field11441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11442.length)].join('')));

}
});

sablono.core.week_field11441.cljs$core$IFn$_invoke$arity$1 = (function (name__8367__auto__){
return sablono.core.week_field11441.call(null,name__8367__auto__,null);
});

sablono.core.week_field11441.cljs$core$IFn$_invoke$arity$2 = (function (name__8367__auto__,value__8368__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__8367__auto__,value__8368__auto__);
});

sablono.core.week_field11441.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11441);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11513 = (function sablono$core$check_box11513(var_args){
var args11514 = [];
var len__5621__auto___11517 = arguments.length;
var i__5622__auto___11518 = (0);
while(true){
if((i__5622__auto___11518 < len__5621__auto___11517)){
args11514.push((arguments[i__5622__auto___11518]));

var G__11519 = (i__5622__auto___11518 + (1));
i__5622__auto___11518 = G__11519;
continue;
} else {
}
break;
}

var G__11516 = args11514.length;
switch (G__11516) {
case 1:
return sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11514.length)].join('')));

}
});

sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11513.call(null,name,null);
});

sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11513.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11513.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11513.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11513);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11521 = (function sablono$core$radio_button11521(var_args){
var args11522 = [];
var len__5621__auto___11525 = arguments.length;
var i__5622__auto___11526 = (0);
while(true){
if((i__5622__auto___11526 < len__5621__auto___11525)){
args11522.push((arguments[i__5622__auto___11526]));

var G__11527 = (i__5622__auto___11526 + (1));
i__5622__auto___11526 = G__11527;
continue;
} else {
}
break;
}

var G__11524 = args11522.length;
switch (G__11524) {
case 1:
return sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11522.length)].join('')));

}
});

sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11521.call(null,group,null);
});

sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11521.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11521.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11521.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11521);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11529 = (function sablono$core$select_options11529(var_args){
var args11530 = [];
var len__5621__auto___11541 = arguments.length;
var i__5622__auto___11542 = (0);
while(true){
if((i__5622__auto___11542 < len__5621__auto___11541)){
args11530.push((arguments[i__5622__auto___11542]));

var G__11543 = (i__5622__auto___11542 + (1));
i__5622__auto___11542 = G__11543;
continue;
} else {
}
break;
}

var G__11532 = args11530.length;
switch (G__11532) {
case 1:
return sablono.core.select_options11529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options11529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11530.length)].join('')));

}
});

sablono.core.select_options11529.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options11529.call(null,coll,null);
});

sablono.core.select_options11529.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5335__auto__ = (function sablono$core$iter__11533(s__11534){
return (new cljs.core.LazySeq(null,(function (){
var s__11534__$1 = s__11534;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11534__$1);
if(temp__4425__auto__){
var s__11534__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11534__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11534__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11536 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11535 = (0);
while(true){
if((i__11535 < size__5334__auto__)){
var x = cljs.core._nth.call(null,c__5333__auto__,i__11535);
cljs.core.chunk_append.call(null,b__11536,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11539 = x;
var text = cljs.core.nth.call(null,vec__11539,(0),null);
var val = cljs.core.nth.call(null,vec__11539,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11539,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11529.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__11545 = (i__11535 + (1));
i__11535 = G__11545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11536),sablono$core$iter__11533.call(null,cljs.core.chunk_rest.call(null,s__11534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11536),null);
}
} else {
var x = cljs.core.first.call(null,s__11534__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11540 = x;
var text = cljs.core.nth.call(null,vec__11540,(0),null);
var val = cljs.core.nth.call(null,vec__11540,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11540,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11529.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__11533.call(null,cljs.core.rest.call(null,s__11534__$2)));
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

sablono.core.select_options11529.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11529);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11546 = (function sablono$core$drop_down11546(var_args){
var args11547 = [];
var len__5621__auto___11550 = arguments.length;
var i__5622__auto___11551 = (0);
while(true){
if((i__5622__auto___11551 < len__5621__auto___11550)){
args11547.push((arguments[i__5622__auto___11551]));

var G__11552 = (i__5622__auto___11551 + (1));
i__5622__auto___11551 = G__11552;
continue;
} else {
}
break;
}

var G__11549 = args11547.length;
switch (G__11549) {
case 2:
return sablono.core.drop_down11546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11546.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11547.length)].join('')));

}
});

sablono.core.drop_down11546.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11546.call(null,name,options,null);
});

sablono.core.drop_down11546.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11546.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11546);
/**
 * Creates a text area element.
 */
sablono.core.text_area11554 = (function sablono$core$text_area11554(var_args){
var args11555 = [];
var len__5621__auto___11558 = arguments.length;
var i__5622__auto___11559 = (0);
while(true){
if((i__5622__auto___11559 < len__5621__auto___11558)){
args11555.push((arguments[i__5622__auto___11559]));

var G__11560 = (i__5622__auto___11559 + (1));
i__5622__auto___11559 = G__11560;
continue;
} else {
}
break;
}

var G__11557 = args11555.length;
switch (G__11557) {
case 1:
return sablono.core.text_area11554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11555.length)].join('')));

}
});

sablono.core.text_area11554.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11554.call(null,name,null);
});

sablono.core.text_area11554.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area11554.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11554);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11562 = (function sablono$core$label11562(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11562);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11563 = (function sablono$core$submit_button11563(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11563);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11564 = (function sablono$core$reset_button11564(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11564);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11565 = (function sablono$core$form_to11565(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11570 = arguments.length;
var i__5622__auto___11571 = (0);
while(true){
if((i__5622__auto___11571 < len__5621__auto___11570)){
args__5628__auto__.push((arguments[i__5622__auto___11571]));

var G__11572 = (i__5622__auto___11571 + (1));
i__5622__auto___11571 = G__11572;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((1) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((1)),(0))):null);
return sablono.core.form_to11565.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5629__auto__);
});

sablono.core.form_to11565.cljs$core$IFn$_invoke$arity$variadic = (function (p__11568,body){
var vec__11569 = p__11568;
var method = cljs.core.nth.call(null,vec__11569,(0),null);
var action = cljs.core.nth.call(null,vec__11569,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to11565.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11565.cljs$lang$applyTo = (function (seq11566){
var G__11567 = cljs.core.first.call(null,seq11566);
var seq11566__$1 = cljs.core.next.call(null,seq11566);
return sablono.core.form_to11565.cljs$core$IFn$_invoke$arity$variadic(G__11567,seq11566__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11565);
