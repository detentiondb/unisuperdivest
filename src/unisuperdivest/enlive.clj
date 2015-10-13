(ns unisuperdivest.enlive
  (:require [unisuperdivest.about :as about]
            [unisuperdivest.members :as members]
            [unisuperdivest.unions :as unions]
            [net.cgrand.enlive-html :as enlive])
  (:use hiccup.core))

(enlive/defsnippet analytics "templates/analytics.html" [:script]
  []
  [:script enlive/any-node] (enlive/replace-vars {:google-analytics-key "UA-68804408-1"
                                                  :google-analytics-domain "unisuperdivest.net"}))

(enlive/deftemplate main-template "templates/main.html"
  [{:keys [title content]}]
  [:title] (enlive/content (str "UniSuper Divest | " title))
  [:.kioo-content] (enlive/html-content (html content))
  [:body] (enlive/append (analytics)))

(defn render [nodes] (apply str nodes))

(defn unisuper-page 
  [pagefn] (fn [filename] (spit filename (render (main-template (pagefn))))))

(def about (unisuper-page about/page))
(def members (unisuper-page members/page))
(def unions (unisuper-page unions/page))

(defn refresh []
  (about "site/index.html")
  (members "site/members.html")
  (unions "site/unions.html"))
