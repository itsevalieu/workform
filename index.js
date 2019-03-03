document.addEventListener('DOMContentLoaded', function () {
 
    //Assign all input.options 
    let option = document.querySelectorAll('input.option');
    for(let i=0; i<option.length; i++) {
        option[i].addEventListener('change', outputInput);
        option[i].addEventListener('change', toggleDisable);
    }
   
    let edit = document.querySelectorAll('input.edit');
    for(let j=0; j<edit.length; j++) {
        edit[j].addEventListener('change', updateTextInput);
    }

    // Matching
    let matchingForm = document.getElementById('matching');
    let matchingOutput = document.querySelector('textarea#matchingOutput');
    let matchingResult = document.querySelector('textarea#matchingResult');
    matchingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let matchingData = new FormData(matchingForm);
        matchingData.delete('matching'); //to get rid of weird on value
        matchingData.append('matching', matchingOutput.value);
        matchingResult.innerHTML = matchingData.getAll('matching');
    });

    // Financial
    let financialForm = document.getElementById('financial');
    let financialOutput = document.querySelector('textarea#financialOutput');
    let financialResult = document.querySelector('textarea#financialResult');
    financialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let financialData = new FormData(financialForm);
        financialData.delete('financial'); //to get rid of weird on value
        financialData.append('financial', financialOutput.value);
        financialResult.innerHTML = financialData.getAll('financial');

    });

    // Eligibility
    let eligibilityForm = document.getElementById('eligibility');
    let eligibilityOutput = document.querySelector('textarea#eligibilityOutput');
    let eligibilityResult = document.querySelector('textarea#eligibilityResult');
    eligibilityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let eligibilityData = new FormData(eligibilityForm);
        financialData.delete('financial'); //to get rid of weird on value
        eligibilityData.append('eligibility', eligibilityOutput.value);
        eligibilityResult.innerHTML = eligibilityData.getAll('eligibility');
    });

    // Application
    let applicationForm = document.getElementById('application');
    let applicationOutput = document.querySelector('textarea#applicationOutput');
    let applicationResult = document.querySelector('textarea#applicationResult');
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let applicationData = new FormData(applicationForm);
        applicationData.delete('application'); //to get rid of weird on value
        applicationData.append('application', applicationOutput.value);
        applicationResult.innerHTML = applicationData.getAll('application');
    });

    // Contact
    let contactForm = document.getElementById('contact');
    let contactOutput = document.querySelector('textarea#contactOutput');
    let contactResult = document.querySelector('textarea#contactResult');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let contactData = new FormData(contactForm);
        contactData.delete('contact'); //to get rid of weird on value
        contactData.append('contact', contactOutput.value);
        contactResult.innerHTML = contactData.getAll('contact');
    });

    // Summary
    let summaryForm = document.getElementById('summary');
    let summaryOutput = document.querySelector('textarea#summaryOutput');
    let summaryResult = document.querySelector('textarea#summaryResult');
    summaryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let summaryData = new FormData(summaryForm);
        summaryData.delete('summary'); //to get rid of weird on value
        summaryData.append('summary', summaryOutput.value);
        summaryResult.innerHTML = summaryData.getAll('summary');
    });

    // Functions
    function outputInput(e) {
        let value = document.querySelector(`label[for="${e.target.id}"]`).innerHTML;
        let targetOutput = document.querySelector(`textarea#${this.form.id}Output`);
        targetOutput.value = value;
    }
    function updateTextInput(e) {
        //fix to get all values from input 
        let editTarget = e.target;
        let value = editTarget.parentNode.innerHTML.replace(/\<input.*\>/i, editTarget.value);
        let targetOutput = document.querySelector(`textarea#${this.form.id}Output`);
        targetOutput.value = value;
    }
    function toggleDisable(e) {
        let targetElement = document.querySelector(`label[for="${this.id}"]`);
        if (this.checked) {
            if(targetElement.children !== 0) {
                for(let i=0; i<targetElement.children.length; i++) {
                    targetElement.children[i].disabled = false;
                }
            } else {
                console.log('no child elements');
            }
        } 
    }

});
// get all values for formdatas for each form. 