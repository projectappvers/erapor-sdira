const LOGO = 'assets/logo-sekolah.jpg';

// INLINE SVG ICONS MAP (ZERO EXTERNAL CSS FILES REQUIRED)
const SVG_ICONS = {
  bars: '<svg viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>',
  house: '<svg viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
  school: '<svg viewBox="0 0 640 512"><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM320 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>',
  users: '<svg viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>',
  clipboard: '<svg viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm-32 160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v16H96V416z"/></svg>',
  futbol: '<svg viewBox="0 0 512 512"><path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-24.1-325.7c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8c-8.4-6.1-19.8-6.1-28.2 0l-47.9 34.8z"/></svg>',
  people: '<svg viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>',
  signature: '<svg viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-13.3 0-24-10.7-24-24s10.7-24 24-24h56.1l19.9-59.7L251.3 365c-11.9 5.9-26.3 2.5-34.2-8.2L193.7 325.6l-11.2 22.4c-4.1 8.1-12.4 13.3-21.5 13.3H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h26.2l22.4-44.7c3.9-7.8 11.7-12.9 20.4-13.3s16.9 3.9 21.6 11.4L235 303l42.2-21.1c5.1-2.5 10.9-3.1 16.4-1.7l70.4 17.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 153.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"/></svg>',
  idcard: '<svg viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
  table: '<svg viewBox="0 0 512 512"><path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>',
  download: '<svg viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>',
  export: '<svg viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/></svg>',
  import: '<svg viewBox="0 0 512 512"><path d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"/></svg>',
  trash: '<svg viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>',
  print: '<svg viewBox="0 0 512 512"><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>',
  clock: '<svg viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>',
  calendar: '<svg viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm329 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 273z"/></svg>',
  check: '<svg viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>',
  usertie: '<svg viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>',
  book: '<svg viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
  folder: '<svg viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>',
  graduate: '<svg viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg>',
  arrowleft: '<svg viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
  magic: '<svg viewBox="0 0 576 512"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3z"/></svg>'
};

function icon(name){
  return `<span class="svg-icon">${SVG_ICONS[name]||SVG_ICONS.book}</span>`;
}

function hydrateStaticIcons(){
  document.querySelectorAll('[data-icon]').forEach(el=>{
    const k=el.getAttribute('data-icon');
    el.className='svg-icon';
    el.innerHTML=SVG_ICONS[k]||SVG_ICONS.book;
  });
}

const SUBJECTS = [
 {id:'pai',sheet:'pai',tab:'PAI',name:'Pendidikan Agama dan Budi Pekerti'},
 {id:'pp',sheet:'pp',tab:'PP',name:'Pendidikan Pancasila'},
 {id:'bi',sheet:'b.i',tab:'B. INDONESIA',name:'Bahasa Indonesia'},
 {id:'mtk',sheet:'mtk',tab:'MATEMATIKA',name:'Matematika'},
 {id:'ipas',sheet:'ipas',tab:'IPAS',name:'Ilmu Pengetahuan Alam dan Sosial'},
 {id:'sbdp',sheet:'sbdp',tab:'SBDP',name:'Seni Budaya Dan Prakarya'},
 {id:'pjok',sheet:'pjok',tab:'PJOK',name:'Pendidikan Jasmani Olah Raga dan Kesehatan'},
 {id:'sunda',sheet:'sunda',tab:'B. SUNDA',name:'Bahasa dan Sastra Sunda'},
 {id:'inggris',sheet:'inggris',tab:'B. INGGRIS',name:'Bahasa Inggris'},
 {id:'arab',sheet:'arab',tab:'B. ARAB',name:'Bahasa Arab'},
 {id:'tik',sheet:'tik',tab:'TIK',name:'Teknologi Informasi Komunikasi'}
];
const LEDGER_SUBJECT_ORDER=['pai','pp','bi','mtk','ipas','sbdp','pjok','arab','inggris','sunda','tik'];
const LEDGER_KKM_DEFAULT=[75,75,78,73,72,75,78,70,70,70,75];
const LEDGER_VISIBLE_SUBJECTS=[{label:'PAI',index:0},{label:'PP',index:1},{label:'B.Ind',index:2},{label:'MAT',index:3},{label:'IPAS',index:4},{label:'SBdP',index:5},{label:'PJOK',index:6},{label:'Bahasa Arab',index:7},{label:'Bahasa Inggris',index:8},{label:'Bahasa Sunda',index:9},{label:'Teknologi Informasi Komunikasi',index:10}];

function getClassGradeNumber(kelasStr = state?.school?.kelas){
  const s = String(kelasStr || '').trim().toUpperCase();
  if(!s) return null;
  const digitMatch = s.match(/[1-6]/);
  if(digitMatch) return Number(digitMatch[0]);
  if(/^VI\b|\bVI\b/.test(s)) return 6;
  if(/^V(?![I])\b|\bV\b/.test(s)) return 5;
  if(/^IV\b|\bIV\b/.test(s)) return 4;
  if(/^III\b|\bIII\b/.test(s)) return 3;
  if(/^II\b|\bII\b/.test(s)) return 2;
  if(/^I(?![VX])\b|\bI\b/.test(s)) return 1;
  return null;
}
function isTikEnabled(){
  const g = getClassGradeNumber();
  return g === null || g >= 4;
}
function getActiveSubjects(){
  return isTikEnabled() ? SUBJECTS : SUBJECTS.filter(s => s.id !== 'tik');
}

// PERHITUNGAN SEMESTER & TAHUN AJARAN OTOMATIS (SEPERTI INDEX.HTML)
function getCalculatedTA(date = new Date()){
  const year = date.getFullYear();
  const month = date.getMonth();
  return month >= 6 ? `${year}/${year + 1}` : `${year - 1}/${year}`;
}
function getCalculatedSemester(date = new Date()){
  return date.getMonth() >= 6 ? 'Ganjil' : 'Genap';
}
function getNextTA(currentTa){
  const m = String(currentTa || '').match(/^(\d{4})\s*\/\s*(\d{4})$/);
  if(m){
    const y1 = Number(m[1]) + 1;
    const y2 = Number(m[2]) + 1;
    return `${y1}/${y2}`;
  }
  const base = getCalculatedTA().split('/');
  return `${Number(base[0])+1}/${Number(base[1])+1}`;
}

const emptyStudent=()=>({nisn:'',nis:'',nama:'',panggilan:'',jk:'',agama:'',tempat:'',tanggalLahir:'',jalan:'',kelurahan:'',kecamatan:'',kota:'',provinsi:'',sebelumnya:'',ayahNama:'',ayahPend:'',ayahPekerjaan:'',ibuNama:'',ibuPend:'',ibuPekerjaan:'',waliNama:'',waliPekerjaan:'',waliAlamat:'',parentSign:''});
const emptyScores=()=>({lm:['','','','','',''],sas:['','','','','',''],description:''});
const emptyExtra=()=>({sakit:'',izin:'',alpa:'',prestasi1Jenis:'',prestasi1Nilai:'',prestasi2Jenis:'',prestasi2Nilai:'',prestasi3Jenis:'',prestasi3Nilai:'',berat:'',tinggi:'',mata:'',telinga:'',gigi:'',catatan:''});

