// Compiled by ClojureScript 1.7.122 {}
goog.provide('kioo.core');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('hickory.core');
goog.require('sablono.core');
goog.require('kioo.common');
kioo.core.value_component = (function kioo$core$value_component(renderer){
var react_component = React.createClass({"shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
}), "render": (function (){
var this$ = this;
var _STAR_component_STAR_11866 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_11866;
}})});
var factory = React.createFactory(react_component);
return ((function (react_component,factory){
return (function() { 
var G__11867__delegate = function (value,static_args){
return factory.call(null,{"value": value, "statics": static_args});
};
var G__11867 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__11868__i = 0, G__11868__a = new Array(arguments.length -  1);
while (G__11868__i < G__11868__a.length) {G__11868__a[G__11868__i] = arguments[G__11868__i + 1]; ++G__11868__i;}
  static_args = new cljs.core.IndexedSeq(G__11868__a,0);
} 
return G__11867__delegate.call(this,value,static_args);};
G__11867.cljs$lang$maxFixedArity = 1;
G__11867.cljs$lang$applyTo = (function (arglist__11869){
var value = cljs.core.first(arglist__11869);
var static_args = cljs.core.rest(arglist__11869);
return G__11867__delegate(value,static_args);
});
G__11867.cljs$core$IFn$_invoke$arity$variadic = G__11867__delegate;
return G__11867;
})()
;
;})(react_component,factory))
});
kioo.core.make_dom = (function kioo$core$make_dom(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
});
kioo.core.to_list = (function kioo$core$to_list(vals){
if(cljs.core.seq_QMARK_.call(null,vals)){
return vals;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,vals);
}
});
kioo.core.handle_wrapper = (function kioo$core$handle_wrapper(dom_fn){
return (function() { 
var kioo$core$handle_wrapper_$_hw__delegate = function (node,body){
var rnode = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.apply.call(null,kioo$core$handle_wrapper_$_hw,node):(((cljs.core.map_QMARK_.call(null,node)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node)))))?(function (){var revents = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node);
var props = (function (){var G__11873 = cljs.core.clj__GT_js.call(null,revents);
(G__11873["dom-fn"] = dom_fn);

(G__11873["node"] = node);

return G__11873;
})();
return kioo.util.WrapComponent.call(null,props);
})():dom_fn.call(null,node)
));
if(cljs.core.empty_QMARK_.call(null,body)){
return rnode;
} else {
return cljs.core.cons.call(null,rnode,kioo.core.to_list.call(null,cljs.core.apply.call(null,kioo$core$handle_wrapper_$_hw,body)));
}
};
var kioo$core$handle_wrapper_$_hw = function (node,var_args){
var body = null;
if (arguments.length > 1) {
var G__11874__i = 0, G__11874__a = new Array(arguments.length -  1);
while (G__11874__i < G__11874__a.length) {G__11874__a[G__11874__i] = arguments[G__11874__i + 1]; ++G__11874__i;}
  body = new cljs.core.IndexedSeq(G__11874__a,0);
} 
return kioo$core$handle_wrapper_$_hw__delegate.call(this,node,body);};
kioo$core$handle_wrapper_$_hw.cljs$lang$maxFixedArity = 1;
kioo$core$handle_wrapper_$_hw.cljs$lang$applyTo = (function (arglist__11875){
var node = cljs.core.first(arglist__11875);
var body = cljs.core.rest(arglist__11875);
return kioo$core$handle_wrapper_$_hw__delegate(node,body);
});
kioo$core$handle_wrapper_$_hw.cljs$core$IFn$_invoke$arity$variadic = kioo$core$handle_wrapper_$_hw__delegate;
return kioo$core$handle_wrapper_$_hw;
})()
;
});
kioo.core.content = kioo.common.content;
kioo.core.append = kioo.common.append;
kioo.core.prepend = kioo.common.prepend;
kioo.core.after = (function kioo$core$after(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11877 = arguments.length;
var i__5622__auto___11878 = (0);
while(true){
if((i__5622__auto___11878 < len__5621__auto___11877)){
args__5628__auto__.push((arguments[i__5622__auto___11878]));

var G__11879 = (i__5622__auto___11878 + (1));
i__5622__auto___11878 = G__11879;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,node,body);
} else {
return cljs.core.cons.call(null,kioo.core.make_dom.call(null,node),body);
}
});
});

kioo.core.after.cljs$lang$maxFixedArity = (0);

kioo.core.after.cljs$lang$applyTo = (function (seq11876){
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11876));
});
kioo.core.before = (function kioo$core$before(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11881 = arguments.length;
var i__5622__auto___11882 = (0);
while(true){
if((i__5622__auto___11882 < len__5621__auto___11881)){
args__5628__auto__.push((arguments[i__5622__auto___11882]));

var G__11883 = (i__5622__auto___11882 + (1));
i__5622__auto___11882 = G__11883;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.concat.call(null,body,node);
} else {
return cljs.core.concat.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null));
}
});
});

kioo.core.before.cljs$lang$maxFixedArity = (0);

