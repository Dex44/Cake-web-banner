// Refresh code.
var refresh_count2 = localStorage.getItem('refresh');

if (refresh_count2) {
  document.getElementById('refresh_count2').innerText = 101-refresh_count2;
  refresh_count2 = parseInt(refresh_count2) - 1;
  localStorage.setItem('refresh', refresh_count2);
}
else {
  refresh_count2 = 1;
  localStorage.setItem('refresh', refresh_count2);
  document.getElementById('refresh_count2').innerText = refresh_count2;
}