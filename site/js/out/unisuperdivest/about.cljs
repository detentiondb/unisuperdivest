(ns unisuperdivest.about
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate]]
            [hiccups.runtime :as hiccupsrt :refer [h]])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))


(defn page []
  {:name "about"
   :title "About"
   :content 
   (html
     [:div.row
      [:div.col-sm-12
       [:h2 "The campaign to divest from detention"]
       [:img.col-sm-6.pull-right.image-inline {:src "/img/unisuper_divest_transparent.png"}]
       [:p "Australia’s bipartisan policy of subjecting asylum seekers under the UN Refugee 
           Convention to mandatory detention took a further distressing turn with the 
           re-introduction of offshore ‘processing centres’, including a new OPC on Manus 
           Island, PNG."]
       [:p "The opening of Manus and the official re-opening of Nauru saw an increase in 
           the size of construction and service provision tenders opened by the government 
           to third parties in relation to mandatory detention. Among the successful bidders were 
           companies such as Transfield Services, Serco and Decmil Group, who won contracts 
           totalling billions of dollars in value."]
       [:p "Where detention as policy meets detention as profit, institutional investors such as 
           UniSuper have become significant shareholders in the continuation of mandatory detention."]]]
     [:h2 "Has UniSuper divested?"]
     [:h3.col-sm-6.pull-right.image-inline.well "Download the UniSuper Divest " 
      (link "/resources/unisuper_briefing_sep_2015.pdf" "information package") 
      " to learn more about being part of the campaign."]
     [:h3.col-sm-6.pull-right.image-inline.well "See the sections of this site for " 
      (link "#members" "UniSuper members") " and "
      (link "#unions" "NTEU and CPSU members") " for more ways to take action."]
     [:p "Since March 2014, UniSuper members and other activists have been calling on UniSuper 
         to:"
      [:blockquote 
       [:ul
        [:li "Complete and formally announce its divestment from detention-linked stocks and 
             companies"]
        [:li "Announce a policy of screening future investments to avoid implication in the 
             profits of the detention industry"]]]]
     [:p "In April 2014, the Victoria University Branch of the NTEU passed a motion calling on the NTEU to support UniSuper in divestment from detention. 
         Other NTEU branches including Deakin University, Melbourne University, the University of Sydney and the University of Western Australia followed suit. 
         The NTEU National Conference passed an October 2014 resolution in support of divestment from the detention industry."]
     [:p.well [:b "The response from UniSuper has been uncertain."]]
     [:p "The fund’s spokespeople have variously dodged the question of divestment, spoken of 
         ‘engagement’ with major detention contractors, or celebrated UniSuper policies on 
         ethical investment that do not explicitly include the detention industry."]
     [:p.well [:b "UniSuper needs to make a clear statement and formally and permanently divest from detention."]])})

