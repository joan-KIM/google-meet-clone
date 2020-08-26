function disabled(value) {
  return value === '';
}

export function Input($target, $applyBtn){
  $target.addEventListener('focus', () => {
    $applyBtn.style.display = "block";
  });

  $target.addEventListener('input', () => {
    $applyBtn.disabled = disabled($target.value);
  })
}