function createState(customSchool = null){
 const subjects={}; SUBJECTS.forEach(s=>subjects[s.id]={tp:['','','','','',''],rows:Array.from({length:24},emptyScores)});
 const defaultSchool = {
  nama:'SDS ISLAM RAMAH ANAK',npsn:'',alamat:'',telepon:'',kodepos:'',kelurahan:'',kecamatan:'',kota:'Depok',provinsi:'Jawa Barat',website:'',email:'',
  kepsekNama:'',kepsekNip:'',walasNama:'',walasNip:'',
  kelas:'',
  semester:getCalculatedSemester(),
  tahun:getCalculatedTA(),
  tglRapor:'',tglPenyerahan:''
 };
 return {
  school: customSchool ? Object.assign(defaultSchool, customSchool) : defaultSchool,
  students:Array.from({length:30},emptyStudent),subjects,
  dpl:Array(8).fill(''),kokuRows:Array.from({length:24},()=>({scores:Array(8).fill(''),description:''})),
  ekskulRows:Array.from({length:30},()=>({ekskul1:'',materi1:'',nilai1:'',deskripsi1:'',ekskul2:'',deskripsi2:'',ekskul3:'',deskripsi3:''})),
  absenRows:Array.from({length:30},emptyExtra),
  ledgerKkm:LEDGER_KKM_DEFAULT.slice(),
  decisionVisible:true,decision:'',decisionClass:'',parentSign:''
 };
}
const STORAGE_KEY='RAPOR_EXCEL_EXCEL_TEMPLATE_EMPTY_V2';
function getTaStorageKey(ta = getCalculatedTA()){
  return 'RAPOR_KURMER_TA_' + String(ta).replace(/[^0-9A-Za-z]/g, '_');
}
let state=load(); let selectedStudent=0; let activeSheet='home'; let activeSubject='pai';
function load(){
  const autoTa = getCalculatedTA();
  const autoSem = getCalculatedSemester();
  try{
    if(window.__INITIAL_RAPOR_STATE__){
      const merged = merge(createState(), window.__INITIAL_RAPOR_STATE__);
      merged.school.tahun = autoTa;
      merged.school.semester = autoSem;
      return merged;
    }
    const taKey = getTaStorageKey(autoTa);
    const rawTa = localStorage.getItem(taKey);
    if(rawTa){
      const parsedTa = JSON.parse(rawTa);
      const merged = merge(createState(), parsedTa);
      merged.school.tahun = autoTa;
      merged.school.semester = autoSem;
      return merged;
    }
    // Cek data dari penyimpanan umum / T.A sebelumnya
    const rawLegacy = localStorage.getItem(STORAGE_KEY);
    if(rawLegacy){
      const parsedLegacy = JSON.parse(rawLegacy);
      const prevTa = parsedLegacy?.school?.tahun;
      if(prevTa && prevTa !== autoTa){
        // Simpan arsip T.A sebelumnya agar tetap ada di localStorage
        localStorage.setItem(getTaStorageKey(prevTa), rawLegacy);
        // Otomatis reset lembar nilai & siswa untuk T.A baru sambil mempertahankan identitas sekolah & NIP
        const preservedSchool = Object.assign({}, parsedLegacy.school || {}, {
          kelas: parsedLegacy.school?.kelas || '',
          semester: autoSem,
          tahun: autoTa,
          tglRapor: '',
          tglPenyerahan: ''
        });
        const freshForNewTa = createState(preservedSchool);
        localStorage.setItem(taKey, JSON.stringify(freshForNewTa));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(freshForNewTa));
        return freshForNewTa;
      }
      const merged = merge(createState(), parsedLegacy);
      merged.school.tahun = autoTa;
      merged.school.semester = autoSem;
      localStorage.setItem(taKey, JSON.stringify(merged));
      return merged;
    }
  }catch(e){console.warn(e)}
  return createState();
}
function merge(base,x){
 if(!x||typeof x!=='object')return base;
 Object.assign(base,x);
 base.school=Object.assign(createState().school,x.school||{});
 if(!base.school.semester || !String(base.school.semester).trim()){
  base.school.semester = getCalculatedSemester();
 }
 if(!base.school.tahun || !String(base.school.tahun).trim()){
  base.school.tahun = getCalculatedTA();
 }
 base.students=Array.from({length:30},(_,i)=>Object.assign(emptyStudent(),(x.students||[])[i]||{}));
 base.subjects=base.subjects||{};
 SUBJECTS.forEach(s=>{
  const d=(x.subjects||{})[s.id]||{};
  base.subjects[s.id]={
   tp:Array.from({length:6},(_,i)=>(d.tp||[])[i]||''),
   rows:Array.from({length:24},(_,i)=>{
    const r=(d.rows||[])[i]||{};
    return {lm:Array.from({length:6},(_,j)=>(r.lm||[])[j]??''),sas:Array.from({length:6},(_,j)=>(r.sas||[])[j]??''),description:r.description||''};
   })
  };
 });
 base.kokuRows=Array.from({length:24},(_,i)=>{
  const r=(x.kokuRows||[])[i]||{};
  return {scores:Array.from({length:8},(_,j)=>(r.scores||[])[j]??''),description:r.description||''};
 });
 base.dpl=Array.from({length:8},(_,i)=>(x.dpl||[])[i]||'');
 base.ekskulRows=Array.from({length:30},(_,i)=>Object.assign({ekskul1:'',materi1:'',nilai1:'',deskripsi1:'',ekskul2:'',deskripsi2:'',ekskul3:'',deskripsi3:''},(x.ekskulRows||[])[i]||{}));
 base.absenRows=Array.from({length:30},(_,i)=>Object.assign(emptyExtra(),(x.absenRows||[])[i]||{}));
 base.ledgerKkm=Array.from({length:11},(_,i)=>{
  const v=(x.ledgerKkm||[])[i];
  return v===undefined||v===null||v===''?LEDGER_KKM_DEFAULT[i]:v;
 });
 delete base.ledger2Kkm;
 delete base.ledger2Rows;
 return base;
}
function updateSaveStatus(label){
 const el=document.getElementById("saveStatusText");
 if(el)el.textContent=label;
}
function saveRaporManually(){
 save();
 const now=new Date().toLocaleTimeString("id-ID",{hour12:false});
 updateSaveStatus("Tersimpan · "+now);
 showToast("Semua perubahan data rapor berhasil disimpan!");
}
function save(){
  try{
    if(!state.school.tahun || !String(state.school.tahun).trim()) state.school.tahun = getCalculatedTA();
    if(!state.school.semester || !String(state.school.semester).trim()) state.school.semester = getCalculatedSemester();
    const serialized = JSON.stringify(state);
    localStorage.setItem(getTaStorageKey(state.school.tahun), serialized);
    localStorage.setItem(STORAGE_KEY, serialized);
  }catch(e){console.warn(e)}
}
function showToast(msg){
 const t=document.getElementById('appToast'),m=document.getElementById('appToastMsg');
 if(!t||!m)return;
 m.textContent=msg; t.classList.add('show');
 clearTimeout(window._toastTimer);
 window._toastTimer=setTimeout(()=>t.classList.remove('show'),3200);
}
function closeConfirmModal(){
 const m=document.getElementById('confirmModal');
 if(m)m.classList.remove('show');
}
function toggleSidebar(){
 const app=document.getElementById('appLayout'),sb=document.getElementById('sidebar');
 if(window.innerWidth<=760){if(sb)sb.classList.toggle('open')}
 else{if(app)app.classList.toggle('sidebar-closed')}
}
function toggleMobileSidebar(){
 const sb=document.getElementById('sidebar');
 if(sb)sb.classList.toggle('open');
}

