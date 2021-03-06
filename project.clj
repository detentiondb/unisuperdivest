(defproject unisuperdivest "0.1.0-SNAPSHOT"

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :eval-in :leiningen

  :dependencies [[kioo "0.4.1"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [cljsjs/react "0.14.0-0"]
                 [org.omcljs/om "0.9.0"]
                 [secretary "1.2.3"]
                 [hiccups "0.3.0"]
                 [leiningen "2.5.0"]
                 [org.clojure/data.json "0.2.6"]
                 [hiccup "1.0.5"]
                 [enlive "1.1.6"]]

  :plugins [[lein-s3-static-deploy "0.1.0"]
            [lein-cljsbuild "1.0.6"]]

  :source-paths ["src"]

  :aws {:access-key ~(System/getenv "AWS_ACCESS_KEY") 
        :secret-key ~(System/getenv "AWS_SECRET_KEY") 
        :s3-static-deploy {:bucket "unisuperdivest.net" 
                           :local-root "site"}}

  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :dev :compiler :output-dir]
                                    [:cljsbuild :builds :dev :compiler :output-to]]
  :min-lein-version "2.5.0"

  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :compiler {:output-to     "./site/js/unisuperdivest.js"
                                        :output-dir    "./site/js/out"
                                        :source-map    "./site/js/unisuperdivest.js.map"
                                        :optimizations :none
                                        :pretty-print  true}}}})

