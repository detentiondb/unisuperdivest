(ns unisuperdivest.about
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate footnote]]))

(defn page []
  {:name "about"
   :title "About"
   :content 
   [:div 
    [:div.row
     [:div.col-sm-12
      [:h2 "The campaign to divest from detention"]
      [:img.col-sm-6.pull-right.image-inline {:src "/img/unisuper_divest_transparent.png"}]
      [:p "Australia’s bipartisan policy of subjecting asylum seekers under the UN Refugee 
          Convention to mandatory detention took a further distressing turn with the 
          re-introduction of offshore ‘processing centres’ (OPCs), including a new OPC on Manus 
          Island, PNG."]
      [:p "The opening of Manus and the official re-opening of the OPC on Nauru saw a significant 
          increase in the size of construction and service provision tenders opened by the 
          government to third parties. Among the successful bidders were 
          companies such as Transfield Services (likely soon to be rebranded Broadspectrum), 
          Wilson Security and Decmil Group, who won contracts totalling billions of dollars in value."]
      [:p "Where detention as policy meets detention as profit, institutional investors such as 
          UniSuper have become significant shareholders in the continuation of mandatory detention."]]]
    [:h2 "Has UniSuper divested?"]
    [:h3.col-sm-6.pull-right.image-inline.well "Download the UniSuper Divest " 
     (link "/resources/unisuper_briefing_sep_2015.pdf" "information package") 
     " to learn more about being part of the campaign."]
    [:h3.col-sm-6.pull-right.image-inline.well "See the sections of this site for " 
     (link "members.html" "UniSuper members") " and "
     (link "unions.html" "NTEU and CPSU members") " for more ways to take action."]
    [:h4 "The response from UniSuper to calls for detention divestment has been uncommitted"]
    [:p "UniSuper has consistently refused to rule out re-investing in Transfield Services (Broadspectrum). 
        UniSuper must commit to screening out the detention industry. ESG mechanisms provide for such screening, 
        and UniSuper is required to make a public, clear and transparent statement of policy in this regard."]
    [:h4 "UniSuper remains entangled in the detention network."]
    [:p "As at 2 September 2015, UniSuper has confirmed that members’ retirement savings are 
        invested in Decmil Group. The Board of UniSuper also has questionable links to 
        Transfield Services (Broadspectrum)."]
    [:h2.top-spacer "What are we calling for?"]
    [:p "Since March 2014, UniSuper members and other activists have been calling on UniSuper 
        to:"
     [:blockquote 
      [:ul
       [:li "Complete and formally announce its divestment from detention-linked stocks and 
            companies"]
       [:li "Announce a policy of screening future investments to avoid implication in the 
            profits of the detention industry"]]]]
    [:p "In April 2014, the Victoria University Branch of the National Tertiary Education Union (NTEU) calling on the NTEU to support UniSuper in divestment from detention"
    (footnote (link "https://xborderoperationalmatters.wordpress.com/2014/04/11/nteu-vu-super/")) ". The NTEU branch at the University of Sydney followed suit"
    (footnote (link "https://xborderoperationalmatters.wordpress.com/2014/03/19/nteu-usyd-divestment/")) ", as did the Student Union of the University of Melbourne"
    (footnote (link "https://xborderoperationalmatters.wordpress.com/2014/08/19/uni-of-melbourne-student-union-passes-motion-in-support-of-divestment-transfield-unisuper-nteu/")) "
    and the University of Western Sydney.
        The NTEU National Conference "
     (link "unions.html#statement" "passed an October 2014 resolution")
    " in support of divestment from the detention industry."]
    [:p.well [:b "The response from UniSuper has been uncertain."]]
    [:p "The fund’s spokespeople have variously dodged the question of divestment, spoken of 
        ‘engagement’ with major detention contractors, or celebrated UniSuper policies on 
        ethical investment that do not explicitly include the detention industry."]
    [:p.well [:b "UniSuper needs to make a clear statement and formally and permanently divest from detention."]]]})

