/**********************************************************************
 * STS Meal Plan — printable PDF export (Web App)
 * Reads the 📋 Plan tab and renders the branded overview + recipe cards
 * as a print-ready HTML page. Coach: Extensions ▸ menu ▸ Export, then
 * Ctrl/Cmd+P ▸ Save as PDF (set Margins: None, Headers/footers: off).
 **********************************************************************/

var STS_LOGO = "data:image/png;base64,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";
var STS_BURST_PATH = "M50 2 57 13 69 6 71 20 85 17 82 31 96 34 88 46 99 55 86 61 92 74 78 72 78 87 65 81 57 96 50 84 43 96 35 81 22 87 22 72 8 74 14 61 1 55 12 46 4 34 18 31 15 17 29 20 31 6 43 13z";

/* ---- menu + web-app entry ---- */
function stsAddExportMenu_(){
  SpreadsheetApp.getUi().createMenu('📄 STS Export')
    .addItem('Open printable plan (Save as PDF)…', 'stsOpenExport')
    .addToUi();
}
function stsOpenExport(){
  var url = ScriptApp.getService().getUrl();
  if (!url){
    SpreadsheetApp.getUi().alert('The PDF export web app is not deployed yet.\n\nDeploy ▸ New deployment ▸ Web app (Execute as: Me, Access: Anyone with the link), then use this menu again.');
    return;
  }
  var html = '<script>window.open("' + url + '","_blank");google.script.host.close();<\/script>'
           + '<p style="font:14px Arial">Opening your printable plan…</p>';
  SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createHtmlOutput(html).setWidth(260).setHeight(80), 'STS Export');
}
function doGet(e){
  return HtmlService.createHtmlOutput(stsBuildPlanHtml_())
    .setTitle('STS Meal Plan')
    .addMetaTag('viewport','width=device-width, initial-scale=1');
}

/* ---- read the Plan tab into a structured plan ---- */
function stsBuildPlanHtml_(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('📋 Plan');
  var lastRow = sh.getLastRow();
  var vals = sh.getRange(1,1,lastRow,10).getValues();
  var forms = sh.getRange(1,9,lastRow,1).getFormulas();
  var TOTAL = {'MEAL TOTAL':1,'OPTION TOTAL':1};
  function cell(r,i){ return (vals[r] && vals[r][i]!=null) ? vals[r][i] : ''; }
  function num(x){ var n = parseFloat(x); return isNaN(n) ? 0 : Math.round(n); }
  function imgUrl(r){ var f=(forms[r]&&forms[r][0])||''; var m=/=IMAGE\("([^"]+)"/.exec(f); return m?m[1]:''; }

  var client = String(cell(1,1) || 'Your Plan');
  var options = [];
  for (var i=10; i<vals.length; i++){
    var b = String(cell(i,1));
    if (b.indexOf('OPTION')===0 && !TOTAL[b] && cell(i,3)){
      var meal = String(cell(i,0)), name = String(cell(i,3));
      var tier = parseInt(String(cell(i,2)).replace(/[^0-9.]/g,''),10) || 0;
      var img = imgUrl(i+1);
      var steps = stsParseMethod_(String(cell(i+1,9)||''));
      var ings = [], j = i+1;
      while (j<vals.length){
        var nm = String(cell(j,1));
        if (!nm || TOTAL[nm]) break;
        ings.push(num(cell(j,2)) + 'g ' + nm); j++;
      }
      var macro = {cal:0,protein:0,carb:0,fat:0,fibre:0}, dietary = [];
      for (var k=j; k<vals.length && k<i+12; k++){
        if (TOTAL[String(cell(k,1))]){
          macro = {cal:num(cell(k,3)),protein:num(cell(k,4)),carb:num(cell(k,5)),fat:num(cell(k,6)),fibre:num(cell(k,7))};
          dietary = String(cell(k,0)).trim().split(/[ ,]+/).filter(function(x){return x;});
          break;
        }
      }
      options.push({meal:meal,name:name,tier:tier,img:img,dietary:dietary,macro:macro,ings:ings,steps:steps});
    }
  }
  var plan = [];
  options.forEach(function(o){
    if (plan.length && plan[plan.length-1].meal===o.meal) plan[plan.length-1].options.push(o);
    else plan.push({meal:o.meal, options:[o]});
  });
  return stsRender_(client, plan);
}

