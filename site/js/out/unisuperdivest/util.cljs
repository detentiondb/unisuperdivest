(ns unisuperdivest.util
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)

(defn link [url text] [:a {:href url} text])

(defn mailto 
  ([email text] (link (str "mailto:" email) text))
  ([email]
   (let [result (link (str "mailto:"  email) email)]
     (println result)
     result)))

