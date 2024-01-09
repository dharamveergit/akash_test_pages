import{j as e}from"./jsx-runtime.pwZL9jDf.js";import{v as o,X as x}from"./icons.2skGZnZu.js";import{u as c}from"./use-lock-body.om6CyqlP.js";import{t as p}from"./transition.cYFSBffZ.js";import"./index.9AF9g4V4.js";import"./use-resolve-button-type.FOQ-GfPc.js";function k({currentPath:l,nav:n,pageName:a="pageName",link:t=""}){return e.jsx(o,{as:"nav",className:" overflow-hidden",children:({open:s})=>e.jsxs(e.Fragment,{children:[e.jsxs(o.Button,{className:"flex items-center gap-x-1 rounded-full border bg-background2 px-3 py-2 text-xs leading-none ",children:[a,e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-foreground",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 2.5L9.5 6L6 9.5",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"})})]}),e.jsx(p,{enter:"transition ease duration-500 transform",enterFrom:"opacity-100 -translate-x-full",enterTo:"opacity-100 translate-x-0",leave:"transition ease duration-300 transform",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-100 -translate-x-full",className:"fixed  inset-0  z-40  w-full overflow-y-auto  bg-background   lg:hidden",children:e.jsx(m,{currentPath:l,open:s,nav:n,link:t})})]})})}const m=({currentPath:l,open:n,nav:a,link:t})=>(c(n),e.jsx(o.Panel,{className:" z-50 lg:hidden",children:e.jsxs("div",{className:"container   z-50 flex h-full flex-col gap-6 py-10  ",children:[e.jsx(o.Button,{className:"  ml-auto flex items-center justify-center  gap-x-1 rounded-full  text-xs leading-none",children:e.jsx(x,{})}),e.jsx(u,{currentPath:l,nav:a,link:t})]})}));function u({currentPath:l,nav:n,link:a}){return e.jsxs("div",{className:"flex w-full flex-col  gap-y-3 overflow-auto",children:[e.jsxs("a",{href:"/development/current-groups/",className:"flex cursor-pointer items-center gap-x-1 rounded-lg  py-[6px] text-base font-medium leading-[24px] text-para hover:bg-[#F4F1F1] hover:text-primary",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:"text-para",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z",fill:"currentColor"})}),"Back"]}),n.map(t=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("a",{href:`${t.link}${t.subItems[0].link.split("/")[3]}/`,className:`
                   
              border-b  pb-3 pt-[8px] text-base font-medium leading-[24px]  `,children:t.label}),t.subItems&&l.split("/")[2]===t.link.split("/")[2]&&t.subItems.map(s=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("a",{className:`${l===s.link?" text-primary":"text-para"}  ml-3 rounded-lg py-1.5   text-base font-medium leading-[24px] `,href:`${s.link}`,children:s.label}),s.meetings&&l.split("/")[3]===s.link.split("/")[3]&&s.meetings.map(r=>{const i=r.title.split("-").slice(1).join("-"),d=new Date(i);return console.log(d),{...r,date:d}}).sort((r,i)=>i.date-r.date).map(r=>e.jsx("a",{href:`/current-groups/meetings/${r.link}`,className:`${l===r.link?"":"text-para"}  ml-6   py-[6px] text-base font-medium leading-[24px] `,children:r.title.split("-").slice(1).join("-")}))]}))]})),e.jsxs("div",{className:"mt-3 flex flex-col justify-center rounded-[8px] border  bg-background2 p-4",children:[e.jsxs("a",{href:a,className:"inline-flex cursor-pointer items-center justify-center gap-x-2 text-xs font-medium hover:text-primary",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-foreground",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 14L8 14L14 14",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M8.15049 3.88559L10.0361 1.99997L13.3359 5.2998L11.4503 7.18542M8.15049 3.88559L4.51039 7.52569C4.32285 7.71323 4.21749 7.96758 4.21749 8.2328L4.21749 11.1184L7.10311 11.1184C7.36833 11.1184 7.62268 11.0131 7.81022 10.8255L11.4503 7.18542M8.15049 3.88559L11.4503 7.18542",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"})]}),"Edit page on github"]}),e.jsx("p",{className:"mt-2 text-center text-2xs",children:"Last modified on April 18, 2023"})]})]})}export{k as default};
