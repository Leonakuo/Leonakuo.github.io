/* Brand Bottleneck Quiz -> Google Sheet + follow-up email */
const AREAS = { A: "Strategy", B: "Perception", C: "Visuals", D: "Audience" };
const BOOKING_URL = "https://zcal.co/leona/designconsultation";
const SITE_URL = "https://www.leonasdesign.com";
const SENDER_NAME = "Leona Kuo";
const SIGNATURE_HTML = `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Helvetica,Arial,sans-serif;color:#111;border-collapse:collapse;max-width:560px">
<tr><td style="padding:0 0 14px 0"><a href="https://www.leonasdesign.com/" style="text-decoration:none"><img src="https://leonakuo.github.io/brand-quiz/sig/logo.png" width="147" height="18" alt="LEONA DESIGN." style="display:block;border:0"></a></td></tr>
<tr><td style="padding:0 0 12px 0;border-top:2px solid #111"></td></tr>
<tr><td style="padding:0 0 4px 0;font-size:11px;letter-spacing:.06em;color:#8a8a8a"><a href="https://www.instagram.com/leona_design_au/" style="color:#8a8a8a;text-decoration:none">@Leona Design</a></td></tr>
<tr><td style="padding:0 0 2px 0;font-size:17px;font-weight:bold;color:#111">Leona Kuo</td></tr>
<tr><td style="padding:0 0 12px 0;font-size:11px;letter-spacing:.12em;color:#111">DIRECTOR &middot; LEONA DESIGN</td></tr>
<tr><td style="padding:0 0 3px 0;font-size:12px;color:#111"><span style="display:inline-block;width:18px;font-weight:bold">P</span>AU&nbsp; <a href="tel:+61414040106" style="color:#111;text-decoration:none">+61 414 040 106</a>&nbsp;&nbsp;&nbsp;TW&nbsp; <a href="tel:+886982327851" style="color:#111;text-decoration:none">+886 982 327 851</a></td></tr>
<tr><td style="padding:0 0 3px 0;font-size:12px;color:#111"><span style="display:inline-block;width:18px;font-weight:bold">E</span><a href="mailto:leona@leonasdesign.com" style="color:#111;text-decoration:none">leona@leonasdesign.com</a></td></tr>
<tr><td style="padding:0 0 14px 0;font-size:12px;color:#111"><span style="display:inline-block;width:18px;font-weight:bold">W</span><a href="https://www.leonasdesign.com/" style="color:#111;text-decoration:none">www.leonasdesign.com</a></td></tr>
<tr><td style="padding:0 0 14px 0">
  <a href="https://www.facebook.com/Leona.design.2020" style="text-decoration:none"><img src="https://leonakuo.github.io/brand-quiz/sig/facebook.png" width="31" height="31" alt="Facebook" style="border:0;vertical-align:middle;margin-right:8px"></a><a href="https://www.instagram.com/leona_design_au/" style="text-decoration:none"><img src="https://leonakuo.github.io/brand-quiz/sig/instagram.png" width="31" height="31" alt="Instagram" style="border:0;vertical-align:middle;margin-right:8px"></a><a href="https://www.linkedin.com/in/leona-kuo-9b056913b/" style="text-decoration:none"><img src="https://leonakuo.github.io/brand-quiz/sig/linkedin.png" width="31" height="31" alt="LinkedIn" style="border:0;vertical-align:middle"></a>
</td></tr>
<tr><td style="padding:0 0 14px 0;font-size:10px;letter-spacing:.14em;color:#111"><a href="https://www.instagram.com/leona_design_au/" style="color:#111;text-decoration:none">INSTAGRAM</a>&nbsp; &bull; &nbsp;<a href="https://www.facebook.com/Leona.design.2020" style="color:#111;text-decoration:none">FACEBOOK</a>&nbsp; &bull; &nbsp;<a href="https://www.tiktok.com/@leona.kuo888" style="color:#111;text-decoration:none">TIKTOK</a>&nbsp; &bull; &nbsp;<a href="https://www.linkedin.com/in/leona-kuo-9b056913b/" style="color:#111;text-decoration:none">LINKEDIN</a></td></tr>
<tr><td style="padding:0;background:#111;color:#f2d770;font-size:12px;line-height:1.5"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="padding:12px 16px;color:#f2d770;font-size:12px">Branding for businesses whose quality is felt,<br>but not yet seen.</td><td style="padding:12px 16px;text-align:right;white-space:nowrap"><a href="https://zcal.co/leona/designconsultation" style="color:#111;background:#f2d770;text-decoration:none;font-weight:bold;font-size:11px;letter-spacing:.06em;padding:8px 12px;display:inline-block">BOOK YOUR FREE CONSULTATION &rarr;</a></td></tr></table></td></tr>
</table>`;
const HEADERS = ["Submitted (Adelaide)","First name","Email","Primary bottleneck","Primary type","Secondary bottleneck","Stage","Coordinate","Strategy","Perception","Visuals","Audience","Answers","Page","Email sent"];

