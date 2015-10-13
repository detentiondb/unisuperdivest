// Compiled by ClojureScript 1.7.122 {}
goog.provide('unisuperdivest.core');
goog.require('cljs.core');
goog.require('unisuperdivest.members');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('unisuperdivest.about');
goog.require('goog.history.EventType');
goog.require('kioo.om');
goog.require('kioo.core');
goog.require('unisuperdivest.unions');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
unisuperdivest.core.set_title = (function unisuperdivest$core$set_title(t){
return document.title = [cljs.core.str("UniSuper Divest | "),cljs.core.str(t)].join('');
});
unisuperdivest.core.tab = (function unisuperdivest$core$tab(p__8612){
var map__8615 = p__8612;
var map__8615__$1 = ((((!((map__8615 == null)))?((((map__8615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8615):map__8615);
var title = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"content","content",15833224));
var ch8611 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.do__GT_.call(null,kioo.om.lifecycle.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),((function (map__8615,map__8615__$1,title,content){
return (function (this$){
return unisuperdivest.core.set_title.call(null,title);
});})(map__8615,map__8615__$1,title,content))
], null)),kioo.om.html_content.call(null,[cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.deref.call(null,content)))].join(''))).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"kioo-content",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.div], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch8611))){
return cljs.core.first.call(null,ch8611);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch8611);
}
});
unisuperdivest.core.unisuperdivest = (function unisuperdivest$core$unisuperdivest(p__8619){
var map__8622 = p__8619;
var map__8622__$1 = ((((!((map__8622 == null)))?((((map__8622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8622):map__8622);
var current_page = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var pages = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var ch8618 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.nav,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar navbar-inverse navbar-default",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"container-fluid",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-header",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.button,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-toggle collapsed",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#bs-example-navbar-collapse-1",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Toggle navigation"], null))),cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-bar",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-bar",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-bar",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null))),cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand",new cljs.core.Keyword(null,"href","href",-793805698),"#about",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.strong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#UniSuperDivest"], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"collapse navbar-collapse",new cljs.core.Keyword(null,"id","id",-1388402092),"bs-example-navbar-collapse-1",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.ul,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav navbar-nav",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/unisuperdivest",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fa fa-facebook-official fa-lg lurid-green",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null)))], null))),cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/search?q=%23unisuperdivest",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fa fa-twitter fa-lg lurid-green",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null)))], null))),cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#about",new cljs.core.Keyword(null,"className","className",-1983287057),"active",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About"], null)))], null))),cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#members",new cljs.core.Keyword(null,"className","className",-1983287057),"active",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UniSuper Members"], null)))], null))),cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#unions",new cljs.core.Keyword(null,"className","className",-1983287057),"active",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union Members"], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.ul,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav navbar-nav navbar-right",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:unisuperdivest@gmail.com",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact"], null)))], null)))], null)))], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"container",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"row",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-12",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.do__GT_.call(null,kioo.om.lifecycle.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),((function (map__8622,map__8622__$1,current_page,pages){
return (function (this$){
return cljs.core.println.call(null,current_page);
});})(map__8622,map__8622__$1,current_page,pages))
], null)),kioo.om.content.call(null,unisuperdivest.core.tab.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__8622,map__8622__$1,current_page,pages){
return (function (p1__8617_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__8617_SHARP_),current_page);
});})(map__8622,map__8622__$1,current_page,pages))
,pages))))).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"kioo-content",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.div], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"row",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-12",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/unisuperdivest",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.h4,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fa fa-facebook-official fa-2x inline-social-icon",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.strong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Like the #UniSuperDivest campaign page on Facebook"], null)))], null)))], null)))], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"row",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-12",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/search?q=%23unisuperdivest",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.h4,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.i,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"fa fa-twitter fa-2x inline-social-icon",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.strong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tweet using the #UniSuperDivest hashtag on Twitter"], null)))], null)))], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"top-spacer jumbotron custom-outset",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"well",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.h1,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UniSuper Divest."], null))),cljs.core.apply.call(null,om.dom.h1,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["End mandatory detention."], null)))], null)))], null)))], null))),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./js/jquery.min.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./js/bootstrap.min.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./js/react.min.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"./js/out/goog/base.js",new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./js/unisuperdivest.js",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY)),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.require(\"unisuperdivest.core\");"], null))),cljs.core.apply.call(null,om.dom.script,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/js/footnotes.js",new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch8618))){
return cljs.core.first.call(null,ch8618);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch8618);
}
});
unisuperdivest.core.init = (function unisuperdivest$core$init(data){
if(typeof unisuperdivest.core.t_unisuperdivest$core8627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
unisuperdivest.core.t_unisuperdivest$core8627 = (function (init,data,meta8628){
this.init = init;
this.data = data;
this.meta8628 = meta8628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
unisuperdivest.core.t_unisuperdivest$core8627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8629,meta8628__$1){
var self__ = this;
var _8629__$1 = this;
return (new unisuperdivest.core.t_unisuperdivest$core8627(self__.init,self__.data,meta8628__$1));
});

unisuperdivest.core.t_unisuperdivest$core8627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8629){
var self__ = this;
var _8629__$1 = this;
return self__.meta8628;
});

unisuperdivest.core.t_unisuperdivest$core8627.prototype.om$core$IRender$ = true;

unisuperdivest.core.t_unisuperdivest$core8627.prototype.om$core$IRender$render$arity$1 = (function (this__6937__auto__){
var self__ = this;
var this__6937__auto____$1 = this;
return unisuperdivest.core.unisuperdivest.call(null,self__.data);
});

unisuperdivest.core.t_unisuperdivest$core8627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"meta8628","meta8628",-846145190,null)], null);
});

