import {
  createElementBlock,
  normalizeClass,
  openBlock
} from "./chunk-Y6PV5SQ5.js";

// node_modules/vue-seasons-falling/dist/vue-seasons-falling.es.js
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".seasons-falling-canvas[data-v-577fe6f1]{position:absolute;left:0;top:0;display:block;pointer-events:none}.seasons-falling-canvas.is-fullscreen[data-v-577fe6f1]{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100vw!important;height:100vh!important}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var F = (t, l) => {
  const m = t.__vccOpts || t;
  for (const [p, d] of l)
    m[p] = d;
  return m;
};
var H = {
  props: {
    autoSeason: { type: Boolean, default: false },
    season: {
      type: String,
      default: "spring"
      // 'spring', 'summer', 'autumn', 'winter'
    },
    theme: {
      type: String,
      default: "light"
      // 'light' | 'dark' — affects snowflake tint and overall opacity
    },
    amount: { type: Number, default: 100 },
    size: { type: Number, default: 5 },
    speed: { type: Number, default: 1.5 },
    wind: { type: Number, default: 0 },
    color: { type: String, default: "#fff" },
    opacity: { type: Number, default: 0.8 },
    swing: { type: Number, default: 1 },
    image: { type: String, default: null },
    zIndex: { type: Number, default: null },
    resize: { type: Boolean, default: true },
    fullScreen: { type: Boolean, default: false },
    // false: fill parent layer
    mouseInteraction: { type: Boolean, default: false }
  },
  mounted() {
    const t = this, l = t.$refs.canvasRef, m = l.getContext("2d");
    let p, d, g = [], w = null, h = t.season, v = { x: -1e3, y: -1e3 };
    if (!l) return;
    const R = (e) => {
      const o = l.getBoundingClientRect();
      v.x = e.clientX - o.left, v.y = e.clientY - o.top;
    }, q = (e) => {
      if (e.touches.length > 0) {
        const o = l.getBoundingClientRect(), a = e.touches[0];
        v.x = a.clientX - o.left, v.y = a.clientY - o.top;
      }
    };
    t._onMouseMove = R, t._onTouchMove = q, t._animationId = null;
    const S = {};
    function I(e) {
      return S[e] || (S[e] = O(e)), S[e];
    }
    const _ = {
      spring: { color: "#ffb7c5", swing: 2, speed: 0.8, size: 4 },
      summer: { color: "#7dd3fc", swing: 0, speed: 1.2, size: 1 },
      autumn: { color: "#ff8c00", swing: 1.5, speed: 1.2, size: 6 },
      winter: { color: "#e2e8f0", swing: 1, speed: 1.5, size: 2 }
    };
    function A() {
      const e = d, o = p;
      if (t.fullScreen)
        d = window.innerWidth, p = window.innerHeight;
      else {
        const a = l.parentElement;
        d = a ? a.offsetWidth : window.innerWidth, p = a ? a.offsetHeight : window.innerHeight;
      }
      if ((l.width !== d || l.height !== p) && (l.width = d, l.height = p, e && o)) {
        const a = d / e, r = p / o;
        g.forEach((c) => {
          c.x *= a, c.y *= r;
        });
      }
    }
    function B() {
      const e = (/* @__PURE__ */ new Date()).getMonth() + 1;
      return e >= 3 && e <= 5 ? "spring" : e >= 6 && e <= 8 ? "summer" : e >= 9 && e <= 11 ? "autumn" : "winter";
    }
    function X() {
      t.autoSeason ? h = B() : h = t.season, A(), l.style.zIndex = t.zIndex || "auto";
      const e = 1920 * 1080, o = d * p, a = Math.sqrt(o / e), r = Math.max(80, Math.min(600, Math.floor(t.amount * a)));
      g = [];
      for (let c = 0; c < r; c++)
        g.push(C(true));
      t.image && (w = new Image(), w.src = t.image), t.mouseInteraction && (window.addEventListener("mousemove", t._onMouseMove), window.addEventListener("touchmove", t._onTouchMove, { passive: true })), t._animationId = requestAnimationFrame(T);
    }
    function C(e = false) {
      const o = _[h] || _.winter, a = (t.size || o.size) * 0.8, r = s(a * 0.3, a * 2) / 2, c = s(0, d), u = e ? s(0, p) : -r * 4;
      if (h === "winter")
        return {
          x: c,
          y: u,
          r,
          velY: s(t.speed, t.speed * 1.5) * Math.pow(r / a, 1.5),
          velX: t.wind,
          stepSize: s(0.01, 0.04),
          step: s(0, Math.PI * 2),
          opacity: s(0.4, t.opacity) * (r / a + 0.2),
          rotation: s(0, 360),
          rotationSpeed: s(-0.5, 0.5)
        };
      if (h === "summer") {
        const n = s(a * 0.2, a * 1.4) / 2;
        return {
          x: c,
          y: e ? u : -n * 4,
          r: n,
          velY: t.speed * 6,
          velX: t.wind * 2,
          stepSize: s(0.01, 0.04),
          step: s(0, Math.PI * 2),
          opacity: s(0.5, t.opacity),
          swingAmplitude: 0
        };
      }
      if (h === "autumn") {
        const n = o.speed != null ? o.speed : t.speed, i = s(a * 1.5, a * 3) / 2, M = e ? u : -i * 4, f = n * s(0.8, 1.2), b = (o.swing != null ? o.swing : t.swing) * s(1, 1.8), y = Math.random() < 0.5 ? 0 : s(0.5, t.opacity);
        return {
          x: c,
          y: M,
          r: i,
          velY: f,
          velX: t.wind,
          stepSize: s(0.02, 0.06),
          step: s(0, Math.PI * 2),
          opacity: y,
          rotation: s(0, 360),
          rotationSpeed: s(-1.5, 1.5),
          flip: s(0, Math.PI * 2),
          flipSpeed: s(-0.1, 0.1),
          swingAmplitude: b
        };
      }
      if (h === "spring") {
        const i = (o.speed != null ? o.speed : t.speed) * s(0.48, 0.58), M = r * 1.25, f = s(0.015, 0.025);
        return {
          x: c,
          y: u,
          r: M,
          velY: i,
          velX: t.wind,
          stepSize: f,
          step: s(0, Math.PI * 2),
          opacity: s(0.5, t.opacity),
          rotation: s(0, 360),
          rotationSpeed: s(-0.8, 0.8),
          flip: s(0, Math.PI * 2),
          flipSpeed: s(-0.12, 0.12),
          chaos: s(0.9, 1.1)
        };
      }
      return {
        x: c,
        y: u,
        r,
        velY: s(t.speed, t.speed * 1.5) * Math.pow(r / a, 1.5),
        velX: t.wind,
        stepSize: s(0.01, 0.04),
        step: s(0, Math.PI * 2),
        opacity: s(0.4, t.opacity) * (r / a + 0.2),
        rotation: s(0, 360),
        rotationSpeed: s(-0.5, 0.5)
      };
    }
    function Y(e, o) {
      var c;
      const a = h, r = t.theme;
      if (e.save(), a === "summer") {
        const u = o.velY * (1 + o.r * 0.6), n = (r === "dark" ? 0.25 : 0.65) * o.opacity;
        e.globalAlpha = Math.min(1, n), e.strokeStyle = r === "light" ? `rgba(147, 197, 253, ${Math.min(1, o.opacity * 1.1)})` : `rgba(255, 255, 255, ${Math.min(1, o.opacity * 0.85)})`, e.lineWidth = Math.max(0.8, 0.5 + o.r * 0.5), e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(o.x + t.wind * 2 * (u / 20), o.y + u), e.stroke(), e.globalAlpha = 1;
      } else if (a === "spring") {
        const u = r === "light" ? Math.min(1, o.opacity * 1.12) : Math.min(1, o.opacity * 0.5);
        e.globalAlpha = r === "light" ? 0.96 : 0.82, e.fillStyle = `rgba(255, 192, 203, ${u})`, e.translate(o.x, o.y), e.rotate(o.rotation * Math.PI / 180), e.scale(Math.abs(Math.cos(o.flip)) * 0.3 + 0.7, 1);
        const n = o.r * 1.1, i = o.r * 0.9;
        e.beginPath(), e.moveTo(0, -n), e.bezierCurveTo(-i, -n * 0.3, -i * 0.8, n * 0.8, 0, n), e.bezierCurveTo(i * 0.8, n * 0.8, i, -n * 0.3, 0, -n), e.fill(), e.globalAlpha = 1;
      } else if (a === "autumn") {
        const u = t.color === "#fff" || t.color === "#ffffff" ? (c = _.autumn) == null ? void 0 : c.color : t.color, n = r === "dark" ? 0.5 : 1;
        e.fillStyle = `rgba(${I(u)}, ${Math.min(1, o.opacity * n)})`, e.translate(o.x, o.y), e.rotate(o.rotation * Math.PI / 180), e.scale(Math.abs(Math.cos(o.flip)) * 0.3 + 0.7, 1);
        const i = o.r * 1.35;
        e.beginPath(), e.moveTo(0, i), e.quadraticCurveTo(i * 0.12, i * 0.6, i * 0.4, i * 0.7), e.quadraticCurveTo(i * 0.3, i * 0.25, i * 0.65, i * 0.05), e.quadraticCurveTo(i * 0.45, -i * 0.2, i * 0.5, -i * 0.7), e.quadraticCurveTo(i * 0.2, -i * 0.5, 0, -i * 0.55), e.quadraticCurveTo(-i * 0.2, -i * 0.5, -i * 0.5, -i * 0.7), e.quadraticCurveTo(-i * 0.45, -i * 0.2, -i * 0.65, i * 0.05), e.quadraticCurveTo(-i * 0.3, i * 0.25, -i * 0.4, i * 0.7), e.quadraticCurveTo(-i * 0.12, i * 0.6, 0, i), e.closePath(), e.fill();
      } else {
        const u = r === "light" ? "#dbeafe" : "#e2e8f0", n = r === "light" ? Math.min(1, o.opacity * 1.12) : o.opacity * 0.5;
        r === "light" && (e.globalAlpha = 0.96), e.fillStyle = `rgba(${I(u)}, ${n})`, e.shadowBlur = 2, e.shadowColor = "rgba(0, 0, 0, 0.15)", e.beginPath(), e.arc(o.x, o.y, o.r, 0, 2 * Math.PI), e.fill(), e.shadowBlur = 0, r === "light" && (e.globalAlpha = 1);
      }
      e.restore();
    }
    function T() {
      m.clearRect(0, 0, d, p);
      const e = h, o = t.wind * 0.5, r = h === "summer" ? 100 : 0, c = w && w.complete;
      for (let u = 0; u < g.length; u++) {
        const n = g[u];
        if (n.y += n.velY, t.mouseInteraction) {
          const f = n.x - v.x, b = n.y - v.y, y = Math.sqrt(f * f + b * b), z = 100;
          if (y < z) {
            const P = (z - y) / z, $ = f / y * P * 10, E = b / y * P * 10;
            n.x += $, n.y += E;
          }
        }
        const i = n.velX != null ? n.velX : o;
        if (e === "spring")
          n.step += n.stepSize, n.x += Math.sin(n.step) * 0.55 * (n.chaos ?? 1) + Math.cos(n.flip) * 0.35 + i;
        else {
          n.step += n.stepSize;
          const f = n.swingAmplitude != null ? n.swingAmplitude : t.swing;
          n.x += Math.sin(n.step) * (f * 0.5) + i;
        }
        (e === "spring" || e === "autumn") && (n.flip += n.flipSpeed, n.rotation += n.rotationSpeed), c ? m.drawImage(w, n.x - n.r, n.y - n.r, n.r * 2, n.r * 2) : e === "autumn" && n.opacity === 0 || Y(m, n);
        const M = r || n.r;
        (n.y > p + M || n.x > d + n.r || n.x < -n.r) && Object.assign(n, C(false));
      }
      t._animationId = requestAnimationFrame(T);
    }
    t._onResize = A, X(), t.resize && window.addEventListener("resize", t._onResize);
  },
  beforeUnmount() {
    this._animationId != null && (cancelAnimationFrame(this._animationId), this._animationId = null), this._onResize && (window.removeEventListener("resize", this._onResize), this._onResize = null), this.mouseInteraction && this._onMouseMove && (window.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("touchmove", this._onTouchMove), this._onMouseMove = null, this._onTouchMove = null);
  }
};
function s(t, l) {
  return Math.random() * (l - t) + t;
}
function O(t) {
  return t.indexOf("#") === 0 ? t.length === 4 ? t.slice(1).split("").map((l) => parseInt(l + l, 16)).join(",") : t.length === 7 ? [t.slice(1, 3), t.slice(3, 5), t.slice(5, 7)].map((l) => parseInt(l, 16)).join(",") : "255,255,255" : t.indexOf("rgb(") === 0 ? t.slice(4, -1) : "255,255,255";
}
function j(t, l, m, p, d, g) {
  return openBlock(), createElementBlock("canvas", {
    ref: "canvasRef",
    class: normalizeClass(["seasons-falling-canvas", { "is-fullscreen": m.fullScreen }])
  }, null, 2);
}
var U = F(H, [["render", j], ["__scopeId", "data-v-577fe6f1"]]);
export {
  U as default
};
//# sourceMappingURL=vue-seasons-falling.js.map
