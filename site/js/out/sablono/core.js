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
var G__11151__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11150 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11150,(0),null);
var body = cljs.core.nthnext.call(null,vec__11150,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11152__i = 0, G__11152__a = new Array(arguments.length -  0);
while (G__11152__i < G__11152__a.length) {G__11152__a[G__11152__i] = arguments[G__11152__i + 0]; ++G__11152__i;}
  args = new cljs.core.IndexedSeq(G__11152__a,0);
} 
return G__11151__delegate.call(this,args);};
G__11151.cljs$lang$maxFixedArity = 0;
G__11151.cljs$lang$applyTo = (function (arglist__11153){
var args = cljs.core.seq(arglist__11153);
return G__11151__delegate(args);
});
G__11151.cljs$core$IFn$_invoke$arity$variadic = G__11151__delegate;
return G__11151;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5480__auto__ = (function sablono$core$update_arglists_$_iter__11158(s__11159){
return (new cljs.core.LazySeq(null,(function (){
var s__11159__$1 = s__11159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11159__$1);
if(temp__4425__auto__){
var s__11159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11159__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11159__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11161 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11160 = (0);
while(true){
if((i__11160 < size__5479__auto__)){
var args = cljs.core._nth.call(null,c__5478__auto__,i__11160);
cljs.core.chunk_append.call(null,b__11161,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11162 = (i__11160 + (1));
i__11160 = G__11162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11161),sablono$core$update_arglists_$_iter__11158.call(null,cljs.core.chunk_rest.call(null,s__11159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11161),null);
}
} else {
var args = cljs.core.first.call(null,s__11159__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11158.call(null,cljs.core.rest.call(null,s__11159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,arglists);
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
var args__5773__auto__ = [];
var len__5766__auto___11168 = arguments.length;
var i__5767__auto___11169 = (0);
while(true){
if((i__5767__auto___11169 < len__5766__auto___11168)){
args__5773__auto__.push((arguments[i__5767__auto___11169]));

var G__11170 = (i__5767__auto___11169 + (1));
i__5767__auto___11169 = G__11170;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((0) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5774__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5480__auto__ = (function sablono$core$iter__11164(s__11165){
return (new cljs.core.LazySeq(null,(function (){
var s__11165__$1 = s__11165;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11165__$1);
if(temp__4425__auto__){
var s__11165__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11165__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11165__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11167 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11166 = (0);
while(true){
if((i__11166 < size__5479__auto__)){
var style = cljs.core._nth.call(null,c__5478__auto__,i__11166);
cljs.core.chunk_append.call(null,b__11167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11171 = (i__11166 + (1));
i__11166 = G__11171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11167),sablono$core$iter__11164.call(null,cljs.core.chunk_rest.call(null,s__11165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11167),null);
}
} else {
var style = cljs.core.first.call(null,s__11165__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11164.call(null,cljs.core.rest.call(null,s__11165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq11163){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11163));
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
sablono.core.link_to11172 = (function sablono$core$link_to11172(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11175 = arguments.length;
var i__5767__auto___11176 = (0);
while(true){
if((i__5767__auto___11176 < len__5766__auto___11175)){
args__5773__auto__.push((arguments[i__5767__auto___11176]));

var G__11177 = (i__5767__auto___11176 + (1));
i__5767__auto___11176 = G__11177;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((1) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((1)),(0))):null);
return sablono.core.link_to11172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5774__auto__);
});

sablono.core.link_to11172.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11172.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11172.cljs$lang$applyTo = (function (seq11173){
var G__11174 = cljs.core.first.call(null,seq11173);
var seq11173__$1 = cljs.core.next.call(null,seq11173);
return sablono.core.link_to11172.cljs$core$IFn$_invoke$arity$variadic(G__11174,seq11173__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11172);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11178 = (function sablono$core$mail_to11178(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11183 = arguments.length;
var i__5767__auto___11184 = (0);
while(true){
if((i__5767__auto___11184 < len__5766__auto___11183)){
args__5773__auto__.push((arguments[i__5767__auto___11184]));

var G__11185 = (i__5767__auto___11184 + (1));
i__5767__auto___11184 = G__11185;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((1) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5774__auto__);
});

sablono.core.mail_to11178.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11181){
var vec__11182 = p__11181;
var content = cljs.core.nth.call(null,vec__11182,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4708__auto__ = content;
if(cljs.core.truth_(or__4708__auto__)){
return or__4708__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11178.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11178.cljs$lang$applyTo = (function (seq11179){
var G__11180 = cljs.core.first.call(null,seq11179);
var seq11179__$1 = cljs.core.next.call(null,seq11179);
return sablono.core.mail_to11178.cljs$core$IFn$_invoke$arity$variadic(G__11180,seq11179__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11178);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11186 = (function sablono$core$unordered_list11186(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function sablono$core$unordered_list11186_$_iter__11191(s__11192){
return (new cljs.core.LazySeq(null,(function (){
var s__11192__$1 = s__11192;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11192__$1);
if(temp__4425__auto__){
var s__11192__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11192__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11192__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11194 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11193 = (0);
while(true){
if((i__11193 < size__5479__auto__)){
var x = cljs.core._nth.call(null,c__5478__auto__,i__11193);
cljs.core.chunk_append.call(null,b__11194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11195 = (i__11193 + (1));
i__11193 = G__11195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11194),sablono$core$unordered_list11186_$_iter__11191.call(null,cljs.core.chunk_rest.call(null,s__11192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11194),null);
}
} else {
var x = cljs.core.first.call(null,s__11192__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11186_$_iter__11191.call(null,cljs.core.rest.call(null,s__11192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11186);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11196 = (function sablono$core$ordered_list11196(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5480__auto__ = (function sablono$core$ordered_list11196_$_iter__11201(s__11202){
return (new cljs.core.LazySeq(null,(function (){
var s__11202__$1 = s__11202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11202__$1);
if(temp__4425__auto__){
var s__11202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11202__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11202__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11204 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11203 = (0);
while(true){
if((i__11203 < size__5479__auto__)){
var x = cljs.core._nth.call(null,c__5478__auto__,i__11203);
cljs.core.chunk_append.call(null,b__11204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11205 = (i__11203 + (1));
i__11203 = G__11205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),sablono$core$ordered_list11196_$_iter__11201.call(null,cljs.core.chunk_rest.call(null,s__11202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),null);
}
} else {
var x = cljs.core.first.call(null,s__11202__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11196_$_iter__11201.call(null,cljs.core.rest.call(null,s__11202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11196);
/**
 * Create an image element.
 */
sablono.core.image11206 = (function sablono$core$image11206(var_args){
var args11207 = [];
var len__5766__auto___11210 = arguments.length;
var i__5767__auto___11211 = (0);
while(true){
if((i__5767__auto___11211 < len__5766__auto___11210)){
args11207.push((arguments[i__5767__auto___11211]));

var G__11212 = (i__5767__auto___11211 + (1));
i__5767__auto___11211 = G__11212;
continue;
} else {
}
break;
}

var G__11209 = args11207.length;
switch (G__11209) {
case 1:
return sablono.core.image11206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11207.length)].join('')));

}
});

sablono.core.image11206.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11206.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11206.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11206);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11214_SHARP_,p2__11215_SHARP_){
return [cljs.core.str(p1__11214_SHARP_),cljs.core.str("["),cljs.core.str(p2__11215_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11216_SHARP_,p2__11217_SHARP_){
return [cljs.core.str(p1__11216_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11217_SHARP_)].join('');
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
sablono.core.color_field11218 = (function sablono$core$color_field11218(var_args){
var args11219 = [];
var len__5766__auto___11286 = arguments.length;
var i__5767__auto___11287 = (0);
while(true){
if((i__5767__auto___11287 < len__5766__auto___11286)){
args11219.push((arguments[i__5767__auto___11287]));

var G__11288 = (i__5767__auto___11287 + (1));
i__5767__auto___11287 = G__11288;
continue;
} else {
}
break;
}

var G__11221 = args11219.length;
switch (G__11221) {
case 1:
return sablono.core.color_field11218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11219.length)].join('')));

}
});

sablono.core.color_field11218.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.color_field11218.call(null,name__7390__auto__,null);
});

sablono.core.color_field11218.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.color_field11218.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11218);

/**
 * Creates a date input field.
 */
sablono.core.date_field11222 = (function sablono$core$date_field11222(var_args){
var args11223 = [];
var len__5766__auto___11290 = arguments.length;
var i__5767__auto___11291 = (0);
while(true){
if((i__5767__auto___11291 < len__5766__auto___11290)){
args11223.push((arguments[i__5767__auto___11291]));

var G__11292 = (i__5767__auto___11291 + (1));
i__5767__auto___11291 = G__11292;
continue;
} else {
}
break;
}

var G__11225 = args11223.length;
switch (G__11225) {
case 1:
return sablono.core.date_field11222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11223.length)].join('')));

}
});

sablono.core.date_field11222.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.date_field11222.call(null,name__7390__auto__,null);
});

sablono.core.date_field11222.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.date_field11222.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11222);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11226 = (function sablono$core$datetime_field11226(var_args){
var args11227 = [];
var len__5766__auto___11294 = arguments.length;
var i__5767__auto___11295 = (0);
while(true){
if((i__5767__auto___11295 < len__5766__auto___11294)){
args11227.push((arguments[i__5767__auto___11295]));

var G__11296 = (i__5767__auto___11295 + (1));
i__5767__auto___11295 = G__11296;
continue;
} else {
}
break;
}

var G__11229 = args11227.length;
switch (G__11229) {
case 1:
return sablono.core.datetime_field11226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11227.length)].join('')));

}
});

sablono.core.datetime_field11226.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.datetime_field11226.call(null,name__7390__auto__,null);
});

sablono.core.datetime_field11226.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.datetime_field11226.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11226);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11230 = (function sablono$core$datetime_local_field11230(var_args){
var args11231 = [];
var len__5766__auto___11298 = arguments.length;
var i__5767__auto___11299 = (0);
while(true){
if((i__5767__auto___11299 < len__5766__auto___11298)){
args11231.push((arguments[i__5767__auto___11299]));

var G__11300 = (i__5767__auto___11299 + (1));
i__5767__auto___11299 = G__11300;
continue;
} else {
}
break;
}

var G__11233 = args11231.length;
switch (G__11233) {
case 1:
return sablono.core.datetime_local_field11230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11231.length)].join('')));

}
});

sablono.core.datetime_local_field11230.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.datetime_local_field11230.call(null,name__7390__auto__,null);
});

sablono.core.datetime_local_field11230.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.datetime_local_field11230.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11230);

/**
 * Creates a email input field.
 */
sablono.core.email_field11234 = (function sablono$core$email_field11234(var_args){
var args11235 = [];
var len__5766__auto___11302 = arguments.length;
var i__5767__auto___11303 = (0);
while(true){
if((i__5767__auto___11303 < len__5766__auto___11302)){
args11235.push((arguments[i__5767__auto___11303]));

var G__11304 = (i__5767__auto___11303 + (1));
i__5767__auto___11303 = G__11304;
continue;
} else {
}
break;
}

var G__11237 = args11235.length;
switch (G__11237) {
case 1:
return sablono.core.email_field11234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11235.length)].join('')));

}
});

sablono.core.email_field11234.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.email_field11234.call(null,name__7390__auto__,null);
});

sablono.core.email_field11234.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.email_field11234.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11234);

/**
 * Creates a file input field.
 */
sablono.core.file_field11238 = (function sablono$core$file_field11238(var_args){
var args11239 = [];
var len__5766__auto___11306 = arguments.length;
var i__5767__auto___11307 = (0);
while(true){
if((i__5767__auto___11307 < len__5766__auto___11306)){
args11239.push((arguments[i__5767__auto___11307]));

var G__11308 = (i__5767__auto___11307 + (1));
i__5767__auto___11307 = G__11308;
continue;
} else {
}
break;
}

var G__11241 = args11239.length;
switch (G__11241) {
case 1:
return sablono.core.file_field11238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11239.length)].join('')));

}
});

sablono.core.file_field11238.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.file_field11238.call(null,name__7390__auto__,null);
});

sablono.core.file_field11238.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.file_field11238.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11238);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11242 = (function sablono$core$hidden_field11242(var_args){
var args11243 = [];
var len__5766__auto___11310 = arguments.length;
var i__5767__auto___11311 = (0);
while(true){
if((i__5767__auto___11311 < len__5766__auto___11310)){
args11243.push((arguments[i__5767__auto___11311]));

var G__11312 = (i__5767__auto___11311 + (1));
i__5767__auto___11311 = G__11312;
continue;
} else {
}
break;
}

var G__11245 = args11243.length;
switch (G__11245) {
case 1:
return sablono.core.hidden_field11242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11243.length)].join('')));

}
});

