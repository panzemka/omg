(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const se="https://your-energy.b.goit.study/api";async function v(e,t={}){const a=await fetch(`${se}${e}`,t);if(!a.ok){let s;try{s=await a.json()}catch{s=null}const n=(s==null?void 0:s.message)??`Request failed: ${a.status}`,r=new Error(n);throw r.status=a.status,r}return a.json()}function re(){return v("/quote")}function oe(e,t=1,a=12){const s=new URLSearchParams({filter:e,page:t,limit:a});return v(`/filters?${s}`)}function ie(e={}){const t=new URLSearchParams(e);return v(`/exercises?${t}`)}function ce(e){return v(`/exercises/${e}`)}function le(e,t){return v(`/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function de(e){return v("/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})}const G="dailyQuote";function z(){return new Date().toDateString()}function ue(){try{const e=localStorage.getItem(G);if(!e)return null;const t=JSON.parse(e);return t.date!==z()?null:{quote:t.quote,author:t.author}}catch{return null}}function me(e,t){try{localStorage.setItem(G,JSON.stringify({quote:e,author:t,date:z()}))}catch{}}function _(e,t){const a=document.querySelector(".quote-card-quote"),s=document.querySelector(".quote-card-author");a&&(a.textContent=e),s&&(s.textContent=t)}function ge(){const e=ue();if(e){_(e.quote,e.author);return}re().then(t=>{_(t.quote,t.author),me(t.quote,t.author)}).catch(()=>{})}const fe="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2016.5%2018.1667'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Icon'%20d='M11.5833%204.08333V3.41667C11.5833%202.48325%2011.5833%202.01654%2011.4017%201.66002C11.2419%201.34641%2010.9869%201.09145%2010.6733%200.931657C10.3168%200.750001%209.85009%200.750001%208.91667%200.750001H7.58333C6.64991%200.750001%206.1832%200.750001%205.82668%200.931657C5.51308%201.09145%205.25811%201.34641%205.09832%201.66002C4.91667%202.01654%204.91667%202.48325%204.91667%203.41667V4.08333M6.58333%208.66667V12.8333M9.91667%208.66667V12.8333M0.75%204.08333H15.75M14.0833%204.08333V13.4167C14.0833%2014.8168%2014.0833%2015.5169%2013.8108%2016.0516C13.5712%2016.5221%2013.1887%2016.9045%2012.7183%2017.1442C12.1835%2017.4167%2011.4835%2017.4167%2010.0833%2017.4167H6.41667C5.01654%2017.4167%204.31647%2017.4167%203.78169%2017.1442C3.31129%2016.9045%202.92883%2016.5221%202.68915%2016.0516C2.41667%2015.5169%202.41667%2014.8168%202.41667%2013.4167V4.08333'%20stroke='var(--stroke-0,%20%23242424)'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",pe="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2012.9675%2012.4316'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%201'%20d='M5.53268%200.690983C5.83204%20-0.230327%207.13545%20-0.230328%207.4348%200.690983L8.27985%203.2918C8.41373%203.70382%208.79768%203.98278%209.23091%203.98278H11.9656C12.9343%203.98278%2013.3371%205.22239%2012.5534%205.7918L10.341%207.39919C9.99048%207.65383%209.84382%208.1052%209.9777%208.51722L10.8228%2011.118C11.1221%2012.0393%2010.0676%2012.8055%209.28391%2012.2361L7.07153%2010.6287C6.72104%2010.374%206.24644%2010.374%205.89596%2010.6287L3.68357%2012.2361C2.89986%2012.8055%201.84538%2012.0393%202.14473%2011.118L2.98978%208.51722C3.12366%208.1052%202.977%207.65383%202.62651%207.39919L0.414132%205.7918C-0.369582%205.2224%200.0331929%203.98278%201.00192%203.98278H3.73657C4.1698%203.98278%204.55375%203.70382%204.68763%203.2918L5.53268%200.690983Z'%20fill='var(--fill-0,%20%23EEA10C)'/%3e%3c/svg%3e",he="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2012.9675%2012.4316'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Star%205'%20d='M5.53268%200.690983C5.83204%20-0.230327%207.13545%20-0.230328%207.4348%200.690983L8.27985%203.2918C8.41373%203.70382%208.79768%203.98278%209.23091%203.98278H11.9656C12.9343%203.98278%2013.3371%205.22239%2012.5534%205.7918L10.341%207.39919C9.99048%207.65383%209.84382%208.1052%209.9777%208.51722L10.8228%2011.118C11.1221%2012.0393%2010.0676%2012.8055%209.28391%2012.2361L7.07153%2010.6287C6.72104%2010.374%206.24644%2010.374%205.89596%2010.6287L3.68357%2012.2361C2.89986%2012.8055%201.84538%2012.0393%202.14473%2011.118L2.98978%208.51722C3.12366%208.1052%202.977%207.65383%202.62651%207.39919L0.414132%205.7918C-0.369582%205.2224%200.0331929%203.98278%201.00192%203.98278H3.73657C4.1698%203.98278%204.55375%203.70382%204.68763%203.2918L5.53268%200.690983Z'%20fill='var(--fill-0,%20%23F4F4F4)'%20fill-opacity='0.2'/%3e%3c/svg%3e",ve="data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.1499%2013.6499L13.6499%207.1499M13.6499%207.1499L7.1499%200.649902M13.6499%207.1499H0.649902'%20stroke='%23242424'%20stroke-width='1.3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",we="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%23F4F4F4'%20fill-opacity='0.2'/%3e%3cpath%20d='M24.7293%2011.907C24.4611%2011.594%2023.9834%2011.5528%2023.6631%2011.8138L21.5637%2013.5369L20.5983%2011.1998C20.564%2011.1121%2020.5119%2011.0384%2020.452%2010.9734C20.2547%2010.5446%2019.9122%2010.1763%2019.44%209.96297C19.235%209.872%2019.0233%209.82326%2018.8116%209.79944C18.765%209.77561%2018.7229%209.7442%2018.6697%209.72796L14.9754%208.72184C14.7681%208.6666%2014.5597%208.70234%2014.3891%208.79981C14.1862%208.86696%2014.0122%209.011%2013.9291%209.22002L12.538%2012.7149C12.3873%2013.0951%2012.5801%2013.5239%2012.9703%2013.6734C13.3582%2013.8207%2013.7983%2013.6311%2013.9501%2013.2499L15.125%2010.2987L16.8076%2010.7557C16.7666%2010.8207%2016.7222%2010.8814%2016.689%2010.9507L14.532%2015.5188C14.501%2015.586%2014.4844%2015.6542%2014.4622%2015.7235L11.8408%2020.0177L7.45378%2021.4516C6.95721%2021.8144%206.85192%2022.4978%207.2188%2022.983C7.5879%2023.4692%208.28951%2023.5721%208.78497%2023.2137L13.274%2021.7029C13.4114%2021.6054%2013.5112%2021.4776%2013.5866%2021.34C13.6431%2021.2816%2013.7074%2021.235%2013.7506%2021.1624L15.3135%2018.6022L18.0878%2020.9123L15.1195%2024.1808C14.7105%2024.6313%2014.7515%2025.3255%2015.2148%2025.7241C15.677%2026.1259%2016.3853%2026.0836%2016.7965%2025.6309L20.5008%2021.5534C20.6161%2021.4278%2020.6848%2021.2826%2020.7313%2021.131C20.759%2021.0487%2020.759%2020.9632%2020.7657%2020.8776C20.7657%2020.8343%2020.7823%2020.7953%2020.779%2020.7552C20.769%2020.4563%2020.6449%2020.1661%2020.3944%2019.9592L17.8417%2017.8322C18.0257%2017.661%2018.182%2017.4574%2018.2951%2017.2181L19.9488%2013.7189L20.4786%2015.0975C20.5008%2015.2199%2020.5429%2015.3401%2020.6316%2015.4409C20.7114%2015.534%2020.8134%2015.5957%2020.922%2015.6391C20.9331%2015.6445%2020.9464%2015.6456%2020.9597%2015.6488C21.0284%2015.6726%2021.0982%2015.6954%2021.1703%2015.6986C21.2556%2015.7062%2021.3421%2015.6954%2021.4296%2015.6715C21.4318%2015.6705%2021.4329%2015.6705%2021.4329%2015.6705C21.4562%2015.665%2021.4795%2015.6694%2021.5028%2015.6596C21.6258%2015.6141%2021.72%2015.5372%2021.8009%2015.4474L24.8136%2012.9488C25.1339%2012.6857%2024.9987%2012.22%2024.7293%2011.907Z'%20fill='%23F4F4F4'/%3e%3cpath%20d='M20.9191%2010.1263C22.0853%2010.1263%2023.0306%209.20259%2023.0306%208.06314C23.0306%206.9237%2022.0853%206%2020.9191%206C19.753%206%2018.8076%206.9237%2018.8076%208.06314C18.8076%209.20259%2019.753%2010.1263%2020.9191%2010.1263Z'%20fill='%23F4F4F4'/%3e%3c/svg%3e",ye="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%206L6%2018M6%206L18%2018'%20stroke='%23F4F4F4'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Le="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.3671%203.84172C16.9415%203.41589%2016.4361%203.0781%2015.8799%202.84763C15.3237%202.61716%2014.7275%202.49854%2014.1254%202.49854C13.5234%202.49854%2012.9272%202.61716%2012.371%202.84763C11.8147%203.0781%2011.3094%203.41589%2010.8838%203.84172L10.0004%204.72506L9.11709%203.84172C8.25735%202.98198%207.09128%202.49898%205.87542%202.49898C4.65956%202.49898%203.4935%202.98198%202.63376%203.84172C1.77401%204.70147%201.29102%205.86753%201.29102%207.08339C1.29102%208.29925%201.77401%209.46531%202.63376%2010.3251L3.51709%2011.2084L10.0004%2017.6917L16.4838%2011.2084L17.3671%2010.3251C17.7929%209.89943%2018.1307%209.39407%2018.3612%208.83785C18.5917%208.28164%2018.7103%207.68546%2018.7103%207.08339C18.7103%206.48132%2018.5917%205.88514%2018.3612%205.32893C18.1307%204.77271%2017.7929%204.26735%2017.3671%203.84172Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",be="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.3671%203.84172C16.9415%203.41589%2016.4361%203.0781%2015.8799%202.84763C15.3237%202.61716%2014.7275%202.49854%2014.1254%202.49854C13.5234%202.49854%2012.9272%202.61716%2012.371%202.84763C11.8147%203.0781%2011.3094%203.41589%2010.8838%203.84172L10.0004%204.72506L9.11709%203.84172C8.25735%202.98198%207.09128%202.49898%205.87542%202.49898C4.65956%202.49898%203.4935%202.98198%202.63376%203.84172C1.77401%204.70147%201.29102%205.86753%201.29102%207.08339C1.29102%208.29925%201.77401%209.46531%202.63376%2010.3251L3.51709%2011.2084L10.0004%2017.6917L16.4838%2011.2084L17.3671%2010.3251C17.7929%209.89943%2018.1307%209.39407%2018.3612%208.83785C18.5917%208.28164%2018.7103%207.68546%2018.7103%207.08339C18.7103%206.48132%2018.5917%205.88514%2018.3612%205.32893C18.1307%204.77271%2017.7929%204.26735%2017.3671%203.84172Z'%20fill='%23242424'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ke="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5%2015L7.5%2010L12.5%205'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ce="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5%2015L7.5%2010L12.5%205'%20stroke='%23d4d4d4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",xe="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2015L5%2010L10%205'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2015L10%2010L15%205'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Se="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2015L5%2010L10%205'%20stroke='%23d4d4d4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2015L10%2010L15%205'%20stroke='%23d4d4d4'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",i={trash:fe,starOrange:pe,starGrey:he,arrowRight:ve,runningManLight:we,xLight:ye,heartDark:Le,heartFilledDark:be,chevronLeftDark:ke,chevronLeftLight:Ce,chevronDoubleLeftDark:xe,chevronDoubleLeftLight:Se};function Ee({name:e,filter:t,imgURL:a}){return`<li class="exercise-card" data-name="${e}" data-filter="${t}">
  <a class="exercise-card-link" href="#">
    <img src="${a}" alt="${e}" class="exercise-card-img" loading="lazy" />
    <div class="exercise-card-overlay">
      <p class="exercise-card-name">${e}</p>
      <p class="exercise-card-subtitle">${t}</p>
    </div>
  </a>
</li>`}function K(e,{showTrash:t=!1}={}){const a=e.rating?e.rating.toFixed(1):"0.0",s=t?`<button
        class="workout-card-trash"
        type="button"
        aria-label="Remove from favorites"
        data-remove-id="${e._id}"
      >
        <img src="${i.trash}" alt="" width="16" height="16" />
      </button>`:"";return`<li class="workout-card" data-exercise-id="${e._id}">
  <div class="workout-card-top">
    <span class="workout-card-badge">WORKOUT</span>
    <span class="workout-card-rating">
      ${a}
      <img src="${i.starOrange}" alt="rating star" width="18" height="18" />
    </span>
    ${s}
    <button class="workout-card-start" type="button" data-start-id="${e._id}">
      Start
      <img src="${i.arrowRight}" alt="" width="16" height="16" />
    </button>
  </div>
  <div class="workout-card-body">
    <div class="workout-card-icon">
      <img src="${i.runningManLight}" alt="" width="24" height="24" />
    </div>
    <h3 class="workout-card-name">${e.name}</h3>
  </div>
  <div class="workout-card-meta">
    <span>Burned calories: <strong>${e.burnedCalories} / ${e.time} min</strong></span>
    <span>Body part: <strong>${e.bodyPart}</strong></span>
    <span>Target: <strong>${e.target}</strong></span>
  </div>
</li>`}function $e(e,t){const a=qe(e.rating),s=t?"Remove":"Add to favorites",n=t?i.heartFilledDark:i.heartDark;return`<div class="modal-exercise-content">
  <button class="modal-close" type="button" aria-label="Close modal" data-modal-close>
    <img class="modal-close-icon" src="${i.xLight}" alt="" width="24" height="24" />
  </button>

  <div class="modal-exercise-gif">
    <img src="${e.gifUrl}" alt="${e.name}" />
  </div>

  <div class="modal-exercise-info">
    <h3 class="modal-exercise-title">${e.name}</h3>

    <div class="modal-exercise-rating">
      <span class="modal-exercise-rating-value">${e.rating.toFixed(1)}</span>
      <div class="modal-exercise-stars" aria-label="Rating: ${e.rating.toFixed(1)} out of 5">
        ${a}
      </div>
    </div>

    <div class="modal-exercise-details">
      <div class="modal-exercise-detail-item">
        <span class="modal-exercise-detail-label">Target</span>
        <span class="modal-exercise-detail-value">${e.target}</span>
      </div>
      <div class="modal-exercise-detail-item">
        <span class="modal-exercise-detail-label">Body Part</span>
        <span class="modal-exercise-detail-value">${e.bodyPart}</span>
      </div>
      <div class="modal-exercise-detail-item">
        <span class="modal-exercise-detail-label">Equipment</span>
        <span class="modal-exercise-detail-value">${e.equipment}</span>
      </div>
      <div class="modal-exercise-detail-item">
        <span class="modal-exercise-detail-label">Popular</span>
        <span class="modal-exercise-detail-value">${e.popularity}</span>
      </div>
      <div class="modal-exercise-detail-item">
        <span class="modal-exercise-detail-label">Burned calories</span>
        <span class="modal-exercise-detail-value">${e.burnedCalories} / ${e.time} min</span>
      </div>
    </div>

    <p class="modal-exercise-desc">${e.description}</p>

    <div class="modal-exercise-actions">
      <button class="modal-btn modal-btn-fav" type="button" data-fav-id="${e._id}">
        <span>${s}</span>
        <img class="modal-btn-fav-icon" src="${n}" alt="" width="18" height="18" />
      </button>
      <button class="modal-btn modal-btn-rating" type="button" data-rating-id="${e._id}">
        Give a rating
      </button>
    </div>
  </div>
</div>`}function Me(e){return`<div class="modal-rating-content">
  <button class="modal-close" type="button" aria-label="Close modal" data-modal-close>
    <img class="modal-close-icon" src="${i.xLight}" alt="" width="28" height="28" />
  </button>

  <p class="modal-rating-label">Rating</p>

  <div class="modal-rating-row">
    <span class="modal-rating-value">0.0</span>
    <div class="modal-rating-stars" role="group" aria-label="Select rating from 1 to 5">
      ${[1,2,3,4,5].map(t=>`<img
            class="modal-star"
            src="${i.starGrey}"
            alt="${t} star"
            width="24"
            height="24"
            data-star="${t}"
            tabindex="0"
            role="button"
            aria-label="Rate ${t} out of 5"
          />`).join("")}
    </div>
  </div>

  <form class="modal-rating-form" data-exercise-id="${e}" novalidate>
    <input
      class="modal-rating-email"
      type="email"
      name="email"
      placeholder="Email"
      autocomplete="email"
      pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+(\\.[a-zA-Z_]+)*\\.[a-zA-Z]{2,3}$"
      required
    />
    <textarea
      class="modal-rating-comment"
      name="review"
      placeholder="Your comment"
      rows="4"
      required
    ></textarea>
    <button class="modal-rating-submit" type="submit">Send</button>
    <p class="modal-rating-message" hidden aria-live="polite"></p>
  </form>
</div>`}function qe(e){const t=Math.round(e);return[1,2,3,4,5].map(a=>`<img
        src="${a<=t?i.starOrange:i.starGrey}"
        alt=""
        width="14"
        height="14"
      />`).join("")}function B(e,t,a,s){if(e.innerHTML="",a<=1)return;const n=t===1,r=t===a,o=document.createElement("div");o.className="pagination-arrows",o.innerHTML=`
    <button class="pagination-arrow" data-page="first" ${n?"disabled":""} aria-label="First page">
      <img src="${n?i.chevronDoubleLeftLight:i.chevronDoubleLeftDark}" alt="" class="pagination-arrow-icon" />
    </button>
    <button class="pagination-arrow" data-page="prev" ${n?"disabled":""} aria-label="Previous page">
      <img src="${n?i.chevronLeftLight:i.chevronLeftDark}" alt="" class="pagination-arrow-icon" />
    </button>
  `,e.appendChild(o);const m=document.createElement("div");m.className="pagination-numbers",Te(t,a).forEach(g=>{if(g==="..."){const c=document.createElement("span");c.className="pagination-ellipsis",c.textContent="...",m.appendChild(c)}else{const c=document.createElement("span");c.className="pagination-num",g===t&&c.classList.add("is-active"),c.textContent=g,c.dataset.page=g,m.appendChild(c)}}),e.appendChild(m);const w=document.createElement("div");w.className="pagination-arrows pagination-arrows--right",w.innerHTML=`
    <button class="pagination-arrow" data-page="next" ${r?"disabled":""} aria-label="Next page">
      <img src="${r?i.chevronLeftLight:i.chevronLeftDark}" alt="" class="pagination-arrow-icon" />
    </button>
    <button class="pagination-arrow" data-page="last" ${r?"disabled":""} aria-label="Last page">
      <img src="${r?i.chevronDoubleLeftLight:i.chevronDoubleLeftDark}" alt="" class="pagination-arrow-icon" />
    </button>
  `,e.appendChild(w),e.onclick=g=>{g.stopPropagation();const c=g.target.closest("[data-page]");if(!c||c.disabled)return;let f;switch(c.dataset.page){case"first":f=1;break;case"prev":f=Math.max(1,t-1);break;case"next":f=Math.min(a,t+1);break;case"last":f=a;break;default:f=parseInt(c.dataset.page,10)}f!==t&&s(f)}}function Te(e,t){if(t<=4)return Array.from({length:t},(o,m)=>m+1);const a=Math.ceil(t/2);let s=Math.max(1,e-1),n=Math.min(t,e+1);n-s<2&&(s===1?n=Math.min(3,t):n===t&&(s=Math.max(1,t-2)));const r=[];if(e<=a){for(let o=s;o<=n;o++)r.push(o);n<t&&r.push("...")}else{s>1&&r.push("...");for(let o=s;o<=n;o++)r.push(o)}return r}let u=null,x=null;function J(e){e.key==="Enter"&&(e.preventDefault(),W())}function V(){W()}function W(){if(!u||!x)return;const e=u.querySelector(".exercises-search-input");x(e.value.trim())}function Fe(e){if(u=document.querySelector(".exercises-search"),!u)return;x=e,u.hidden=!1;const t=u.querySelector(".exercises-search-input"),a=u.querySelector(".exercises-search-btn");t.addEventListener("keydown",J),a.addEventListener("click",V)}function Ie(){if(!u)return;const e=u.querySelector(".exercises-search-input"),t=u.querySelector(".exercises-search-btn");e.removeEventListener("keydown",J),t.removeEventListener("click",V),e.value="",u.hidden=!0,u=null,x=null}let p=null,T=null,F=null,I={},L=1;function De(e,t,a,s,n,r){if(p=s,T=n,F=r,L=1,I={[t]:e,limit:10},a){a.innerHTML=`<span class="exercises-title-back">Exercises</span> / <span class="exercises-title-category">${e}</span>`;const o=a.querySelector(".exercises-title-back");o&&o.addEventListener("click",Re,{once:!0})}Fe(o=>{I.keyword=o||void 0,L=1,D()}),D()}function Re(){U();const e=document.querySelector(".exercises-title");e&&(e.textContent="Exercises"),F&&F()}function U(){Ie(),p&&p.classList.remove("exercises-list--workouts")}async function D(){if(!p)return;const e={...I,page:L};Object.keys(e).forEach(t=>e[t]===void 0&&delete e[t]);try{const t=await ie(e),a=t.results??[];p.innerHTML=a.length?a.map(n=>K(n)).join(""):'<li class="workout-card"><p class="exercises-empty-msg">No exercises found. Try a different search term.</p></li>',p.classList.add("exercises-list--workouts");const s=parseInt(t.totalPages,10)||1;T&&B(T,L,s,n=>{L=n,D()})}catch{p.innerHTML='<li class="workout-card"><p class="exercises-empty-msg">Failed to load exercises. Please try again later.</p></li>'}}const Be={muscles:"Muscles","body-parts":"Body parts",equipment:"Equipment"},Ae={muscles:"muscles","body-parts":"bodypart",equipment:"equipment"};let R="muscles",b=1,k=!1;function Oe(){const e=document.querySelector(".exercises-tabs"),t=document.querySelector(".exercises-list"),a=document.querySelector(".exercises-grid .pagination"),s=document.querySelector(".exercises-title");!e||!t||(e.addEventListener("click",n=>{const r=n.target.closest(".exercises-tab");r&&(e.querySelectorAll(".exercises-tab").forEach(o=>o.classList.remove("is-active")),r.classList.add("is-active"),R=r.dataset.filter,b=1,k=!1,U(),s&&(s.textContent="Exercises"),C(t,a))}),t.addEventListener("click",n=>{const r=n.target.closest(".exercise-card");if(!r||k)return;n.preventDefault(),k=!0;const o=r.dataset.name,m=Ae[R];De(o,m,s,t,a,()=>{k=!1,b=1,C(t,a)})}),C(t,a))}async function C(e,t){const a=Be[R];try{const s=await oe(a,b,12),n=s.results??[];e.innerHTML=n.length?n.map(Ee).join(""):'<li class="exercise-card"><p class="exercises-empty-msg">No categories found.</p></li>';const r=parseInt(s.totalPages,10)||1;t&&B(t,b,r,o=>{b=o,C(e,t)})}catch{e.innerHTML='<li class="exercise-card"><p class="exercises-empty-msg">Failed to load categories. Please try again later.</p></li>'}}const A="savedWorkouts",M=8;function $(){try{return JSON.parse(localStorage.getItem(A))??[]}catch{return[]}}function Pe(e){const t=$();t.some(a=>a._id===e._id)||(t.push(e),localStorage.setItem(A,JSON.stringify(t)))}function Q(e){const t=$().filter(a=>a._id!==e);localStorage.setItem(A,JSON.stringify(t))}function Y(e){return $().some(t=>t._id===e)}function _e(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-content .pagination");if(!e)return;let a=1;function s(n){a=n;const r=$();if(r.length===0){e.innerHTML=`<li class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet.
        Start exploring and add exercises that you enjoy to your favorites for easy access in the future.</p>
      </li>`,t&&(t.innerHTML="");return}const o=Math.ceil(r.length/M);a>o&&(a=o);const m=(a-1)*M,w=r.slice(m,m+M);e.innerHTML=w.map(g=>K(g,{showTrash:!0})).join(""),t&&B(t,a,o,s)}e.addEventListener("click",n=>{const r=n.target.closest("[data-remove-id]");r&&(Q(r.dataset.removeId),s(a))}),s(1)}const He=/^\w+(\.\w+)?@[a-zA-Z_]+(\.[a-zA-Z_]+)*\.[a-zA-Z]{2,3}$/;function je(){const e=document.querySelector(".footer-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const a=e.querySelector(".footer-input"),s=a.value.trim(),n=Ne(e);if(!He.test(s)){q(n,"Please enter a valid email address.","error");return}try{const r=await de(s);q(n,r.message||"You have successfully subscribed!","success"),a.value=""}catch(r){q(n,r.message||"Subscription failed. Please try again.","error")}})}function Ne(e){let t=e.querySelector(".footer-form-message");return t||(t=document.createElement("p"),t.className="footer-form-message",e.appendChild(t)),t}function q(e,t,a){e.textContent=t,e.className=`footer-form-message footer-form-message--${a}`,e.hidden=!1}let d=null,S=null,h=0;const Ze=/^\w+(\.\w+)?@[a-zA-Z_]+(\.[a-zA-Z_]+)*\.[a-zA-Z]{2,3}$/;function X(e){(e.target===d||e.target.closest("[data-modal-close]"))&&O()}function ee(e){e.key==="Escape"&&O()}function Ge(){d=document.querySelector("[data-modal-rating]")}function ze(e){d&&(S=e,h=0,d.innerHTML=Me(e),d.hidden=!1,document.body.style.overflow="hidden",d.addEventListener("click",X),document.addEventListener("keydown",ee),Ke(),Je())}function Ke(){const e=d.querySelectorAll("[data-star]"),t=d.querySelector(".modal-rating-value");e.forEach(a=>{const s=()=>{h=parseInt(a.dataset.star,10),We(e,h),t&&(t.textContent=`${h}.0`)};a.addEventListener("click",s),a.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),s())})})}function Je(){const e=d.querySelector(".modal-rating-form");e&&e.addEventListener("submit",Ve)}async function Ve(e){e.preventDefault();const t=e.currentTarget,a=t.querySelector(".modal-rating-message"),s=t.email.value.trim(),n=t.review.value.trim();if(!h){y(a,"Please select a rating before submitting.","error");return}if(!Ze.test(s)){y(a,"Please enter a valid email address.","error");return}if(!n){y(a,"Please leave a comment before submitting.","error");return}try{await le(S,{rate:h,email:s,review:n}),y(a,"Thank you for your feedback!","success"),setTimeout(()=>{const r=S;O(),ne(r)},1500)}catch(r){y(a,r.message||"Something went wrong. Please try again.","error")}}function O(){d&&(d.removeEventListener("click",X),document.removeEventListener("keydown",ee),d.hidden=!0,d.innerHTML="",document.body.style.overflow="",S=null,h=0)}function We(e,t){e.forEach(a=>{const s=parseInt(a.dataset.star,10);a.src=s<=t?i.starOrange:i.starGrey})}function y(e,t,a){e&&(e.textContent=t,e.className=`modal-rating-message modal-rating-message--${a}`,e.hidden=!1)}let l=null;function te(e){(e.target===l||e.target.closest("[data-modal-close]"))&&P()}function ae(e){e.key==="Escape"&&P()}function Ue(){l=document.querySelector("[data-modal-exercise]"),l&&document.addEventListener("click",e=>{const t=e.target.closest("[data-start-id]");t&&ne(t.dataset.startId)})}async function ne(e){if(l)try{const t=await ce(e),a=Y(e);l.innerHTML=$e(t,a),l.hidden=!1,document.body.style.overflow="hidden",l.addEventListener("click",te),document.addEventListener("keydown",ae);const s=l.querySelector("[data-fav-id]");s&&s.addEventListener("click",()=>Qe(t,s));const n=l.querySelector("[data-rating-id]");n&&n.addEventListener("click",()=>{P(),ze(n.dataset.ratingId)})}catch{}}function Qe(e,t){const a=e._id,s=t.querySelector("span"),n=t.querySelector("img");Y(a)?(Q(a),s&&(s.textContent="Add to favorites"),n&&(n.src=i.heartDark)):(Pe(e),s&&(s.textContent="Remove"),n&&(n.src=i.heartFilledDark))}function P(){l&&(l.removeEventListener("click",te),document.removeEventListener("keydown",ae),l.hidden=!0,l.innerHTML="",document.body.style.overflow="")}const H=document.querySelector("[data-menu-open]"),j=document.querySelector("[data-menu-close]"),E=document.querySelector("[data-menu]");function Ye(){E.classList.add("is-open"),document.body.style.overflow="hidden"}function N(){E.classList.remove("is-open"),document.body.style.overflow=""}H&&j&&E&&(H.addEventListener("click",Ye),j.addEventListener("click",N),document.addEventListener("keydown",e=>{e.key==="Escape"&&E.classList.contains("is-open")&&N()}));const Z=document.querySelector("[data-year]");Z&&(Z.textContent=new Date().getFullYear());ge();je();Ue();Ge();document.querySelector(".exercises")&&Oe();document.querySelector(".favorites")&&_e();
//# sourceMappingURL=main-W97ftTVr.js.map
