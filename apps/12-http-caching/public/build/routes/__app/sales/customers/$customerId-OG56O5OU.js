import{a as p}from"/build/_shared/chunk-U2XHCC3L.js";import{a as b}from"/build/_shared/chunk-VTL4VDFE.js";import{n as c,o as s}from"/build/_shared/chunk-JBQFAOEL.js";import{e as d,h as l,i as u,k as m,q as f}from"/build/_shared/chunk-MNLU5CHS.js";import{a as h}from"/build/_shared/chunk-47ZWW2WL.js";import{c as i,e,f as o}from"/build/_shared/chunk-UIDRLFYU.js";o();o();var n=i(b()),x=i(h());var D="border-t border-gray-100 text-[14px] h-[56px]";function v(){let r=f();return e.createElement("div",{className:"relative p-10"},e.createElement("div",{className:"text-[length:14px] font-bold leading-6"},r.customerInfo.email),e.createElement("div",{className:"text-[length:32px] font-bold leading-[40px]"},r.customerInfo.name),e.createElement("div",{className:"h-4"}),e.createElement("div",{className:"text-m-h3 font-bold leading-8"},"Invoices"),e.createElement("div",{className:"h-4"}),e.createElement(u,{value:r.invoiceDetails,fallback:e.createElement(c,null),errorElement:e.createElement("div",{className:"relative h-full"},e.createElement(s,null))},a=>e.createElement("table",{className:"w-full"},e.createElement("tbody",null,a.map(t=>e.createElement("tr",{key:t.id,className:D},e.createElement("td",null,e.createElement(m,{className:"text-blue-600 underline",to:`../../invoices/${t.id}`},t.number)),e.createElement("td",{className:"text-center uppercase "+(t.dueStatus==="paid"?"text-green-brand":t.dueStatus==="overdue"?"text-red-brand":"")},t.dueStatusDisplay),e.createElement("td",{className:"text-right"},p.format(t.totalAmount))))))))}function g(){let r=l(),a=d();if(r.status===404)return e.createElement("div",{className:"relative h-full"},e.createElement(s,{message:`No customer found with the ID of "${a.customerId}"`}));throw new Error(`Unexpected caught response with status: ${r.status}`)}export{g as CatchBoundary,v as default};