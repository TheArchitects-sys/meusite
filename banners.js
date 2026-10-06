/**
 * NEOTHEON — BANNERS MÍTICOS STANDALONE CONTROLLER
 * Architecture & Interaction Engine for banners.html
 * Powered by OPERATIONS_DATABASE (content/operacoes/operacoes_data.js)
 */

(function () {
  'use strict';

  const DB = window.OPERATIONS_DATABASE;
  if (!DB) {
    console.error('NEOTHEON: OPERATIONS_DATABASE not loaded.');
    return;
  }

  // Safe data getters
  function getCurrentBanners() {
    return Array.isArray(DB.banners) ? DB.banners : (Array.isArray(DB.currentBanners) ? DB.currentBanners : []);
  }

  function getPrize(id) {
    return (DB.prizes && DB.prizes[id]) ? DB.prizes[id] : null;
  }

  function getHistoricalBanners() {
    return Array.isArray(DB.historicalBanners) ? DB.historicalBanners : [];
  }

  // State Management
  const state = {
    activeBannerId: 'grito-da-guerra',
    activePrizeId: 'compasso-sangue-ferro',
    activeRefineLevel: 'R1', // 'R1'..'R5'
    prizeFilterNature: 'all', // 'all' | 'bencao' | 'equipamento'
    characterSheetCode: localStorage.getItem('neotheon_sheet_code') || '#001',
    activeModal: null
  };

  // DOM Cache
  const dom = {};

  function cacheDom() {
    dom.bannerTabsContainer = document.getElementById('banner-tabs-container');
    dom.bannerShowcaseMount = document.getElementById('banner-showcase-mount');
    dom.prizesGridContainer = document.getElementById('prizes-grid-container');
    dom.prizesCountBadge = document.getElementById('prizes-count-badge');
    dom.prizeFilterChips = document.getElementById('prize-filter-chips');
    dom.prizeInspectorMount = document.getElementById('prize-inspector-mount');
    dom.historicalArchiveGrid = document.getElementById('historical-archive-grid');
    
    // Modals
    dom.modalDiscord = document.getElementById('modal-discord-prepare');
    dom.inputSheetCode = document.getElementById('input-character-sheet');
    dom.discordPreview = document.getElementById('discord-formatted-preview');
    dom.btnCopyDiscord = document.getElementById('btn-copy-discord-msg');
    dom.discordToast = document.getElementById('discord-copy-toast');
    
    dom.modalRefine = document.getElementById('modal-refine-comparison');
    dom.modalRefineTitle = document.getElementById('modal-refine-title');
    dom.modalRefineBody = document.getElementById('modal-refine-body');
    
    dom.modalArchive = document.getElementById('modal-archive-reader');
    dom.modalArchiveTitle = document.getElementById('modal-archive-title');
    dom.modalArchiveBody = document.getElementById('modal-archive-body');
  }

  // ── ROUTING & URL SYNC ──
  function initRouting() {
    const params = new URLSearchParams(window.location.search);
    const bParam = params.get('banner');
    const pParam = params.get('premio');
    const rParam = params.get('refino');

    const banners = getCurrentBanners();
    if (bParam && banners.find(b => b.id === bParam)) {
      state.activeBannerId = bParam;
    }

    const currentBanner = banners.find(b => b.id === state.activeBannerId);
    if (pParam && currentBanner && currentBanner.prizes.includes(pParam) && getPrize(pParam)) {
      state.activePrizeId = pParam;
    } else if (currentBanner && currentBanner.prizes.length > 0) {
      state.activePrizeId = currentBanner.prizes[0];
    }

    if (rParam && ['R1', 'R2', 'R3', 'R4', 'R5'].includes(rParam)) {
      state.activeRefineLevel = rParam;
    } else {
      state.activeRefineLevel = 'R1';
    }

    updateUrl(false);
  }

  function updateUrl(push = true) {
    const url = new URL(window.location);
    url.searchParams.set('banner', state.activeBannerId);
    url.searchParams.set('premio', state.activePrizeId);
    url.searchParams.set('refino', state.activeRefineLevel);

    if (push) {
      window.history.pushState({}, '', url);
    } else {
      window.history.replaceState({}, '', url);
    }
  }

  window.addEventListener('popstate', () => {
    initRouting();
    renderAll();
  });

  // ── RENDERING FUNCTIONS ──

  function renderAll() {
    renderBannerTabs();
    renderBannerShowcase();
    renderPrizesGrid();
    renderPrizeInspector();
    renderHistoricalArchive();
  }

  // 1. Banner Tabs
  function renderBannerTabs() {
    if (!dom.bannerTabsContainer) return;
    const banners = getCurrentBanners();

    dom.bannerTabsContainer.innerHTML = banners.map(banner => {
      const isActive = banner.id === state.activeBannerId;
      return `
        <button type="button" class="collection-tab-btn ${isActive ? 'active' : ''}" data-banner-id="${banner.id}" role="tab" aria-selected="${isActive}">
          <div class="tab-status">${banner.badge}</div>
          <div class="tab-title">${banner.title}</div>
          <div class="tab-desc">${banner.summary || banner.description}</div>
        </button>
      `;
    }).join('');

    dom.bannerTabsContainer.querySelectorAll('.collection-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bId = btn.getAttribute('data-banner-id');
        if (bId === state.activeBannerId) return;

        state.activeBannerId = bId;
        const banner = getCurrentBanners().find(b => b.id === bId);
        if (banner && banner.prizes && banner.prizes.length > 0) {
          state.activePrizeId = banner.prizes[0];
          state.activeRefineLevel = 'R1';
        }
        updateUrl(true);
        renderAll();
      });
    });
  }

  // 2. Banner Showcase (Full-Width Panoramic Lateral Presentation)
  function renderBannerShowcase() {
    if (!dom.bannerShowcaseMount) return;
    const banner = getCurrentBanners().find(b => b.id === state.activeBannerId);
    if (!banner) return;

    const heroImg = banner.heroImage || 'assets/banners/banner_grito_da_guerra.png';

    dom.bannerShowcaseMount.innerHTML = `
      <div class="banner-showcase-fullwidth">
        <!-- Panoramic Key Art spanning lateral width -->
        <div class="banner-panoramic-frame">
          <img src="${heroImg}" alt="${banner.title}" id="hero-tilt-img" onerror="this.onerror=null;this.src='assets/valiria_mission.jpg';">
          <div class="banner-panoramic-overlay"></div>
          <div class="banner-panoramic-badge font-mono">${banner.badge}</div>
        </div>

        <!-- Meta Info & Quick Actions Bar -->
        <div class="banner-showcase-bar">
          <div class="space-y-3 max-w-4xl">
            <div>
              <span class="banner-eyebrow mb-1">${banner.type === 'permanente' ? 'CICLO PERMANENTE' : 'CICLO TEMPORÁRIO'}</span>
              <h2 class="font-cinzel text-2xl sm:text-3xl font-black text-white leading-tight">${banner.title}</h2>
            </div>

            <p class="text-sm text-[#b8b2a5] leading-relaxed font-serif">
              ${banner.description}
            </p>

            <!-- Canonical Guarantee Stats -->
            <div class="p-3.5 bg-black/60 border border-white/10 rounded-lg space-y-1.5 text-xs font-mono">
              <div class="text-[#f1d27a]">
                <strong>Garantia Canônica:</strong> ${banner.type === 'permanente' ? 'Garantia na 91ª oração (contador separado).' : 'Garantia na 41ª oração / 4º pretendido garantido.'}
              </div>
              <div class="text-[#7e786b]">
                <strong>Contador:</strong> ${banner.type === 'permanente' ? 'Separado dos temporários • Preservado entre ciclos' : 'Compartilhado entre temporários • Preservado entre ciclos'}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap gap-3 pt-2 lg:pt-0">
            <a href="#prizes-catalog-section" class="btn-gold-primary text-xs">
              <span>Ver Prêmios (${(banner.prizes || []).length})</span>
              <span>↓</span>
            </a>
            <button type="button" class="btn-gold-secondary text-xs" onclick="window.openDiscordPrepareModal()">
              <span>Preparar Oração</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Prizes Grid
  function renderPrizesGrid() {
    if (!dom.prizesGridContainer) return;
    const banner = getCurrentBanners().find(b => b.id === state.activeBannerId);
    if (!banner) return;

    let prizeIds = banner.prizes || [];

    // Filter by nature if active
    if (state.prizeFilterNature !== 'all') {
      prizeIds = prizeIds.filter(pId => {
        const p = getPrize(pId);
        if (!p) return false;
        const nat = (p.nature || '').toLowerCase();
        if (state.prizeFilterNature === 'bencao') {
          return nat.includes('bênção') || nat.includes('bencao');
        }
        if (state.prizeFilterNature === 'equipamento') {
          return !nat.includes('bênção') && !nat.includes('bencao');
        }
        return true;
      });
    }

    if (dom.prizesCountBadge) {
      dom.prizesCountBadge.textContent = `${prizeIds.length} prêmio${prizeIds.length === 1 ? '' : 's'}`;
    }

    if (prizeIds.length === 0) {
      dom.prizesGridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center bg-[#0d1017] border border-white/10 rounded-xl p-8">
          <div class="text-2xl text-[#d4af37] mb-2">❖</div>
          <h4 class="font-cinzel text-base text-white font-bold">Nenhum prêmio corresponde ao filtro selecionado.</h4>
        </div>
      `;
      return;
    }

    dom.prizesGridContainer.innerHTML = prizeIds.map(pId => {
      const p = getPrize(pId);
      if (!p) return '';
      const isSelected = p.id === state.activePrizeId;
      const imgSrc = p.image || 'assets/valiria_mission.jpg';

      const isBencao = (p.nature || '').toLowerCase().includes('bênção') || (p.nature || '').toLowerCase().includes('bencao');
      const natureLabel = isBencao ? '[BÊNÇÃO EXCLUSIVA]' : '[ARMAS EXCLUSIVAS]';
      const natureTextClass = isBencao ? 'text-nature-rubro' : 'text-nature-silver';
      const badgeClass = isBencao ? 'nature-rubro' : 'nature-silver';

      return `
        <button type="button" class="prize-card ${isSelected ? 'selected' : ''}" data-prize-id="${p.id}" role="button" aria-selected="${isSelected}">
          <div class="prize-card-media">
            <img src="${imgSrc}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/valiria_mission.jpg';">
            <span class="prize-card-badge ${badgeClass}">${p.code || 'EXCLUSIVO'}</span>
          </div>

          <div class="prize-card-body">
            <div>
              <div class="prize-card-nature font-mono ${natureTextClass}">${natureLabel}</div>
              <h3 class="prize-card-title">${p.name}</h3>
              <p class="prize-card-desc">${p.summary || ''}</p>
            </div>

            <div class="prize-card-action-bar">
              <span class="flex items-center gap-1.5">
                <span class="text-xs ${isBencao ? 'text-rose-400' : 'text-slate-300'}">${isSelected ? '●' : '○'}</span>
                <span>${isSelected ? 'Inspecionando' : 'Inspecionar'}</span>
              </span>
              <span class="text-xs">➔</span>
            </div>
          </div>
        </button>
      `;
    }).join('');

    // Single event listener delegation for prize selection
    dom.prizesGridContainer.querySelectorAll('.prize-card').forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.getAttribute('data-prize-id');
        if (pId === state.activePrizeId) return;

        state.activePrizeId = pId;
        state.activeRefineLevel = 'R1';
        updateUrl(true);
        renderPrizesGrid();
        renderPrizeInspector();

        // Smooth scroll to inspector
        const inspector = document.getElementById('prize-inspector-section');
        if (inspector) {
          inspector.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  // 4. Vitrine Mítica & Inspector
  function renderPrizeInspector() {
    if (!dom.prizeInspectorMount) return;
    const p = getPrize(state.activePrizeId);
    if (!p) return;

    const imgSrc = p.image || 'assets/valiria_mission.jpg';
    const activeLevel = state.activeRefineLevel || 'R1';

    const isBencao = (p.nature || '').toLowerCase().includes('bênção') || (p.nature || '').toLowerCase().includes('bencao');
    const natureLabel = isBencao ? '[BÊNÇÃO EXCLUSIVA]' : '[ARMAS EXCLUSIVAS]';
    const natureTextClass = isBencao ? 'text-nature-rubro' : 'text-nature-silver';
    const badgeClass = isBencao ? 'nature-rubro' : 'nature-silver';

    // Get refinement delta
    let refineDeltaText = '';
    if (activeLevel === 'R1') {
      refineDeltaText = 'Efeito base ativado em R1.';
    } else if (p.refinements && p.refinements[activeLevel]) {
      refineDeltaText = p.refinements[activeLevel];
    } else {
      refineDeltaText = 'Alterações não documentadas neste nível.';
    }

    // Full interpretive lore narrative
    const fullLore = p.interpretive || p.description || p.summary || 'Descrição canônica em catalogação.';

    dom.prizeInspectorMount.innerHTML = `
      <div class="prize-inspector-stage">
        <!-- Left: Sticky Sidebar containing Art & Action Buttons (never overlapped on scroll) -->
        <div class="inspector-sidebar-sticky">
          <div class="inspector-art-box">
            <img src="${imgSrc}" alt="${p.name}" onerror="this.onerror=null;this.src='assets/valiria_mission.jpg';">
            <div class="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-mono ${badgeClass}">
              ${p.code || 'EXCLUSIVO'}
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button type="button" class="btn-gold-primary w-full text-xs" onclick="window.openDiscordPrepareModal()">
              <span>Preparar Oração</span>
              <span>↗</span>
            </button>
            <button type="button" class="btn-gold-secondary w-full text-xs" onclick="window.openRefineComparisonModal()">
              <span>Comparar R1–R5</span>
              <span>☷</span>
            </button>
          </div>
        </div>

        <!-- Right: Canonical Mechanics, Refinements & Complete Lore Narrative -->
        <div class="space-y-5">
          <!-- Title & Badges -->
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="banner-eyebrow mb-0 font-mono ${natureTextClass}">${natureLabel}</span>
              ${p.class ? `<span class="text-xs font-mono text-[#f1d27a] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">${p.class}</span>` : ''}
            </div>
            <h3 class="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">${p.name}</h3>
            ${p.alias ? `<div class="text-xs font-mono text-[#7e786b] mt-0.5">Identificado também como: ${p.alias}</div>` : ''}
            <p class="text-sm text-[#b8b2a5] mt-2 leading-relaxed font-serif">${p.summary || ''}</p>
          </div>

          <!-- Refinements Selector Bar -->
          <div class="p-4 bg-black/60 border border-white/10 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-cinzel text-xs font-bold text-white uppercase tracking-wider">Nível de Refinamento:</span>
              <span class="text-xs font-mono text-[#f1d27a]">Custo fixo: 50 Golds + Cópia Idêntica</span>
            </div>

            <div class="inspector-refine-pills">
              ${['R1', 'R2', 'R3', 'R4', 'R5'].map(lvl => `
                <button type="button" class="refine-pill-btn ${lvl === activeLevel ? 'active' : ''}" data-refine-level="${lvl}">
                  ${lvl === 'R1' ? 'R1 (Base)' : lvl}
                </button>
              `).join('')}
            </div>

            <!-- Canonical Base Effect (R1) -->
            <div class="p-3.5 bg-[#050608] border border-white/5 rounded text-xs sm:text-sm text-[#f0ece1] leading-relaxed font-mono">
              <div class="text-[11px] font-bold text-[#f1d27a] uppercase mb-1 font-sans">Efeito Base Canônico (R1):</div>
              <div class="whitespace-pre-line text-[#cfc7b4]">${p.r1Effect || 'Efeito base conforme catálogo.'}</div>
            </div>

            <!-- Specific Refinement Delta -->
            ${activeLevel !== 'R1' ? `
              <div id="inspector-refine-delta" class="p-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded text-xs font-mono text-[#f1d27a]">
                <div class="font-bold uppercase text-[11px] mb-1">Alterações Específicas Deste Nível (${activeLevel}):</div>
                <div>${refineDeltaText}</div>
              </div>
            ` : ''}

            <div class="text-[11px] text-[#7e786b] font-serif italic">
              * Nota: Leia o efeito base em conjunto com as alterações do refinamento selecionado.
            </div>
          </div>

          <!-- Expandable Complete Lore Narrative (Vitrine Mítica) -->
          <div class="banner-accordion">
            <details open>
              <summary>
                <span class="flex items-center gap-2">
                  <span class="text-[#d4af37]">📜</span>
                  <span>História & Descrição Interpretativa Canônica</span>
                </span>
                <span class="text-xs font-mono text-[#7e786b]">Recolher ▾</span>
              </summary>
              <div class="accordion-body font-serif text-sm text-[#cfc7b4] leading-relaxed pt-3 whitespace-pre-line">
                ${fullLore}
              </div>
            </details>
          </div>
        </div>
      </div>
    `;

    // Attach Refinement Pills Click Handlers
    dom.prizeInspectorMount.querySelectorAll('.refine-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lvl = btn.getAttribute('data-refine-level');
        if (lvl === state.activeRefineLevel) return;

        state.activeRefineLevel = lvl;
        updateUrl(true);
        renderPrizeInspector();
      });
    });
  }

  // 5. Historical Archive
  function renderHistoricalArchive() {
    if (!dom.historicalArchiveGrid) return;
    const history = getHistoricalBanners();

    dom.historicalArchiveGrid.innerHTML = history.map(arch => `
      <div class="bg-[#0c0e14] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition-all">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono text-[#7e786b] uppercase">COLEÇÃO ENCERRADA</span>
            <span class="text-[10px] font-mono text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded">Arquivado</span>
          </div>
          <h4 class="font-cinzel text-base font-bold text-white">${arch.title}</h4>
          <p class="text-xs text-[#b8b2a5] leading-relaxed line-clamp-2">${arch.summary}</p>
        </div>

        <div class="pt-4 border-t border-white/5 mt-4">
          <button type="button" class="btn-gold-secondary w-full text-xs py-2 btn-open-archive" data-archive-id="${arch.id}">
            Consultar Prêmios & Lore Integral ➔
          </button>
        </div>
      </div>
    `).join('');

    dom.historicalArchiveGrid.querySelectorAll('.btn-open-archive').forEach(btn => {
      btn.addEventListener('click', () => {
        const aId = btn.getAttribute('data-archive-id');
        openArchiveModal(aId);
      });
    });
  }

  // ── MODALS IMPLEMENTATION ──

  window.openDiscordPrepareModal = function () {
    if (!dom.modalDiscord) return;
    const banner = getCurrentBanners().find(b => b.id === state.activeBannerId);
    const prize = getPrize(state.activePrizeId);

    const sheetCode = state.characterSheetCode || '#001';
    if (dom.inputSheetCode) {
      dom.inputSheetCode.value = sheetCode;
    }

    updateDiscordPreview();

    dom.modalDiscord.classList.add('open');
    state.activeModal = dom.modalDiscord;
  };

  function updateDiscordPreview() {
    const banner = getCurrentBanners().find(b => b.id === state.activeBannerId);
    const prize = getPrize(state.activePrizeId);
    const sheet = (dom.inputSheetCode && dom.inputSheetCode.value.trim()) ? dom.inputSheetCode.value.trim() : '#001';

    state.characterSheetCode = sheet;
    localStorage.setItem('neotheon_sheet_code', sheet);

    const bTitle = banner ? banner.title : 'Banner Mítico';
    const pTitle = prize ? prize.name : 'Prêmio Pretendido';

    const msg = `Gostaria de realizar uma oração no banner **${bTitle}**. Meu prêmio pretendido é **${pTitle}**. Ficha: \`${sheet}\`. Aguardo o acompanhamento de um ADM.`;

    if (dom.discordPreview) {
      dom.discordPreview.textContent = msg;
    }
  }

  function initModalEvents() {
    if (dom.inputSheetCode) {
      dom.inputSheetCode.addEventListener('input', updateDiscordPreview);
    }

    if (dom.btnCopyDiscord) {
      dom.btnCopyDiscord.addEventListener('click', () => {
        if (!dom.discordPreview) return;
        const text = dom.discordPreview.textContent;
        navigator.clipboard.writeText(text).then(() => {
          if (dom.discordToast) {
            dom.discordToast.classList.remove('hidden');
            setTimeout(() => dom.discordToast.classList.add('hidden'), 3500);
          }
        });
      });
    }
  }

  // Comparison Modal
  window.openRefineComparisonModal = function () {
    const p = getPrize(state.activePrizeId);
    if (!p || !dom.modalRefine) return;

    if (dom.modalRefineTitle) {
      dom.modalRefineTitle.textContent = `Comparativo de Refinos: ${p.name}`;
    }

    const ref = p.refinements || {};

    if (dom.modalRefineBody) {
      dom.modalRefineBody.innerHTML = `
        <div class="space-y-4">
          <div class="text-xs text-[#b8b2a5] leading-relaxed">
            Consulte a progressão de cada nível de refinamento (R1 a R5). O procedimento é realizado com um <strong>Forjador</strong> (armas/itens) ou <strong>Manipulador Genético</strong> (pets) ao custo fixo de <strong>50 Golds + prêmio idêntico</strong>.
          </div>

          <div class="p-3 bg-black/60 border border-white/10 rounded font-mono text-xs">
            <div class="text-[#f1d27a] font-bold uppercase mb-1">Efeito Base (R1):</div>
            <div class="text-[#cfc7b4] whitespace-pre-line">${p.r1Effect}</div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr class="border-b border-white/10 text-[#7e786b]">
                  <th class="py-2.5 px-3">Nível</th>
                  <th class="py-2.5 px-3">Alterações Específicas do Refinamento</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 text-[#cfc7b4]">
                <tr class="bg-white/5">
                  <td class="py-2.5 px-3 font-bold text-[#f1d27a]">R1 (Base)</td>
                  <td class="py-2.5 px-3">Valores padrão descritos no efeito base.</td>
                </tr>
                <tr>
                  <td class="py-2.5 px-3 font-bold text-white">R2</td>
                  <td class="py-2.5 px-3">${ref.R2 || 'Sem alteração explícita.'}</td>
                </tr>
                <tr>
                  <td class="py-2.5 px-3 font-bold text-white">R3</td>
                  <td class="py-2.5 px-3">${ref.R3 || 'Sem alteração explícita.'}</td>
                </tr>
                <tr>
                  <td class="py-2.5 px-3 font-bold text-white">R4</td>
                  <td class="py-2.5 px-3">${ref.R4 || 'Sem alteração explícita.'}</td>
                </tr>
                <tr class="bg-[#d4af37]/10">
                  <td class="py-2.5 px-3 font-bold text-[#f1d27a]">R5 (Máximo)</td>
                  <td class="py-2.5 px-3 text-[#f1d27a] font-bold">${ref.R5 || 'Sem alteração explícita.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    dom.modalRefine.classList.add('open');
    state.activeModal = dom.modalRefine;
  };

  // Archive Modal
  function openArchiveModal(archiveId) {
    const arch = getHistoricalBanners().find(a => a.id === archiveId);
    if (!arch || !dom.modalArchive) return;

    if (dom.modalArchiveTitle) {
      dom.modalArchiveTitle.textContent = `${arch.title} — Acervo Histórico`;
    }

    if (dom.modalArchiveBody) {
      dom.modalArchiveBody.innerHTML = `
        <div class="space-y-4">
          <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-300">
            ℹ <strong>Coleção Histórica Arquivada:</strong> Os prêmios abaixo pertenceram a ciclos anteriores. Permanecem disponíveis para consulta de regras, builds e lore, mas não aceitam novas orações.
          </div>

          <div class="font-serif italic text-sm text-[#cfc7b4] leading-relaxed border-b border-white/10 pb-4">
            ${arch.summary}
          </div>

          <div class="space-y-3">
            <h4 class="font-cinzel text-sm font-bold text-[#f1d27a] uppercase tracking-wider">Conteúdo Canônico do Documento Original:</h4>
            <div class="text-xs sm:text-sm text-[#b8b2a5] leading-relaxed bg-[#050608] p-4 rounded border border-white/5 font-mono whitespace-pre-line max-h-96 overflow-y-auto">
              ${arch.fullContent || 'Conteúdo em catalogação.'}
            </div>
          </div>
        </div>
      `;
    }

    dom.modalArchive.classList.add('open');
    state.activeModal = dom.modalArchive;
  }

  window.closeBannersModal = function () {
    if (state.activeModal) {
      state.activeModal.classList.remove('open');
      state.activeModal = null;
    }
  };

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModal) {
      window.closeBannersModal();
    }
  });

  // Filter chips
  function initFilterChips() {
    if (!dom.prizeFilterChips) return;
    dom.prizeFilterChips.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter-nature');
        state.prizeFilterNature = filter;

        dom.prizeFilterChips.querySelectorAll('button').forEach(b => {
          b.className = 'px-3 py-1.5 rounded text-xs font-mono font-bold bg-white/5 text-[#b8b2a5] hover:bg-white/10 hover:text-white';
        });
        btn.className = 'px-3 py-1.5 rounded text-xs font-mono font-bold bg-[#d4af37] text-black';

        renderPrizesGrid();
      });
    });
  }

  // Initialize
  function init() {
    cacheDom();
    initRouting();
    initFilterChips();
    initModalEvents();
    renderAll();

    // Quick compare button
    const btnQuickComp = document.getElementById('btn-quick-compare-all');
    if (btnQuickComp) {
      btnQuickComp.addEventListener('click', window.openRefineComparisonModal);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
