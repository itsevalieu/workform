document.addEventListener('DOMContentLoaded', function () {

    // Assign event change 
    let option = document.querySelectorAll('input.matching');
    for(let i=0; i<option.length; i++) {
        option[i].addEventListener('change', outputInput);
        
        // option[i].addEventListener('change', updateTextInput);
        console.log(option[i]);
    }

    let edit = document.querySelectorAll('input.edit');
    for(let j=0; j<edit.length; j++) {
        edit[j].addEventListener('change', updateTextInput);
    }

    let form = document.getElementById('matching');
    let output = document.querySelector('textarea#output');
    let results = document.querySelector('div#result');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let data = new FormData(form);
        let result = output.value;
        data.append('matching', result);
        let awardName = data.getAll('matching');
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