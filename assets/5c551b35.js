/* @ds-bundle: {"format":4,"namespace":"Ds2ndDesignSystem_d17bea","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"90f4b9406778","components/brand/Logo.jsx":"f257214da397","components/feedback/Alert.jsx":"54dc4538f766","components/feedback/Badge.jsx":"96add5c1ebf7","components/feedback/Tag.jsx":"dc01f66f9351","components/forms/Button.jsx":"7729fb1e6063","components/forms/Checkbox.jsx":"9eff095ff387","components/forms/IconButton.jsx":"80876934d994","components/forms/Input.jsx":"8fa03a1bb766","components/forms/Radio.jsx":"c5beac9ee088","components/forms/Select.jsx":"9177920684e0","components/forms/Switch.jsx":"61fc90634cab","components/forms/Textarea.jsx":"1ad2fe64c56f","components/layout/Card.jsx":"cadbc46352de","components/layout/SectionHeading.jsx":"27a085e1d155","components/navigation/Tabs.jsx":"0630c89e0573","components/overlay/Dialog.jsx":"b3ff4f94f54a","components/overlay/Tooltip.jsx":"10c368a8ad7a","ui_kits/website/ContactPage.jsx":"d1fd0fa20999","ui_kits/website/HomePage.jsx":"c4b84ee3686c","ui_kits/website/SiteFooter.jsx":"bf5d29051c3a","ui_kits/website/SiteHeader.jsx":"89715c50f526"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds2ndDesignSystem_d17bea = window.Ds2ndDesignSystem_d17bea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper around Lucide (loaded from CDN).
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 * Renders currentColor by default so it inherits text color.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    host.appendChild(el);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        }
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — brand lockup. Renders the real logo image when `src` is provided,
 * otherwise a clean type-only fallback in the brand display font.
 * The bundled runtime can't resolve project asset paths, so pass `src`
 * pointing at your copied assets/logo-*.png for the real mark.
 */
function Logo({
  src,
  alt = '2nd ぷれいす',
  height = 48,
  tagline = false,
  style = {},
  ...rest
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      style: {
        height,
        width: 'auto',
        display: 'block',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1,
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, rest), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.32em',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-wide)',
      marginBottom: '0.2em'
    }
  }, "\u5C31\u52B4\u7D99\u7D9A\u652F\u63F4B\u578B\u4E8B\u696D\u6240"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: height * 0.9,
      fontWeight: 'var(--fw-black)',
      color: 'var(--ink-700)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--marigold-500)'
    }
  }, "2nd"), " \u3077\u308C\u3044\u3059"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Alert — inline message block for info / success / warning / danger.
 */
function Alert({
  title,
  children,
  tone = 'info',
  icon,
  onClose,
  style = {},
  ...rest
}) {
  const map = {
    info: {
      bg: 'var(--info-soft)',
      bd: 'var(--sky-500)',
      fg: '#0d7cab',
      icon: 'info'
    },
    success: {
      bg: 'var(--success-soft)',
      bd: 'var(--leaf-500)',
      fg: '#1c7a4c',
      icon: 'check-circle'
    },
    warning: {
      bg: 'var(--warning-soft)',
      bd: 'var(--marigold-500)',
      fg: 'var(--marigold-800)',
      icon: 'alert-triangle'
    },
    danger: {
      bg: 'var(--danger-soft)',
      bd: 'var(--coral-500)',
      fg: '#b33c1c',
      icon: 'alert-circle'
    }
  };
  const t = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-lg)',
      borderLeft: `4px solid ${t.bd}`,
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bd,
      flexShrink: 0,
      marginTop: 1,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: t.fg,
      marginBottom: children ? 4 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      lineHeight: 'var(--lh-snug)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: 0,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill. Tone maps to semantic colors.
 */
