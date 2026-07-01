(() => {
  "use strict";
  const e = [
    {
      type: "number",
      key: "numOfIcons",
      label: "Number of Icons",
      input: "true",
    },
    {
      type: "textfield",
      key: "filledColor",
      label: "Filled Color",
      input: "true",
    },
    {
      type: "textfield",
      key: "unfilledColor",
      label: "UnFilled Color",
      input: "true",
    },
    {
      type: "textfield",
      key: "iconHeight",
      label: "Icon Height",
      input: "true",
    },
    { type: "textfield", key: "iconWidth", label: "Icon Width", input: "true" },
    { type: "textarea", key: "icon", label: "Icon", input: !0 },
    { key: "placeholder", ignore: !0 },
  ];
  function t(...t) {
    return Formio.Components.baseEditForm(
      [
        { key: "data", ignore: !0 },
        { key: "display", components: e },
        { key: "validation", ignore: !0 },
      ],
      ...t,
    );
  }
  const o = Formio.Components.components.field;
  class n extends o {
    static editForm = t;
    static schema(...e) {
      return o.schema({
        type: "rating",
        label: "rating",
        key: "rating",
        unfilledColor: "#ddd",
        filledColor: "yellow",
        numOfIcons: "5",
        iconHeight: "25px",
        iconWidth: "25px",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                 \t viewBox="0 0 47.94 47.94" xml:space="preserve">\n                 <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n                 \tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n                 \tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n                 \tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n                 \tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n                 \tC22.602,0.567,25.338,0.567,26.285,2.486z"/>\n            </svg>',
      });
    }
    static get builderInfo() {
      return {
        title: "Rating",
        icon: "star",
        group: "basic",
        documentation: "/userguide/#textfield",
        weight: 0,
        schema: n.schema(),
      };
    }
    setIconProperties() {
      const e = new DOMParser().parseFromString(
        this.component.icon,
        "text/xml",
      );
      ((e.firstChild.style.fill = this.component.unfilledColor),
        e.firstChild.setAttribute("height", this.component.iconHeight),
        e.firstChild.setAttribute("width", this.component.iconWidth),
        (this.component.icon = new XMLSerializer().serializeToString(
          e.documentElement,
        )));
    }
    constructor(e, t, o) {
      super(e, t, o);
    }
    init() {
      (this.setIconProperties(), super.init());
    }
    get inputInfo() {
      return super.inputInfo;
    }
    render(e) {
      let t = '<div ref="rating">';
      for (let e = 0; e < this.component.numOfIcons; e++)
        t += this.component.icon;
      return ((t += "</div>"), super.render(t));
    }
    attach(e) {
      function t(e, t) {
        for (const o of e) o.style.fill = t;
      }
      if ((this.loadRefs(e, { rating: "single" }), !this.component.disabled)) {
        let e = this.refs.rating.children;
        for (let o = 0; o < e.length; o++) {
          let n = e[o];
          n.addEventListener("click", () => {
            (t(e, this.component.unfilledColor),
              (n.style.fill = this.component.filledColor));
            let r = n.previousElementSibling;
            for (; r; )
              ((r.style.fill = this.component.filledColor),
                (r = r.previousElementSibling));
            this.updateValue(`${o + 1}/${e.length}`);
          });
        }
      }
      return super.attach(e);
    }
    detach() {
      return super.detach();
    }
    destroy() {
      return super.destroy();
    }
    normalizeValue(e, t = {}) {
      return super.normalizeValue(e, t);
    }
    getValue() {
      return super.getValue();
    }
    getValueAt(e) {
      return super.getValueAt(e);
    }
    setValue(e, t = {}) {
      return super.setValue(e, t);
    }
    setValueAt(e, t, o = {}) {
      return super.setValueAt(e, t, o);
    }
    updateValue(e, t = {}) {
      return super.updateValue(e, t);
    }
  }
  const r = [
      {
        type: "textfield",
        key: "storeChangeBtnLabel",
        label: "Store Change Button Label",
        input: "true",
      },
      {
        type: "textfield",
        key: "storeInitialBtnLabel",
        label: "Store Initial Button Label",
        input: "true",
      },
      {
        type: "textfield",
        key: "storeClearBtnLabel",
        label: "Store Clear Button Label",
        input: "true",
      },
    ],
    s = [
      {
        type: "checkbox",
        input: !0,
        key: "validate.required",
        label: "Required",
        tooltip:
          "A required field must be filled in before the form can be submitted.",
        weight: 0,
      },
      {
        type: "textfield",
        input: !0,
        key: "validate.customMessage",
        label: "Custom Error Message",
        placeholder: "Custom Error Message",
        tooltip: "Error message displayed if any error occurred.",
        weight: 100,
      },
    ];
  function a(...e) {
    return Formio.Components.baseEditForm(
      [
        { key: "data", ignore: !0 },
        { key: "display", components: r },
        { key: "validation", components: s },
      ],
      ...e,
    );
  }
  const i = Formio.Components.components.field;
  class l extends i {
    static editForm = a;
    static Version = "0.0.67-alpha";
    static StoreLocatorEvents = {
      StoreSelected: "store.selected",
      StoreChanged: "store.changed",
      StoreSearch: "store.search",
      StoreSearchResults: "store.search.results",
      StoreGeolocate: "store.geolocate",
    };
    static LocalStorageKeys = {
      MageCacheStorage: "mage-cache-storage",
      AllFranchisees: "all-franchisees",
      PreviousStoreLocation: "previous-store-location",
    };
    static MageCacheStorageKeys = { StoreLocation: "store-location" };
    static FormComponentKeys = {
      StoreFormType: "storeFormType",
      FranchiseeEmail: "franchiseeEmail",
      FranchiseeId: "franchiseeId",
    };
    static Palette = {
      Primary: { Main: "#3e87cb" },
      Grey: { Main: "#F7F8F8", Text: "#63666A" },
      Warning: { Main: "#6F4400" },
      White: "#ffffff",
      IconColorBlack: "#382E2C",
    };
    static Styles = {
      Container: {
        "background-color": l.Palette.Grey.Main,
        padding: "0px 12px",
        "border-radius": "8px",
        display: "flex",
        "flex-direction": "row",
        position: "relative",
        gap: "8px",
      },
      IconContainer: {
        display: "flex",
        "align-items": "center",
        cursor: "pointer",
        "flex-shrink": "0",
      },
      Input: {
        outline: "none",
        border: "none",
        background: "transparent",
        "flex-grow": 1,
        color: l.Palette.Grey.Text,
        "box-shadow": "none !important",
      },
      DropdownContainer: {
        position: "absolute",
        top: "calc(100% + 10px)",
        "background-color": l.Palette.White,
        width: "100%",
        left: 0,
        "z-index": 100,
        "border-radius": "8px",
        padding: "12px",
        "box-shadow": "0px 4px 12px rgba(0,0,0,0.25)",
        display: "none",
        "flex-direction": "column",
        gap: "8px",
        "max-height": "200px",
        overflow: "auto",
        "overscroll-behavior": "contain",
      },
      DropdownItem: {
        color: l.Palette.Primary.Main,
        "text-decoration": "underline",
        cursor: "pointer",
      },
      HintText: { color: l.Palette.Grey.Text, "font-size": "12px" },
      PreviousStoreSection: {
        display: "flex",
        "flex-direction": "column",
        gap: "8px",
      },
      PreviousStoreLabel: {
        color: l.Palette.IconColorBlack,
        "font-weight": "500",
      },
      UseLocationContainer: {
        display: "flex",
        "align-items": "center",
        gap: "8px",
        cursor: "pointer",
      },
      LocationIcon: { display: "flex", "flex-shrink": "0" },
      NoMatchingStoresContainer: {
        border: `2px solid ${l.Palette.Warning.Main}`,
        "border-radius": "8px",
        padding: "12px",
        margin: "4px",
        display: "flex",
        "align-items": "center",
        gap: "8px",
      },
      WarningIcon: {
        display: "flex",
        "flex-shrink": "0",
        width: "24px",
        height: "24px",
      },
      WarningMessageText: {
        color: l.Palette.Warning.Main,
        "font-size": "12px",
        "font-weight": "500",
        "line-height": "1.4",
      },
    };
    static schema(...e) {
      return i.schema({
        type: "storeLocator",
        label: "Store Locator",
        key: "storeLocator",
        validate: { required: !1, customMessage: "" },
      });
    }
    static get builderInfo() {
      return {
        title: "Store Locator",
        icon: "map",
        group: "basic",
        documentation: "/userguide/#textfield",
        weight: 0,
        schema: l.schema(),
      };
    }
    constructor(e, t, o) {
      super(e, t, o);
    }
    init() {
      if (
        (super.init(),
        this.component.validate &&
          !this.component.validate.customMessage &&
          (this.component.validate.customMessage =
            "Please select your store from the list."),
        !this.dataValue)
      ) {
        const e = this.getStoreFromLocalStorage();
        e && e.name && (this.dataValue = e.name);
      }
    }
    get inputInfo() {
      return super.inputInfo;
    }
    render(e) {
      const t = l.stylesToCssString(l.Styles.Input),
        o = l.stylesToCssString(l.Styles.Container),
        n = l.stylesToCssString(l.Styles.DropdownContainer),
        r = l.stylesToCssString(l.Styles.IconContainer);
      let s = `\n    <div ref="storeLocator" style="${o}">\n      <input ref="storeInput" placeholder="${this.component.placeholder || "Enter Your Suburb or Postcode"}" style="${t}"/>\n        <span ref="iconContainer" style="${r}">\n          \x3c!-- Icon will be updated dynamically: pin drop or close --\x3e\n        </span>\n      <div ref="dropdownContainer" style="${n}"></div>\n    </div>\n    `;
      return super.render(s);
    }
    static stylesToCssString(e, t = {}) {
      return Object.entries({ ...e, ...t }).reduce(
        (e, [t, o]) => [e, `${t}: ${o}`].join("; "),
        "",
      );
    }
    getStoreFromLocalStorage() {
      const e = localStorage.getItem(l.LocalStorageKeys.MageCacheStorage);
      if (!e) return null;
      const t = JSON.parse(e)[l.MageCacheStorageKeys.StoreLocation];
      return t && t.id ? t : null;
    }
    getAllFranchiseesFromLocalStorage() {
      try {
        const e = localStorage.getItem(l.LocalStorageKeys.AllFranchisees);
        return e ? JSON.parse(e) : [];
      } catch (e) {
        return (
          console.error({
            message: "Error reading franchisees from localStorage",
            error: e.message,
          }),
          []
        );
      }
    }
    getPreviousStoreFromLocalStorage() {
      try {
        const e = localStorage.getItem(
          l.LocalStorageKeys.PreviousStoreLocation,
        );
        if (!e) return null;
        const t = JSON.parse(e);
        return t && t.name ? t : null;
      } catch (e) {
        return (
          console.error({
            message: "Error reading previous store from localStorage",
            error: e.message,
          }),
          null
        );
      }
    }
    getFranchiseeByStoreId(e, t) {
      if (!t || 0 === t.length) return null;
      const o = t.find((t) => t.storeId === e || t.store_id === e);
      return (
        o
          ? console.log("Found franchisee for storeId:", e, o)
          : console.log("No franchisee found for storeId:", e),
        o || null
      );
    }
    attach(e) {
      this.loadRefs(e, {
        storeLocator: "single",
        dropdownContainer: "single",
        storeInput: "single",
        iconContainer: "single",
      });
      const t = this;
      let o = !1,
        n = null,
        r = t.getAllFranchiseesFromLocalStorage();
      if (this.component.disabled) return;
      this._eventHandlers = this._eventHandlers || {};
      const s = this.refs.storeInput,
        a = this.refs.dropdownContainer,
        i = this.refs.iconContainer,
        c = () => {
          a.style = l.stylesToCssString({ display: "none" });
        },
        d = () => {
          i.style = l.stylesToCssString(l.Styles.IconContainer, {
            display: "flex",
          });
        },
        u = () => {
          const e = s.value && "" !== s.value.trim();
          i.innerHTML = e
            ? `\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="${l.Palette.IconColorBlack}" />\n        </svg>\n      `
            : `\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 4c2.2 0 4 1.79 4 4 0 2.27-2.13 5.65-4 8.06C10.13 13.65 8 10.27 8 8c0-2.21 1.8-4 4-4m0-2C8.69 2 6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 20v2h14v-2H5z" fill="${l.Palette.IconColorBlack}" />\n        </svg>\n        `;
        },
        p = (e, { writeLocalStorage: n } = {}) => {
          if (!e || !e.name)
            return void console.warn(
              "StoreLocator: applyStoreSelection called with invalid store",
              e,
            );
          ((e) => {
            const n = e.name;
            n && ((s.value = n), (o = !0), c(), d(), t.updateValue(n), u());
          })(e);
          const a = e.id || e.store_id,
            i = t.getFranchiseeByStoreId(a, r);
          if (i) {
            const o = i.bmqFormType || i.bmq_form_type,
              n = i.email,
              r = i.id;
            ((e.bmq_form_type = o),
              (e.bmqFormType = o),
              t.updateFormComponentValue(l.FormComponentKeys.StoreFormType, o),
              t.updateFormComponentValue(
                l.FormComponentKeys.FranchiseeEmail,
                n,
              ),
              t.updateFormComponentValue(l.FormComponentKeys.FranchiseeId, r));
          } else console.warn("⚠️ No franchisee found for store:", a);
          n && t.setLocalStorage(e);
        };
      (() => {
        const e = t.getStoreFromLocalStorage();
        if (!e)
          return (
            console.log("No cached store found in localStorage"),
            void u()
          );
        const n = e.id || e.store_id,
          a = t.getFranchiseeByStoreId(n, r),
          i = e.name;
        if (
          (i &&
            ((s.value = i),
            (o = !0),
            d(),
            u(),
            t.updateValue(i),
            (t.pristine = !1)),
          !a)
        )
          return void console.log(
            "Franchisee not found for cached store, skipping field updates",
          );
        const c = a.bmqFormType || a.bmq_form_type,
          p = a.email,
          m = a.id,
          g = () => {
            (t.updateFormComponentValue(l.FormComponentKeys.StoreFormType, c),
              t.updateFormComponentValue(
                l.FormComponentKeys.FranchiseeEmail,
                p,
              ),
              t.updateFormComponentValue(l.FormComponentKeys.FranchiseeId, m));
            const o = { ...e, bmq_form_type: c, bmqFormType: c };
            t.dispatchStoreSelectedEvent(o);
          },
          h = t.root && t.root.ready;
        if (!h)
          return (
            console.log("No root form found, updating immediately"),
            void g()
          );
        (console.log("Waiting for form.ready promise..."),
          h.then(() => {
            (console.log(
              "Form ready! Performing update for FORM.IO components value.",
            ),
              g());
          }));
      })();
      const m = (e) => {
        const o = document.createElement("div"),
          n = document.createElement("a");
        return (
          (n.innerText = e.name),
          n.addEventListener("click", function (o) {
            (o.preventDefault(),
              o.stopPropagation(),
              p(e, { writeLocalStorage: !0 }),
              t.dispatchStoreSelectedEvent(e));
          }),
          (n.style = l.stylesToCssString(l.Styles.DropdownItem)),
          o.appendChild(n),
          o
        );
      };
      return (
        i.addEventListener("click", function (e) {
          (e.preventDefault(),
            e.stopPropagation(),
            o || "" !== s.value
              ? ((s.value = ""), (o = !1), c(), t.updateValue(""), u())
              : s.focus());
        }),
        s.addEventListener("focus", function () {
          (s.value && "" !== s.value.trim()) ||
            t.dispatchStoreSearchEvent("3000");
        }),
        s.addEventListener("input", function (e) {
          const r = e.target.value;
          ((t.userInput = r),
            (o = !1),
            t.updateValue(""),
            u(),
            n && clearTimeout(n),
            (n = setTimeout(() => {
              t.dispatchStoreSearchEvent(r);
            }, 500)));
        }),
        (this._eventHandlers.StoreSearchResults = (e) => {
          console.log("StoreSearchResults:", e.detail);
          ((e) => {
            (console.log("stores from filter and display stores", e),
              (a.style = l.stylesToCssString(l.Styles.DropdownContainer, {
                display: "flex",
              })),
              (() => {
                for (; a.firstChild; ) a.removeChild(a.firstChild);
              })());
            const o = Array.isArray(e) ? e : [];
            if (0 === o.length) {
              const e = (() => {
                const e = document.createElement("div");
                e.style = l.stylesToCssString(
                  l.Styles.NoMatchingStoresContainer,
                );
                const t = document.createElement("span");
                ((t.innerHTML =
                  '\n        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <mask id="mask0_1002_39163" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">\n            <rect width="24" height="24" fill="#D9D9D9"/>\n          </mask>\n          <g mask="url(#mask0_1002_39163)">\n            <path d="M2.72187 21C2.33854 21 2.05521 20.8333 1.87188 20.5C1.68854 20.1667 1.68854 19.8333 1.87188 19.5L11.1219 3.5C11.3052 3.16667 11.5969 3 11.9969 3C12.3969 3 12.6885 3.16667 12.8719 3.5L22.1219 19.5C22.3052 19.8333 22.3052 20.1667 22.1219 20.5C21.9385 20.8333 21.6552 21 21.2719 21H2.72187ZM11.9969 10C11.7135 10 11.4762 10.0957 11.2849 10.287C11.0929 10.479 10.9969 10.7167 10.9969 11V14C10.9969 14.2833 11.0929 14.5207 11.2849 14.712C11.4762 14.904 11.7135 15 11.9969 15C12.2802 15 12.5179 14.904 12.7099 14.712C12.9012 14.5207 12.9969 14.2833 12.9969 14V11C12.9969 10.7167 12.9012 10.479 12.7099 10.287C12.5179 10.0957 12.2802 10 11.9969 10ZM11.9969 18C12.2802 18 12.5179 17.904 12.7099 17.712C12.9012 17.5207 12.9969 17.2833 12.9969 17C12.9969 16.7167 12.9012 16.4793 12.7099 16.288C12.5179 16.096 12.2802 16 11.9969 16C11.7135 16 11.4762 16.096 11.2849 16.288C11.0929 16.4793 10.9969 16.7167 10.9969 17C10.9969 17.2833 11.0929 17.5207 11.2849 17.712C11.4762 17.904 11.7135 18 11.9969 18Z" fill="#6F4400"/>\n          </g>\n        </svg>\n      '),
                  (t.style = l.stylesToCssString(l.Styles.WarningIcon)));
                const o = document.createElement("span");
                return (
                  (o.innerText =
                    "We didn't find any store matching the provided postcode/suburb. Please re-enter your postcode or suburb."),
                  (o.style = l.stylesToCssString(l.Styles.WarningMessageText)),
                  e.appendChild(t),
                  e.appendChild(o),
                  e
                );
              })();
              a.appendChild(e);
            } else {
              const e = document.createElement("div");
              ((e.innerText = "Select a store from the list to continue."),
                (e.style = l.stylesToCssString(l.Styles.HintText)),
                a.appendChild(e));
              const t = o.map((e) => m(e));
              a.append(...t);
            }
            const n = (() => {
              const e = t.getPreviousStoreFromLocalStorage();
              if (!e) return null;
              const o = document.createElement("div");
              o.style = l.stylesToCssString(l.Styles.PreviousStoreSection);
              const n = document.createElement("div");
              return (
                (n.innerText = "Previous Store"),
                (n.style = l.stylesToCssString(l.Styles.PreviousStoreLabel)),
                o.appendChild(n),
                o.appendChild(m(e)),
                o
              );
            })();
            (n && a.appendChild(n),
              a.appendChild(
                (() => {
                  const e = document.createElement("div");
                  e.style = l.stylesToCssString(l.Styles.UseLocationContainer);
                  const o = document.createElement("span");
                  ((o.style = l.stylesToCssString(l.Styles.LocationIcon)),
                    (o.innerHTML = `\n        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.Palette.Primary.Main}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>\n        </svg>\n      `));
                  const n = document.createElement("a");
                  return (
                    (n.innerText = "Use My Current Location"),
                    (n.style = l.stylesToCssString(l.Styles.DropdownItem)),
                    e.addEventListener("click", function (e) {
                      (e.preventDefault(),
                        e.stopPropagation(),
                        t._geolocateFallbackTimer &&
                          clearTimeout(t._geolocateFallbackTimer));
                      const o = new window.CustomEvent(
                        l.StoreLocatorEvents.StoreGeolocate,
                      );
                      (window.dispatchEvent(o),
                        (t._geolocateFallbackTimer = setTimeout(() => {
                          ((t._geolocateFallbackTimer = null),
                            t.dispatchStoreSearchEvent("3000"));
                        }, 1500)));
                    }),
                    e.appendChild(o),
                    e.appendChild(n),
                    e
                  );
                })(),
              ));
          })(e.detail.stores);
        }),
        window.addEventListener(
          l.StoreLocatorEvents.StoreSearchResults,
          this._eventHandlers.StoreSearchResults,
        ),
        (this._eventHandlers.StoreChanged = (e) => {
          console.log("StoreChanged:", e && e.detail);
          const o = e && e.detail && e.detail.store;
          o && o.name
            ? (t._geolocateFallbackTimer &&
                (clearTimeout(t._geolocateFallbackTimer),
                (t._geolocateFallbackTimer = null)),
              p(o, { writeLocalStorage: !1 }))
            : console.warn(
                "StoreLocator: store.changed received without a valid store payload",
                e && e.detail,
              );
        }),
        window.addEventListener(
          l.StoreLocatorEvents.StoreChanged,
          this._eventHandlers.StoreChanged,
        ),
        (this._eventHandlers.DocumentMouseDown = (e) => {
          const n = t.refs.storeLocator;
          n &&
            !n.contains(e.target) &&
            (console.log("[StoreLocator] outside click → closing dropdown"),
            c(),
            o || "" === s.value || ((s.value = ""), t.updateValue(""), u()));
        }),
        document.addEventListener(
          "mousedown",
          this._eventHandlers.DocumentMouseDown,
        ),
        super.attach(e)
      );
    }
    dispatchStoreSearchEvent(e) {
      const t = { detail: { postCode: e } },
        o = new window.CustomEvent(l.StoreLocatorEvents.StoreSearch, t);
      window.dispatchEvent(o);
    }
    setLocalStorage(e) {
      try {
        const t = e.store_id || e.id,
          o = localStorage.getItem(l.LocalStorageKeys.MageCacheStorage);
        let n = o ? JSON.parse(o) : {};
        ((n[l.MageCacheStorageKeys.StoreLocation] = { ...e, id: t }),
          localStorage.setItem(
            l.LocalStorageKeys.MageCacheStorage,
            JSON.stringify(n),
          ));
      } catch (e) {
        console.error({
          message: "Error setting store in localStorage",
          error: e.message,
        });
      }
    }
    dispatchStoreSelectedEvent(e) {
      console.log("dispatching store selected event", e);
      const t = {
        detail: {
          storeId: e.store_id || e.id,
          bmqFormType: e.bmq_form_type || e.bmqFormType,
          store: e,
        },
      };
      console.log("Final payload for store.selected event:", t);
      const o = new window.CustomEvent(l.StoreLocatorEvents.StoreSelected, t);
      window.dispatchEvent(o);
    }
    updateFormComponentValue(e, t) {
      try {
        const o = this.root;
        if (!o) return void console.warn("StoreLocator: No root form found");
        const n = o.getComponent(e);
        n && t
          ? (n.setValue(t),
            console.log(`✅ Updated ${e} with value:`, t),
            n.triggerChange(),
            console.log(`✅ Triggered change event for ${e}`),
            o.triggerChange({ changed: n }))
          : console.warn(`⚠️ Component ${e} not found or value is empty`);
      } catch (t) {
        console.error({
          message: "Error updating form component",
          componentKey: e,
          error: t,
        });
      }
    }
    detach() {
      return (
        this._eventHandlers &&
          (this._eventHandlers.StoreSearchResults &&
            window.removeEventListener(
              l.StoreLocatorEvents.StoreSearchResults,
              this._eventHandlers.StoreSearchResults,
            ),
          this._eventHandlers.StoreChanged &&
            window.removeEventListener(
              l.StoreLocatorEvents.StoreChanged,
              this._eventHandlers.StoreChanged,
            ),
          this._eventHandlers.DocumentMouseDown &&
            document.removeEventListener(
              "mousedown",
              this._eventHandlers.DocumentMouseDown,
            )),
        this._geolocateFallbackTimer &&
          (clearTimeout(this._geolocateFallbackTimer),
          (this._geolocateFallbackTimer = null)),
        super.detach()
      );
    }
    destroy() {
      return (
        this._eventHandlers &&
          (this._eventHandlers.StoreSearchResults &&
            window.removeEventListener(
              l.StoreLocatorEvents.StoreSearchResults,
              this._eventHandlers.StoreSearchResults,
            ),
          this._eventHandlers.StoreChanged &&
            window.removeEventListener(
              l.StoreLocatorEvents.StoreChanged,
              this._eventHandlers.StoreChanged,
            ),
          this._eventHandlers.DocumentMouseDown &&
            document.removeEventListener(
              "mousedown",
              this._eventHandlers.DocumentMouseDown,
            ),
          (this._eventHandlers = null)),
        this._geolocateFallbackTimer &&
          (clearTimeout(this._geolocateFallbackTimer),
          (this._geolocateFallbackTimer = null)),
        super.destroy()
      );
    }
    normalizeValue(e, t = {}) {
      return super.normalizeValue(e, t);
    }
    getValue() {
      return super.getValue();
    }
    getValueAt(e) {
      return super.getValueAt(e);
    }
    setValue(e, t = {}) {
      return super.setValue(e, t);
    }
    setValueAt(e, t, o = {}) {
      return super.setValueAt(e, t, o);
    }
    updateValue(e, t = {}) {
      if ((null === e || "" === e || void 0 === e) && t.resetValue) {
        const t = this.getStoreFromLocalStorage();
        t && t.name && (e = t.name);
      }
      return super.updateValue(e, t);
    }
    checkCondition(e, t) {
      return super.checkCondition(e, t);
    }
    checkConditions(e) {
      return super.checkConditions(e);
    }
    set visible(e) {
      super.visible = e;
    }
    get visible() {
      return super.visible;
    }
  }
  Formio.use([{ components: { rating: n, storeLocator: l } }]);
})();
