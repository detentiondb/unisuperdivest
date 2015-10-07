// Compiled by ClojureScript 1.7.122 {}
goog.provide('unisuperdivest.util');
goog.require('cljs.core');
goog.require('hiccups.runtime');
cljs.core.enable_console_print_BANG_.call(null);
unisuperdivest.util.link = (function unisuperdivest$util$link(url,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null);
});
unisuperdivest.util.mailto = (function unisuperdivest$util$mailto(var_args){
var args5885 = [];
var len__5621__auto___5888 = arguments.length;
var i__5622__auto___5889 = (0);
while(true){
if((i__5622__auto___5889 < len__5621__auto___5888)){
args5885.push((arguments[i__5622__auto___5889]));

var G__5890 = (i__5622__auto___5889 + (1));
i__5622__auto___5889 = G__5890;
continue;
} else {
}
break;
}

var G__5887 = args5885.length;
switch (G__5887) {
case 2:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5885.length)].join('')));

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
return unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5335__auto__ = (function unisuperdivest$util$tabulate_$_iter__5912(s__5913){
return (new cljs.core.LazySeq(null,(function (){
var s__5913__$1 = s__5913;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5913__$1);
if(temp__4425__auto__){
var s__5913__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5913__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__5913__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__5915 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__5914 = (0);
while(true){
if((i__5914 < size__5334__auto__)){
var row = cljs.core._nth.call(null,c__5333__auto__,i__5914);
cljs.core.chunk_append.call(null,b__5915,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (i__5914,row,c__5333__auto__,size__5334__auto__,b__5915,s__5913__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__5912_$_iter__5924(s__5925){
return (new cljs.core.LazySeq(null,((function (i__5914,row,c__5333__auto__,size__5334__auto__,b__5915,s__5913__$2,temp__4425__auto__){
return (function (){
var s__5925__$1 = s__5925;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5925__$1);
if(temp__4425__auto____$1){
var s__5925__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5925__$2)){
var c__5333__auto____$1 = cljs.core.chunk_first.call(null,s__5925__$2);
var size__5334__auto____$1 = cljs.core.count.call(null,c__5333__auto____$1);
var b__5927 = cljs.core.chunk_buffer.call(null,size__5334__auto____$1);
if((function (){var i__5926 = (0);
while(true){
if((i__5926 < size__5334__auto____$1)){
var col = cljs.core._nth.call(null,c__5333__auto____$1,i__5926);
cljs.core.chunk_append.call(null,b__5927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__5932 = (i__5926 + (1));
i__5926 = G__5932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5927),unisuperdivest$util$tabulate_$_iter__5912_$_iter__5924.call(null,cljs.core.chunk_rest.call(null,s__5925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5927),null);
}
} else {
var col = cljs.core.first.call(null,s__5925__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__5912_$_iter__5924.call(null,cljs.core.rest.call(null,s__5925__$2)));
}
} else {
return null;
}
break;
}
});})(i__5914,row,c__5333__auto__,size__5334__auto__,b__5915,s__5913__$2,temp__4425__auto__))
,null,null));
});})(i__5914,row,c__5333__auto__,size__5334__auto__,b__5915,s__5913__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()));

var G__5933 = (i__5914 + (1));
i__5914 = G__5933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5915),unisuperdivest$util$tabulate_$_iter__5912.call(null,cljs.core.chunk_rest.call(null,s__5913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5915),null);
}
} else {
var row = cljs.core.first.call(null,s__5913__$2);
return cljs.core.cons.call(null,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (row,s__5913__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__5912_$_iter__5928(s__5929){
return (new cljs.core.LazySeq(null,((function (row,s__5913__$2,temp__4425__auto__){
return (function (){
var s__5929__$1 = s__5929;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__5929__$1);
if(temp__4425__auto____$1){
var s__5929__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5929__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__5929__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__5931 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__5930 = (0);
while(true){
if((i__5930 < size__5334__auto__)){
var col = cljs.core._nth.call(null,c__5333__auto__,i__5930);
cljs.core.chunk_append.call(null,b__5931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__5934 = (i__5930 + (1));
i__5930 = G__5934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5931),unisuperdivest$util$tabulate_$_iter__5912_$_iter__5928.call(null,cljs.core.chunk_rest.call(null,s__5929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5931),null);
}
} else {
var col = cljs.core.first.call(null,s__5929__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__5912_$_iter__5928.call(null,cljs.core.rest.call(null,s__5929__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__5913__$2,temp__4425__auto__))
,null,null));
});})(row,s__5913__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()),unisuperdivest$util$tabulate_$_iter__5912.call(null,cljs.core.rest.call(null,s__5913__$2)));
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