unisuperdivest.core.t_unisuperdivest$core8627.cljs$lang$type = true;

unisuperdivest.core.t_unisuperdivest$core8627.cljs$lang$ctorStr = "unisuperdivest.core/t_unisuperdivest$core8627";

unisuperdivest.core.t_unisuperdivest$core8627.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"unisuperdivest.core/t_unisuperdivest$core8627");
});

unisuperdivest.core.__GT_t_unisuperdivest$core8627 = (function unisuperdivest$core$init_$___GT_t_unisuperdivest$core8627(init__$1,data__$1,meta8628){
return (new unisuperdivest.core.t_unisuperdivest$core8627(init__$1,data__$1,meta8628));
});

}

return (new unisuperdivest.core.t_unisuperdivest$core8627(unisuperdivest$core$init,data,null));
});
unisuperdivest.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),"about",new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [unisuperdivest.about.page.call(null),unisuperdivest.unions.page.call(null),unisuperdivest.members.page.call(null)], null)], null));
var action__6954__auto___8634 = (function (params__6955__auto__){
if(cljs.core.map_QMARK_.call(null,params__6955__auto__)){
var map__8630 = params__6955__auto__;
var map__8630__$1 = ((((!((map__8630 == null)))?((((map__8630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8630):map__8630);
var params = map__8630__$1;
return cljs.core.swap_BANG_.call(null,unisuperdivest.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(params));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6955__auto__)){
var map__8632 = params__6955__auto__;
var map__8632__$1 = ((((!((map__8632 == null)))?((((map__8632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8632):map__8632);
var params = map__8632__$1;
return cljs.core.swap_BANG_.call(null,unisuperdivest.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:page",action__6954__auto___8634);

var action__6954__auto___8638 = (function (params__6955__auto__){
if(cljs.core.map_QMARK_.call(null,params__6955__auto__)){
var map__8635 = params__6955__auto__;
var map__8635__$1 = ((((!((map__8635 == null)))?((((map__8635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8635):map__8635);
return secretary.core.dispatch_BANG_.call(null,"about");
} else {
if(cljs.core.vector_QMARK_.call(null,params__6955__auto__)){
var vec__8637 = params__6955__auto__;
return secretary.core.dispatch_BANG_.call(null,"about");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__6954__auto___8638);

var h_8641 = (new goog.History());
goog.events.listen(h_8641,goog.history.EventType.NAVIGATE,((function (h_8641){
return (function (p1__8639_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__8639_SHARP_.token);
});})(h_8641))
);

var G__8640_8642 = h_8641;
G__8640_8642.setEnabled(true);

om.core.root.call(null,unisuperdivest.core.init,unisuperdivest.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));

//# sourceMappingURL=core.js.map