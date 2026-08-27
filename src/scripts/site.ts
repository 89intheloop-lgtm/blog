function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function setTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    const sun = btn.querySelector('.icon-sun');
    const moon = btn.querySelector('.icon-moon');
    if (sun && moon) {
      const isDark = theme === 'dark';
      sun.toggleAttribute('hidden', isDark);
      moon.toggleAttribute('hidden', !isDark);
    }
  });
}

function initTheme() {
  setTheme(getTheme());
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });
}

function initMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('mobile-nav');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });
}

type SearchItem = {
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
};

function initSearch() {
  const overlay = document.querySelector<HTMLElement>('[data-search-overlay]');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const results = document.querySelector<HTMLElement>('[data-search-results]');
  const empty = document.querySelector<HTMLElement>('[data-search-empty]');
  const openButtons = document.querySelectorAll('[data-search-open]');
  const indexEl = document.getElementById('search-index');
  if (!overlay || !input || !results || !empty || !indexEl) return;

  let items: SearchItem[] = [];
  try {
    items = JSON.parse(indexEl.textContent || '[]');
  } catch {
    items = [];
  }

  const open = () => {
    overlay.hidden = false;
    overlay.classList.add('open');
    input.focus();
  };

  const close = () => {
    overlay.classList.remove('open');
    overlay.hidden = true;
    input.value = '';
    results.innerHTML = '';
    empty.hidden = false;
    empty.textContent = 'Start typing to find an article.';
  };

  openButtons.forEach((btn) => btn.addEventListener('click', open));
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      open();
    }
    if (event.key === 'Escape' && overlay.classList.contains('open')) {
      close();
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!q) {
      empty.hidden = false;
      empty.textContent = 'Start typing to find an article.';
      return;
    }

    const matches = items.filter((item) => {
      const haystack = [item.title, item.description, item.category, ...item.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });

    if (!matches.length) {
      empty.hidden = false;
      empty.textContent = 'No articles matched that search.';
      return;
    }

    empty.hidden = true;
    matches.slice(0, 8).forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}"><strong>${item.title}</strong><span>${item.category} · ${item.description}</span></a>`;
      results.appendChild(li);
    });
  });
}

function initCopyCode() {
  document.querySelectorAll('pre').forEach((pre) => {
    if (pre.querySelector('.copy-btn')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.textContent || pre.textContent || '';
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 1600);
      } catch {
        button.textContent = 'Failed';
      }
    });
    pre.appendChild(button);
  });
}

function initCopyLink() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-link]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.url || window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.textContent = original;
        }, 1600);
      } catch {
        btn.textContent = 'Copy failed';
      }
    });
  });
}

initTheme();
initMenu();
initSearch();
initCopyCode();
initCopyLink();
