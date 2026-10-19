(() => {
  "use strict";
  // =========================================
  // بلدة العصير | Juice Town
  // التطبيق الرئيسي
  // =========================================
  const $ = (selector, root = document) =>
    root.querySelector(selector);
  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];
  const state = {
    lang: "ar",
    category: "all",
    search: "",
    cart: [],
    toastTimer: null
  };
  const icons = {
    orange: "🍊", lemon: "🍋", mango: "🥭",
    cocktail: "🍹", strawberry: "🍓", guava: "🍐",
    pineapple: "🍍", avocado: "🥑", pomegranate: "🔴",
    melon: "🍈", banana: "🍌", carrot: "🥕",
    raspberry: "🫐", "milk-shake-juice": "🥛",
    kiwi: "🥝", apple: "🍎", grape: "🍇",
    ginger: "🫚", watermelon: "🍉", papaya: "🍈",
    "awar-gal": "🍓", asoola: "🍯", aramny: "🍹",
    "avocado-mix": "🥑", pacto: "🥤",
    "moroccan-cocktail": "🍹", asfhani: "🍊",
    "kouwat-jabal": "🥭", "town-mix": "🍹",
    "blood-booster": "🍓", "healthy-cocktail": "🥬",
    "ruby-tuesday": "🍒", fitness: "🍏",
    nutella: "🍫", oreo: "🍪", bounty: "🥥",
    kitkat: "🍫", ferrero: "🍬", "twix-mix": "🍫",
    galaxy: "🍫", mars: "🍫", "m-and-m": "🍬",
    snickers: "🍫", "watermelon-mint": "🍉",
    "lemon-mint": "🍋",
    "pomegranate-smoothie": "🍇",
    "strawberry-smoothie": "🍓",
    "fruit-salad": "🍓"
  };
  const translations = {
    ar: {
      feature1: "نكهات على مزاجك",
      feature2: "اختر حجمك وإضافاتك",
      feature3: "طلبك عبر واتساب",
      cart: "السلة",
      freshTag: "طازج • طبيعي • منعش",
      heroTitle: "انتعاشك يبدأ من هنا",
      heroText: "اختر نكهتك المفضلة من بلدة العصير، وخلّ الانتعاش يوصل لك.",
      browse: "تصفح المنيو",
      heroNote: "نكهات ترسم يومك",
      menuEyebrow: "اختيارات طازجة",
      menuTitle: "منيو بلدة العصير",
      menuSub: "اكتشف مشروبك القادم",
      search: "ابحث عن صنف...",
      noResults: "ما لقينا أصناف تطابق بحثك.",
      yourOrder: "طلبك",
      emptyCart: "سلتك تنتظر أول اختيار!",
      emptyCartSub: "أضف شيء منعش وبيظهر هنا.",
      subtotal: "المجموع",
      checkout: "إتمام الطلب",
      checkoutNote: "سيتم تجهيز رسالة طلبك لفتحها في واتساب.",
      lastStep: "الخطوة الأخيرة",
      checkoutTitle: "تفاصيل الطلب",
      fullName: "الاسم الكامل",
      phone: "رقم الجوال",
      fulfillment: "طريقة الاستلام",
      delivery: "توصيل",
      pickup: "استلام من المحل",
      address: "العنوان / موقع التوصيل",
      notes: "ملاحظات إضافية",
      total: "الإجمالي",
      sendWhatsApp: "إرسال الطلب عبر واتساب",
      whatsappNote: "سيُفتح واتساب برسالة جاهزة؛ راجعها ثم اضغط إرسال.",
      footerText: "كل رشفة، لحظة انتعاش.",
      viewCart: "عرض السلة",
      add: "أضف للسلة",
      calories: "سعرة تقريبية",
      selectSize: "اختر الحجم",
      addon: "إضافات",
      added: "تمت الإضافة إلى السلة",
      remove: "حذف",
      qty: "الكمية",
      order: "طلب",
      deliveryAddressRequired: "يرجى كتابة عنوان التوصيل.",
      emptyCheckout: "أضف صنفًا إلى السلة أولًا.",
      categoryAll: "كل الأصناف",
      items: "صنف",
      smallFruit: "إضافة فواكه صغيرة",
      cornflakes: "إضافة كورن فليكس",
      creamChocolate: "إضافة كريمة وشوكولاتة",
      price: "السعر",
      currency: "ر.س"
    },
    en: {
      feature1: "Flavours your way",
      feature2: "Choose your size & extras",
      feature3: "Order via WhatsApp",
      cart: "Cart",
      freshTag: "FRESH • NATURAL • REFRESHING",
      heroTitle: "Your refresh starts here",
      heroText: "Pick your favorite from Juice Town and let the good refreshment come to you.",
      browse: "Explore the menu",
      heroNote: "Flavours to brighten your day",
      menuEyebrow: "Fresh picks",
      menuTitle: "Juice Town Menu",
      menuSub: "Discover your next favourite",
      search: "Search the menu...",
      noResults: "No items match your search.",
      yourOrder: "YOUR ORDER",
      emptyCart: "Your cart is waiting!",
      emptyCartSub: "Add something refreshing and it will appear here.",
      subtotal: "Subtotal",
      checkout: "Checkout",
      checkoutNote: "Your order message will be prepared for WhatsApp.",
      lastStep: "LAST STEP",
      checkoutTitle: "Order details",
      fullName: "Full name",
      phone: "Mobile number",
      fulfillment: "Fulfilment method",
      delivery: "Delivery",
      pickup: "Pickup from shop",
      address: "Delivery address / location",
      notes: "Additional notes",
      total: "Total",
      sendWhatsApp: "Send order via WhatsApp",
      whatsappNote: "WhatsApp will open with a prepared message. Review it and tap Send.",
      footerText: "Every sip, a refreshing moment.",
      viewCart: "View cart",
      add: "Add to cart",
      calories: "approx. kcal",
      selectSize: "Choose size",
      addon: "Add-ons",
      added: "Added to cart",
      remove: "Remove",
      qty: "Qty",
      order: "Order",
      deliveryAddressRequired: "Please enter a delivery address.",
      emptyCheckout: "Add an item to your cart first.",
      categoryAll: "All items",
      items: "items",
      smallFruit: "Small fruit add-on",
      cornflakes: "Cornflakes add-on",
      creamChocolate: "Cream & chocolate add-on",
      price: "Price",
      currency: "SAR"
    }
  };
  const t = key => translations[state.lang][key] || key;
  const rtl = () => state.lang === "ar";
  const money = value =>
    `${Number(value).toFixed(2)} ${t("currency")}`;
  const safeText = value =>
    String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  const menu = window.JUICE_TOWN_MENU;
  // لا نسمح لخطأ بيانات المنيو بتعطيل اختيار اللغة.
  // تسجيل مستمع اللغة يتم قبل تهيئة بقية الموقع.
  function showLanguageError(message) {
    console.error("[Juice Town]", message);
  }
  function enterSite(lang) {
    if (lang !== "ar" && lang !== "en") return;
    state.lang = lang;
    const screen = $("#language-screen");
    const shell = $(".site-shell");
    // إظهار الموقع وإخفاء شاشة اللغة مباشرة.
    if (screen) {
      screen.hidden = true;
      screen.classList.remove("leaving");
    }
    if (shell) shell.classList.add("ready");
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("english", lang === "en");
    try {
      localStorage.setItem("jt-lang", lang);
    } catch (error) {
      console.warn("تعذر حفظ اللغة على هذا الجهاز.");
    }
    // لا نعتمد على نجاح عرض المنيو لتغيير اللغة.
    try {
      setLanguage(lang);
    } catch (error) {
      console.error("تعذر تحديث بعض عناصر الصفحة:", error);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  // مستمع مباشر ومبكر لأزرار اختيار اللغة.
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-enter-language]");
    if (!button) return;
    event.preventDefault();
    enterSite(button.dataset.enterLanguage);
  });
  // =========================================
  // التحقق من البيانات
  // =========================================
  if (
    !menu ||
    !Array.isArray(menu.categories) ||
    !Array.isArray(menu.products)
  ) {
    showLanguageError(
      "بيانات المنيو غير موجودة. تأكد من تحميل Menu-data.js قبل app.js."
    );
    return;
  }
  // =========================================
  // أسماء المنتجات والأقسام
  // =========================================
  const productName = product =>
    product.name?.[state.lang] || product.name?.ar || "";
  const categoryName = category =>
    category?.[state.lang] || category?.ar || "";
  const sizeName = size =>
    size?.[state.lang] || size?.ar || "";
  function addonName(addon) {
    if (addon.id === "small-fruit") return t("smallFruit");
    if (addon.id === "cornflakes") return t("cornflakes");
    return t("creamChocolate");
  }
  function bind(selector, eventName, handler) {
    const element = $(selector);
    if (!element) {
      console.warn(`عنصر HTML غير موجود: ${selector}`);
      return;
    }
    element.addEventListener(eventName, handler);
  }
  // =========================================
  // تغيير اللغة
  // =========================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl() ? "rtl" : "ltr";
    document.body.classList.toggle("english", !rtl());
    const toggle = $("#language-toggle");
    if (toggle) {
      toggle.textContent = rtl() ? "English" : "العربية";
    }
    $$("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (translations[lang][key] !== undefined) {
        element.textContent = t(key);
      }
    });
    $$("[data-placeholder]").forEach(element => {
      element.placeholder = t(element.dataset.placeholder);
    });
    $$("[data-shop-ar]").forEach(element => {
      element.textContent = rtl() ? "بلدة العصير" : "Juice Town";
    });
    const fulfillment = $("#fulfillment");
    if (fulfillment) {
      const deliveryOption =
        fulfillment.querySelector('[value="delivery"]');
      const pickupOption =
        fulfillment.querySelector('[value="pickup"]');
      if (deliveryOption) deliveryOption.textContent = t("delivery");
      if (pickupOption) pickupOption.textContent = t("pickup");
    }
    renderCategories();
    renderProducts();
    renderCart();
    updateCheckoutSummary();
  }
  // =========================================
  // الأقسام
  // =========================================
  function renderCategories() {
    const target = $("#category-tabs");
    if (!target) return;
    const categories = [
      { id: "all", ar: t("categoryAll"), en: t("categoryAll") },
      ...menu.categories
    ];
    target.innerHTML = categories.map(category => `
      <button
        type="button"
        class="category-tab ${
          state.category === category.id ? "active" : ""
        }"
        data-category="${safeText(category.id)}"
      >
        ${safeText(
          category.id === "all"
            ? t("categoryAll")
            : categoryName(category)
        )}
      </button>
    `).join("");
  }
  // =========================================
  // المنتجات
  // =========================================
  function renderProducts() {
    const grid = $("#product-grid");
    if (!grid) return;
    const query = state.search.toLocaleLowerCase();
    const products = menu.products.filter(product => {
      const matchesCategory =
        state.category === "all" ||
        product.category === state.category;
      const nameAr = String(product.name?.ar || "").toLowerCase();
      const nameEn = String(product.name?.en || "").toLowerCase();
      const matchesSearch =
        nameAr.includes(query) ||
        nameEn.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    const results = $("#results-count");
    if (results) {
      results.textContent = `${products.length} ${t("items")}`;
    }
    const emptyState = $("#empty-state");
    if (emptyState) {
      emptyState.classList.toggle("hidden", products.length > 0);
    }
    grid.innerHTML = products.map(product => {
      const category = menu.categories.find(
        item => item.id === product.category
      );
      const sizes = product.sizes || [];
      const addonsList = product.addons || [];
      const firstSize = sizes[0];
      if (!firstSize) return "";
      const addons = addonsList.length ? `
        <div class="addons">
          <div class="product-category">${t("addon")}</div>
          ${addonsList.map(addon => `
            <label class="addon-option">
              <input
                type="checkbox"
                data-addon="${safeText(addon.id)}"
                data-product="${safeText(product.id)}"
              >
              <span>${safeText(addonName(addon))}</span>
              <em>+${addon.price} ${t("currency")}</em>
            </label>
          `).join("")}
        </div>
      ` : "";
      return `
        <article
          class="product-card"
          data-product-card="${safeText(product.id)}"
        >
          <div class="product-visual">
            <span class="product-emoji">
              ${icons[product.id] || "🥤"}
            </span>
            ${product.calories !== null
              ? `<span class="calorie-chip">
                   ${product.calories} ${t("calories")}
                 </span>`
              : ""}
          </div>
          <div class="product-body">
            <div class="product-title-row">
              <div>
                <h3 class="product-title">
                  ${safeText(productName(product))}
                </h3>
                <div class="product-category">
                  ${safeText(categoryName(category))}
                </div>
              </div>
              <span class="price-from">
                ${t("price")}<br>
                ${firstSize.price} ${t("currency")}
              </span>
            </div>
            <div class="product-controls">
              <select
                aria-label="${safeText(t("selectSize"))}: ${safeText(productName(product))}"
                data-size="${safeText(product.id)}"
              >
                ${sizes.map(size => `
                  <option value="${safeText(size.id)}">
                    ${safeText(sizeName(size))} — ${size.price} ${t("currency")}
                  </option>
                `).join("")}
              </select>
              ${addons}
              <button
                class="add-button"
                type="button"
                data-add="${safeText(product.id)}"
              >
                <span>${t("add")}</span>
                <span>＋</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }
  // =========================================
  // إعداد المنتج المختار
  // =========================================
  function selectedProductConfig(id) {
    const product = menu.products.find(item => item.id === id);
    if (!product) return null;
    const sizeSelect = $(`[data-size="${id}"]`);
    if (!sizeSelect) return null;
    const size = product.sizes.find(
      item => item.id === sizeSelect.value
    );
    if (!size) return null;
    const addons = $$(`[data-product="${id}"]:checked`)
      .map(input =>
        product.addons.find(addon => addon.id === input.dataset.addon)
      )
      .filter(Boolean);
    const unitPrice =
      size.price +
      addons.reduce((sum, addon) => sum + addon.price, 0);
    return { product, size, addons, unitPrice };
  }
  function addToCart(id) {
    const config = selectedProductConfig(id);
    if (!config) {
      showToast("تعذر اختيار هذا المنتج. حدّث الصفحة وحاول مجددًا.");
      return;
    }
    const { product, size, addons, unitPrice } = config;
    const addonIds = addons.map(addon => addon.id).sort();
    const key = [product.id, size.id, ...addonIds].join("|");
    const existing = state.cart.find(item => item.key === key);
    if (existing) {
      existing.qty++;
    } else {
      state.cart.push({
        key,
        productId: product.id,
        sizeId: size.id,
        addonIds,
        unitPrice,
        qty: 1
      });
    }
    renderCart();
    showToast(`${productName(product)} — ${t("added")}`);
  }
  // =========================================
  // بيانات عناصر السلة
  // =========================================
  function cartDescription(item) {
    const product = menu.products.find(
      product => product.id === item.productId
    );
    if (!product) return { product: null, size: null, addons: [] };
    const size = product.sizes.find(
      size => size.id === item.sizeId
    );
    const addons = item.addonIds
      .map(id => product.addons.find(addon => addon.id === id))
      .filter(Boolean);
    return { product, size, addons };
  }
  function cartTotal() {
    return state.cart.reduce(
      (sum, item) => sum + item.unitPrice * item.qty,
      0
    );
  }
  // =========================================
  // عرض السلة
  // =========================================
  function renderCart() {
    const count = state.cart.reduce(
      (sum, item) => sum + item.qty,
      0
    );
    const countElement = $("#cart-count");
    if (countElement) countElement.textContent = count;
    const empty = $("#cart-empty");
    if (empty) {
      empty.classList.toggle("hidden", state.cart.length > 0);
    }
    const itemsElement = $("#cart-items");
    if (itemsElement) {
      itemsElement.innerHTML = state.cart.map(item => {
        const { product, size, addons } = cartDescription(item);
        if (!product || !size) return "";
        const extras = addons.map(addonName).join("، ");
        return `
          <div class="cart-line">
            <div>
              <h3>${safeText(productName(product))}</h3>
              <p>
                ${safeText(sizeName(size))}
                ${extras ? ` · ${safeText(extras)}` : ""}
              </p>
              <div class="quantity-controls">
                <button
                  type="button"
                  data-qty="-1"
                  data-key="${safeText(item.key)}"
                >−</button>
                <strong>${item.qty}</strong>
                <button
                  type="button"
                  data-qty="1"
                  data-key="${safeText(item.key)}"
                >+</button>
                <button
                  type="button"
                  class="remove-line"
                  data-remove="${safeText(item.key)}"
                >${t("remove")}</button>
              </div>
            </div>
            <div class="line-price">
              ${money(item.unitPrice * item.qty)}
            </div>
          </div>
        `;
      }).join("");
    }
    const total = $("#cart-total");
    if (total) total.textContent = money(cartTotal());
    const checkoutTotal = $("#checkout-total");
    if (checkoutTotal) checkoutTotal.textContent = money(cartTotal());
    updateCheckoutSummary();
  }
  function updateCheckoutSummary() {
    const target = $("#checkout-summary");
    if (!target) return;
    if (!state.cart.length) {
      target.textContent = t("emptyCheckout");
      return;
    }
    target.innerHTML = state.cart.map(item => {
      const { product, size, addons } = cartDescription(item);
      if (!product || !size) return "";
      const extras = addons.length
        ? ` (${safeText(addons.map(addonName).join(", "))})`
        : "";
      return `
        <div class="summary-line">
          <span>
            ${item.qty}× ${safeText(productName(product))}
            · ${safeText(sizeName(size))}${extras}
          </span>
          <strong>
            ${money(item.unitPrice * item.qty)}
          </strong>
        </div>
      `;
    }).join("");
    const total = $("#checkout-total");
    if (total) total.textContent = money(cartTotal());
  }
  // =========================================
  // فتح وإغلاق السلة
  // =========================================
  function openCart() {
    const backdrop = $("#cart-backdrop");
    const drawer = $("#cart-drawer");
    if (backdrop) backdrop.hidden = false;
    if (drawer) {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
    }
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    const backdrop = $("#cart-backdrop");
    const drawer = $("#cart-drawer");
    if (drawer) {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (backdrop) backdrop.hidden = true;
    document.body.style.overflow = "";
  }
  // =========================================
  // إتمام الطلب
  // =========================================
  function openCheckout() {
    if (!state.cart.length) {
      showToast(t("emptyCheckout"));
      return;
    }
    closeCart();
    const modal = $("#checkout-modal");
    if (modal) modal.hidden = false;
    document.body.style.overflow = "hidden";
    updateCheckoutSummary();
    toggleAddress();
  }
  function closeCheckout() {
    const modal = $("#checkout-modal");
    if (modal) modal.hidden = true;
    document.body.style.overflow = "";
  }
  function toggleAddress() {
    const fulfillment = $("#fulfillment");
    const addressField = $("#address-field");
    if (!fulfillment || !addressField) return;
    const pickup = fulfillment.value === "pickup";
    addressField.classList.toggle("hidden", pickup);
    const textarea = $("textarea", addressField);
    if (textarea) textarea.required = !pickup;
  }
  // =========================================
  // رسائل التنبيه
  // =========================================
  function showToast(message) {
    const toast = $("#toast");
    const toastMessage = $("#toast-message");
    if (!toast || !toastMessage) {
      console.log(message);
      return;
    }
    clearTimeout(state.toastTimer);
    toastMessage.textContent = message;
    toast.classList.add("show");
    state.toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 4200);
  }
  // =========================================
  // إرسال الطلب إلى واتساب
  // =========================================
  function sendWhatsApp(event) {
    event.preventDefault();
    if (!state.cart.length) {
      showToast(t("emptyCheckout"));
      return;
    }
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const fulfillment = String(form.get("fulfillment") || "delivery");
    const address = String(form.get("address") || "").trim();
    const notes = String(form.get("notes") || "").trim();
    if (fulfillment === "delivery" && !address) {
      const textarea = $("#address-field textarea");
      if (textarea) textarea.focus();
      showToast(t("deliveryAddressRequired"));
      return;
    }
    const lines = [
      `🧃 ${menu.shop.englishName} | ${menu.shop.name}`,
      "━━━━━━━━━━━━━━",
      `👤 ${t("fullName")}: ${name}`,
      `📱 ${t("phone")}: ${phone}`,
      `🚚 ${t("fulfillment")}: ${
        fulfillment === "delivery" ? t("delivery") : t("pickup")
      }`
    ];
    if (fulfillment === "delivery") {
      lines.push(`📍 ${t("address")}: ${address}`);
    }
    lines.push("", `🛒 ${t("order")}:`);
    state.cart.forEach((item, index) => {
      const { product, size, addons } = cartDescription(item);
      if (!product || !size) return;
      const extras = addons.length
        ? ` (${addons.map(addonName).join(", ")})`
        : "";
      lines.push(
        `${index + 1}. ${productName(product)} — ${sizeName(size)}${extras}`,
        `   ${t("qty")}: ${item.qty} × ${money(item.unitPrice)} = ${money(item.qty * item.unitPrice)}`
      );
    });
    lines.push("", `💰 ${t("total")}: ${money(cartTotal())}`);
    if (notes) {
      lines.push(`📝 ${t("notes")}: ${notes}`);
    }
    lines.push("", "🙏");
    // تأكد أن هذا هو رقم واتساب المحل الصحيح.
    const shopNumber = "966504712160";
    const url =
      `https://wa.me/${shopNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  // =========================================
  // ربط أحداث الموقع
  // =========================================
  bind("#language-toggle", "click", () => {
    enterSite(rtl() ? "en" : "ar");
  });
  bind("#category-tabs", "click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    renderProducts();
  });
  bind("#product-grid", "click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });
  bind("#search-input", "input", event => {
    state.search = event.target.value.trim();
    renderProducts();
  });
  bind("#cart-open", "click", openCart);
  bind("#cart-close", "click", closeCart);
  bind("#cart-backdrop", "click", closeCart);
  bind("#cart-items", "click", event => {
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    if (quantityButton) {
      const item = state.cart.find(
        item => item.key === quantityButton.dataset.key
      );
      if (item) {
        item.qty += Number(quantityButton.dataset.qty);
        if (item.qty <= 0) {
          state.cart = state.cart.filter(x => x !== item);
        }
        renderCart();
      }
    }
    if (removeButton) {
      state.cart = state.cart.filter(
        item => item.key !== removeButton.dataset.remove
      );
      renderCart();
    }
  });
  bind("#checkout-open", "click", openCheckout);
  bind("#checkout-close", "click", closeCheckout);
  bind("#checkout-modal", "click", event => {
    if (event.target === $("#checkout-modal")) {
      closeCheckout();
    }
  });
  bind("#checkout-form", "submit", sendWhatsApp);
  bind("#fulfillment", "change", toggleAddress);
  bind("#toast-cart", "click", () => {
    const toast = $("#toast");
    if (toast) toast.classList.remove("show");
    openCart();
  });
  bind("#toast-close", "click", () => {
    const toast = $("#toast");
    if (toast) toast.classList.remove("show");
  });
  bind("#browse-menu", "click", () => {
    const section = $("#menu-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
      closeCheckout();
    }
  });
  // =========================================
  // مؤشر التمرير وزر العودة للأعلى
  // =========================================
  function updateScrollProgress() {
    const max =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent =
      max > 0 ? (window.scrollY / max) * 100 : 0;
    const progress = $("#scroll-progress");
    const backToTop = $("#back-to-top");
    if (progress) progress.style.width = `${percent}%`;
    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 350);
    }
  }
  window.addEventListener("scroll", updateScrollProgress, {
    passive: true
  });
  window.addEventListener("resize", updateScrollProgress);
  bind("#back-to-top", "click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // =========================================
  // تشغيل الموقع
  // =========================================
  const year = $("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
  // نبدأ بالعربية، وتظهر شاشة اختيار اللغة أولًا.
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
  renderCategories();
  renderProducts();
  renderCart();
  updateCheckoutSummary();
  updateScrollProgress();
  console.log("Juice Town: تم تشغيل الموقع بنجاح.");
})();