/* ---- helpers ---- */
function stsEsc_(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function stsMealLabel_(m){ return String(m).replace(/\s*\d+$/,'').toUpperCase(); }
function stsParseMethod_(t){
  if (!t) return [];
  var m = /(?<!\d)1\.\s/.exec(t); if (m) t = t.slice(m.index);
  return t.split(/\s*(?<!\d)\d+\.\s+/).map(function(p){return p.trim();}).filter(function(p){return p;});
}
function stsCleanIng_(s){
  var pw = '(?:Bottle|Bottles|Can|Cans|Pack|Pkt|Pk|Tub|Jar|Bag|Box|Sachets?|Punnet|Carton|Loaf|Bunch|x\\s?\\d+)';
  var head = /^\d+(?:\.\d+)?\s?(?:g|ml|mL|kg|L)\s+/.exec(s);
  var h = head ? head[0] : '', body = s.slice(h.length), prev = null;
  var re = new RegExp('\\s*'+pw+'?\\s*\\d+(?:\\.\\d+)?\\s?(?:kg|mg|mL|ml|L|g)\\b(?=\\s*(?:\\(|$))');
  while (prev !== body){ prev = body; body = body.replace(re,'').trim(); }
  return (h + body).trim();
}
function stsTimes_(steps, nIngs){
  var text = steps.join(' '), cook = 0, m, tmp = text;
  var reRange = /(\d+)\s*-\s*(\d+)\s*min/g;
  while ((m = reRange.exec(text))) cook += parseInt(m[2],10);
  tmp = text.replace(/\d+\s*-\s*\d+\s*min\w*/g,'');
  var reOne = /~?\s*(\d+)\s*min/g;
  while ((m = reOne.exec(tmp))) cook += parseInt(m[1],10);
  var prep = nIngs<=4 ? 5 : nIngs<=8 ? 10 : nIngs<=14 ? 15 : 20;
  return {prep: prep+' min', cook: cook ? cook+' min' : '—'};
}
function stsBurst_(fill){
  return '<span class=badge><svg viewBox="0 0 100 100" class=burstsvg><path fill="'+fill+'" d="'+STS_BURST_PATH+'"/></svg><img class=slogo src="'+STS_LOGO+'"></span>';
}

/* ---- render overview + cards ---- */
function stsRender_(client, plan){
  function optCard(o, letter, multi){
    var m = o.macro;
    var lab = multi ? '<span class=optlab>Option '+letter+'</span>' : '';
    var mp = '<span class=mp style="color:#0e8a7d">'+m.cal+' cal</span>'
           + '<span class=mp style="color:#2563EB">P'+m.protein+'</span>'
           + '<span class=mp style="color:#D97706">C'+m.carb+'</span>'
           + '<span class=mp style="color:#DB2777">F'+m.fat+'</span>';
    return '<div class=opt><div class=thumb style="background-image:url(\''+o.img+'\')"></div>'
         + '<div class=optbody>'+lab+'<div class=rname>'+stsEsc_(o.name)+'</div>'
         + '<div class=mprow>'+mp+'</div></div></div>';
  }
  function cardHtml(o, meal){
    var m = o.macro, t = stsTimes_(o.steps, o.ings.length);
    var ings = o.ings.map(function(i){ return '<li><span class=dot></span><span>'+stsEsc_(stsCleanIng_(i))+'</span></li>'; }).join('');
    var steps = o.steps.map(function(s,i){ var n=(i+1<10?'0':'')+(i+1); return '<div class=step><span class=num>'+n+'</span><p>'+stsEsc_(s)+'</p></div>'; }).join('');
    var diet = o.dietary.map(function(d){ return '<span class=dchip>'+stsEsc_(d)+'</span>'; }).join('');
    return '<div class="page recipe"><div class=checker></div>'
      + '<div class=top><div class=titlewrap>'
      + '<div><div class=bubble><h1>'+stsEsc_(o.name)+'</h1></div>'+(diet?'<div class=diet>'+diet+'</div>':'')+'</div>'
      + '<div class=rightcol><div class=seclabel>'+stsMealLabel_(meal)+' '+stsBurst_('#141414')+'</div>'
      + '<div class=macros><div class=mcal><div class=lab>TOTAL CAL</div><div class=val>'+m.cal+'</div></div>'
      + '<div class=mmac><div class=lab>Protein</div><div class=val>'+m.protein+'g</div></div>'
      + '<div class=mmac><div class=lab>Carbs</div><div class=val>'+m.carb+'g</div></div>'
      + '<div class=mmac><div class=lab>Fats</div><div class=val>'+m.fat+'g</div></div>'
      + '<div class=mmac><div class=lab>Fibre</div><div class=val>'+m.fibre+'g</div></div></div></div></div></div>'
      + '<div class=hero style="background-image:url(\''+o.img+'\')"><div class=pills>'
      + '<div class=pill><div class=lab>PREP</div><div class=val>'+t.prep+'</div></div>'
      + '<div class=pill><div class=lab>COOK</div><div class=val>'+t.cook+'</div></div>'
      + '<div class=pill><div class=lab>SERVES</div><div class=val>1</div></div></div></div>'
      + '<div class=bottom><div class="col ings"><div class=sechdr>Ingredients</div><ul>'+ings+'</ul></div>'
      + '<div class=col><div class=sechdr>Cooking Instructions</div><div class=steps>'+steps+'</div></div></div>'
      + '<div class=foot><span>SET THE STANDARD</span><span>setthestandardcoaching.com</span></div></div>';
  }

  if (!plan.length){
    return '<!doctype html><meta charset=utf-8><body style="font:16px Arial;padding:40px;color:#333">'
      + 'No meals are filled in on the 📋 Plan tab yet. Add a tier and recipe to at least one meal, then run the export again.</body>';
  }

  var tot = {cal:0,protein:0,carb:0,fat:0,fibre:0};
  plan.forEach(function(meal){ var a=meal.options[0].macro; for (var k in tot) tot[k]+=a[k]; });
  var PILL = [['Cals',tot.cal,'#14B8A6'],['Protein',tot.protein+'g','#2563EB'],['Carbs',tot.carb+'g','#D97706'],['Fat',tot.fat+'g','#DB2777'],['Fibre',tot.fibre+'g','#7C3AED']];
  var pills = PILL.map(function(p){ return '<span class="pill" style="background:'+p[2]+'">'+p[1]+'<em>'+p[0]+'</em></span>'; }).join('');

  var sections = '';
  plan.forEach(function(meal){
    var opts = meal.options, multi = opts.length>1, guide = opts[0].macro.cal;
    var chip = multi ? '<span class=pickone>choose one</span>' : '<span class=single>as listed</span>';
    var cards = opts.map(function(o,i){ return optCard(o, String.fromCharCode(65+i), multi); });
    var joined = cards.join('<div class=ordiv><span>OR</span></div>');
    sections += '<section class=meal><div class=mealhdr><span class=mealname>'+stsEsc_(stsMealLabel_(meal.meal))+'</span>'
      + '<span class=mealcal>~'+guide+' cal</span>'+chip+'</div>'+joined+'</section>';
  });

  var overview = '<div class="page overview">'
    + '<div class=ohdr>'+stsBurst_('#AEDEDA')+'<div><h1>SET THE STANDARD</h1><div class=sub>NUTRITION PLAN — '+stsEsc_(client.toUpperCase())+'</div></div></div>'
    + '<div class=totals><span class=lbl>DAILY TOTAL</span>'+pills+'</div>'
    + '<div class=obody>'+sections+'</div>'
    + '<div class=ofoot><span>YOUR DAY AT A GLANCE</span><span>setthestandardcoaching.com</span></div></div>';

  var cardsHtml = '';
  plan.forEach(function(meal){ meal.options.forEach(function(o){ cardsHtml += cardHtml(o, meal.meal); }); });

  return STS_SHELL_HEAD + overview + cardsHtml + STS_SHELL_TAIL;
}

/* ---- static shell (CSS head + auto-fit tail) ---- */
var STS_SHELL_HEAD = `<!doctype html><html><head><meta charset=utf-8><title>STS Meal Plan</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
@page{size:A4;margin:0}
:root{--mint:#AEDEDA;--mintbar:#E0F5F3;--mintdeep:#3D8A82;--mintline:#5fb8ae;--dark:#161616;--teal:#14B8A6;--ink:#141414;--surface:#F7F8FA;--s:1}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{background:#5a5f66;font-family:Inter,sans-serif}
.noprint{position:sticky;top:0;z-index:9;background:#161616;color:#fff;font:600 13px Inter,Arial;padding:11px 20px;display:flex;align-items:center;gap:14px}
.noprint b{color:#AEDEDA}
.noprint button{margin-left:auto;background:#14B8A6;color:#fff;border:0;border-radius:8px;padding:9px 16px;font:700 13px Inter,Arial;cursor:pointer}
@media print{.noprint{display:none!important}}
.page{width:210mm;height:297mm;background:#fff;position:relative;overflow:hidden;display:flex;flex-direction:column;page-break-after:always;margin:0 auto}
.badge{position:relative;display:inline-block;width:46px;height:46px;flex:0 0 46px}
.burstsvg{width:46px;height:46px;display:block}
.slogo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:24px}
.overview .ohdr{background:var(--dark);color:#fff;padding:16px 30px;display:flex;align-items:center;gap:16px}
.overview .ohdr h1{font-family:'Exo 2';font-weight:800;font-size:22px;letter-spacing:.06em;margin:0;line-height:1}
.overview .sub{font-family:'Exo 2';font-weight:600;color:var(--mint);font-size:12px;letter-spacing:.14em;margin-top:5px}
.overview .badge .slogo{width:26px}
.totals{background:var(--mintbar);padding:10px 30px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.totals .lbl{font-family:'Exo 2';font-weight:600;font-size:11px;letter-spacing:.12em;color:#2c6b64;margin-right:6px}
.pill{color:#fff;font-weight:700;font-size:15px;border-radius:20px;padding:5px 13px;display:inline-flex;align-items:baseline;gap:6px}
.pill em{font-style:normal;font-weight:600;font-size:10px;opacity:.9;letter-spacing:.05em}
.obody{padding:16px 30px 8px;flex:1 1 auto;display:flex;flex-direction:column;justify-content:space-between}
.meal{margin-bottom:6px}
.mealhdr{display:flex;align-items:center;gap:12px;border-bottom:2px solid var(--mint);padding-bottom:6px;margin-bottom:9px}
.mealname{font-family:'Exo 2';font-weight:800;font-size:16px;letter-spacing:.06em;color:#1a1a1a}
.mealcal{font-size:12px;color:#6b7280;font-weight:600}
.pickone{margin-left:auto;background:var(--mintdeep);color:#fff;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:12px}
.single{margin-left:auto;color:#9aa1a9;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
.opt{display:flex;gap:14px;align-items:center;background:var(--surface);border:1px solid #eceef0;border-radius:12px;padding:11px}
.thumb{width:84px;height:84px;flex:0 0 84px;border-radius:9px;background-size:cover;background-position:center;background-color:#ddd}
.optbody{flex:1;min-width:0}
.optlab{font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--mintdeep)}
.rname{font-weight:700;font-size:17px;color:#15181c;margin:2px 0 6px}
.mprow{display:flex;gap:13px}
.mp{font-weight:700;font-size:13px}
.ordiv{display:flex;align-items:center;justify-content:center;height:16px;position:relative;margin:2px 0}
.ordiv:before{content:"";position:absolute;left:40px;right:40px;top:50%;height:1px;background:#e0e3e6}
.ordiv span{position:relative;background:#fff;color:#9aa1a9;font-weight:700;font-size:10px;letter-spacing:.14em;padding:0 12px}
.ofoot{flex:0 0 auto;padding:10px 30px;display:flex;justify-content:space-between;font-family:'Exo 2';font-weight:600;font-size:10px;letter-spacing:.1em;color:#b7bcc2;border-top:1px solid #eee}
.checker{height:14px;flex:0 0 14px;background:repeating-conic-gradient(#141414 0% 25%, #fff 0% 50%) 0 0/14px 14px}
.top{padding:20px 30px 0;flex:0 0 auto}
.titlewrap{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.bubble{background:var(--mint);border-radius:20px;padding:calc(15px*var(--s)) 24px;max-width:430px;display:inline-block}
.bubble h1{font-family:'Exo 2';font-weight:800;font-size:calc(35px*var(--s));line-height:1.02;margin:0;color:var(--ink);letter-spacing:-.01em}
.diet{margin-top:9px;display:flex;gap:6px;flex-wrap:wrap}
.dchip{background:#eef7f6;border:1px solid #cfe8e5;color:#2c6b64;font-weight:700;font-size:10px;letter-spacing:.05em;padding:3px 9px;border-radius:11px}
.rightcol{text-align:right;min-width:220px}
.seclabel{display:inline-flex;align-items:center;gap:9px;font-family:'Exo 2';font-weight:800;font-size:20px;letter-spacing:.04em;color:var(--ink)}
.macros{background:var(--dark);border-radius:14px;padding:11px 16px;margin-top:11px;display:flex;gap:14px;align-items:center;justify-content:flex-end}
.mcal{background:var(--teal);border-radius:10px;padding:6px 12px;text-align:center}
.mcal .lab{color:#eafffb;font-size:8px;font-weight:700;letter-spacing:.06em;line-height:1.1}
.mcal .val{color:#fff;font-family:'Exo 2';font-weight:800;font-size:22px;line-height:1}
.mmac{text-align:center}
.mmac .lab{color:#9aa0a6;font-size:9px;font-weight:600}
.mmac .val{color:#fff;font-weight:700;font-size:15px}
.hero{margin:14px 30px 0;flex:0 0 auto;height:var(--heroH,360px);border-radius:16px;background-size:cover;background-position:center;position:relative;box-shadow:0 6px 20px rgba(0,0,0,.15)}
.pills{position:absolute;right:14px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:10px}
.hero .pill{background:rgba(174,222,218,.95);border-radius:14px;padding:7px 14px;text-align:center;min-width:94px;color:inherit;display:block}
.hero .pill .lab{font-size:9px;font-weight:600;letter-spacing:.05em;color:#2c6b64}
.hero .pill .val{font-family:'Exo 2';font-weight:800;font-size:16px;color:var(--ink)}
.bottom{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:262px 1fr;gap:22px;padding:18px 30px 14px}
.col{display:flex;flex-direction:column;min-height:0}
.sechdr{background:var(--mint);border-radius:12px;padding:9px 16px;font-family:'Exo 2';font-weight:700;font-size:17px;color:var(--ink);margin-bottom:10px;flex:0 0 auto}
.ings ul{list-style:none;padding:0;margin:0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-start;gap:calc(13px*var(--s))}
.ings li{font-size:calc(12.5px*var(--s));font-weight:600;color:#2a2e33;line-height:1.25;display:flex;gap:9px;align-items:flex-start}
.dot{margin-top:calc(5px*var(--s));width:7px;height:7px;border-radius:50%;background:var(--mintline);flex:0 0 7px}
.steps{flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-start;gap:calc(17px*var(--s))}
.step{display:flex;gap:10px;align-items:flex-start}
.step .num{font-family:'Exo 2';font-weight:800;font-size:15px;color:var(--mintline);flex:0 0 auto;line-height:1.2}
.step p{margin:0;font-size:calc(12.5px*var(--s));line-height:1.5;color:#31363b}
.foot{flex:0 0 auto;padding:6px 30px;display:flex;justify-content:space-between;font-family:'Exo 2';font-weight:600;font-size:10px;letter-spacing:.1em;color:#b7bcc2}
.recipe:last-child{page-break-after:auto}
</style></head><body>
<div class="noprint">Your plan is ready. <span>Click <b>Print</b>, then choose <b>Save as PDF</b> — set Margins: <b>None</b> and turn <b>Headers/footers off</b> for a clean export.</span><button onclick="window.print()">Print / Save as PDF</button></div>`;

var STS_SHELL_TAIL = `<script>
document.querySelectorAll('.page.recipe').forEach(function(card){
  var H=card.clientHeight, hero=card.querySelector('.hero'), foot=card.querySelector('.foot');
  var cols=[card.querySelector('.ings ul'), card.querySelector('.steps')];
  var MARGIN=46;
  function overflow(){ return card.scrollHeight - H; }
  function slack(){ var low=0; cols.forEach(function(c){var k=c.lastElementChild; if(k) low=Math.max(low,k.getBoundingClientRect().bottom);}); return foot.getBoundingClientRect().top-low; }
  var heroH=300; function setHero(v){heroH=v;hero.style.setProperty('--heroH',v+'px');} setHero(heroH);
  var g=0; while(overflow()<=0 && slack()>MARGIN && heroH<470 && g++<90){ setHero(heroH+6); }
  var steps=card.querySelector('.steps'), ingl=card.querySelector('.ings ul'), g3=0;
  while(overflow()<=0 && slack()>MARGIN && g3++<80){
    var sg=parseFloat(getComputedStyle(steps).gap)||17, ig=parseFloat(getComputedStyle(ingl).gap)||13;
    if(sg>=46 && ig>=30) break;
    if(sg<46) steps.style.gap=(sg+3)+'px';
    if(ig<30) ingl.style.gap=(ig+2)+'px';
  }
  var g1=0; while(overflow()>0 && heroH>250 && g1++<90){ setHero(heroH-6); }
  var s=1,g2=0; while(overflow()>0 && s>0.72 && g2++<40){ s-=0.02; card.style.setProperty('--s',s.toFixed(3)); }
});
(function(){
  var ov=document.querySelector('.overview'); if(!ov) return;
  var body=ov.querySelector('.obody');
  var need=body.scrollHeight, avail=body.clientHeight;
  if(need>avail+1){ var k=avail/need; body.style.transformOrigin='top left'; body.style.transform='scale('+k.toFixed(4)+')'; body.style.width=(100/k).toFixed(2)+'%'; }
})();
<\/script></body></html>`;
