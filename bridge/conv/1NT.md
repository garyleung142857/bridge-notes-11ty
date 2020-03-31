---
layout: postlayout.hbs
title: 1NT
templateEngineOverride: hbs, md
tags: discussion
---

{{#escstr}}

# 1NT之後嘅發展

## 理念

開叫1NT之後嘅發展有幾個concern:
1.  坐啱莊
2.  走到佬
3.  唔好disclose 開叫人不必要嘅資訊
4.  邀請之後，可唔可以打返2M，定要打2N/3M?
5.  夠唔夠位試slam

### 傳統Stayman Transfer 問題

好多人都係打緊Stayman Transfer，基本上個structure係咁：
{{#opts}}
1!N - ?
2!C: 問叫。2!D冇四張高花，2M有嗰個4張高花（雙高叫2!H）
2!D: 轉移叫。5張!H起，任何牌力
2!H: 轉移叫。5張!S起，任何牌力
...
{{/opts}}


2!C Stayman 問叫會出現一個問題，例如下面一副牌：


{{#hand}} AT82.Q43.K854.93 {{/hand}}

{{#bid2}} 1!N, 2!C, 2!H, 3!N {{/bid2}}

你用Stayman問partner有冇4張!S，你跟本唔care 佢紅心有幾多張，但係Stayman嘅答法，佢會話哂畀你對家聽。

## Heeman

咁我同我partner就打開一個convention叫做 *Heeman* 嘅，個應叫係咁：

{{#opts}}
1!N - ?
2!C: 傀儡到2!D。好多種牌
2!D: 轉移到2!H。可能係想打2!H，可能係4張!H邀請起，可能係雙高（4＋4＋）邀請起
2!H: 轉移到2!S。可能係想打2!S，可能係4張!S邀請起
2!S: 問高低限。可以係(1)想打3!C，(2)平牌邀請，(3)平牌試slam，低花單套試slam
2!N: 問低花雙張小牌，通常想煲3!N
3!C: 傀儡到3!D。可能係想打，可能係4441試slam
3!D: 6張高花邀請起
3!H/!S: 單張，54起低花，逼叫到3!N/4m 
3!N: 止叫
4!C/!D: 轉移到4!H/!S
4!H/!S: 想打
{{/opts}}

{{/escstr}}

## 新Idea 

Some ideas are borrowed from Sam Dinkin - Michael Shuster's system: *Infernal Machine*.

This seems work best for weak (mini) No-trump.

{{#opts}}
1!N - ?
2!C: Game forcing relay (May stop at 4m)
2!D: Puppet to 2!H (Can preaccept). Either (1) Signoff in any suit, (2) invite with both majors, (3) COG with 4-5 M
2!H: Inv with 4-5 !H
2!S: Inv with 4-5 !S
2!N: Bal Inv
3X: Invite. Long suit
3!N: To play
4!C/!D: Long !H/!S. May have slam interest
4!H/!S: To play 
{{/opts}}