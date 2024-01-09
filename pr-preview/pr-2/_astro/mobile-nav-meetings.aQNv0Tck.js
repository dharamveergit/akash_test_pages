import{j as e}from"./jsx-runtime.pwZL9jDf.js";import{v as r,X as x}from"./icons.2skGZnZu.js";import{u as p}from"./use-lock-body.om6CyqlP.js";import{t as c}from"./transition.cYFSBffZ.js";import"./index.9AF9g4V4.js";import"./use-resolve-button-type.FOQ-GfPc.js";function w({currentPath:t,nav:i,pageName:n="pageName",link:l=""}){return e.jsx(r,{as:"nav",className:" overflow-hidden",children:({open:s})=>e.jsxs(e.Fragment,{children:[e.jsxs(r.Button,{className:"flex items-center gap-x-1 rounded-full border bg-white px-3 py-2 text-xs leading-none ",children:[n,e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 2.5L9.5 6L6 9.5",stroke:"#11181C","stroke-linecap":"round","stroke-linejoin":"round"})})]}),e.jsxs(c,{enter:"transition ease duration-500 transform",enterFrom:"opacity-100 -translate-x-full",enterTo:"opacity-100 translate-x-0",leave:"transition ease duration-300 transform",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-100 -translate-x-full",className:"fixed left-0  top-0  z-40  w-full  bg-background   lg:hidden",children:[e.jsx(m,{currentPath:t,open:s,nav:i,link:l})," "]})]})})}const m=({currentPath:t,open:i,nav:n,link:l})=>(p(i),e.jsx(r.Panel,{className:" z-50 lg:hidden",children:e.jsxs("div",{className:"container   z-50 mt-10 flex h-screen flex-col gap-6 overflow-auto ",children:[e.jsx(r.Button,{className:"  ml-auto flex items-center justify-center  gap-x-1 rounded-full  text-xs leading-none",children:e.jsx(x,{})}),e.jsx(f,{currentPath:t,nav:n,link:l})]})}));function f({currentPath:t,nav:i,link:n}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex w-full flex-col  gap-y-3 overflow-auto",children:[e.jsxs("a",{href:"/development/current-groups/",className:"flex cursor-pointer items-center gap-x-1 rounded-lg  py-[6px] text-base font-medium leading-[24px] text-para hover:bg-[#F4F1F1] hover:text-primary",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z",fill:"#687076"})}),"Back"]}),i.map(l=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("a",{href:`${l.link}${l.subItems[0].link.split("/")[3]}/`,className:`
                   
              border-b  pb-3 pt-[8px] text-base font-medium leading-[24px]  `,children:l.label}),l.subItems&&t.split("/")[3]===l.link.split("/")[2]&&l.subItems.map(s=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("a",{className:`${t===s.link?" text-primary":"text-para"}  ml-3 rounded-lg py-1.5   text-base font-medium leading-[24px] `,href:`${s.link}`,children:s.label}),s.meetings&&s.link.split("/")[3]===t.split("/")[4]&&s.meetings.map(a=>{const o=a.title.split("-").slice(1).join("-"),d=new Date(o);return console.log(d),{...a,date:d}}).sort((a,o)=>o.date-a.date).map(a=>e.jsx("a",{href:`${a.link}`,className:`${t.split("/")[5]===`${s.link}${a.link}`.split("/")[4]&&t.split("/")[4]===`${s.link}${a.link}`.split("/")[3]?"text-primary":"text-para"}  ml-6   py-[6px] text-base font-medium leading-[24px] `,children:a.title.split("-").slice(1).join("-")}))]}))]}))]})})}export{w as default};