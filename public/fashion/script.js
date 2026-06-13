/* ============================================================
   Aurelia Studio — Premium Fashion Landing Page
   Main JavaScript · Vanilla JS · No Dependencies
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === 1. Reduced Motion Check ===
  // ---------------------------------------------------------------
  // Respect user's OS-level motion preference. When enabled we skip
  // autoplay timers and let CSS handle instant transitions.
  // ---------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  // === 2. Navbar Scroll ===
  // ---------------------------------------------------------------
  // Add `.scrolled` class to the site header once the user scrolls
  // past 40 px. This lets CSS apply a compact / frosted-glass look.
  // ---------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');

  if (siteHeader) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case page is already scrolled
  }


  // === 3. Mobile Menu ===
  // ---------------------------------------------------------------
  // Hamburger toggle, close button, link-tap-to-close, and Escape
  // key support. Body scroll is locked while the menu is open.
  // ---------------------------------------------------------------
  const hamburger   = document.querySelector('.hamburger');
  const mobileMenu  = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

  const openMenu = () => {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });


  // === 4. Hero Carousel ===
  // ---------------------------------------------------------------
  // 3-slide hero with autoplay, progress bar, dot indicators,
  // featured-card content updates, keyboard navigation, and
  // hover-to-pause behaviour.
  // ---------------------------------------------------------------
  const heroSlides       = document.querySelectorAll('.hero-slide');
  const heroCurrent      = document.querySelector('.hero-current');
  const heroTotal        = document.querySelector('.hero-total');
  const heroProgressBar  = document.querySelector('.hero-progress-bar');
  const heroPrev         = document.querySelector('.hero-prev');
  const heroNext         = document.querySelector('.hero-next');
  const heroDots         = document.querySelectorAll('.hero-dot');
  const heroFeaturedCard  = document.querySelector('.hero-featured-card');
  const heroFeaturedLabel = document.querySelector('.hero-featured-label');
  const heroFeaturedTitle = document.querySelector('.hero-featured-title');
  const heroFeaturedLink  = document.querySelector('.hero-featured-link');
  const heroSection       = document.querySelector('.hero');

  // Slide content data — used to update the featured card on change
  const slideData = [
    {
      eyebrow: 'NEW COLLECTION · 2026',
      headline: 'Effortless essentials for modern everyday style.',
      sub: 'Discover premium wardrobe pieces designed for comfort, confidence, and timeless daily wear.',
      cta1: { text: 'View Collection', href: '/demo/aurelia-studio/collection' },
      cta2: { text: 'View Lookbook', href: '#lookbook' },
      featured: { label: 'FEATURED', title: 'The Everyday Capsule', link: 'Explore the collection →', href: '/demo/aurelia-studio/collection' }
    },
    {
      eyebrow: 'LIMITED DROP',
      headline: 'Soft layers for slow mornings and city afternoons.',
      sub: 'Explore breathable fabrics, relaxed silhouettes, and versatile pieces for every plan.',
      cta1: { text: 'Explore Knitwear', href: '/demo/aurelia-studio/collection' },
      cta2: { text: 'See Styling Ideas', href: '#lookbook' },
      featured: { label: 'LIMITED', title: 'Soft Knit Layers', link: 'Available this season →', href: '/demo/aurelia-studio/collection' }
    },
    {
      eyebrow: 'EDITORIAL LOOKBOOK',
      headline: 'Minimal pieces. Endless outfit possibilities.',
      sub: 'Build a capsule wardrobe with timeless essentials that feel polished without effort.',
      cta1: { text: 'Browse Lookbook', href: '#lookbook' },
      cta2: { text: 'Start Styling', href: '#order' },
      featured: { label: 'STYLING', title: 'Office Minimal Edit', link: 'See the look →', href: '#lookbook' }
    }
  ];

  const totalSlides = heroSlides.length;
  let currentSlide  = 0;
  let autoplayId    = null;

  /**
   * Zero-pad a number to two digits (1 → "01").
   */
  const zeroPad = (n) => String(n).padStart(2, '0');

  /**
   * Reset the progress bar animation by forcing a reflow.
   */
  const resetProgress = () => {
    if (!heroProgressBar) return;
    heroProgressBar.style.animation = 'none';
    heroProgressBar.offsetHeight; // force reflow
    heroProgressBar.style.animation = '';
  };

  /**
   * Navigate to a specific slide by index.
   * Handles class toggling, counter update, dot highlight,
   * featured-card content swap, and progress bar restart.
   */
  const goToSlide = (index) => {
    if (totalSlides === 0) return;

    // Clamp index within bounds
    currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;

    // 1) Toggle .active on slides
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    // 2) Update slide counter text
    if (heroCurrent) heroCurrent.textContent = zeroPad(currentSlide + 1);
    if (heroTotal)   heroTotal.textContent   = zeroPad(totalSlides);

    // 3) Update dot indicators
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    // 4) Update featured card content
    const data = slideData[currentSlide];
    if (data) {
      if (heroFeaturedLabel) heroFeaturedLabel.textContent = data.featured.label;
      if (heroFeaturedTitle) heroFeaturedTitle.textContent = data.featured.title;
      if (heroFeaturedLink)  heroFeaturedLink.textContent  = data.featured.link;
      if (heroFeaturedCard && data.featured.href) heroFeaturedCard.setAttribute('href', data.featured.href);
    }

    // 5) Restart progress bar
    resetProgress();
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  /**
   * Start the autoplay interval (5 s per slide).
   */
  const startAutoplay = () => {
    if (prefersReducedMotion) return; // honour reduced-motion
    stopAutoplay();
    autoplayId = setInterval(nextSlide, 5000);
  };

  /**
   * Stop the autoplay interval.
   */
  const stopAutoplay = () => {
    if (autoplayId !== null) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  // Initialise carousel only if slides exist
  if (totalSlides > 0) {
    // Set initial state
    goToSlide(0);

    // Prev / Next buttons
    if (heroPrev) heroPrev.addEventListener('click', () => { prevSlide(); startAutoplay(); });
    if (heroNext) heroNext.addEventListener('click', () => { nextSlide(); startAutoplay(); });

    // Dot click navigation
    heroDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.dataset.slide, 10);
        if (!isNaN(target)) {
          goToSlide(target);
          startAutoplay(); // restart timer after manual navigation
        }
      });
    });

    // Keyboard navigation (← / →)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { nextSlide(); startAutoplay(); }
      if (e.key === 'ArrowLeft')  { prevSlide(); startAutoplay(); }
    });

    // Pause autoplay on hover (desktop), resume on leave
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoplay);
      heroSection.addEventListener('mouseleave', startAutoplay);
    }

    // Kick off autoplay (skipped when reduced motion is on)
    startAutoplay();
  }


  // === 5. Lookbook Carousel ===
  // ---------------------------------------------------------------
  // Horizontal scroll-snap carousel for the editorial lookbook.
  // The items are real anchor links, so the cards stay clickable on
  // both desktop and mobile. Buttons simply move the track sideways.
  // ---------------------------------------------------------------
  const lookbookTrack = document.querySelector('[data-lookbook-track]');
  const lookbookPrev  = document.querySelector('[data-lookbook-prev]');
  const lookbookNext  = document.querySelector('[data-lookbook-next]');

  if (lookbookTrack) {
    const getScrollStep = () => {
      const firstCard = lookbookTrack.querySelector('.lookbook-item');
      if (!firstCard) return lookbookTrack.clientWidth * 0.85;
      const gap = parseFloat(getComputedStyle(lookbookTrack).columnGap || getComputedStyle(lookbookTrack).gap || 18);
      return firstCard.getBoundingClientRect().width + gap;
    };

    const updateLookbookButtons = () => {
      if (!lookbookPrev || !lookbookNext) return;
      const maxScroll = lookbookTrack.scrollWidth - lookbookTrack.clientWidth - 2;
      lookbookPrev.disabled = lookbookTrack.scrollLeft <= 2;
      lookbookNext.disabled = lookbookTrack.scrollLeft >= maxScroll;
    };

    if (lookbookPrev) {
      lookbookPrev.addEventListener('click', () => {
        lookbookTrack.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      });
    }

    if (lookbookNext) {
      lookbookNext.addEventListener('click', () => {
        lookbookTrack.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      });
    }

    lookbookTrack.addEventListener('scroll', updateLookbookButtons, { passive: true });
    window.addEventListener('resize', updateLookbookButtons);
    updateLookbookButtons();
  }




  // === 6. Product Quick View + Full Collection Modal ===
  // ---------------------------------------------------------------
  // Product cards open a premium detail modal. Customers can choose
  // color and size, then the Order Now button sends a prefilled
  // WhatsApp message directly for the selected product.
  // ---------------------------------------------------------------
  const products = [
    {
      id: 'linen-relaxed-shirt',
      name: 'Linen Relaxed Shirt',
      price: '$49',
      badge: 'BEST SELLER',
      category: 'Tops',
      short: 'A breathable linen shirt with a relaxed everyday fit.',
      desc: 'A breathable linen shirt with a relaxed everyday fit. Perfect for warm days, coffee runs, and easy layering.',
      colors: ['Ivory', 'Sand', 'Black'],
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: 'Lightweight linen blend',
      fit: 'Relaxed fit',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      alt: 'Linen relaxed shirt in neutral tone displayed on a flat lay'
    },
    {
      id: 'soft-knit-cardigan',
      name: 'Soft Knit Cardigan',
      price: '$64',
      badge: 'NEW',
      category: 'Outerwear',
      short: 'A soft layering piece for slow mornings and cool evenings.',
      desc: 'A soft layering piece for slow mornings and cool evenings. Designed with a cozy drape and timeless texture.',
      colors: ['Oat', 'Mocha', 'Cream'],
      sizes: ['S', 'M', 'L'],
      fabric: 'Soft knit cotton blend',
      fit: 'Relaxed layer',
      image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=80',
      alt: 'Soft knit cardigan and neutral clothing pieces on a rack'
    },
    {
      id: 'everyday-wide-pants',
      name: 'Everyday Wide Pants',
      price: '$58',
      badge: 'LIMITED',
      category: 'Bottoms',
      short: 'Easy wide-leg pants designed for movement and comfort.',
      desc: 'Easy wide-leg pants designed for movement and comfort. A polished essential for casual and workday styling.',
      colors: ['Cream', 'Stone', 'Black'],
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: 'Soft structured twill',
      fit: 'High-rise wide leg',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
      alt: 'Everyday wide-leg pants in a clean neutral fashion style'
    },
    {
      id: 'minimal-midi-dress',
      name: 'Minimal Midi Dress',
      price: '$72',
      badge: "EDITOR'S PICK",
      category: 'Dresses',
      short: 'A clean midi dress for workdays, weekends, and dinner plans.',
      desc: 'A clean midi dress for workdays, weekends, and dinner plans. Minimal lines with effortless polish.',
      colors: ['Black', 'Sand'],
      sizes: ['S', 'M', 'L'],
      fabric: 'Smooth woven blend',
      fit: 'True to size',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      alt: 'Minimal midi dress with a flowing silhouette'
    },
    {
      id: 'oversized-blazer',
      name: 'Oversized Blazer',
      price: '$89',
      badge: 'PREMIUM',
      category: 'Outerwear',
      short: 'A structured yet relaxed blazer for polished daily styling.',
      desc: 'A structured yet relaxed blazer for polished daily styling. Built for capsule wardrobes and smart layering.',
      colors: ['Taupe', 'Charcoal'],
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: 'Structured suiting blend',
      fit: 'Oversized fit',
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=80',
      alt: 'Oversized blazer in a relaxed structured style'
    },
    {
      id: 'essential-cotton-tee',
      name: 'Essential Cotton Tee',
      price: '$29',
      badge: 'EVERYDAY',
      category: 'Tops',
      short: 'A soft cotton tee made to become your daily foundation.',
      desc: 'A soft cotton tee made to become your daily foundation. Easy to tuck, layer, and repeat.',
      colors: ['White', 'Beige', 'Black'],
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: '100% soft cotton jersey',
      fit: 'Classic regular fit',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
      alt: 'Essential cotton tee in white folded neatly'
    }
  ];

  const productModal = document.querySelector('[data-product-modal]');
  const collectionModal = document.querySelector('[data-collection-modal]');
  const collectionGrid = document.querySelector('[data-collection-grid]');
  const collectionFilterButtons = document.querySelectorAll('[data-filter]');
  const openCollectionButtons = document.querySelectorAll('[data-open-collection]');
  const modalImage = document.querySelector('[data-modal-image]');
  const modalBadge = document.querySelector('[data-modal-badge]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalPrice = document.querySelector('[data-modal-price]');
  const modalDesc = document.querySelector('[data-modal-desc]');
  const modalFabric = document.querySelector('[data-modal-fabric]');
  const modalFit = document.querySelector('[data-modal-fit]');
  const colorOptionsWrap = document.querySelector('[data-color-options]');
  const sizeOptionsWrap = document.querySelector('[data-size-options]');
  const selectedColorText = document.querySelector('[data-selected-color]');
  const selectedSizeText = document.querySelector('[data-selected-size]');
  const modalWhatsApp = document.querySelector('[data-modal-whatsapp]');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');

  let activeProduct = null;
  let selectedColor = '';
  let selectedSize = '';
  let lastFocusedElement = null;

  const productById = (id) => products.find(product => product.id === id);

  const buildWhatsAppUrl = (product) => {
    const colorText = selectedColor || (product.colors && product.colors[0]) || 'Not selected';
    const sizeText = selectedSize || (product.sizes && product.sizes[0]) || 'Not selected';
    const message = `Hi Aurelia Studio, I am interested in the ${product.name}. Size: ${sizeText}. Color: ${colorText}. Is it available?`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  const setBodyModalState = (isOpen) => {
    document.body.classList.toggle('modal-open', isOpen);
  };

  const openModal = (modal) => {
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setBodyModalState(true);
    const closeButton = modal.querySelector('[data-close-modal]');
    if (closeButton) closeButton.focus({ preventScroll: true });
  };

  const closeModals = () => {
    document.querySelectorAll('.modal-overlay.open').forEach(modal => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    setBodyModalState(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  const updateOrderLink = () => {
    if (!activeProduct || !modalWhatsApp) return;
    modalWhatsApp.href = buildWhatsAppUrl(activeProduct);
  };

  const makeOptionButton = (type, value, isActive) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `modal-choice ${isActive ? 'active' : ''}`;
    button.textContent = value;
    button.dataset.optionType = type;
    button.dataset.optionValue = value;
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    return button;
  };

  const renderOptions = (product) => {
    if (!colorOptionsWrap || !sizeOptionsWrap) return;
    selectedColor = product.colors[0] || '';
    selectedSize = product.sizes[0] || '';

    colorOptionsWrap.innerHTML = '';
    product.colors.forEach((color, index) => colorOptionsWrap.appendChild(makeOptionButton('color', color, index === 0)));

    sizeOptionsWrap.innerHTML = '';
    product.sizes.forEach((size, index) => sizeOptionsWrap.appendChild(makeOptionButton('size', size, index === 0)));

    if (selectedColorText) selectedColorText.textContent = selectedColor;
    if (selectedSizeText) selectedSizeText.textContent = selectedSize;
  };

  const openProductModal = (productId) => {
    const product = productById(productId);
    if (!product || !productModal) return;

    activeProduct = product;

    if (modalImage) {
      modalImage.src = product.image;
      modalImage.alt = product.alt;
    }
    if (modalBadge) modalBadge.textContent = product.badge;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = product.price;
    if (modalDesc) modalDesc.textContent = product.desc;
    if (modalFabric) modalFabric.textContent = product.fabric;
    if (modalFit) modalFit.textContent = product.fit;

    renderOptions(product);
    updateOrderLink();
    openModal(productModal);
  };

  const renderCollection = (filter = 'All') => {
    if (!collectionGrid) return;
    const visibleProducts = filter === 'All' ? products : products.filter(product => product.category === filter);
    collectionGrid.innerHTML = visibleProducts.map(product => `
      <button class="collection-product-card" type="button" data-product-id="${product.id}" aria-label="View details for ${product.name}">
        <span class="collection-product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
        <span class="collection-product-meta">${product.category}</span>
        <strong>${product.name}</strong>
        <span>${product.short}</span>
        <em>${product.price}</em>
      </button>
    `).join('');
  };

  const openCollectionModal = () => {
    // Collection is now a separate page to avoid stacking modals with product details.
    // This fallback only exists in case an old data-open-collection trigger remains.
    if (!collectionModal) {
      window.location.href = '/demo/aurelia-studio/collection';
      return;
    }
    renderCollection('All');
    collectionFilterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === 'All'));
    openModal(collectionModal);
  };

  // Render the dedicated All Collection page grid on page load.
  if (collectionGrid && !collectionModal) {
    renderCollection('All');
    collectionFilterButtons.forEach(button => button.classList.toggle('active', button.dataset.filter === 'All'));
  }

  document.querySelectorAll('.product-card').forEach(card => {
    const productId = card.dataset.productId;
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      openProductModal(productId);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProductModal(productId);
      }
    });
  });

  document.querySelectorAll('.product-quick-view, .product-detail-link').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openProductModal(button.dataset.productId);
    });
  });

  if (colorOptionsWrap) {
    colorOptionsWrap.addEventListener('click', (event) => {
      const button = event.target.closest('[data-option-type="color"]');
      if (!button) return;
      selectedColor = button.dataset.optionValue;
      colorOptionsWrap.querySelectorAll('.modal-choice').forEach(choice => {
        choice.classList.toggle('active', choice === button);
        choice.setAttribute('aria-pressed', choice === button ? 'true' : 'false');
      });
      if (selectedColorText) selectedColorText.textContent = selectedColor;
      updateOrderLink();
    });
  }

  if (sizeOptionsWrap) {
    sizeOptionsWrap.addEventListener('click', (event) => {
      const button = event.target.closest('[data-option-type="size"]');
      if (!button) return;
      selectedSize = button.dataset.optionValue;
      sizeOptionsWrap.querySelectorAll('.modal-choice').forEach(choice => {
        choice.classList.toggle('active', choice === button);
        choice.setAttribute('aria-pressed', choice === button ? 'true' : 'false');
      });
      if (selectedSizeText) selectedSizeText.textContent = selectedSize;
      updateOrderLink();
    });
  }

  openCollectionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openCollectionModal();
    });
  });

  collectionFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'All';
      collectionFilterButtons.forEach(item => item.classList.toggle('active', item === button));
      renderCollection(filter);
    });
  });

  if (collectionGrid) {
    collectionGrid.addEventListener('click', (event) => {
      const card = event.target.closest('[data-product-id]');
      if (!card) return;
      openProductModal(card.dataset.productId);
    });
  }

  closeModalButtons.forEach(button => button.addEventListener('click', closeModals));

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModals();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModals();
  });

  // Hide broken remote images gracefully so the portfolio never shows raw alt text.
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      const wrap = img.closest('.product-image-wrap, .lookbook-item, .collection-product-card, .product-modal-media');
      if (wrap) wrap.classList.add('image-fallback');
      img.style.opacity = '0';
    }, { once: true });
  });

  // === 7. FAQ Accordion ===
  // ---------------------------------------------------------------
  // Only-one-open behaviour: clicking a question closes all others
  // before opening the target. Clicking an already-open question
  // simply closes it.
  // ---------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close every item first
      faqItems.forEach(i => {
        i.classList.remove('open');
        const q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // If it wasn't already open, open it
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });


  // === 8. Scroll Reveal ===
  // ---------------------------------------------------------------
  // Elements with `.reveal` fade/slide into view once they enter
  // the viewport. Each element is observed only once (unobserve
  // after first intersection).
  // ---------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  // === 9. Smooth Scroll ===
  // ---------------------------------------------------------------
  // Intercept clicks on any in-page anchor link and scroll smoothly
  // to the target section. Falls back to default if no target found.
  // ---------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href   = this.getAttribute('href');
      if (!href || href === '#') return; // ignore bare "#" links
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}); // end DOMContentLoaded
