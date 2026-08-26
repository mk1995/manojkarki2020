/* =====================================================
   DataFusionX Portfolio - Shared JS
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Auto year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile drawer
  const menuOpen = document.getElementById('menuOpen');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerOverlay) drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerOverlay) drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuOpen) menuOpen.addEventListener('click', openMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-drawer a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Actors page filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const actorCards = document.querySelectorAll('.actor-card');

  if (filterButtons.length && actorCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        actorCards.forEach(function (card) {
          if (filter === 'all' || card.dataset.cat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
