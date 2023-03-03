function validate() {
  document.querySelector('button[type=submit]').disabled = true;
  document.querySelector('.processing').classList.remove('hidden');
  function one(callback) {
    setTimeout(function() {
      document.querySelector('.processing').classList.add('hidden');
      document.querySelector('.success').classList.remove('hidden');
      callback();
    }, 2000);
  }
  function two() {
    setTimeout(function() {
      location.reload();
    }, 2000);
  }
  one(two);
}