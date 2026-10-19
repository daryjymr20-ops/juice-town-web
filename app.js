(() => {
  "use strict";

  const menu = window.JUICE_TOWN_MENU;
  const $ = selector => document.querySelector(selector);
  const state = {
    lang: "ar",
    category: "all",
    search: "",
    cart: [],
    toastTimer: null
  };

  const icons = {
    orange:"🍊", lemon:"🍋", mango:"🥭", cocktail:"🍹",
    strawberry:"🍓", guava:"🍐", pineapple:"🍍", avocado:"🥑",
    pomegranate:"🔴", melon:"🍈", banana:"🍌", carrot:"🥕",
    raspberry:"🫐", "milk-shake-juice":"🥛", kiwi:"🥝", apple:"🍎",
    grape:"🍇", ginger:"🫚", watermelon:"🍉", papaya:"🍈",
    "awar-gal":"🍓", asoola:"🍯", aramny:"🍹",
    "avocado-mix":"🥑", pacto:"🥤", "moroccan-cocktail":"🍹",
    asfhani:"🍊", "kouwat-jabal":"🥭", "town-mix":"🍹",
    "blood-booster":"🍓", "healthy-cocktail":"🥬",
    "ruby-tuesday":"🍒", fitness:"🍏", nutella:"🍫",
    oreo:"🍪", bounty:"🥥", kitkat:"🍫", ferrero:"🍬",
    "twix-mix":"🍫", galaxy:"🍫", mars:"🍫", "m-and-m":"🍬",
    snickers:"🍫", "watermelon-mint":"🍉", "lemon-mint":"🍋",
    "pomegranate-smoothie":"🍷", "strawberry-smoothie":"🍓",
    "fruit-salad":"🍓"
  };

  const translations = {
    ar: {
      feature1:"نكهات على مزاجك", feature2:"اختر حجمك وإضافاتك",
      feature3:"طلبك عبر واتساب", cart:"السلة",
      freshTag:"طازج • طبيعي • منعش",
      heroTitle:"انتعاشك يبدأ من هنا",
      heroText:"اختر نكهتك المفضلة من بلدة العصير، وخلّ الانتعاش يوصل لك.",
      browse:"تصفح المنيو", heroNote:"نكهات ترسم يومك",
      menuEyebrow:"اختيارات طازجة", menuTitle:"منيو بلدة العصير",
      menuSub:"اكتشف مشروبك القادم", search:"ابحث عن صنف...",
      noResults:"ما لقينا أصناف تطابق بحثك.", yourOrder:"طلبك",
      emptyCart:"سلتك تنتظر أول اختيار!",
      emptyCartSub:"أضف شيء منعش وبيظهر هنا.",
      subtotal:"المجموع", checkout:"إتمام الطلب",
      checkoutNote:"سيتم تجهيز رسالة طلبك لفتحها في واتساب.",
      lastStep:"الخطوة الأخيرة", checkoutTitle:"تفاصيل الطلب",
      fullName:"الاسم الكامل", phone:"رقم الجوال",
      fulfillment:"طريقة الاستلام", delivery:"توصيل",
      pickup:"استلام من المحل", address:"العنوان / موقع التوصيل",
      notes:"ملاحظات إضافية", total:"الإجمالي",
      sendWhatsApp:"إرسال الطلب عبر واتساب",
      whatsappNote:"سيُفتح واتساب برسالة جاهزة؛ راجعها ثم اضغط إرسال.",
      footerText:"كل رشفة، لحظة انتعاش.", viewCart:"عرض السلة",
      add:"أضف للسلة", calories:"سعرة تقريبية", selectSize:"اختر الحجم",
      addon:"إضافات", added:"تمت الإضافة إلى السلة",
      remove:"حذف", qty:"الكمية", order:"طلب",
      deliveryAddressRequired:"يرجى كتابة عنوان التوصيل.",
      emptyCheckout:"أضف صنفًا إلى السلة أولًا.",
      categoryAll:"كل الأصناف", items:"صنف",
      smallFruit:"إضافة فواكه صغيرة",
      cornflakes:"إضافة كورن فليكس",
      creamChocolate:"إضافة كريمة وشوكولاتة",
      price:"السعر", currency:"ر.س"
    },
    en: {
      feature1:"Flavours your way", feature2:"Choose your size & extras",
      feature3:"Order via WhatsApp", cart:"Cart",
      freshTag:"FRESH • NATURAL • REFRESHING",
      heroTitle:"Your refresh starts here",
      heroText:"Pick your favorite from Juice Town and let the good refreshment come to you.",
      browse:"Explore the menu", heroNote:"Flavours to brighten your day",
      menuEyebrow:"Fresh picks", menuTitle:"Juice Town Menu",
      menuSub:"Discover your next favourite", search:"Search the menu...",
      noResults:"No items match your search.", yourOrder:"YOUR ORDER",
      emptyCart:"Your cart is waiting!",
      emptyCartSub:"Add something refreshing and it will appear here.",
      subtotal:"Subtotal", checkout:"Checkout",
      checkoutNote:"Your order message will be prepared for WhatsApp.",
      lastStep:"LAST STEP", checkoutTitle:"Order details",
      fullName:"Full name", phone:"Mobile number",
      fulfillment:"Fulfilment method", delivery:"Delivery",
      pickup:"Pickup from shop", address:"Delivery address / location",
      notes:"Additional notes", total:"Total",
      sendWhatsApp:"Send order via WhatsApp",
      whatsappNote:"WhatsApp will open with a prepared message. Review it and tap Send.",
      footerText:"Every sip, a refreshing moment.", viewCart:"View cart",
      add:"Add to cart", calories:"approx. kcal", selectSize:"Choose size",
      addon:"Add-ons", added:"Added to cart", remove:"Remove",
      qty:"Qty", order:"Order",
      deliveryAddressRequired:"Please enter a delivery address.",
      emptyCheckout:"Add an item to your cart first.",
      categoryAll:"All items", items:"items",
      smallFruit:"Small fruit add-on",
      cornflakes:"Cornflakes add-on",
      creamChocolate:"Cream & chocolate add-on",
      price:"Price", currency:"SAR"
    }
  };

  const t = key => translations[state.lang][key] || key;
  const rtl = () => state.lang === "ar";
  const money = value => `${Number(value).toFixed(2)} ${t("currency")}`;
  const productName = p => p.name[state.lang];
  const categoryName = c => c[state.lang];
  const sizeName = s => s[state.lang];

  const addonName = addon => {
    if (addon.id === "small-fruit") return t("smallFruit");
    if (addon.id === "cornflakes") return t("cornflakes");
    return t("creamChocolate");
  };

  const safeText = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[ch]);

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("jt-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl() ? "rtl" : "ltr";
    document.body.classList.toggle("english", !rtl());

    $("#language-toggle").textContent = rtl() ? "English" : "العربية";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t(key)) el.textContent = t(key);
    });

    document.querySelectorAll("[data-placeholder]").forEach(el => {
      el.placeholder = t(el.dataset.placeholder);
    });

    document.querySelectorAll("[data-shop-ar]").forEach(el => {
      el.textContent = rtl() ? "بلدة العصير" : "Juice Town";
    });

    $("#fulfillment").querySelector('[value="delivery"]').textContent = t("delivery");
    $("#fulfillment").querySelector('[value="pickup"]').textContent = t("pickup");

    renderCategories();
    renderProducts();
    renderCart();
    updateCheckoutSummary();
  }

  function renderCategories() {
    const categories = [
      {id:"all", ar:t("categoryAll"), en:t("categoryAll")},
      ...menu.categories
    ];

    $("#category-tabs").innerHTML = categories.map(category => `
      <button type="button"
        class="category-tab ${state.category === category.id ? "active" : ""}"
        data-category="${category.id}">
        ${safeText(category.id === "all" ? t("categoryAll") : categoryName(category))}
      </button>
    `).join("");
  }

  function renderProducts() {
    const query = state.search.toLocaleLowerCase();

    const products = menu.products.filter(product =>
      (state.category === "all" || product.category === state.category) &&
      (
        productName(product).toLocaleLowerCase().includes(query) ||
        product.name.ar.toLowerCase().includes(query) ||
        product.name.en.toLowerCase().includes(query)
      )
    );

    $("#results-count").textContent = `${products.length} ${t("items")}`;
    $("#empty-state").classList.toggle("hidden", products.length > 0);

    $("#product-grid").innerHTML = products.map(product => {
      const category = menu.categories.find(c => c.id === product.category);
      const firstSize = product.sizes[0];

      const addons = product.addons.length ? `
        <div class="addons">
          <div class="product-category">${t("addon")}</div>
          ${product.addons.map(addon => `
            <label class="addon-option">
              <input type="checkbox" data-addon="${addon.id}" data-product="${product.id}">
              <span>${safeText(addonName(addon))}</span>
              <em>+${addon.price} ${t("currency")}</em>
            </label>
          `).join("")}
        </div>
      ` : "";

      return `
        <article class="product-card" data-product-card="${product.id}">
          <div class="product-visual">
            <span class="product-emoji">${icons[product.id] || "🥤"}</span>
            ${product.calories !== null
              ? `<span class="calorie-chip">${product.calories} ${t("calories")}</span>`
              : ""}
          </div>
          <div class="product-body">
            <div class="product-title-row">
              <div>
                <h3 class="product-title">${safeText(productName(product))}</h3>
                <div class="product-category">${safeText(categoryName(category))}</div>
              </div>
              <span class="price-from">${t("price")}<br>${firstSize.price} ${t("currency")}</span>
            </div>
            <div class="product-controls">
              <select aria-label="${safeText(t("selectSize"))}: ${safeText(productName(product))}" data-size="${product.id}">
                ${product.sizes.map(size => `
                  <option value="${size.id}">${safeText(sizeName(size))} — ${size.price} ${t("currency")}</option>
                `).join("")}
              </select>
              ${addons}
              <button class="add-button" type="button" data-add="${product.id}">
                <span>${t("add")}</span><span>＋</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function selectedProductConfig(id) {
    const product = menu.products.find(item => item.id === id);
    const sizeId = document.querySelector(`[data-size="${id}"]`).value;
    const size = product.sizes.find(item => item.id === sizeId);

    const addons = [...document.querySelectorAll(`[data-product="${id}"]:checked`)]
      .map(input => product.addons.find(addon => addon.id === input.dataset.addon))
      .filter(Boolean);

    const unitPrice = size.price + addons.reduce((sum, addon) => sum + addon.price, 0);
    return {product, size, addons, unitPrice};
  }

  function addToCart(id) {
    const {product, size, addons, unitPrice} = selectedProductConfig(id);
    const addonIds = addons.map(addon => addon.id).sort();
    const key = [product.id, size.id, ...addonIds].join("|");
    const existing = state.cart.find(item => item.key === key);

    if (existing) {
      existing.qty++;
    } else {
      state.cart.push({
        key, productId:product.id, sizeId:size.id, addonIds, unitPrice, qty:1
      });
    }

    renderCart();
    showToast(`${productName(product)} — ${t("added")}`);
  }

  function cartDescription(item) {
    const product = menu.products.find(p => p.id === item.productId);
    const size = product.sizes.find(s => s.id === item.sizeId);
    const addons = item.addonIds
      .map(id => product.addons.find(addon => addon.id === id))
      .filter(Boolean);

    return {product, size, addons};
  }

  function cartTotal() {
    return state.cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
  }

  function renderCart() {
    const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
    $("#cart-count").textContent = count;
    $("#cart-empty").classList.toggle("hidden", state.cart.length > 0);

    $("#cart-items").innerHTML = state.cart.map(item => {
      const {product, size, addons} = cartDescription(item);
      const extras = addons.map(addonName).join("، ");

      return `
        <div class="cart-line">
          <div>
            <h3>${safeText(productName(product))}</h3>
            <p>${safeText(sizeName(size))}${extras ? ` · ${safeText(extras)}` : ""}</p>
            <div class="quantity-controls">
              <button type="button" data-qty="-1" data-key="${safeText(item.key)}">−</button>
              <strong>${item.qty}</strong>
              <button type="button" data-qty="1" data-key="${safeText(item.key)}">+</button>
              <button type="button" class="remove-line" data-remove="${safeText(item.key)}">${t("remove")}</button>
            </div>
          </div>
          <div class="line-price">${money(item.unitPrice * item.qty)}</div>
        </div>
      `;
    }).join("");

    $("#cart-total").textContent = money(cartTotal());
    $("#checkout-total").textContent = money(cartTotal());
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
      const {product, size, addons} = cartDescription(item);
      const extras = addons.length
        ? ` (${safeText(addons.map(addonName).join(", "))})`
        : "";

      return `
        <div class="summary-line">
          <span>${item.qty}× ${safeText(productName(product))} · ${safeText(sizeName(size))}${extras}</span>
          <strong>${money(item.unitPrice * item.qty)}</strong>
        </div>
      `;
    }).join("");

    $("#checkout-total").textContent = money(cartTotal());
  }

  function openCart() {
    $("#cart-backdrop").hidden = false;
    $("#cart-drawer").classList.add("open");
    $("#cart-drawer").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    $("#cart-drawer").classList.remove("open");
    $("#cart-drawer").setAttribute("aria-hidden", "true");
    $("#cart-backdrop").hidden = true;
    document.body.style.overflow = "";
  }

  function openCheckout() {
    if (!state.cart.length) {
      showToast(t("emptyCheckout"));
      return;
    }

    closeCart();
    $("#checkout-modal").hidden = false;
    document.body.style.overflow = "hidden";
    updateCheckoutSummary();
    toggleAddress();
  }

  function closeCheckout() {
    $("#checkout-modal").hidden = true;
    document.body.style.overflow = "";
  }

  function toggleAddress() {
    const pickup = $("#fulfillment").value === "pickup";
    $("#address-field").classList.toggle("hidden", pickup);
    $("#address-field textarea").required = !pickup;
  }

  function showToast(message) {
    clearTimeout(state.toastTimer);
    $("#toast-message").textContent = message;
    $("#toast").classList.add("show");
    state.toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 4200);
  }

  function sendWhatsApp(event) {
    event.preventDefault();

    if (!state.cart.length) {
      showToast(t("emptyCheckout"));
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const fulfillment = String(form.get("fulfillment"));
    const address = String(form.get("address") || "").trim();
    const notes = String(form.get("notes") || "").trim();

    if (fulfillment === "delivery" && !address) {
      $("#address-field textarea").focus();
      showToast(t("deliveryAddressRequired"));
      return;
    }

    const lines = [
      `🧃 ${menu.shop.englishName} | ${menu.shop.name}`,
      "━━━━━━━━━━━━━━",
      `👤 ${t("fullName")}: ${name}`,
      `📱 ${t("phone")}: ${phone}`,
      `🚚 ${t("fulfillment")}: ${fulfillment === "delivery" ? t("delivery") : t("pickup")}`
    ];

    if (fulfillment === "delivery") {
      lines.push(`📍 ${t("address")}: ${address}`);
    }

    lines.push("", "🛒 " + t("order") + ":");

    state.cart.forEach((item, index) => {
      const {product, size, addons} = cartDescription(item);
      const extras = addons.length ? ` (${addons.map(addonName).join(", ")})` : "";

      lines.push(
        `${index + 1}. ${productName(product)} — ${sizeName(size)}${extras}`,
        `   ${t("qty")}: ${item.qty} × ${money(item.unitPrice)} = ${money(item.qty * item.unitPrice)}`
      );
    });

    lines.push("", `💰 ${t("total")}: ${money(cartTotal())}`);
    if (notes) lines.push(`📝 ${t("notes")}: ${notes}`);
    lines.push("", "🙏");

    // تأكد من رقم واتساب المحل قبل استقبال الطلبات.
    const shopNumber = "966504712160";
    const url = `https://wa.me/${shopNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  $("#language-toggle").addEventListener("click", () => setLanguage(rtl() ? "en" : "ar"));
  $("#category-tabs").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    renderProducts();
  });

  $("#product-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });

  $("#search-input").addEventListener("input", event => {
    state.search = event.target.value.trim();
    renderProducts();
  });

  $("#cart-open").addEventListener("click", openCart);
  $("#cart-close").addEventListener("click", closeCart);
  $("#cart-backdrop").addEventListener("click", closeCart);

  $("#cart-items").addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");

    if (quantityButton) {
      const item = state.cart.find(x => x.key === quantityButton.dataset.key);
      if (item) {
        item.qty += Number(quantityButton.dataset.qty);
        if (item.qty <= 0) state.cart = state.cart.filter(x => x !== item);
        renderCart();
      }
    }

    if (removeButton) {
      state.cart = state.cart.filter(x => x.key !== removeButton.dataset.remove);
      renderCart();
    }
  });

  $("#checkout-open").addEventListener("click", openCheckout);
  $("#checkout-close").addEventListener("click", closeCheckout);
  $("#checkout-modal").addEventListener("click", event => {
    if (event.target === $("#checkout-modal")) closeCheckout();
  });
  $("#checkout-form").addEventListener("submit", sendWhatsApp);
  $("#fulfillment").addEventListener("change", toggleAddress);
  $("#toast-cart").addEventListener("click", () => {
    $("#toast").classList.remove("show");
    openCart();
  });
  $("#toast-close").addEventListener("click", () => $("#toast").classList.remove("show"));
  $("#browse-menu").addEventListener("click", () => {
    $("#menu-section").scrollIntoView({behavior:"smooth"});
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
      closeCheckout();
    }
  });

  $("#year").textContent = new Date().getFullYear();

  // شاشة اختيار اللغة هي أول شاشة تظهر دائمًا.
  const languageScreen = $("#language-screen");
  const siteShell = $(".site-shell");

  function enterSite(lang) {
    setLanguage(lang);
    languageScreen.classList.add("leaving");

    window.setTimeout(() => {
      languageScreen.hidden = true;
      siteShell.classList.add("ready");
      window.scrollTo({top:0, behavior:"auto"});
    }, 450);
  }

  document.querySelectorAll("[data-enter-language]").forEach(button => {
    button.addEventListener("click", () => enterSite(button.dataset.enterLanguage));
  });

  function updateScrollProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? window.scrollY / max * 100 : 0;

    $("#scroll-progress").style.width = `${percent}%`;
    $("#back-to-top").classList.toggle("visible", window.scrollY > 350);
  }

  window.addEventListener("scroll", updateScrollProgress, {passive:true});
  window.addEventListener("resize", updateScrollProgress);
  $("#back-to-top").addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
  });

  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
  renderCategories();
  renderProducts();
  renderCart();
  updateCheckoutSummary();
  updateScrollProgress();
})();