
'use strict';
const assets={hero:"image-1.webp",logo:"image-2.webp",celebrate:"image-3.webp",avatar:"image-4.webp",city:"image-5.webp",google:"image-6.webp",apple:"image-7.webp"};
const data=[
{duration:5000,title:"The first hello",caption:"An invitation to become part of the team.",group:0},
{duration:4500,title:"A little about you",caption:"A few details to start building a player profile.",group:1},
{duration:3000,title:"Made for you",caption:"A clear choice with immediate feedback.",group:1},
{duration:3500,title:"Stay connected",caption:"A phone number to keep players connected.",group:1},
{duration:3500,title:"You're verified",caption:"Six digits and a reassuring confirmation.",group:1},
{duration:3000,title:"A familiar face",caption:"A familiar face makes the profile feel personal.",group:1},
{duration:4000,title:"Closer to the game",caption:"Location connects each player with their community.",group:2},
{duration:4500,title:"Find your rhythm",caption:"Your city, your sport, and your skill level.",group:2},
{duration:3500,title:"More ways to play",caption:"An invitation to discover another way to play.",group:2},
{duration:5500,title:"You're in.",caption:"Onboarding ends. The game begins.",group:3}
];
let acc=0;data.forEach(s=>{s.start=acc;acc+=s.duration});const total=acc;
const $=s=>document.querySelector(s);
const heading=(step,title,desc)=>'<div class="heading rise"><span class="step">'+step+'</span><h2>'+title+'</h2><p>'+desc+'</p></div>';
const field=(label,value,id)=>'<div class="field rise" style="--i:2"><label>'+label+'</label><div class="input" data-focus="'+id+'"><span class="typed" data-type="'+id+'" data-value="'+value+'"></span><span class="cross">×</span></div></div>';
function tabs(index){return '<div class="back" aria-hidden="true">‹</div><div class="tabs" style="--p:'+[0,11,22,33,40,55,67,89,100][index]+'%"><span class="'+(index<6?'current':'')+'">The Basics '+(index>=6?'<span class="check">●</span>':'')+'</span><span class="'+(index>=6?'current':'')+'">Your Game</span></div>'}
const bottom=(label='Continue',extra='')=>'<div class="bottom"><button class="cta" data-next>'+label+'</button>'+extra+'</div>';
const radio='<span class="radio"></span>';
const citycard=()=>'<div class="citycard rise" style="--i:2"><img src="'+assets.city+'" alt="Austin at sunset"><div class="citytitle"><span>⌖</span><div>Austin, TX<small>Closest city with games</small></div><span class="change">Change</span></div><div class="citystats"><div>▦ &nbsp;24<small>games this week</small></div><div>♧ &nbsp;4.8k<small>players on GoodRec</small></div></div></div>';
function template(index){let h='';
if(index===0)return '<section class="screen welcome enter"><img class="hero-image" src="'+assets.hero+'" alt="GoodRec teammates playing soccer"><div class="shade"></div><img class="welcome-logo rise" src="'+assets.logo+'" alt="GoodRec"><div class="welcome-body"><h2 class="rise">Sports games near you</h2><div class="signin"><button class="social rise" style="--i:2" data-next><img src="'+assets.google+'" alt="">Continue with Google</button><button class="social rise" style="--i:3" data-next><img src="'+assets.apple+'" alt="">Continue with Apple</button><div class="or rise" style="--i:4">or use email</div><button class="cta rise" style="--i:5" data-next>Continue with email</button><p class="legal rise" style="--i:6">By signing up, you agree to our Privacy Policy and Terms &amp; Conditions</p></div></div></section>';
if(index===9){const confetti=Array.from({length:35},(_,i)=>'<i style="--x:'+((i*37)%100)+'%;--c:'+['#d63b41','#fff','#e8a26f'][i%3]+';--d:'+(i%7)*.12+'s;--r:'+(i*47)+'deg"></i>').join('');return '<section class="screen finish enter"><img class="hero-image" src="'+assets.celebrate+'" alt="GoodRec players celebrating"><div class="shade"></div><div class="finish-body"><h2 class="rise">You’re ready to play</h2><p class="rise" style="--i:2">Discover nearby games and start playing with your community.</p></div><div class="confetti" aria-hidden="true">'+confetti+'</div>'+bottom('Replay walkthrough')+'</section>'}
if(index===1)h=heading('Step 1 of 4','What’s your name?','Add your name and date of birth to set up your player profile.')+'<div class="fields">'+field('First name','Jane','first')+field('Last name','López','last')+'<div class="field rise" style="--i:4"><label>Date of birth</label><div class="input"><span data-birth>MM/DD/YYYY</span><span>▦</span></div></div><p class="helper rise" style="--i:5">You must be 18+ to participate in games.</p></div>';
if(index===2)h=heading('Step 2 of 4','What’s your gender?','This helps us show you the right games.')+'<div class="choices">'+['Female','Male','Prefer not to say'].map((v,i)=>'<div class="choice rise" style="--i:'+(i+2)+'" data-choice="'+i+'">'+v+radio+'</div>').join('')+'</div>';
if(index===3)h=heading('Step 3 of 4','What’s your phone number?','We’ll use your phone number to keep you updated about your games.')+'<div class="field rise" style="--i:2"><label>Phone number</label><div class="input" data-focus="phone"><span>🇺🇸 +1 &nbsp;⌄</span><span class="typed" data-type="phone" data-value="415 555-0123"></span></div></div>';
if(index===4)h=heading('Step 3 of 4','Verify your phone number','Enter the 6-digit code we sent to<br>+1 415 555-0123.')+'<div class="otp rise" style="--i:2">'+Array.from({length:6},(_,i)=>'<span class="digit" data-digit="'+i+'"></span>').join('')+'</div><div class="verified off"><span class="verify-icon">✓</span>Phone number verified</div>';
if(index===5)h=heading('Step 4 of 4','Add a profile photo','Optional. Help teammates recognize you.')+'<div class="avatar-zone rise" style="--i:2"><div class="avatar-ring wait"><img src="'+assets.avatar+'" alt="Demo profile photo"><span class="badge">✓</span></div><button class="secondary" data-photo>Change photo</button></div>';
if(index===6)h=heading('Step 1 of 2','Where do you play?','Find games near you.')+'<button class="location rise" style="--i:2" data-next>⌖ &nbsp;Use my current location</button><div class="search rise" style="--i:3">⌕ &nbsp;<span class="typed" data-type="city" data-value="Austin, TX"></span></div><div class="locate-dots rise" style="--i:4"><div class="locate-target">⌖</div></div><p style="font-size:14px;text-align:center;color:#888780" data-location>Finding games near you…</p>';
if(index===7)h=heading('Step 1 of 2','Where do you play?','Find games near you.')+citycard()+'<div class="mini-heading rise" style="--i:3"><h3>Which do you want to play?</h3><p>Select your main sport</p></div><div class="sport-grid">'+['⚽ Soccer','🏀 Basketball','🏐 Volleyball','🏓 Pickleball'].map((v,i)=>'<div class="sport-option rise" style="--i:'+(i+4)+'" data-sport="'+i+'">'+v+radio+'</div>').join('')+'</div><div class="mini-heading rise" style="--i:6"><h3>What’s your level?</h3><div class="skill"><span data-skill>Select your skill level</span><span>⌄</span></div></div>';
if(index===8)h=heading('Step 2 of 2','Anything else you’d play?','Optional. Tell us what you’d like to play next.')+'<div class="chips">'+['🏀 Basketball','🏐 Volleyball','🏓 Pickleball','🥎 Softball','🏈 Flag Football','🟡 Kickball','🔵 Ultimate Frisbee','🏏 Cricket','🏸 Badminton','🤾 Dodgeball','🥍 Lacrosse','🏉 Touch Rugby','🏑 Field Hockey'].map((v,i)=>'<span class="chip rise" style="--i:'+Math.min(i+2,8)+'" data-chip="'+i+'">'+v+'</span>').join('')+'</div>';
return '<section class="screen enter">'+tabs(index)+'<div class="content '+(index===7?'sport-content':'')+'">'+h+'</div>'+(index===4?'<div class="bottom"><span class="skip" style="color:#888780">Resend code in 59 seconds</span></div>':index===8?'<div class="bottom"><button class="skip skip-button" type="button" data-next>Skip for now</button><button class="cta" data-next>Continue</button></div>':bottom())+'</section>';
}
let current=-1,position=0,last=null,playing=false,speed=1;
let reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,raf=null;
const root=$('body'),screens=$('#screens');
$('#brand-logo').src=assets.logo;
root.classList.toggle('reduced',reduced);
let sceneAnimations=[],photoOverride=false;
function updateControls(){
 $('#play').textContent=playing?'Ⅱ':'▶\uFE0E';
 $('#play').setAttribute('aria-label',playing?'Pause':'Play');
 $('#play').setAttribute('aria-pressed',String(playing));
 $('#motion').textContent=reduced?'Reduced motion':'Full motion';
 $('#motion').setAttribute('aria-pressed',String(reduced));
}
function schedule(){if(playing&&raf===null&&!document.hidden)raf=requestAnimationFrame(tick);}
function setPlaying(value){
 playing=Boolean(value);last=null;
 if(!playing&&raf!==null){cancelAnimationFrame(raf);raf=null;}
 root.classList.toggle('paused',!playing);updateControls();schedule();
}
function mount(index){
 current=index;photoOverride=false;
 screens.innerHTML=template(index);
 const active=screens.lastElementChild;
 active.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>{
  if(index===9){position=0;last=null;render();setPlaying(true);}
  else goTo(index+1);
 }));
 const photo=active.querySelector('[data-photo]');
 if(photo)photo.addEventListener('click',()=>{
  photoOverride=!photoOverride;
  active.querySelector('.avatar-ring').classList.toggle('wait',photoOverride);
  photo.textContent=photoOverride?'Restore demo photo':'Change photo';
 });
 $('#phone').classList.toggle('dark',index===0||index===9);
 $('#status-time').textContent=index===0||index===9?'1:47':'9:41';
 $('#scene-count').textContent=String(index+1).padStart(2,'0')+' / '+data.length;
 $('#scene-title').textContent=data[index].title;
 $('#scene-caption').textContent=data[index].caption;
 document.querySelectorAll('.chapter').forEach((chapter,i)=>{
  chapter.classList.toggle('active',i===data[index].group);
  chapter.classList.toggle('done',i<data[index].group);
  if(i===data[index].group)chapter.setAttribute('aria-current','step');
  else chapter.removeAttribute('aria-current');
 });
 $('#announce').textContent=data[index].title;
 // A single timeline drives both CSS motion and the simulated form state.
 sceneAnimations=active.getAnimations({subtree:true});
 sceneAnimations.forEach(animation=>animation.pause());
}
function animateLocal(local){
 const active=screens.lastElementChild;if(!active)return;
 // Reduced motion presents a completed, readable still for each scene.
 const time=reduced?data[current].duration:local;
 active.querySelectorAll('[data-type]').forEach(element=>{
  const start=element.dataset.type==='last'?1900:700;
  const length=Math.max(0,Math.min(element.dataset.value.length,Math.floor((time-start)/85)));
  element.textContent=element.dataset.value.slice(0,length);
  element.classList.toggle('complete',length===element.dataset.value.length);
 });
 active.querySelectorAll('[data-focus]').forEach(element=>{
  const id=element.dataset.focus;
  const focused=!reduced&&(id==='first'?time>=600&&time<1800:id==='last'?time>=1800&&time<3000:time>=600&&time<2000);
  element.classList.toggle('focus',focused);
 });
 const birth=active.querySelector('[data-birth]');
 if(birth)birth.textContent=time>=3000?'03/05/1996':'MM/DD/YYYY';
 const choice=active.querySelector('[data-choice="0"]');
 if(choice)choice.classList.toggle('selected',time>=1100);
 active.querySelectorAll('[data-digit]').forEach((element,i)=>{
  const filled=time>=550+i*240;element.textContent=filled?'457777'[i]:'';element.classList.toggle('filled',filled);
 });
 const verified=active.querySelector('.verified');if(verified)verified.classList.toggle('off',time<2350);
 const avatar=active.querySelector('.avatar-ring');if(avatar)avatar.classList.toggle('wait',photoOverride||time<600);
 const location=active.querySelector('[data-location]');if(location)location.textContent=time>=2500?'Austin, TX · Location found':'Finding games near you…';
 const soccer=active.querySelector('[data-sport="0"]');if(soccer)soccer.classList.toggle('selected',time>=1200);
 const scroll=active.querySelector('.sport-content');
 if(scroll)scroll.scrollTop=Math.max(0,Math.min(1,(time-2200)/850))*(scroll.scrollHeight-scroll.clientHeight);
 const skill=active.querySelector('[data-skill]');if(skill)skill.textContent=time>=2200?'⚽  Soccer · Intermediate':'Select your skill level';
 active.querySelectorAll('[data-chip]').forEach((element,i)=>element.classList.toggle('selected',(i===0&&time>=900)||(i===2&&time>=1500)));
 // Explicit times make seek, speed changes and pause deterministic. Avoid the
 // old CTA pulse, which was restarted independently of the playback position.
 const known=new Set(sceneAnimations);
 active.getAnimations({subtree:true}).forEach(animation=>{
  if(!known.has(animation)){animation.pause();sceneAnimations.push(animation);}
 });
 sceneAnimations=sceneAnimations.filter(animation=>animation.effect?.target?.isConnected);
 sceneAnimations.forEach(animation=>{
  animation.pause();
  const timing=animation.effect.getComputedTiming();
  const settled=reduced||(!playing&&local===0);
  animation.currentTime=settled?(Number.isFinite(timing.endTime)?timing.endTime:0):local;
 });
}
function formatTime(ms){const seconds=Math.floor(ms/1000);return String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');}
function render(){
 const index=Math.max(0,Math.min(data.length-1,data.findLastIndex(scene=>position>=scene.start)));
 if(index!==current)mount(index);
 animateLocal(position-data[index].start);
 $('#seek').value=position;
 $('#seek').setAttribute('aria-valuetext',formatTime(position)+' of '+formatTime(total));
 $('#time').textContent=formatTime(position)+' / '+formatTime(total);
}
function tick(now){
 raf=null;if(!playing)return;
 if(last!==null)position=Math.min(total,position+Math.max(0,now-last)*speed);
 last=now;render();
 if(position>=total)setPlaying(false);else schedule();
}
function goTo(index){position=data[Math.max(0,Math.min(data.length-1,index))].start;last=null;render();}
$('#play').onclick=()=>{if(position>=total){position=0;last=null;render();}setPlaying(!playing);};
$('#restart').onclick=()=>{position=0;last=null;render();setPlaying(true);};
$('#seek').max=total;
$('#seek').addEventListener('input',event=>{
 position=Math.max(0,Math.min(total,Number(event.target.value)));last=null;render();
 if(position>=total)setPlaying(false);
});
$('#speed').onchange=event=>{speed=Number(event.target.value);last=null;};
document.querySelectorAll('[data-chapter]').forEach(button=>button.onclick=()=>goTo(Number(button.dataset.chapter)));
$('#cinema').onclick=()=>{
 const on=root.classList.toggle('cinema');
 $('#cinema').textContent=on?'Exit cinema mode ↙':'Cinema mode ↗';
 $('#cinema').setAttribute('aria-pressed',String(on));
};
$('#motion').onclick=()=>{
 reduced=!reduced;root.classList.toggle('reduced',reduced);
 current=-1;render();updateControls();
};
document.addEventListener('keydown',event=>{
 if(event.target.matches('input,select,textarea,button,[contenteditable="true"]'))return;
 if(event.code==='Space'){event.preventDefault();$('#play').click();}
 if(event.key==='ArrowRight'){event.preventDefault();goTo(current+1);}
 if(event.key==='ArrowLeft'){event.preventDefault();goTo(current-1);}
 if(event.key.toLowerCase()==='r')$('#restart').click();
 if(event.key==='Escape'&&root.classList.contains('cinema'))$('#cinema').click();
});
document.addEventListener('visibilitychange',()=>{
 last=null;if(document.hidden&&raf!==null){cancelAnimationFrame(raf);raf=null;}else schedule();
});
function fitPhone(){
 if(innerWidth<=850)document.documentElement.style.setProperty('--phone-scale',String(Math.min(.62,(innerWidth-64)/390)));
 else document.documentElement.style.removeProperty('--phone-scale');
}
addEventListener('resize',fitPhone);fitPhone();
window.goodrecDemo={
 seek(ms){if(!Number.isFinite(ms))return;position=Math.max(0,Math.min(total,ms));last=null;render();if(position>=total)setPlaying(false);},
 pause(){setPlaying(false);},
 play(){if(position>=total){position=0;render();}setPlaying(true);},
 get state(){return {position,current,playing,total,reduced};}
};
render();setPlaying(false);