const TYPES = {
  A: { name:"The Backwards Brand", eyebrow:"Your brand bottleneck is strategy",
       quote:"“I know I need to show up online, but I have no idea where to begin.”",
       right:"You already sense that a brand is more than a logo, otherwise you would not be here. You are showing up, or trying to, and you are honest about the fact that it is not landing. That awareness is the hard part. Most businesses in this position are still blaming the algorithm.",
       rub:"Every post feels like starting from scratch because there is nothing to start from. Positioning, tone of voice and visual direction were never written down, so each decision gets made on the day, from mood. That is exhausting for you, and it reads as inconsistent to the people you want to reach. More content will not fix it. It only exposes an unclear brand to more people.",
       check:["Can a stranger tell who you are for within five seconds of landing on your homepage?","Can you say in one sentence why a client should choose you over the obvious alternative?","Do your website, Instagram bio and proposals describe the business the same way?","Do you have a written list of three to five things you want to be known for?","When you sit down to post, do you have content pillars to pick from, or a blank page?"],
       task:"Open a blank note and finish this sentence without editing: “I help ___ do ___ so they can ___.” Write it three times, three ways. Keep the one that makes you a little uncomfortable because it is specific.",
       ask:"If your brand could only be known for one thing, what would you be willing to give up to own it?" },
  B: { name:"The Mercedes in a Toyota Suit", eyebrow:"Your brand bottleneck is perception",
       quote:"“My service is at a Mercedes-Benz level, but my brand image makes it look like a Toyota.”",
       right:"The quality is real. Your reputation, your results and your years in business are doing the heavy lifting, and clients who work with you tend to stay. You have built something worth being proud of. The problem is not the business. It is the story the outside of the business is telling.",
       rub:"The business has outgrown its brand. The identity that was fine when you started now sets expectations below the level you operate at, so prospects judge you, and price you, on the image rather than the work. You end up proving your value in every meeting instead of it being obvious before you walk in. Sharper competitors with weaker work are winning opportunities that should have been yours.",
       check:["Put your website next to the two competitors you most respect. Whose looks like it charges the most?","Does your homepage show proof (years, clients, results) above the fold, or do you have to scroll for it?","Does your visual identity look like it was made this year or the year you started?","When clients push back on price, is it before or after they understand the deliverable?","Would your best client be embarrassed, neutral or proud to share your Instagram?"],
       task:"Write down what “the next level” actually means for you: higher fees, more premium clients, a new market, or moving from a personal brand to a recognised company. One sentence. Everything about the brand should be measured against that destination, not against where you started.",
       ask:"What would you charge tomorrow if you knew every prospect already believed you were the best in the room?" },
  C: { name:"The Right Brand, Wrong Look", eyebrow:"Your brand bottleneck is visual",
       quote:"“The colours do not feel like us anymore.”",
       right:"You know who you are and who you serve, and you can explain what makes you different. That is genuinely rare, and it is the part most businesses never get to. Your positioning is doing its job. It just has not been translated into what people see.",
       rub:"Your visual identity was most likely created before the brand personality was clear, or for an earlier version of the business. Either way, the logo, colours and layouts now say something different from what you say, and prospects make a snap judgement on that look alone. Buying more templates does not fix it. A logo on its own is not a system, and without a system every new post is a fresh guess.",
       check:["Write the three feelings your brand should create. Does your current logo create any of them?","Screenshot your last nine Instagram posts. Do they look like one business or three?","Is there a written rule for which colours, fonts and image styles you use, or does it live in your head?","Does your website look like the same brand as your social media and your proposals?","Would a new team member be able to make something on-brand without asking you?"],
       task:"Take a screenshot of your last nine posts and your homepage. Put them side by side. Circle every element that would not belong if a competitor made it. Whatever is left uncircled is your visual identity today. Decide if that is enough.",
       ask:"If a stranger only ever saw your brand and never read a word, what would they think you charge?" },
  D: { name:"The Loud Brand Nobody Hears", eyebrow:"Your brand bottleneck is audience",
       quote:"“We have spent a significant amount on ads, but we are not seeing conversions.”",
       right:"You are showing up and investing. You have the discipline to post consistently and the willingness to put budget behind it, which puts you ahead of most businesses that only talk about marketing. The engine is running. It is pointed at the wrong destination.",
       rub:"Advertising amplifies whatever brand is inside it. If the image, language and visual culture do not resonate with the people you want, ads reach more of the wrong people faster. Targeting, offer and landing page matter too, but the brand is what people decide about in the first two seconds. Spending more before fixing that is the most expensive mistake on this list.",
       check:["Look at the last ten people who enquired. How many were the client you actually want?","Describe your ideal client in one sentence. Does your Instagram look like their world or like your current customers’ world?","What does your ad creative say to someone who does not already know you?","Does your website speak the language of the audience you want, or the one you have?","If you paused all paid spend for a month, would the right people still find you?"],
       task:"Open your ads manager or Instagram insights. Write down who is actually responding: age, type of business, budget. Then write down who you want. Put the two lists side by side and mark every brand signal (colour, tone, imagery, offer) that speaks to the first list and not the second.",
       ask:"Who is the client you keep hoping will find you, and what would they need to see to believe you were made for them?" }
};
const COMBOS = {
  AB:{ n:1, connect:"The quality is real, but it was never articulated, so the market fills in the blank with “ordinary”. These two feed each other: without a clear position, the premium has nowhere to show up, and without visible premium, the position sounds like a claim. Fix the positioning first. Once you can say what you stand for, the value becomes visible almost immediately.",
    early:{ tag:"You are good at this. You just have not decided how to say so yet.",
      stage:"At this stage the gap is normal. You have been busy doing the work and the brand has been an afterthought. The good news is you have very little to undo. Get the positioning right now and every future decision, from the logo to the ads, gets cheaper.",
      move:"Write one paragraph: who you serve, what you do differently, and one piece of proof you already have, even if it is small. Put it at the top of your homepage and Instagram bio. Do this before spending anything on design or ads." },
    est:{ tag:"Years of good work, and a brand that still has not put it into words.",
      stage:"After this many years the reputation exists, but it lives in referrals and in the room. Your brand is still describing the business you started, so new prospects meet a smaller version of you. This is the most common gap I see in established businesses, and the most fixable, because the proof is already there. It just needs to be written down and shown.",
      move:"Gather your proof first: years, clients, results, and the reasons your best clients say they chose you. Write the positioning statement those facts support. Then look at your website and ask whether it looks like a business with that track record. Usually it does not, and that becomes the brief." } },
  AC:{ n:2, connect:"A logo designed without a defined personality can only be a guess, so it is no surprise it does not feel like you. Resist redesigning yet. Without the strategy written down, a new logo will be a prettier guess. Define the personality, and the visual decisions stop being matters of taste.",
    early:{ tag:"The logo was guessed before the brand was decided.",
      stage:"Early on, most logos are made in a hurry, from a mood board or a template, before anyone knows what the brand should feel like. That is not a design failure. It is a sequencing one. Fix the order and the visuals stop being a guess.",
      move:"Write the three feelings the brand should create. Hold your current logo and colours against them. Anything that creates none of the three goes on the rebuild list. Do not brief a designer until those three words are written." },
    est:{ tag:"The look never felt right because nobody ever told it what to be.",
      stage:"You have probably had this logo for years and never quite loved it. That is because it was made for a brand that had not yet worked out what it stood for, and the business has grown around it since. The instinct is to redesign. The smarter move is to define the personality first, so the next version is the last one you need for a long time.",
      move:"Write the three feelings, then screenshot your logo, website, Instagram and last proposal. Score each against the three. You will see whether this is a refresh (most things pass, one or two do not) or a rebuild (most things fail). That decision alone saves thousands." } },
  AD:{ n:3, connect:"When the audience was never defined, marketing spreads thin and the wrong people respond, simply because the brand never said who it was for. More reach makes that worse. Name the audience first and the marketing narrows itself.",
    early:{ tag:"You started posting before you decided who you were talking to.",
      stage:"This is the most common early mistake and the easiest to fix now. You are marketing to everyone because nobody told you to choose. Every dollar and every post gets far more effective once you pick a person.",
      move:"Write one sentence describing your ideal client, including what they are trying to change. Rewrite your Instagram bio and homepage headline to name them. Do this before you spend on ads." },
    est:{ tag:"The audience drifted because the brand never named who it was for.",
      stage:"The business grew on whoever came, and now you have a customer base that was never chosen. Wanting a different audience is a strategic decision, not a marketing one. Until the brand says who it is for, ads will keep finding more of the same people.",
      move:"Look at the last 20 enquiries and split them into who you want and who you got. Write the ideal client sentence from the first group. Rewrite your headline, bio and ad copy for them, and run one small campaign before restoring the full budget." } },
  BA:{ n:4, connect:"Your reputation carries you, but it lives in referrals and in the room, not in the brand. The perception gap persists because the positioning was never documented as the business grew. Documenting it is not admin. It is how the market catches up with what you already are.",
    early:{ tag:"Too good to look this ordinary, too new to have said why.",
      stage:"Being underestimated this early usually means your work is ahead of your brand, which is a good problem to have. You do not have decades of proof yet, so the positioning has to do the talking. Decide what you want to be known for and say it plainly.",
      move:"Write down your one sharpest claim (what you do better, and for whom) and one piece of evidence. Put both on the homepage. Then check whether the visuals make that claim believable." },
    est:{ tag:"An established business with an unwritten brand.",
      stage:"You have been the best kept secret in your market for years. Referrals carry you, but a stranger meets a brand that still describes year one. The perception gap is not about design yet. It is that nobody ever wrote down what the business has become.",
      move:"Document the proof: years, clients, results, testimonials. Write the positioning statement they support. Then audit whether your website and socials look like a business with that track record. That gap is the brief." } },
  BC:{ n:5, connect:"The logo and visual system were made for a business that no longer exists, and every touchpoint quietly tells prospects to expect less than they get. For you the perception fix is mostly a visual one, but it has to be designed for where you are going, not where you were.",
    early:{ tag:"The look is setting a lower price than the work deserves.",
      stage:"Early on it is tempting to keep the cheap logo until you can afford better. But the cheap logo is part of why you cannot charge more. Investing in the visual level you want to be at is how you get there sooner.",
      move:"Pick the one touchpoint prospects see first, usually Instagram or the homepage. Make that one look like the fee you want to charge, then do the rest later. One strong front door beats five average ones." },
    est:{ tag:"The look has become the ceiling.",
      stage:"This is the classic outgrown identity. At your stage the visuals are carrying years of growth they were never designed for, and every touchpoint sets expectations below the level you operate at. The fix is visual, and it pays back quickly because everything else is already earning trust.",
      move:"Audit five touchpoints (website, Instagram, proposal, email signature, business card) against your current fee. For each one ask: does this look like it costs what I charge? The ones that look cheaper are the brief." } },
  BD:{ n:6, connect:"An undersold image attracts the price bracket it looks like, and ads amplify that. So you keep reaching people who negotiate, hesitate or ghost, and you conclude the market is price sensitive. It is not. The brand is signalling the wrong price point. Fix perception before you buy more reach.",
    early:{ tag:"Priced premium, looking mid-market, reaching bargain hunters.",
      stage:"You are trying to skip a step: attracting a premium audience before the brand looks premium. Fix the signals first. At this stage that is mostly restraint, proof and better imagery, not a full rebrand.",
      move:"Before the next campaign, upgrade the three things a premium buyer checks first: your homepage proof, your photography and how specific your offer is. Then run a small test and watch enquiry quality, not volume." },
    est:{ tag:"Premium service, mid-market audience.",
      stage:"Years of an undersold image have built a customer base to match. The market is not price sensitive. Your brand is signalling the wrong price point, and the people you want are choosing competitors who look like their level. Fix perception before you buy more reach.",
      move:"Pause any plan to scale spend. Review the last 20 enquiries by budget and fit. Adjust the premium signals (proof, restraint, specificity, quality of imagery) before the next campaign, so the ads finally reach the bracket you belong in." } },
  CA:{ n:7, connect:"The visuals are the loudest symptom, so it is tempting to start there. But your positioning is thinner than you think, and a designer briefed from a thin position will produce something generic. The visual problem is real; it just needs a strategy to aim at.",
    early:{ tag:"A new logo will not fix a message that is not there yet.",
      stage:"You are early enough that writing the strategy takes a week and saves you doing the design twice. Get the brief right and the next logo will be the one you keep.",
      move:"Before any design work, write a one page brief: who it is for, why they choose you, what you want to be known for, three feelings the brand should create. If you cannot fill the page, that is the first project." },
    est:{ tag:"Years in, and still no brief for the brand.",
      stage:"You have redesigned before, or thought about it, and it never quite stuck. That is the tell. Underneath the visual problem the positioning was never written down, so every designer has been guessing. Write the brief and the next design will finally hold.",
      move:"Write the one page brief, then add what has changed since the last logo: new services, new clients, new price point. That version is what any designer should work from. If you cannot fill it, strategy comes first." } },
  CB:{ n:8, connect:"Your positioning is clear and your service is strong. The visuals are actively undermining your credibility, so prospects discount you before they see the work. This is one of the fastest gaps to close, because the strategy is already there. The refresh just needs to aim at premium cues rather than personal taste.",
    early:{ tag:"Good work, wearing the wrong clothes.",
      stage:"You know who you are, and the brand simply looks less capable than you are. Because the thinking is done, a focused refresh now is cheap insurance against years of being underestimated.",
      move:"Choose three peers you respect. Compare their website and Instagram to yours on photography, typography, whitespace, consistency and proof. Your two lowest scores are where the refresh starts." },
    est:{ tag:"Good work, wearing clothes from year one.",
      stage:"Prospects who get past the first impression stay. The problem is how many never get past it. At your stage a visual refresh pays back quickly, because everything else in the business is already earning the trust.",
      move:"Do the five cue comparison against three competitors who charge what you charge or more. Then list which touchpoints a new client sees before they ever speak to you. Refresh those first." } },
  CD:{ n:9, connect:"Visual culture is how people decide whether a brand is for them. Your positioning targets one audience, but your colours, imagery and layouts belong to another, so the wrong people respond and the right ones scroll past. Attracting a new audience is not about looking trendy. It is about looking like their world.",
    early:{ tag:"The look is attracting the wrong crowd.",
      stage:"Early on this is easy to redirect, because you have not yet built a following that expects the old look. Change the visual world now and the right audience will find nothing to unlearn.",
      move:"Collect ten images your ideal client would save or buy. Put them next to your last ten posts. The differences in colour, mood, type and pace are your visual brief." },
    est:{ tag:"The look still belongs to the audience you used to want.",
      stage:"The visuals were made for the audience you had, and they still work on them. That is exactly why the new audience scrolls past. Shifting audience means shifting the visual world on purpose, in a way that does not embarrass the clients you already have.",
      move:"Do the ten image comparison, then test the new direction on one channel for two weeks before touching the website. If the enquiries shift, you have proof for the full refresh." } },
  DA:{ n:10, connect:"The audience is wrong because the audience was never defined, and the spend is amplifying a brand that has not decided who it is for. Every dollar is buying reach for a message that does not exist yet. Stop spending until the message does.",
    early:{ tag:"Loud, but about what?",
      stage:"You have been paying for reach before deciding what to say. Stop the spend, decide who the brand is for, and restart. Early on this is a week of thinking, not a rebrand.",
      move:"Write the ideal client in one sentence and why they should choose you in another. Rewrite your ad copy, bio and headline to say both. Run one small campaign before restoring the budget." },
    est:{ tag:"Years of reach, and still nobody it was for.",
      stage:"Marketing has been running for years, and the audience it built was never chosen. The brand is amplifying a position it never took. The fix starts with a decision, not a campaign.",
      move:"Split the last 20 enquiries into wanted and unwanted. Write the ideal client from the wanted group, then the reason they choose you. Rewrite ads, bio and headline. Run one low budget campaign and compare quality before scaling." } },
  DB:{ n:11, connect:"You are attracting price sensitive buyers because the brand reads mid-tier, and the ads are faithfully finding more of them. The audience problem is really a perception problem wearing a marketing costume. Raise the signals that tell people what level you are at, and the audience shifts on its own.",
    early:{ tag:"Reaching people who cannot see the value.",
      stage:"At this stage the fix is cheap: raise the signals of quality before you raise the budget. Proof, imagery and a specific offer will do more than any targeting change.",
      move:"Before the next campaign, upgrade homepage proof, photography and the specificity of your offer. Re-run the same targeting and compare enquiry quality, not volume." },
    est:{ tag:"A brand that reads mid-tier, finding mid-tier buyers.",
      stage:"After this many years the customer base reflects the image. The people you want exist. They are choosing competitors who look like their level. Raise the signals and the audience shifts on its own.",
      move:"Same three upgrades, plus one more: put your strongest client names or results where a premium buyer sees them first. Then re-run the same targeting and compare who enquires, not how many." } },
  DC:{ n:12, connect:"Your strategy and messaging are sound, but the visuals do not resonate with the audience you want. A younger or more premium audience is deciding in two seconds, on look alone, that you are not for them. The fix is visual, and it should be tested rather than assumed.",
    early:{ tag:"Right message, wrong picture.",
      stage:"Because you are early, you can test a new look on one channel without confusing anyone. Treat it as an experiment with a deadline, not a rebrand.",
      move:"Pick one channel. For two weeks run one clearly different visual direction aimed at your ideal client, same message. Track who responds." },
    est:{ tag:"Right message, a picture from another era.",
      stage:"The audience you want is not rejecting your offer. They never got as far as reading it. Dated visuals are doing the filtering before the message gets a chance.",
      move:"Run the same two week test on one channel, and check your website against the new direction, because that is where the tested audience lands next. If the test shifts enquiries, the website is the next refresh." } }
};

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheets()[0];
    if (sh.getLastRow() === 0) { sh.appendRow(HEADERS); sh.getRange(1,1,1,HEADERS.length).setFontWeight("bold"); sh.setFrozenRows(1); }
    const now = Utilities.formatDate(new Date(), "Australia/Adelaide", "yyyy-MM-dd HH:mm");
    const K = COMBOS[d.primary + d.secondary];
    const coord = K ? ((K.n - 1) * 2 + (d.stage === "early" ? 1 : 2)) + " / 24" : "";
    let sent = "";
    try { sendResultEmail(d, K); sent = "yes"; } catch (err) { sent = "failed: " + err; }
    sh.appendRow([
      now, d.name || "", d.email || "",
      AREAS[d.primary] || d.primary, TYPES[d.primary] ? TYPES[d.primary].name : "",
      AREAS[d.secondary] || d.secondary,
      d.stage === "early" ? "Early" : "Established", coord,
      d.s ? d.s.A : "", d.s ? d.s.B : "", d.s ? d.s.C : "", d.s ? d.s.D : "",
      (d.answers || []).join(""), d.pageUri || "", sent
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}

function esc(s) { return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function sendResultEmail(d, K) {
  if (!d.email) return;
  const T = TYPES[d.primary]; if (!T) return;
  const name = (d.name || "there").trim();
  const stage = d.stage === "early" ? "Early" : "Established";
  const S = K ? (d.stage === "early" ? K.early : K.est) : null;
  const s = d.s || {};
  const P = t => `<p style="margin:0 0 14px;line-height:1.6">${esc(t)}</p>`;
  const H = t => `<p style="margin:22px 0 6px;font-weight:bold;font-size:15px">${esc(t)}</p>`;

  const html = `
  <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#222;max-width:600px;margin:0 auto;padding:24px">
    <p style="margin:0 0 14px">Hi ${esc(name)},</p>
    ${P("Thanks for taking the Brand Bottleneck Quiz. Here is your result, so you have it to come back to.")}
    <div style="background:#f5f3ef;border-radius:10px;padding:18px 20px;margin:20px 0">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#666">${esc(T.eyebrow)}</p>
      <p style="margin:0 0 8px;font-size:22px;font-weight:bold">${esc(T.name)}</p>
      <p style="margin:0;color:#555">Secondary: ${esc(AREAS[d.secondary] || "")} &middot; Stage: ${stage}</p>
    </div>
    ${H("What you are already getting right")}${P(T.right)}
    ${H("What is holding you back")}${P(T.rub)}
    ${K ? H("How the two connect") + P(K.connect) : ""}
    ${S ? H("Your next move") + P(S.move) : ""}
    <p style="margin:22px 0;color:#555">Your scores: Strategy ${s.A||0} &middot; Perception ${s.B||0} &middot; Visuals ${s.C||0} &middot; Audience ${s.D||0}</p>
    ${P("If you would like to talk through what this means for your business, I offer a free 30-minute design consultation. You can pick a time here:")}
    <p style="margin:6px 0 22px"><a href="${BOOKING_URL}" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;font-weight:bold">Book a consultation</a></p>
    ${P("No pressure either way. If the result gave you something useful to act on, that is a good outcome too.")}
    <p style="margin:26px 0 14px">Warmly,</p>${SIGNATURE_HTML}
  </div>`;

  const text = `Hi ${name},\n\nThanks for taking the Brand Bottleneck Quiz. Here is your result.\n\n${T.eyebrow}\n${T.name}\nSecondary: ${AREAS[d.secondary] || ""} | Stage: ${stage}\n\nWhat you are already getting right\n${T.right}\n\nWhat is holding you back\n${T.rub}\n\n${K ? "How the two connect\n" + K.connect + "\n\n" : ""}${S ? "Your next move\n" + S.move + "\n\n" : ""}Your scores: Strategy ${s.A||0}, Perception ${s.B||0}, Visuals ${s.C||0}, Audience ${s.D||0}\n\nIf you would like to talk through what this means for your business, I offer a free 30-minute design consultation:\n${BOOKING_URL}\n\nNo pressure either way.\n\nWarmly,\nLeona\nFounder and Creative Director, Leona Design\n${SITE_URL}`;

  GmailApp.sendEmail(d.email, "Your brand bottleneck: " + T.name, text, { htmlBody: html, name: SENDER_NAME });
}

function doGet() { return ContentService.createTextOutput("Brand Quiz endpoint is live."); }
