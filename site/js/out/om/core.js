// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.display_name[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.display_name["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.init_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.init_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.should_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,next_props,next_state);
} else {
var m__5219__auto____$1 = (om.core.should_update["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_mount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.did_mount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_unmount[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,next_props,next_state);
} else {
var m__5219__auto____$1 = (om.core.will_update["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.did_update[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__5219__auto____$1 = (om.core.did_update["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.will_receive_props[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,next_props);
} else {
var m__5219__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core.render["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render_props[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,props,state);
} else {
var m__5219__auto____$1 = (om.core.render_props["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core.render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,state);
} else {
var m__5219__auto____$1 = (om.core.render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__5219__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args11260 = [];
var len__5621__auto___11263 = arguments.length;
var i__5622__auto___11264 = (0);
while(true){
if((i__5622__auto___11264 < len__5621__auto___11263)){
args11260.push((arguments[i__5622__auto___11264]));

var G__11265 = (i__5622__auto___11264 + (1));
i__5622__auto___11264 = G__11265;
continue;
} else {
}
break;
}

var G__11262 = args11260.length;
switch (G__11262) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11260.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._get_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,ks);
} else {
var m__5219__auto____$1 = (om.core._get_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args11267 = [];
var len__5621__auto___11270 = arguments.length;
var i__5622__auto___11271 = (0);
while(true){
if((i__5622__auto___11271 < len__5621__auto___11270)){
args11267.push((arguments[i__5622__auto___11271]));

var G__11272 = (i__5622__auto___11271 + (1));
i__5622__auto___11271 = G__11272;
continue;
} else {
}
break;
}

var G__11269 = args11267.length;
switch (G__11269) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11267.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_render_state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,ks);
} else {
var m__5219__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args11274 = [];
var len__5621__auto___11277 = arguments.length;
var i__5622__auto___11278 = (0);
while(true){
if((i__5622__auto___11278 < len__5621__auto___11277)){
args11274.push((arguments[i__5622__auto___11278]));

var G__11279 = (i__5622__auto___11278 + (1));
i__5622__auto___11278 = G__11279;
continue;
} else {
}
break;
}

var G__11276 = args11274.length;
switch (G__11276) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11274.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,val,render);
} else {
var m__5219__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,ks,val,render);
} else {
var m__5219__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_queue[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,c);
} else {
var m__5219__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._value[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,x);
} else {
var m__5219__auto____$1 = (om.core._value["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._path[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,cursor);
} else {
var m__5219__auto____$1 = (om.core._path["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._state[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,cursor);
} else {
var m__5219__auto____$1 = (om.core._state["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args11281 = [];
var len__5621__auto___11284 = arguments.length;
var i__5622__auto___11285 = (0);
while(true){
if((i__5622__auto___11285 < len__5621__auto___11284)){
args11281.push((arguments[i__5622__auto___11285]));

var G__11286 = (i__5622__auto___11285 + (1));
i__5622__auto___11285 = G__11286;
continue;
} else {
}
break;
}

var G__11283 = args11281.length;
switch (G__11283) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11281.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5218__auto__ = (((value == null))?null:value);
var m__5219__auto__ = (om.core._to_cursor[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,value,state);
} else {
var m__5219__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5218__auto__ = (((value == null))?null:value);
var m__5219__auto__ = (om.core._to_cursor[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,value,state,path);
} else {
var m__5219__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._derive[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,cursor,derived,state,path);
} else {
var m__5219__auto____$1 = (om.core._derive["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,cursor,korks,f,tag);
} else {
var m__5219__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,x,key,tx_listen);
} else {
var m__5219__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,x,key);
} else {
var m__5219__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5218__auto__ = (((x == null))?null:x);
var m__5219__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__5219__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,id,p,val);
} else {
var m__5219__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,id,p);
} else {
var m__5219__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,id);
} else {
var m__5219__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_property[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,id,p);
} else {
var m__5219__auto____$1 = (om.core._get_property["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5218__auto__ = (((cursor == null))?null:cursor);
var m__5219__auto__ = (om.core._root_key[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,cursor);
} else {
var m__5219__auto____$1 = (om.core._root_key["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._adapt[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,other);
} else {
var m__5219__auto____$1 = (om.core._adapt["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,c);
} else {
var m__5219__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$,c);
} else {
var m__5219__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5218__auto__ = (((this$ == null))?null:this$);
var m__5219__auto__ = (om.core._get_deps[goog.typeOf(x__5218__auto__)]);
if(!((m__5219__auto__ == null))){
return m__5219__auto__.call(null,this$);
} else {
var m__5219__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5219__auto____$1 == null))){
return m__5219__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args11292 = [];
var len__5621__auto___11296 = arguments.length;
var i__5622__auto___11297 = (0);
while(true){
if((i__5622__auto___11297 < len__5621__auto___11296)){
args11292.push((arguments[i__5622__auto___11297]));

var G__11298 = (i__5622__auto___11297 + (1));
i__5622__auto___11297 = G__11298;
continue;
} else {
}
break;
}

var G__11294 = args11292.length;
switch (G__11294) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11292.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__11295 = (x.props["__om_cursor"]);
var G__11295__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__11295,korks__$1):G__11295);
return G__11295__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args11300 = [];
var len__5621__auto___11303 = arguments.length;
var i__5622__auto___11304 = (0);
while(true){
if((i__5622__auto___11304 < len__5621__auto___11303)){
args11300.push((arguments[i__5622__auto___11304]));

var G__11305 = (i__5622__auto___11304 + (1));
i__5622__auto___11304 = G__11305;
continue;
} else {
}
break;
}

var G__11302 = args11300.length;
switch (G__11302) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11300.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args11307 = [];
var len__5621__auto___11310 = arguments.length;
var i__5622__auto___11311 = (0);
while(true){
if((i__5622__auto___11311 < len__5621__auto___11310)){
args11307.push((arguments[i__5622__auto___11311]));

var G__11312 = (i__5622__auto___11311 + (1));
i__5622__auto___11311 = G__11312;
continue;
} else {
}
break;
}

var G__11309 = args11307.length;
switch (G__11309) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11307.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__11315 = state;
(G__11315["__om_prev_state"] = (state["__om_state"]));

(G__11315["__om_state"] = pending_state);

(G__11315["__om_pending_state"] = null);

return G__11315;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args11316 = [];
var len__5621__auto___11319 = arguments.length;
var i__5622__auto___11320 = (0);
while(true){
if((i__5622__auto___11320 < len__5621__auto___11319)){
args11316.push((arguments[i__5622__auto___11320]));

var G__11321 = (i__5622__auto___11320 + (1));
i__5622__auto___11320 = G__11321;
continue;
} else {
}
break;
}

var G__11318 = args11316.length;
switch (G__11318) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11316.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4563__auto__ = props;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4563__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_11345 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4563__auto__ = (state_11345["__om_prev_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state_11345["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__11326 = cljs.core.seq.call(null,refs);
var chunk__11327 = null;
var count__11328 = (0);
var i__11329 = (0);
while(true){
if((i__11329 < count__11328)){
var ref = cljs.core._nth.call(null,chunk__11327,i__11329);
om.core.unobserve.call(null,this$,ref);

var G__11346 = seq__11326;
var G__11347 = chunk__11327;
var G__11348 = count__11328;
var G__11349 = (i__11329 + (1));
seq__11326 = G__11346;
chunk__11327 = G__11347;
count__11328 = G__11348;
i__11329 = G__11349;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11326);
if(temp__4425__auto____$1){
var seq__11326__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11326__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__11326__$1);
var G__11350 = cljs.core.chunk_rest.call(null,seq__11326__$1);
var G__11351 = c__5366__auto__;
var G__11352 = cljs.core.count.call(null,c__5366__auto__);
var G__11353 = (0);
seq__11326 = G__11350;
chunk__11327 = G__11351;
count__11328 = G__11352;
i__11329 = G__11353;
continue;
} else {
var ref = cljs.core.first.call(null,seq__11326__$1);
om.core.unobserve.call(null,this$,ref);

var G__11354 = cljs.core.next.call(null,seq__11326__$1);
var G__11355 = null;
var G__11356 = (0);
var G__11357 = (0);
seq__11326 = G__11354;
chunk__11327 = G__11355;
count__11328 = G__11356;
i__11329 = G__11357;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4551__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4551__auto__)){
var and__4551__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4551__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4551__auto____$1;
}
} else {
return and__4551__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4551__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4551__auto__){
return cljs.core.some.call(null,((function (and__4551__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__11323_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__11323_SHARP_);
});})(and__4551__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4551__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_11332 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_11333 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_11334 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_11335 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_11336 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_11336;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_11335;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11334;

om.core._STAR_state_STAR_ = _STAR_state_STAR_11333;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11332;
}}),(function (next_props,next_state){
var this$ = this;
var c_11358 = om.core.children.call(null,this$);
if(((!((c_11358 == null)))?(((false) || (c_11358.om$core$IWillUpdate$))?true:(((!c_11358.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_11358):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_11358))){
var state_11359 = this$.state;
om.core.will_update.call(null,c_11358,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4563__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4563__auto__ = id;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_11360 = om.core.children.call(null,this$);
if(((!((c_11360 == null)))?(((false) || (c_11360.om$core$IWillMount$))?true:(((!c_11360.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_11360):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_11360))){
om.core.will_mount.call(null,c_11360);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x11362 = obj;
x11362.om$core$ISetState$ = true;

x11362.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11362){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4551__auto__ = !((app_state == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x11362))
;

x11362.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x11362){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4551__auto__ = !((app_state == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x11362))
;

x11362.om$core$IGetRenderState$ = true;

x11362.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11362){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x11362))
;

x11362.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11362){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x11362))
;

x11362.om$core$IGetState$ = true;

x11362.om$core$IGetState$_get_state$arity$1 = ((function (x11362){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4563__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (state["__om_state"]);
}
});})(x11362))
;

x11362.om$core$IGetState$_get_state$arity$2 = ((function (x11362){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x11362))
;

return x11362;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4563__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4563__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_11373 = om.core.children.call(null,this$);
if(((!((c_11373 == null)))?(((false) || (c_11373.om$core$IWillMount$))?true:(((!c_11373.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_11373):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_11373))){
om.core.will_mount.call(null,c_11373);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__11367 = cljs.core.seq.call(null,refs);
var chunk__11368 = null;
var count__11369 = (0);
var i__11370 = (0);
while(true){
if((i__11370 < count__11369)){
var ref = cljs.core._nth.call(null,chunk__11368,i__11370);
om.core.unobserve.call(null,this$,ref);

var G__11374 = seq__11367;
var G__11375 = chunk__11368;
var G__11376 = count__11369;
var G__11377 = (i__11370 + (1));
seq__11367 = G__11374;
chunk__11368 = G__11375;
count__11369 = G__11376;
i__11370 = G__11377;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11367);
if(temp__4425__auto____$1){
var seq__11367__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11367__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__11367__$1);
var G__11378 = cljs.core.chunk_rest.call(null,seq__11367__$1);
var G__11379 = c__5366__auto__;
var G__11380 = cljs.core.count.call(null,c__5366__auto__);
var G__11381 = (0);
seq__11367 = G__11378;
chunk__11368 = G__11379;
count__11369 = G__11380;
i__11370 = G__11381;
continue;
} else {
var ref = cljs.core.first.call(null,seq__11367__$1);
om.core.unobserve.call(null,this$,ref);

var G__11382 = cljs.core.next.call(null,seq__11367__$1);
var G__11383 = null;
var G__11384 = (0);
var G__11385 = (0);
seq__11367 = G__11382;
chunk__11368 = G__11383;
count__11369 = G__11384;
i__11370 = G__11385;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_11386 = this$.props;
var c_11387 = om.core.children.call(null,this$);
if(((!((c_11387 == null)))?(((false) || (c_11387.om$core$IWillUpdate$))?true:(((!c_11387.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_11387):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_11387))){
var state_11388 = this$.state;
om.core.will_update.call(null,c_11387,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_11389 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4563__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x11391 = cljs.core.clj__GT_js.call(null,methods$);
x11391.om$core$ISetState$ = true;

x11391.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11391){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4551__auto__ = !((gstate == null));
if(and__4551__auto__){
return render;
} else {
return and__4551__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x11391))
;

x11391.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x11391){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x11391))
;

x11391.om$core$IGetRenderState$ = true;

x11391.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11391){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x11391))
;

x11391.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11391){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x11391))
;

x11391.om$core$IGetState$ = true;

x11391.om$core$IGetState$_get_state$arity$1 = ((function (x11391){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4563__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x11391))
;

x11391.om$core$IGetState$_get_state$arity$2 = ((function (x11391){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x11391))
;

return x11391;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__11395){
var vec__11396 = p__11395;
var k = cljs.core.nth.call(null,vec__11396,(0),null);
var v = cljs.core.nth.call(null,vec__11396,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__11397 = null;
var G__11397__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__11397__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__11397 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11397__2.call(this,self__,k);
case 3:
return G__11397__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11397.cljs$core$IFn$_invoke$arity$2 = G__11397__2;
G__11397.cljs$core$IFn$_invoke$arity$3 = G__11397__3;
return G__11397;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args11394){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11394)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__11399 = null;
var G__11399__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__11399__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__11399 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11399__2.call(this,self__,k);
case 3:
return G__11399__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11399.cljs$core$IFn$_invoke$arity$2 = G__11399__2;
G__11399.cljs$core$IFn$_invoke$arity$3 = G__11399__3;
return G__11399;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args11398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11398)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5161__auto__,writer__5162__auto__,opt__5163__auto__){
return cljs.core._write.call(null,writer__5162__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x11401 = cljs.core.clone.call(null,val);
x11401.cljs$core$IDeref$ = true;

x11401.cljs$core$IDeref$_deref$arity$1 = ((function (x11401){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x11401))
;

x11401.om$core$ICursor$ = true;

x11401.om$core$ICursor$_path$arity$1 = ((function (x11401){
return (function (_){
var ___$1 = this;
return path;
});})(x11401))
;

x11401.om$core$ICursor$_state$arity$1 = ((function (x11401){
return (function (_){
var ___$1 = this;
return state;
});})(x11401))
;

x11401.om$core$ITransact$ = true;

x11401.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11401){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x11401))
;

x11401.cljs$core$IEquiv$ = true;

x11401.cljs$core$IEquiv$_equiv$arity$2 = ((function (x11401){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x11401))
;

return x11401;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args11402 = [];
var len__5621__auto___11407 = arguments.length;
var i__5622__auto___11408 = (0);
while(true){
if((i__5622__auto___11408 < len__5621__auto___11407)){
args11402.push((arguments[i__5622__auto___11408]));

var G__11409 = (i__5622__auto___11408 + (1));
i__5622__auto___11408 = G__11409;
continue;
} else {
}
break;
}

var G__11404 = args11402.length;
switch (G__11404) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11402.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x11414 = cljs.core.clone.call(null,x);
x11414.cljs$core$ICloneable$ = true;

x11414.cljs$core$ICloneable$_clone$arity$1 = ((function (x11414){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x11414))
;

x11414.om$core$IAdapt$ = true;

x11414.om$core$IAdapt$_adapt$arity$2 = ((function (x11414){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x11414))
;

x11414.om$core$ICursorDerive$ = true;

x11414.om$core$ICursorDerive$_derive$arity$4 = ((function (x11414){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x11414))
;

x11414.om$core$ITransact$ = true;

x11414.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11414){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x11414))
;

return x11414;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x11422 = cljs.core.clone.call(null,cursor);
x11422.om$core$ICursorDerive$ = true;

x11422.om$core$ICursorDerive$_derive$arity$4 = ((function (x11422,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x11422,path,storage))
;

x11422.om$core$IOmRef$ = true;

x11422.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x11422,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x11422,path,storage))
;

x11422.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x11422,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x11422,path,storage))
;

x11422.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x11422,path,storage){
return (function (_){
var ___$1 = this;
var seq__11423 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__11424 = null;
var count__11425 = (0);
var i__11426 = (0);
while(true){
if((i__11426 < count__11425)){
var c = cljs.core._nth.call(null,chunk__11424,i__11426);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__11427 = seq__11423;
var G__11428 = chunk__11424;
var G__11429 = count__11425;
var G__11430 = (i__11426 + (1));
seq__11423 = G__11427;
chunk__11424 = G__11428;
count__11425 = G__11429;
i__11426 = G__11430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11423);
if(temp__4425__auto__){
var seq__11423__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11423__$1)){
var c__5366__auto__ = cljs.core.chunk_first.call(null,seq__11423__$1);
var G__11431 = cljs.core.chunk_rest.call(null,seq__11423__$1);
var G__11432 = c__5366__auto__;
var G__11433 = cljs.core.count.call(null,c__5366__auto__);
var G__11434 = (0);
seq__11423 = G__11431;
chunk__11424 = G__11432;
count__11425 = G__11433;
i__11426 = G__11434;
continue;
} else {
var c = cljs.core.first.call(null,seq__11423__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__11435 = cljs.core.next.call(null,seq__11423__$1);
var G__11436 = null;
var G__11437 = (0);
var G__11438 = (0);
seq__11423 = G__11435;
chunk__11424 = G__11436;
count__11425 = G__11437;
i__11426 = G__11438;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11422,path,storage))
;

x11422.om$core$IOmRef$_get_deps$arity$1 = ((function (x11422,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x11422,path,storage))
;

x11422.om$core$ITransact$ = true;

x11422.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11422,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x11422,path,storage))
;

return x11422;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4563__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4563__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args11439 = [];
var len__5621__auto___11446 = arguments.length;
var i__5622__auto___11447 = (0);
while(true){
if((i__5622__auto___11447 < len__5621__auto___11446)){
args11439.push((arguments[i__5622__auto___11447]));

var G__11448 = (i__5622__auto___11447 + (1));
i__5622__auto___11447 = G__11448;
continue;
} else {
}
break;
}

var G__11441 = args11439.length;
switch (G__11441) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11439.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__11442_11450 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__11443_11451 = null;
var count__11444_11452 = (0);
var i__11445_11453 = (0);
while(true){
if((i__11445_11453 < count__11444_11452)){
var f_11454 = cljs.core._nth.call(null,chunk__11443_11451,i__11445_11453);
f_11454.call(null);

var G__11455 = seq__11442_11450;
var G__11456 = chunk__11443_11451;
var G__11457 = count__11444_11452;
var G__11458 = (i__11445_11453 + (1));
seq__11442_11450 = G__11455;
chunk__11443_11451 = G__11456;
count__11444_11452 = G__11457;
i__11445_11453 = G__11458;
continue;
} else {
var temp__4425__auto___11459 = cljs.core.seq.call(null,seq__11442_11450);
if(temp__4425__auto___11459){
var seq__11442_11460__$1 = temp__4425__auto___11459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11442_11460__$1)){
var c__5366__auto___11461 = cljs.core.chunk_first.call(null,seq__11442_11460__$1);
var G__11462 = cljs.core.chunk_rest.call(null,seq__11442_11460__$1);
var G__11463 = c__5366__auto___11461;
var G__11464 = cljs.core.count.call(null,c__5366__auto___11461);
var G__11465 = (0);
seq__11442_11450 = G__11462;
chunk__11443_11451 = G__11463;
count__11444_11452 = G__11464;
i__11445_11453 = G__11465;
continue;
} else {
var f_11466 = cljs.core.first.call(null,seq__11442_11460__$1);
f_11466.call(null);

var G__11467 = cljs.core.next.call(null,seq__11442_11460__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__11442_11450 = G__11467;
chunk__11443_11451 = G__11468;
count__11444_11452 = G__11469;
i__11445_11453 = G__11470;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4563__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__4563__auto__){
return or__4563__auto__;
} else {
var or__4563__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__4563__auto____$1){
return or__4563__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args11481 = [];
var len__5621__auto___11484 = arguments.length;
var i__5622__auto___11485 = (0);
while(true){
if((i__5622__auto___11485 < len__5621__auto___11484)){
args11481.push((arguments[i__5622__auto___11485]));

var G__11486 = (i__5622__auto___11485 + (1));
i__5622__auto___11485 = G__11486;
continue;
} else {
}
break;
}

var G__11483 = args11481.length;
switch (G__11483) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11481.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_11488 = (function (){var or__4563__auto__ = descriptor;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
var or__4563__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4563__auto____$1)){
return or__4563__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_11488 === goog.object.get(f,"om$tag"))))){
var factory_11489 = React.createFactory(React.createClass(rdesc_11488));
goog.object.set(f,"om$descriptor",factory_11489);

goog.object.set(f,"om$tag",rdesc_11488);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args11490 = [];
var len__5621__auto___11493 = arguments.length;
var i__5622__auto___11494 = (0);
while(true){
if((i__5622__auto___11494 < len__5621__auto___11493)){
args11490.push((arguments[i__5622__auto___11494]));

var G__11495 = (i__5622__auto___11494 + (1));
i__5622__auto___11494 = G__11495;
continue;
} else {
}
break;
}

var G__11492 = args11490.length;
switch (G__11492) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11490.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args11497 = [];
var len__5621__auto___11502 = arguments.length;
var i__5622__auto___11503 = (0);
while(true){
if((i__5622__auto___11503 < len__5621__auto___11502)){
args11497.push((arguments[i__5622__auto___11503]));

var G__11504 = (i__5622__auto___11503 + (1));
i__5622__auto___11503 = G__11504;
continue;
} else {
}
break;
}

var G__11499 = args11497.length;
switch (G__11499) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11497.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__11500 = m;
var map__11500__$1 = ((((!((map__11500 == null)))?((((map__11500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11500):map__11500);
var key = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__11500__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4563__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__11500,map__11500__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__11500,map__11500__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__11500,map__11500__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__11500,map__11500__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4563__auto__ = rkey;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args11506 = [];
var len__5621__auto___11509 = arguments.length;
var i__5622__auto___11510 = (0);
while(true){
if((i__5622__auto___11510 < len__5621__auto___11509)){
args11506.push((arguments[i__5622__auto___11510]));

var G__11511 = (i__5622__auto___11510 + (1));
i__5622__auto___11510 = G__11511;
continue;
} else {
}
break;
}

var G__11508 = args11506.length;
switch (G__11508) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11506.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args11513 = [];
var len__5621__auto___11516 = arguments.length;
var i__5622__auto___11517 = (0);
while(true){
if((i__5622__auto___11517 < len__5621__auto___11516)){
args11513.push((arguments[i__5622__auto___11517]));

var G__11518 = (i__5622__auto___11517 + (1));
i__5622__auto___11517 = G__11518;
continue;
} else {
}
break;
}

var G__11515 = args11513.length;
switch (G__11515) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11513.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_11536 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_11537 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_11538 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x11529_11539 = state;
x11529_11539.om$core$IRootProperties$ = true;

x11529_11539.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_11536,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_11536,cljs.core.dissoc,id,k);
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_11536,cljs.core.dissoc,id);
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRootProperties$_get_property$arity$3 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_11536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$INotify$ = true;

x11529_11539.om$core$INotify$_listen_BANG_$arity$3 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_11537,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_11537,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$INotify$_notify_BANG_$arity$3 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__11530_11540 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_11537));
var chunk__11531_11541 = null;
var count__11532_11542 = (0);
var i__11533_11543 = (0);
while(true){
if((i__11533_11543 < count__11532_11542)){
var vec__11534_11544 = cljs.core._nth.call(null,chunk__11531_11541,i__11533_11543);
var __11545 = cljs.core.nth.call(null,vec__11534_11544,(0),null);
var f_11546 = cljs.core.nth.call(null,vec__11534_11544,(1),null);
f_11546.call(null,tx_data,root_cursor);

var G__11547 = seq__11530_11540;
var G__11548 = chunk__11531_11541;
var G__11549 = count__11532_11542;
var G__11550 = (i__11533_11543 + (1));
seq__11530_11540 = G__11547;
chunk__11531_11541 = G__11548;
count__11532_11542 = G__11549;
i__11533_11543 = G__11550;
continue;
} else {
var temp__4425__auto___11551 = cljs.core.seq.call(null,seq__11530_11540);
if(temp__4425__auto___11551){
var seq__11530_11552__$1 = temp__4425__auto___11551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11530_11552__$1)){
var c__5366__auto___11553 = cljs.core.chunk_first.call(null,seq__11530_11552__$1);
var G__11554 = cljs.core.chunk_rest.call(null,seq__11530_11552__$1);
var G__11555 = c__5366__auto___11553;
var G__11556 = cljs.core.count.call(null,c__5366__auto___11553);
var G__11557 = (0);
seq__11530_11540 = G__11554;
chunk__11531_11541 = G__11555;
count__11532_11542 = G__11556;
i__11533_11543 = G__11557;
continue;
} else {
var vec__11535_11558 = cljs.core.first.call(null,seq__11530_11552__$1);
var __11559 = cljs.core.nth.call(null,vec__11535_11558,(0),null);
var f_11560 = cljs.core.nth.call(null,vec__11535_11558,(1),null);
f_11560.call(null,tx_data,root_cursor);

var G__11561 = cljs.core.next.call(null,seq__11530_11552__$1);
var G__11562 = null;
var G__11563 = (0);
var G__11564 = (0);
seq__11530_11540 = G__11561;
chunk__11531_11541 = G__11562;
count__11532_11542 = G__11563;
i__11533_11543 = G__11564;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRenderQueue$ = true;

x11529_11539.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_11538);
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_11538),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_11538,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

x11529_11539.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x11529_11539,properties_11536,listeners_11537,render_queue_11538){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_11538,cljs.core.empty);
});})(x11529_11539,properties_11536,listeners_11537,render_queue_11538))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x11566 = cljs.core.clone.call(null,cursor);
x11566.cljs$core$ICloneable$ = true;

x11566.cljs$core$ICloneable$_clone$arity$1 = ((function (x11566){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x11566))
;

x11566.om$core$IAdapt$ = true;

x11566.om$core$IAdapt$_adapt$arity$2 = ((function (x11566){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x11566))
;

x11566.om$core$IRootKey$ = true;

x11566.om$core$IRootKey$_root_key$arity$1 = ((function (x11566){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x11566))
;

return x11566;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__11567){
var map__11631 = p__11567;
var map__11631__$1 = ((((!((map__11631 == null)))?((((map__11631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11631):map__11631);
var options = map__11631__$1;
var target = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__11694 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__11694,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__11694,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4563__auto__ = adapt;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_11695 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_11664 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_11665 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_11666 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_11667 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_11667;

om.core._STAR_state_STAR_ = _STAR_state_STAR_11666;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11665;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_11664;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_11695);
} else {
}
}

var queue_11696 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_11696)){
} else {
var seq__11668_11697 = cljs.core.seq.call(null,queue_11696);
var chunk__11669_11698 = null;
var count__11670_11699 = (0);
var i__11671_11700 = (0);
while(true){
if((i__11671_11700 < count__11670_11699)){
var c_11701 = cljs.core._nth.call(null,chunk__11669_11698,i__11671_11700);
if(cljs.core.truth_(c_11701.isMounted())){
var temp__4425__auto___11702 = (c_11701.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___11702)){
var next_props_11703 = temp__4425__auto___11702;
(c_11701.props["__om_cursor"] = next_props_11703);

(c_11701.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4563__auto__ = !((function (){var G__11673 = om.core.children.call(null,c_11701);
if(!((G__11673 == null))){
if((false) || (G__11673.om$core$ICheckState$)){
return true;
} else {
if((!G__11673.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__11673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__11673);
}
})());
if(or__4563__auto__){
return or__4563__auto__;
} else {
return c_11701.shouldComponentUpdate(c_11701.props,c_11701.state);
}
})())){
c_11701.forceUpdate();
} else {
}
} else {
}

var G__11704 = seq__11668_11697;
var G__11705 = chunk__11669_11698;
var G__11706 = count__11670_11699;
var G__11707 = (i__11671_11700 + (1));
seq__11668_11697 = G__11704;
chunk__11669_11698 = G__11705;
count__11670_11699 = G__11706;
i__11671_11700 = G__11707;
continue;
} else {
var temp__4425__auto___11708 = cljs.core.seq.call(null,seq__11668_11697);
if(temp__4425__auto___11708){
var seq__11668_11709__$1 = temp__4425__auto___11708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11668_11709__$1)){
var c__5366__auto___11710 = cljs.core.chunk_first.call(null,seq__11668_11709__$1);
var G__11711 = cljs.core.chunk_rest.call(null,seq__11668_11709__$1);
var G__11712 = c__5366__auto___11710;
var G__11713 = cljs.core.count.call(null,c__5366__auto___11710);
var G__11714 = (0);
seq__11668_11697 = G__11711;
chunk__11669_11698 = G__11712;
count__11670_11699 = G__11713;
i__11671_11700 = G__11714;
continue;
} else {
var c_11715 = cljs.core.first.call(null,seq__11668_11709__$1);
if(cljs.core.truth_(c_11715.isMounted())){
var temp__4425__auto___11716__$1 = (c_11715.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___11716__$1)){
var next_props_11717 = temp__4425__auto___11716__$1;
(c_11715.props["__om_cursor"] = next_props_11717);

(c_11715.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4563__auto__ = !((function (){var G__11675 = om.core.children.call(null,c_11715);
if(!((G__11675 == null))){
if((false) || (G__11675.om$core$ICheckState$)){
return true;
} else {
if((!G__11675.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__11675);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__11675);
}
})());
if(or__4563__auto__){
return or__4563__auto__;
} else {
return c_11715.shouldComponentUpdate(c_11715.props,c_11715.state);
}
})())){
c_11715.forceUpdate();
} else {
}
} else {
}

var G__11718 = cljs.core.next.call(null,seq__11668_11709__$1);
var G__11719 = null;
var G__11720 = (0);
var G__11721 = (0);
seq__11668_11697 = G__11718;
chunk__11669_11698 = G__11719;
count__11670_11699 = G__11720;
i__11671_11700 = G__11721;
continue;
}
} else {
}
}
break;
}
}

var _refs_11722 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_11722)){
} else {
var seq__11676_11723 = cljs.core.seq.call(null,_refs_11722);
var chunk__11677_11724 = null;
var count__11678_11725 = (0);
var i__11679_11726 = (0);
while(true){
if((i__11679_11726 < count__11678_11725)){
var vec__11680_11727 = cljs.core._nth.call(null,chunk__11677_11724,i__11679_11726);
var path_11728__$1 = cljs.core.nth.call(null,vec__11680_11727,(0),null);
var cs_11729 = cljs.core.nth.call(null,vec__11680_11727,(1),null);
var cs_11730__$1 = cljs.core.deref.call(null,cs_11729);
var seq__11681_11731 = cljs.core.seq.call(null,cs_11730__$1);
var chunk__11682_11732 = null;
var count__11683_11733 = (0);
var i__11684_11734 = (0);
while(true){
if((i__11684_11734 < count__11683_11733)){
var vec__11685_11735 = cljs.core._nth.call(null,chunk__11682_11732,i__11684_11734);
var id_11736 = cljs.core.nth.call(null,vec__11685_11735,(0),null);
var c_11737 = cljs.core.nth.call(null,vec__11685_11735,(1),null);
if(cljs.core.truth_(c_11737.shouldComponentUpdate(c_11737.props,c_11737.state))){
c_11737.forceUpdate();
} else {
}

var G__11738 = seq__11681_11731;
var G__11739 = chunk__11682_11732;
var G__11740 = count__11683_11733;
var G__11741 = (i__11684_11734 + (1));
seq__11681_11731 = G__11738;
chunk__11682_11732 = G__11739;
count__11683_11733 = G__11740;
i__11684_11734 = G__11741;
continue;
} else {
var temp__4425__auto___11742 = cljs.core.seq.call(null,seq__11681_11731);
if(temp__4425__auto___11742){
var seq__11681_11743__$1 = temp__4425__auto___11742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11681_11743__$1)){
var c__5366__auto___11744 = cljs.core.chunk_first.call(null,seq__11681_11743__$1);
var G__11745 = cljs.core.chunk_rest.call(null,seq__11681_11743__$1);
var G__11746 = c__5366__auto___11744;
var G__11747 = cljs.core.count.call(null,c__5366__auto___11744);
var G__11748 = (0);
seq__11681_11731 = G__11745;
chunk__11682_11732 = G__11746;
count__11683_11733 = G__11747;
i__11684_11734 = G__11748;
continue;
} else {
var vec__11686_11749 = cljs.core.first.call(null,seq__11681_11743__$1);
var id_11750 = cljs.core.nth.call(null,vec__11686_11749,(0),null);
var c_11751 = cljs.core.nth.call(null,vec__11686_11749,(1),null);
if(cljs.core.truth_(c_11751.shouldComponentUpdate(c_11751.props,c_11751.state))){
c_11751.forceUpdate();
} else {
}

var G__11752 = cljs.core.next.call(null,seq__11681_11743__$1);
var G__11753 = null;
var G__11754 = (0);
var G__11755 = (0);
seq__11681_11731 = G__11752;
chunk__11682_11732 = G__11753;
count__11683_11733 = G__11754;
i__11684_11734 = G__11755;
continue;
}
} else {
}
}
break;
}

var G__11756 = seq__11676_11723;
var G__11757 = chunk__11677_11724;
var G__11758 = count__11678_11725;
var G__11759 = (i__11679_11726 + (1));
seq__11676_11723 = G__11756;
chunk__11677_11724 = G__11757;
count__11678_11725 = G__11758;
i__11679_11726 = G__11759;
continue;
} else {
var temp__4425__auto___11760 = cljs.core.seq.call(null,seq__11676_11723);
if(temp__4425__auto___11760){
var seq__11676_11761__$1 = temp__4425__auto___11760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11676_11761__$1)){
var c__5366__auto___11762 = cljs.core.chunk_first.call(null,seq__11676_11761__$1);
var G__11763 = cljs.core.chunk_rest.call(null,seq__11676_11761__$1);
var G__11764 = c__5366__auto___11762;
var G__11765 = cljs.core.count.call(null,c__5366__auto___11762);
var G__11766 = (0);
seq__11676_11723 = G__11763;
chunk__11677_11724 = G__11764;
count__11678_11725 = G__11765;
i__11679_11726 = G__11766;
continue;
} else {
var vec__11687_11767 = cljs.core.first.call(null,seq__11676_11761__$1);
var path_11768__$1 = cljs.core.nth.call(null,vec__11687_11767,(0),null);
var cs_11769 = cljs.core.nth.call(null,vec__11687_11767,(1),null);
var cs_11770__$1 = cljs.core.deref.call(null,cs_11769);
var seq__11688_11771 = cljs.core.seq.call(null,cs_11770__$1);
var chunk__11689_11772 = null;
var count__11690_11773 = (0);
var i__11691_11774 = (0);
while(true){
if((i__11691_11774 < count__11690_11773)){
var vec__11692_11775 = cljs.core._nth.call(null,chunk__11689_11772,i__11691_11774);
var id_11776 = cljs.core.nth.call(null,vec__11692_11775,(0),null);
var c_11777 = cljs.core.nth.call(null,vec__11692_11775,(1),null);
if(cljs.core.truth_(c_11777.shouldComponentUpdate(c_11777.props,c_11777.state))){
c_11777.forceUpdate();
} else {
}

var G__11778 = seq__11688_11771;
var G__11779 = chunk__11689_11772;
var G__11780 = count__11690_11773;
var G__11781 = (i__11691_11774 + (1));
seq__11688_11771 = G__11778;
chunk__11689_11772 = G__11779;
count__11690_11773 = G__11780;
i__11691_11774 = G__11781;
continue;
} else {
var temp__4425__auto___11782__$1 = cljs.core.seq.call(null,seq__11688_11771);
if(temp__4425__auto___11782__$1){
var seq__11688_11783__$1 = temp__4425__auto___11782__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11688_11783__$1)){
var c__5366__auto___11784 = cljs.core.chunk_first.call(null,seq__11688_11783__$1);
var G__11785 = cljs.core.chunk_rest.call(null,seq__11688_11783__$1);
var G__11786 = c__5366__auto___11784;
var G__11787 = cljs.core.count.call(null,c__5366__auto___11784);
var G__11788 = (0);
seq__11688_11771 = G__11785;
chunk__11689_11772 = G__11786;
count__11690_11773 = G__11787;
i__11691_11774 = G__11788;
continue;
} else {
var vec__11693_11789 = cljs.core.first.call(null,seq__11688_11783__$1);
var id_11790 = cljs.core.nth.call(null,vec__11693_11789,(0),null);
var c_11791 = cljs.core.nth.call(null,vec__11693_11789,(1),null);
if(cljs.core.truth_(c_11791.shouldComponentUpdate(c_11791.props,c_11791.state))){
c_11791.forceUpdate();
} else {
}

var G__11792 = cljs.core.next.call(null,seq__11688_11783__$1);
var G__11793 = null;
var G__11794 = (0);
var G__11795 = (0);
seq__11688_11771 = G__11792;
chunk__11689_11772 = G__11793;
count__11690_11773 = G__11794;
i__11691_11774 = G__11795;
continue;
}
} else {
}
}
break;
}

var G__11796 = cljs.core.next.call(null,seq__11676_11761__$1);
var G__11797 = null;
var G__11798 = (0);
var G__11799 = (0);
seq__11676_11723 = G__11796;
chunk__11677_11724 = G__11797;
count__11678_11725 = G__11798;
i__11679_11726 = G__11799;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11631,map__11631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args11802 = [];
var len__5621__auto___11805 = arguments.length;
var i__5622__auto___11806 = (0);
while(true){
if((i__5622__auto___11806 < len__5621__auto___11805)){
args11802.push((arguments[i__5622__auto___11806]));

var G__11807 = (i__5622__auto___11806 + (1));
i__5622__auto___11806 = G__11807;
continue;
} else {
}
break;
}

var G__11804 = args11802.length;
switch (G__11804) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11802.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args11809 = [];
var len__5621__auto___11812 = arguments.length;
var i__5622__auto___11813 = (0);
while(true){
if((i__5622__auto___11813 < len__5621__auto___11812)){
args11809.push((arguments[i__5622__auto___11813]));

var G__11814 = (i__5622__auto___11813 + (1));
i__5622__auto___11813 = G__11814;
continue;
} else {
}
break;
}

var G__11811 = args11809.length;
switch (G__11811) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11809.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args11818 = [];
var len__5621__auto___11822 = arguments.length;
var i__5622__auto___11823 = (0);
while(true){
if((i__5622__auto___11823 < len__5621__auto___11822)){
args11818.push((arguments[i__5622__auto___11823]));

var G__11824 = (i__5622__auto___11823 + (1));
i__5622__auto___11823 = G__11824;
continue;
} else {
}
break;
}

var G__11820 = args11818.length;
switch (G__11820) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11818.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__11821 = owner.refs;
var G__11821__$1 = (((G__11821 == null))?null:(G__11821[name]));
var G__11821__$2 = (((G__11821__$1 == null))?null:G__11821__$1.getDOMNode());
return G__11821__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__11827 = owner.refs;
var G__11827__$1 = (((G__11827 == null))?null:goog.object.get(G__11827,name));
return G__11827__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args11828 = [];
var len__5621__auto___11831 = arguments.length;
var i__5622__auto___11832 = (0);
while(true){
if((i__5622__auto___11832 < len__5621__auto___11831)){
args11828.push((arguments[i__5622__auto___11832]));

var G__11833 = (i__5622__auto___11832 + (1));
i__5622__auto___11832 = G__11833;
continue;
} else {
}
break;
}

var G__11830 = args11828.length;
switch (G__11830) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11828.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args11835 = [];
var len__5621__auto___11838 = arguments.length;
var i__5622__auto___11839 = (0);
while(true){
if((i__5622__auto___11839 < len__5621__auto___11838)){
args11835.push((arguments[i__5622__auto___11839]));

var G__11840 = (i__5622__auto___11839 + (1));
i__5622__auto___11839 = G__11840;
continue;
} else {
}
break;
}

var G__11837 = args11835.length;
switch (G__11837) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11835.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args11842 = [];
var len__5621__auto___11845 = arguments.length;
var i__5622__auto___11846 = (0);
while(true){
if((i__5622__auto___11846 < len__5621__auto___11845)){
args11842.push((arguments[i__5622__auto___11846]));

var G__11847 = (i__5622__auto___11846 + (1));
i__5622__auto___11846 = G__11847;
continue;
} else {
}
break;
}

var G__11844 = args11842.length;
switch (G__11844) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11842.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args11849 = [];
var len__5621__auto___11852 = arguments.length;
var i__5622__auto___11853 = (0);
while(true){
if((i__5622__auto___11853 < len__5621__auto___11852)){
args11849.push((arguments[i__5622__auto___11853]));

var G__11854 = (i__5622__auto___11853 + (1));
i__5622__auto___11853 = G__11854;
continue;
} else {
}
break;
}

var G__11851 = args11849.length;
switch (G__11851) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11849.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args11856 = [];
var len__5621__auto___11859 = arguments.length;
var i__5622__auto___11860 = (0);
while(true){
if((i__5622__auto___11860 < len__5621__auto___11859)){
args11856.push((arguments[i__5622__auto___11860]));

var G__11861 = (i__5622__auto___11860 + (1));
i__5622__auto___11860 = G__11861;
continue;
} else {
}
break;
}

var G__11858 = args11856.length;
switch (G__11858) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11856.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
