// Refresh code.
var refresh_count = localStorage.getItem('refresh');

if (refresh_count) {
  document.getElementById('refresh_count').innerText = refresh_count;
  refresh_count = parseInt(refresh_count) + 1;
  localStorage.setItem('refresh', refresh_count);
}
else {
  refresh_count = 1;
  localStorage.setItem('refresh', refresh_count);
  document.getElementById('refresh_count').innerText = refresh_count;
}