const jobList = document.querySelector('.experience__jobs-list');

export const renderJobs = (jobsArray) => {
    const jobsHTML = jobsArray.map(job => {
     return `
         <div class="job">
             <div class="job__header">
                 <img class="job__logo" src="${job.company.logoUrl}" />
                 <div class="job__company">
                     <p class="job__position">
                         ${job.title} at
                         <a href="${job.company.websiteUrl}" class="job__company-name">${job.company.name}</a>
                     </p>
                     <div class="job__details">
                         <div class="job__location">
                             <span>${job.location}</span>
                         </div>
                         <div class="job__duration">
                             <span>${job.tenure.startDate} - ${job.tenure.endDate}</span>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="job__body">
                 <p class="job__description">
                     ${job.jobDescription}
                 </p>
                 <div class="job__skills">
                     ${job.skills.map(skill => {
                         return `
                         <div class="pill pill--clear-sky mb-2">
                             <span>${skill}</span>
                         </div>`
                     }).join('')}
                 </div> 
                 <div class="accordion" id="accordionPanelsStayOpenExample">
                 ${job.clients && job.clients.length ? 
                     job.clients.map((client, index) => {
                         return `
                         <div class="accordion-item">
                             <h2 class="accordion-header" id="panelsStayOpen-heading${client.clientId}">
                                 <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${client.clientId}" aria-expanded="${index === 0 ? true : false}" aria-controls="collapse${client.clientId}">
                                     <div class="client mb-3" data-client-id="${client.clientId}">
                                         <div class="client__header">
                                         <img class="client__logo" src="${client.company.logoUrl}" alt="" />
                                         <div class="client__company">
                                             <div class="client__position">
                                                 ${client.title} at <a class="client__client-name" href="${client.company.websiteUrl}">${client.company.name}</a>
                                             </div>
                                             <div class="client__details">
                                                 <div class="client__location">
                                                     <span>Remote</span>
                                                 </div>
                                                 <div class="client__duration">
                                                     <span>${client.tenure.startDate} - ${client.tenure.endDate}</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </button>
                             </h2>
                             <div id="collapse${client.clientId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${client.clientId}">
                                 <div class="accordion-body">
                                     <p class="experience__job--description">
                                         ${client.jobDescription}
                                     </p>
                                     ${client.skills.length 
                                         ? `<div class="experience__job__stack">Skills: 
                                                 ${client.skills.map(s => {
                                                     return `
                                                         <div class="pill pill--clear-sky mb-2">
                                                             <span>${s}</span>
                                                         </div>
                                                     `
                                                 }).join('')}
                                             </div>`
                                         : ''
                                     }
                                 </div>                     
                             </div>
                         </div>
                         `
                     }).join('')
                 : ''}
                 </div>
             </div>
         </div>
     `
     }).join('');
 
     jobList.innerHTML = jobsHTML;
 }