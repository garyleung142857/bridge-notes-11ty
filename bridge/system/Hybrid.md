---
layout: postlayout.hbs
title: Hybrid System
templateEngineOverride: hbs, md
tags: system (hidden)
---

# Hybrid System

{{#escstr}}

Mixing and matching systems.


## Note, To-do...

Note:

*   Sketch, basic skeleton of the system
*   Modifications are welcome / necessary. especially for the relaying parts.
*   The development will be intended to base on [MOX-NT](http://www.infobridge.it/Sistemi_MOX-NT.pdf) by mishovnbg (every sequence leads to a general track of continuation).
*   May write the full version in Cantonese

Todo:

*   Development
*   Interference
*   Our defense method (May be on a new page)
*   Thrid seat / fourth seat openings developments


## Overview

Openings:

*   5542 system. 1!D promise unbal
*   1!C / !D are natural non-forcing. 1!H / 1!S are natural and forcing (13+).
*   1!N / 2!N = (11)12-14 / 20-21. Can have 5-card major
*   2!C is intermediate 5+4+ majors or Any FG (no 5-card major)
*   2!D is either a !S preempt, or intermediate !S, or 22-23 Bal
*   2!H is 5+!H unbal intermediate. Not 5422. Not with 4+!S
*   2!S is 5+!S 4+m intermediate, no 4!H

Methods:

*   After 1-level openings, all reponses are limited (within 2 points of game force) except one relay bid
    *   1!C - 1!N and 1!D/!H/!S - 2!C.
*   Frequent use of jump bids to represent game values hand within 2 points of game force.
*   Frequent use of Gazzilli


## Opening Bids
{{#opts}}
First and second seat
Pass: Non descriptive
1!C: 11-21 4+!C or 15-19 Bal
1!D: 11-21 4+!D unbal
1!H: 13+ 5+!H.
1!S: 13+ 5+!S.
1!N: (11)12-14 Bal
2!C: 9-12 5+4+MM or FG no 5-card Major
2!D: 6-12 6+!S or 22-23 Bal
2!H: 9-12 5+!H unbal no 4!S
2!S: 9-12 5+!S 4+!C/!D unbal no 4!H
2!N: 20-21 Bal
3X: 6+ preempt
{{/opts}}

{{#opts}}
Third seat
Pass: Non descriptive
2!C: 22-23 Bal or FG
2!D: (0)6-12 5+!D
2!H: (0)6-12 5+!H
2!S: (0)6-12 5+!S
Others: Same as 1st / 2nd
{{/opts}}

{{#opts}}
Fourth seat
Pass: Think that 0 is a good score.
3X: 10-12 One trick short
Others: Same as first or second (see pass)
{{/opts}}


# Development


## 1!N

A variation to Heeman.

May have 5-card major when minimum. 13-14 5M332 will open 1!H/!S.

{{#opts}}
1!N - ?
2!C: Puppet to 2!D. Many hands
2!D: Transfer to 2!H. !H signoff or 4=!H invite+ or long !H ST
2!H: Transfer to 2!S. !S Signoff or 4=!S invite+ or long !S ST
2!S: Size ask. Weak with !C or Bal I/ST or ST with 5-4+ minors
2!N: 6+m I/ST. Forcing.
@3!C: Puppet to 3!D. Preemptive with !D or (31)(45) game values or to play in 3!N
3!D: 6+M invite
@3!H: 4-5!S Game value.
@3!S: 5=!H choice of games
@3!N: 4=!H choice of games
4!C/!D: Long !H/!S. May have slam interest
4!H/!S: To play
{{/opts}}


### 2!C Puppet


{{#opts}}
1!N - 2!C; 2!D - ?
Pass: Weak !D. To play
2!H: Transfer to 2!S. 5+!S. I+
2!S: Long !C/!D ST, or Weak !C+!D two suits signoff
2!N: 5=!H Invite
3!C: 5+!H 4+!C. 3!D relay
3!D: 5+!H no side suit. 5332 or 6+ suit with shortness
3!H: 5=!H 4+!D high short
3!S: 5=!H 4+!D low short
3!N: 5!H4!D22 NF
4!C: 6+!H 4=!D
4!D: 6+!H 5+!D
4M: Long suit. MST. Concentrated value. No short.
4!N: 5!H4!D22 Quant
{{/opts}}

3!C+ response shows some slam interest (expect slams would be possible on some hands). Responses after 1!N - 2!C; 2!D - 2!H; 2!S are analogous to 1!N - 2!C; 2!D - 2!N+. Responses after 1!N - 2!C; 2!D - 3!C; 3!D are analogous to 1!N - 2!C; 2!D - 3!H+.

5440 are problematic hands. You should treat it as 5431 or 4441. With 5M4m22 hands with serious slam interest, responder should go through 1!N - 2!S; 2!N/3!C - 3!D


{{#opts}}
1!N - 2!C; 2!D - 2!S; ?
2!N: Minimum
3!C: Maximum, !C is better
3!D: Maximum, !D is better
{{/opts}}

{{#opts}}
1!N - 2!C; 2!D - 2!S; 2!N/3!C/!D - ?
Pass: (After 3!C/!D) Weak in both minors. To play
3!C: (After 2!N) Weak in both minors. Pass or correct
%3!D: (After 2!N/3!C) Undefined
3!H: Long !C slam try
3!S: Long !D slam try
{{/opts}}

{{#opts}}
1!N - 2!C; 2!D - 3!D; ?
3!H: Set major as trump. Relay
%3!S: Undefined
3!N: Doubleton major. Misfit
{{/opts}}


{{#opts}}
1!N - 2!C; 2!D - 3!D; 3!H - ?
3!S: Serious slam interest. 3!N ask shortness
3!N: 5332. Mild slam interest
4!C/!D: Shortness. Mild slam interest
{{/opts}}


### 2!D/!H Transfer

{{#opts}}
1!N - 2!D; 2!H - ?
2!S: 4+4+ Majors. Invite+
2!N: 4=!H invite
3!C: 4=!H 5+!C
3!D: 4441!S
3!H: 4=!H 5+!D high short
3!S: 4=!H 5+!D low short
3!N: 4!H5!D22 NF
4!C: 4=!H 6+!D good suits
4!D: 5+!H 6+!D good suits
4M: Long suit. Mild slam interest. Disperse value. No short
4!N: 4M333 Quant
{{/opts}}

3!C+ response shows some slam interest (expect slams would be possible on some hands). Responses after 1!N - 2!D; 2!H are analogous to 1!N - 2!H; 2!S. Responses after 1!N - 2!D; 2!H - 3!C; 3!D are analogous to 1!N - 2!D; 2!H - 3!H+.

With 5m4M22 hands with serious slam interest, responder should go through 1!N - 2!S; 2!N/3!C - 3!D


{{#opts}}
1!N - 2!D; 2!H - 2!S; ?
2!N: Min. No 4-card major
3!C: Max. No-4-card major
3!D: Max. 4+!H
3!H: Min. 4+!H
3!S: Min. 4+!S
3!N: Max. 4+!S
{{/opts}}

3!D+ Responses set trump.

{{#opts}}
1!N - 2!D; 2!H - 2!S; 2!N/3!C - ?
Pass: (After 2!N) To play
3!C: (After 2!N) 54+ majors invite. 3!D ask Longer major.
3!D: 44(41) Slam try.
3!H: 5+!H 4+!S Game forcing. 3!S shows 3 cards.
3!S: 5+!S 4=!H Game forcing
3!N: 4=!H 4=!S to play
{{/opts}}

{{#opts}}
1!N - 2!D; 2!H - 2!S; 2!N/3!C - 3!D; ?
3!H: 4+!C. May have 4+!D. 3!S shows 4+!D
3!S: 4+!D. No 4+!C
3!N: 33(34). Responder can pull if he insists.
{{/opts}}


### 2!S Size Ask

{{#opts}}
1!N - 2!S; ?
2!N: Min
3!C: Max
{{/opts}}

{{#opts}}
1!N - 2!S; 2!N/3!C - ?
3!C/Pass: Weak with !C
3!D: Balanced Slam try
3!H: 5+!C 4+!D. Slam interest
3!S: 5+!D 4+!C. Slam interest
{{/opts}}


{{#opts}}
1!N - 2!S; 2!N/3!C - 3!D
3!H: 3- controls. Responder bids 3!S to ask. 3!N shows 2- controls and 4!C+ shows 3 controls and the lowest 4+ suit.
3!S: 4 controls
3!N: 5 controls
4!X: 6+ controls with X as the lowest 4+ suit.
{{/opts}}

Then, the development follows the rules below:

*   Responder's no-trump bids are signoff.
*   Opener must not raise the level unless fitting partner.
*   Both players bids the suit up the line. Rebidding a suit shows 5.
*   Fit partner's suit with a raise.


### 2!N Ask Weak Minor

2!N shows an invitational hand (seldomly slam try hand) with a long minor. The suit should be exactly 6 cards with exactly 2 of top 3 honours.

{{#opts}}
1!N - 2!N; ?
3!C/!D: Weak doubleton in the minor
3!N: No Weak doubleton in the minors
{{/opts}}

Responder pass when opener shows weakness his long suit. Otherwise bid 3!N (or higher bids when slam try).


### 3!C Puppet

{{#opts}}
1!N - 3!C; 3!D - ?
Pass: To play
3M: splinter in the major. (31)(45) shape. Forcing to 3!N / 4m
3!N: To play
{{/opts}}

{{#opts}}
1!N - 3!C; 3!D - 3M; ?
3!N: To play
4m: 4-5 cards. NF
4M: ask responder to bid his longer minor
4oM/5m: To play
{{/opts}}


### 3!D Multi Invite

{{#opts}}
1!N - 3!D; ?
3!H: Rejecting game opposite !H
3!S: Accepting game opposite !H, rejecting opposite !S
3!N: Accepting game in either major. Responder either bids the major, or transfer to the major with 4m
4!C: Accepting game in either major. Responder make a transfer bid.
4!D: Accepting game in either major. Responder bids the major.
{{/opts}}


After 1!N - 3!D; 3!H, responder bids 3!S with long !S invite and let opener place the contract.


### Higher Responses

3!H/!S/!N are designed to be used frequently. These three bids deny slam possiblilties.

{{#opts}}
1!N - 3!H; ?
3!S: 3+!S
3!N: 2=!S
{{/opts}}


{{#opts}}
1!N - 3!S; ?
3!N: 2=!H To play
4!H: To play
{{/opts}}

{{#opts}}
1!N - 3!N; ?
Pass: 2-3!H To play
4!H: 4+!H To play
{{/opts}}

4!C/!D are transfers to !H/!S. Usually no slam interest and wants opener to be the declarer.

{{#opts}}
1!N - 4!C; ?
4!D: Ask responder to declarer 4!H
4!H: Normal response
{{/opts}}


## 1!H/!S

{{#opts}}
1!H - ?
1!S: 0-11(13) 4+!S Forcing
1!N: 0-11 Partner can pass with 13-14 Bal
2!C: GF+ Relay
2!D: 9-11(13) 3!H Bal or 12-13 Bal
2!H: 6-8. 3-4 card raise
2!S: 6+!S not invite
2!N: Limit raises. 6-11 4!H / 9-11(13) 3-4!H with splinter
3!C/!D: 11-13 5!C/!D 4=!S. No 3-card !H
3!H: 3-6 4!H
3!S: 11-13 5+5+ !C+!D
{{/opts}}

{{#opts}}
1!S - ?
1!N: 0-11 Partner can pass with 13-14 Bal
2!C: GF+ Relay
2!D: 6-8 6+!H or 9-11(13) 5+!H
2!H: 9-11(13) 3!S Bal or 12-13 Bal
2!S: 6-8 3-4 card raise
2!N: Limit raises. 6-11 4!S / 9-11(13) 3-4!S with splinter
3!C/!D: 11-13 5!C/!D 4=!H. No 3-card !S
3!H: 11-13 5+5+ !C+!D
3!S: 3-6 4!S
{{/opts}}




### Non-Forcing 1!N

People call this "semi-forcing". I don't like this name.

{{#opts}}
1!H - 1!N; ?
Pass: 13-14 bal / semi-bal (may be =4522)
2!C: 13-17 4+!C or 18+ any hand
2!D: 13-17 4+!D
2!H: 13-17 6+!H
2!S: 6+!H 4+!S FG
2!N: FG. Long !H or 5-5 two suiter. Puppet to 3!C
3!C/!D: 5+5+ Invite. 8 playing tricks
3!H: Invite. Long !H
3!S: 6!H5!S Invite
{{/opts}}


{{#opts}}
1!S - 1!N; - ?
Similar to above except
2!H: 13-17 4+!H
2!S: 13-17 6+!S
3!H: 5+5+ Invite. 8 playing tricks
3!S: Invite. Long !S
{{/opts}}


{{#opts}}
1!H - 1!N; 2!C - ?
2!D: 6-11. Many hands
2!H: 0-5 Non-forcing.
2!N: 0-5 Minors
3!C/!D: 0-5 Long suit
{{/opts}}
Similar for 1!S - 1!N; 2!C. 2!H is long !H 0-5.


{{#opts}}
1M - 1!N; 2!C - 2!D; ?
2M: 13-17 !H+!C. Non-forcing. Other rebids are 18+
2oM: Catch-all. Natural follow-up
2!N: 6+M
3!C/!D: 4+!C/!D
3M: set-trump
{{/opts}}


### 2!C Game-Forcing Relay

{{#opts}}
1M - 2!C; ?
2!D: 4+!C or 5332 or 5440. Puppet to 2!H
2!H: 4+oM
2!S: 4+!D with extra or 5422 or freaks. 2!N relay
2!N: 4+!D min (not 5422 or freaks). 3!C relay to table A
3!C: 6+M with short. Min. 3!D ask shortage
3!D: 6322 / 7222. Any strength
3!H: 6+M short !C extra
3!S: 6+M short !D extra
3!N: 6+M short oM extra
%4!C+: Still thinking
{{/opts}}

{{#opts}}
1M - 2!C; 2!D - 2!H; ?
2!S: 4+!C with extra or 5422 or freaks. 2!N relay
2!N: 4+!C min (not 5422 or freaks). 3!C relay to table A
3!C: 5332
3!D: 5440oM
3!H: 5440!C
3!S: 5440!D
{{/opts}}

{{#opts}}
1M - 2!C; 2!S - 2!N; ?
3!C: 5422 or freaks. 3!S relay to table B
3!D+: Extra. Answer with table A
{{/opts}}

{{#note}}
1M - 2!C; 2!D - 2!H; 2!S/!N (showing !C) is analogous to 1M - 2!C; 2!S/!N (showing !D).
{{/note}}

{{#opts}}
1M - 2!C; 2!H - 2!S; ?
2!N: 4+oM min (not 5422 or freaks). 3!C relay to table A
3!C: 4+oM 5422 or freaks. 3!D relay to table B
3!D+: 4+oM with extra. Answer with table A
{{/opts}}

{{#opts}}
@Pattern Table A
3!D: 5431. 3!H ask singleton (3!S = high, 3!N = low)
3!H: 64xx. 3!S ask singleton (3!N = high, 4!C = low)
3!S: 55xx High short
3!N: 55xx Low short
{{/opts}}

{{#opts}}
@Pattern Table B
3!H: Freaks. 13-17. 3!S is strong relay. 3!N suggest misfit.
3!S: 5422 18+
3!N: 5422 13-17
4!C: 18+ 74xx
4!D: 18+ 65xx
{{/opts}}


### 2M-1 Balanced

{{#opts}}
1!H - 2!D; ?
2!H: Minimum.
@2!S: 5+!H. Invitational. Help suit invite somewhere.
@2!N: Slam interest. 4=!S
3!C/!D: Slam interest. 4+!C/!D
3!H: 5=!H. COG. Do not want to declare 3!N
3!N: 5=!H. COG. Want to declare 3!N
3!S/4!C/!D: 6+!H Splinter
4!H: 6+!H. No Slam
{{/opts}}

{{#opts}}
1!S - 2!H; ?
Similar as above except
2!N: Invitational. Help suit invite somewhere.
3!H: Slam inteterst. 4+!H
{{/opts}}

{{#opts}}
1!H - 2!D; 2!S - ?
2!N: Help in !S
3!C: Help in !C. No help in !S
3!D: Help in !D. No help in !S or !C
3!H: 11-12 2=!H. Don't want to declarer in 3!N
3!N: To play. 11-13 2=!H
4!H: To play. 3=!H
Similar after 1!S - 2!H; 2!N
{{/opts}}


### 2M Simple Raise

Help suit invite. 2M+1 is slam interest, asking partner's good 5+ suits.

{{#opts}}
1!H - 2!H; ?
@2!S: Slam interest. Ask for short suit.
2!N: Help suit game try in !S
3!C/!D: Help suit game try in !C/!D
%3!H: Invite. Ask for good trumps
3!S/4!C/!D: Splinter
%3!N: RKCB
{{/opts}}

Similar for 1!S - 2!S.

{{#opts}}
1!H - 2!H; 2!S - ?
2!N: Short !S
3!C/!D: Short !C/!D
3!H: No short, 3 trumps
3!S: No short, 4 trumps
{{/opts}}

{{#opts}}
1!S - 2!S; 2!N - ?
3!C/!D/!H: Short !C/!D/!H
3!S: No short, 3 trumps
3!N: No short, 4 trumps
{{/opts}}


### 2!N Limit Raises

{{#note}}
3!N is forcing. We don't play in 3!N after 2!N limit raises.
{{/note}}

{{#opts}}
1M - 2!N; ?
3!C: 15+ Asking bid
3!D: 13-14 unbal. Followed by stop bid.
3!H: 13-14 balanced. Followed by stop bid.
3om/4!C/!D: Splinter.
%3!N: Non-serious slam try
4M: Signoff
{{/opts}}

{{#opts}}
1M - 2!N; 3!C - ?
3!D: 9+ 3=M Short somewhere.
3M: 6-8 4=M No short. NF
3!N: 9-11 4=M no short
3oM/4!C/!D: 9+ 4=M. Short in the suit bid
{{/opts}}

{{#opts}}
1M - 2!N; 3!C - 3!D; ?
3!H: Ask for Good 5+ suit. 3!S = oM. 3!N = Bad 5-card suit
3!S: Ask for short suit. 3!N = oM
{{/opts}}


### 1M - 3m

This bid should be precise. The strength from minimum game force to around two points above minimum. Stronger hands should go through 1M - 2!C. There should be no 3-card support, otherwise go through 2M - 1 or 2!N. There should also be exactly 4-card in other major. With 5 or more, go through 1!H - 1!S, or 1!S - 2!D.

Opener would expect partner holding a 5431 shape. Approximately 11-13 points.

The developments are natural. For example:
{{#opts}}
1!H - 3!C; ?
3!D: 4+!D
3!H: 6+!H. Ask for 2-card (or stiff honour) support
3!S: Fit. Set trump
@3!N: To play
4!C: (minor) Fit. Slam interest
@4!D: (other minor) Set opening major as trump.
4!H: To play. Good suit
4!S: Fit. To play
5!C: To play
{{/opts}}


### 1M - 3oM

This shows 5+5+ minors 11-13 points. No 3-card major support of course.

{{#opts}}
1!S - 3!H; ?
3!S: Natural
3!N: To play
4!C/!D: Fit Set trump
@4!H: Set !S as trump.
4!S: To play. Good suit
{{/opts}}

{{#opts}}
1!H - 3!S; ?
3!N: To play
4!C/!D: Fit Set trump
4!H: To play. Good suit
@4!S: Set !H as trump.
{{/opts}}


### 1!H - 1!S

{{#opts}}
1!H - 1!S - ?
@1!N: Zirconnia. 4+!D / =2533 13-17 or any 18+. F1R
2!C: 13-17 4+!C
2!D: 13-17 3=!S
2!H: 13-17 6+!H
2!S: 13-17 4=!S
2!N: FG. Long !H / 5+5+ !H+m / !S support. Puppet to 3!C
3!C/!D: 5+5+ Invite 8 play tricks
3!S: 4+!S invite
{{/opts}}


{{#opts}}
1!H - 1!S; 1!N - ?
@2!C: 6+ many shapes.
2!D: 0-5 !D tolerance
2!H: 0-5. No !D tolerance
2!S: 0-5. 5+!S 4+!C. No !D tolerance
2!N: 0-5. 4=!S. Longer !C. No !D tolerance
3X: 11-13. Good suits. Natural
{{/opts}}

{{#opts}}
1!H - 1!S; 1!N - 2!C; ?
2!D: 13-17 4+!D / =2533. NF. Other rebids are 18+.
2!H: Catch-all. Rebids are natural
2!S: 4+!S
2!N: 6+!H
3!C/!D: 4+!C/!D short !S
3!H: set trump
{{/opts}}


{{#opts}}
1!H - 1!S; 2!D - ?
Pass: (Rare) Long !D
2!H/!S: Preference
2!N: Nat I
3!C/!D: 5+!S Help suit game try
3!H: 3=!H Invite to 4!H
3!S: Blocking
Game: To play
{{/opts}}

{{#opts}}
1!H - 1!S; 2!N - 3!C; ?
3!D: !H+!D
3!H: !H
3!S: !S Support
3!N: !H+!C NF
4!C: !H+!C Forcing
{{/opts}}


### 1!S - 2!D

Responder has either an invitational to game forcing hand with 5+!H or weaker (constructive) hand with 6+!H.

{{#opts}}
1!S - 2!D; ?
2!H: Normal response. Non-forcing over 6-8 6+!H
2!S: Preference !S over !H. Non-forcing over 6-8 6+!H
2!N: Fit !H. 15+
3!C/!D/!S: Natural. Game forcing.
3!H: 3-4 !H. Minimum
{{/opts}}

{{#opts}}
1!S - 2!D; 2!H - ?
Pass: 6-8 6+!H
@2!S: Artificial Game Forcing.
2!N+: Natural. 9-11 Invite (3m promises 5-5. 3!S shows xxx or Hx)
{{/opts}}

{{#opts}}
1!S - 2!D; 2!H - 2!S; ?
2!N: Balanced / semi-bal. 2=!H
3!C/!D: Natural. Something like 5!S1!H(43)
3!H: 5!S3!H(32). Does not want to declare 3!N. 3!N is to play
3!S: =6322 
3!N: 5!S3!H(32). Choice of game.
{{/opts}}

{{#opts}}
1!S - 2!D; 2!S - ?
2!N: Misfit. Invite
3!C/!D: Natural Game forcing
3!H: Invite. Good suit
3!S: Invite. (xxx or Hx)
3!N: Misfit. Game value
{{/opts}}


### 1!H - 2!S

{{#opts}}
1!H - 2!S; ?
2!N: Asking bid. Invitational+
3!C/3!D: Natural. Game forcing.
3!H: No !S tolerance. Non-forcing
3!S: Invite
3!N/4!H/!S: To play
{{/opts}}

{{#opts}}
1!H - 2!S; 2!N - ?
3!C: Not the worst hand. With !H tolerance. FG
3!D: Not the worst hand. No !H tolernece. FG
3!H: Worst hand. With !H tolernace
3!S: Worst hand. No !H tolerance
3!N: To play
{{/opts}}


## 1!D

1!D Promises an unbalanced hand with 4+!D. =3352 hands are considered balanced.

{{#opts}}
1!D - ?
1!H: (3)6-12(14) 4+!H. F1R
1!S: (3)6-12(14) 4+!S. F1R
1!N: 6-11 Natural NF
2!C: Artificial Game forcing relay
2!D: (3)6-8 Long major
2!H: (3)6-10 5=!S 4+!H
2!S: 11-12 5=!S 4+!H
2!N: Long !C invite+ to FG. Less than 14
3!H: 12-14. 5+5+ !H+!C
3!S: 12-14. 5+5+ !H+!S
{{/opts}}


{{#opts}}
1!D - 1!H; ?
1!S: 11-18 Nat F1R.
1!N: Gazzilli. 11-15 5+!D 3=!H or 16+ many hands
2!C: 11-15 5+!D 4+!C NF
2!D: 11-15 6+!D NF
2!H: 11-15 4=!H
2!S: 6+!D 4+!S Good suits FG
2!N: Good !H raise
3!C+: Natural. Based on suit quality, not points
{{/opts}}


{{#opts}}
1!D - 1!H; 1!S - ?
1!N: Natural. Misfit
2!C: Fourth suit. F1R
2!D/!H/!S: Natural. NF
2!N: Misfit. Invite
3!C+: Nat FG 
{{/opts}}


#### 1!N Gazzilli


{{#opts}}
1!D - 1!H; 1!N - ?
2!C: 8+ Many hands
2!D: 6-7. 2+!D
2!H: 6-7. 5+!H
2!S: 6-7. =4414
2!N: 6-7. 4=!H 5+!C 1-!D
{{/opts}}


{{#opts}}
1!D - 1!H; 1!N - 2!C; ?
2!D: 11-15 5+!D 3=!H. NF
2!H+: Nat. 16+ FG (2!H promise 3)
{{/opts}}


{{#opts}}
1!D - 1!H; 1!N - 2!D; ?
Pass: 11-15 5+!H 3=!H, or some 16-18 hands
2!H: 11-15 5+!H 3=!H. Good 3-card !H
2!S: 16-18 Good !D suit
2!N+: 19+ Game forcing Nat
{{/opts}}


### 1!N no Majors

{{#opts}}
1!D - 1!N; ?
Pass: Minimum. Cannot rebid 2!C/!D
2!C: Gazzilli. 11-15 4+!C 4+!D or 16+ many hands
2!D: 11-15 5+!D
2!H/!S: 6+!C 4=!H/!S. Good suits. F1R
2!N: Semi-Bal inv
3!C: 5-5 Good suits
3!D: Good suit. Invite
{{/opts}}


{{#opts}}
1!D - 1!N; 2!C - ?
2!D: 6-7 2+!D
2!H: 8+
2!S: 6-7 6+!C 1-!D
{{/opts}}


{{#opts}}
1!D - 1!N; 2!C - 2!H; ?
2!S: 16+ !D+!C
2!N: 14-15 5+!D 4+!C. Then 3m is NF, 3M asks for stopper
3!C: 11-13 5+!D 4+!C. P/C
3!D: 16+ Long !D
3M: 16+ Nat
3!N: To play
{{/opts}}


### 2!C Artificial Game Forcing

{{#opts}}
1!D - 2!C; ?
2!D: 4441!C or 5440 or 5+!D 4+!H or 4441!S
2!H: 5+!D 4+!C
2!S: 4+!S with extra or 5422 or freaks. 2!N relay
2!N: 4+!S min (not 5422 or freaks). 3!C relay to table A
3!C: 6+M with short. Min. 3!D ask shortage
3!D: 6322 / 7222. Any strength
3!H: 6+!D short !H extra
3!S: 6+!D short !S extra
3!N: 6+!D short !C extra
%4!C: Still Thinking
{{/opts}}


The development follows 1M - 2!C game forcing relay except:
*   4441!S: 1!D - 2!C; 2!D - 2!H; 2!S/!N - 2!N/3!C; 3!S (replacing 5-5 high short)
*   4441!H: 1!D - 2!C; 2!S/!N - 2!N/3!C; 3!S (replacing 5-5 high short)
*   4441!C: 1!D - 2!C; 2!D - 2!H; 3!C (replacing 5332)


### 2!D/!H/!S

{{#note}}
Refer to 1!C - 2!D/!H/!S
{{/note}}


### 2!N Long !C Invite+

{{#opts}}
1!D - 2!N; ?
3!C: Minimum. Non Forcing
3!D: Minimum. Good !D
3!H/!S: Game Forcing. 4+ suit or stopper showing
3!N: To play. Undefined
4!C: Set !C as trump. Slam try.
4!D: Set !D as trump. 
{{/opts}}


## 1!C

1!C shows either

*   (11)12-14 balanced hand
*   18-19 balanced hand
*   11-21(23) 4+!C unbalanced hand

and denies 5+ !H/!S, but not denying 5=!D.

{{#opts}}
1!C - ?
1!D: (3)6-12(14) 4+!H
1!H: (3)6-12(14) 4+!S
1!S: 6-12(14) No 4-card majors
1!N: Game forcing relay. Any shape. Not 12-14 balanced
2!C: 12-14 Balanced. Can have 4-card majors, or weak !D
2!D: (3)6-8 Long major
2!H: (3)6-10 5=!S 4+!H
2!S: 11-12 5=!S 4+!H
2!N: Preemptive in !C, or !C+X 5-5
3!C: Long !C. Less than invite opposite 12-14 Balanced
3!D: 12-14 5+5+ !H+!S
3!H: 12-14 5+5+ !H+!D
3!S: 12-14 5+5+ !S+!D
{{/opts}}


### 1!D/!H Transfer Walsh


{{#opts}}
1!C - 1!D; ?
1!H: 11-15 5+!C 3=!H 3-!S unbal or 15-17 4=!H Bal or 16+ Many hands. Forcing 
1!S: 11-18 5+!C 4+!S.  May have 3=!H. F1R
1!N: 15-17 Balanced. 2-3!H
2!C: 11-15. 5+!C 2-!H
2!D: 6+!C 4+!D Good suits. F1R
2!H: 11-15 4=!H unbal
2!S: 6+!C 4+!S Good suits. Game forcing
2!N: 16+ 4=!H.
3!C: 6+!C Good suit. Based on tricks, not points
{{/opts}}

The above is similar for 1!C - 1!H.


{{#opts}}
1!C - 1!D; 1!H - ?
1!S/!N/2!C/!H: Natural. 6-7. NF
2!D: 8+
{{/opts}}


{{#opts}}
1!C - 1!D; 1!H - 1!S/1!N/2!C; ?
Pass: To play
1!N/2!C: 11-15 5+!C 3=!H
2!H: 15-17 4=!H Bal
2!N: 18-19 Bal
Others: Natural 16+
{{/opts}}


{{#opts}}
1!C - 1!D; 1!H - 2!H; ?
Pass: To play
2!N: 18-19 Bal
3!H: 15-17 4=!H Bal
Others: Natural 16+
{{/opts}}


{{#opts}}
1!C - 1!D; 1!H - 2!D; ?
2!H: 11-15 5+!C 3=!H
2!N: 15-17 4=!H Bal
Others: 16+ Nat
{{/opts}}


{{#opts}}
1!C - 1!D; 1!S - ?
1!N: Nat NF
2!C: Nat NF
2!D: Fourth suit. Artificial. F1R
2!H: Nat NF
2!S: Nat NF
2!N: Misfit. Invite.
3!C+: Nat FG
{{/opts}}


{{#opts}}
1!C - 1!D; 1!N - ?
2!C: Invite+. Usually no 5+!H. 2!D show max and FG. Other bids are min. Natural continuation
2!D: Transfer to 2!H. 5+!H. Any strength. Responder can pass to play, rebid 2!N to invite, or bid 3X to FG.
2!H: 5=!H 4=!S 6-7
2!N: Puppet to 3!C. Weak in !C or !D.
3!C/!D: 5+!C/!D 4=!H. FG
3!H: 4-4 Major. COG
{{/opts}}


{{#opts}}
1!C - 1!H; 1!N - ?
Similar as above except
2!D: 5-5 majors. 6-7
2!H: Transfer to 2!S
{{/opts}}


### 1!S no Major

{{#opts}}
1!C - 1!S; ?
1!N: (11)12-14 Balanced / =4414 
2!C: 11-15 5+!C
2!D: (15)16-18 4+!C 4+!D NF
2!H: Reverse 16+ 5+!C 4+!H or =4414 F1R
2!S: Reverse 16+ 5+!C 4+!S
2!N: 18-19 Bal
3!C: Good suit.
3!D: 19+ 5!C 4+!D
{{/opts}}


{{#opts}}
1!C - 1!S; 1!N - ?
Pass: To play
2!C/!D: Long !C/!D. Constructive
2!H/!S: Ask stopper for 3!N.
2!N: Nat Inv
3!C/!D: Inv
3!H/!S: Splinter. 5+4+ minors
{{/opts}}


{{#opts}}
1!C - 1!S; 2!C - ?
Pass: To play
2!D: Long !D. Constructive
2!H/!S: Asj stopper for 3!N
2!N: Bal inv
3!C: Blocking
3!D: Long !D inv
3!H/!S: Fit !C. Splinter
{{/opts}}


### 1!N Game Forcing Relay

{{#opts}}
1!C - 1!N; ?
2!C: Balanced. 12-14 or 18-19
2!D: 5+!C 4+!H or 4441!D or 5440. Puppet to 2!H
2!H: 5+!C 4+!D
2!S: 5+!C 4+!S with extra or 5422 or freaks. 2!N relay
2!N: 5+!C 4+!S min (not 5422 or freaks). 3!C relay to table A
3!C: 6+!C with short. Min. 3!D ask shortage
3!D: 6322 / 7222. Any strength
3!H: 6+!C short !H extra
3!S: 6+!C short !S extra
3!N: 6+!C short !D extra
%4!C+: Still thinking
{{/opts}}

For 2!D+ response, follow development after 1M - 2!C game forcing relay. Except 1!C - 1!N; 2!D - 2!H; 3!C shows 4441!D.

{{#opts}}
1!C - 1!N; 2!C - ?
2!D: Unbal. Catch all
@2!H to 3!D: 15-18 Balanced. Follow Balanced Pattern Table
3!H+: Same as responding to 1!N opening with points adjustments
{{/opts}}

{{#opts}}
@Balanced Pattern Table
2!H: 4=!H. May have 4=!S
2!S: 4=!S. No 4=!H
2!N: (32)44 or 33(43)
3!C: 5!C332
3!D: 5!D332
{{/opts}}

After 2!H showing balanced and 4=!H, partner bid 2!S as asking, while 2!N shows !S.

{{#opts}}
... 2!H (bal) - 2!S; ?
@2!N: 4!H4!S
3!C: 4!H4!C
3!D: 4!H4!D
@3!H: 4!H333
{{/opts}}

After 2!S, 2!N is asking and the reply is similar.

After 2!N/3!C/!D, continuations are natural.

{{#opts}}
1!C - 1!N; 2!C - 2!D; ?
2!H to 3!D: 12-14 Balanced. Follow Balanced Pattern Table
3!H to 4!D: 18-19 Balanced. Follow Balanced Pattern Table
{{/opts}}



### 2!C Bal FG or Weak !D


{{#opts}}
1!C - 2!C; ?
2!D: Normal Response. Less than 16 points.
2!H/!S: Natural. 16+. F1R
2!N: 18-19 Balanced
3!C: 16-18 Good suit
3!D: 3+!D
3!H/!S: 19+ Ask stopper
3!N: To play. Undefined
{{/opts}}


{{#opts}}
1!C - 2!C; 2!D - ?
Pass: Weak !D
2!H - 3!D: 12-14 Balanced. FG. Follow Balanced Pattern Table.
{{/opts}}


{{#opts}}
1!C - 2!C; 2M - ?
2!N: 12-14 Balanced. Misfit
3!C: !D Pre. !C Tolerance
3!D: !D Pre. No !C Tolerance
3M: 12-14 Bal. 4-card M
{{/opts}}


{{#opts}}
1!C - 2!C; 2!N - ?
Pass: To play
3!C: 12-13 Balanced. Not willing to bypass 3!N
3!D: !D Pre. No !C Tolerance
3!H-4!D: 13-14 Balanced. Follow Balanced Pattern Table
{{/opts}}




### 2!D Long Major

{{#opts}}
1!C - 2!D; ?
2!H: Pass if !H, correct to !S if !S
2!S: Pass if !S, Describe if !H
2!N: Inv+ Asking.
3!C: Long !C. Not interested in major
3!D: Invite to 3!N
3!H: Pass or correct
3!S: Pass or correct
3!N: Game in either major. Can choose who to declare
4!C: Game in either major. opener declare
4!D: Game in either major. Responder declare
4!H: Pass or correct 
{{/opts}}

!H/!S bids do not set up forcing passes. Other rebids sets up forcing passes.


### 2!H/!S Reverse Flannery

{{#opts}}
1!C - 2!H/!S; ?
Pass/Any !H/!S: To play / invite. Preference
3!C: Not interested in major.
3!D: Invite to 3!N
3!N: To play
{{/opts}}


### 2!N Preempt or 5-5 FG

Opener assume responder is preemptive in !C and rebid 3!C with normal hands. With strong hands (19+), responder make other natural bids.

{{#opts}}
1!C - 2!N; 3!C - ?
Pass: Preempt in !C
3!D: 12-14 5-5 in !C+!H
3!H: 12-14 5-5 in !C+!S
3!S: 12-14 5-5 in !C+!D
{{/opts}}



## 2!C

{{#opts}}
2!C - ?
2!D: 0-10(14) No preference in major or some preference in !S (2-3card). No 4-card major.
2!H: 0-10 Preference in !H. May be 4-4 in majors.
2!S: 0-10 4=!S. Preference in !S.
2!N: FG Asking bid.
3!C: Invite in a major.
3!D: Misfit. Invite to 3!N
3!H/!S: Blocking
3!N: Misfit. To play
{{/opts}}


{{#opts}}
2!C - 2!D; ?
2!H: !H is better. Responder correcting to 2!S is weak with preference to !S
2!S: !S is better
2!N: Artificial Relay. FG+
3!C: 5=!C. Min FG
3!D: 5=!D. Min FG
3!H: 6+!C. Min FG
3!S: 6+!D. Min FG
3!N: 25-26 Bal
{{/opts}}


{{#opts}}
2!C - 2!D; 2!N - ?
3!C: 0-1 or 4-5 Control or 0-5 Bal
3!D: 9+ Bal 
3!H: 2-3 controls 5+!C unbal
3!S: 2-3 controls 5+!D unbal
3!N: 6-8 Bal
{{/opts}}


{{#opts}}
2!C - 2!H; ?
Pass: 10-13. Majors
2!S: FG 4=!S. Min FG.
2!N: Artificial Relay. FG+. Same as above.
3!C: 5+!C. Min FG
3!D: 5+!D. Min FG
3!H: 10-13 6+!H. Good suits
3!N: 25-26 Bal
{{/opts}}


{{#opts}}
2!C - 2!S; ?
Pass: 10-13. Majors
2!N: Artificial Relay. FG+. Same as above.
3!C: 5+!C. Min FG
3!D: 5+!D. Min FG
3!S: 10-13 6+!S. Good suits
3!N: 25-26 Bal
{{/opts}}


{{#opts}}
2!C - 2!N; ?
3!C: 5+!H 4=!S. Puppet to 3!D
3!D: 5=!H 5=!S
3!H: 5=!S 4=!H short !D
3!S: 5=!S 4=!H short !C
3!N: =5422
4!C: 6+!H 4=!S
4!D: 6+!H 5+!S
{{/opts}}

After 2!C - 2!N; 3!C - 3!D, the rebids are analogous to 2!C - 2!N; 3!H+

{{#opts}}
2!C - 3!C; ?
@3!D: Min with 5=!S 4=!H or Max with 5=!H 4=!S. After responder bids 3M, opener will pass with min and bid on with max.
3!H: Min with 5=!H 4!S
3!S: Max with 5=!S 4!H FG
3!N: 5+5+. Responder choose to declarer or not
4!C: 5+5+. Opener declare
4!D: 5+5+. Responder declare
{{/opts}}


{{#opts}}
2!C - 3!D; ?
3!H/3!S: Min. 5+cards
3!N: Max
{{/opts}}


## 2!D

{{#opts}}
2!D - ?
2!H: Inv+. Relay
2!S: To play opposite 6-12 Long !S
2!N: Good !S Raise
3!C/!D/!H: Good suits. Constructive. Non-forcing
3!S: Blocking
{{/opts}}


{{#opts}}
2!D - 2!H: ?
2!S: 6-8. 6+!S. 2!N ask short suit.
2!N: 9-12 6+!S. FG. Continuation is analogous to 2!H - 2!S; 2!N
{{/opts}}


## 2!H/!S

{{#opts}}
2!H - ?
Pass: To play
@2!S: Artificial Game Forcing Relay
2!N: Misfit. Invite
3!C: 5+!S. Invite
3!D: Invite+. 3+!H
3!H: Blocking. Signoff
3!S/4!C/!D: Splinter
3!N: To play. Undefined
4!H: To play. Undefined
4!S: To play
{{/opts}}

{{#opts}}
2!S - ?
Pass: To play.
@2!N: Artificial Game Forcing Relay
3!C: 5=!H. Invite
3!D: Bal Invite+
3!H: Invite+ 3+!S
3!S: Blocking
3!N: To play. Undefined
4!C/!D: Splinter
4!H: To play
4!S: To play. Undefined
{{/opts}}


{{#opts}}
2!H - 2!S; ?
2!N: 6+!H. No good side suit. 3!C Ask shape
3!C: 5+!H 4+!C. 3!D ask shape.
3!D: 5+!H 4=!D. 3!H Ask shape.
3!H: 5+!H 5+!D. 3!S Ask shape.
3!S: =06(43). No further shape ask
3!N: =0544
4!C: =3604
4!D: =3640
{{/opts}}

Similar for 2!S - 2!N. Note that hands with long !S with no good side suits opens 2!D.


{{#opts}}
2!H - 2!S; 2!N - 3!C; ?
3!D: No short. 6322 or 7222
3!H: Short !C
3!S: Short !D
3!N: Short oM
{{/opts}}


{{#opts}}
2!H - 2!S; 3!C - 3!D; ?
3!H: 5+!H 5+!C
3!S: 5+!H 4=!C hi short
3!N: 5+!H 4=!C lo short
4!C: 6+!H 4=!C hi short
4!D: 6+!H 4=!C lo short
{{/opts}}


{{#opts}}
2!H - 2!S; 3!D - 3!H; ?
3!S: 5=!H 4=!D hi short
3!N: 5=!H 4=!D lo short
4!C: 6+!H 4=!D hi short
4!D: 6+!H 4=!D lo short
{{/opts}}


{{#opts}}
2!H - 2!S; 3!H - 3!S; ?
3!N: hi short
4!C: lo short
4!D: 6+5+
{{/opts}}


{{#opts}}
2!H - 2!N; ?
Pass: Min. 5=!H / 6322 bad suit
3!C/!D: Natural. Good suits. NF
3!H: 6+!H. Min
3!N: To play 
{{/opts}}


{{#opts}}
2!H - 3!C; ?
3!D: Min. Something like =51(43)
3!H: Min. Misfit
3!S: Min 2-3 card fit
3!N: Max. Misfit
4!C/!D: 3=!S. Splinter. Max
4!H: To play
4!S: 3=!S To play
{{/opts}}

Similar for 2!S - 3!C.


{{#opts}}
2!S - 3!D; ?
Pass: (4)5+!D. Min
3!H: Min. 5+!S 4+!C
3!S: Min. 5+!S 4+!D
3!N: To play
{{/opts}}


## 2!N

Modified Puppet Stayman

{{#opts}}
2!N - ?
3!C: Muppet Stayman
3!D: Transfer. 5+!H. Could be 5=!H 4=!S Game value
3!H: Transfer. 5+!S
3!S: Minor Stayman
3!N: Signoff. Undefined
4!C/!D: Long !H/!S
4!H/!S: Long !C/!D. ST
4!N: Quantitative
5!C/!D: To play
{{/opts}}


{{#opts}}
2!N - 3!C; ?
3!D: No 5-card major, at least one 4-card major
3!H: No 4-card major
3!S: 5=!S
3!N: 5=!H
{{/opts}}


{{#opts}}
2!N - 3!C; 3!D - ?
3!H: 4=!S 3-!H
3!S: 4=!H 3-!S
3!N: To play. Was looking for a 5-card major
4!C: 4+4+ majors with slam interest
4!D: 4+4+ majors no slam interest
{{/opts}}


{{#opts}}
2!N - 3!C; 3!H - ?
3!S: Puppet to 3!N
3!N: 5=!S 4=!H Choice of Games
4!C: 5=!H 4=!S ST
4!D: 5=!S 4=!H ST
4!H: 5-5 majors ST Forcing
{{/opts}}


{{#opts}}
2!N - 3!C; 3!H - 3!S; 3!N - ?
Pass: To play
4!C/!D: Natural 5+!C/!D Slam try
4!H: 5+5+ majors Choice of games
{{/opts}}


{{#opts}}
2!N - 3!C; 3!S - ?
3!N: To play. Was looking for a !H fit
4!C/!D: Natural. Denies !S fit. 5+!C/!D. ST. 
4!H: Fit !S ST
4!S: To play
{{/opts}}


{{#opts}}
2!N - 3!C; 3!N - ?
Pass: to play
4!C: 5+!C ST denies !H fit
4!D: Transfer to 4!H. May have slam interest
4!H: 5+!D ST denies !H fit
{{/opts}}


{{#opts}}
2!N - 3!D; ?
3!H: Normal accept
3!S/4!C/!D: Super accept. Cue bid. No re-transfer
3!N: 3=!H with a good 5-card suit. Then 4!D is retransfer. Others are cue-bid (no re-transfer)
4!H: 4+!H min
{{/opts}}

Similar after 2!N - 3!H.

{{#opts}}
2!N - 3!D; 3!H - ?
Pass: To play
3!S: 3-!S. Opener rebids 3!N to show 2=!H. 4!H is to play.
@3!N: 4=!S 5=!H. Choice of game
4X: Natural. ST
{{/opts}}


{{#opts}}
2!N - 3!H; 3!S - ?
3!N: 5=!S Choice of Game
4!C/!D: Second Suit. ST
4!H: Slam try in !H
4!S: Mild Slam try in !H
{{/opts}}


{{#opts}}
2!N - 3!S; 3!N - ?
Pass: No 4-card minor
4!C/!D: 4+!C/!D. Better minor. Fitted
{{/opts}}


{{#opts}}
2!N - 3!S; 3!N - ?
Pass: To play
4!C: 4=!C 5+!D. Then 4!N suggests misfit.
4!D: 4=!D 5+!C. Then 4!N suggests misfit.
4!H/!S: 5+5+ minors, splinter in !H/!S. Then 4!N is 6-card RKCB, 5!C/!D is negative.
4!N: 5-5 minors, no slam interest
{{/opts}}

{{#opts}}
2!N - 4!C/!D;
4!D/!H: General slam interest
4!H/!S: No slam interest
Others: Slam interest
{{/opts}}


{{#opts}}
2!N - 4!H/!S:
4!S/!N: Slam interest. 3/5 keycards
4!N/5!C: Slam interest. 4 key cards
5!C/!D: No slam interest
{{/opts}}

{{/escstr}}