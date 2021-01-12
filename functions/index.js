const functions = require('firebase-functions');
const express = require("express");
const cors =require("cors");
const app = express();
app.use(cors({origin:true}));

laptops=[{"id":"L1",
"category":"Laptops","brand":"HP","name":"HP 14s Core i3 10th Gen - (8 GB/256 GB SSD/Windows 10 Home)",
"img":"https://i.ibb.co/nDtjgmd/hp-na-thin-and-light-laptop-original-imaftv7fhbftxnmq.jpg",
"rating":4.2,"ratingDesc":"1,061 Ratings & 128 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","256 GB SSD","35.56 cm (14 inch) Display","HP Documentation, HP CoolSense, HP SSRM, HP Smart, HP Support Assistant, Microsoft Office Home and Student 2019","1 Year Onsite Warranty"],
"price":359990,"assured":true,"prevPrice":39039,"discount":7,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":80670},
{"id":"L2",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Pro Core i9 9th Gen - (16 GB/1 TB SSD/Mac OS Catalina/4 GB Graphics)",
"img":"https://i.ibb.co/D41Bwvd/apple-na-laptop-original-imafq2efkbb4bwc8.jpg",
"rating":4.8,"ratingDesc":"85 Ratings & 11 Reviews",
"details":["Intel Core i9 Processor (9th Gen)","16 GB DDR4 processor","Mac OS Operating System","1 TB SSD","40.64 cm (16 inch) Display","Built-in Apps: iMovie, Photos, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Music, Podcasts, TV, Books, App Store, Time Machine, Find My, QuickTime Player","1 Year Onsite Warranty"],
"price":224900,"assured":true,"prevPrice":239900,"discount":6,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i9","popularity":870},
{"id":"L3",
"category":"Laptops","brand":"Acer","name":"Acer Aspire 7 Core i5 9th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650/60 Hz)",
"img":"https://i.ibb.co/w4NHq58/acer-na-gaming-laptop-original-imafs5prytwgrcyf.jpg",
"rating":4.4,"ratingDesc":"11,240 Ratings & 1,818 Reviews",
"details":["Intel Core i5 Processor (9th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","Acer Collection, Acer Product Registration , Quick Access, Acer Care Center","1 Year International Travelers Warranty (ITW)"],
"price":59490,"assured":true,"prevPrice":79999,"discount":25,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":767789},
{"id":"L4",
"category":"Laptops","brand":"Dell","name":"Dell G3 Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650/120 Hz)",
"img":"https://i.ibb.co/3MJNwb7/dell-original-imafvngm7px5m3zh.jpg",
"rating":4.3,"ratingDesc":"252 Ratings & 40 Reviews",
"details":["Intel Core i7 Processor (10th Gen)","16 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD|256 GB SSD","39.62 cm (15.6 inch) Display","Microsoft Office Home and Student 2019","1 Year Complete Cover Warranty"],
"price":86990,"assured":true,"prevPrice":98501,"discount":11,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i7","popularity":7789},
{"id":"L5",
"category":"Laptops","brand":"HP","name":"HP 15s Core i3 10th Gen - (4 GB/512 GB SSD/Windows 10 Home)",
"img":"https://i.ibb.co/nMvTrtc/hp-original-imafrzbfruxgg23e.jpg",
"rating":4.4,"ratingDesc":"1,200 Ratings & 170 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","4 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","Microsoft Office Home and Student 2019, HP Support Assistant, HP Recovery Manager, HP Documentation, HP Sure Connect, HP JumpStart, HP Audio Switch, HP ePrint, Dropbox","1 Year Onsite Warranty"],
"price":44990,"assured":true,"prevPrice":46220,"discount":13,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":8789},

{"id":"L6",
"category":"Laptops","brand":"HP","name":"HP 14s Core i3 10th Gen - (8 GB/1 TB HDD/Windows 10 Home)",
"img":"https://i.ibb.co/3CckwYB/hp-na-thin-and-light-laptop-original-imafx664watubynz.jpg",
"rating":4.1,"ratingDesc":"9 Ratings & 0 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD","35.56 cm (14 inch) Display","Microsoft Office 2019 Home and Student, HP Documentation, HP BIOS Recovery, HP Smart","1 Year Onsite Warranty"],
"price":43990,"assured":true,"prevPrice":53823,"discount":18 ,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":8989},
{"id":"L7",
"category":"Laptops","brand":"HP","name":"HP Pavilion x360 Core i7 8th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/2 GB Graphics) ",
"img":"https://i.ibb.co/dWLRB6C/hp-na-gaming-laptop-original-imafmcwzbga7kqaj.jpg",
"rating":4.7,"ratingDesc":"298 Ratings & 37 Reviews",
"details":["Intel Core i7 Processor (8th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD|256 GB SSD","35.56 cm (14 inch) Touchscreen Display","Microsoft Office Home and Student 2019","1 Year Onsite Warranty"],
"price":76990,"assured":true,"prevPrice":46220,"discount":18,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i7","popularity":8789},
{"id":"L8",
"category":"Laptops","brand":"HP","name":"HP Omen Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650)",
"img":"https://i.ibb.co/DgwwFbw/hp-original-imafu7eydcyj97ta.jpg",
"rating":4.4,"ratingDesc":"31 Ratings & 1 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","HP Support Assistant, HP Audio Switch, HP Audio Boost , HP Documentation, HP e-service, HP BIOS Recovery, HP SSRM, HP Smart, HP Jumpstarts","1 Year Onsite Warranty"],
"price":77990,"assured":true,"prevPrice":91225,"discount":14,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":789},
{"id":"L9",
"category":"Laptops","brand":"HP","name":"HP Ryzen 3 Quad Core 3300U - (4 GB/1 TB HDD/Windows 10 Home)",
"img":"https://i.ibb.co/ZJC2z8p/hp-na-thin-and-light-laptop-original-imafxqscnwzanqgh.jpg",
"rating":3.9,"ratingDesc":"161 Ratings & 16 Reviews",
"details":["AMD Ryzen 3 Quad Core Processor","4 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD","35.56 cm (14 inch) Display","HP JumpStart, HP Support Assistant, HP Audio Switch, HP Documentation","1 Year Onsite Warranty"],
"price":29490,"assured":true,"prevPrice":31683,"discount":6,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Ryzen 3","popularity":559},

{"id":"L10",
"category":"Laptops","brand":"HP","name":"HP Ryzen 5 Quad Core NA - (4 GB/256 GB SSD/DOS)",
"img":"https://i.ibb.co/CJtJ6Xb/hp-original-imafwjrrnephsdyd.jpg",
"rating":4.3,"ratingDesc":"99 Ratings & 24 Reviews",
"details":["AMD Ryzen 5 Quad Core Processor","4 GB DDR4 processor","DOS Operating System","256 GB SSD","35.56 cm (14 inch) Display","1 Year Onsite Warranty"],
"price":31490,"assured":true,"prevPrice":34983,"discount":9,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Ryzen 5","popularity":889},

{"id":"L11",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Air Core i3 10th Gen - (8 GB/256 GB SSD/Mac OS Catalina)",
"img":"https://i.ibb.co/DpvKW6h/apple-na-original-imafr5acnvhzmrzj.jpg",
"rating":4.3,"ratingDesc":"602 Ratings & 10 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","8 GB LPDDR4X processor","Mac OS Operating System","256 GB SSD","33.78 cm (13.3 inch) Display","Built-in Apps: Photos, iMovie, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player","1 Year Limited Warranty"],
"price":83900,"assured":true,"prevPrice":92900,"discount":9,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":870},
{"id":"L12",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Pro with Touch Bar Core i5 8th Gen - (8 GB/256 GB SSD/Mac OS Catalina)",
"img":"https://i.ibb.co/cczKNf0/apple-na-thin-and-light-laptop-original-imafs5nhyzx7mku8.jpg",
"rating":4.7,"ratingDesc":"38 Ratings & 9 Reviews",
"details":["Intel Core i5 Processor (8th Gen)","8 GB LPDDR3 processor","Mac OS Operating System","512 GB SSD","33.02 cm (13 inch) Display","Built-in Apps: Photos, iMovie, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Music, Podcasts, TV, Books, App Store, Time Machine, Find My, QuickTime Player","1 Year Limited Hardware Warranty"],
"price":122900,"assured":true,"prevPrice":139900,"discount":1,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":890},
{"id":"L13",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Pro Core i9 8th Gen - (16 GB/512 GB SSD/Mac OS Mojave/4 GB Graphics)",
"img":"https://i.ibb.co/kyG4zDC/apple-na-thin-and-light-laptop-original-imafgwev6abfznds.jpg",
"rating":4.8,"ratingDesc":"16 Ratings & 10 Reviews",
"details":["Intel Core i9 Processor (8th Gen)","16 GB DDR3 processor","Mac OS Operating System","512 GB SSD","39.12 cm (15.4 inch) Display","Built-in Apps: Keynote, Siri, Safari, FaceTime, App Store, iTunes, Time Machine, iMovie, GarageBand, Pages, Notes","1 Year Onsite Warranty"],
"price":209900,"assured":true,"prevPrice":239900,"discount":12,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i9","popularity":870},
{"id":"L14",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Air Core i3 10th Gen - (8 GB/256 GB SSD/Mac OS Catalina)",
"img":"https://i.ibb.co/bHVxk0s/apple-na-original-imafr5achz9t5buc.jpg",
"rating":4.6,"ratingDesc":"236 Ratings & 25 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","8 GB LPDDR4X processor","Mac OS Operating System","256 GB SSD","33.78 cm (13.3 inch) Display","Built-in Apps: Photos, iMovie, GarageBand, Pages, Numbers, Keynote, Siri, Safari, Mail, FaceTime, Messages, Maps, News, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player","1 Year Limited Warranty"],
"price":83900,"assured":true,"prevPrice":92900,"discount":6,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":9970},
{"id":"L15",
"category":"Laptops","brand":"Apple","name":"Apple MacBook Air Core i5 8th Gen - (8 GB/256 GB SSD/Mac OS Mojave)",
"img":"https://i.ibb.co/grv9qrk/apple-na-thin-and-light-laptop-original-imafcnwgnnwbjpyj.jpg",
"rating":4.5,"ratingDesc":"310 Ratings & 30 Reviews",
"details":["Intel Core i5 Processor (8th Gen)","8 GB DDR3 processor","Mac OS Operating System","256 GB SSD","33.78 cm (13.3 inch) Display","1 Year Carry In Warranty"],
"price":127900,"assured":true,"prevPrice":134900,"discount":5,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":8970},

{"id":"L16",
"category":"Laptops","brand":"Acer","name":"Acer Swift 3 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/2 GB Graphics)",
"img":"https://i.ibb.co/FsJ83Gx/acer-na-thin-and-light-laptop-original-imafs5h72yafc2qm.jpg",
"rating":4.4,"ratingDesc":"69 Ratings & 12 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","35.56 cm (14 inch) Display","Acer Collection, Quick Access, Cyberlink PhotoDirector 8, Cyberlink PowerDirector 14, Acer Care Center, Acer Product Registration","1 Year International Travelers Warranty (ITW)"],
"price":64990,"assured":true,"prevPrice":69738,"discount":6,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":76789},
{"id":"L17",
"category":"Laptops","brand":"Acer","name":"Acer One 14 Pentium Gold - (4 GB/1 TB HDD/Windows 10 Home)",
"img":"https://i.ibb.co/swVBgyL/acer-na-thin-and-light-laptop-original-imafw7h8awgg8cfg.jpg",
"rating":4.4,"ratingDesc":"11,240 Ratings & 1,818 Reviews",
"details":["Intel Pentium Gold Processor","4 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD","35.56 cm (14 inch) Display","1 Year International Travelers Warranty (ITW)"],
"price":23990,"assured":true,"prevPrice":37500,"discount":36,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Pentium Gold","popularity":767789},
{"id":"L18",
"category":"Laptops","brand":"Acer","name":"Acer Aspire 7 Ryzen 7 Quad Core 3750H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650/60 Hz)",
"img":"https://i.ibb.co/RHfkPfY/acer-na-gaming-laptop-original-imafvykm5zs9vmmr.jpg",
"rating":4.3,"ratingDesc":"5,487 Ratings & 631 Reviews",
"details":["AMD Ryzen 7 Quad Core Processor","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","Acer Collection, Acer Product Registration , Quick Access, Acer Care Center","1 Year International Travelers Warranty (ITW)"],
"price":57990,"assured":true,"prevPrice":79999,"discount":27,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Ryzen 7","popularity":7789},
{"id":"L19",
"category":"Laptops","brand":"Acer","name":"Acer Predator Triton 300 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650 Ti/144 Hz)",
"img":"https://i.ibb.co/RTJwVMs/acer-original-imafwseht9kced2d.jpg",
"rating":4.7,"ratingDesc":"7 Ratings & 2 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","PredatorSense, Acer Product Registration, Acer Care Center, Acer Collection, Quick Access","1 Year International Travelers Warranty"],
"price":74990,"assured":true,"prevPrice":104990,"discount":28,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":767789},
{"id":"L20",
"category":"Laptops","brand":"Acer","name":"Acer Nitro 5 Core i7 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650 Ti/144 Hz)",
"img":"https://i.ibb.co/4Z4z5rR/acer-original-imafx4uppchbwbys.jpg",
"rating":3.5,"ratingDesc":"8 Ratings & 2 Reviews",
"details":["Intel Core i5 Processor (9th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","Acer Collection, Acer Product Registration , Quick Access, Acer Care Center","1 Year International Travelers Warranty (ITW)"],
"price":79990,"assured":true,"prevPrice":82999,"discount":3,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i7","popularity":7789},
{"id":"L21",
"category":"Laptops","brand":"Acer","name":"Acer Nitro 5 Ryzen 7 Octa Core 4800H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650 Ti/144 Hz)",
"img":"https://i.ibb.co/wJ1TmL5/acer-na-gaming-laptop-original-imafvyknbdsfhwaz.jpg",
"rating":4.3,"ratingDesc":"20 Ratings & 3 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","39.62 cm (15.6 inch) Display","PredatorSense, Acer Product Registration, Acer Care Center, Acer Collection, Quick Access","1 Year International Travelers Warranty"],
"price":82590,"assured":true,"prevPrice":82600,"discount":1,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Ryzen 7","popularity":7789},

{"id":"L22",
"category":"Laptops","brand":"Dell","name":"Dell Inspiron Core i3 10th Gen - (4 GB/1 TB HDD/Windows 10 Home)",
"img":"https://i.ibb.co/Z1z25R4/dell-original-imaftuvzh9rhg5jz.jpg",
"rating":3.9,"ratingDesc":"190 Ratings & 21 Reviews",
"details":["Intel Core i3 Processor (10th Gen)","4 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD","39.62 cm (15.6 inch) Display","Microsoft Office Home and Student 2019","1 Year Limited Hardware Warranty, In Home Service After Remote Diagnosis - Retail"],
"price":34990,"assured":true,"prevPrice":39106,"discount":10,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i3","popularity":77789},
{"id":"L23",
"category":"Laptops","brand":"Dell","name":"Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home)",
"img":"https://i.ibb.co/PYrnGkc/dell-original-imaftuvzyhyfmvzy.jpg",
"rating":4.2,"ratingDesc":"2,973 Ratings & 390 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD|256 GB SSD","35.56 cm (14 inch) Display","Microsoft Office Home and Student 2019","1 Year Limited Hardware Warranty, In Home Service After Remote Diagnosis - Retail"],
"price":52990,"assured":true,"prevPrice":53801,"discount":1,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":778789},
{"id":"L24",
"category":"Laptops","brand":"Dell","name":"Dell Inspiron 3000 APU Dual Core A9 A9-9425 - (4 GB/1 TB HDD/Windows 10 Home)",
"img":"https://i.ibb.co/RYV4c20/dell-inspiron-laptop-original-imafzf89nfqngbzt.jpg",
"rating":3.9,"ratingDesc":"403 Ratings & 57 Reviews",
"details":["AMD APU Dual Core A9 Processor","4 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD","39.62 cm (15.6 inch) Display","Microsoft Office Home and Student 2019","1 Year Limited Hardware Warranty, In Home Service After Remote Diagnosis - Retail"],
"price":27990,"assured":true,"prevPrice":28501,"discount":2,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core A9","popularity":77789},
{"id":"L25",
"category":"Laptops","brand":"Dell","name":"Dell Inspiron Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home)",
"img":"https://i.ibb.co/rkWqL8r/dell-original-imafv9tnwfhskwbx.jpg",
"rating":4.3,"ratingDesc":"117 Ratings & 22 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","512 GB SSD","35.56 cm (14 inch) Display","Microsoft Office Home and Student 2019","1 Year Onsite Warranty"],
"price":61990,"assured":true,"prevPrice":68501,"discount":9,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i5","popularity":7789},
{"id":"L26",
"category":"Laptops","brand":"Dell","name":"Dell G3 Core i7 10th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650/120 Hz)",
"img":"https://i.ibb.co/0jS9z4s/dell-na-gaming-laptop-original-imafvhkmqypvxynq.jpg",
"rating":4.5,"ratingDesc":"198 Ratings & 17 Reviews",
"details":["Intel Core i5 Processor (10th Gen)","8 GB DDR4 processor","64 bit Windows 10 Operating System","1 TB HDD|256 GB SSD","39.62 cm (15.6 inch) Display","1 Year Limited Hardware Warranty, In Home Service After Remote Diagnosis - Retail"],
"price":72990,"assured":true,"prevPrice":74501,"discount":2,"EMI":"No Cost EMI",
"exchange":"Upto 15650 on Exchange","processor":"Core i7","popularity":7789}
];

laptopsImg=[{"id":"L1","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/nDtjgmd/hp-na-thin-and-light-laptop-original-imaftv7fhbftxnmq.jpg","https://i.ibb.co/CWyfhgs/hp-na-thin-and-light-laptop-original-imaftv7fh5jkmtnz.jpg","https://i.ibb.co/nDph1jx/hp-na-thin-and-light-laptop-original-imaftv7ftjmvu8fv.jpg","https://i.ibb.co/mh90MY1/hp-na-thin-and-light-laptop-original-imaftv7ffvzumhyg.jpg"]},
{"id":"L2","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/D41Bwvd/apple-na-laptop-original-imafq2efkbb4bwc8.jpg","https://i.ibb.co/XkbsH7G/apple-na-laptop-original-imafq2e2zjtzwvha.jpg","https://i.ibb.co/1QzK5Y4/apple-na-laptop-original-imafq2effg7sggrc.jpg"]},
{"id":"L3","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/w4NHq58/acer-na-gaming-laptop-original-imafs5prytwgrcyf.jpg","https://i.ibb.co/k4S8qDg/acer-na-gaming-laptop-original-imafrzzvayzzxhht.jpg","https://i.ibb.co/vkBVjXj/acer-na-gaming-laptop-original-imafrzzvhhnyszny.jpg","https://i.ibb.co/K93cXxm/acer-na-gaming-laptop-original-imafrczgguncnyv4.jpg"]},
{"id":"L4","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/3MJNwb7/dell-original-imafvngm7px5m3zh.jpg","https://i.ibb.co/FJT1XHy/dell-original-imafvngmzbugj6ty.jpg","https://i.ibb.co/cyQCjxm/dell-na-gaming-laptop-original-imafvhkmhsfezy82.jpg","https://i.ibb.co/sRDGsWy/dell-na-gaming-laptop-original-imafvhkmdtwfqyes.jpg"]},
{"id":"L5","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/nMvTrtc/hp-original-imafrzbfruxgg23e.jpg","https://i.ibb.co/H7GWzqQ/hp-original-imafrzbfmfz8t6ud.jpg","https://i.ibb.co/Jrhdg46/hp-original-imafrzbfqp8etne5.jpg","https://i.ibb.co/1KZTsvq/hp-original-imafrzbfvn9pze8x.jpg"]},

{"id":"L6","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/3CckwYB/hp-na-thin-and-light-laptop-original-imafx664watubynz.jpg","https://i.ibb.co/vwRwTg1/hp-na-thin-and-light-laptop-original-imafx664fbzrgg9j.jpg","https://i.ibb.co/3hYY1v2/hp-na-thin-and-light-laptop-original-imafx664stekugyr.jpg","https://i.ibb.co/N7MT3CX/hp-na-thin-and-light-laptop-original-imafx664q4y2vynj.jpg"]},
{"id":"L7","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/dWLRB6C/hp-na-gaming-laptop-original-imafmcwzbga7kqaj.jpg","https://i.ibb.co/Ph8G414/hp-original-imaftyzazzhzn5gd.jpg","https://i.ibb.co/hmvZDQy/hp-na-2-in-1-laptop-original-imaft8pywykwnzqg.jpg","https://i.ibb.co/w7vhw0F/hp-na-2-in-1-laptop-original-imaft8pyjah2pte6.jpg"]},
{"id":"L8","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/DgwwFbw/hp-original-imafu7eydcyj97ta.jpg","https://i.ibb.co/zFDKP93/hp-na-gaming-laptop-original-imafuamgchvzaquc.jpg","https://i.ibb.co/N7tGR2D/hp-na-gaming-laptop-original-imafuamg7swrh8yt.jpg","https://i.ibb.co/BZX2fKy/hp-na-gaming-laptop-original-imafuamgksqtzebz.jpg"]},
{"id":"L9","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/ZJC2z8p/hp-na-thin-and-light-laptop-original-imafxqscnwzanqgh.jpg","https://i.ibb.co/JpDwzfy/hp-na-thin-and-light-laptop-original-imafxqschakennjv.jpg","https://i.ibb.co/cww32Kk/hp-na-thin-and-light-laptop-original-imafxqscubb8wyku.jpg","https://i.ibb.co/Vt7QmJv/hp-na-thin-and-light-laptop-original-imafxqsckhfpxmkf.jpg"]},
{"id":"L10","brand":"HP",brandImg:"https://i.ibb.co/0tqwNTg/4e0d4a37f0f20d78413f7315017041415b0fe6010ba327ff598715c7db2142b7.jpg",
"imgList":["https://i.ibb.co/CJtJ6Xb/hp-original-imafwjrrnephsdyd.jpg","https://i.ibb.co/BGvcbFC/hp-original-imafwh4ghh7dkgdz.jpg","https://i.ibb.co/hCq75F8/hp-na-thin-and-light-laptop-original-imafye9agzjbdmhw.jpg","https://i.ibb.co/VYcb3Wf/hp-na-thin-and-light-laptop-original-imafye9aeev3zggb.jpg"]},

{"id":"L11","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/DpvKW6h/apple-na-original-imafr5acnvhzmrzj.jpg","https://i.ibb.co/vJ21G5q/apple-na-original-imafr5ac84vjzqzk.jpg","https://i.ibb.co/1bcVQZf/apple-na-original-imafr5acsty2nxxv.jpg","https://i.ibb.co/Qmp2LNX/apple-na-original-imafr5acdst67cpu.jpg"]},
{"id":"L12","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/cczKNf0/apple-na-thin-and-light-laptop-original-imafs5nhyzx7mku8.jpg","https://i.ibb.co/RPNYJKh/apple-na-thin-and-light-laptop-original-imafs5nmtwjgfyqf.jpg","https://i.ibb.co/0sFpj5h/apple-na-thin-and-light-laptop-original-imafs5nmer7kfmhc.jpg","https://i.ibb.co/GtQTBht/apple-na-thin-and-light-laptop-original-imafs5nmszn5vmkt.jpg"]},
{"id":"L13","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/kyG4zDC/apple-na-thin-and-light-laptop-original-imafgwev6abfznds.jpg","https://i.ibb.co/nsMM75F/apple-na-thin-and-light-laptop-original-imafgwevwuzkck7s.jpg","https://i.ibb.co/x6VKQ8p/apple-na-thin-and-light-laptop-original-imafgwevxrkmpqht.jpg"]},
{"id":"L14","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/bHVxk0s/apple-na-original-imafr5achz9t5buc.jpg","https://i.ibb.co/Qmp2LNX/apple-na-original-imafr5acdst67cpu.jpg","https://i.ibb.co/nsMM75F/apple-na-thin-and-light-laptop-original-imafgwevwuzkck7s.jpg","https://i.ibb.co/1bcVQZf/apple-na-original-imafr5acsty2nxxv.jpg"]},
{"id":"L15","brand":"Apple",brandImg:"https://i.ibb.co/ZWQnpzD/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg",
"imgList":["https://i.ibb.co/grv9qrk/apple-na-thin-and-light-laptop-original-imafcnwgnnwbjpyj.jpg","https://i.ibb.co/vJ21G5q/apple-na-original-imafr5ac84vjzqzk.jpg","https://i.ibb.co/nsMM75F/apple-na-thin-and-light-laptop-original-imafgwevwuzkck7s.jpg"]},

{"id":"L16","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/FsJ83Gx/acer-na-thin-and-light-laptop-original-imafs5h72yafc2qm.jpg","https://i.ibb.co/r5ythYV/acer-na-thin-and-light-laptop-original-imafs5h7qjffgvyq.jpg","https://i.ibb.co/mqNF1QY/acer-na-thin-and-light-laptop-original-imafs5h7bvzvvrvf.jpg","https://i.ibb.co/51MtfJ8/acer-na-thin-and-light-laptop-original-imafs5h7qg7cets5.jpg"]},
{"id":"L17","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/swVBgyL/acer-na-thin-and-light-laptop-original-imafw7h8awgg8cfg.jpg","https://i.ibb.co/1Rk3r5B/acer-na-thin-and-light-laptop-original-imafw7h8th5psz5v.jpg","https://i.ibb.co/yW9DDjN/acer-na-thin-and-light-laptop-original-imafv6qhseytxfg6.jpg","https://i.ibb.co/K9JJNpS/acer-na-thin-and-light-laptop-original-imafw7h8zbya45d4.jpg"]},
{"id":"L18","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/RHfkPfY/acer-na-gaming-laptop-original-imafvykm5zs9vmmr.jpg","https://i.ibb.co/Ltf4ZX9/acer-na-gaming-laptop-original-imafvykmbbhdttxa.jpg","https://i.ibb.co/0cXQgn3/acer-na-gaming-laptop-original-imafthr8j3mebpgp.jpg","https://i.ibb.co/vD3PQRx/acer-na-gaming-laptop-original-imafvykmafzup2kg.jpg"]},
{"id":"L19","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/RTJwVMs/acer-original-imafwseht9kced2d.jpg","https://i.ibb.co/wNpxNYp/acer-original-imafwseh8p8vzwu4.jpg","https://i.ibb.co/JKC7CbL/acer-original-imafwsehnz7qhzg4.jpg","https://i.ibb.co/HNgZKRX/acer-original-imafwsehjzywxyu5.jpg"]},
{"id":"L20","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/4Z4z5rR/acer-original-imafx4uppchbwbys.jpg","https://i.ibb.co/bgf9gZ1/acer-na-gaming-laptop-original-imaftrdhshzjyere.jpg","https://i.ibb.co/LN1Mmnb/acer-na-gaming-laptop-original-imaftrdh6meegewz.jpg","https://i.ibb.co/61VbnZL/acer-original-imafx4upbtpynzjj.jpg"]},
{"id":"L21","brand":"Acer",brandImg:"https://i.ibb.co/JHQLCF9/e6ef82a91ed1d0bac7eff768025543ab00d969308640f932e2f1d934cd052540.jpg",
"imgList":["https://i.ibb.co/wJ1TmL5/acer-na-gaming-laptop-original-imafvyknbdsfhwaz.jpg","https://i.ibb.co/TPbdDTf/acer-na-gaming-laptop-original-imafwxxwuzjerenh.jpg","https://i.ibb.co/HnpDZDV/acer-na-gaming-laptop-original-imafwxxwnzcftfsk.jpg","https://i.ibb.co/5xCQHjb/acer-na-gaming-laptop-original-imafwxxwygmnnzmg.jpg"]},

