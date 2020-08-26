function show($target) {
  $target.style.display = 'block';
}

export function Input(){
  const $input = document.getElementById('input');
  const $applyBtn = document.getElementById('apply_button');

  function disabled() {
    return $input.value === '';
  }

  $input.addEventListener('focus', () => {
    show($applyBtn);
  });

  $input.addEventListener('input', () => {
    $applyBtn.disabled = disabled();
  });

  $applyBtn.addEventListener('click', () => {
    console.log('이동')
  });
}
