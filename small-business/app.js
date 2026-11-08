'use strict';
const machines = {
  xrf: {name:'XRF', reason:'A desktop RF direction to explore for personalized gifts and detailed engraving.'},
  cobra: {name:'Cobra Series', reason:'A workshop direction to explore for wood and acrylic cutting, signs and decor.'},
  vertigo: {name:'VertiGo', reason:'A dedicated rotary direction to explore for coated tumblers and cups.'},
  hydra: {name:'Hydra Gen2', reason:'A configuration to discuss when an established workshop needs a different production setup.'}
};
const track = (event, detail) => document.dispatchEvent(new CustomEvent('onelaser:interaction', {detail:{event,...detail}}));
function showMatch() {
  const business = document.querySelector('#business').value;
  const stage = document.querySelector('#stage').value;
  const result = document.querySelector('#match');
  result.hidden = false;
  if (business === 'metal') {
    result.innerHTML = '<p class="eyebrow">LET’S CONFIRM THE PROCESS FIRST</p><h3>Start with an expert.</h3><p>Bare-metal marking and cutting require an application-specific assessment. Share the alloy, thickness, dimensions and finish you need before choosing a laser.</p><a href="#consult">Prepare your project brief ↗</a>';
  } else {
    let best = business === 'drinkware' ? 'vertigo' : business === 'signs' ? 'cobra' : 'xrf';
    let alt = best === 'xrf' ? 'cobra' : 'xrf';
    if(stage === 'growing' && business !== 'drinkware') {alt = best;best = 'hydra';}
    const anchor = best === 'hydra' ? 'https://www.1laser.com/products/hydra-7-gen-2-70w-rf-co2-dual-laser-machine' : '#'+best;
    result.innerHTML = `<p class="eyebrow">YOUR STARTING POINT</p><h3>${machines[best].name}</h3><p>${machines[best].reason}</p><a href="${anchor}">Explore ${machines[best].name} ↗</a><p><strong>Also consider: ${machines[alt].name}.</strong> ${machines[alt].reason}</p><p class="fine">Confirm your exact material, work area, accessories and order workflow with OneLaser. This shortlist does not establish compatibility or production capacity.</p><a href="#consult">Discuss my setup ↗</a>`;
  }
  track('finder_complete',{business,stage});
}
document.querySelector('#finder-form').addEventListener('submit', event => {event.preventDefault();showMatch();});
document.querySelectorAll('[data-scene]').forEach(anchor => anchor.addEventListener('click', () => {document.querySelector('#business').value=anchor.dataset.scene;document.querySelector('#match').hidden=true;}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('[data-category]').forEach(item => {item.hidden=button.dataset.filter!=='all' && item.dataset.category!==button.dataset.filter;if(!item.hidden)count++;});
  document.querySelector('#gallery-status').textContent=`${count} project ideas`;
  track('gallery_filter',{filter:button.dataset.filter});
}));
document.querySelectorAll('.product-link').forEach(anchor => anchor.addEventListener('click',()=>track('product_click',{url:anchor.href})));
document.querySelector('#brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello OneLaser team,\n\nI'd like help planning a small business laser setup.\n\nProducts: ${data.get('product').trim()}\nMaterial: ${data.get('material').trim()}\nLargest item size: ${data.get('size').trim()}\nOther requirements: ${data.get('notes').trim() || 'To discuss'}\n\nPlease help me confirm material compatibility, the right machine configuration, required accessories, workspace requirements and a complete setup quote.\n\nThank you.`;
  document.querySelector('#email-copy').value=message;
  const url='mailto:cs@1laser.com?subject='+encodeURIComponent('Small business setup consultation')+'&body='+encodeURIComponent(message);
  document.querySelector('#email-link').href=url;
  document.querySelector('#email-ready').hidden=false;
  document.querySelector('#copy-brief').textContent='Copy brief';
  // No personal brief content is included in the interaction event.
  track('brief_prepared',{});
  window.location.href=url;
});
document.querySelector('#copy-brief').addEventListener('click',async event => {
  const area=document.querySelector('#email-copy');
  const button=event.currentTarget;
  try{await navigator.clipboard.writeText(area.value);button.textContent='Copied';}catch{area.focus();area.select();button.textContent='Select text and copy';}
});
