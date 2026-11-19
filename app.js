const tg = window.Telegram?.WebApp;
tg?.ready(); tg?.expand();
const $ = s => document.querySelector(s);
let selected = "";
let allCategories = [];
async function loadCategories(){
  allCategories = await (await fetch('/api/categories')).json();
  const nav = $('#categories'); nav.innerHTML = '';
  [['Все',''],...allCategories.map(c=>[c,c])].forEach(([label,value])=>{
    const b=document.createElement('button'); b.className='chip'+(selected===value?' active':'');
    b.textContent=label; b.onclick=()=>{selected=value;loadCategories();loadApps()};
    nav.appendChild(b);
  });
}
async function loadApps(){
  const q=$('#search').value.trim();
  const params=new URLSearchParams(); if(q)params.set('q',q);if(selected)params.set('category',selected);
  const items=await (await fetch('/api/apps?'+params)).json();
  $('#count').textContent=items.length+' шт.';
  $('#empty').classList.toggle('hidden',items.length!==0);
  const box=$('#apps');box.innerHTML='';
  items.forEach(item=>{
    const card=document.createElement('article');card.className='card';
    const img=document.createElement('img');img.className='icon';img.src=item.icon_url||'https://placehold.co/96x96/e8edf5/53627b?text=APP';img.alt='';
    const info=document.createElement('div');info.className='info';
    const name=document.createElement('div');name.className='name';name.textContent=item.name;
    const desc=document.createElement('div');desc.className='desc';desc.textContent=item.description;
    const meta=document.createElement('div');meta.className='meta';meta.textContent=`${item.category} · ★ ${Number(item.rating).toFixed(1)}${item.size?' · '+item.size:''}`;
    const actions=document.createElement('div');actions.className='actions';
    const a=document.createElement('a');a.className='button'+(item.official_url?'':' disabled');a.textContent=item.official_url?'Официальный источник':'Ссылка не добавлена';
    if(item.official_url){a.href=item.official_url;a.target='_blank';a.rel='noopener noreferrer';}else{a.href='#';a.onclick=e=>e.preventDefault();}
    actions.appendChild(a);info.append(name,desc,meta,actions);card.append(img,info);box.appendChild(card);
  });
}
$('#search').addEventListener('input',loadApps);
loadCategories().then(loadApps);
