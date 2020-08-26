const $input = document.getElementById('input');
const $applyBtn = document.getElementById('apply_button');
$applyBtn.style.display = 'none'

$input.addEventListener('focus', () => {
  $applyBtn.style.display = "block";
})

$input.addEventListener('input', (e) => {
  if(e.target.value === '') {
    $applyBtn.disabled = true;
    return;
  }
  $applyBtn.disabled = false;
})