kioo.core.before.cljs$lang$applyTo = (function (seq11880){
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11880));
});
kioo.core.substitute = kioo.common.substitute;
kioo.core.set_attr = kioo.common.set_attr;
kioo.core.remove_attr = kioo.common.remove_attr;
kioo.core.do__GT_ = kioo.common.do__GT_;
kioo.core.set_style = kioo.common.set_style;
kioo.core.remove_style = kioo.common.remove_style;
kioo.core.set_class = kioo.common.set_class;
kioo.core.add_class = kioo.common.add_class;
kioo.core.remove_class = kioo.common.remove_class;
kioo.core.wrap = (function kioo$core$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"sym","sym",-1444860305),(React.DOM[cljs.core.name.call(null,tag)]),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kioo.util.convert_attrs.call(null,attrs),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null)], null);
});
});
kioo.core.unwrap = kioo.common.unwrap;
kioo.core.html = (function kioo$core$html(content){
return sablono.interpreter.interpret.call(null,content);
});
kioo.core.html_content = (function kioo$core$html_content(content){
return (function (node){
var children = cljs.core.map.call(null,(function (p1__11884_SHARP_){
return sablono.interpreter.interpret.call(null,hickory.core.as_hiccup.call(null,p1__11884_SHARP_));
}),hickory.core.parse_fragment.call(null,content));
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),children);
});
});
kioo.core.listen_react_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["onRender",null,"onUpdate",null,"onWillMount",null,"onMount",null,"onWillUpdate",null,"onWillReceiveProps",null], null), null);
kioo.core.listen = (function kioo$core$listen(var_args){
var args__5628__auto__ = [];
var len__5621__auto___11893 = arguments.length;
var i__5622__auto___11894 = (0);
while(true){
if((i__5622__auto___11894 < len__5621__auto___11893)){
args__5628__auto__.push((arguments[i__5622__auto___11894]));

var G__11895 = (i__5622__auto___11894 + (1));
i__5622__auto___11894 = G__11895;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((0) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((0)),(0))):null);
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(argseq__5629__auto__);
});

kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (events_PLUS_fns){
var pairs = cljs.core.map.call(null,(function (p__11887){
var vec__11888 = p__11887;
var k = cljs.core.nth.call(null,vec__11888,(0),null);
var v = cljs.core.nth.call(null,vec__11888,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null);
}),cljs.core.partition.call(null,(2),events_PLUS_fns));
var vec__11886 = cljs.core.reduce.call(null,((function (pairs){
return (function (p__11889,p__11890){
var vec__11891 = p__11889;
var r = cljs.core.nth.call(null,vec__11891,(0),null);
var s = cljs.core.nth.call(null,vec__11891,(1),null);
var vec__11892 = p__11890;
var k = cljs.core.nth.call(null,vec__11892,(0),null);
var v = cljs.core.nth.call(null,vec__11892,(1),null);
if(cljs.core.truth_(kioo.core.listen_react_events.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,r,k,v),s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,s,k,v)], null);
}
});})(pairs))
,cljs.core.PersistentVector.EMPTY,pairs);
var rev = cljs.core.nth.call(null,vec__11886,(0),null);
var sev = cljs.core.nth.call(null,vec__11886,(1),null);
return ((function (pairs,vec__11886,rev,sev){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),sev),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.merge.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node),rev));
});
;})(pairs,vec__11886,rev,sev))
});

kioo.core.listen.cljs$lang$maxFixedArity = (0);

kioo.core.listen.cljs$lang$applyTo = (function (seq11885){
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11885));
});
kioo.core.lifecycle_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["willMount",null,"willUpdate",null,"willReceiveProps",null,"initState",null,"willUnmount",null,"defaultProps",null,"shouldUpdate",null,"didMount",null,"didUpdate",null], null), null);
/**
 * this transform allows you to wrap the componet in react lifecycle methods.
 * the methods are passed in as a map of key functions pairs.
 * {:init-state (fn [this] ...)
 *  :default-props (fn [this] ...)
 *  :should-update (fn [this next-props next-state] ...)
 *  :will-mount (fn [this] ...)
 *  :did-mount (fn [this] ...)
 *  :will-unmount (fn [this] ...)
 *  :will-receive-props (fn [this next-props] ...)
 *  :will-update (fn [this next-props next-state] ...)
 *  :did-update (fn [this prev-props prev-state] ...)}
 */
kioo.core.lifecycle = (function kioo$core$lifecycle(events_fns){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.merge.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = (function kioo$core$lifecycle_$_iter__11904(s__11905){
return (new cljs.core.LazySeq(null,(function (){
var s__11905__$1 = s__11905;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11905__$1);
if(temp__4425__auto__){
var s__11905__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11905__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__11905__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__11907 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__11906 = (0);
while(true){
if((i__11906 < size__5334__auto__)){
var vec__11910 = cljs.core._nth.call(null,c__5333__auto__,i__11906);
var k = cljs.core.nth.call(null,vec__11910,(0),null);
var v = cljs.core.nth.call(null,vec__11910,(1),null);
cljs.core.chunk_append.call(null,b__11907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null));

var G__11912 = (i__11906 + (1));
i__11906 = G__11912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11907),kioo$core$lifecycle_$_iter__11904.call(null,cljs.core.chunk_rest.call(null,s__11905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11907),null);
}
} else {
var vec__11911 = cljs.core.first.call(null,s__11905__$2);
var k = cljs.core.nth.call(null,vec__11911,(0),null);
var v = cljs.core.nth.call(null,vec__11911,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null),kioo$core$lifecycle_$_iter__11904.call(null,cljs.core.rest.call(null,s__11905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,events_fns);
})())));
});
});
kioo.core.render = (function kioo$core$render(component,node){
return React.render(component,node);
});
