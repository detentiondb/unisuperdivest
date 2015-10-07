(ns unisuperdivest.core 
  (:require [kioo.om :refer [content html-content set-style set-attr do-> substitute listen lifecycle]]
            [kioo.core :refer [handle-wrapper]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [unisuperdivest.index :as index]
            [unisuperdivest.about :as about]
            [unisuperdivest.members :as members]
            [unisuperdivest.unions :as unions])
  (:require-macros [kioo.om :refer [defsnippet deftemplate]])
  (:import goog.History
           goog.history.EventType))

(enable-console-print!)

(defn set-title [t] 
  (set! (. js/document -title) (str "UniSuper Divest | " t)))

(defsnippet tab "templates/main.html" [:.kioo-content]
  [{:keys [title content]}]
  {[:.kioo-content] (do->
                      (lifecycle {:on-render (fn [this] (set-title title))})
                      (html-content content))})

(deftemplate unisuperdivest "templates/main.html"
  [{:keys [current-page pages]}]
  {[:.kioo-content] (do->
                      (lifecycle {:on-render (fn [this] (println current-page))})
                      (content (tab (first (filter #(= (:name %) current-page) pages)))))})


(defn init [data] (om/component (unisuperdivest data)))


(def app-state (atom {:current-page "about"
                      :pages [(about/page)
                              (unions/page)
                              (members/page)]}))

(defroute "/:page" {:as params}
  (swap! app-state assoc :current-page (:page params)))

(defroute "*" [] 
  (secretary/dispatch! "about"))

(let [h (History.)]
  (goog.events/listen h EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h
    (.setEnabled true)))


(om/root init app-state {:target  (.-body js/document)})