sablono.core.hidden_field11242.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.hidden_field11242.call(null,name__7390__auto__,null);
});

sablono.core.hidden_field11242.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.hidden_field11242.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11242);

/**
 * Creates a month input field.
 */
sablono.core.month_field11246 = (function sablono$core$month_field11246(var_args){
var args11247 = [];
var len__5766__auto___11314 = arguments.length;
var i__5767__auto___11315 = (0);
while(true){
if((i__5767__auto___11315 < len__5766__auto___11314)){
args11247.push((arguments[i__5767__auto___11315]));

var G__11316 = (i__5767__auto___11315 + (1));
i__5767__auto___11315 = G__11316;
continue;
} else {
}
break;
}

var G__11249 = args11247.length;
switch (G__11249) {
case 1:
return sablono.core.month_field11246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11247.length)].join('')));

}
});

sablono.core.month_field11246.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.month_field11246.call(null,name__7390__auto__,null);
});

sablono.core.month_field11246.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.month_field11246.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11246);

/**
 * Creates a number input field.
 */
sablono.core.number_field11250 = (function sablono$core$number_field11250(var_args){
var args11251 = [];
var len__5766__auto___11318 = arguments.length;
var i__5767__auto___11319 = (0);
while(true){
if((i__5767__auto___11319 < len__5766__auto___11318)){
args11251.push((arguments[i__5767__auto___11319]));

var G__11320 = (i__5767__auto___11319 + (1));
i__5767__auto___11319 = G__11320;
continue;
} else {
}
break;
}

var G__11253 = args11251.length;
switch (G__11253) {
case 1:
return sablono.core.number_field11250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11251.length)].join('')));

}
});

