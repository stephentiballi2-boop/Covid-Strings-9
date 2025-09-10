<doctype.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third round
heading8=fourth round
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second  round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings9 fan voting.js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,initial scale 1>
<title covid strings9 fan voting</title>
<style>
vote button
margin:5px;
padding:10px;
background-color:4caf50
color: white;
border:none;
cursor:pointer;
vote button.hover
background color 45a049
</style>
</head>
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string  limit=16
amount of rounds=math.log(entry limit) /math.log(2) 
for (i=amount_ of_ rounds;-i>0;i- -)
s=round+(amount_ of_ rounds; i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,i-1)+matches’;
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class= vote button on click “vote” (‘string 1’) <string pair button>
<button class=vote button  on click “vote” (‘string 2’) <string pair button>
<button class=vote button on click “vote” (‘string 3’) <string pair button>
<button class=vote button on click “vote” (‘string 4’) <string pair button>
<button class=vote button  on click “vote” (‘string 5’) <string pair button>
<button class=vote button  on click “vote” (‘string 6’) <string pair button>
<button class=vote button  on click “vote” (‘string 7’) <string pair button>
<button class=vote button  on click “vote” (‘string 8’) <string pair button>
<button class=vote button  on click “vote” (‘string 9’) <string pair button>
<button class=vote button  on click “vote” (‘string 10’) <string pair button>
<button class=vote button  on click “vote” (‘string 11’) <string pair button>
<button class=vote button  on click “vote” (‘string 12’) <string pair button>
<button class=vote button  on click “vote” (‘string 13’) <string pair button>
<button class=vote button  on click “vote” (‘string 14’) <string pair button>
<button class=vote button  on click “vote” (‘string 15’) <string pair button>
<button class=vote button  on click “vote” (‘string 16’) <string pair button>
<header.html>
first round 
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round}<h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name}</button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded ,()
let current round=1
total rounds= 5
round cqontainer=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function(index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round ==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup” 
concatenated strings 
matchup1=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <P>
<p> string 14 <span id= “votes string 14 >0</span> votes <P>
<div>
matchup2=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup3=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup4= string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “vote string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup5=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup6=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup7=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup8=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
<div class=”matchup” 
non-concatenated strings 
matchup1=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup2=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup3=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup4=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup5=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup6=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup7=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup8=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
<h2 id =”result”></h2>
<header.html>
result
the end result of voting on a particular pair of strings
<script src=vote.js
<script>
<body>
<html>
vote js file notes:
votes={
‘string 1
‘string 2’
vote (string)
if (votes.hasownproperty(character))
votes [character]++
display results
else:
console.error(‘invalid string’)
displayresults
result element=document get element by id (‘result’)
result element inner html
<header.html>
non-concatenated string variables 
non-concatenated strings in covid strings
non-concatenated strings list=[1:phrase “the good news about some cures is them being roasted on late night-tv”, 2:phrase “colloidal silver for one cannot kill werewolves even if it kills covid”, 3:phrase “likewise uv light cannot kill vampires even if it kills covid”, 4:phrase “there are also effective treatments like paxlovid”, 5:phrase “the outlook on covid will hopefully be better than the saturn outlook”, 6:phrase “there are storm clouds with potential lockdowns coming”, 7:phrase “faucism  however is not one of them”,8:phrase “the other good news is that we know that these new infections are probably influenza” ,9:math problem “if 3 percent of anti-vaxxers believe that pfizers vaccine causes an alice ring how many dont?”, 10:math problem “if the margin of error is 1.15 percent what is the range?”, 11:math problem “if 46 percent of americans support the wests response to russian aggression involving promoting moderna and pfizer’s covid vaccines  what percent is skeptical?”, 12:math problem “if 33 percent say their beliefs would continue post-putin what  would the percent change be?”, 13: math problem “if the margin of error is 6 and 12/13 percent what is the range for the first question?”, 14:math problem “ with the same   margin of error   what is the range for the second question?”, 15:sentence “anyone who thinks uv kills covid should realize they are not buffy the vampire slayer”, 16:sentence “no one believes uv light killing covid is a good summer dad joke”]
non-concatenated string1= phrase ”the good news about some cures is them being roasted on late night-tv”
non-concatenated string2=phrase “colloidal Silver For One Cannot Kill Werewolves Even If It Kills Covid”
non-concatenated string3=phrase “Likewise UV Light Cannot Kill  Vampires Even If It Kills Covid”
non-concatenated string4=phrase “There Are Also Effective Treatments Like Paxlovid”
non-concatenated string5=phrase “The Outlook On Covid Will Hopefully Be Better Than The Saturn Outlook”
non-concatenated string6=phrase “There Are Storm Clouds With Potential Lockdowns Coming”
non-concatenated string7=phrase “Faucism  However Is Not One Of Them”
non-concatenated string8=phrase “The Other Good News Is That We Know That These New Infections Are Probably Influenza”
non-concatenated string9=math problem “If 3 Percent Of Anti-Vaxxers Believe That Pfizers Vaccine Causes An Alice Ring How Many Dont?”
non-concatenated string10=math problem “If The Margin Of Error Is 1.15 Percent What Is The Range?”
non-concatenated string11=math problem “If 46 Percent Of Americans Support The Wests Response To Russian Aggression Involving Promoting Moderna And Pfizers Covid Vaccines What Percent Is Skeptical?”
non-concatenated string12=math problem “If 33 Percent Say Their Beliefs Would Continue Post-Putin What Would The Percent Change Be?”
non-concatenated string13=math problem “If The Margin Of Error Is 6 And 12/13 Percent What Is The Range For The First Question?”
non-concatenated string14=math problem “With The Same  Margin Of Error  What Is The Range For The Second Question?”
non-concatenated string15=sentence “Anyone Who Thinks UV Kills Covid Should Realize They Are Not Buffy The Vampire Slayer
non-concatenated string16=sentence “No One Believes Uv Light Killing Covid Is A Good Summer Dad Joke”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings9 fan voting
select characters
edit diffuse property
desired color=green
<P>string 1[votes ‘string 1 ‘]}votes</p>
<P>string 2[votes ‘string 2 ‘]}votes</p>
string 3 [votes ‘string 3 ‘]}votes</p>
string 4 [votes ‘string 4 ‘]}votes</p>
string 5[votes ‘string 5 ‘]}votes</p>
string 6[votes ‘string 6 ‘]}votes</p>
string 7 [votes ‘string 7 ‘]}votes</p>
string 8[votes ‘string 8 ‘]}votes</p>
string 9 [votes ‘string 9 ‘]}votes</p>
string 10 [votes ‘string 10 ‘]}votes</p>
string 11[votes ‘string 11 ‘]}votes</p>
string 12 [votes ‘string 12 ‘]}votes</p>
string 13 [votes ‘string 13 ‘]}votes</p>
string 14 [votes ‘string 14 ‘]}votes</p>
string 15 [votes ‘string 15 ‘]}votes</p>
string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round non-concatenated string advancing 
the dode designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
<header.html>
concatenated string variables
concatenated strings in covid strings
concatenated string list=[1:phrase “pfizers”+”vaccine”+”booster”+”certainly”+”helps”+”with”+”martha”+”stewart”+”and”+”travis”+”kelces”+”endorsement”, 2:phrase “nasal”+”vaccines”+”are”+”coming”+”and”+”they”+”help”+”even”+”more”, 3:phrase “what”+”sounds”+”more”+”surprising”+”is”+”if”+”nerve”+”blocking”+”helps”+”covid”+”patients”+”regain”+”their”+”sense”+”of”+”smelling”, 4:math problem “if”+”a”+”poll”+”of”+”long”+”covid”+”survivors”+”found”+”that”+”85”+”percent”+”thought”+”that”+”nerve”+”blocking”+”was”+”crazy”+”how”+”many”+”didnt?”, 5:math problem “if”+”the”+”margin”+”of”+”error”+”is”+”5.14”+”percent”+”what”+”is”+”the”+”range?”, 6:phrase “when”+”they”+”become”+”public”+”matters”+”just”+”as”+”much”, 7:phrase “perhaps”+”getting”+”vaccinated”+”can”+”become”+”as”+”easy”+”as”+”breathing”+”in”+”and”+”out”, 8:math problem “if”+”a”+”poll”+”found”+”that”+”travis”+”kelces”+”endorsement”+”of”+”covid”+”vaccines”+”made”+”support”+”for”+”getting”+”vaccinated”+”increase”+”by”+”16”+”percent”+”if”+”the”+”original”+”percent”+”was”+”44”+”percent”+”what”+”is”+”the”+”new”+”percent?”, 9:math problem “if”+”21”+”percent”+”of”+”the”+”original”+”support”+”was”+”mild”+”how”+”much”+”was”+”strong”+”approval?”, 10:math problem “if”+”the”+”margin”+”of”+”error”+”is”+”5.35”+”percent”+”what”+”is”+”the”+”range”+”of”+”the”+”original”+”poll?”, 11:math problem “if”+”the”+”margin”+”of”+”error”+”added”+”in”+”is”+”6.15”+”percent”+”what”+”is”+”the”+”range?”, 12:math problem “if”+”75”+”percent”+”of”+”the”+”56”+”percent”+”of”+”original”+”nos”+”in”+”the”+”poll”+”said”+”that”+”they”+”did”+”not”+”have”+”enough”+”information”+”to”+”be”+”sure”+”it”+”was”+”proven”+”that”+”pfizers”+”vaccine”+”is”+”safe”+”what”+”is”+”the”+”new”+”percent?”, 13:math problem “while”+”86”+”percent”+”may”+”be”+”open”+”to”+”taking”+”the”+”vaccine”+”how”+”many”+”are”+”still”+”hard”+”nos”?, 14:phrase “it”+”should”+”be”+”safe”+”to”+”say”+”that”+”quartz”+”crystals”+”are”+”also”+”not”+”a”+”cure”, 15:phrase “the”+”good”+”news”+”is”+”that”+”masking”+”restrictions”+”have”+”been”+”relaxed”, 16:phrase “ken”+”paxtons”+”lawsuit”+”cannot”+”change”+”the”+”fact”+”that”+”vaccines”+”are”+”highly”+”effective”]
concatenated string1=phrase “Pfizers”+”Vaccine”+”Booster”+”Certainly”+”Helps”+”With”+”Martha”+”Stewart”+”And”+”Travis”+”Kelces”+”Endorsement”
concatenated string2=phrase “Nasal”+”Vaccines”+”Are”+”Coming”+”And”+”They”+”Help”+”Even”+”More”
concatenated string3=phrase “What”+”Sounds”+”More”+”Surprising”+”Is”+”If”+”Nerve”+”Blocking”+”Helps”+”Covid”+”Patients”+”Regain”+”Their”+”Sense”+”Of”+”Smelling”
concatenated string4=math Problem “If”+”A”+”Poll”+”Of”+”Long”+”Covid”+”Survivors”+”Found”+”That”+”85”+”Percent”+”Thought”+”That”+”Nerve”+”Blocking”+”Was”+”Crazy”+”How”+”Many”+”Didnt?”
concatenated string5=math Problem “If”+”The”+”Margin”+”Of”+”Error”+”Is”+”5.14”+”Percent”+”What”+”Is”+”The”+”Range?”
concatenated string6=phrase “When”+”They”+”Become”+”Public”+”Matters”+”Just”+”As”+”Much”
concatenated string7=phrase “Perhaps”+”Getting”+”Vaccinated”+”Can”+”Become”+”As”+”Easy”+”As”+”Breathing”+”In”+”And”+”Out”
concatenated string8=math problem “If”+”A”+”Poll”+”Found”+”That”+”Travis”+”Kelces”+”Endorsement”+”Of”+”Covid”+”Vaccines”+”Made”+”Support”+”For”+”Getting”+”Vaccinated”+”Increase”+”By”+”16”+”Percent”+”If”+”The”+”Original”+”Percent”+”Was”+”44”+”Percent”+”What”+”Is”+”The”+”New”+”Percent?”
concatenated string9=math problem “If”+”21”+”Percent”+”Of”+”The”+”Original”+”Support”+”Was”+”Mild”+”How”+”Much”+”Was”+”Strong”+”Approval?”
concatenated string10=math problem “If”+”The”+”Margin”+”Of”+”Error”+”Is”+”5.35”+”Percent”+”What”+”Is”+”The”+”Range”+”Of”+”The”+”Original”+”Poll?”
concatenated string11=math problem  “If”+”The”+”Margin”+”Of”+”Error”+”Added”+”In”+”Is”+”6.15”+”Percent”+”What”+”Is”+”The”+”Range?”
concatenated string12=math problem “If”+”75”+”Percent”+”Of”+”The”+”56”+”Percent”+”Of”+”Original”+”Nos”+”In”+”The”+”Poll”+”Said”+”That”+”They”+”Did”+”Not”+”Have”+”Enough”+”Information”+”To”+”Be”+”Sure”+”It”+”Was”+”Proven”+”That”+”Pfizers”+”Vaccine”+”Is”+”Safe”+”What”+”Is”+”The”+”New”+”Percent?”
concatenated string13=math problem “While”+”86”+”Percent”+”May”+”Be”+”Open”+”To”+”Taking”+”The”+”Vaccine”+”How”+”Many”+”Are”+”Still”+”Hard”+”Nos”?
concatenated string14=phrase “It”+”Should”+”Be”+”Safe”+”To”+”Say”+”That”+”Quartz”+”Crystals”+”Are”+”Also”+”Not”+”A”+”Cure”
concatenated string15=phrase “The”+”Good”+”News”+”Is”+”That”+”Masking”+”Restrictions”+”Have”+”Been”+”Relaxed”
concatenated string16=phrase “Ken”+”Paxtons”+”Lawsuit”+”Cannot”+”Change”+”The”+”Fact”+”That”+”Vaccines”+”Are”+”Highly”+”Effective”
Chapter= Document.Queryselector(Chapter)
Chapter Inner Html
Replace ‘ With / 
For Apostrophe In Covid Strings9Fan Voting
Select Characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
String 3 [Votes ‘String 3 ‘]}Votes</P>
String 4 [Votes ‘String 4 ‘]}Votes</P>
String 5[Votes ‘String 5 ‘]}Votes</P>
String 6[Votes ‘String 6 ‘]}Votes</P>
String 7 [Votes ‘String 7 ‘]}Votes</P>
String 8[Votes ‘String 8 ‘]}Votes</P>
String 9 [Votes ‘String 9 ‘]}Votes</P>
String 10 [Votes ‘String 10 ‘]}Votes</P>
String 11[Votes ‘String 11 ‘]}Votes</P>
String 12 [Votes ‘String 12 ‘]}Votes</P>
String 13 [Votes ‘String 13 ‘]}Votes</P>
String 14 [Votes ‘String 14 ‘]}Votes</P>
String 15 [Votes ‘String 15 ‘]}Votes</P>
String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
First Round  Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  First Round
<Header.Html>
Second Round
The Second Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H2 Round {Second Round} <H2>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round2
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 2:
Commence Round 2
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
String Numbers[Concatenated Strings : Name ‘String Pair1’ Votes 
Name: ‘String Pair 2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
<Subheading.Html>
Second Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
Concatenated Strings 
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
Name String5 Votes
Name String6 Votes
Name String7 Votes
Name String8 Votes
<Subheading.Html>
Second Round Concatenated String Advancing 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  Second Round
<Header.Html>
Third Round
The Third Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H3 Round {Third Round} <H3>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round3
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 3:
Commence Round 3
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
String Numbers[Concatenated Strings : Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
<Subheading.Html>
Third Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings .Slice(0,Num To 2)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
<Subheading.Html>
Third Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 2)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Third Round 
<Header.Html>
Fourth Round
The Fourth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H4 Round {Fourth Round} <H4>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name}</Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=ROUND4
Total Rounds=5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Non-Concatenated Strings : Name ‘String Pair1’ Votes 
String Numbers[Concatenated Strings :Name ‘String Pair1’ Votes 
Name String1 Votes
Name String2 Votes 
<Subheading.Html>
Fourth Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2)Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String )
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fourth Round 
<Header.Html>
Fifth Round
The Fifth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H5 Round {Fifth Round} <H5>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name} {Candidate Votes} Votes</P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round5
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Name ‘String Pair Votes‘]
Last Remaining Non-Concatenated String 
Last Remaining Concatenated String 
<Subheading.Html>
Covid Strings Fan Voting Victory
The End Result Of Fan Voting 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(Winner String)
Return Winner
Last Remaining Non-Concatenated String=Last Non-Concatenated String Variable Left In Fan Voting
Last Remaining Concatenated String=Last Concatenated String Variable Left In Fan Voting
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Last Remaining Non-Concatenated String>=.5
If Last Remaining Concatenated String>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fifth Round 
Return Filename