{"id":"L22","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/Z1z25R4/dell-original-imaftuvzh9rhg5jz.jpg","https://i.ibb.co/bsPHbFN/dell-na-laptop-original-imafvzjyj2tdbhug.jpg","https://i.ibb.co/D4gcDfN/dell-original-imaftuvzfbbzakwe.jpg","https://i.ibb.co/nmP3Xnf/dell-na-laptop-original-imafvzjyvctvbyv3.jpg"]},
{"id":"L23","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/PYrnGkc/dell-original-imaftuvzyhyfmvzy.jpg","https://i.ibb.co/bsPHbFN/dell-na-laptop-original-imafvzjyj2tdbhug.jpg","https://i.ibb.co/J3NBcDr/dell-original-imaftuvz3kqhzuvz.jpg","https://i.ibb.co/YkcXKW5/dell-original-imaftuvzdszmkpvs.jpg"]},
{"id":"L24","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/RYV4c20/dell-inspiron-laptop-original-imafzf89nfqngbzt.jpg","https://i.ibb.co/bsPHbFN/dell-na-laptop-original-imafvzjyj2tdbhug.jpg","https://i.ibb.co/nmP3Xnf/dell-na-laptop-original-imafvzjyvctvbyv3.jpg","https://i.ibb.co/YkcXKW5/dell-original-imaftuvzdszmkpvs.jpg"]},
{"id":"L25","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/rkWqL8r/dell-original-imafv9tnwfhskwbx.jpg","https://i.ibb.co/6vQ41nb/dell-na-thin-and-light-laptop-original-imafw8hnhtm7n9qw.jpg","https://i.ibb.co/TPZQzmn/dell-original-imafv9tntgdvm5p8.jpg","https://i.ibb.co/9ZrNLFZ/dell-na-thin-and-light-laptop-original-imafw8hngfxgzh8a.jpg"]},
{"id":"L26","brand":"Dell",brandImg:"https://i.ibb.co/MpQVsp2/b99107335669131b5797b6b986ab6825278d6cde72b862b48a13febe474d6a18.jpg",
"imgList":["https://i.ibb.co/0jS9z4s/dell-na-gaming-laptop-original-imafvhkmqypvxynq.jpg","https://i.ibb.co/R0BcWpL/dell-na-gaming-laptop-original-imafvhkmhsfezy82.jpg","https://i.ibb.co/M2khCdF/dell-na-gaming-laptop-original-imafvn3yfhgmhkez.jpg","https://i.ibb.co/NZTHqZc/dell-na-gaming-laptop-original-imafvhkmdyms8vv7.jpg"]}
];
cameras=[{"id":"C1","category":"Cameras","type":"DSLR",
"brand":"Nikon",
"name":"Nikon D3500 DSLR Camera AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR  (Black)",
"img":"https://i.ibb.co/WFL6vqx/na-d3500-nikon-original-imaf9fgtzqxgtk5s.jpg",
"rating":4.5,"ratingDesc":"12,970 Ratings & 2,092 Reviews",
"details":["Effective Pixels: 24.2 MP","Sensor Type: CMOS","1080p recording at 60p","2 Years Warranty"],
"price":33999,"assured":true,"prevPrice":36250,"discount":7,"EMI":"No Cost EMI",
"exchange":"Upto ₹10,000 Off on Exchange","popularity":80670},
{"id":"C2","category":"Cameras","type":"DSLR",
"brand":"Nikon",
"name":"Nikon D3500 DSLR Camera AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR  (Black)",
"img":"https://i.ibb.co/b39kB8n/d3500-d3500-nikon-original-imafxjugcncxgdgp.jpg",
"rating":4.5,"ratingDesc":"12,970 Ratings & 2,092 Reviews",
"details":["Snapbridge compatible. It is useful to transfer the data from Camera to mobile.","Effective Pixels: 24.2 MP","Sensor Type: CMOS","1080p recording at 60p","2 Years Warranty"],
"price":42999,"assured":true,"prevPrice":49250,"discount":13,"EMI":"No Cost EMI",
"exchange":"Upto ₹10,000 Off on Exchange","popularity":85670},
{"id":"C3","category":"Cameras","type":"DSLR",
"brand":"Canon",
"name":"Canon EOS 200D II DSLR Camera EF-S 18 - 55 mm IS STM and 55 - 250 mm IS STM  (Black)",
"img":"https://i.ibb.co/Zxc82df/200d-ii-200d-ii-canon-original-imafhr8tgjvucefj.jpg",
"rating":4.6,"ratingDesc":"1,651 Ratings & 272 Reviews",
"details":["Effective Pixels: 24.1 MP","Sensor Type: CMOS","WiFi Available","Full HD","2 Years Brand Warranty"],
"price":64999,"assured":true,"prevPrice":65250,"discount":1,"EMI":"No Cost EMI",
"exchange":"Upto ₹14,000 Off on Exchange","popularity":851670},
{"id":"C4","category":"Cameras","type":"DSLR",
"brand":"Nikon",
"name":"Nikon D5600 DSLR Camera Body with Single Lens: AF-S DX Nikkor 18 - 140 MM F/3.5-5.6G ED VR (16 GB SD Card)  (Black)",
"img":"https://i.ibb.co/hYr69bk/d5600-nikon-d5600-original-imaezvbzayghhsru.jpg",
"rating":4.6,"ratingDesc":"9,901 Ratings & 1,630 Reviews",
"details":["Effective Pixels: 24.2 MP","Sensor Type: CMOS","1080p recording at 30p","2 Years Domestic Warranty"],
"price":52999,"assured":true,"prevPrice":60000,"discount":11,"EMI":"No Cost EMI",
"exchange":"Upto ₹10,000 Off on Exchange","popularity":851670},
{"id":"C5","category":"Cameras","type":"DSLR",
"brand":"Canon",
"name":"Canon EOS 5D Mark IV DSLR Camera Body with Single Lens:EF 24-105mm f/4L IS II USM Lens  (Black)",
"img":"https://i.ibb.co/9YWCJLK/canon-dslr-eos-5d-mark-iv-dslr-original-imaemgtbmhvwhzdm.jpg",
"rating":3.6,"ratingDesc":"9,901 Ratings & 1,630 Reviews",
"details":["Effective Pixels: 30.4 MP","Sensor Type: CMOS","WiFi Available","4K at 30p + 4K Frame Grab","Product is covered under one-year standard warranty and one-year additional warranty from the date of Product purchased by the customer. Warranty validation / Warranty period confirmation would be done through either Online Warranty Serial No. Tracking system (Service Edge) or Warranty Card and Customer Invoice date."],
"price":264999,"assured":true,"prevPrice":286495,"discount":7,"EMI":"No Cost EMI",
"exchange":"Upto ₹20,000 Off on Exchange","popularity":8670},

{"id":"C6","category":"Cameras","type":"Lens",
"brand":"Canon",
"name":"Canon EF 50 mm f/1.4 USM Lens  (Black)",
"img":"https://i.ibb.co/s3W0gSv/canon-standard-ef-50-mm-f-1-4-usm-original-imaf3h3xhggcwbep.jpg",
"rating":3.6,"ratingDesc":"188 Ratings & 15 Reviews",
"details":["Lens Mount: Canon Mount","Designed For: Canon DSLRs","Lens Type: Standard","Prime Lens","Product is covered under one-year standard warranty and one-year additional warranty from the date of Product purchased by the customer. Warranty validation / Warranty period confirmation would be done through either Online Warranty Serial No. Tracking system (Service Edge) or Warranty Card and Customer Invoice date."],
"price":27999,"assured":true,"prevPrice":28995,"discount":3,"EMI":"No Cost EMI",
"exchange":"Upto ₹1,000 Off on Exchange","popularity":8670},
{"id":"C7","category":"Cameras","type":"Lens",
"brand":"Nikon",
"name":"Nikon Nikkor Z 14-30mm f/4 S Lens  (Black, 14 - 30)",
"img":"https://i.ibb.co/rMYRVBg/nikon-nikkor-z-14-30mm-f-4-s-original-imafhf62f9jcsyyc.jpg",
"rating":4.5,"ratingDesc":"4 Ratings & 1 Reviews",
"details":["Lens Mount: Nikon Z Mount","Designed For: Nikon Z Series Mirrorless","Focal Length: 14 - 30 mm","Lens Type: Standard","Zoom Lens","2 Years Warranty"],
"price":84999,"assured":true,"prevPrice":99995,"discount":14,"EMI":"No Cost EMI",
"exchange":"Upto ₹4,000 Off on Exchange","popularity":870},
{"id":"C8","category":"Cameras","type":"Lens",
"brand":"Sony",
"name":"Sony SELP18105G Lens  (Black, 50)",
"img":"https://i.ibb.co/m6M59tD/sony-selp18105g-original-imaf4usgdpjdcgwm.jpg",
"rating":4.6,"ratingDesc":"51 Ratings & 7 Reviews",
"details":["Lens Mount: E-mount","Designed For: Sony E Mount Cameras","Focal Length: 50 mm","Lens Type: Standard","Zoom Lens","2 Years Warranty"],
"price":41290,"assured":true,"prevPrice":42990,"discount":14,"EMI":"No Cost EMI",
"exchange":"Upto ₹4,000 Off on Exchange","popularity":870},
{"id":"C9","category":"Cameras","type":"Lens",
"brand":"Sony",
"name":"Sony SEL075UWC Lens  (Black, 21)",
"img":"https://i.ibb.co/GpYnnDc/sony-sel075uwc-original-imaf6sw6dcceqgt6.jpg",
"rating":4.6,"ratingDesc":"Be the first to Review this product",
"details":["Lens Mount: E-mount","Designed For: Sony DSLR","Focal Length: 21 mm","Lens Type: Standard","Zoom Lens","1 Years Warranty"],
"price":17790,"assured":true,"prevPrice":20490,"discount":13,"EMI":"No Cost EMI",
"exchange":"Upto ₹2,000 Off on Exchange","popularity":70},
{"id":"C10","category":"Cameras","type":"Lens",
"brand":"Nikon",
"name":"Nikon AF-S DX NIKKOR 18-140mm f/3.5-5.6 G ED VR Lens  (Black, 70 - 200)",
"img":"https://i.ibb.co/gM48Lnn/nikon-af-s-dx-nikkor-18-140-f-3-5-5-6-g-ed-vr-af-s-dx-nikkor-18-original-imaez9rvz7e6cxs6.jpg",
"rating":4.2,"ratingDesc":"81 Ratings & 10 Reviews",
"details":["Lens Mount: AF-S","Designed For: Nikon DSLRs","Focal Length: 70 - 200 mm","Lens Type: Standard","Zoom Lens","Customer visit to service center"],
"price":17790,"assured":true,"prevPrice":20490,"discount":6,"EMI":"No Cost EMI",
"exchange":"Upto ₹3,000 Off on Exchange","popularity":7880},
{"id":"C11","category":"Cameras","type":"Tripods",
"brand":"Webilla",
"name":"Webilla 10 Inch Big LED Ring Light for Photo and Videos with Tripod Stand 7 Ft Compatible with Camera and Smartphones Tripod  (Black, Supports Up to 4000 g)",
"img":"https://i.ibb.co/dPtw1PQ/webilla-10-inch-big-led-ring-light-for-photo-and-videos-with-original-imafwjsszhveg3wq.jpg",
"rating":4,"ratingDesc":"30 Ratings & 8 Reviews",
"details":["Designed For: Mobile","Load Capacity: 4000 g","Height Range: 1060 mm - 1670 mm","Material: plastic, metal","Manufacturing Defect Will Be Replace"],
"price":1092,"assured":true,"prevPrice":2599,"discount":57,"EMI":"No Cost EMI",
"exchange":"","popularity":7880},
{"id":"C12","category":"Cameras","type":"Tripods",
"brand":"Miliboo",
"name":"Miliboo MTT601A Ground Spreader Video Tripod Kit  (Black, Supports Up to 8000 g)",
"img":"https://i.ibb.co/JQgMJgf/miliboo-mtt601a-ground-spreader-video-original-imafgw6eyn6jazys.jpg",
"rating":"","ratingDesc":"Be the first to Review this product",
"details":["Designed For: Binoculars, DSLR/SLR Camera, Video Camera, Spotting Scope, Point &amp; Shoot Camera, Film Camera","Load Capacity: 8000 g","Height Range: 720 mm - 1530 mm","Number of Leg Sections: 3","Material: Aluminium Alloy","3 Years"],
"price":17492,"assured":true,"prevPrice":25567,"discount":31,"EMI":"No Cost EMI",
"exchange":"","popularity":80},
{"id":"C13","category":"Cameras","type":"Tripods",
"brand":"Benro",
"name":"Benro IT25 Tripod Kit  (Black, Supports Up to 12000 g)",
"img":"https://i.ibb.co/nLL1JG2/benro-it25-original-imae8hsfjut8dcxy.jpg",
"rating":4.3,"ratingDesc":"16 Ratings & 4 Reviews",
"details":["Designed For: DSLR/SLR Camera","Load Capacity: 12000 g","Manufacturing Defect Will Be Replace"],
"price":13175,"assured":true,"prevPrice":15500,"discount":15,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C14","category":"Cameras","type":"Tripods",
"brand":"Benro",
"name":"Benro IT25 Aluminum Travel Angel Tripod Kit  (Black, Supports Up to 6000 g)",
"img":"https://i.ibb.co/7WqgpQs/benro-it25-aluminum-travel-angel-original-imae8vwessx6xjz9.jpg",
"rating":4,"ratingDesc":"13 Ratings & 1 Reviews",
"details":["Designed For: DSLR/SLR Camera, Video Camera","Load Capacity: 6000 g","Height Range: 415 mm - 1545 mm","Number of Leg Sections: 5","Material: Aluminium (Legs), Rubber (Leg Tip)","Life Time Quality Warranty"],
"price":9900,"assured":true,"prevPrice":15500,"discount":36,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C15","category":"Cameras","type":"Tripods",
"brand":"Benro",
"name":"Benro IT15 Aluminum Travel Angel Tripod Kit  (Black, Supports Up to 4000 g)",
"img":"https://i.ibb.co/nLL1JG2/benro-it25-original-imae8hsfjut8dcxy.jpg",
"rating":4.6,"ratingDesc":"9 Ratings & 0 Reviews",
"details":["Designed For: DSLR/SLR Camera, Video Camera","Load Capacity: 6000 g","Height Range: 415 mm - 1545 mm","Number of Leg Sections: 5","Material: Aluminium (Legs), Rubber (Leg Tip)","Life Time Quality Warranty"],
"price":7299,"assured":true,"prevPrice":12500,"discount":41,"EMI":"No Cost EMI",
"exchange":"","popularity":980},
{"id":"C16","category":"Cameras","type":"Compact",
"brand":"Sony",
"name":"Sony CyberShot DSC-WX500/BCIN5  (18.2 MP, 30 Optical Zoom, 120x Digital Zoom, Black)",
"img":"https://i.ibb.co/qk1NP3r/sony-cyber-shot-dsc-wx500-bce32-point-shoot-original-imae9taryrpchqdp.jpg",
"rating":4.3,"ratingDesc":"277 Ratings & 52 Reviews",
"details":["Effective Pixels: 18.2 MP","Optical Zoom: 30 | Digital Zoom: 120x","Display Size: 3","2 Years Sony India Warranty"],
"price":21990,"assured":true,"prevPrice":23890,"discount":7,"EMI":"No Cost EMI",
"exchange":"","popularity":980},
{"id":"C17","category":"Cameras","type":"Compact",
"brand":"Canon",
"name":"Canon IXUS 285 HS  (20.2 MP, 12x Optical Zoom, 4X Digital Zoom, Black)",
"img":"https://i.ibb.co/K52SZ3F/canon-ixus-285-point-shoot-original-imaeg2eznff9nqzs.jpg",
"rating":4.1,"ratingDesc":"304 Ratings & 54 Reviews",
"details":["Effective Pixels: 20.2 MP","Optical Zoom: 12x | Digital Zoom: 4X","Auto Focus","Display Size: 3","2 Years Canon India Warranty and Free Transit Insurance"],
"price":21990,"assured":true,"prevPrice":23890,"discount":11,"EMI":"No Cost EMI",
"exchange":"","popularity":6780},
{"id":"C18","category":"Cameras","type":"Compact",
"brand":"Nikon",
"name":"Nikon Coolpix P950  (16 MP, 83x Optical Zoom, Up to 4x (angle of view equivalent to that of approx. 8000 mm lens in 35mm [135] format)",
"img":"https://i.ibb.co/LQN03RV/coolpix-coolpix-p950-nikon-original-imafrexf5pw6q8ug.jpg",
"rating":4.2,"ratingDesc":"13 Ratings & 2 Reviews",
"details":["Effective Pixels: 16 MP","Optical Zoom: 83x | Digital Zoom: Up to 4x (angle of view equivalent to that of approx. 8000 mm lens in 35mm [135] format) Up to 3.6x when recording movies with [2160/30p] (4K UHD) or [2160/25p] (4K UHD)","Auto Focus","Display Size: 3.2 inch","2 Years Limited Warranty"],
"price":59999,"assured":true,"prevPrice":66995,"discount":10,"EMI":"No Cost EMI",
"exchange":"","popularity":8780},
{"id":"C19","category":"Cameras","type":"Compact",
"brand":"Nikon",
"name":"Nikon COOLPIX B600  (16 MP, 60x Optical Zoom, 4x Digital Zoom, Black)",
"img":"https://i.ibb.co/LQN03RV/coolpix-coolpix-p950-nikon-original-imafrexf5pw6q8ug.jpg",
"rating":3.8,"ratingDesc":"67 Ratings & 15 Reviews",
"details":["Effective Pixels: 20.2 MP","Optical Zoom: 12x | Digital Zoom: 4X","Auto Focus","Display Size: 3","2 Years Canon India Warranty and Free Transit Insurance"],
"price":24999,"assured":true,"prevPrice":26450,"discount":5,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C20","category":"Cameras","type":"Compact",
"brand":"Nikon",
"name":"Nikon COOLPIX B600  (16 MP, 60x Optical Zoom, 4x Digital Zoom, Red)",
"img":"https://i.ibb.co/j4hJmTF/coolpix-b600-coolpix-b600-nikon-original-imafefaz6mzwvpbn.jpg",
"rating":4.2,"ratingDesc":"61 Ratings & 12 Reviews",
"details":["Effective Pixels: 16 MP","Optical Zoom: 60x | Digital Zoom: 4x","Auto Focus","Display Size: 7.6 cm","2 Years Warranty"],
"price":24999,"assured":true,"prevPrice":26450,"discount":5,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C21","category":"Cameras","type":"Accessories",
"brand":"Vanguard",
"name":"Vanguard Digital Camera Bag  (Black, Khaki)",
"img":"https://i.ibb.co/vjTc0FY/vanguard-digital-original-imaf69ffuauyvqyj.jpg",
"rating":4.2,"ratingDesc":"19 Ratings & 1 Reviews",
"details":["Hand Bag","Point & Shoot Camera, Advance Point & Shoot Camera", "Medium Format Camera"],
"price":299,"assured":true,"prevPrice":550,"discount":45,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C22","category":"Cameras","type":"Accessories",
"brand":"Canon",
"name":"Canon DSLR - Camera Bag Camera Bag  (Black)",
"img":"https://i.ibb.co/KzFxrKZ/canon-dslr-camera-bag-original-imaeydztdkeu6ga8.jpg",
"rating":4.2,"ratingDesc":"3,270 Ratings & 318 Reviews",
"details":["Hand Bag","Tripod, Video Camera, Lens, CSC/MILC, Film Camera, Advance Point &amp; Shoot Camera, DSLR/SLR Camera, Point &amp; Shoot Camera, Medium Format Camera","Men, Women","Water Resistant"],
"price":449,"assured":true,"prevPrice":995,"discount":54,"EMI":"No Cost EMI",
"exchange":" ","popularity":99880},
{"id":"C23","category":"Cameras","type":"Accessories",
"brand":"SULFUR",
"name":"SULFUR best buy Camera Stand Clip Bracket Holder lightweight and perfect for taking photos Mobile Tripod Monopod Mount Supports Width Upto 2.3-4.1 Inches Smartphones best buy good quality mobile clip easy to use super quality mobile clip adapter Monopod  (Black, Supports Up to 500 g)",
"img":"https://i.ibb.co/j8drk5t/sulfur-100-brand-new-mobile-clip-holder-great-quality-sport-all-original-imafuxt6ksagwhnf.jpg",
"rating":4.2,"ratingDesc":"33 Ratings & 2 Reviews",
"details":["Designed For: Mobile, DSLR/SLR Camera, Advanced Point &amp; Shoot Camera","Load Capacity: 500 g","Height Range: 35 mm - 80 mm","Material: plastic"],
"price":169,"assured":true,"prevPrice":500,"discount":66,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C24","category":"Cameras","type":"Accessories",
"brand":"Packkart",
"name":"Packkart Porta Pair Umbrella Video Light for Still Video Photography Portable Studio Kit Monopod Kit  (Black, White, Supports Up to 3000 g)",
"img":"https://i.ibb.co/g6C0MmX/packkart-porta-pair-umbrella-video-light-for-still-video-original-imaftvcemdzcx7ht.jpg",
"rating":4,"ratingDesc":"13 Ratings & 1 Reviews",
"details":["Designed For: Video Camera, Telescope, Mobile, CSC/MILC, Film Camera, Binoculars, Monocular, Spotting Scope, Point &amp; Shoot Camera, DSLR/SLR Camera, Advanced Point &amp; Shoot Camera, Medium Format Camera","Load Capacity: 3000 g","Height Range: 950 mm - 9000 mm","Material: Steel"],
"price":4199,"assured":true,"prevPrice":8999,"discount":53,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
{"id":"C25","category":"Cameras","type":"Accessories",
"brand":"GoPro",
"name":"GoPro 3-Way Grip, Arm, Tripod Selfie Stick, Monopod  (Black, Supports Up to 5000 g)",
"img":"https://i.ibb.co/CJhFdtt/gopro-3-way-grip-arm-tripod-original-imaeftx4h72jhhya.jpg",
"rating":4.1,"ratingDesc":"32 Ratings & 0 Reviews",
"details":["Designed For: Advanced Point &amp; Shoot Camera","Load Capacity: 5000 g","Height Range: 100 mm - 220.8 mm"],
"price":3799,"assured":true,"prevPrice":5800,"discount":34,"EMI":"No Cost EMI",
"exchange":"","popularity":880},
];


camerasImg=[{"id":"C1","type":"DSLR",
"imgList":["https://i.ibb.co/WFL6vqx/na-d3500-nikon-original-imaf9fgtzqxgtk5s.jpg","https://i.ibb.co/3szcWdL/na-d3500-nikon-original-imaf9ffz7rk7njgg.jpg","https://i.ibb.co/CbVYYHr/na-d3500-nikon-original-imaf9ffzzx3zxbhg.jpg","https://i.ibb.co/HDHjnTd/na-d3500-nikon-original-imaf9fhh7dwesqyk.jpg"]},
{"id":"C2","type":"DSLR",
"imgList":["https://i.ibb.co/b39kB8n/d3500-d3500-nikon-original-imafxjugcncxgdgp.jpg","https://i.ibb.co/4ZTP7nz/na-d3500-nikon-original-imaf9fk4gskbx2e2.jpg","https://i.ibb.co/NpPBTPm/na-d3500-nikon-original-imaf9ffznjkcwbpg.jpg","https://i.ibb.co/fDMc6yy/na-d3500-nikon-original-imaf9ffpvezgsefg.jpg"]},
{"id":"C3","type":"DSLR",
"imgList":["https://i.ibb.co/Zxc82df/200d-ii-200d-ii-canon-original-imafhr8tgjvucefj.jpg","https://i.ibb.co/DbMRxKt/200d-ii-200d-ii-canon-original-imaffvh6yrfjq4nh.jpg","https://i.ibb.co/j5xST4Q/200d-ii-200d-ii-canon-original-imaffvqfkvxdwf4t.jpg","https://i.ibb.co/85Y0V0P/200d-ii-200d-ii-canon-original-imaffvh7txfduxxh.jpg"]},
{"id":"C4","type":"DSLR",
"imgList":["https://i.ibb.co/hYr69bk/d5600-nikon-d5600-original-imaezvbzayghhsru.jpg","https://i.ibb.co/qpXBtkT/d5600-nikon-d5600-original-imaezvbtw9vwykvg.jpg","https://i.ibb.co/6PWBcqh/d5600-nikon-d5600-original-imaezvbuh9anhjdp.jpg","https://i.ibb.co/PwRhP6D/d5600-nikon-d5600-original-imaezvbxhjwffyhw.jpg"]},
{"id":"C5","type":"DSLR",
"imgList":["https://i.ibb.co/9YWCJLK/canon-dslr-eos-5d-mark-iv-dslr-original-imaemgtbmhvwhzdm.jpg","https://i.ibb.co/Dp3jWcm/canon-dslr-eos-5d-mark-iv-dslr-original-imaemgtccvyjqshz.jpg","https://i.ibb.co/025HXcW/canon-dslr-eos-5d-mark-iv-dslr-original-imaemgtczdguhtag.jpg","https://i.ibb.co/J7J2Tx4/canon-dslr-eos-5d-mark-iv-dslr-original-imaemgtdgj628s7m.jpg"]},

{"id":"C6","type":"Lens",
"imgList":["https://i.ibb.co/s3W0gSv/canon-standard-ef-50-mm-f-1-4-usm-original-imaf3h3xhggcwbep.jpg","https://i.ibb.co/D57KGZh/canon-standard-ef-50-mm-f-1-4-usm-original-imae3f5kw5tx3gzj.jpg","https://i.ibb.co/6rcXpS2/canon-standard-ef-50-mm-f-1-4-usm-original-imaeyh5jy9ubtybp.jpg","https://i.ibb.co/KsYwSvY/canon-standard-ef-50-mm-f-1-4-usm-original-imaeyh5jkrtgkjfz.jpg"]},
{"id":"C7","type":"Lens",
"imgList":["https://i.ibb.co/rMYRVBg/nikon-nikkor-z-14-30mm-f-4-s-original-imafhf62f9jcsyyc.jpg","https://i.ibb.co/P67KPf5/nikon-nikkor-z-14-30mm-f-4-s-original-imafhf62ptzuhn7g.jpg","https://i.ibb.co/VtscGn4/nikon-nikkor-z-14-30mm-f-4-s-original-imafhf62nbkfqdhd.jpg","https://i.ibb.co/kXZ25CJ/nikon-nikkor-z-14-30mm-f-4-s-original-imafhf63fay4wkue.jpg"]},
{"id":"C8","type":"Lens",
"imgList":["https://i.ibb.co/m6M59tD/sony-selp18105g-original-imaf4usgdpjdcgwm.jpg","https://i.ibb.co/Rc6HpCT/sony-selp18105g-original-imaf4usgh44vwew5.jpg"]},
{"id":"C9","type":"Lens",
"imgList":["https://i.ibb.co/GpYnnDc/sony-sel075uwc-original-imaf6sw6dcceqgt6.jpg","https://i.ibb.co/BV8hdRs/sony-sel075uwc-original-imaf6sw6k7ssqzhb.jpg","https://i.ibb.co/jwTmGjv/sony-sel075uwc-original-imaf6sw7eewkqsdt.jpg","https://i.ibb.co/q5FRcwY/sony-sel075uwc-original-imaf6sw7vez9f8yt.jpg"]},
{"id":"C10","type":"Lens",
"imgList":["https://i.ibb.co/gM48Lnn/nikon-af-s-dx-nikkor-18-140-f-3-5-5-6-g-ed-vr-af-s-dx-nikkor-18-original-imaez9rvz7e6cxs6.jpg","https://i.ibb.co/HXc8Fsw/nikon-af-s-dx-nikkor-18-140-f-3-5-5-6-g-ed-vr-af-s-dx-nikkor-18-original-imaez9rvmwgbkgpz.jpg","https://i.ibb.co/4fnm6NL/nikon-af-s-dx-nikkor-18-140-f-3-5-5-6-g-ed-vr-af-s-dx-nikkor-18-original-imaez9rvngqnznqd.jpg","https://i.ibb.co/4fnm6NL/nikon-af-s-dx-nikkor-18-140-f-3-5-5-6-g-ed-vr-af-s-dx-nikkor-18-original-imaez9rvngqnznqd.jpg"]},
{"id":"C11","type":"Tripods",
"imgList":["https://i.ibb.co/dPtw1PQ/webilla-10-inch-big-led-ring-light-for-photo-and-videos-with-original-imafwjsszhveg3wq.jpg","https://i.ibb.co/MBf7KCy/webilla-10-inch-big-led-ring-light-for-photo-and-videos-with-original-imafwjsszktfazvn.jpg","https://i.ibb.co/Jpy56y9/webilla-10-inch-big-led-ring-light-for-photo-and-videos-with-original-imafwjssqnnkze2z.jpg"]},
{"id":"C12","type":"Tripods",
"imgList":["https://i.ibb.co/JQgMJgf/miliboo-mtt601a-ground-spreader-video-original-imafgw6eyn6jazys.jpg","https://i.ibb.co/DkYQYMD/miliboo-mtt601a-ground-spreader-video-original-imafgw6e2stmhegj.jpg","https://i.ibb.co/KxCwmDc/miliboo-mtt601a-ground-spreader-video-original-imafgw6ehbfzwmmn.jpg"]},
{"id":"C13","type":"Tripods",
"imgList":["https://i.ibb.co/nLL1JG2/benro-it25-original-imae8hsfjut8dcxy.jpg","https://i.ibb.co/R3Cc7Cj/benro-it25-original-imae8hsfsyaymzy6.jpg","https://i.ibb.co/ZMrX3fs/benro-it25-original-imae8hsfaj7nyjyy.jpg"]},
{"id":"C14","type":"Tripods",
"imgList":["https://i.ibb.co/7WqgpQs/benro-it25-aluminum-travel-angel-original-imae8vwessx6xjz9.jpg","https://i.ibb.co/ZMrX3fs/benro-it25-original-imae8hsfaj7nyjyy.jpg","https://i.ibb.co/GHTpcc2/benro-it25-aluminum-travel-angel-original-imae8vwegquahgwh.jpg","https://i.ibb.co/tM0j9yb/benro-it25-aluminum-travel-angel-original-imae8vweyf2zdmhg.jpg"]},
{"id":"C15","type":"Tripods",
"imgList":["https://i.ibb.co/nLL1JG2/benro-it25-original-imae8hsfjut8dcxy.jpg","https://i.ibb.co/R3Cc7Cj/benro-it25-original-imae8hsfsyaymzy6.jpg","https://i.ibb.co/ZMrX3fs/benro-it25-original-imae8hsfaj7nyjyy.jpg","https://i.ibb.co/tM0j9yb/benro-it25-aluminum-travel-angel-original-imae8vweyf2zdmhg.jpg"]},

{"id":"C16","type":"Compact",
"imgList":["https://i.ibb.co/qk1NP3r/sony-cyber-shot-dsc-wx500-bce32-point-shoot-original-imae9taryrpchqdp.jpg","https://i.ibb.co/0syW9w3/sony-cyber-shot-dsc-wx500-bce32-point-shoot-original-imae9tarhe7vxzsj.jpg","https://i.ibb.co/CHMh0cV/sony-cyber-shot-dsc-wx500-bce32-point-shoot-original-imae9tarmmvunsvb.jpg","https://i.ibb.co/0BGtz7G/sony-cyber-shot-dsc-wx500-bce32-point-shoot-original-imae9tarykv4eete.jpg"]},
{"id":"C17","type":"Compact",
"imgList":["https://i.ibb.co/K52SZ3F/canon-ixus-285-point-shoot-original-imaeg2eznff9nqzs.jpg","https://i.ibb.co/71wbwkB/canon-l-5184-x-3888-m1-3648-x-2736-m2-2048-x-1536-m-2592-x-1944-original-imaeezttwedngh7g.jpg","https://i.ibb.co/yf923Vv/canon-ixus-285-point-shoot-original-imaeg2ezpjnzgagd.jpg","https://i.ibb.co/JR7YYLz/canon-l-5184-x-3888-m1-3648-x-2736-m2-2048-x-1536-m-2592-x-1944-original-imaeeztjhqztztwy.jpg"]},
{"id":"C18","type":"Compact",
"imgList":["https://i.ibb.co/VBfPkDr/coolpix-coolpix-p950-nikon-original-imafrexffhgjhdx8.jpg","https://i.ibb.co/VBfPkDr/coolpix-coolpix-p950-nikon-original-imafrexffhgjhdx8.jpg","https://i.ibb.co/rQdSkyV/coolpix-coolpix-p950-nikon-original-imafrexffcgkknat.jpg"]},
{"id":"C19","type":"Compact",
"imgList":["https://i.ibb.co/VBfPkDr/coolpix-coolpix-p950-nikon-original-imafrexffhgjhdx8.jpg","https://i.ibb.co/VBfPkDr/coolpix-coolpix-p950-nikon-original-imafrexffhgjhdx8.jpg","https://i.ibb.co/rQdSkyV/coolpix-coolpix-p950-nikon-original-imafrexffcgkknat.jpg","https://i.ibb.co/3R1NDWJ/coolpix-b600-coolpix-b600-nikon-original-imafefau8ujcg5zm.jpg"]},
{"id":"C20","type":"Compact",
"imgList":["https://i.ibb.co/j4hJmTF/coolpix-b600-coolpix-b600-nikon-original-imafefaz6mzwvpbn.jpg","https://i.ibb.co/1ZpjK3s/coolpix-b600-coolpix-b600-nikon-original-imafefagknkd9kan.jpg","https://i.ibb.co/C1NXL5m/coolpix-b600-coolpix-b600-nikon-original-imafefaavp6zuz6a.jpg","https://i.ibb.co/mFCn3GX/coolpix-b600-coolpix-b600-nikon-original-imafefahbnbugfym.jpg"]},

{"id":"C21","type":"Accessories",
"imgList":["https://i.ibb.co/vjTc0FY/vanguard-digital-original-imaf69ffuauyvqyj.jpg","https://i.ibb.co/S3b55sT/vanguard-digital-original-imaf69f33hjchtxg.jpg","https://i.ibb.co/hHz86YQ/vanguard-digital-original-imaf69f4rpdfe6be.jpg"]},
{"id":"C22","type":"Accessories",
"imgList":["https://i.ibb.co/KzFxrKZ/canon-dslr-camera-bag-original-imaeydztdkeu6ga8.jpg"]},
{"id":"C23","type":"Accessories",
"imgList":["https://i.ibb.co/j8drk5t/sulfur-100-brand-new-mobile-clip-holder-great-quality-sport-all-original-imafuxt6ksagwhnf.jpg","https://i.ibb.co/bJNgQQ6/sulfur-best-buy-camera-stand-clip-bracket-holder-lightweight-and-original-imafuysjzgh4zssg.jpg","https://i.ibb.co/0h2Y3XZ/sulfur-universal-tripod-monopod-mount-holder-clip-for-mobile-original-imafux8wab5amntz.jpg","https://i.ibb.co/QQprd9M/sulfur-100-brand-new-mobile-clip-holder-great-quality-sport-all-original-imafuxt2zzgyqwhb.jpg"]},
{"id":"C24","type":"Accessories",
"imgList":["https://i.ibb.co/g6C0MmX/packkart-porta-pair-umbrella-video-light-for-still-video-original-imaftvcemdzcx7ht.jpg"]},
{"id":"C25","type":"Accessories",
"imgList":["https://i.ibb.co/CJhFdtt/gopro-3-way-grip-arm-tripod-original-imaeftx4h72jhhya.jpg","https://i.ibb.co/7Rg8GWP/gopro-3-way-grip-arm-tripod-original-imaeftx4azyrknbm.jpg","https://i.ibb.co/cDXC1d9/gopro-3-way-grip-arm-tripod-original-imaeftx4ch3fzhue.jpg","https://i.ibb.co/Bnr254p/gopro-3-way-grip-arm-tripod-original-imaeftx55yphvudz.jpg"]}
];

app.get("/product/:id",function(req,res){
    let id = req.params.id;
    var x= laptops.find(obj=>obj.id===id);
    var obj1;
    var obj2;
    if(x){
       obj1= laptops.find(obj=>obj.id===id);
       obj2= laptopsImg.find(obj=>obj.id===id);
    }
    else{
        obj1= cameras.find(obj=>obj.id===id);
        obj2= camerasImg.find(obj=>obj.id===id);
    }
    let data={prod:obj1,pics:obj2};
    res.send(data);
});

app.get("/products/Laptops/:brand?",function(req,res){
    let q=req.query.q;
    let brand=req.params.brand;
    let processor=req.query.processor;
    let rating=req.query.rating;
    let assured= req.query.assured;
    let price= req.query.price;
   let sort=req.query.sort;
    let page= +req.query.page;
    let outArr=laptops;
   
    if(q)  outArr=outArr.filter(obj=>obj.brand.toLowerCase().indexOf(q) >= 0||obj.category.toLowerCase().indexOf(q) >= 0||
    obj.name.toLowerCase().indexOf(q) >= 0);
    if(brand)  outArr=outArr.filter(obj=>obj.brand===brand);
    if(assured)  outArr=outArr.filter(obj=>obj.assured===assured);
    if(rating) {
        let ratings=rating.split(",");
        outArr=outArr.filter(obj=>ratings.find(result=> {
           if(result===">1") return obj.rating>=1;
           if(result===">2") return obj.rating>=2;
           if(result===">3") return obj.rating>=3;
           if(result===">4") return obj.rating>=4;
        }) );
        }
        if(processor) {
            let processors=processor.split(",");
            outArr=outArr.filter(obj=>processors.find(result=> {
           if(result===obj.processor) return obj;
            }) );
            }  
        if(price) {
                let prices=computers.split(",");
                outArr=outArr.filter(obj=>prices.find(result=> {
                   if(result==="0-5000") return obj.price<5000;
                   if(result==="5000-10000") return obj.price>10000&&obj.price>=5000;
                   if(result==="10000-20000") return obj.price<40&&obj.price>=10000;
                   if(result==="20000") return obj.price>=20000;
                }) );
                }
     if(sort){ 
        if(sort==="desc") outArr=outArr.sort((a,b)=>b.price-a.price);
        if(sort==="asc") outArr=outArr.sort((a,b)=>a.price-b.price);
        if(sort==="popularity") outArr=outArr.sort((a,b)=>b.popularity-a.popularity);
     }
    let pageNumber=page;
    let pageSize=5;
    let startIndex = (pageNumber-1)*pageSize;
    let tempArr=[...outArr];
    let empPage=tempArr.splice(startIndex, pageSize);
    let pageInfo={"pageNumber":page,"numberOfPages":Math.ceil(outArr.length/5),"numOfItems":empPage.length,"totalItemCount":outArr.length};
    let data ={data:empPage,pageInfo};
    res.send(data);
});
app.get("/products/Cameras/:type?",function(req,res){
    let q=req.query.q;
    let type=req.params.type;
    let brand=req.query.brand;
    let rating=req.query.rating;
    let assured= req.query.assured;
    let price= req.query.price;
   let sort=req.query.sort;
    let page= +req.query.page;
    let outArr=cameras;
    console.log(type,q,brand);
    if(type)  outArr=outArr.filter(obj=>obj.type===type);
    if(q)  outArr=outArr.filter(obj=>obj.brand.toLowerCase().indexOf(q) >= 0||obj.category.toLowerCase().indexOf(q) >= 0||
    obj.name.toLowerCase().indexOf(q) >= 0||obj.type.toLowerCase().indexOf(q) >= 0);
 if(assured)  outArr=outArr.filter(obj=>obj.assured===assured);
    if(rating) {
        let ratings=rating.split(",");
        outArr=outArr.filter(obj=>ratings.find(result=> {
           if(result===">1") return obj.rating>=1;
           if(result===">2") return obj.rating>=2;
           if(result===">3") return obj.rating>=3;
           if(result===">4") return obj.rating>=4;
        }) );
        }
        if(brand) {
            let brands=brand.split(",");
            outArr=outArr.filter(obj=>brands.find(result=> {
                if(obj.brand===result) return obj;
            }) );
            }  
        if(price) {
                let prices=computers.split(",");
                outArr=outArr.filter(obj=>prices.find(result=> {
                   if(result==="0-5000") return obj.price<5000;
                   if(result==="5000-10000") return obj.price>10000&&obj.price>=5000;
                   if(result==="10000-20000") return obj.price<40&&obj.price>=10000;
                   if(result==="20000") return obj.price>=20000;
                }) );
                }
     if(sort){ 
        if(sort==="desc") outArr=outArr.sort((a,b)=>b.price-a.price);
        if(sort==="asc") outArr=outArr.sort((a,b)=>a.price-b.price);
        if(sort==="popularity") outArr=outArr.sort((a,b)=>b.popularity-a.popularity);
     }
    let pageNumber=page;
    let pageSize=5;
    let startIndex = (pageNumber-1)*pageSize;
    let tempArr=[...outArr];
    let empPage=tempArr.splice(startIndex, pageSize);
    let pageInfo={"pageNumber":pageNumber,"numberOfPages":Math.ceil(outArr.length/5),"numOfItems":empPage.length,"totalItemCount":outArr.length};
    let data ={data:empPage,pageInfo};
    res.send(data);
});


 exports.app = functions.https.onRequest(app);
