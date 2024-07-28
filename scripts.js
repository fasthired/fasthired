document.addEventListener('DOMContentLoaded', function() {
    let educationCount = 1;
    let workCount = 1;
    let certificationCount = 1;
    let projectCount = 1;
    let publicationCount = 1;
    let awardCount = 1;
    let affiliationCount = 1;
    let referenceCount = 1;

    function addSection(sectionId, html) {
        document.getElementById(sectionId).insertAdjacentHTML('beforeend', html);
    }

    function addEducation() {
        educationCount++;
        const educationHtml = `
            <div class="education-entry">
                <h3>Educational Level ${educationCount}</h3>
                <label for="institution-name-${educationCount}">Institution Name:</label>
                <input type="text" id="institution-name-${educationCount}" name="institution-name[]">
                
                <label for="degree-obtained-${educationCount}">Degree Obtained:</label>
                <input type="text" id="degree-obtained-${educationCount}" name="degree-obtained[]">
                
                <label for="field-of-study-${educationCount}">Field of Study:</label>
                <input type="text" id="field-of-study-${educationCount}" name="field-of-study[]">
                
                <label for="dates-attended-${educationCount}">Dates Attended:</label>
                <input type="text" id="dates-attended-${educationCount}" name="dates-attended[]">
                
                <label for="additional-details-${educationCount}">Additional Details:</label>
                <textarea id="additional-details-${educationCount}" name="additional-details[]"></textarea>
            </div>
        `;
        addSection('education', educationHtml);
    }

    function addWork() {
        workCount++;
        const workHtml = `
            <div class="work-entry">
                <h3>Work Experience ${workCount}</h3>
                <label for="company-name-${workCount}">Company Name:</label>
                <input type="text" id="company-name-${workCount}" name="company-name[]">
                
                <label for="job-title-${workCount}">Job Title:</label>
                <input type="text" id="job-title-${workCount}" name="job-title[]">
                
                <label for="employment-dates-${workCount}">Employment Dates:</label>
                <input type="text" id="employment-dates-${workCount}" name="employment-dates[]">
                
                <label for="job-overview-${workCount}">Overview of Responsibilities and Role:</label>
                <textarea id="job-overview-${workCount}" name="job-overview[]"></textarea>
                
                <label for="duties-${workCount}">Duties and Responsibilities:</label>
                <textarea id="duties-${workCount}" name="duties[]" rows="4"></textarea>
                
                <label for="achievements-${workCount}">Quantifiable Achievements:</label>
                <textarea id="achievements-${workCount}" name="achievements[]" rows="2"></textarea>
            </div>
        `;
        addSection('work-history', workHtml);
    }

    function addCertification() {
        certificationCount++;
        const certificationHtml = `
            <div class="certification-entry">
                <h3>Certification ${certificationCount}</h3>
                <label for="certification-name-${certificationCount}">Certification Name:</label>
                <input type="text" id="certification-name-${certificationCount}" name="certification-name[]">
                
                <label for="issuing-organization-${certificationCount}">Issuing Organization:</label>
                <input type="text" id="issuing-organization-${certificationCount}" name="issuing-organization[]">
                
                <label for="date-obtained-${certificationCount}">Date Obtained:</label>
                <input type="date" id="date-obtained-${certificationCount}" name="date-obtained[]">
            </div>
        `;
        addSection('certifications', certificationHtml);
    }

    function addProject() {
        projectCount++;
        const projectHtml = `
            <div class="project-entry">
                <h3>Project ${projectCount}</h3>
                <label for="project-name-${projectCount}">Project Name:</label>
                <input type="text" id="project-name-${projectCount}" name="project-name[]">
                
                <label for="role-${projectCount}">Role:</label>
                <input type="text" id="role-${projectCount}" name="role[]">
                
                <label for="project-description-${projectCount}">Description:</label>
                <textarea id="project-description-${projectCount}" name="project-description[]"></textarea>
                
                <label for="project-achievements-${projectCount}">Achievements:</label>
                <textarea id="project-achievements-${projectCount}" name="project-achievements[]"></textarea>
            </div>
        `;
        addSection('projects', projectHtml);
    }

    function addPublication() {
        publicationCount++;
        const publicationHtml = `
            <div class="publication-entry">
                <h3>Publication ${publicationCount}</h3>
                <label for="publication-title-${publicationCount}">Publication Title:</label>
                <input type="text" id="publication-title-${publicationCount}" name="publication-title[]">
                
                <label for="journal-name-${publicationCount}">Journal/Conference Name:</label>
                <input type="text" id="journal-name-${publicationCount}" name="journal-name[]">
                
                <label for="publication-date-${publicationCount}">Date:</label>
                <input type="date" id="publication-date-${publicationCount}" name="publication-date[]">
                
                <label for="publication-summary-${publicationCount}">Summary:</label>
                <textarea id="publication-summary-${publicationCount}" name="publication-summary[]"></textarea>
            </div>
        `;
        addSection('publications', publicationHtml);
    }

    function addAward() {
        awardCount++;
        const awardHtml = `
            <div class="award-entry">
                <h3>Award ${awardCount}</h3>
                <label for="award-name-${awardCount}">Award Name:</label>
                <input type="text" id="award-name-${awardCount}" name="award-name[]">
                
                <label for="issuing-organization-${awardCount}">Issuing Organization:</label>
                <input type="text" id="issuing-organization-${awardCount}" name="issuing-organization[]">
                
                <label for="award-date-${awardCount}">Date:</label>
                <input type="date" id="award-date-${awardCount}" name="award-date[]">
                
                <label for="award-description-${awardCount}">Description:</label>
                <textarea id="award-description-${awardCount}" name="award-description[]"></textarea>
            </div>
        `;
        addSection('awards', awardHtml);
    }

    function addAffiliation() {
        affiliationCount++;
        const affiliationHtml = `
            <div class="affiliation-entry">
                <h3>Affiliation ${affiliationCount}</h3>
                <label for="organization-name-${affiliationCount}">Organization Name:</label>
                <input type="text" id="organization-name-${affiliationCount}" name="organization-name[]">
                
                <label for="membership-type-${affiliationCount}">Membership Type:</label>
                <input type="text" id="membership-type-${affiliationCount}" name="membership-type[]">
                
                <label for="affiliation-dates-${affiliationCount}">Dates:</label>
                <input type="text" id="affiliation-dates-${affiliationCount}" name="affiliation-dates[]">
            </div>
        `;
        addSection('affiliations', affiliationHtml);
    }

    function addReference() {
        referenceCount++;
        const referenceHtml = `
            <div class="reference-entry">
                <h3>Reference ${referenceCount}</h3>
                <label for="reference-name-${referenceCount}">Reference Name:</label>
                <input type="text" id="reference-name-${referenceCount}" name="reference-name[]">
                
                <label for="reference-title-${referenceCount}">Title and Organization:</label>
                <input type="text" id="reference-title-${referenceCount}" name="reference-title[]">
                
                <label for="reference-contact-${referenceCount}">Contact Information:</label>
                <input type="text" id="reference-contact-${referenceCount}" name="reference-contact[]">
                
                <label for="reference-relationship-${referenceCount}">Relationship:</label>
                <input type="text" id="reference-relationship-${referenceCount}" name="reference-relationship[]">
            </div>
        `;
        addSection('references', referenceHtml);
    }

    window.addEducation = addEducation;
    window.addWork = addWork;
    window.addCertification = addCertification;
    window.addProject = addProject;
    window.addPublication = addPublication;
    window.addAward = addAward;
    window.addAffiliation = addAffiliation;
    window.addReference = addReference;
});
