(ns unisuperdivest.util
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)

(defn link [url text] [:a {:href url} text])

(defn mailto 
  ([email text] (link (str "mailto:" email) text))
  ([email] (link (str "mailto:"  email) email)))

(defn- section [elem children] (into [] (cons elem children)))

(defn tabulate [matrx]
  (section :tbody (for [row matrx] 
                    (section :tr (for [col row] [:td col])))))

