(ns unisuperdivest.about
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate footnote]]))

(defn page []
  {:name "about"
   :title "About"
   :content 
   [:div 
    [:div.row
     [:div.col-sm-12
      [:h1 "The campaign to divest from detention"]
      [:img.col-sm-6.pull-right.image-inline {:src "/img/unisuper_divest_transparent.png"}]
      [:p "Australia’s bipartisan policy of subjecting asylum seekers under the UN Refugee 
          Convention to mandatory detention took a further distressing turn with the 
          re-introduction of offshore ‘processing centres’ (OPCs), including a new OPC on Manus 
          Island, PNG."]
      [:p "The opening of Manus and the official re-opening of the OPC on Nauru saw a significant 
          increase in the size of construction and service provision tenders opened by the 
          government to third parties. Among the successful bidders were 
          companies such as Transfield Services (likely soon to be rebranded Broadspectrum), 
          Wilson Security and Decmil Group, who have won contracts totalling billions of dollars in value."]
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
        UniSuper must commit to screening out the detention industry. Environmental, Social and Governance mechanisms provide for such screening, 
        and UniSuper should make a public, clear and transparent statement of policy in this regard."]

    [:p "The Board of UniSuper also has questionable links to 
        Broadspectrum (formerly Transfield Services)."]
    [:h2.top-spacer "What are we calling for?"]
    [:p "Since March 2014" 
     (footnote
       "In March 2014, the Sydney University Branch of the National Tertiary Education Union (NTEU) called on the NTEU to support UniSuper in divestment from detention: " 
        (link "https://xborderoperationalmatters.wordpress.com/2014/03/19/nteu-usyd-divestment/") ". The NTEU Branch at Victoria University followed suit: " 
        (link "https://xborderoperationalmatters.wordpress.com/2014/04/11/nteu-vu-super/") ", as has the Branch at the University of Western Sydney and most recently at La Trobe University. The Student Union of the University of Melbourne has also called for divestment: " (link "https://xborderoperationalmatters.wordpress.com/2014/08/19/uni-of-melbourne-student-union-passes-motion-in-support-of-divestment-transfield-unisuper-nteu/") ".")
     ", UniSuper members and other activists have been calling on UniSuper to:"
     [:blockquote 
      [:ul
       [:li "Formally announce its complete and ongoing divestment from detention-linked stocks and 
            companies"]
       [:li "Announce a policy of screening future investments to avoid implication in the 
            profits of the detention industry"]]]]

    [:p "The NTEU National Conference "
     (link "unions.html#statement" "passed an October 2014 resolution")
     " in support of divestment from the detention industry."]
    [:p "The UniSuper Divest campaign calls on the UniSuper fund to permanently and definitively declare its divestment from Transfield Services (Broadspectrum), Serco, Decmil and other detention contractors. The campaign calls on the National Tertiary Education Union (NTEU) to honour the " 
     (link "http://unisuperdivest.net/unions.html#statement" "resolution passed at the 2014 NTEU National Council") 
     " which called for UniSuper's complete divestment from the detention industry. In particular, UniSuper and NTEU members call on the NTEU General Secretary, who sits on the UniSuper Board, to ensure that the NTEU and UniSuper's members' superannuation is no longer, and will never be, invested in any corporation that profits from human rights abuses of asylum seekers in the detention system."]]})

