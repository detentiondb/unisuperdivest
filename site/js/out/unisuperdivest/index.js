// Compiled by ClojureScript 1.7.122 {}
goog.provide('unisuperdivest.index');
goog.require('cljs.core');
goog.require('unisuperdivest.util');
goog.require('hiccups.runtime');
unisuperdivest.index.page = (function unisuperdivest$index$page(){
return [cljs.core.str("<h1>Is your super with UniSuper?</h1>"),cljs.core.str((function (){var attrs6897 = hiccups.runtime.h.call(null,"Download a sample members letter to UniSuper ");
if(cljs.core.map_QMARK_.call(null,attrs6897)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs6897))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,unisuperdivest.util.link.call(null,"resources/sample_members_letter.odt","here"))),cljs.core.str("</p>")].join('');
} else {
return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs6897)),cljs.core.str(hiccups.runtime.render_html.call(null,unisuperdivest.util.link.call(null,"resources/sample_members_letter.odt","here"))),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str((function (){var attrs6898 = hiccups.runtime.h.call(null,"Email your letter to the CEO Kevin O'Sullivan: ",unisuperdivest.util.mailto.call(null,"unisuper.ceo@unisuper.com.au"));
if(cljs.core.map_QMARK_.call(null,attrs6898)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs6898))),cljs.core.str(" />")].join('');
} else {
return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs6898)),cljs.core.str("</p>")].join('');
}
})())].join('');
});
