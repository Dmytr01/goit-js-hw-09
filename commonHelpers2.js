import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),r="feedback-form-state";let a={};const l=JSON.parse(localStorage.getItem(r));l!==null&&(t.elements.email.value=l.email,t.elements.message.value=l.message);t.addEventListener("input",e=>{a.email=e.currentTarget.elements.email.value.trim(),a.message=e.currentTarget.elements.message.value.trim(),localStorage.setItem(r,JSON.stringify(a))});t.addEventListener("submit",e=>{e.preventDefault(),e.target.elements.email.value.trim()!==""&&e.target.elements.message.value.trim()!==""?(console.log(a),localStorage.removeItem(r),t.reset()):alert("Не всі поля заповнені")});
//# sourceMappingURL=commonHelpers2.js.map