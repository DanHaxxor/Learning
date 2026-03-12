function showQuestion() {
  document.getElementById('welcome-panel').classList.add('hidden');
  document.getElementById('question-panel').classList.remove('hidden');
}

function selectOption(el) {
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}