sablono.core.number_field11250.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.number_field11250.call(null,name__7390__auto__,null);
});

sablono.core.number_field11250.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.number_field11250.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11250);

/**
 * Creates a password input field.
 */
sablono.core.password_field11254 = (function sablono$core$password_field11254(var_args){
var args11255 = [];
var len__5766__auto___11322 = arguments.length;
var i__5767__auto___11323 = (0);
while(true){
if((i__5767__auto___11323 < len__5766__auto___11322)){
args11255.push((arguments[i__5767__auto___11323]));

var G__11324 = (i__5767__auto___11323 + (1));
i__5767__auto___11323 = G__11324;
continue;
} else {
}
break;
}

var G__11257 = args11255.length;
switch (G__11257) {
case 1:
return sablono.core.password_field11254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11255.length)].join('')));

}
});

sablono.core.password_field11254.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.password_field11254.call(null,name__7390__auto__,null);
});

sablono.core.password_field11254.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.password_field11254.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11254);

/**
 * Creates a range input field.
 */
sablono.core.range_field11258 = (function sablono$core$range_field11258(var_args){
var args11259 = [];
var len__5766__auto___11326 = arguments.length;
var i__5767__auto___11327 = (0);
while(true){
if((i__5767__auto___11327 < len__5766__auto___11326)){
args11259.push((arguments[i__5767__auto___11327]));

var G__11328 = (i__5767__auto___11327 + (1));
i__5767__auto___11327 = G__11328;
continue;
} else {
}
break;
}

var G__11261 = args11259.length;
switch (G__11261) {
case 1:
return sablono.core.range_field11258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11259.length)].join('')));

}
});

