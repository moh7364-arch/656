
window.addEventListener('DOMContentLoaded',()=>{
  const quickCity=qs('#quickCity'), quickType=qs('#quickType');
  if(quickCity) quickCity.innerHTML=`<option value="">كل المدن</option>${cities.map(c=>`<option>${c}</option>`).join('')}`;
  if(quickType) quickType.innerHTML=`<option value="">كل الأنواع</option>${propertyTypes.map(t=>`<option>${t}</option>`).join('')}`;
  qs('#heroPropertiesCount').textContent=getProperties().length;
  const featured=getProperties().filter(x=>x.featured).slice(0,6); qs('#featuredGrid').innerHTML=featured.map(renderPropertyCard).join(''); bindFavoriteButtons(qs('#featuredGrid'));
  qs('#sampleChips').innerHTML=getConversationSamples().map(t=>`<button class="sample-chip">${t}</button>`).join(''); setupAiChat();
  qs('#quickSearchForm').addEventListener('submit',e=>{e.preventDefault(); const params=new URLSearchParams(); [['city',quickCity.value],['budget',qs('#quickBudget').value],['guests',qs('#quickGuests').value],['type',quickType.value]].forEach(([k,v])=>v&&params.set(k,v)); location.href=`properties.html?${params.toString()}`; });
});
