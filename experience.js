(()=>{
  const pages=['inicio','menu','bowl','club','cuenta'];
  const getPage=()=>pages.includes(location.hash.slice(1))?location.hash.slice(1):'inicio';
  function filter(category){
    const value=['todos','bowls','bebidas','despensa'].includes(category)?category:'todos';
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));
    document.querySelectorAll('#catalog [data-category]').forEach(card=>card.hidden=value!=='todos'&&card.dataset.category!==value);
  }
  function go(page,{write=true,focus=true,auth=false}={}){
    if(!pages.includes(page))return;
    document.querySelectorAll('.gv-page').forEach(p=>p.hidden=p.id!=='page-'+page);
    document.querySelectorAll('.site-nav [data-go],.gv-mobile-tabbar [data-go]').forEach(b=>{if(b.dataset.go===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
    if(write&&location.hash!=='#'+page)history.pushState({page},'',location.pathname+location.search+'#'+page);
    window.scrollTo({top:0,behavior:'instant'});
    if(page==='cuenta')showFavorites();
    if(focus)requestAnimationFrame(()=>{
      if(auth){const target=document.getElementById('email');target?.scrollIntoView({block:'center'});target?.focus({preventScroll:true});}
      else{const target=document.querySelector('#page-'+page+' h2');target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});}
    });
  }
  document.addEventListener('click',event=>{
    const b=event.target.closest('[data-go]');
    if(!b)return;
    go(b.dataset.go,{auth:b.dataset.authJump==='1'});
    if(b.dataset.base)document.dispatchEvent(new CustomEvent('gv:apply-mix',{detail:{base:b.dataset.base}}));
    if(b.dataset.showCategory)filter(b.dataset.showCategory);
  });
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
  window.addEventListener('popstate',()=>go(getPage(),{write:false}));
  window.addEventListener('hashchange',()=>{if(pages.includes(location.hash.slice(1)))go(getPage(),{write:false});});
  const motion=document.getElementById('motion-toggle');
  motion?.addEventListener('click',()=>{
    const paused=document.body.classList.toggle('motion-paused');
    motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Activar movimiento':'Pausar movimiento';
  });
  function showFavorites(){
    const container=document.getElementById('local-favorites');if(!container)return;
    let saved=[];
    try{const value=JSON.parse(localStorage.getItem('grano_vive_bowls')||'[]');if(Array.isArray(value))saved=value.filter(x=>x&&['Griego','Kéfir','Avena'].includes(x.base)&&Array.isArray(x.toppings)&&x.toppings.every(t=>typeof t==='string')&&typeof x.size==='string').slice(-50).reverse();}catch{}
    container.replaceChildren();document.getElementById('favorite-count').textContent=saved.length+(saved.length===1?' bowl':' bowls');
    if(!saved.length){const p=document.createElement('p');p.textContent='Aún no hay favoritas aquí. Crea un bowl y pulsa “Guardar mi bowl”.';container.append(p);return;}
    saved.forEach(item=>{
      const card=document.createElement('article');card.className='favorite-item';
      const title=document.createElement('strong');title.textContent='Bowl de '+item.base;
      const detail=document.createElement('p');detail.textContent=item.toppings.join(' · ')||'Solo la base';
      const button=document.createElement('button');button.type='button';button.className='secondary';button.textContent='Volver a mezclar ↗';
      button.onclick=()=>{go('bowl');document.dispatchEvent(new CustomEvent('gv:apply-mix',{detail:item}));};
      card.append(title,detail,button);container.append(card);
    });
  }
  document.addEventListener('gv:mix-saved',showFavorites);
  window.addEventListener('storage',event=>{if(event.key==='grano_vive_bowls')showFavorites();});
  go(getPage(),{write:false,focus:false});
})();