function Badge({
  children,
  tone = 'marigold',
  variant = 'soft',
  style = {},
  ...rest
}) {
  const tones = {
    marigold: {
      soft: ['var(--marigold-100)', 'var(--marigold-800)'],
      solid: ['var(--marigold-500)', 'var(--ink-900)']
    },
    leaf: {
      soft: ['var(--leaf-100)', '#1c7a4c'],
      solid: ['var(--leaf-500)', 'var(--white)']
    },
    sky: {
      soft: ['var(--sky-100)', '#0d7cab'],
      solid: ['var(--sky-500)', 'var(--white)']
    },
    coral: {
      soft: ['var(--coral-100)', '#b33c1c'],
      solid: ['var(--coral-500)', 'var(--white)']
    },
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-700)', 'var(--white)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.marigold)[variant] || (tones[tone] || tones.marigold).soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.4,
      color: fg,
      background: bg,
      borderRadius: 'var(--radius-pill)',
      letterSpacing: 'var(--ls-normal)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — category / keyword chip. Optionally removable.
 */
function Tag({
  children,
  icon,
  onRemove,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: ['var(--cream-100)', 'var(--ink-700)', 'var(--border-default)'],
    marigold: ['var(--marigold-50)', 'var(--marigold-800)', 'var(--marigold-200)'],
    leaf: ['var(--leaf-100)', '#1c7a4c', 'var(--leaf-500)']
  };
  const [bg, fg, bd] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: fg,
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "\u524A\u9664",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      color: fg,
      cursor: 'pointer',
      padding: 0,
      marginLeft: 2,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary call to action.
 * Warm, rounded, generous padding. Marigold primary echoes the logo mark.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--fs-small)',
      gap: '6px',
      radius: 'var(--radius-md)',
      icon: 16
    },
    md: {
      padding: '12px 22px',
      fontSize: 'var(--fs-body)',
      gap: '8px',
      radius: 'var(--radius-lg)',
      icon: 18
    },
    lg: {
      padding: '16px 30px',
      fontSize: 'var(--fs-body-lg)',
      gap: '10px',
      radius: 'var(--radius-xl)',
      icon: 20
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-strong)',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--marigold-800)',
      border: '2px solid transparent',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent',
      boxShadow: 'none'
    },
    leaf: {
      background: 'var(--leaf-500)',
      color: 'var(--white)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: 'var(--ls-normal)',
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — custom-styled checkbox with a marigold checked state.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'cb';
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--marigold-500)' : 'var(--border-strong)'}`,
      background: on ? 'var(--marigold-500)' : 'var(--surface-card)',
      color: 'var(--ink-900)',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square/circular button carrying a single Lucide icon.
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  round = true,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--marigold-800)',
      border: '2px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-strong)'
    },
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSizes[size]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, hint and error state.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'in';
  const inputId = id || autoId;
  const pads = {
    sm: '8px 12px',
    md: '11px 14px',
    lg: '14px 16px'
  };
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      padding: pads[size] || pads.md,
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      width: '100%',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--marigold-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — single option in a group. Use several with the same `name`.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'rd';
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      border: `2px solid ${on ? 'var(--marigold-500)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 'var(--radius-full)',
      background: 'var(--marigold-500)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown, styled to match Input, with a chevron.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  disabled = false,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'sel';
  const inputId = id || autoId;
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      padding: '11px 40px 11px 14px',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      width: '100%',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--marigold-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle with a marigold "on" track.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'sw';
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--marigold-500)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text field, styled to match Input.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const autoId = React.useId ? React.useId() : 'ta';
  const inputId = id || autoId;
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      padding: '12px 14px',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      resize: 'vertical',
      width: '100%',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--marigold-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft rounded container. Optional interactive lift on hover.
 */
function Card({
  children,
  padding = 'var(--space-6)',
  interactive = false,
  accent,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      padding,
      borderTop: accent ? `4px solid ${accent}` : undefined,
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow + title + optional lead, centered or left.
 * Used to open marketing sections with the brand's warm rhythm.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  style = {},
  ...rest
}) {
  const isCenter = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      textAlign: align,
      alignItems: isCenter ? 'center' : 'flex-start',
      maxWidth: isCenter ? 720 : undefined,
      marginLeft: isCenter ? 'auto' : undefined,
      marginRight: isCenter ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-small)',
      color: 'var(--marigold-700)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      borderRadius: 2,
      background: 'var(--marigold-500)'
    }
  }), eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline-style tab bar. Controlled or uncontrolled.
 * `items`: [{ id, label, icon? }]
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '2px solid var(--border-default)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => select(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '12px 16px',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-body)',
        color: on ? 'var(--marigold-700)' : 'var(--text-muted)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderBottom: `3px solid ${on ? 'var(--marigold-500)' : 'transparent'}`,
        marginBottom: -2,
        transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dialog — centered modal with soft backdrop. Controlled via `open`.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style = {},
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(58, 54, 55, 0.4)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      animation: 'dcPop var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h4)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      border: 'none',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-full)',
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
      marginTop: 'var(--space-6)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes dcPop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — hover/focus label bubble. Wraps a single child.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {},
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px, -50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px, -50%)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos[placement],
      whiteSpace: 'nowrap',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Alert,
  SectionHeading,
  Icon
} = window.Ds2ndDesignSystem_d17bea;
function ContactPage({
  onNav
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: '56px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " \u30DB\u30FC\u30E0\u306B\u623B\u308B"), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "CONTACT",
    title: "\u898B\u5B66\u30FB\u304A\u554F\u3044\u5408\u308F\u305B",
    lead: "\u4E0B\u8A18\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u304A\u96FB\u8A71\u306B\u3066\u3001\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002\u3054\u76F8\u8AC7\u3060\u3051\u3067\u3082\u6B53\u8FCE\u3067\u3059\u3002"
  }), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "\u9001\u4FE1\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
    onClose: () => setSent(false)
  }, "\u62C5\u5F53\u8005\u3088\u308A2\u301C3\u65E5\u4EE5\u5185\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002")), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 28,
      padding: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D *",
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u3075\u308A\u304C\u306A",
    placeholder: "\u3084\u307E\u3060 \u305F\u308D\u3046"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 *",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    placeholder: "000-0000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u3054\u5E0C\u671B\u306E\u5185\u5BB9",
    placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    options: ['見学したい', '体験利用したい', '資料がほしい', 'その他相談']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u3054\u5E0C\u671B\u306E\u6642\u9593\u5E2F",
    placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    options: ['午前 (9:30–12:00)', '午後 (13:00–15:30)', 'どちらでも']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "\u901A\u6240\u5F62\u614B\u306E\u3054\u5E0C\u671B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "style",
    label: "\u901A\u6240",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "style",
    label: "\u5728\u5B85"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "style",
    label: "\u672A\u5B9A"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "\u3054\u76F8\u8AC7\u5185\u5BB9",
    rows: 5,
    placeholder: "\u3054\u8CEA\u554F\u3084\u3054\u4E0D\u5B89\u306A\u70B9\u306A\u3069\u3001\u304A\u6C17\u8EFD\u306B\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066\u540C\u610F\u3057\u307E\u3059"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "send",
    onClick: () => {
      setSent(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, "\u9001\u4FE1\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => onNav('home')
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB")))));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  SectionHeading,
  Icon
} = window.Ds2ndDesignSystem_d17bea;

/* Warm placeholder for houseplant photography (real photos to be supplied). */
function PlantPlaceholder({
  label,
  icon = 'leaf',
  h = 200,
  tone = 'marigold',
  style = {}
}) {
  const tones = {
    marigold: ['#fef6e3', '#fbdd93', 'var(--marigold-700)'],
    leaf: ['#e4f4ea', '#bfe6cf', '#1c7a4c'],
    coral: ['#fbe7de', '#f6c7b6', '#b33c1c'],
    sky: ['#e2f4fc', '#c2e8f8', '#0d7cab']
  };
  const [a, b, fg] = tones[tone] || tones.marigold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 'var(--radius-xl)',
      background: `linear-gradient(140deg, ${a}, ${b})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: fg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 40,
    strokeWidth: 1.6
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      opacity: 0.8
    }
  }, label));
}
function HomePage({
  onNav
}) {
  const works = [{
    icon: 'sprout',
    tone: 'leaf',
    title: '観葉植物のお世話',
    text: '水やり・植え替え・剪定。植物の成長を見守りながら、季節を感じる作業です。'
  }, {
    icon: 'flower-2',
    tone: 'coral',
    title: '寄せ植えづくり',
    text: '季節の草花を組み合わせて、ひとつの鉢に。個性が光る人気の作業です。'
  }, {
    icon: 'package',
    tone: 'marigold',
    title: '出荷・梱包',
    text: '丁寧に袋詰めし、地域の販売会やオンラインへ。手をかけた分だけ喜ばれます。'
  }];
  const voices = [{
    name: 'Aさん（30代）',
    text: '植物のお世話をしていると、気持ちが落ち着きます。自分のペースで働けるのがうれしいです。'
  }, {
    name: 'Bさん（40代）',
    text: 'スタッフさんがやさしくて、はじめてでも安心でした。寄せ植えが得意になりました。'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      background: 'linear-gradient(160deg, var(--marigold-50) 0%, var(--surface-page) 60%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '72px 24px 64px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "leaf",
    style: {
      marginBottom: 18
    }
  }, "\u5C31\u52B4\u7D99\u7D9A\u652F\u63F4B\u578B\u4E8B\u696D\u6240"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      lineHeight: 1.25,
      margin: '0 0 20px'
    }
  }, "\u89B3\u8449\u690D\u7269\u3068\u3068\u3082\u306B\u3001", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--marigold-600)'
    }
  }, "\u3086\u3063\u304F\u308A"), "\u306F\u305F\u3089\u304F\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 480,
      margin: '0 0 28px'
    }
  }, "\u300C2nd \u3077\u308C\u3044\u3059\u300D\u306F\u3001\u690D\u7269\u306E\u304A\u4E16\u8A71\u3092\u901A\u3057\u3066\u306F\u305F\u3089\u304F\u559C\u3073\u3092\u898B\u3064\u3051\u308B\u3001\u3042\u306A\u305F\u306E\u3082\u3046\u3072\u3068\u3064\u306E\u5C45\u5834\u6240\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "calendar",
    onClick: () => onNav('contact')
  }, "\u898B\u5B66\u3092\u4E88\u7D04\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => document.getElementById('work')?.scrollIntoView?.({
      behavior: 'smooth'
    })
  }, "\u304A\u4ED5\u4E8B\u3092\u898B\u308B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 36
    }
  }, [['9:30–15:30', '活動時間'], ['週2日〜', '通所ペース'], ['送迎あり', '通いやすさ']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22,
      color: 'var(--ink-800)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PlantPlaceholder, {
    label: "\u4F5C\u696D\u98A8\u666F",
    icon: "sprout",
    tone: "leaf",
    h: 220
  }), /*#__PURE__*/React.createElement(PlantPlaceholder, {
    label: "\u5BC4\u305B\u690D\u3048",
    icon: "flower-2",
    tone: "coral",
    h: 220,
    style: {
      marginTop: 24
    }
  }), /*#__PURE__*/React.createElement(PlantPlaceholder, {
    label: "\u5E97\u982D\u8CA9\u58F2",
    icon: "store",
    tone: "marigold",
    h: 180
  }), /*#__PURE__*/React.createElement(PlantPlaceholder, {
    label: "\u89B3\u8449\u690D\u7269",
    icon: "leaf",
    tone: "sky",
    h: 180
  })))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "ABOUT US",
    title: "\u5B89\u5FC3\u3057\u3066\u904E\u3054\u305B\u308B\u3001\u3082\u3046\u3072\u3068\u3064\u306E\u5C45\u5834\u6240",
    lead: "\u4E00\u4EBA\u3072\u3068\u308A\u306E\u30DA\u30FC\u30B9\u3092\u5927\u5207\u306B\u3002\u690D\u7269\u3068\u3075\u308C\u3042\u3044\u306A\u304C\u3089\u3001\u7121\u7406\u306A\u304F\u7D9A\u3051\u3089\u308C\u308B\u4F5C\u696D\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 40
    }
  }, [['heart-handshake', 'やさしいサポート', '経験豊富なスタッフが、はじめての方にも丁寧に寄り添います。'], ['clock', '自分のペースで', '週2日・短時間から。体調に合わせて無理なく通えます。'], ['bus', '送迎サービス', 'ご自宅から事業所まで、安心の送迎をご用意しています。']].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--marigold-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--marigold-600)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "OUR WORK",
    title: "\u690D\u7269\u3068\u3068\u3082\u306B\u3042\u308B\u3001\u304A\u4ED5\u4E8B",
    lead: "\u89B3\u8449\u690D\u7269\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u3001\u5B63\u7BC0\u3092\u611F\u3058\u308B\u4F5C\u696D\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 40
    }
  }, works.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.title,
    interactive: true,
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlantPlaceholder, {
    icon: w.icon,
    tone: w.tone,
    h: 168
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "leaf",
    tone: "leaf"
  }, "\u89B3\u8449\u690D\u7269")), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, w.text))))))), /*#__PURE__*/React.createElement("section", {
    id: "voice",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "VOICE",
    title: "\u5229\u7528\u8005\u3055\u3093\u306E\u58F0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginTop: 40
    }
  }, voices.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.name,
    accent: "var(--marigold-400)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 26,
    color: "var(--marigold-400)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.9,
      color: 'var(--text-body)',
      margin: '12px 0 16px'
    }
  }, v.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, v.name))))), /*#__PURE__*/React.createElement("section", {
    id: "access",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-2xl)',
      padding: '56px 48px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--white)',
      margin: '0 0 12px'
    }
  }, "\u307E\u305A\u306F\u3001\u898B\u5B66\u304B\u3089\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: 17,
      margin: '0 0 24px',
      maxWidth: 420
    }
  }, "\u300C\u3069\u3093\u306A\u5834\u6240\u304B\u306A\uFF1F\u300D\u305D\u306E\u6C17\u6301\u3061\u306E\u307E\u307E\u3067\u5927\u4E08\u592B\u3002\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "calendar",
    onClick: () => onNav('contact')
  }, "\u898B\u5B66\u3092\u4E88\u7D04\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    icon: "phone",
    style: {
      color: 'var(--white)'
    }
  }, "\u304A\u96FB\u8A71\u3067\u306E\u3054\u76F8\u8AC7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, [['map-pin', '〒000-0000 ○○県○○市○○町1-2-3'], ['clock', '平日 9:30 – 15:30'], ['phone', '000-000-0000']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      color: 'var(--white)',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--marigold-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, t)))))));
}
window.HomePage = HomePage;
window.PlantPlaceholder = PlantPlaceholder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  Icon
} = window.Ds2ndDesignSystem_d17bea;
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,0.75)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '48px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "2nd \u3077\u308C\u3044\u3059",
    style: {
      height: 56,
      marginBottom: 14,
      filter: 'drop-shadow(0 0 0 transparent)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      maxWidth: 320,
      margin: 0
    }
  }, "\u5C31\u52B4\u7D99\u7D9A\u652F\u63F4B\u578B\u4E8B\u696D\u6240\u300C2nd \u3077\u308C\u3044\u3059\u300D\u3002\u89B3\u8449\u690D\u7269\u3068\u3068\u3082\u306B\u3001\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u306F\u305F\u3089\u304F\u5C45\u5834\u6240\u3067\u3059\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--white)',
      marginBottom: 12
    }
  }, "\u30E1\u30CB\u30E5\u30FC"), ['事業所について', 'お仕事', '利用者の声', 'アクセス'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'block',
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14,
      padding: '5px 0',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--white)',
      marginBottom: 12
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), [['map-pin', '○○県○○市○○町1-2-3'], ['phone', '000-000-0000'], ['mail', 'info@2ndplace.example']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 14,
      padding: '5px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--marigold-400)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      padding: '18px 24px',
      textAlign: 'center',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2nd \u3077\u308C\u3044\u3059 All rights reserved."));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton
} = window.Ds2ndDesignSystem_d17bea;
function SiteHeader({
  current,
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  const links = [{
    id: 'home',
    label: 'ホーム'
  }, {
    id: 'about',
    label: '事業所について'
  }, {
    id: 'work',
    label: 'お仕事'
  }, {
    id: 'voice',
    label: '利用者の声'
  }, {
    id: 'access',
    label: 'アクセス'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,253,248,0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--marigold-500)'
    }
  }, "2nd"), " \u3077\u308C\u3044\u3059")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    },
    className: "nav-desktop"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.id === 'home' ? 'home' : 'home');
      document.getElementById(l.id)?.scrollIntoView?.({
        behavior: 'smooth'
      });
    },
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-body)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--marigold-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "calendar",
    onClick: () => onNav('contact')
  }, "\u898B\u5B66\u4E88\u7D04")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