sablono.core.range_field11258.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.range_field11258.call(null,name__7390__auto__,null);
});

sablono.core.range_field11258.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.range_field11258.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11258);

/**
 * Creates a search input field.
 */
sablono.core.search_field11262 = (function sablono$core$search_field11262(var_args){
var args11263 = [];
var len__5766__auto___11330 = arguments.length;
var i__5767__auto___11331 = (0);
while(true){
if((i__5767__auto___11331 < len__5766__auto___11330)){
args11263.push((arguments[i__5767__auto___11331]));

var G__11332 = (i__5767__auto___11331 + (1));
i__5767__auto___11331 = G__11332;
continue;
} else {
}
break;
}

var G__11265 = args11263.length;
switch (G__11265) {
case 1:
return sablono.core.search_field11262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11263.length)].join('')));

}
});

sablono.core.search_field11262.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.search_field11262.call(null,name__7390__auto__,null);
});

sablono.core.search_field11262.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.search_field11262.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11262);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11266 = (function sablono$core$tel_field11266(var_args){
var args11267 = [];
var len__5766__auto___11334 = arguments.length;
var i__5767__auto___11335 = (0);
while(true){
if((i__5767__auto___11335 < len__5766__auto___11334)){
args11267.push((arguments[i__5767__auto___11335]));

var G__11336 = (i__5767__auto___11335 + (1));
i__5767__auto___11335 = G__11336;
continue;
} else {
}
break;
}

var G__11269 = args11267.length;
switch (G__11269) {
case 1:
return sablono.core.tel_field11266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11267.length)].join('')));

}
});

