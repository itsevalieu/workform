document.addEventListener('DOMContentLoaded', function () {

    // Assign event change 
    let option = document.querySelectorAll('input.matching');
    for(let i=0; i<option.length; i++) {
        option[i].addEventListener('change', outputInput);
        option[i].addEventListener('change', function(e) {
            let targetElement = document.querySelector(`label[for="${e.target.id}"]`);
            if (e.target.checked) {
                if(targetElement.children !== 0) {
                    for(let i=0; i<targetElement.children.length; i++) {
                        targetElement.children[i].disabled = false;
                    }
                } else {
                    console.log('no child elements');
                }
            } 
        });
    }
    
    let edit = document.querySelectorAll('input.edit');
    for(let j=0; j<edit.length; j++) {
        edit[j].addEventListener('change', updateTextInput);
    }

    let matchingForm = document.getElementById('matching');
    let output = document.querySelector('textarea#output');
    let results = document.querySelector('textarea#result');
    matchingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let matchingData = new FormData(matchingForm);
        let result = output.value;
        matchingData.append('matching', result);
        let awardName = matchingData.getAll('matching');
        results.innerHTML = awardName;
        console.log('last', awardName);
    });

    // Functions
    function outputInput(e) {
        let value = document.querySelector(`label[for="${e.target.id}"]`).innerHTML;
        output.value = value;
    }
    function updateTextInput(e) {
        let editTarget = e.target;
        let value = editTarget.parentNode.innerHTML.replace(/\<input.*\>/i, editTarget.value);
        output.value = value;
    }
});

//grab all the inputs
//loop through the inputs and attach function to get their innerHTML and change the output value to that value 