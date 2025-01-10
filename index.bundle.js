(()=>{"use strict";const e=[{type:"number",key:"numOfIcons",label:"Number of Icons",input:"true"},{type:"textfield",key:"filledColor",label:"Filled Color",input:"true"},{type:"textfield",key:"unfilledColor",label:"UnFilled Color",input:"true"},{type:"textfield",key:"iconHeight",label:"Icon Height",input:"true"},{type:"textfield",key:"iconWidth",label:"Icon Width",input:"true"},{type:"textarea",key:"icon",label:"Icon",input:!0},{key:"placeholder",ignore:!0}];function t(...t){return Formio.Components.baseEditForm([{key:"data",ignore:!0},{key:"display",components:e},{key:"validation",ignore:!0}],...t)}const n=Formio.Components.components.field;class r extends n{static editForm=t;static schema(...e){return n.schema({type:"rating",label:"rating",key:"rating",unfilledColor:"#ddd",filledColor:"yellow",numOfIcons:"5",iconHeight:"25px",iconWidth:"25px",icon:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                 \t viewBox="0 0 47.94 47.94" xml:space="preserve">\n                 <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n                 \tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n                 \tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n                 \tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n                 \tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n                 \tC22.602,0.567,25.338,0.567,26.285,2.486z"/>\n            </svg>'})}static get builderInfo(){return{title:"Rating",icon:"star",group:"basic",documentation:"/userguide/#textfield",weight:0,schema:r.schema()}}setIconProperties(){const e=(new DOMParser).parseFromString(this.component.icon,"text/xml");e.firstChild.style.fill=this.component.unfilledColor,e.firstChild.setAttribute("height",this.component.iconHeight),e.firstChild.setAttribute("width",this.component.iconWidth),this.component.icon=(new XMLSerializer).serializeToString(e.documentElement)}constructor(e,t,n){super(e,t,n)}init(){this.setIconProperties(),super.init()}get inputInfo(){return super.inputInfo}render(e){let t='<div ref="rating">';for(let e=0;e<this.component.numOfIcons;e++)t+=this.component.icon;return t+="</div>",super.render(t)}attach(e){function t(e,t){for(const n of e)n.style.fill=t}if(this.loadRefs(e,{rating:"single"}),!this.component.disabled){let e=this.refs.rating.children;for(let n=0;n<e.length;n++){let r=e[n];r.addEventListener("click",(()=>{t(e,this.component.unfilledColor),r.style.fill=this.component.filledColor;let o=r.previousElementSibling;for(;o;)o.style.fill=this.component.filledColor,o=o.previousElementSibling;this.updateValue(`${n+1}/${e.length}`)}))}}return super.attach(e)}detach(){return super.detach()}destroy(){return super.destroy()}normalizeValue(e,t={}){return super.normalizeValue(e,t)}getValue(){return super.getValue()}getValueAt(e){return super.getValueAt(e)}setValue(e,t={}){return super.setValue(e,t)}setValueAt(e,t,n={}){return super.setValueAt(e,t,n)}updateValue(e,t={}){return super.updateValue(e,t)}}const o=Formio.Components.components.field;class s extends o{static StoreLocatorEvents={StoreSelected:"store.selected",StoreChanged:"store.changed",StoreSearch:"store.search",StoreSearchResults:"store.search.results"};static Palette={Primary:{Main:"#3e87cb"},Grey:{Main:"#F7F8F8",Text:"#63666A"},White:"#ffffff"};static Styles={Container:{"background-color":s.Palette.Grey.Main,padding:"12px","border-radius":"8px",display:"flex","flex-direction":"row",position:"relative",gap:"8px"},IconContainer:{display:"none"},Input:{outline:"none",border:"none",background:"transparent","flex-grow":1,color:s.Palette.Grey.Text},StoreChangeBtn:{color:s.Palette.Primary.Main,display:"none",cursor:"pointer"},DropdownContainer:{position:"absolute",top:"calc(100% + 10px)","background-color":s.Palette.White,width:"100%",left:0,"z-index":100,"border-radius":"8px",padding:"12px","box-shadow":"0px 4px 12px rgba(0,0,0,0.25)",display:"none","flex-direction":"column",gap:"8px"},DropdownItem:{color:s.Palette.Primary.Main,"text-decoration":"underline",cursor:"pointer"}};static schema(...e){return o.schema({type:"storeLocator",label:"Store Locator",key:"storeLocator"})}static get builderInfo(){return{title:"Store Locator",icon:"map",group:"basic",documentation:"/userguide/#textfield",weight:0,schema:s.schema()}}constructor(e,t,n){super(e,t,n)}init(){super.init()}get inputInfo(){return super.inputInfo}render(e){const t=s.stylesToCssString(s.Styles.Input),n=s.stylesToCssString(s.Styles.Container),r=s.stylesToCssString(s.Styles.DropdownContainer),o=s.stylesToCssString(s.Styles.StoreChangeBtn);let i=`\n    <div ref="storeLocator" style="${n}">\n      <span ref="iconContainer" style="${s.stylesToCssString(s.Styles.IconContainer)}">\n        <svg width="24" height="24" viewBox="0 0 24 24" style="fill: #0BAE1A" xmlns="http://www.w3.org/2000/svg">\n          <mask id="mask0_64_3413" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">\n            <rect y="-7.62939e-06" width="24" height="24" fill="#0BAE1A"/>\n          </mask>\n          <g mask="url(#mask0_64_3413)">\n            <path d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01667 11.35 7.75 11.35C7.48333 11.35 7.25 11.45 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.25 9.81666 17.25 9.54999C17.25 9.28333 17.15 9.04999 16.95 8.84999C16.7667 8.66666 16.5333 8.57499 16.25 8.57499C15.9667 8.57499 15.7333 8.66666 15.55 8.84999L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31666 2.788 8.09999C3.31267 6.88333 4.025 5.82499 4.925 4.92499C5.825 4.02499 6.88333 3.31233 8.1 2.78699C9.31667 2.26233 10.6167 1.99999 12 1.99999C13.3833 1.99999 14.6833 2.26233 15.9 2.78699C17.1167 3.31233 18.175 4.02499 19.075 4.92499C19.975 5.82499 20.6873 6.88333 21.212 8.09999C21.7373 9.31666 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z" fill="#0BAE1A"/>\n          </g>\n        </svg>\n      </span>\n      <input ref="storeInput" placeholder="${this.component.placeholder}" style="${t}"/>\n      <span ref="storeChangeBtn" style="${o}">Select a different store</span>\n      <div ref="dropdownContainer" style="${r}"></div>\n    </div>\n    `;return super.render(i)}static stylesToCssString(e,t={}){return Object.entries({...e,...t}).reduce(((e,[t,n])=>[e,`${t}: ${n}`].join("; ")),"")}attach(e){this.loadRefs(e,{storeLocator:"single",dropdownContainer:"single",storeInput:"single",storeChangeBtn:"single",iconContainer:"single"});const t=this;if(!this.component.disabled){const e=this.refs.storeInput,n=this.refs.dropdownContainer,r=this.refs.storeChangeBtn,o=this.refs.iconContainer,i=()=>{n.style=s.stylesToCssString(s.Styles.DropdownContainer,{display:"flex"})},l=()=>{n.style=s.stylesToCssString({display:"none"})},a=()=>{o.style=s.stylesToCssString({display:"none"})},c=()=>{o.style=s.stylesToCssString({display:"block"})},u=()=>{r.style=s.stylesToCssString(s.Styles.StoreChangeBtn,{display:"block"})},d=()=>{r.style=s.stylesToCssString({display:"none"})};r.addEventListener("click",(function(){e.value="",e.focus(),i(),a(),d()})),e.addEventListener("input",(function(e){const n=e.target.value;d(),t.getValue()!==n&&a();const r=new window.CustomEvent(s.StoreLocatorEvents.StoreSearch,{detail:{postCode:n}});window.dispatchEvent(r)})),window.addEventListener(s.StoreLocatorEvents.StoreSearchResults,(r=>{for(i();n.firstChild;)n.removeChild(n.firstChild);const o=r.detail.stores.map((n=>{const r=document.createElement("div"),o=document.createElement("a");return o.innerText=n.name,o.addEventListener("click",(function(){e.value=n.name,l(),u(),c(),t.updateValue(n.name)})),o.style=s.stylesToCssString(s.Styles.DropdownItem),r.appendChild(o),r}));n.append(...o)}))}return super.attach(e)}detach(){return super.detach()}destroy(){return super.destroy()}normalizeValue(e,t={}){return super.normalizeValue(e,t)}getValue(){return super.getValue()}getValueAt(e){return super.getValueAt(e)}setValue(e,t={}){return super.setValue(e,t)}setValueAt(e,t,n={}){return super.setValueAt(e,t,n)}updateValue(e,t={}){return super.updateValue(e,t)}}Formio.use([{components:{rating:r,storeLocator:s}}])})();