function startClock(){
 const hari=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
 const bulan=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
 function tick(){
  const d=new Date();
  const ct=document.getElementById('clockTime'),cd=document.getElementById('clockDate');
  if(ct)ct.textContent=d.toLocaleTimeString('id-ID',{hour12:false})+' WIB';
  if(cd)cd.innerHTML=`${icon('calendar')} ${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
 }
 tick(); setInterval(tick,1000);
}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function cellInput(scope,i,key,value,type='text',opts={}){const attrs=Object.entries(opts).map(([k,v])=>`${k}="${esc(v)}"`).join(' ');return `<input type="${type}" data-scope="${scope}" data-i="${i}" data-key="${key}" value="${esc(value)}" ${attrs}>`}
function cellArea(scope,i,key,value,placeholder=''){return `<textarea data-scope="${scope}" data-i="${i}" data-key="${key}" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`}
function selectField(scope,i,key,value,items){return `<select data-scope="${scope}" data-i="${i}" data-key="${key}"><option value=""></option>${items.map(t=>`<option value="${esc(t)}" ${value===t?'selected':''}>${esc(t)}</option>`).join('')}</select>`}

function syncAcademicPeriodUI(){
  const sem = (state.school.semester && String(state.school.semester).trim()) || getCalculatedSemester();
  const ta = (state.school.tahun && String(state.school.tahun).trim()) || getCalculatedTA();
  state.school.semester = sem;
  state.school.tahun = ta;
  document.querySelectorAll('.dynamic-ta').forEach(el=>el.textContent=ta);
  document.querySelectorAll('.dynamic-sem').forEach(el=>el.textContent=sem);
  const hs=document.getElementById('homeSemester'); if(hs)hs.textContent=sem;
  const hy=document.getElementById('homeYear'); if(hy)hy.textContent=ta;
  const hc=document.getElementById('homeClass'); if(hc)hc.textContent=state.school.kelas||'________';
  const hm=document.getElementById('homeSchool'); if(hm)hm.textContent=state.school.nama||'SDS ISLAM RAMAH ANAK';
  const fy=document.getElementById('footerYearText'); if(fy)fy.textContent=`TA. ${ta} · Semester ${sem}`;
}

function navInit(){
 hydrateStaticIcons();
 const logoImg=document.getElementById('sidebarLogoImg');
 if(logoImg)logoImg.src=LOGO;
 const activeSubs = getActiveSubjects();
 const sideSub=document.getElementById('sidebarSubjectNav');
 if(sideSub){
  sideSub.innerHTML=activeSubs.map(s=>`<button data-side-go="${s.sheet}" onclick="go('${s.sheet}')">${icon('book')} ${esc(s.tab)}</button>`).join('');
 }
 const sideMapelLabel = document.getElementById('sidebarMapelLabel');
 if(sideMapelLabel) sideMapelLabel.textContent = `Mata Pelajaran (${activeSubs.length} Mapel)`;
 const h=document.getElementById('homeSubjectButtons');
 if(h){
  h.innerHTML=activeSubs.map((s,idx)=>`<button class="subj-tile" onclick="go('${s.sheet}')"><div class="subj-num">${String(idx+1).padStart(2,'0')}</div><div><strong>${esc(s.tab)}</strong><span>${esc(s.name)}</span></div></button>`).join('');
 }
 const subCountLabel = document.getElementById('homeSubjectTitleText');
 if(subCountLabel) subCountLabel.textContent = `Muatan Mata Pelajaran (${activeSubs.length} Mapel${isTikEnabled() ? '' : ' · TIK Khusus Kelas 4–6'})`;
}

function go(id){
 activeSheet=id;
 document.querySelectorAll('.sheet').forEach(s=>s.classList.toggle('active',s.id==='sheet-'+id));
 document.querySelectorAll('[data-side-go]').forEach(b=>b.classList.toggle('active',b.dataset.sideGo===id));
 const titles={
  home:['Dashboard Rapor',`Tahun Ajaran ${state.school.tahun} · Semester ${state.school.semester} — SD Islam Ramah Anak`],
  DS:['Data Sekolah (DS)','Identitas sekolah, Kepala Sekolah + NIP, Wali Kelas + NIP, & Kelas (Manual)'],
  DPD:['Data Peserta Didik (DPD)','Daftar 30 baris peserta didik sesuai area input Excel'],
  rapor:['Cetak Rapor Peserta Didik','Laporan capaian hasil belajar siap cetak A4 lengkap dengan NIP Wali Kelas & Kepala Sekolah'],
  kOKURIKULER:['Kokurikuler (Dimensi Profil Lulusan)','Penilaian 8 Dimensi Profil Lulusan & deskripsi rapor'],
  ekskul:['Data Ekstrakurikuler','Penilaian dan deskripsi kegiatan ekstrakurikuler peserta didik'],
  Absen:['Absensi, Prestasi, Fisik & Kesehatan','Rekapitulasi ketidakhadiran, kondisi fisik, kesehatan, dan catatan wali kelas'],
  biodata:['Biodata Peserta Didik','Lembar sampul rapor, identitas sekolah, petunjuk, dan biodata siswa'],
  legger:['Leger Nilai Rapor','Daftar nilai lengkap seluruh mata pelajaran, peringkat kelas, & tanda tangan ber-NIP'],
  Sheet1:['Lembar Kerja Tambahan (Sheet1)','Area catatan tambahan']
 };
 const subj=SUBJECTS.find(s=>s.sheet===id);
 if(window.innerWidth<=760){const sb=document.getElementById('sidebar');if(sb)sb.classList.remove('open')}
 const tTitle=document.getElementById('topPageTitle'),tSub=document.getElementById('topPageSubtitle');
 if(tTitle&&tSub){
  const backBtn=id!=='home'?`<button class="btn-back-home" onclick="go('home')">${icon('arrowleft')} Kembali ke Dashboard / Home</button>`:'';
  if(subj){
   tTitle.innerHTML=backBtn+`<div>Mata Pelajaran: ${esc(subj.name)} (${esc(subj.tab)})</div>`;
   tSub.textContent=`Input Tujuan Pembelajaran (TP 1–6), Nilai Sumatif, dan Deskripsi Rapor`;
  }else if(titles[id]){
   tTitle.innerHTML=backBtn+`<div>${titles[id][0]}</div>`;
   tSub.textContent=titles[id][1];
  }
 }
 if(subj){
  activeSubject=subj.id;
  renderSubject(activeSubject);
 }
 if(id==='DS')renderSchool();
 if(id==='rapor'){updateStudentSelects();renderRapor()}
 if(id==='biodata'){updateStudentSelects();renderBiodata()}
 if(id==='legger')renderLedger();
 if(id==='Absen')renderAbsen();
 if(id==='ekskul')renderEkskul();
 if(id==='kOKURIKULER')renderKoku();
 window.scrollTo({top:0,behavior:'smooth'});
}
function printActive(){window.print()}
let raporPaperMode = 'A4';
function updateRaporPaperSize(mode){
  raporPaperMode = mode === 'F4' ? 'F4' : 'A4';
  const sec = document.getElementById('sheet-rapor');
  if(sec) sec.classList.toggle('paper-f4', raporPaperMode === 'F4');
  let dynStyle = document.getElementById('dynamicRaporPageStyle');
  if(!dynStyle){
    dynStyle = document.createElement('style');
    dynStyle.id = 'dynamicRaporPageStyle';
    document.head.appendChild(dynStyle);
  }
  dynStyle.textContent = raporPaperMode === 'F4'
    ? '@media print { @page { size: 215mm 330mm; margin: 11mm 13mm; } }'
    : '@media print { @page { size: A4 portrait; margin: 10mm 12mm; } }';
}
function printRaporOnePage(){
  updateRaporPaperSize(document.getElementById('raporPaperSize')?.value || raporPaperMode);
  window.print();
}
updateRaporPaperSize('A4');

// Toggle Semester atau Sinkron Kalender di DS
function toggleAutoSemester(){
 state.school.semester = state.school.semester === 'Ganjil' ? 'Genap' : 'Ganjil';
 save(); renderSchool(); syncAcademicPeriodUI(); updateStats();
 showToast(`Semester diatur ke ${state.school.semester}`);
}
function syncCalendarPeriodNow(){
 state.school.semester = getCalculatedSemester();
 state.school.tahun = getCalculatedTA();
 save(); renderSchool(); syncAcademicPeriodUI(); updateStats();
 showToast(`Disinkronkan ke Kalender: Semester ${state.school.semester} · TA ${state.school.tahun}`);
}

// Identitas sekolah sesuai susunan baris sheet DS (Semester & TA Otomatis, Kelas Manual, Kepsek & Walas wajib ada NIP)
function renderSchool(){
 const s=state.school;
 const identitasSekolah=[
  ['Nama Sekolah','nama'],['NPSN','npsn'],['Alamat Sekolah','alamat'],['Telepon','telepon'],
  ['Kode Pos','kodepos'],['Kelurahan','kelurahan'],['Kecamatan','kecamatan'],
  ['Kabupaten/ Kota','kota'],['Provinsi','provinsi'],['Website','website'],['E-mail','email']
 ];
 let rows=`<tr><td colspan="2" class="redtitle">DATA SEKOLAH</td></tr>`;
 rows+=`<tr><td colspan="2" class="orange">IDENTITAS SEKOLAH</td></tr>`;
 identitasSekolah.forEach(([label,key])=>{
  rows+=`<tr><td>${label}</td><td>${cellInput('school',0,key,s[key],'text')}</td></tr>`;
 });
 rows+=`<tr><td colspan="2" class="orange">IDENTITAS KEPALA SEKOLAH (NAMA &amp; NIP)</td></tr>`;
 rows+=`<tr><td>Nama Kepala Sekolah</td><td>${cellInput('school',0,'kepsekNama',s.kepsekNama,'text',{placeholder:'Contoh: Siti Komala Sari, S.Pd'})}</td></tr>`;
 rows+=`<tr><td>NIP Kepala Sekolah</td><td>${cellInput('school',0,'kepsekNip',s.kepsekNip,'text',{placeholder:'Isi NIP Kepala Sekolah atau - jika belum ada'})}</td></tr>`;

 rows+=`<tr><td colspan="2" class="orange">IDENTITAS WALI KELAS (NAMA, NIP, KELAS MANUAL &amp; PERIODE OTOMATIS)</td></tr>`;
 rows+=`<tr><td>Nama Wali Kelas</td><td>${cellInput('school',0,'walasNama',s.walasNama,'text',{placeholder:'Contoh: Erni Setiawaty Karim, S.Pd'})}</td></tr>`;
 rows+=`<tr><td>NIP Wali Kelas</td><td>${cellInput('school',0,'walasNip',s.walasNip,'text',{placeholder:'Isi NIP Wali Kelas atau - jika belum ada'})}</td></tr>`;
 rows+=`<tr><td>Kelas <b>(Diisi Manual)</b></td><td>${cellInput('school',0,'kelas',s.kelas,'text',{placeholder:'Isi Kelas secara manual (contoh: 1A, 2B, IV)...'})}</td></tr>`;
 const autoSem = getCalculatedSemester();
 const autoTa = getCalculatedTA();
 s.semester = autoSem;
 s.tahun = autoTa;
 rows+=`<tr><td>Semester</td><td><div class="ds-auto-wrap"><strong>${esc(autoSem)}</strong><span class="auto-badge">Otomatis dari Kalender</span></div></td></tr>`;
 rows+=`<tr><td>Tahun Pelajaran (T.A)</td><td><div class="ds-auto-wrap"><strong>${esc(autoTa)}</strong><span class="auto-badge">Otomatis dari Kalender</span></div></td></tr>`;
 rows+=`<tr><td>Tanggal Raport</td><td>${cellInput('school',0,'tglRapor',s.tglRapor,'text',{placeholder:'Contoh: 24 Juni 2026'})}</td></tr>`;
 rows+=`<tr><td>Tanggal Penyerahan Raport</td><td>${cellInput('school',0,'tglPenyerahan',s.tglPenyerahan,'text',{placeholder:'Contoh: 26 Juni 2026'})}</td></tr>`;

 document.getElementById('schoolForm').innerHTML=`<table class="sheet-grid ds-table"><tbody>${rows}</tbody></table>`;
}

// DPD 24 kolom persis header workbook
const DPD_FIELDS=[['nisn','NISN'],['nis','NIS'],['nama','NAMA LENGKAP SISWA'],['panggilan','NAMA PANGGILAN'],['jk','JENIS KELAMIN'],['agama','Agama'],['tempat','TEMPAT'],['tanggalLahir','TANGGAL LAHIR'],['jalan','JALAN'],['kelurahan','KELURAHAN'],['kecamatan','KECAMATAN'],['kota','KOTA'],['provinsi','PROVINSI'],['sebelumnya','PEND SEBELUMNYA'],['ayahNama','NAMA AYAH'],['ayahPend','PEND AYAH'],['ayahPekerjaan','PEKERJAAN AYAH'],['ibuNama','NAMA IBU'],['ibuPend','PEND IBU'],['ibuPekerjaan','PEKERJAAN IBU'],['waliNama','NAMA WALI'],['waliPekerjaan','PEKERJAAN WALI'],['waliAlamat','ALAMAT WALI']];
function renderDPD(){
 const headers=`<tr><th rowspan="2" class="dpd-head" style="width:38px">NO</th><th rowspan="2" class="dpd-head">NISN</th><th rowspan="2" class="dpd-head">NIS</th><th rowspan="2" class="dpd-head">NAMA LENGKAP SISWA</th><th rowspan="2" class="dpd-head">NAMA PANGGILAN</th><th rowspan="2" class="dpd-head">JENIS KELAMIN</th><th rowspan="2" class="dpd-head">Agama</th><th rowspan="2" class="dpd-head">TEMPAT</th><th rowspan="2" class="dpd-head">TANGGAL LAHIR</th><th colspan="5" class="dpd-head">ALAMAT</th><th rowspan="2" class="dpd-head">PEND SEBELUMNYA</th><th colspan="3" class="dpd-head">AYAH</th><th colspan="3" class="dpd-head">IBU</th><th colspan="3" class="dpd-head">WALI</th></tr><tr><th class="dpd-head">JALAN</th><th class="dpd-head">KELURAHAN</th><th class="dpd-head">KECAMATAN</th><th class="dpd-head">KOTA</th><th class="dpd-head">PROVINSI</th><th class="dpd-head">NAMA</th><th class="dpd-head">PEND</th><th class="dpd-head">PEKERJAAN</th><th class="dpd-head">NAMA</th><th class="dpd-head">PEND</th><th class="dpd-head">PEKERJAAN</th><th class="dpd-head">NAMA</th><th class="dpd-head">PEKERJAAN</th><th class="dpd-head">ALAMAT</th></tr>`;
 let h=`<tr><th colspan="5" class="dpd-band">DATA PESERTA DIDIK</th><th colspan="19" class="dpd-band">DATA IDENTITAS</th></tr>${headers}`;
 state.students.forEach((st,i)=>{h+=`<tr><td class="center">${i+1}</td>`;DPD_FIELDS.forEach(([key])=>{let value=st[key]||'';if(key==='jk')h+=`<td>${selectField('student',i,key,value,['Laki-laki','Perempuan'])}</td>`;else h+=`<td>${cellInput('student',i,key,value)}</td>`});h+=`</tr>`});document.getElementById('dpdTable').innerHTML=h
}
function score(v){if(v===''||v===null||v===undefined)return null;const n=Number(String(v).replace(',','.'));return Number.isFinite(n)?n:null}
function calcFinal(row){const a=row.lm.map(score).filter(v=>v!==null),b=row.sas.map(score).filter(v=>v!==null);if(!a.length&&!b.length)return '';const avg=x=>x.reduce((p,c)=>p+c,0)/x.length;if(a.length&&b.length)return Math.round(.6*avg(a)+.4*avg(b));return Math.round(avg(a.length?a:b))}
function subjectTitle(id){return SUBJECTS.find(s=>s.id===id)}

// Generator Deskripsi Otomatis sesuai Rumus Excel (MAX & MIN TP pada Sumatif Akhir Semester / Pembelajaran)
function predikatMapelExcel(val){
 if(val > 88) return 'sangat baik dalam';
 if(val > 76) return 'baik dalam';
 if(val >= 70) return 'cukup dalam';
 return 'dengan bimbingan yang lebih ananda akan mampu';
}
function generateSubjectAutoDescriptions(subjId){
 const data = state.subjects[subjId];
 if(!data) return;
 let count = 0;
 for(let i=0;i<24;i++){
  const st = state.students[i];
  if(!st || !st.nama.trim()) continue;
  const r = data.rows[i];
  const panggilan = st.panggilan.trim() || st.nama.trim().split(' ')[0];
  // Gunakan nilai SAS (J12:O12 di Excel) atau gabungan jika SAS kosong
  const pairs = [];
  for(let j=0;j<6;j++){
   const vSas = score(r.sas[j]);
   const vLm = score(r.lm[j]);
   const v = vSas !== null ? vSas : vLm;
   if(v !== null && data.tp[j] && data.tp[j].trim()){
    pairs.push({idx:j, val:v, tp:data.tp[j].trim()});
   }
  }
  if(pairs.length >= 1){
   let maxP = pairs[0], minP = pairs[0];
   pairs.forEach(p=>{
    if(p.val > maxP.val) maxP = p;
    if(p.val < minP.val) minP = p;
   });
   r.description = `Ananda ${panggilan} ${predikatMapelExcel(maxP.val)} ${maxP.tp} dan ${predikatMapelExcel(minP.val)} ${minP.tp}`;
   count++;
  }
 }
 save();
 renderSubject(subjId);
 showToast(count > 0 ? `Deskripsi otomatis berhasil dibuat untuk ${count} siswa.` : 'Isi minimal 1 Tujuan Pembelajaran (TP) dan nilai sumatif siswa terlebih dahulu.');
}

function renderSubject(id){
 const s=subjectTitle(id),data=state.subjects[id];
 if(!s||!data)return;
 const container=document.getElementById('subject-'+id)||document.getElementById('subject-'+s.sheet);
 if(!container)return;
 let tpRows='';
 for(let i=0;i<6;i++)tpRows+=`<div class="tp-row"><div class="num">${i+1}</div>${cellInput('tp',i,'',data.tp[i],'text',{placeholder:'Ketik Tujuan Pembelajaran (TP '+(i+1)+')...'})}</div>`;
 let html=`<div class="sheet-title-row"><div class="sheet-title">${esc(s.tab)} — ${esc(s.name)}</div><button type="button" class="btn" onclick="generateSubjectAutoDescriptions('${s.id}')">${icon('magic')} Buat Deskripsi Otomatis</button></div><div class="tp-box"><div class="tp-side"><b>Tujuan Pembelajaran (TP):</b><p class="hint">(Catatan: inilah yang akan muncul di rapor sebagai "Capaian Kompetensi." Minimal ada 2 TP dan pastikan setiap TP ada nilai sumatifnya)</p></div><div class="tp-rows">${tpRows}</div></div><div class="wide-scroll"><table class="sheet-grid grade-table"><thead><tr><th rowspan="2" style="width:40px" class="subject-head">No.</th><th rowspan="2" style="width:110px" class="subject-head">Panggilan Murid</th><th rowspan="2" style="width:175px" class="subject-head">Nama Murid</th><th colspan="6" class="subject-head">Sumatif akhir pembelajaran</th><th colspan="6" class="subject-head">Sumatif Akhir Semester</th><th rowspan="2" style="width:80px" class="subject-head">Nilai rapor</th><th rowspan="2" style="width:330px" class="subject-head">Deskripsi Rapor</th></tr><tr>${Array.from({length:12},(_,i)=>`<th class="subject-head" style="width:54px">TP${i%6+1}</th>`).join('')}</tr></thead><tbody>`;
 for(let i=0;i<24;i++){
  const st=state.students[i]||emptyStudent(),r=data.rows[i];
  html+=`<tr><td class="center">${i+1}</td><td>${esc(st.panggilan)}</td><td><b>${esc(st.nama)}</b></td>`;
  r.lm.forEach((v,j)=>html+=`<td>${cellInput('grade',i,'lm'+j,v,'number',{min:0,max:100,step:'any'})}</td>`);
  r.sas.forEach((v,j)=>html+=`<td>${cellInput('grade',i,'sas'+j,v,'number',{min:0,max:100,step:'any'})}</td>`);
  html+=`<td class="center" id="final_${s.id}_${i}" style="font-weight:800;color:var(--green)">${calcFinal(r)}</td><td>${cellArea('subjectDesc',i,'description',r.description,'Deskripsi capaian kompetensi diisi guru...')}</td></tr>`;
 }
 html+=`</tbody></table></div><div class="helper-note">Nilai rapor dihitung otomatis dari 60% rata-rata Sumatif Akhir Pembelajaran dan 40% rata-rata Sumatif Akhir Semester.</div>`;
 container.innerHTML=html;
}

function predikatKokuExcel(val){
 if(val > 4) return 'sangat baik dalam';
 if(val > 3) return 'baik dalam';
 if(val >= 2) return 'cukup dalam';
 return 'dengan bimbingan yang lebih ananda akan mampu';
}
function generateKokuAutoDescriptions(){
 let count = 0;
 for(let i=0;i<24;i++){
  const st = state.students[i];
  if(!st || !st.nama.trim()) continue;
  const r = state.kokuRows[i];
  const panggilan = st.panggilan.trim() || st.nama.trim().split(' ')[0];
  const pairs = [];
  for(let j=0;j<8;j++){
   const v = score(r.scores[j]);
   if(v !== null && state.dpl[j] && state.dpl[j].trim()){
    pairs.push({idx:j, val:v, dpl:state.dpl[j].trim()});
   }
  }
  if(pairs.length >= 1){
   let maxP = pairs[0], minP = pairs[0];
   pairs.forEach(p=>{
    if(p.val > maxP.val) maxP = p;
    if(p.val < minP.val) minP = p;
   });
   r.description = `Ananda ${panggilan} ${predikatKokuExcel(maxP.val)} ${maxP.dpl} dan ${predikatKokuExcel(minP.val)} ${minP.dpl}`;
   count++;
  }
 }
 save(); renderKoku();
 showToast(count > 0 ? `Deskripsi Kokurikuler otomatis dibuat untuk ${count} siswa.` : 'Isi Dimensi Profil Lulusan (DPL) dan skor (1-5) terlebih dahulu.');
}

function renderKoku(){let tp='';for(let i=0;i<8;i++)tp+=`<div class="tp-row"><div class="num">${i+1}</div>${cellInput('dpl',i,'',state.dpl[i],'text',{placeholder:'Ketik deskripsi Dimensi Profil Lulusan (DPL '+(i+1)+')...'})}</div>`;let h=`<div class="sheet-title-row"><div class="sheet-title">Ko Kurikuler (Dimensi Profil Lulusan)</div><button type="button" class="btn" onclick="generateKokuAutoDescriptions()">${icon('magic')} Buat Deskripsi Otomatis</button></div><div class="tp-box"><div class="tp-side"><img class="school-logo" src="${LOGO}" alt="Logo sekolah"><b>Dimensi Profil Lulusan</b><p class="hint">(Catatan: inilah yang akan muncul di rapor sebagai "Deskripsi". Minimal ada 2 DPL)</p></div><div class="tp-rows">${tp}</div></div><div class="wide-scroll"><table class="sheet-grid koku-table"><thead><tr><th rowspan="2" class="subject-head" style="width:42px">No.</th><th rowspan="2" class="subject-head" style="width:90px">Panggilan Murid</th><th rowspan="2" class="subject-head" style="width:180px">Nama Murid</th><th colspan="8" class="subject-head">Dimensi Profil Lulusan</th><th rowspan="2" class="subject-head" style="width:360px">Deskripsi Rapor</th></tr><tr>${Array.from({length:8},(_,i)=>`<th class="subject-head" style="width:50px">DPL ${i+1}</th>`).join('')}</tr></thead><tbody>`;for(let i=0;i<24;i++){const st=state.students[i],r=state.kokuRows[i];h+=`<tr><td class="center">${i+1}</td><td>${esc(st.panggilan)}</td><td><b>${esc(st.nama)}</b></td>`;r.scores.forEach((v,j)=>h+=`<td>${cellInput('kokuScore',i,''+j,v,'number',{min:1,max:5,step:'1'})}</td>`);h+=`<td>${cellArea('kokuDesc',i,'description',r.description,'Deskripsi kokurikuler diisi guru...')}</td></tr>`}h+=`</tbody></table></div>`;document.getElementById('kokuSheet').innerHTML=h}
function predikatEkskulExcel(nilai){
 const n = String(nilai||'').trim().toUpperCase();
 if(n==='A') return 'sangat baik dalam';
 if(n==='B') return 'baik dalam';
 return 'cukup dalam';
}
function generateEkskulAutoDescriptions(){
 let count = 0;
 for(let i=0;i<30;i++){
  const st = state.students[i];
  const r = state.ekskulRows[i];
  if(!st || !st.nama.trim() || !r) continue;
  if(r.nilai1 && r.materi1 && r.materi1.trim()){
   r.deskripsi1 = `${st.nama.trim()} ${predikatEkskulExcel(r.nilai1)} ${r.materi1.trim()}.`;
   count++;
  }
 }
 save(); renderEkskul();
 showToast(count > 0 ? `Deskripsi Ekskul 1 otomatis dibuat untuk ${count} siswa.` : 'Isi Nilai dan Materi Ekskul 1 terlebih dahulu.');
}
function renderEkskul(){let h=`<div class="sheet-title-row"><div class="sheet-title">Data Ekstrakurikuler</div><button type="button" class="btn" onclick="generateEkskulAutoDescriptions()">${icon('magic')} Buat Deskripsi Otomatis (Ekskul 1)</button></div><div class="wide-scroll"><table class="sheet-grid ekskul-table"><thead><tr><th colspan="11" class="group-red">DATA EKSTRAKURIKULER</th></tr><tr><th style="width:42px" class="head-green">NO</th><th style="width:180px" class="head-green">NAMA SISWA</th><th style="width:120px" class="head-orange">EKSKUL 1</th><th style="width:250px" class="head-orange">MATERI (SIAGA/PENGGALANG)</th><th style="width:70px" class="head-orange">NILAI</th><th colspan="2" style="width:300px" class="head-green2">DESKRIPSI</th><th style="width:140px" class="head-cyan">EKSKUL 2</th><th style="width:300px" class="head-cyan">DESKRIPSI</th><th style="width:140px" class="head-orange">EKSKUL 3</th><th style="width:300px" class="head-orange">DESKRIPSI</th></tr></thead><tbody>`;for(let i=0;i<30;i++){const r=state.ekskulRows[i],st=state.students[i];h+=`<tr><td class="center">${i+1}</td><td><b>${esc(st.nama)}</b></td><td>${cellInput('ekskul',i,'ekskul1',r.ekskul1)}</td><td>${cellArea('ekskul',i,'materi1',r.materi1)}</td><td>${selectField('ekskul',i,'nilai1',r.nilai1,['A','B','C'])}</td><td colspan="2">${cellArea('ekskul',i,'deskripsi1',r.deskripsi1,'Deskripsi diisi guru...')}</td><td>${cellInput('ekskul',i,'ekskul2',r.ekskul2)}</td><td>${cellArea('ekskul',i,'deskripsi2',r.deskripsi2,'Deskripsi diisi guru...')}</td><td>${cellInput('ekskul',i,'ekskul3',r.ekskul3)}</td><td>${cellArea('ekskul',i,'deskripsi3',r.deskripsi3,'Deskripsi diisi guru...')}</td></tr>`}h+=`</tbody></table></div>`;document.getElementById('ekskulSheet').innerHTML=h}
function renderAbsen(){let h=`<div class="wide-scroll"><table class="sheet-grid absen-table"><thead><tr><th colspan="9" class="group-red">ABSENSI</th><th colspan="6" class="group-red">DATA PRESTASI</th><th colspan="2" class="group-red">DATA KONDISI FISIK</th><th colspan="3" class="group-red">DATA KONDISI KESEHATAN</th><th class="group-red">CATATAN WALI KELAS</th></tr><tr><th rowspan="2" class="head-orange">NO</th><th rowspan="2" class="head-orange">NISN</th><th rowspan="2" class="head-orange">NIS</th><th rowspan="2" class="head-orange">NAMA SISWA</th><th colspan="2" class="head-orange">JENIS KELAMIN</th><th rowspan="2" class="head-orange">S</th><th rowspan="2" class="head-orange">I</th><th rowspan="2" class="head-orange">A</th><th colspan="6" class="head-green2">SEMESTER GANJIL</th><th colspan="2" class="head-pink">SEMESTER GENAP</th><th colspan="3" class="head-cyan">SEMESTER GENAP</th><th class="head-dark">SEMESTER GENAP</th></tr><tr><th class="head-orange">L</th><th class="head-orange">P</th><th class="head-green2">Jenis Prestasi 1</th><th class="head-green2">Prestasi</th><th class="head-green2">Jenis Prestasi 2</th><th class="head-green2">Prestasi</th><th class="head-green2">Jenis Prestasi 3</th><th class="head-green2">Prestasi</th><th class="head-pink">Berat Badan (kg)</th><th class="head-pink">Tinggi Badan (kg)</th><th class="head-cyan">Mata</th><th class="head-cyan">Telinga</th><th class="head-cyan">Gigi</th><th class="head-dark">Catatan</th></tr></thead><tbody>`;
for(let i=0;i<30;i++){const st=state.students[i],r=state.absenRows[i];h+=`<tr><td class="center">${i+1}</td><td>${esc(st.nisn)}</td><td>${esc(st.nis)}</td><td><b>${esc(st.nama)}</b></td><td class="center">${st.jk==='Laki-laki'?'1':''}</td><td class="center">${st.jk==='Perempuan'?'1':''}</td>`;['sakit','izin','alpa'].forEach(k=>h+=`<td>${cellInput('absen',i,k,r[k],'text')}</td>`);[['prestasi1Jenis',''],['prestasi1Nilai',''],['prestasi2Jenis',''],['prestasi2Nilai',''],['prestasi3Jenis',''],['prestasi3Nilai','']].forEach(([k])=>h+=`<td>${cellInput('absen',i,k,r[k])}</td>`);['berat','tinggi','mata','telinga','gigi'].forEach(k=>h+=`<td>${cellInput('absen',i,k,r[k])}</td>`);h+=`<td>${cellArea('absen',i,'catatan',r.catatan)}</td></tr>`}
h+=`</tbody></table></div><table class="stat-table"><tbody><tr><td>Siswa Laki-laki</td><td id="maleCount">0</td></tr><tr><td>Siswa Perempuan</td><td id="femaleCount">0</td></tr><tr><td>Jumlah Siswa</td><td id="totalCount">0</td></tr></tbody></table>`;document.getElementById('absenSheet').innerHTML=h;updateStats()}

function updateStats(){
 const m=state.students.filter(s=>s.nama.trim()&&s.jk==='Laki-laki').length,f=state.students.filter(s=>s.nama.trim()&&s.jk==='Perempuan').length,t=state.students.filter(s=>s.nama.trim()).length;
 ['maleCount','femaleCount','totalCount'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[m,f,t][i]});
 const stEl=document.getElementById('statStudentTotal');
 if(stEl)stEl.textContent=`${t} Siswa`;
 const clEl=document.getElementById('statClassInfo');
 if(clEl)clEl.textContent=state.school.kelas?`Kelas: ${state.school.kelas}`:'Kelas: Belum Diisi (Manual)';
 const ksEl=document.getElementById('statKepsekName');
 if(ksEl)ksEl.textContent=state.school.kepsekNama||'Belum Diisi';
 const ksNipEl=document.getElementById('statKepsekNip');
 if(ksNipEl)ksNipEl.textContent=`NIP. ${state.school.kepsekNip||'-'}`;
 const wlEl=document.getElementById('statWalasName');
 if(wlEl)wlEl.textContent=state.school.walasNama||'Belum Diisi';
 const wlNipEl=document.getElementById('statWalasNip');
 if(wlNipEl)wlNipEl.textContent=`NIP. ${state.school.walasNip||'-'}`;
 const taEl=document.getElementById('statTaValue');
 if(taEl)taEl.textContent=`TA ${state.school.tahun||getCalculatedTA()}`;
 const smEl=document.getElementById('statSemValue');
 if(smEl)smEl.textContent=`Semester ${state.school.semester||getCalculatedSemester()}`;
}

function updateStudentSelects(){const opts=state.students.map((s,i)=>s.nama.trim()?`<option value="${i}" ${selectedStudent===i?'selected':''}>${i+1}. ${esc(s.nama)}</option>`:'').filter(Boolean).join('');['raporStudent','bioStudent'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=`<option value="-1">Pilih peserta didik</option>${opts}`;if(el&&selectedStudent>=0&&state.students[selectedStudent]?.nama.trim())el.value=String(selectedStudent)})}
function getRow(i){return i>=0?state.students[i]:emptyStudent()}
function raporScore(i,id){return i<0?'':calcFinal(state.subjects[id].rows[i])}

// CETAK RAPOR (WALI KELAS & KEPALA SEKOLAH SAMA-SAMA MEMILIKI GARIS NAMA & NIP)
function renderRapor(){
 const host=document.getElementById('raporPrint');if(!host)return;
 const st=getRow(selectedStudent),school=state.school,ex=state.absenRows[selectedStudent]||emptyExtra(),exc=state.ekskulRows[selectedStudent]||{};
 const reportNos=[1,2,3,4,5,5,6,7,8,10,11];
 const tikActive = isTikEnabled();
 const names=SUBJECTS.map((s,i)=>({s,no:reportNos[i]})).filter(item=>tikActive || item.s.id!=='tik').map(({s,no})=>`<tr><td style="width:7%;text-align:center">${no}</td><td style="width:28%">${esc(s.name)}</td><td style="width:13%;text-align:center">${raporScore(selectedStudent,s.id)}</td><td>${esc(state.subjects[s.id].rows[selectedStudent]?.description||'')}</td></tr>`).join('');
 const decision=state.decisionVisible?`<div class="decision-wrap"><div class="decision-box"><div>Keputusan : Berdasarkan pencapaian seluruh kompetensi, peserta didik dinyatakan :</div>${cellDecision()}<div>*) Coret yang tidak perlu</div></div></div>`:'';
 let prest='';for(let j=1;j<=3;j++)prest+=`<tr><td>${esc(ex['prestasi'+j+'Jenis'])}</td><td>${esc(ex['prestasi'+j+'Nilai'])}</td></tr>`;
 let eks='';for(let j=1;j<=3;j++){const nm=exc['ekskul'+j]||'',desc=exc['deskripsi'+j]||'';eks+=`<tr><td>${esc(nm)}</td><td>${esc(desc)}</td></tr>`}
 const parentVal = (selectedStudent >= 0 && state.students[selectedStudent]?.parentSign !== undefined && state.students[selectedStudent]?.parentSign !== "") ? state.students[selectedStudent].parentSign : (state.parentSign || (selectedStudent >= 0 ? (st.ayahNama?.trim() || st.waliNama?.trim() || "") : ""));
 const page=`<div class="print-paper"><div class="rapor-top"><img class="rapor-logo" src="${LOGO}" alt="Logo sekolah"><h1>LAPORAN HASIL BELAJAR</h1></div><div class="rapor-meta"><div class="meta-lines"><span>Nama Peserta Didik</span><span>:</span><strong>${esc(st.nama)}</strong><span>NISN</span><span>:</span><strong>${esc(st.nisn)}</strong><span>Nama Sekolah</span><span>:</span><span>${esc(school.nama)}</span><span>Alamat Sekolah</span><span>:</span><span>${esc(school.alamat)}</span></div><div class="meta-lines"><span>Kelas</span><span>:</span><strong>${esc(school.kelas)}</strong><span>Semester</span><span>:</span><span>${esc(school.semester)}</span><span>Tahun Ajaran</span><span>:</span><span>${esc(school.tahun)}</span></div></div><div class="rapor-section">A. PENGETAHUAN DAN KETERAMPILAN</div><table class="rapor-table"><thead><tr><th style="width:7%">No</th><th style="width:28%">Muatan Pelajaran</th><th style="width:13%">Nilai Akhir</th><th>Capaian Kompetensi</th></tr></thead><tbody>${names}</tbody></table><div class="rapor-section">B. Kokurikuler</div><div class="rapor-text-box">${esc(state.kokuRows[selectedStudent]?.description||'')}</div><div class="rapor-section">C. Ekstrakurikuler</div><table class="rapor-table"><thead><tr><th style="width:40%">Kegiatan Ekstrakurikuler</th><th>Keterangan</th></tr></thead><tbody>${eks}</tbody></table><div class="rapor-section">C. Prestasi</div><table class="rapor-table"><thead><tr><th style="width:50%">Jenis Prestasi</th><th>Keterangan</th></tr></thead><tbody>${prest}</tbody></table><div class="rapor-section">D. Perkembangan Fisik</div><table class="rapor-table"><thead><tr><th style="width:10%">No</th><th>Aspek Yang Dinilai</th><th>Keterangan</th></tr></thead><tbody><tr><td class="center">1</td><td>Tinggi Badan</td><td>${esc(ex.tinggi)}</td></tr><tr><td class="center">2</td><td>Berat Badan</td><td>${esc(ex.berat)}</td></tr></tbody></table><div class="rapor-section">E. Kondisi Kesehatan</div><table class="rapor-table"><thead><tr><th style="width:10%">No</th><th>Aspek Fisik</th><th>Keterangan</th></tr></thead><tbody><tr><td class="center">1</td><td>Mata</td><td>${esc(ex.mata)}</td></tr><tr><td class="center">2</td><td>Telinga</td><td>${esc(ex.telinga)}</td></tr><tr><td class="center">3</td><td>Gigi</td><td>${esc(ex.gigi)}</td></tr></tbody></table><div class="rapor-section">F. Ketidakhadiran</div><table class="rapor-table"><thead><tr><th style="width:30%">Ketidakhadiran</th><th style="width:18%">Jumlah</th><th>Catatan Wali Kelas</th></tr></thead><tbody><tr><td>Sakit</td><td>${esc(ex.sakit)}</td><td rowspan="3">${esc(ex.catatan)}</td></tr><tr><td>Izin</td><td>${esc(ex.izin)}</td></tr><tr><td>Tanpa Keterangan</td><td>${esc(ex.alpa)}</td></tr></tbody></table>${decision}<div class="rapor-signatures"><div class="sig-grid"><div class="sig-parent"><div>Mengetahui :</div><div>Orang Tua / Wali,</div><div class="sig-space"></div><div class="sig-name-line"><input data-scope="parentSign" data-key="parentSign" class="sig-parent-input" value="${esc(parentVal)}" placeholder=""></div></div><div class="sig-homeroom"><div>${esc(school.kota||'Depok')}, ${esc(school.tglRapor)}</div><div>Wali Kelas</div><div class="sig-space"></div><div class="sig-name-line"><span class="sig-name-text">${esc(school.walasNama)}</span></div><div class="sig-nip">NIP. ${esc(school.walasNip || '-')}</div></div></div><div class="sig-principal"><div>Kepala Sekolah,</div><div class="sig-space"></div><div class="sig-name-line"><span class="sig-name-text">${esc(school.kepsekNama)}</span></div><div class="sig-nip">NIP. ${esc(school.kepsekNip || '-')}</div></div></div></div>`;
 host.innerHTML=page;

}

function cellDecision(){return `<div class="decision-line"><span>Naik/Tinggal*)</span><select class="decision-select no-print" data-scope="root" data-key="decision"><option value=""></option><option ${state.decision==='Naik'?'selected':''}>Naik</option><option ${state.decision==='Tinggal'?'selected':''}>Tinggal</option></select><span class="decision-print-val decision-print-only">${esc(state.decision||'')}</span><span>Kelas :</span><input class="decision-input no-print" value="${esc(state.decisionClass)}" data-scope="root" data-key="decisionClass"><span class="decision-print-val decision-print-only">${esc(state.decisionClass||'')}</span></div>` }

function renderBiodata(){const st=getRow(selectedStudent),s=state.school;const ttl=[st.tempat,st.tanggalLahir].filter(Boolean).join(', ');const f=(label,key)=>`<tr><td style="width:36%">${label}</td><td style="width:3%">:</td><td class="val">${esc(st[key]||'')}</td></tr>`;const pages=`<div class="bio-page"><div class="bio-number"><strong>NO. URUT</strong><span>${selectedStudent>=0?selectedStudent+1:''}</span></div><img class="bio-logo" src="${LOGO}" alt="Logo sekolah"><div class="bio-cover-title">RAPOR PESERTA DIDIK<br>SEKOLAH DASAR<br>( S D )</div><div class="bio-namebox">Nama Peserta Didik :<div class="box">${esc(st.nama)}</div>Nomor Induk Siswa Nasional<div class="box">${esc(st.nisn)}</div></div><div class="bio-ministry">KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN<br>REPUBLIK INDONESIA</div></div>
<div class="bio-page"><div class="bio-school-head">RAPOR PESERTA DIDIK<br>SEKOLAH DASAR<br>( S D )</div><table class="bio-data"><tbody>${[['Nama Sekolah','nama'],['NPSN','npsn'],['Alamat Sekolah','alamat'],['No Telpon','telepon'],['Kode Pos','kodepos'],['Kelurahan/Desa','kelurahan'],['Kecamatan','kecamatan'],['Kota / Kabupaten','kota'],['Provinsi','provinsi'],['Website','website'],['E-mail','email']].map(([l,k])=>`<tr><td style="width:28%">${l}</td><td style="width:3%">:</td><td class="val">${esc(s[k])}</td></tr>`).join('')}</tbody></table></div>
<div class="bio-page"><div class="bio-instructions"><h3 style="text-align:center;margin:0 0 12px">PETUNJUK PENGGUNAAN</h3><table style="width:100%;border-collapse:collapse"><tbody>${INSTRUCTIONS.map(([n,t])=>`<tr><td style="width:28px">${n}</td><td>${esc(t)}</td></tr>`).join('')}</tbody></table></div></div>
<div class="bio-page"><div class="bio-student-title">IDENTITAS PESERTA DIDIK</div><table class="bio-data"><tbody>${f('1. &nbsp; Nama Peserta Didik','nama')}${f('2. &nbsp; Nomor Induk Siswa','nis')}${f('3. &nbsp; N I S N','nisn')}<tr><td style="width:36%">4. &nbsp; Tempat, Tanggal Lahir</td><td style="width:3%">:</td><td class="val">${esc(ttl)}</td></tr>${f('5. &nbsp; Jenis Kelamin','jk')}${f('6. &nbsp; Agama','agama')}${f('7. &nbsp; Pendidikan Sebelumnya','sebelumnya')}${f('8. &nbsp; Alamat Peserta Didik','jalan')}<tr><td>9. &nbsp; Nama Orang Tua</td><td></td><td></td></tr>${f('1) Ayah','ayahNama')}${f('2) Ibu','ibuNama')}<tr><td>11. &nbsp; Pendidikan Orang Tua</td><td></td><td></td></tr>${f('1) Ayah','ayahPend')}${f('2) Ibu','ibuPend')}<tr><td>12. &nbsp; Pekerjaan Orang Tua</td><td></td><td></td></tr>${f('1) Ayah','ayahPekerjaan')}${f('2) Ibu','ibuPekerjaan')}<tr><td>13. &nbsp; Alamat Orang Tua</td><td></td><td></td></tr>${f('1) Jalan','jalan')}${f('2) Kelurahan / Desa','kelurahan')}${f('3) Kecamatan','kecamatan')}${f('4) Kabupaten/Kota','kota')}${f('5) Provinsi','provinsi')}<tr><td>14. &nbsp; Wali Peserta Didik</td><td></td><td></td></tr>${f('1) Nama','waliNama')}${f('2) Pekerjaan','waliPekerjaan')}${f('3) Alamat','waliAlamat')}</tbody></table><div class="bio-sign">${esc(s.kota||'Depok')}, ${esc(s.tglPenyerahan)}<br>Kepala SDS Islam Ramah Anak<div class="space"></div><b><u>${esc(s.kepsekNama)}</u></b><br>NIP. ${esc(s.kepsekNip||'-')}</div></div>`;document.getElementById('biodataPrint').innerHTML=pages;}

const INSTRUCTIONS=[['1.','Rapor Peserta Didik dipergunakan selama peserta didik yang bersangkutan mengikuti seluruh program pembelajaran di Sekolah Dasar tersebut;'],['2.','Identitas Sekolah diisi dengan data yang sesuai dengan keberadaan Sekolah Dasar;'],['3.','Daftar Peserta didik diisi oleh data peserta didik yang ada dalam Rapor Peserta Didik ini;'],['4.','Identitas Peserta didik diisi oleh data yang sesuai dengan keberadaan peserta didik;'],['5.','Rapor Peserta Didik harus dilengkapi dengan pas foto berwarna (3 x 4) dan pengisiannya dilakukan oleh Guru Kelas;'],['6.','Mata Pelajaran sesuai dengan ketentuan pada Kurikulum Merdeka;'],['7.','Nilai pada mata pelajaran merupakan nilai formatif, sumatif dan project basid learning yang telah dianalisis oleh guru;'],['8.','Hasil penilaian pengetahuan dan keterampilan dilaporkan dalam bentuk nilai dan deskripsi Tujuan Pembelajaran (TP)/ Alur Tujuan Pembelajaran (ATP) yang disusun dari Capaian Pembelajaran pada Kurikulum Merdeka;'],['9.','Hasil penilaian ekstrakurikuler dilaporkan dalam bentuk deskripsi materi yang diberikan dan menjelaskan capaian peserta didik;'],['10.','Hasil penilaian sikap Profil Pelajar Pancasila dilaporkan dalam bentuk predikat;'],['11.','Keterangan predikat sikap Profil Pelajar Pancasila yang ditulis dalam Rapor Peserta Didik:'],['','BB : Belum Berkembang'],['','MB : Mulai Berkembang'],['','BSH : Berkembang Sesuai Harapan'],['','BSB : Berkembang Sangat Baik'],['12.','Deskripsi pengetahuan dan keterampilan ditulis dengan kalimat positif sesuai dengan capaian TP/ATP tertinggi atau terendah dari masing-masing muatan pelajaran yang diperoleh peserta didik. Deskripsi berisi pengetahuan dan keterampilan yang sangat baik/dan atau baik yang dikuasai dan penguasaannya belum optimal. Apabila nilai capaian TP/ATP muatan pelajaran yang diperoleh dari suatu muatan pelajaran sama, kolom deskripsi ditulis sesuai dengan capaian untuk semua TP/ATP;'],['13.','Catatan diisi tentang hal-hal yang perlu mendapatkan perhatian peserta didik, pendidik, dan orangtua/wali terutama untuk hal-hal yang tidak didapatkan dari sekolah;'],['14.','Laporan tinggi dan berat badan peserta didik ditulis berdasarkan hasil pengukuran yang dilakukan pendidik;'],['15.','Laporan kondisi kesehatan fisik diisi dengan deskripsi hasil pemeriksaan yang dilakukan pendidik, bekerjasama dengan tenaga kesehatan atau puskesmas terdekat;'],['16.','Prestasi diisi dengan prestasi peserta didik yang menonjol;'],['17.','Kolom ketidakhadiran ditulis dengan data akumulasi ketidakhadiran peserta didik karena sakit, izin, atau tanpa keterangan selama satu semester;'],['18.','Apabila peserta didik pindah, maka dicatat di dalam kolom keterangan pindah;'],['19.','Kolom pernyataan kenaikan kelas diisi keterangan naik atau tinggal kelas;'],['20.','Laporan Peserta Didik ditandatangani oleh Kepala Sekolah dan Wali Kelas beserta cap basah yang menyatakan keaslian berkas, saat Raport akan dikembalikan maka Orang Tua Peserta Didik harus menandatangani terlebih dahulu pada tempat yang tersedia.']];

function renderLedger(){
 const host=document.getElementById('ledgerSheet');
 const tikActive=isTikEnabled();
 const visible=tikActive?LEDGER_VISIBLE_SUBJECTS:LEDGER_VISIBLE_SUBJECTS.filter(x=>x.index!==10);
 let h=`<div class="ledger-title">DAFTAR LEGER NILAI RAPOR<br>${esc(state.school.nama)}<br>KELAS ${esc(state.school.kelas)} SEMESTER ${esc(state.school.semester).toUpperCase()}<br>TAHUN PELAJARAN ${esc(state.school.tahun)}</div>`;
 h+=`<div class="wide-scroll"><table class="ledger-table"><thead><tr>`;
 h+=`<th rowspan="2" style="width:42px">NO</th><th rowspan="2" style="width:220px">NAMA SISWA</th>`;
 const colWidths = {0:'52px',1:'52px',2:'54px',3:'52px',4:'52px',5:'54px',6:'54px',7:'72px',8:'72px',9:'72px',10:'108px'};
 h+=visible.map(x=>`<th style="width:${colWidths[x.index]||'60px'}">${x.label}</th>`).join('');
 h+=`<th rowspan="2" style="width:62px">Jml</th><th rowspan="2" style="width:76px">rata-rata NR</th><th colspan="3">ABSENSI</th><th rowspan="2" style="width:58px">Rank</th></tr><tr>`;
 h+=visible.map(x=>`<th>${cellInput('ledgerKkm',x.index,'',state.ledgerKkm[x.index],'number',{min:0,max:100})}</th>`).join('');
 h+=`<th style="width:38px">S</th><th style="width:38px">I</th><th style="width:38px">A</th></tr></thead><tbody>`;

 const totals=Array.from({length:24},(_,i)=>{
  const vals=LEDGER_SUBJECT_ORDER.map(id=>score(calcFinal(state.subjects[id].rows[i])));
  const activeVals=visible.map(x=>vals[x.index]);
  const present=activeVals.filter(v=>v!==null);
  const total=present.length?present.reduce((a,b)=>a+b,0):null;
  const average=present.length?Math.round(total/present.length):null;
  return {vals,total,average};
 });
 for(let i=0;i<24;i++){
  const st=state.students[i]||emptyStudent();
  const r=totals[i];
  const rankPool=i===23?totals:totals.slice(0,23);
  const rank=r.total===null?'':1+rankPool.filter(x=>x.total!==null&&x.total>r.total).length;
  const abs=state.absenRows[i]||emptyExtra();
  h+=`<tr><td>${i+1}</td><td class="left"><b>${esc(st.nama)}</b></td>`;
  h+=visible.map(x=>{const v=r.vals[x.index];return `<td>${v===null?'':v}</td>`}).join('');
  h+=`<td style="font-weight:700">${r.total===null?'':r.total}</td><td style="font-weight:700;color:var(--green)">${r.average===null?'':r.average}</td><td>${esc(abs.sakit)}</td><td>${esc(abs.izin)}</td><td>${esc(abs.alpa)}</td><td style="font-weight:800">${rank}</td></tr>`;
 }

 const statLabels=['Jumlah Nilai','Nilai Rata-rata','Nilai Terendah','Nilai Tertinggi'];
 statLabels.forEach((label,ix)=>{
  h+=`<tr><td colspan="2" class="left"><b>${label}</b></td>`;
  visible.forEach(x=>{
   const values=totals.map(t=>t.vals[x.index]).filter(v=>v!==null);
   let out='';
   if(values.length){
    if(ix===0)out=values.reduce((a,b)=>a+b,0);
    if(ix===1)out=Number((values.reduce((a,b)=>a+b,0)/values.length).toFixed(2));
    if(ix===2)out=Math.min(...values);
    if(ix===3)out=Math.max(...values);
   }
   h+=`<td>${out}</td>`;
  });
  const jmlVals=totals.map(t=>t.total).filter(v=>v!==null);
  const avgVals=totals.map(t=>t.average).filter(v=>v!==null);
  let outJml='', outAvg='';
  if(jmlVals.length){
   if(ix===0)outJml=jmlVals.reduce((a,b)=>a+b,0);
   if(ix===1)outJml=Number((jmlVals.reduce((a,b)=>a+b,0)/jmlVals.length).toFixed(2));
   if(ix===2)outJml=Math.min(...jmlVals);
   if(ix===3)outJml=Math.max(...jmlVals);
  }
  if(avgVals.length){
   if(ix===0)outAvg=avgVals.reduce((a,b)=>a+b,0);
   if(ix===1)outAvg=Number((avgVals.reduce((a,b)=>a+b,0)/avgVals.length).toFixed(2));
   if(ix===2)outAvg=Math.min(...avgVals);
   if(ix===3)outAvg=Math.max(...avgVals);
  }
  h+=`<td><b>${outJml}</b></td><td><b>${outAvg}</b></td>`;
  if(ix===0){
   const absKeys=['sakit','izin','alpa'];
   absKeys.forEach(k=>{
    const values=state.absenRows.slice(0,24).map(r=>score((r||emptyExtra())[k])).filter(v=>v!==null);
    h+=`<td rowspan="4">${values.length?values.reduce((a,b)=>a+b,0):''}</td>`;
   });
   h+=`<td rowspan="4"></td>`;
  }
  h+=`</tr>`;
 });
 h+=`</tbody></table><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-top:18px;padding:0 24px;min-width:1280px;font-size:11px;line-height:1.45;text-align:center">
  <div style="min-width:220px">
    <div>Mengetahui,</div>
    <div>Kepala Sekolah,</div>
    <div style="height:52px"></div>
    <div><b><u>${esc(state.school.kepsekNama)}</u></b></div>
    <div>NIP. ${esc(state.school.kepsekNip||'-')}</div>
  </div>
  <div style="min-width:220px">
    <div>${esc(state.school.kota||'Depok')}, ${esc(state.school.tglRapor)}</div>
    <div>Guru Kelas ${esc(state.school.kelas)}</div>
    <div style="height:52px"></div>
    <div><b><u>${esc(state.school.walasNama)}</u></b></div>
    <div>NIP. ${esc(state.school.walasNip||'-')}</div>
  </div>
 </div></div>`;
 host.innerHTML=h;
}

function handleChange(e){
 const el=e.target.closest('[data-scope]');if(!el)return;
 const scope=el.dataset.scope,i=Number(el.dataset.i),key=el.dataset.key,val=el.value;
 switch(scope){
  case'school':state.school[key]=val;break;
  case'student':state.students[i][key]=val;break;
  case'tp':state.subjects[activeSubject].tp[i]=val;break;
  case'grade':{
   const r=state.subjects[activeSubject].rows[i];
   if(key.startsWith('lm'))r.lm[Number(key.slice(2))]=val;
   else r.sas[Number(key.slice(3))]=val;
   const fc=document.getElementById(`final_${activeSubject}_${i}`);
   if(fc)fc.textContent=calcFinal(r);
   break;
  }
  case'subjectDesc':state.subjects[activeSubject].rows[i].description=val;break;
  case'dpl':state.dpl[i]=val;break;
  case'kokuScore':state.kokuRows[i].scores[Number(key)]=val;break;
  case'kokuDesc':state.kokuRows[i].description=val;break;
  case'ekskul':state.ekskulRows[i][key]=val;break;
  case'absen':state.absenRows[i][key]=val;break;
  case'ledgerKkm':state.ledgerKkm[i]=val;break;
  case'parentSign':state.parentSign=val;if(selectedStudent>=0&&state.students[selectedStudent]){state.students[selectedStudent].parentSign=val}break;
  case'root':state[key]=val;if(key==='parentSign'&&selectedStudent>=0&&state.students[selectedStudent]){state.students[selectedStudent].parentSign=val}break;
 }
 save();
 if(scope==='school'){
  syncAcademicPeriodUI();
  updateStats();
  if(key==='kelas'){
   navInit();
   if(!isTikEnabled() && activeSheet==='tik') go('home');
   renderRapor();
   renderLedger();
  }
 }
 if(scope==='student'&&(key==='nama'||key==='jk'||key==='panggilan')){
  updateStats();
  if(key==='nama')updateStudentSelects();
 }
}
document.addEventListener('change',handleChange);
document.addEventListener('input',e=>{if(e.target.matches('[data-scope]'))handleChange(e)});

function exportBackup(){
 const a=document.createElement('a'),blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
 a.href=URL.createObjectURL(blob);
 a.download=`backup_rapor_${String(state.school.tahun||'').replace('/','-')}.json`;
 a.click();URL.revokeObjectURL(a.href);
 showToast('Backup JSON berhasil diekspor.');
}

// UNDUH FILE HTML MANDIRI TANPA FILE CSS TAMBAHAN
function downloadStandaloneHtml(){
 let docHtml = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
 const stateScript = `<script>window.__INITIAL_RAPOR_STATE__ = ${JSON.stringify(state)};<\/script>`;
 docHtml = docHtml.replace('<script>\nconst LOGO =', stateScript + '\n<script>\nconst LOGO =');
 const a = document.createElement('a');
 const blob = new Blob([docHtml], {type:'text/html;charset=utf-8'});
 a.href = URL.createObjectURL(blob);
 const kls = state.school.kelas ? `_${state.school.kelas}` : '';
 a.download = `Rapor_Kurikulum_Merdeka${kls}_Mandiri.html`;
 a.click();
 URL.revokeObjectURL(a.href);
 showToast('File HTML mandiri berhasil diunduh (tanpa file CSS terpisah).');
}

function importBackup(e){
 const file=e.target.files?.[0];if(!file)return;
 const reader=new FileReader();
 reader.onload=()=>{
  try{
   state=merge(createState(),JSON.parse(reader.result));
   save();renderAll();
   showToast('Backup berhasil diimpor.');
  }catch(err){
   showToast('File backup tidak valid.');
  }
 };
 reader.readAsText(file);e.target.value='';
}

// FITUR KOSONGKAN DATA PADA T.A AKTIF
function clearAll(){
 const modal=document.getElementById('confirmModal');
 const nextTaLbl=document.getElementById('nextTaPreviewLabel');
 if(nextTaLbl) nextTaLbl.textContent = getCalculatedTA();
 if(modal) modal.classList.add('show');
}

function executeFullReset(){
 state = createState();
 selectedStudent = 0;
 save();
 closeConfirmModal();
 renderAll();
 showToast('Seluruh data berhasil dikosongkan dan dikembalikan ke T.A otomatis.');
}

function renderAll(){
 syncAcademicPeriodUI();
 renderSchool();
 renderDPD();
 SUBJECTS.forEach(s=>renderSubject(s.id));
 renderKoku();
 renderEkskul();
 renderAbsen();
 updateStudentSelects();
 renderRapor();
 renderBiodata();
 renderLedger();
 const sd=document.getElementById('showDecision');
 if(sd)sd.checked=state.decisionVisible;
 updateStats();
}
navInit();startClock();renderAll();