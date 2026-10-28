/**
 * Luxpryme Nano Bloco Basic - Interactive Application Logic
 * Adheres strictly to taste-skill guidelines: fast, accessible, robust.
 * 1.0-Second Video Morph Transition & Mobile Side Navigation Drawer.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // MODEL DATA SPECIFICATIONS (Official Luxpryme Engineering Data)
  // --------------------------------------------------------------------------
  const MODELS = {
    '600': {
      code: 'NANO-600',
      lumens: '600 lumens',
      lumensVal: 600,
      area: '100 m²',
      areaVal: 100,
      battery: 'Lítio 18650 3,7V 1.500 mAh',
      weight: '285 g',
      autonomy: '2,5 horas',
      power110: '7 W',
      power220: '28 W',
      dimensions: '125 × 153 × 46 mm',
      ip: 'IP-20',
      norm: 'NBR 10898'
    },
    '1200': {
      code: 'NANO-1200',
      lumens: '1.200 lumens',
      lumensVal: 1200,
      area: '200 m²',
      areaVal: 200,
      battery: 'Lítio 18650 3,7V 2.500 mAh',
      weight: '285 g',
      autonomy: '2,5 horas',
      power110: '7 W',
      power220: '28 W',
      dimensions: '125 × 153 × 46 mm',
      ip: 'IP-20',
      norm: 'NBR 10898'
    },
    '2200': {
      code: 'NANO-2200',
      lumens: '2.200 lumens',
      lumensVal: 2200,
      area: '300 m²',
      areaVal: 300,
      battery: 'Lítio 18650 3,7V 5.200 mAh',
      weight: '330 g',
      autonomy: '2,5 horas',
      power110: '7 W',
      power220: '28 W',
      dimensions: '125 × 153 × 46 mm',
      ip: 'IP-20',
      norm: 'NBR 10898'
    }
  };

  // High-Resolution Proportional Product Assets for Simulator and Gallery
  const ASSETS = {
    white: {
      hero: 'assets/images/hero_frame_white.png',
      front: 'assets/images/white_front.png',
      angle: 'assets/images/white_angle.png',
      side: 'assets/images/white_front.png',
      iso: 'assets/images/white_angle.png',
      thumb: 'assets/images/white_thumb.png'
    },
    black: {
      hero: 'assets/images/hero_frame_black.png',
      front: 'assets/images/black_front.png',
      angle: 'assets/images/black_angle.png',
      side: 'assets/images/black_side.png',
      iso: 'assets/images/black_iso.png',
      thumb: 'assets/images/black_thumb.png'
    }
  };

  // 1-Second Video Morph Transitions (Muted, Square Frame)
  const VIDEOS = {
    whiteToBlack: 'assets/videos/white_to_black.mp4',
    blackToWhite: 'assets/videos/black_to_white.mp4'
  };

  // --------------------------------------------------------------------------
  // STATE
  // --------------------------------------------------------------------------
  let currentLuminaireColor = 'white';
  let currentModelKey = '1200';
  let currentGalleryAngle = 'hero';
  let isTransitioning = false;

  // --------------------------------------------------------------------------
  // DOM ELEMENTS
  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer elements
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');

  // Hero luminaire video transition & finish switcher
  const heroFrameTrigger = document.getElementById('hero-frame-trigger');
  const heroVideo = document.getElementById('hero-video');
  const finishBtnWhite = document.getElementById('finish-btn-white');
  const finishBtnBlack = document.getElementById('finish-btn-black');

  // Photo Gallery Carousel
  const galleryTrack = document.getElementById('gallery-track');
  const galleryPrevBtn = document.getElementById('gallery-prev-btn');
  const galleryNextBtn = document.getElementById('gallery-next-btn');
  const galleryDots = document.querySelectorAll('.gallery-dot');
  const gallerySlides = document.querySelectorAll('.gallery-slide');

  // Technical Area Sizing Tool
  const calcAreaInput = document.getElementById('calc-area-input');
  const calcUnitsResult = document.getElementById('calc-units-result');
  const calcCtaQuote = document.getElementById('calc-cta-quote');
  const qtyModel600 = document.getElementById('qty-model-600');
  const qtyModel1200 = document.getElementById('qty-model-1200');
  const qtyModel2200 = document.getElementById('qty-model-2200');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const calcModelCards = document.querySelectorAll('.calc-model-card');

  // Mobile Specifications Cards
  const specsSwitchBtns = document.querySelectorAll('.specs-switch-btn');
  const specsCards = {
    '600': document.getElementById('specs-card-600'),
    '1200': document.getElementById('specs-card-1200'),
    '2200': document.getElementById('specs-card-2200')
  };


  // Quote Form
  const quoteForm = document.getElementById('quote-form');
  const formModelSelect = document.getElementById('form-model');
  const formColorSelect = document.getElementById('form-color');
  const formQtyInput = document.getElementById('form-qty');
  const formNameInput = document.getElementById('form-name');
  const formCityInput = document.getElementById('form-city');
  const formMsgInput = document.getElementById('form-msg');

  // Preload videos and images for zero-latency instant transitions
  function preloadVideos() {
    [VIDEOS.whiteToBlack, VIDEOS.blackToWhite].forEach(src => {
      const v = document.createElement('video');
      v.preload = 'auto';
      v.src = src;
      v.load();
    });
  }

  function preloadImages() {
    [ASSETS.white.hero, ASSETS.black.hero, ASSETS.white.front, ASSETS.black.front].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // --------------------------------------------------------------------------
  // MOBILE NAVIGATION SLIDE-IN DRAWER
  // --------------------------------------------------------------------------
  function openDrawer() {
    if (!mobileNavDrawer || !mobileNavBackdrop) return;
    mobileNavDrawer.classList.add('is-open');
    mobileNavBackdrop.classList.add('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileNavDrawer || !mobileNavBackdrop) return;
    mobileNavDrawer.classList.remove('is-open');
    mobileNavBackdrop.classList.remove('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }
  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeDrawer);
  }
  drawerNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // LUMINAIRE FINISH SWITCHER (1.0-SECOND VIDEO MORPH TRANSITION)
  // --------------------------------------------------------------------------
  function setLuminaireColor(targetColor, animate = true) {
    if (targetColor === currentLuminaireColor && animate) return;
    if (isTransitioning) return;

    currentLuminaireColor = targetColor;

    // Update finish buttons
    if (finishBtnWhite && finishBtnBlack) {
      if (targetColor === 'white') {
        finishBtnWhite.classList.add('active');
        finishBtnWhite.setAttribute('aria-selected', 'true');
        finishBtnBlack.classList.remove('active');
        finishBtnBlack.setAttribute('aria-selected', 'false');
      } else {
        finishBtnBlack.classList.add('active');
        finishBtnBlack.setAttribute('aria-selected', 'true');
        finishBtnWhite.classList.remove('active');
        finishBtnWhite.setAttribute('aria-selected', 'false');
      }
    }

    // Synchronize frame background with video corners (1000ms transition)
    if (heroFrameTrigger) {
      if (targetColor === 'black') {
        heroFrameTrigger.classList.add('finish-black');
      } else {
        heroFrameTrigger.classList.remove('finish-black');
      }
    }

    // Synchronize quote form
    if (formColorSelect) {
      formColorSelect.value = targetColor === 'white' ? 'Branco' : 'Preto';
    }

    if (!heroVideo) return;

    // Initial non-animated setup
    if (!animate) {
      heroVideo.src = VIDEOS.whiteToBlack;
      heroVideo.currentTime = 0;
      heroVideo.pause();
      return;
    }

    // 1-Second Video Morph Transition
    isTransitioning = true;
    const videoSrc = targetColor === 'black' ? VIDEOS.whiteToBlack : VIDEOS.blackToWhite;

    let transitionEnded = false;
    const finishTransition = () => {
      if (transitionEnded) return;
      transitionEnded = true;
      isTransitioning = false;
      heroVideo.pause();
    };

    heroVideo.src = videoSrc;
    heroVideo.currentTime = 0;
    heroVideo.onended = finishTransition;

    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        finishTransition();
      });
    }

    // Safety timeout slightly past 1.0s (1050ms)
    setTimeout(finishTransition, 1050);
  }

  // Event Listeners for Finish Switcher
  if (finishBtnWhite) {
    finishBtnWhite.addEventListener('click', () => setLuminaireColor('white', true));
  }
  if (finishBtnBlack) {
    finishBtnBlack.addEventListener('click', () => setLuminaireColor('black', true));
  }
  if (heroFrameTrigger) {
    heroFrameTrigger.addEventListener('click', (e) => {
      if (e.target.closest('.finish-btn')) return;
      const nextColor = currentLuminaireColor === 'white' ? 'black' : 'white';
      setLuminaireColor(nextColor, true);
    });
    heroFrameTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const nextColor = currentLuminaireColor === 'white' ? 'black' : 'white';
        setLuminaireColor(nextColor, true);
      }
    });
  }

  // --------------------------------------------------------------------------
  // TECHNICAL SIZING BY AREA (ABNT NBR 10898)
  // --------------------------------------------------------------------------
  function updateAreaCalculation() {
    if (!calcAreaInput) return;
    const area = Math.max(10, parseFloat(calcAreaInput.value) || 0);

    const qty600 = Math.ceil(area / MODELS['600'].areaVal);
    const qty1200 = Math.ceil(area / MODELS['1200'].areaVal);
    const qty2200 = Math.ceil(area / MODELS['2200'].areaVal);

    if (qtyModel600) qtyModel600.textContent = qty600;
    if (qtyModel1200) qtyModel1200.textContent = qty1200;
    if (qtyModel2200) qtyModel2200.textContent = qty2200;

    const selectedModel = MODELS[currentModelKey] || MODELS['1200'];
    const selectedQty = Math.ceil(area / selectedModel.areaVal);
    const unitWord = selectedQty === 1 ? 'unidade' : 'unidades';

    if (calcUnitsResult) {
      calcUnitsResult.innerHTML = `Para <strong>${area} m²</strong>, recomendamos <strong>${selectedQty} ${unitWord}</strong> do modelo <strong>${selectedModel.code}</strong> (${selectedModel.lumens}) conforme a norma <strong>NBR 10898</strong>.`;
    }

    if (formQtyInput) {
      formQtyInput.value = selectedQty;
    }
    if (formModelSelect) {
      formModelSelect.value = currentModelKey;
    }
  }

  function selectModel(modelKey) {
    if (!MODELS[modelKey]) return;
    currentModelKey = modelKey;

    // Update model cards in calculator
    calcModelCards.forEach(card => {
      if (card.getAttribute('data-model') === modelKey) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update quote form select
    if (formModelSelect) {
      formModelSelect.value = modelKey;
    }

    // Synchronize mobile specs tab
    showSpecsCard(modelKey);

    // Recalculate summary banner
    updateAreaCalculation();
  }

  // Preset Buttons
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetVal = btn.getAttribute('data-preset');
      if (calcAreaInput && presetVal) {
        calcAreaInput.value = presetVal;
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateAreaCalculation();
      }
    });
  });

  // Model Cards Click in Calculator
  calcModelCards.forEach(card => {
    card.addEventListener('click', () => {
      const model = card.getAttribute('data-model');
      if (model) selectModel(model);
    });
  });

  // Area input change
  if (calcAreaInput) {
    calcAreaInput.addEventListener('input', () => {
      const val = calcAreaInput.value;
      presetBtns.forEach(b => {
        if (b.getAttribute('data-preset') === val) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      updateAreaCalculation();
    });
  }

  // Quote CTA in Calculator
  if (calcCtaQuote) {
    calcCtaQuote.addEventListener('click', () => {
      if (formModelSelect) formModelSelect.value = currentModelKey;
      if (formQtyInput && calcAreaInput) {
        const area = Math.max(10, parseFloat(calcAreaInput.value) || 0);
        formQtyInput.value = Math.ceil(area / MODELS[currentModelKey].areaVal);
      }
    });
  }

  // --------------------------------------------------------------------------
  // MOBILE SPECS CARDS SWITCHER
  // --------------------------------------------------------------------------
  function showSpecsCard(modelKey) {
    specsSwitchBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-specs') === modelKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    Object.keys(specsCards).forEach(key => {
      if (specsCards[key]) {
        specsCards[key].style.display = key === modelKey ? 'block' : 'none';
      }
    });
  }

  specsSwitchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const model = btn.getAttribute('data-specs');
      if (model) showSpecsCard(model);
    });
  });

  // --------------------------------------------------------------------------
  // PHOTO GALLERY CAROUSEL
  // --------------------------------------------------------------------------
  function setupGalleryCarousel() {
    if (!galleryTrack) return;

    function getScrollStep() {
      if (gallerySlides && gallerySlides.length > 0) {
        return gallerySlides[0].offsetWidth + 20;
      }
      return 300;
    }

    function updateActiveDot(index) {
      galleryDots.forEach((dot, i) => {
        const isActive = i === index;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function scrollToSlide(index) {
      if (gallerySlides[index]) {
        gallerySlides[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
        updateActiveDot(index);
      }
    }

    if (galleryPrevBtn) {
      galleryPrevBtn.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      });
    }

    if (galleryNextBtn) {
      galleryNextBtn.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      });
    }

    galleryDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10) || 0;
        scrollToSlide(idx);
      });
    });

    // Update active dot dynamically during scroll / swipe
    let scrollTimeout;
    galleryTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const trackRect = galleryTrack.getBoundingClientRect();
        let closestIdx = 0;
        let minDiff = Infinity;

        gallerySlides.forEach((slide, i) => {
          const slideRect = slide.getBoundingClientRect();
          const diff = Math.abs(slideRect.left - trackRect.left);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        });

        updateActiveDot(closestIdx);
      }, 50);
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // WHATSAPP QUOTE BUILDER
  // --------------------------------------------------------------------------
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const modelKey = formModelSelect ? formModelSelect.value : '1200';
      const model = MODELS[modelKey];
      const color = formColorSelect ? formColorSelect.value : 'Preto';
      const qty = formQtyInput ? formQtyInput.value : '1';
      const name = formNameInput ? formNameInput.value.trim() : '';
      const city = formCityInput ? formCityInput.value.trim() : '';
      const notes = formMsgInput ? formMsgInput.value.trim() : '';

      let msg = `Olá! Gostaria de um orçamento técnico da Luminária Nano Bloco Basic da Luxpryme.%0A%0A`;
      msg += `*Modelo:* ${model.code} (${model.lumens} - até ${model.area})%0A`;
      msg += `*Acabamento:* Gabinete ${color}%0A`;
      msg += `*Quantidade:* ${qty} unidade(s)%0A`;
      if (name) msg += `*Solicitante:* ${name}%0A`;
      if (city) msg += `*Cidade/Estado:* ${city}%0A`;
      if (notes) msg += `*Observações:* ${notes}%0A`;
      msg += `%0APoderiam me enviar proposta com prazo de entrega e condições comerciais?`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=5547991649265&text=${msg}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // --------------------------------------------------------------------------
  // MULTI-PAGE CATALOG & REPRESENTATIVES FILTERS
  // --------------------------------------------------------------------------
  function setupCatalogFilters() {
    const filterBtns = document.querySelectorAll('.catalog-filter-btn');
    const productCards = document.querySelectorAll('.product-card[data-category]');
    if (!filterBtns.length || !productCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');
        filterBtns.forEach(b => b.classList.toggle('active', b === btn));

        productCards.forEach(card => {
          const itemCat = card.getAttribute('data-category') || '';
          const categories = itemCat.split(/\s+/);
          if (cat === 'all' || categories.includes(cat)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      const targetBtn = document.querySelector(`.catalog-filter-btn[data-filter="${catParam}"]`);
      if (targetBtn) targetBtn.click();
    }
  }

  function setupRepFilters() {
    const repBtns = document.querySelectorAll('.rep-filter-btn');
    const repCards = document.querySelectorAll('.rep-card[data-region]');
    if (!repBtns.length || !repCards.length) return;

    repBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const region = btn.getAttribute('data-region');
        repBtns.forEach(b => b.classList.toggle('active', b === btn));

        repCards.forEach(card => {
          const itemRegion = card.getAttribute('data-region');
          if (region === 'all' || itemRegion === region) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  function setupProductDetailGallery() {
    const mainImg = document.getElementById('product-main-img');
    const thumbBtns = document.querySelectorAll('.product-thumb-btn');
    if (!mainImg || !thumbBtns.length) return;

    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const fullSrc = btn.getAttribute('data-full-img');
        if (!fullSrc) return;

        thumbBtns.forEach(b => b.classList.toggle('active', b === btn));
        mainImg.style.opacity = '0.3';
        mainImg.style.transform = 'scale(0.97)';

        setTimeout(() => {
          mainImg.src = fullSrc;
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, 150);
      });
    });
  }

  // --------------------------------------------------------------------------
  // INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    if (heroVideo) {
      preloadVideos();
      preloadImages();
      setLuminaireColor('white', false);
    }
    if (calcModelCards && calcModelCards.length) {
      selectModel('1200');
    }
    if (specsSwitchBtns && specsSwitchBtns.length) {
      showSpecsCard('1200');
    }
    setupGalleryCarousel();
    updateAreaCalculation();
    setupCatalogFilters();
    setupRepFilters();
    setupProductDetailGallery();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
