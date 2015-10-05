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
var result = unisuperdivest.util.link.call(null,[cljs.core.str("mailto:"),cljs.core.str(email)].join(''),email);
cljs.core.println.call(null,result);

return result;
});

unisuperdivest.util.mailto.cljs$lang$maxFixedArity = 2;
