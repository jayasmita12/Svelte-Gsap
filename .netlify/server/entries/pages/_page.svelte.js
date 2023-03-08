import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Dragable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-full h-screen flex flex-col space-y-4 justify-center items-center"}"><h1 class="${"text-xl"}">DRAGABLE</h1>
    <p class="${"text-xl font-bold text-green-600"}">Put the item into the bag</p>
    <div class="${"bg-black w-[60%] relative h-[50%]"}" id="${"groups"}"><div class="${"text-green-500 p-4"}"><img src="${"shop.png"}" class="${"w-28 h-28"}" id="${"bag"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"mc.png"}" class="${"w-28 h-28 img absolute right-[20%] top-[10%]"}" id="${"orange"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"bottle.png"}" class="${"w-28 h-2w-28 img absolute right-[10%] left-[50%]"}" id="${"bottle"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"hamburger.png"}" class="${"w-28 h-2w-28 img absolute right-[10%] bottom-[10%]"}" id="${"hamburger"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"joy-con.png"}" class="${"w-28 h-2w-28 img absolute left-[30%] top-[10%]"}" id="${"joy-con"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"fries.png"}" class="${"w-28 h-2w-28 img absolute left-[10%] bottom-[10%]"}" id="${"fries"}" alt="${""}"></div></div></div>`;
});
const Flip2_svelte_svelte_type_style_lang = "";
const Flip3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-lg space-y-5 mx-auto py-10"}"><h1 class="${"text-xl text-center"}">FLIP</h1>

    <button class="${"px-5 py-1 bg-teal-600 rounded-md"}">Fit</button>
    <div class="${"border-2 border-red-900 text-center p-5 space-y-3 containers"}"><div class="${"px-7 py-2 bg-neutral-400 child1"}">Child1</div>
        <div class="${"px-7 py-2 bg-neutral-400 child2"}">Child2</div></div>
    <div class="${"bg-blue-400 px-8 py-5 mb-10 text-center target"}">Target</div></div>`;
});
const MotionPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full py-32"}"><center><h1 class="${"text-xl"}">MOTION PATH</h1>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"0.1"}" stroke="${"currentColor"}" class="${"w-[50%] h-[50%] self-center "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"0.1"}" stroke="${"currentColor"}" class="${"w-[50%] h-[50%] self-center stroke-violet-800 "}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" id="${"path"}" d="${"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}"></path><g id="${"rect"}"><rect width="${"1.7"}" height="${"0.2"}" fill="${""}" class="${"stroke-pink-500 shadow-2xl fill-pink-500"}"></rect></g></svg></svg></center></div>`;
});
const Observer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-full border-2 h-screen flex justify-center bg-black overflow-hidden"}" id="${"box"}"><svg viewBox="${"0 0 284 284"}"><path d="${"M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z"}" fill="${"none"}" stroke="${"#fff"}" opacity="${"1"}" stroke-width="${"10"}"></path><g id="${"arrow"}" class="${"arrow"}" fill-rule="${"nonzero"}"><path d="${"M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z"}" fill="${"#0b0e1e"}" opacity="${"0"}"></path><path d="${"M142.18 122.89V40.83l-14.61 82.06h14.61Z"}" fill="${"#60ad30"}"></path><path d="${"M142.18 122.89V40.83l14.6 82.06h-14.6Z"}" fill="${"#8abe23"}"></path><path d="${"M140.75 169.9h-.01a28.3 28.3 0 0 1-28.17-28.17 28.3 28.3 0 0 1 28.17-28.17 28.3 28.3 0 0 1 28.17 28.17v.01a28.3 28.3 0 0 1-28.16 28.16Z"}" fill="${"#60ad30"}"></path><path d="${"M140.75 156.78c-8.23 0-15-6.77-15-15s6.77-15 15-15 15 6.77 15 15a15.12 15.12 0 0 1-15 15Z"}" fill="${"#8abe23"}"></path></g></svg> 
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

${validate_component(Flip3, "Flip3").$$render($$result, {}, {}, {})}
${validate_component(MotionPath, "MotionPath").$$render($$result, {}, {}, {})}
${validate_component(Dragable, "Dragable").$$render($$result, {}, {}, {})}
${validate_component(Observer_1, "Observer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
