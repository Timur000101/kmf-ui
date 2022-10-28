import { defineComponent as i, openBlock as o, createElementBlock as c } from "vue";
const m = /* @__PURE__ */ i({
  __name: "KButton",
  setup(t) {
    return (e, n) => (o(), c("button", null, "This is a button"));
  }
}), _ = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e)
    n[r] = s;
  return n;
}, u = {}, a = {
  type: "text",
  placeholder: "This is a textfield"
};
function l(t, e) {
  return o(), c("input", a);
}
const x = /* @__PURE__ */ _(u, [["render", l]]), p = {}, d = {
  type: "tel",
  placeholder: "This is a PhoneField"
};
function f(t, e) {
  return o(), c("input", d);
}
const B = /* @__PURE__ */ _(p, [["render", f]]);
export {
  m as Button,
  B as PhoneField,
  x as TextField
};