sablono.core.tel_field11266.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.tel_field11266.call(null,name__7390__auto__,null);
});

sablono.core.tel_field11266.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.tel_field11266.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11266);

/**
 * Creates a text input field.
 */
sablono.core.text_field11270 = (function sablono$core$text_field11270(var_args){
var args11271 = [];
var len__5766__auto___11338 = arguments.length;
var i__5767__auto___11339 = (0);
while(true){
if((i__5767__auto___11339 < len__5766__auto___11338)){
args11271.push((arguments[i__5767__auto___11339]));

var G__11340 = (i__5767__auto___11339 + (1));
i__5767__auto___11339 = G__11340;
continue;
} else {
}
break;
}

var G__11273 = args11271.length;
switch (G__11273) {
case 1:
return sablono.core.text_field11270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11271.length)].join('')));

}
});

sablono.core.text_field11270.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.text_field11270.call(null,name__7390__auto__,null);
});

sablono.core.text_field11270.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.text_field11270.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11270);

/**
 * Creates a time input field.
 */
sablono.core.time_field11274 = (function sablono$core$time_field11274(var_args){
var args11275 = [];
var len__5766__auto___11342 = arguments.length;
var i__5767__auto___11343 = (0);
while(true){
if((i__5767__auto___11343 < len__5766__auto___11342)){
args11275.push((arguments[i__5767__auto___11343]));

var G__11344 = (i__5767__auto___11343 + (1));
i__5767__auto___11343 = G__11344;
continue;
} else {
}
break;
}

var G__11277 = args11275.length;
switch (G__11277) {
case 1:
return sablono.core.time_field11274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11275.length)].join('')));

}
});

sablono.core.time_field11274.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.time_field11274.call(null,name__7390__auto__,null);
});

sablono.core.time_field11274.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.time_field11274.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11274);

/**
 * Creates a url input field.
 */
