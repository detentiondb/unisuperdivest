(ns unisuperdivest.core 
  (:require [kioo.om :refer [content html-content set-style set-attr do-> substitute listen lifecycle]]
            [kioo.core :refer [handle-wrapper]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            unisuperdivest.index)
  (:require-macros [kioo.om :refer [defsnippet deftemplate]]))


(defn unisuper-title [t] (str "UniSuper Divest | " t))

(deftemplate unisuper-page "templates/main.html"
  [data]
  {[:.kioo-content] (do-> (html-content (:content data)))})

;   [:.content] (do-> 
;                 (lifecycle {:on-render (fn [this] (js/console.log "I have been updated"))})
;                 (content (:content data)))
;   [:div] (set-style :color "red")
;   [:.what] (set-style :color "blue")})

(defn init [state]
  (let [data (first (:pages state))]
    (set! (. js/document -title) (unisuper-title (:title data)))
    (om/component (unisuper-page data))))

(def app-state (atom {:pages [{:title "Home"
                               :content (unisuperdivest.index/page)}]}))

(om/root init app-state {:target  (.-body js/document)})

(enable-console-print!)

(println "Test!")

