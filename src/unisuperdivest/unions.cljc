(ns unisuperdivest.unions
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate]]))

(defn page []
  {:name "unions"
   :title "Union Members"
   :content
   [:div 
    [:div
     [:h1 "Are you a member of the NTEU or the CPSU?"]
     [:p "Both the National Tertiary Education Union (NTEU) and the Community and Public Sector Union (CPSU) have a representative on the UniSuper Board. Members of these unions have the capacity
         to influence the investment decisions of UniSuper through the recommendations made by their union’s Board representative."]
     [:h4.top-spacer "UNISUPER BOARD — UNION REPRESENTATIVES"]
     [:table.table (tabulate
                     [[[:b "Grahame McCulloch"] "NTEU General Secretary" "NTEU representative" (mailto "gmcculloch@nteu.org.au")]
                      [[:b "Neville Kitchin"] "CPSU SPSF Group South Australia Branch Assistant Secretary" "CPSU representative" (mailto "nev@cpsu.asn.au")]])]
     [:p "The NTEU and the CPSU are able to pass motions that call on UniSuper to divest from Transfield Services, Decmil, Serco 
         and other detention contractors on a complete and permanent basis."]
     [:p.well [:b "Please contact your Union representative today to call on them to urge UniSuper to divest!"]]]

    [:h2.top-spacer "For members of the NTEU"]
    [:div.row
     [:div.col-sm-12 [:img.col-sm-6.pull-right.image-inline {:src "/img/unisuper_divest_transparent.png"}]
      [:p {:id "statement"} "In October 2014, the National Council Meeting of the NTEU endorsed the following resolution: "
       [:blockquote 
        [:h4 "UNISUPER INVESTMENTS AND AUSTRALIA’S DETENTION OF REFUGEES"]
        [:p "Australia’s practice of the mandatory detention of refugees is wrong. Staff at Australian universities overwhelmingly 
            reject it as immoral, ineffective, and wasteful. The NTEU is committed to supporting actions that will bring about an 
            end to this policy. Mandatory detention only occurs because the government supports it and because commercial investors support it."]
        [:p "Stopping the abusive regime requires persuading and pressuring those parties to withdraw their support. The NTEU has 
            already made decisions in response to their attitudes towards refugee processing. This statement of policy acknowledges that the NTEU has a role to play in offering and refusing to companies on similar grounds."] 
        [:p "One major point of influence for the NTEU in corporate decision making is the investment profile of the UniSuper fund. UniSuper’s decisions to invest or not invest in firms that take contracts to imprison refugees offshore, indefinitely, or under terms of detention that contravene the NTEU’s stated policies on refugee processing can make a significant difference to the capacity and willingness of those firms to collaborate in this abusive regime."]
        [:p "While the NTEU does not exercise complete control over UniSuper decisions, it has an important say in the investment decisions of the fund. This statement commits the NTEU to take all reasonable steps to change UniSuper’s practices so that the fund expressly dissociates itself and its members’ resources from companies that receive money for the mandatory and offshore detention of refugees. We call on the directors of the board of UniSuper to consider the matters raised in this resolution when exercising their fiduciary duties."]]]
      #_[:p "If you are an NTEU member, a sample motion that could be passed at branch meetings is here."]]]]})

