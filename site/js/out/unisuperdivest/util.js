// Compiled by ClojureScript 1.7.122 {}
goog.provide('unisuperdivest.util');
goog.require('cljs.core');
goog.require('hiccups.runtime');
cljs.core.enable_console_print_BANG_.call(null);
unisuperdivest.util.link = (function unisuperdivest$util$link(url,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null);
});
unisuperdivest.util.mailto = (function unisuperdivest$util$mailto(var_args){
var args6882 = [];
var len__5621__auto___6885 = arguments.length;
var i__5622__auto___6886 = (0);
while(true){
if((i__5622__auto___6886 < len__5621__auto___6885)){
args6882.push((arguments[i__5622__auto___6886]));

var G__6887 = (i__5622__auto___6886 + (1));
i__5622__auto___6886 = G__6887;
continue;
} else {
}
break;
}

var G__6884 = args6882.length;
switch (G__6884) {
case 2:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return unisuperdivest.util.mailto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6882.length)].join('')));

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
return unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5335__auto__ = (function unisuperdivest$util$tabulate_$_iter__6909(s__6910){
return (new cljs.core.LazySeq(null,(function (){
var s__6910__$1 = s__6910;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6910__$1);
if(temp__4425__auto__){
var s__6910__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6910__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__6910__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__6912 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__6911 = (0);
while(true){
if((i__6911 < size__5334__auto__)){
var row = cljs.core._nth.call(null,c__5333__auto__,i__6911);
cljs.core.chunk_append.call(null,b__6912,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (i__6911,row,c__5333__auto__,size__5334__auto__,b__6912,s__6910__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__6909_$_iter__6921(s__6922){
return (new cljs.core.LazySeq(null,((function (i__6911,row,c__5333__auto__,size__5334__auto__,b__6912,s__6910__$2,temp__4425__auto__){
return (function (){
var s__6922__$1 = s__6922;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6922__$1);
if(temp__4425__auto____$1){
var s__6922__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6922__$2)){
var c__5333__auto____$1 = cljs.core.chunk_first.call(null,s__6922__$2);
var size__5334__auto____$1 = cljs.core.count.call(null,c__5333__auto____$1);
var b__6924 = cljs.core.chunk_buffer.call(null,size__5334__auto____$1);
if((function (){var i__6923 = (0);
while(true){
if((i__6923 < size__5334__auto____$1)){
var col = cljs.core._nth.call(null,c__5333__auto____$1,i__6923);
cljs.core.chunk_append.call(null,b__6924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__6929 = (i__6923 + (1));
i__6923 = G__6929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6924),unisuperdivest$util$tabulate_$_iter__6909_$_iter__6921.call(null,cljs.core.chunk_rest.call(null,s__6922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6924),null);
}
} else {
var col = cljs.core.first.call(null,s__6922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__6909_$_iter__6921.call(null,cljs.core.rest.call(null,s__6922__$2)));
}
} else {
return null;
}
break;
}
});})(i__6911,row,c__5333__auto__,size__5334__auto__,b__6912,s__6910__$2,temp__4425__auto__))
,null,null));
});})(i__6911,row,c__5333__auto__,size__5334__auto__,b__6912,s__6910__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()));

var G__6930 = (i__6911 + (1));
i__6911 = G__6930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6912),unisuperdivest$util$tabulate_$_iter__6909.call(null,cljs.core.chunk_rest.call(null,s__6910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6912),null);
}
} else {
var row = cljs.core.first.call(null,s__6910__$2);
return cljs.core.cons.call(null,unisuperdivest.util.section.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5335__auto__ = ((function (row,s__6910__$2,temp__4425__auto__){
return (function unisuperdivest$util$tabulate_$_iter__6909_$_iter__6925(s__6926){
return (new cljs.core.LazySeq(null,((function (row,s__6910__$2,temp__4425__auto__){
return (function (){
var s__6926__$1 = s__6926;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6926__$1);
if(temp__4425__auto____$1){
var s__6926__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6926__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__6926__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__6928 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__6927 = (0);
while(true){
if((i__6927 < size__5334__auto__)){
var col = cljs.core._nth.call(null,c__5333__auto__,i__6927);
cljs.core.chunk_append.call(null,b__6928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null));

var G__6931 = (i__6927 + (1));
i__6927 = G__6931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6928),unisuperdivest$util$tabulate_$_iter__6909_$_iter__6925.call(null,cljs.core.chunk_rest.call(null,s__6926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6928),null);
}
} else {
var col = cljs.core.first.call(null,s__6926__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),col], null),unisuperdivest$util$tabulate_$_iter__6909_$_iter__6925.call(null,cljs.core.rest.call(null,s__6926__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__6910__$2,temp__4425__auto__))
,null,null));
});})(row,s__6910__$2,temp__4425__auto__))
;
return iter__5335__auto__.call(null,row);
})()),unisuperdivest$util$tabulate_$_iter__6909.call(null,cljs.core.rest.call(null,s__6910__$2)));
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
