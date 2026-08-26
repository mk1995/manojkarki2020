/* =====================================================
   DataFusionX Portfolio - Shared JS
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
     // Chatbot widget
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const chatDrawer = document.getElementById('chatDrawer');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');

  if (chatToggleBtn && chatDrawer) {
<<<<<<< HEAD
    chatToggleBtn.addEventListener('click', () => chatDrawer.classList.toggle('open'));
=======
    chatToggleBtn.addEventListener('click', () => chatDrawer.classList.add('open'));
>>>>>>> e5a2984a7643e3933692ee61fbe751248bc3984b
    chatCloseBtn.addEventListener('click', () => chatDrawer.classList.remove('open'));

    const knowledgeBase = [
      { keywords: ['hello','hi ','hii','hey','yo','namaste'], match: l => /^(hi|hii|hey|yo|hello|namaste)\b/.test(l),
        reply: "Hey! 👋 I'm the DataFusionX assistant. Ask me about Manoj, our Apify Actors (Instagram, TikTok, Email Verifier, Google Maps), pricing, MCP/AI agents, or how to start a project." },
      { keywords: ['who is manoj','about manoj','who are you','who built this','who made this','your creator','about you','what is datafusionx'],
        reply: "Manoj Karki is a Senior Web Scraping & Data Pipeline Engineer trading as DataFusionX. He builds anti-bot-resilient Apify Actors, MCP servers for Claude/Cursor, and local Hermes+Ollama AI agent pipelines — 28+ public Actors with a >99% run success rate." },
      { keywords: ['actor','actors','tool','tools','what do you offer','services','products'],
        reply: "Here's the current Actor lineup:\n• Instagram Email & Phone Scraper — from $3.00/1k\n• Instagram Followers Scraper — from $2.80/1k\n• Instagram Following Scraper — from $2.80/1k\n• Instagram Comments Scraper — from $1.80/1k\n• Bulk Email Verifier — from $0.95/1k\n• TikTok Profile Scraper — from $3.55/1k\n• Google Maps Scraper\nTap 'Tools' in the nav for the full list, or ask about any one by name." },
      { keywords: ['instagram','insta','ig scraper','ig follower'],
        reply: "The Instagram Actors run cookie-free with no login/ban risk: Email & Phone Scraper (from $3.00/1k), Followers Scraper (from $2.80/1k), Following Scraper (from $2.80/1k), and Comments Scraper (from $1.80/1k). Which one are you after?" },
      { keywords: ['tiktok','tik tok'],
        reply: "The TikTok Profile & Contact Scraper (from $3.55/1k) bypasses dynamic signature checks with headless Playwright sessions to pull creator contact details, video metrics, and bio links." },
      { keywords: ['email verif','verify email','email list','smtp','catch-all','catch all'],
        reply: "The Bulk Email Verifier (from $0.95/1k) does SMTP probing, MX lookup, and catch-all detection for safe-to-send scores." },
      { keywords: ['google maps','gmaps','maps scraper','places scraper'],
        reply: "The Google Maps Scraper pulls places, contact details, and reviews for local lead-gen and market research." },
      { keywords: ['mcp','claude desktop','cursor','ai agent','vector db','pinecone','pgvector'],
        reply: "DataFusionX builds custom MCP servers that stream live scraper data straight into Claude Desktop, Cursor, or vector databases like Pinecone and Pgvector." },
      { keywords: ['hermes','local ai','ollama','offline','qwen','self hosted','self-hosted'],
        reply: "For zero SaaS token costs, Manoj builds local AI agent pipelines on the Hermes Framework with Ollama/Qwen models." },
      { keywords: ['price','pricing','cost','quote','how much','budget','rate'],
        reply: "Pricing depends on target complexity, volume, and anti-bot difficulty. Ready-made Actors run per-1,000-results; custom builds start around $500 up to $6,000+. Fill in the intake form for a real quote." },
      { keywords: ['timeline','how long','turnaround','delivery time','eta'],
        reply: "Typical turnaround: 1–3 days for urgent fixes, 1–2 weeks for standard custom Actors, flexible/retainer for ongoing pipelines." },
      { keywords: ['contact','reach you','whatsapp','linkedin','talk to manoj','get in touch'],
        reply: "Reach Manoj via WhatsApp or LinkedIn in the 'Connect With Engineering' section, or fill out the intake form." },
      { keywords: ['thank','thanks','thx'], reply: "Anytime! 🙌 Scroll down to the intake form or ping Manoj on WhatsApp." },
      { keywords: ['bye','goodbye','see you'], reply: "Take care! Come back anytime you have questions. 👋" }
    ];

    function findReply(rawText) {
      const lower = ' ' + rawText.toLowerCase().trim() + ' ';
      for (const entry of knowledgeBase) {
        if (entry.match && entry.match(lower.trim())) return entry.reply;
        if (entry.keywords.some(kw => lower.includes(kw))) return entry.reply;
      }
      return "I don't have a canned answer for that yet — but Manoj does! Ask about a specific Actor, pricing, or MCP/AI agents, or fill out the intake form.";
    }

    function handleUserMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      const userMsg = document.createElement('div');
      userMsg.className = 'msg msg-user';
      userMsg.textContent = text;
      chatMessages.appendChild(userMsg);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'msg msg-ai';
        aiMsg.style.whiteSpace = 'pre-line';
        aiMsg.textContent = findReply(text);
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    }

    chatSendBtn.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUserMessage(); });
  }

   
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

  function toggleMenu() {
    if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuOpen) menuOpen.addEventListener('click', toggleMenu);
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
