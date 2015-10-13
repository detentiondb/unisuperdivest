// Compiled by ClojureScript 1.7.122 {}
goog.provide('unisuperdivest.util');
goog.require('cljs.core');
unisuperdivest.util.link = (function unisuperdivest$util$link(url,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null);
});
unisuperdivest.util.mailto = (function unisuperdivest$util$mailto(var_args){
var args8553 = [];
var len__5621__auto___8556 = arguments.length;
var i__5622__auto___8557 = (0);
while(true){
if((i__5622__auto___8557 < len__5621__auto___8556)){
args8553.push((arguments[i__5622__auto___8557]));

var G__8558 = (i__5622__auto___8557 + (1));
i__5622__auto___8557 = G__8558;
continue;
} else {
}
break;
}

var G__8555 = args8553.length;
switch (G__8555) {
case 2:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8553.length)].join('')));

}
});

unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$2 = (function (email,text){
return unisuperdivest.util.link.call(null,[cljs.core.str("mailto:"),cljs.core.str(email)].join(''),text);
});

unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$1 = (function (email){
return unisuperdivest.util.link.call(null,[cljs.core.str("mailto:"),cljs.core.str(email)].join(''),email);
});

unisuperdivest.util.mailto.cljs$lang$maxFixedArity = 2;
unisuperdivest.util.section = (function unisuperdivest$util$section(elem,children){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,elem,children));
});
unisuperdivest.util.tabulate = (function unisuperdivest$util$tabulate(matrx){
return unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5335__auto__ = (function unisuperdivest$util$tabulate_$_iter__8580(s__8581){
return (new cljs.core.LazySeq(null,(function (){
var s__8581__$1 = s__8581;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8581__$1);
if(temp__4425__auto__){
var s__8581__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8581__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__8581__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__8583 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__8582 = (0);
while(true){
if((i__8582 < size__5334__auto__)){
var row = cljs.core._nth.call(null,c__5333__auto__,i__8582);
cljs.core.chunk_append.call(null,b__8583,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (i__8582,row,c__5333__auto__,size__5334__auto__,b__8583,s__8581__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__8580_$_iter__8592(s__8593){
return (new cljs.core.LazySeq(null,((function (i__8582,row,c__5333__auto__,size__5334__auto__,b__8583,s__8581__$2,temp__4425__auto__){
return (function (){
var s__8593__$1 = s__8593;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8593__$1);
if(temp__4425__auto____$1){
var s__8593__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8593__$2)){
var c__5333__auto____$1 = cljs.core.chunk_first.call(null,s__8593__$2);
var size__5334__auto____$1 = cljs.core.count.call(null,c__5333__auto____$1);
var b__8595 = cljs.core.chunk_buffer.call(null,size__5334__auto____$1);
if((function (){var i__8594 = (0);
while(true){
if((i__8594 < size__5334__auto____$1)){
var col = cljs.core._nth.call(null,c__5333__auto____$1,i__8594);
cljs.core.chunk_append.call(null,b__8595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__8600 = (i__8594 + (1));
i__8594 = G__8600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8595),unisuperdivest$util$tabulate_$_iter__8580_$_iter__8592.call(null,cljs.core.chunk_rest.call(null,s__8593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8595),null);
}
} else {
var col = cljs.core.first.call(null,s__8593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__8580_$_iter__8592.call(null,cljs.core.rest.call(null,s__8593__$2)));
}
} else {
return null;
}
break;
}
});})(i__8582,row,c__5333__auto__,size__5334__auto__,b__8583,s__8581__$2,temp__4425__auto__))
,null,null));
});})(i__8582,row,c__5333__auto__,size__5334__auto__,b__8583,s__8581__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()));

var G__8601 = (i__8582 + (1));
i__8582 = G__8601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8583),unisuperdivest$util$tabulate_$_iter__8580.call(null,cljs.core.chunk_rest.call(null,s__8581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8583),null);
}
} else {
var row = cljs.core.first.call(null,s__8581__$2);
return cljs.core.cons.call(null,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (row,s__8581__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__8580_$_iter__8596(s__8597){
return (new cljs.core.LazySeq(null,((function (row,s__8581__$2,temp__4425__auto__){
return (function (){
var s__8597__$1 = s__8597;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8597__$1);
if(temp__4425__auto____$1){
var s__8597__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8597__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__8597__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__8599 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__8598 = (0);
while(true){
if((i__8598 < size__5334__auto__)){
var col = cljs.core._nth.call(null,c__5333__auto__,i__8598);
cljs.core.chunk_append.call(null,b__8599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__8602 = (i__8598 + (1));
i__8598 = G__8602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),unisuperdivest$util$tabulate_$_iter__8580_$_iter__8596.call(null,cljs.core.chunk_rest.call(null,s__8597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),null);
}
} else {
var col = cljs.core.first.call(null,s__8597__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__8580_$_iter__8596.call(null,cljs.core.rest.call(null,s__8597__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__8581__$2,temp__4425__auto__))
,null,null));
});})(row,s__8581__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()),unisuperdivest$util$tabulate_$_iter__8580.call(null,cljs.core.rest.call(null,s__8581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,matrx);
})());
});

//# sourceMappingURL=util.js.map