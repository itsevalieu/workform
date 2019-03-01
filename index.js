let radio = document.querySelector('input#matching3');
let match = document.querySelector('input.edit');
let output = document.querySelector('input#output');
let text = document.querySelector('label.cats');

radio.addEventListener('change', updateInput);
match.addEventListener('change', updateInput);

function updateInput() {
  let value = text.innerHTML.replace(/\<input.*\>/i, match.value);
  console.log(value);
  output.value = value;
}


let awardForm = document.getElementById('matching');
awardForm.addEventListener('submit', function(e){
  e.preventDefault();
  let data = new FormData(awardForm);
  let awardAmount = document.getElementById('output').value;
  data.append('amount', awardAmount);
  let awardName = data.getAll('amount');
  output.innerHTML = awardName;
  console.log('last', awardName);
});