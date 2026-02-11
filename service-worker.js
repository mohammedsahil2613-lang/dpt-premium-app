window.onload=()=>{
  setLanguage(localStorage.getItem("lang")||"en");
  document.getElementById('langSelect').value=localStorage.getItem("lang")||"en";
  showContent();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('/service-worker.js').then(()=>console.log('SW registered')); }
};
</script>
</body>
</html>