sablono.core.url_field11278 = (function sablono$core$url_field11278(var_args){
var args11279 = [];
var len__5766__auto___11346 = arguments.length;
var i__5767__auto___11347 = (0);
while(true){
if((i__5767__auto___11347 < len__5766__auto___11346)){
args11279.push((arguments[i__5767__auto___11347]));

var G__11348 = (i__5767__auto___11347 + (1));
i__5767__auto___11347 = G__11348;
continue;
} else {
}
break;
}

var G__11281 = args11279.length;
switch (G__11281) {
case 1:
return sablono.core.url_field11278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11279.length)].join('')));

}
});

sablono.core.url_field11278.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.url_field11278.call(null,name__7390__auto__,null);
});

sablono.core.url_field11278.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.url_field11278.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11278);

/**
 * Creates a week input field.
 */
sablono.core.week_field11282 = (function sablono$core$week_field11282(var_args){
var args11283 = [];
var len__5766__auto___11350 = arguments.length;
var i__5767__auto___11351 = (0);
while(true){
if((i__5767__auto___11351 < len__5766__auto___11350)){
args11283.push((arguments[i__5767__auto___11351]));

var G__11352 = (i__5767__auto___11351 + (1));
i__5767__auto___11351 = G__11352;
continue;
} else {
}
break;
}

var G__11285 = args11283.length;
switch (G__11285) {
case 1:
return sablono.core.week_field11282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11283.length)].join('')));

}
});

sablono.core.week_field11282.cljs$core$IFn$_invoke$arity$1 = (function (name__7390__auto__){
return sablono.core.week_field11282.call(null,name__7390__auto__,null);
});

sablono.core.week_field11282.cljs$core$IFn$_invoke$arity$2 = (function (name__7390__auto__,value__7391__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__7390__auto__,value__7391__auto__);
});

sablono.core.week_field11282.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11282);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11354 = (function sablono$core$check_box11354(var_args){
var args11355 = [];
var len__5766__auto___11358 = arguments.length;
var i__5767__auto___11359 = (0);
while(true){
if((i__5767__auto___11359 < len__5766__auto___11358)){
args11355.push((arguments[i__5767__auto___11359]));

var G__11360 = (i__5767__auto___11359 + (1));
i__5767__auto___11359 = G__11360;
continue;
} else {
}
break;
}

var G__11357 = args11355.length;
switch (G__11357) {
case 1:
return sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11355.length)].join('')));

}
});

sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11354.call(null,name,null);
});

sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11354.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11354.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11354.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11354);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11362 = (function sablono$core$radio_button11362(var_args){
var args11363 = [];
var len__5766__auto___11366 = arguments.length;
var i__5767__auto___11367 = (0);
while(true){
if((i__5767__auto___11367 < len__5766__auto___11366)){
args11363.push((arguments[i__5767__auto___11367]));

var G__11368 = (i__5767__auto___11367 + (1));
i__5767__auto___11367 = G__11368;
continue;
} else {
}
break;
}

var G__11365 = args11363.length;
switch (G__11365) {
case 1:
return sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11363.length)].join('')));

}
});

sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11362.call(null,group,null);
});

sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11362.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11362.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11362.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11362);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11370 = (function sablono$core$select_options11370(var_args){
var args11371 = [];
var len__5766__auto___11382 = arguments.length;
var i__5767__auto___11383 = (0);
while(true){
if((i__5767__auto___11383 < len__5766__auto___11382)){
args11371.push((arguments[i__5767__auto___11383]));

var G__11384 = (i__5767__auto___11383 + (1));
i__5767__auto___11383 = G__11384;
continue;
} else {
}
break;
}

var G__11373 = args11371.length;
switch (G__11373) {
case 1:
return sablono.core.select_options11370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options11370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11371.length)].join('')));

}
});

sablono.core.select_options11370.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options11370.call(null,coll,null);
});

