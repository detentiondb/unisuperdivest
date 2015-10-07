(ns unisuperdivest.index
  (:require [unisuperdivest.util :as util :refer [link mailto tabulate]]
            [hiccups.runtime :as hiccupsrt :refer [h]])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))


(defn page []
  (html [:div [:h1 "Is your super with UniSuper?"]
        [:p (h "Download a sample member’s letter to UniSuper ") (link "resources/sample_members_letter.odt" "here")]
        [:p "Email your letter to the CEO Kevin O’Sullivan: " (mailto "unisuper.ceo@unisuper.com.au")]
        [:p "Send copies to the members of the board:"]
        [:table.table (tabulate
                        [[[:b "Ian Martin"] "Independent Director" (mailto "imartin@berkcap.com")]
                         [[:b "Professor Paul Johnson"] "Employer representative" (mailto "paul.johnson@uwa.edu.au")]
                         [[:b "Professor Jane den Hollander"] "Employer representative" (mailto "vcoffice@deakin.edu.au")]
                         [[:b "Stephen Somogyi"] "Employer representative" (mailto "vpr@rmit.edu.au")]
                         ;  And write to your employee representatives:
                         [[:b "Professor Michael Skully"] "Employee representative" (mailto "Michael.Skully@monash.edu")]
                         [[:b "Keith Tull"] "Employee representative" (mailto "keith.tull@rmit.edu.au")]])]]))
;
;  Consultative Committees
;  Each University has employee representatives on UniSuper's Consultative Committee. Usually there are two: one professional and one academic staff member. These are your local colleagues whose role it is to represent you to UniSuper and are a great contact to talk to about divestment from the detention industry. For help finding out your Consultative Committee representatives please get in touch. 
;
;  Are you a member of the NTEU or the CPSU?
;  Both the NTEU and the CPSU have a representative on the UniSuper board.
;  Grahame McCulloch, NTEU General Secretary, is the NTEU representative: gmcculloch@nteu.org.au
;  Neville Kitchin, CPSU SPSF Group South Australia branch Assistant Secretary, is the CPSU representative: nev@cpsu.asn.au
;  These Unions have the ability to pass a motion calling on UniSuper to divest from Transfield Services, Decmil, Serco and the detention industry.
;  For members of the National Tertiary Education Union
;  In October 2014, the National Council Meeting of the NTEU, endorsed the following resolution
;  "UNISUPER INVESTMENTS AND AUSTRALIA'S DETENTION OF REFUGEES
;  Australia's practice of the mandatory detention of refugees is wrong. Staff at Australian universities overwhelmingly reject it as immoral, ineffective, and wasteful. The NTEU is committed to supporting actions that will bring about an end to this policy. Mandatory detention only occurs because the government supports it and because commercial investors support it.
;  Stopping the abusive regime requires persuading and pressuring those parties to withdraw their support. The NTEU has already made decisions in response to their attitudes towards refugee processing. This statement of policy acknowledges that the NTEU has a role to play in offering and refusing to companies on similar grounds. 
;  One major point of influence for the NTEU in corporate decision making is the investment profile of the UniSuper fund. UniSuper's decisions to invest or not invest in firms that take contracts to imprison refugees offshore, indefinitely, or under terms of detention that contravene the NTEU's stated policies on refugee processing can make a significant difference to the capacity and willingness of those firms to collaborate in this abusive regime. 
;  While the NTEU does not exercise complete control over UniSuper decisions, it has an important say in the investment decisions of the fund. This statement commits the NTEU to take all reasonable steps to change UniSuper's practices so that the fund expressly dissociates itself and its members' resources from companies that receive money for the mandatory and offshore detention of refugees. We call on the directors of the board of UniSuper to consider the matters raised in this resolution when exercising their fiduciary duties."
;  If you are an NTEU member, a sample motion that could be passed at branch meetings is here.)
;
