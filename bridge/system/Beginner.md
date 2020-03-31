---
layout: postlayout.hbs
title: Beginner System
templateEngineOverride: hbs, md
tags: system
---

{{#escstr}}

# Beginner System
This is a beginner system, which is playable and easy to learn.

# Opening
## Opening

{{#opts}}
Pass: Unable to open
1!C: 3+!C. 12-14 balanced or 12-21 4+!C unbalanced
1!D: 3+!D. 12-14 balanced or 12-21 4+!D unbalanced
1!H: 5+!H 12-21. Not 15-17 / 20-21 balanced
1!S: 5+!S 12-21. Not 15-17 / 20-21 balanced
1!N: 15-17 Balanced. Can have 5-card major
2!C: Artificial 22+. Forcing
2!D/!H/!S: 6-11 Good 6+ suit
2!N: 20-21 Balanced. Can have 5-card major
3X: Good 7+ suit. Weak hand
3N: 26-27 Balanced
Higher: Preempts
{{/opts}}

We can decide by the following flow chart:

*   If you have less than 12 points, open 2!D/!H/!S or 3 of a suit if you have 6-11 points and a good suit.
*   If you have at least 12 points:
    *   Open 1!N / 2!N if you have a balanced hand with points 15-17 / 20-21, else:
    *   If you have 5+card suits, open the highest strain at the 1 level, else:
    *   Open the longer minor. If you have equal length in the minors, open 1!C if you have a balanced hand; open 1!D if you have an unbalanced hand.
    


If you have a balanced hand with the following point range:

{{#opts}}
0-11: Pass
12-14: Open 1 of a suit. Plan to rebid 1!N after your partner respond.
15-17: Open 1!N
18-19: Open 1 of a suit. Plan to rebid 2!N after your partner respond.
20-21: Open 2!N
22-23: Open 2!C. Plan to rebid 2!N.
24-25: Open 2!C. Plan to rebid 3!N.
26-27: Open 3!N.
28+: Improvise. Email a picture you holding this hand to me.
{{/opts}}


# Responses

## Response to 1!N

{{#opts}}
1!N - ?
Pass: 0-7 Balanced. No 5-card suits
@2!C: Stayman asking bid. Invitational or better
@2!D: Jacoby transfer. 5+!H any strength
@2!H: Jacoby transfer. 5+!S any strength
%2!S: Minor Stayman. Slam interest
@2!N: Balanced invite. No 4-card major
3!C/!D: 6+!C/!D invite
3!H: 5-5 major Invite
3!S: 5-5 major Game Forcing+
@3!N: To play
%4!C: Gerber. Serious slam interest. Asking the number of Ace
%4!D: Texas Transfer. Long !H Game values
%4!H: Texas Transfer. Long !S Game values
%4!S: 5m332 Quantitative to 6!N
%4!N: Quantitative to 6!N
{{/opts}}


The approximate point range of responder of 1!N is as follows

Partner of 1!N opener
{{#tbl}}
0-7: No game prospect. Signoff in a partscore
8-9: Invitational
10-15: Game forcing
16-17: Slam interest
18+: Slam
{{/tbl}}


### 2!C Stayman

{{#jargon}}Stayman{{/jargon}} is a bid named for Sam Stayman. It asks opener if he has 4+card major. It is an {{#jargon}}asking bid{{/jargon}}. Opener has 3 answers available: 2!D, 2!H, 2!S.

{{#note}}
The opener should have at least invitational stregth, and promise a 4+ card major suit.
{{/note}}

{{#opts}}
1!N - 2!C - ?
2!D: No 4+card major. Not related to !D
2!H: 4+card !H. May have 4-card !S
2!S: 4+card !S. No 4-card !H
{{/opts}}

{{#opts}}
1!N - 2!C - 2!D - ?
2!H: 5!H 4!S invite
2!S: 5!S 4!H invite
2!N: Balanced invite
3!C/!D: 5+ suit. Game forcing.
^3!H: 5!S 4!H Game forcing
^3!S: 5!H 4!S Game forcing
3!N: To play
{{/opts}}


3!H and 3!S rebid in the above sequence is a convention called {{#jargon}}Smolen{{/jargon}} invented by Mike Smolen. Responder bids the 4-card suit, instead of the 5-card suit, so that the opener can become the declarer. 

{{#opts}}
1!N - 2!C - 2!H / 2!S - ?
2!S: (After 2!H) 4-card !S invite
2!N: Balanced invite. No fit
3!C/!D: 5+ suit. Game forcing.
3!H/!S: Fit opener's major Invite
%3!S/!H: Fit opener's major slam try
3!N: Balanced game value. Promise other major.
4!H/!S: Fit with game values
{{/opts}}


For the sequence 1!N - 2!C - 2!H - 3!N, responder promises 4-card !S. Hence opener should correct to 4!S if he also has 4+!S.


### 2!D/!H Jacoby Transfer

{{#jargon}}Jacoby Transfer{{/jargon}} is a convention named for Oswald Jacoby. 1!N - 2!D promise 5+!H and 1!N - 2!H promise 5+!S. It does not promise any strength.

{{#note}}
2!D and 2!H promise 5 cards in the suit one step higher. It can be done with any strength. Opener has to bid 2!H / 2!S.
{{/note}}

{{#opts}}
1!N - 2!D; 2!H - ?
%2!S: (undefined)
@2!N: 5-card !H Invite
3!C/!D: 5+!H 4+!C/!D Game Forcing
@3!H: 6+!H Invite 
@3!N: 5-card !H. Choice of Games
%3!S/4!C/!D: Splinter
%4!N: Quantitative
{{/opts}}
Similar for 1!N - 2!H - 2!S - ?.


{{#jargon}} Choice of game{{/jargon}} is a bid that commits to the game level. Opener can choose a game contract depending on his hand. For example, in the sequence 1!N - 2!H - 2!S - 3!N, responser shows a hand with 5!S and game values. Opener can pass with 2 cards in !S, or bid 4!S with 3+!S.


### Others responses

{{#opts}}
1!N - 2!N
Pass: Minimum
3!N: Maximum
{{/opts}}

{{#opts}}
1!N - 3!C/!D
Pass: Small doubleton in the minor
3!N: 3+ cards in the minor, or doubleton with A/K/Q
{{/opts}}

{{#opts}}
1!N - 3!H
Pass/3!S: Minimum. Better major
3!N: To play
4!H/!S: To play
{{/opts}}

{{#opts}}
1!N - 3!S
3!N: To play
%4!C/!D: Fit !H/!S. Slam interest
4!H/!S: To play
{{/opts}}


## Response to 1!H/!S

1!H / 1!S are {{#jargon}}major suit openings{{/jargon}}, promises 5 cards in the major. If the responder has 3+ cards in the major, he knows that his side has at least 8 cards in the major in total. Playing in a contract in that major is a good choice.


{{#note}}
Having 8+ cards in a suit in your hand and partner's hand combined is a {{#jargon}}fit{{/jargon}}. In most cases it is best to play in a major suit contract.
{{/note}}

{{#opts}}
1!H - ?
Pass: 0-5 Points.
@1!S: 4+!S 6+ points. Forcing
@1!N: Forcing 1!N. 
@2!C/!D: 13+ 3+!C/!D. Game Forcing
@2!H: Simple raise. 6-10 points. 3-4 card !H
%2!S: Weak jump shift
^2!N: Jacoby 2!N. 4+!H Balanced. Game Forcing.
3!C/!D: long suit. Invitational
@3!H: Limit raise. 11-12 4-5!H
%3!S/4!C/!D: Splinter
4!H: 5+!H. Weak hand
{{/opts}}

This is similar for 1!S:
{{#opts}}
1!S - ?
Pass: 0-5 Points.
@1!N: Forcing 1!N
@2!C/!D: 13+ 3+!C/!D. Game Forcing
@2!H: 13+ 5+!H. Game Forcing
@2!S: Simple raise. 6-10 points. 3-4 card !S
^2!N: Jacoby 2!N. 4+!S Balanced. Game Forcing.
3!C/!D/!H: long suit. Invitational
@3!S: Limit raise. 11-12 4-5!S
%4!C/!D/!H: Splinter
4!S: 5+!S. Weak hand
{{/opts}}


We can summarize the responds by hand types. For example after 1!H, the response wiht points and number of cards in partner suit:
{{#tbl}}
Points: Less than 2 card: 3-card: 4+card
0-5: Pass: Pass: Pass
6-10: 1!S/1!N: 2!H: 2!H
11-12: 1!S/1!N: 1!N then rebid 3!H: 3!H
12+: 1!S/2!C/!D: 1!S/2!C/!D: 1!S/2!C/!D/2!N
{{/tbl}}


### New Suit Response


There are bids that are {{#jargon}}forcing{{/jargon}}. Partner is not allowed to pass forcing bids. They can be categorized as follows:

1.  Responder's hand is {{#jargon}}unlimited{{/jargon}}, possible to hold the remaining strength in the deck. New suit responses are unlimited.

2.  Responsder shows strength that the partnership is guaranteed to have game values in combined. These are {{#jargon}}game forcing bids{{/jargon}}. For example, 1!H - 2!C/!D are game forcing bids.

3.  By {{#jargon}}conventions{{/jargon}}. The bid may entail artificial meaning that does not reflect the strain or the level of the bid. Usually, artificial bids are forcing. For example 
    
    *   {{#jargon}}Forcing 1!N{{/jargon}}, which responder's hand may not be balanced. 
    *   2!C artificial strong opening.

{{#note}}
Never pass partner's forcing bids.
{{/note}}

After 1M openings, the only 1-over-1 response is 1!H - 1!S. Opener rebids naturally, further describing his hand.

{{#opts}}
1!H - 1!S - ?
1!N: 12-14 Balanced
2!C: 12-18 4+!C
2!D: 12-18 4+!D
2!H: 12-15 6+!H
2!S: 12-15 4 !S
2!N: 18-19 Balanced
3!C: 19+ 4+!C
3!D: 19+ 4+!D
3!H: 16-18 6+!H invite
3!S: 16-18 4+!S invite
4!H: 19+ 6+!H
4!S: 19+ 4+!S
{{/opts}}


### 2-Over-1 Game Forcing

There are 6 game-forcing 2 over 1 responses:
*   1!D - 2!C
*   1!H - 2!C / 2!D
*   1!S - 2!C / 2!D / 2!H

The responses are mostly natural. Rebidding the opening suit is a {{#jargon}}catch-all{{/jargon}} bid. For example

{{#opts}}
1!H - 2!C - ?
2!D: 4+!D any strength
@2!H: Catch-all bid. 5+!H no 4!D
2!S: 4+!S 15+
%2!N: 4!C support 15+
3!C: 5+!C 15+
{{/opts}}

For example holding:
{{#hand}}A872.KQ964.K52.J{{/hand}}
He should rebid 2!H after 1!H - 2!C. Although he has 4-card !S, the strength is not enough for a immediate 2!S rebid. 


### Forcing 1!N

Forcing 1!N shows a 6-12 Points (denies 4!S after a 1!H opening). Opener rebids naturally. If opener holds a 12-14 balanced hand, he should rebid in a longer minor (2!C if equal in length).

{{#opts}}
1!H - 1!N - ?
2!C: 12-18 2+!C (exactly 2 when holding 4=5=2=2)
2!D: 12-18 3+!D
2!H: 12-15 6+!H
^2!S: Reverse. 16+ 5+!H 4+!S. Forcing
2!N: 18-19 Balanced
3!C: 19+ 4+!C
3!D: 19+ 4+!D
3!H: 16-18 6+!H Invite
4!H: 19+ 6+!H
{{/opts}}

{{#opts}}
1!S - 1!N is similar
2!C: 12-18 3+!C
2!H: 12-18 4+!H
3!H: 19+ 4+!H

{{/opts}}

{{#jargon}}Reverse{{/jargon}} by opener is a rebid that both the strain and the level of the rebid is higher than the opening bid. Reverse shows extra in strength. 

{{#warning}}
Consider the following two sequence:

*   1!H - 1!N - 2!C - 2!H
*   1!H - 1!N - 2!S - 3!H

The first sequence is not a reverse but the second sequence is. In either sequence, the opener shows a !H suit and another suit, and responser shows {{#jargon}}preference{{/jargon}} to !H suit. In a non-reverse sequence, the bidding can stop at second level, while the partnership is commited to the third level after a reverse.
{{/warning}}


### Major Suit Raises

Raises are bids that shows support to partner's suit. This confirms the existence of fit among the partnership. Examples of {{#jargon}}direct{{/jargon}} raises are:

*   Simple raise: 1M - 2M. 3-4 card support with 6-10 points
*   Limit raise: 1M - 3M. 4+card support with 11-12 points
*   Jacoby 2!N. 1M - 2N. 4+card support with 13+ points
*   Preemptive raise. 1M - 4M. 5+ card support. Typically very weak hand

In some situations, the number of trumps and the points cannot be reflected by a direct raise. It should be done by an {{#jargon}}indirect raise{{/jargon}}. For example:

*   11-12 points with 3-card support: Respond forcing 1!N, and plan to rebid 3M afterwards.
*   12+ points with 3-card support: Make a new suit response, then jump support in partner's suit; or make a 2-over-1 game forcing bid, then bid partner's suit.
*   3-5 Points with 3-4 card support: Pass first. Plan to bid 2M if your left hand opponent does not pass.

{{#opts}}
1!H - 2!H - ?
Pass: To play
2!S/3!C/!D: {{#jargon}}Help suit game try{{/jargon}} (or natural slam try)
%2!N: Balanced invite
%3!H: Good trump suit (6+)
%3!S/4!C/!D: Splinter
4!H: To play
{{/opts}}

{{#opts}}
1!H - 3!H - ?
Pass: Minimum. To play
%3!S/4!C/4!D. Slam interest. Cue bid
%3!N: Balanced. Slam interest.
4!H: To play
{{/opts}}

{{#opts}}
1!H - 2!N - ?
@3!C/!D/!S: Short suit. singleton or void.
3!H: 18+ no short suit
3!N: 15-17 no short suit
4!C/!D: 5-card suit.
@4!H: 12-14 no short suit
{{/opts}}


#### Help Suit Game Try

{{#jargon}}Help suit game try{{/jargon}} can be made after a major suit fit is discovered by 2M bid. It promises invitational values (around 15-17), 3-4 cards in the suit bid with some honours. The typical help-suits are:

*   AJx(x) / Axx(x)
*   KJx(x) / Kxx(x)
*   QJx(x) / Qxx(x)

{{#warning}}
Assume opener holds:

{{#hand}}KQ4.AKJT7.A732.4{{/hand}}
After 1!H - 2!H, opener can bid 3!D, help suit game try.


Assume the responder holds the following three hands:
<table>
    <tr>
        <td> {{#hand}}J65.Q32.KQ75.962{{/hand}} </td>
        <td> {{#hand}}J65.Q32.962.KQ75{{/hand}} </td>
        <td> {{#hand}}J652.Q32.96.KQ75{{/hand}} </td>
    </tr>
</table>
The first two hands are identical except for the minor suits are swapped. For the first hand, since there are {{#jargon}}fitting honours{{/jargon}} in the diamond suit, 4!H is almost certain. While the holding of diamonds are poor in the second hand, 4!H is dubious.

On the other hand, the second and third hands are idential except a small card is moved from !D to !S in the third hand. Now 4!H has decent chances because the number of {{#jargon}}losers{{/jargon}} is limited to 2.
{{/warning}}

If responder thinks game is out of reach, he can bid 3!H to play; If he thinks game is more than likely, he can bid 4!H. The considerations are:

*   High card points of the entire hand
*   Number of trump support
*   Honour holdings in the help suit
*   Maximum losers in the help suit

## Response to 1!C / 1!D

1!C and 1!D openings are the most common among all the opening bids. They are also ambiguous as they promise only 3 cards in the suit. Responder's common responses are disclosing 4+ card suits he possesses, before fitting opener's minor suit.

{{#opts}}
1!C - ?
Pass: Weak. 0-5 points
@1!D/!H/!S: 6+ points. 4+ card in the suit. Forcing.
@1!N: 6-10 points. Balanced.
2!C: {{#jargon}}Inverted minor raise{{/jargon}}. 11+ points. 4+!C. Forcing.
%2!D/!H/!S: Weak jump shift
2!N: 11-12. Balanced invite.
3!C: 6-9 5+!C Preemptive raise.
{{/opts}}
The response for 1!D are similar:
{{#opts}}
1!D - ?
Pass: Weak. 0-5 points
@1!H/!S: 6+ points. 4+ card in the suit. Forcing.
@1!N: 6-10. Balanced / semi-balanced.
@2!C: 2-over-1. 4+!C. Game Forcing
2!D: {{#jargon}}Inverted minor raise{{/jargon}}. 11+ points. 4+!D. Forcing.
%2!H/!S: Weak jump shift
2!N: 11-12. Balanced invite.
3!C: 11-12 6+!C Invite.
3!D: 6-9 5+!D Preemptive raise.
{{/opts}}

New suit responses have higher priorities to no-trump responses and raises. In other words, bidding no-trump and raises denies the ability to make new-suit responses.

{{#note}}
Check if you can make a new suit response before responding no-trump or raising partner's minor.
{{/note}}


The decision can be summarized as follows:
*   With 13+ Points:
    *   Bid the longest 4+ card new suit.
    *   Bid the lower strain if 4-4 in the new suits; higher strain if 5+5+.
    *   If no new suits, bid 2m inverted minor raise.
*   With 11-12 Points:
    *   Among the 1 level new suits, bid the longest 4+ card new suit.
        *   Bid the lower strain if 4-4 in the new suits; higher strain if 5+5+.
    *   If no new suits can be bid at 1 level, bid 2m inverted minor raise, 2!N invite, or 3 level long suit invite if appropriate.
*   With 6-10 Points:
    Same as 11-12 Points, except if no new suits can be bid at 1 level, bid 1!N (or 3m preemptive raise if appropriate).


### 1-over-1 Response

After a {{#jargon}}1-over-1{{/jargon}} response, opener further discribes his hand. Opener would show the following hand types:

*   4-card suppport of responder's suit
*   Two suiter with the opening suit and another suit
*   A balanced hand
*   A long minor suit (6+)

For example:
{{#opts}}
1!C - 1!H - ?
@1!S: 4+!C 4+!S Any strength
@1!N: 12-14 Balanced.
@2!C: 12-15 5+!C
2!D: 16+ 5+!C 4+!D Reverse
@2!H: 12-15 4-card !H
2!S: {{#jargon}}Strong jump shift{{/jargon}} 19+ 5+!C 4+!S
@2!N: 18-19 Balanced
@3!C: 16-18 6+!C Invitational
%3!D/!S: Fit !H Splinter
@3!H: 16-18 4-card !H support Invitational
4!C: 19-21 6+!C
{{/opts}}

{{#opts}}
1!D - 1!S - ?
@1!N: 12-14 Balanced.
@2!C: 12-18 4+!C 4+!D
@2!D: 12-15 5+!D (may have 4-card !H)
2!H: 16+ 5+!D 4+!H Reverse
@2!S: 12-15 4+!S
@2!N: 18-19 Balanced
3!C: {{#jargon}}Strong jump shift{{/jargon}} 19+ 5+!D 4+!C
@3!D: 16-18 6+!D Invite
%3!H/4!C: Fit !S Splinter
@3!S: 16-18 4-card !S support Invitational
4!D: 19-21 6+!D
{{/opts}}

How opener should rebid after 1-over-1 response:
{{#tbl}}
Shape: Minimum (12-15): Invitational (16-18): Maximum (19-21)
Support: Raise to 2: Raise to 3: Raise to 4
Balanced: 1!N (12-14): 2!N (18-19): 
6+ Suit: Bid 2 of your suit: Bid 3 of your suit: Bid 4 of your suit
Side suit: Bid suit below 2 of original suit if possible, else rebid 2 of the original suit: Bid suit at cheapest level: Bid suit above 2 of original suit
{{/tbl}}

A {{#jargon}}shift{{/jargon}} is a bid in a new suit. A {{#jargon}}jump{{/jargon}} is a bid that is not in the strain's lowest level. Although both reverse and strong jump shift show a strong hand, reverse is not a jump bid.

New Suit Rebid Comparison by Opener:
{{#tbl}}
Properties: Normal New Suit: Reverse: Jump Shift
Strength: 12-18: 16+: 19+
Forcing?: Non-forcing: Forcing: Game-Forcing
{{/tbl}}


#### Responser Rebids After Opener Could be Minimum

Rebids by opener that could be minimum include:

*   1!N rebid. eg. 1!C - 1!S - 1!N
*   Rebid the opening suit. eg. 1!D - 1!H - 2!D
*   Non-reverse new suit. eg. 1!D - 1!S - 2!C

Responder should show the strength of his hand:

*   Minimum: 6-10
*   Invitational: 11-12
*   Game forcing: 13+

When responder's hand is minimum, responder can pass partner's response, or bid 2 of the mentioned suits as his {{#jargon}}preference{{/jargon}} (does not imply a fit).

When responder's hand is invitational, responder can 

*   bid 2!N as an invitation to 3!N
*   make a help-suit game try if opener raised your suit
*   bid 3 of opener mentioned suit to show a fit
*   rebid 3 of your suit to show a 6+ suit

When responder's hand is game forcing:

*   bid 3!N to imply no fit, stopper in the unbid suits. This suggests to play there.
*   bid 4M if you have 4 cards in partner's major suit This suggests to play there.
*   bid a new suit at the cheapest level to show 4 cards in that suit.
*   bid the {{#jargon}}fourth suit{{/jargon}}.

When the first three bids of a partnership are of 3 different suits, the remaining unbid suit is the {{#jargon}}fourth suit{{/jargon}}. For example after 1!D - 1!S - 2!C, 2!H is the fourth suit game forcing bid. This is artificial, which does not imply a heart suit. It is a temporizing bid. Opener should rebid naturally. For example:

{{#opts}}
1!D - 1!S - 2!C - 2!H - ?
@2!S: 3-card !S (not 4 cards, otherwise would have bid 2!S last round)
@2!N: Stopper in !H
@3!C: No stopper in !H
3!D: Long !D
{{/opts}}


#### Responser Rebids After Opener Shows Extra

There are bids that opener shows extra can could be categorized as below:
*   Invitational only: Jump to 2!N, Jump rebid suit, jump support
*   Invitational or more: Reverse
*   Game Forcing: Jump shift
*   Game bids: Double jump support in a major (non-forcing)

Invitational only bids are non-forcing. Responder can pass with a bare minimum (around 6-7 points). Any rebids by responder shows extra (8+ points) and force to game.

Reverse are forcing one round but not game forcing. The partnership can stop below game only when opener is invitational and responder is minimum.
*   2-level suit bids by either side are natural, forcing and do not deny extra values. 
*   2!N bid by either side shows minimum and partner can pass. 
*   Bypassing 2!N by either side shows extra, and hence forcing to game.


### 1!N Response

1!C - 1!N or 1!D - 1!N are natural, showing 6-10 points and no 4+card suits to bid at 1-level. This is non-forcing

The options of opener's rebid is similar to 1-over-1 responses. Except that opener could pass.
{{#opts}}
1!C - 1!N - ?
Pass: 12-15 points. May have 4-card side suits.
2!C: 12-15 points. 6+!C
2!D/!H/!S: 16+ 5+!C 4+!D/!H/!S. Reverse
2!N: 18-19 Balance
3!C: 16-18 6+!C Invite
4!C: 19+ 6+!C
{{/opts}}
{{#opts}}
1!D - 1!N - ?
Pass: 12-15 points. May have 4-card !H/!S.
2!C: 12-18 points. 4+!C 4+!D unbalanced.
2!D: 12-15 points. 6+!D
2!H/!S: 16+ 5+!C 4+!H/!S. Reverse
2!N: 18-19 Balance
3!C: 19+ 5+!D 4+!C Strong jump shift
3!D: 16-18 6+!D Invite
4!D: 19+ 6+!D
{{/opts}}

Responder's rebids are similar to that after 1-over-1 responses, except that his strength is limited to 6-10 points.


### Inverted Minor Raise

Inverted minor raise is a single raise in a minor suit opening (1!C - 2!C or 1!D - 2!D). It promises invitational strength with 4 trumps and forcing. It is called "inverted" because a jump raise in a minor is now weaker than a single raise.

{{#opts}}
1!C - 2!C
2!D/!H/!S: 3+card with A/K/Q ({{#jargon}}stopper{{/jargon}}). Forcing
2!N: 12-14 Balanced. Non-Forcing
3!C: 12-14 6+!C. Non-forcing
{{/opts}}
{{#opts}}
1!D - 2!D
2!H/!S: 3+card with A/K/Q ({{#jargon}}stopper{{/jargon}}). Forcing
2!N: 12-14 Balanced. Non-Forcing
3!C: 14+ 5+!D 4+!C game forcing
3!D: 12-14 6+!D. Non-forcing
{{/opts}}

The bidding cannot be passed by either side below 2!N. New suits below 2!N are showing stoppers in the suit. Either side bidding 2!N or 3m shows minimum. Bypassing 2!N shows extra and game forcing (except bidding 3m).


### Other Responses to 1!C/!D

{{#opts}}
1!D - 2!C - ?
2!D: Catch all bid. None of below. Rebids are natural
2!H/!S: 15+ 4+!H/!S
%2!N: 15+ 4-card !C support 
3!C: 15+ 5+card !C support
{{/opts}}

{{#opts}}
1!C/!D - 2!N - ?
@Pass: To play
@3!C/!D: To play
New suits: Natural Slam interest
@3!N: Balanced / semi balanced. To play
4!C/!D: 19+ long suit
{{/opts}}

{{#opts}}
1!C/!D - 3!C/!D - ?
Pass: To play. Less than 19 points
New suits: 19+ Natural with slam interest
3!N: 18-19 Balance / semi balance
{{/opts}}


## Response to 2!N

2!N opening shows a 20-21 balanced hand. The response is similar to that of 1!N, except 1 level higher and there are no game invitational bids. Responder with around 5 points can force to game.

{{#opts}}
2!N - ?
3!C: Stayman. Game forcing.
3!D: 5+!H. Transfer to 3!H
3!H: 5+!S. Transfer to 3!S
%3!S: Minor suit stayman. Slam interest
3!N: To play. No 4-card major
%4!C: Ask number of Aces
%4!D: Texas Transfer. Long !H Game values
%4!H: Texas Transfer. Long !S Game values
%4!S: 5m332 Quantitative to 6!N
%4!N: Quantitative to 6!N
{{/opts}}

{{#opts}}
2!N - 3!C - ?
3!D: No 4-card major
3!H: 4+!H, may have 4-card !S
3!S: 4+!S, no 4-card !H
{{/opts}}

{{#opts}}
2!N - 3!C - 3!D - ?
3!H: Smolen. 5+!S 4-card !H. Game Forcing
3!S: Smolen. 5+!H. 4-card !S. Game Forcing
3!N: To play
4!C/!D: Natural 5+!C/!D. Slam interest
4!H: 6!H 4!S To play
4!S: 6!S 4!H To play
%4!N: Quantitative to 6!N
{{/opts}}

{{#opts}}
2!N - 3!C - 3!H - ?
%3!S: undefined
3!N: To play
4!C/!D: Natural 5+!C/!D. Slam interest
4!H: to play
Similar for 2!N - 3!C - 3!S
{{/opts}}

{{#opts}}
2!N - 3!D - 3!H - ?
3!S: 5-5 majors. Game forcing
3!N: 5-card !H choice of game
4!C/!D: 5+!H 4+m Slam interest
4!H: 6+!H to play
Similar for 2!N - 3!H - 3!S
{{/opts}}


## Response to 2!C

2!C is the only forcing opening bid in our system. Any 22+ points hand goes here. It also includes hands that are one trick short of 4M. 

{{#note}}
Open 2!C if:

1.  You have 22+ points
2.  You can make 3!H / 3!S irrespective of your partner's hand.
{{/note}}

Response to 2!C is natural, except 2!D is showing a weak hand (0-7 points) and other bids shows a good hand (8+ points). 2!D is also known as {{#jargon}}negative response{{/jargon}}, while others are known as {{#jargon}}positive responses{{/jargon}}.

{{#opts}}
2!C - ?
2!D: 0-7 points. Any shape
2!H/!S: 8+ 5+!H/!S
2!N: 8+ Balanced / semi-balanced
3!C/!D: 8+ 5+!C/!D unbalanced
{{/opts}}

Developments after positive responses are natural.

{{#opts}}
2!C - 2!D - ?
2!H/!S: 5+!H/!S. Forcing
2!N: 22-23 Balanced. Non-forcing
3!C/!D: 5+!C/!D. Forcing
3!N: 24-25 Balanced.
{{/opts}}

The development after 2!C - 2!D - 2!N is similar to 2!N opening, except that the point range of responder can be decreased by 2 points. Around 3 points can force to game.


## Response to Weak 2!D/!H/!S

Weak 2 bids shows 6-11 points and a good 6 card suit. The strength of the hand is less than a 1-level opening bid, but this promise a good suit. This defines the hand well, and possibly taking away the bidding space from the opponent.

{{#note}}
Open 2!D/!H/!S if you have:

1.  6 cards in the suit
2.  6-11 HCP
3.  At least one of A, K, or Q in the suit bid
{{/note}}

New suit responses are invitational (12+ points) of better and forcing for one ound. After new suit responses, opener rebid his suit to show minimum. Other rebids are focing to game.

Any raise are non-forcing. Raises are mainly for preemptive purposes: make it difficule for the opponents to bid.

{{#warning}}
Assume partner opened 2!H and opponent passed. You have {{#hand}}754.8.KT8732.KJ3{{/hand}}
It is true that 2!H is likely to be disastrous in 3!D may be a better contract, but your hand is too weak for a 3!D bid. You should pass instead. Chances are that your opponent will bid on and save you from jeopardy.
{{/warning}}


### Ogust Response to Weak 2 Openings

2!N response is an artificial asking bid called {{#jargon}}Ogust{{/jargon}}. This shows an invitational or better hand. Most of the time the responder has a 2+ trump support. Opener's answers are as follows:

{{#opts}}
2!D/!H/!S - 2!N - ?
3!C: 1 top honour in the suit. Minimum hand
3!D: 2 top honours in the suit. Minimum hand
3!H: 1 top honour in the suit. Maximum hand
3!S: 2 top honours in the suit. Maximum hand
3!N: AKQ in the suit. (Maximum of course)
{{/opts}}

Top honours refers to A, K or Q. Hands with 6-8 points are minimum. 9-11 points are maximum. A mnemonic would be "1-2-1-2-3, low low high high high".

The development is natural. after a maximum response, the bidding commits to game. After a minimum response, responder returns to opener's long suit is to play (or pass after 2!D - 2!N - 3!D), else forcing.


## Preemptive Openings

Preemptive opening are similar to weak 2s, except that these are made on higher levels and promise a longer suit (7+ cards). This deprives the opponents of bidding spaces to find the best contract.

{{#note}}
Level 3 or above suit opening bids are preemptive bids, promising:

1.  6-11 HCP (with 10-11 HCP, consider open on 1-level)
2.  Long suit: 7 cards for 3 levels and 8 cards for higher levels
3.  Good suit: At least 3 cards from A, K, Q, J, T
{{/note}}

Any raises by responder is preemptive. Any new suit by responder promises a good suit and is forcing to game.

{{/escstr}}