sablono.core.select_options11370.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5480__auto__ = (function sablono$core$iter__11374(s__11375){
return (new cljs.core.LazySeq(null,(function (){
var s__11375__$1 = s__11375;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11375__$1);
if(temp__4425__auto__){
var s__11375__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11375__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11375__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11377 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11376 = (0);
while(true){
if((i__11376 < size__5479__auto__)){
var x = cljs.core._nth.call(null,c__5478__auto__,i__11376);
cljs.core.chunk_append.call(null,b__11377,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11380 = x;
var text = cljs.core.nth.call(null,vec__11380,(0),null);
var val = cljs.core.nth.call(null,vec__11380,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11380,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11370.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__11386 = (i__11376 + (1));
i__11376 = G__11386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11377),sablono$core$iter__11374.call(null,cljs.core.chunk_rest.call(null,s__11375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11377),null);
}
} else {
var x = cljs.core.first.call(null,s__11375__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11381 = x;
var text = cljs.core.nth.call(null,vec__11381,(0),null);
var val = cljs.core.nth.call(null,vec__11381,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11381,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options11370.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__11374.call(null,cljs.core.rest.call(null,s__11375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,coll);
});

sablono.core.select_options11370.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11370);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11387 = (function sablono$core$drop_down11387(var_args){
var args11388 = [];
var len__5766__auto___11391 = arguments.length;
var i__5767__auto___11392 = (0);
while(true){
if((i__5767__auto___11392 < len__5766__auto___11391)){
args11388.push((arguments[i__5767__auto___11392]));

var G__11393 = (i__5767__auto___11392 + (1));
i__5767__auto___11392 = G__11393;
continue;
} else {
}
break;
}

var G__11390 = args11388.length;
switch (G__11390) {
case 2:
return sablono.core.drop_down11387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11387.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11388.length)].join('')));

}
});

sablono.core.drop_down11387.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11387.call(null,name,options,null);
});

sablono.core.drop_down11387.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11387.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11387);
/**
 * Creates a text area element.
 */
sablono.core.text_area11395 = (function sablono$core$text_area11395(var_args){
var args11396 = [];
var len__5766__auto___11399 = arguments.length;
var i__5767__auto___11400 = (0);
while(true){
if((i__5767__auto___11400 < len__5766__auto___11399)){
args11396.push((arguments[i__5767__auto___11400]));

var G__11401 = (i__5767__auto___11400 + (1));
i__5767__auto___11400 = G__11401;
continue;
} else {
}
break;
}

var G__11398 = args11396.length;
switch (G__11398) {
case 1:
return sablono.core.text_area11395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11396.length)].join('')));

}
});

sablono.core.text_area11395.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11395.call(null,name,null);
});

sablono.core.text_area11395.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area11395.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11395);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11403 = (function sablono$core$label11403(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11403);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11404 = (function sablono$core$submit_button11404(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11404);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11405 = (function sablono$core$reset_button11405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11405);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11406 = (function sablono$core$form_to11406(var_args){
var args__5773__auto__ = [];
var len__5766__auto___11411 = arguments.length;
var i__5767__auto___11412 = (0);
while(true){
if((i__5767__auto___11412 < len__5766__auto___11411)){
args__5773__auto__.push((arguments[i__5767__auto___11412]));

var G__11413 = (i__5767__auto___11412 + (1));
i__5767__auto___11412 = G__11413;
continue;
} else {
}
break;
}

var argseq__5774__auto__ = ((((1) < args__5773__auto__.length))?(new cljs.core.IndexedSeq(args__5773__auto__.slice((1)),(0))):null);
return sablono.core.form_to11406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5774__auto__);
});

sablono.core.form_to11406.cljs$core$IFn$_invoke$arity$variadic = (function (p__11409,body){
var vec__11410 = p__11409;
var method = cljs.core.nth.call(null,vec__11410,(0),null);
var action = cljs.core.nth.call(null,vec__11410,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to11406.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11406.cljs$lang$applyTo = (function (seq11407){
var G__11408 = cljs.core.first.call(null,seq11407);
var seq11407__$1 = cljs.core.next.call(null,seq11407);
return sablono.core.form_to11406.cljs$core$IFn$_invoke$arity$variadic(G__11408,seq11407__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11406);

//# sourceMappingURL=core.js.map