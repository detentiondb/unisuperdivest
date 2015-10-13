(ns unisuperdivest.members
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate]]))

(defn page []
  {:name "members"
   :title "UniSuper Members"
   :content 
   [:div [:img.image-inline.pull-right {:src "/img/unisuper_divest_transparent.png"}]
    [:h1 "My super is with UniSuper—how can I take action?"]
    [:p "The UniSuper Divest team believes a successful divestment campaign will achieve a step change in detention industry divestment: 
        not just through individual divestment, but through the collective action of fund members to urge UniSuper to divest from detention, and 
        to subsequently screen further investment decisions for connections to detention."]

    [:h2 "Contact UniSuper Board members to urge divestment"]
    [:p "The directors on the UniSuper Board have a special capacity to affect the fund’s investment policy and decisions."]
    [:p "As a UniSuper member, one effective and direct action you can take is to directly contact the Board by phone, email or conventional mail to call 
        for divestment."]

    [:blockquote.top-spacer
     [:ul
      [:li "Download a sample member’s letter to UniSuper " (link "resources/unisuper_sample_members_letter.docx" "here") "."]
      [:li "Email an edited version of this letter to " [:b "UniSuper CEO Kevin O’Sullivan"] ": " (mailto "unisuper.ceo@unisuper.com.au")]
      [:li "Send this letter, or your own letter, to the members of the UniSuper Board below"]]]

    [:h4.top-spacer "UNISUPER BOARD"]
    [:table.table (tabulate
                    [[[:b "Ian Martin"] "Independent Director" (mailto "imartin@berkcap.com")]
                     [[:b "Professor Paul Johnson"] "Employer representative" (mailto "paul.johnson@uwa.edu.au")]
                     [[:b "Professor Jane den Hollander"] "Employer representative" (mailto "vcoffice@deakin.edu.au")]
                     [[:b "Stephen Somogyi"] "Employer representative" (mailto "vpr@rmit.edu.au")]
                     ;  And write to your employee representatives:
                     [[:b "Professor Michael Skully"] "Employee representative" (mailto "Michael.Skully@monash.edu")]
                     [[:b "Keith Tull"] "Employee representative" (mailto "keith.tull@rmit.edu.au")]
                     [[:b "Grahame McCulloch"] "NTEU representative" (mailto "gmcculloch@nteu.org.au")]
                     [[:b "Neville Kitchin"] "CPSU representative" (mailto "nev@cpsu.asn.au")]])]

    [:h2 "Contact your representative on the UniSuper Consultative Committee"]
    [:p "Each university has employee representatives on UniSuper’s Consultative Committee. An institution will usually have two: 
        one professional, and one academic staff member. These are your local colleagues with the task of representing your views 
        to UniSuper. Let them know about your views on detention divestment."]
    [:p "For help determining the Consultative Committee representatives at your institution, please " (mailto "unisuperdivest@gmail.com" "email") 
     " the UniSuper Divest team."]]}) 

