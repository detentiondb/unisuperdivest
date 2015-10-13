(ns unisuperdivest.enlive
  (:require [unisuperdivest.about :as about]
            [unisuperdivest.members :as members]
            [unisuperdivest.unions :as unions]
            [net.cgrand.enlive-html :as enlive])
  (:use hiccup.core))

(enlive/deftemplate main-template "templates/main.html"
  [{:keys [title content]}]
  [:title] (enlive/content title)
  [:.kioo-content] (enlive/html-content (html content)))

(defn render [nodes] (apply str nodes))

(defn unisuper-page 
  [pagefn] (fn [filename] (spit filename (render (main-template (pagefn))))))

(def about (unisuper-page about/page))
(def members (unisuper-page members/page))
(def unions (unisuper-page unions/page))

(about "site/index.html")
(members "site/members.html")
(unions "site/unions.html")
