Legion
chaosregion
Invisible

Legion — 11/14/2023 5:20 PM
const bcrypt = require("bcryptjs");
const prisma = require("../src/models/prisma");

const hashPassword = bcrypt.hashSync("12345678", 10);

const user = [
Expand
message.txt
31 KB
﻿
const bcrypt = require("bcryptjs");
const prisma = require("../src/models/prisma");

const hashPassword = bcrypt.hashSync("12345678", 10);

const user = [
    {
        email: "saint@gmail.com",
        password: hashPassword,
        firstName: "Saint",
        lastName: "Nevers",
        role: "ADMIN",
        mobile: "0101010101",
    },
    {
        email: "b@gmail.com",
        password: hashPassword,
        firstName: "Bee",
        lastName: "Baba",
        role: "USER",
        mobile: "0101010102",
    },
    {
        email: "song@gmail.com",
        password: hashPassword,
        firstName: "Song",
        lastName: "Boe",
        role: "USER",
        mobile: "0101010103",
    },
    {
        email: "nook@gmail.com",
        password: hashPassword,
        firstName: "Nook",
        lastName: "Wow",
        role: "USER",
        mobile: "0101010104",
    },
    {
        email: "mix@gmail.com",
        password: hashPassword,
        firstName: "Mix",
        lastName: "keyMouse",
        role: "USER",
        mobile: "0101010105",
    },
    {
        email: "high@gmail.com",
        password: hashPassword,
        firstName: "High",
        lastName: "Hope",
        role: "USER",
        mobile: "0101010106",
    },
];

const category = [
    { typeOfCategory: "VEHICLES" },
    { typeOfCategory: "PROPERTY_FOR_RENT" },
    { typeOfCategory: "APPAREL" },
    { typeOfCategory: "CLASSIFIEDS" },
    { typeOfCategory: "CLOTHING" },
    { typeOfCategory: "ELECTRONICS" },
    { typeOfCategory: "ENTERTAINMENT" },
    { typeOfCategory: "FAMILY" },
    { typeOfCategory: "GARDEN_AND_OUTDOOR" },
    { typeOfCategory: "HOBBIES" },
    { typeOfCategory: "HOME_GOODS" },
    { typeOfCategory: "MUSICAL_INSTRUMENTS" },
    { typeOfCategory: "OFFICE_SUPPLIES" },
    { typeOfCategory: "PETS_SUPPLIES" },
    { typeOfCategory: "SPORTING_GOODS" },
    { typeOfCategory: "TOYS_AND_GAMES" },
];

const Product = [
    {
        productName: "McLaren 720s",
        productPrice: "29999999",
        description: "MCLAREN 720S Coupe Performance Great Conditions ปี 2021",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "McLaren",
        vehicleModel: "720s",
        vehicleYears: 2021,
        userId: 2,
        categoryId: 1,
    },
    {
        productName: "Ferrari F430",
        productPrice: "9999999",
        description: "เครื่องยนต์  4300cc V8  490แรงม้า",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "Ferrari ",
        vehicleModel: "F430",
        vehicleYears: 2007,
        userId: 3,
        categoryId: 1,
    },
    {
        productName: "หมู่บ้านฟลอร่าวิลล์สุวินทวงศ์ 38",
        productPrice: "2700000",
        description: "หมู่บ้านฟลอร่าวิลล์สุวินทวงศ์ 38",
        latitude: 13.758095,
        longitude: 100.535226,
        homeProperty: "SALE",
        homeType: "HOUSE",
        bedroomQuantity: 3,
        bathroomQuantity: 2,
        homeAddress: "ซอยสุวินทวงศ์ 38 แขวงลำผักชี เขตหนองจอก",
        userId: 4,
        categoryId: 2,
    },
    {
        productName: "หมู่บ้าน เศรณีวิลล่า",
        productPrice: "40000",
        latitude: 13.758095,
        longitude: 100.535226,
        homeProperty: "RENT",
        homeType: "HOUSE",
        bedroomQuantity: 3,
        bathroomQuantity: 2,
        homeAddress: "ต.พิมลราช อ.บางบัวทอง นนทบุรี 11110",
        userId: 4,
        categoryId: 2,
    },
    {
        productName: "ชุดฮาโลวีน",
        productPrice: "200",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 5,
    },
    {
        productName: "Harry potter Cosplay Fullset ",
        productPrice: "379",
        description: "Fullset ครบที่สุด ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 5,
    },
    {
        productName: "Basketball ",
        productPrice: "999",
        description: "Autograph by Michael C Bordan ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 15,
    },
    {
        productName: "Football ",
        productPrice: "899",
        description: "Autograph by Michael D Bordan ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 15,
    },
    {
        productName: "Sumsang S23",
        productPrice: "29999",
        description: "Samsung",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 6,
    },
    {
        productName: "Sony Xperai 1V",
        productPrice: "29999",
        description: "Sony",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 6,
    },
    {
        productName: "Iphone 15 ",
        productPrice: "39999",
        description: "Apple",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 6,
    },
    {
        productName: "Hanuted house ",
        productPrice: "9999999",
        description: "Hoia-Baciu Forest, Romania",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 2,
    },
    {
        productName: "Pet house",
        productPrice: "9999",
        description: "For your pet",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 14,
    },
    {
        productName: "Pet collar ",
        productPrice: "399",
        description: "For your pet",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 1,
        categoryId: 14,
    },
    {
        productName: "MHX shirt",
        productPrice: "599",
        description: "From monster hunter",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 1,
        categoryId: 5,
    },
    {
        productName: "JJJK shirt",
        productPrice: "599",
        description: "From jujutsu kaisen",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 1,
        categoryId: 5,
    },
    {
        productName: "MEISTERSTÜCKs",
        productPrice: "599",
        description: "MEISTERSTÜCK GOLD-COATED FOUNTAIN PEN",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 1,
        categoryId: 13,
    },
    {
        productName: "HBA pencil",
        productPrice: "599",
        description: "Pencil for you",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 2,
        categoryId: 13,
    },
    {
        productName: "ซออู้ ",
        productPrice: "2999",
        description: "ซออู้ (ไม้ชิงชัน) อย่างดี คัดพิเศษ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 2,
        categoryId: 12,
    },
    {
        productName: "2-seat sofa",
        productPrice: "10999",
        description:
            "a gray couch with a wooden legs and a black cushion on top of a white wall with a white background",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 2,
        categoryId: 11,
    },
    {
        productName: "Ottoman bed",
        productPrice: "17990",
        description: "This bed gives you spacious storage without taking up more floor space.",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 2,
        categoryId: 11,
    },
    {
        productName: "LIMITLESS RTH",
        productPrice: "9000",
        description:
            " a bow true to its name. This youth and hunting compound bow is highly-adjustable from 25-50 lbs.",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 2,
        categoryId: 10,
    },
    {
        productName: "Flexi Hose Expandable",
        productPrice: "1600",
        description:
            "The Flexi Hose is an expandable garden hose that automatically expands up to 3 times its original length",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 3,
        categoryId: 9,
    },
    {
        productName: "Solar Garden Lights ",
        productPrice: "1700",
        description:
            "These Signature Garden Solar Garden Lights are classic, solar-powered garden lights that illuminate your landscaping",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 3,
        categoryId: 9,
    },
    {
        productName: "Nikee",
        productPrice: "5900",
        description:
            "ลุคและสัมผัสนําทุกอย่างที่คุณหลงรักในกลิ่นอายยุค 80 ที่คุณชื่นชอบกลับมาอีกครั้ง",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 3,
        categoryId: 3,
    },
    {
        productName: "Air Max SYSTM",
        productPrice: "3699",
        description:
            "ลุคและสัมผัสแบบ Max Air Max SYSTM นําทุกอย่างที่คุณหลงรักในกลิ่นอายยุค 80 ที่คุณชื่นชอบกลับมาอีกครั้ง",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 3,
        categoryId: 3,
    },
    {
        productName: "Kneeling Pad",
        productPrice: "2900",
        description: "Costway Folding Sturdy Garden Kneeler Gardener Kneeling Pad & Cushion Seat Knee Pad Seat - Green",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Bug Zapper Lantern",
        productPrice: "2900",
        description: "3-in-1 Waterproof Bug Zapper Lantern ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Garden Tool Cart ",
        productPrice: "3999",
        description: "Costway Collapsible Outdoor Utility Wagon Folding Garden Tool Cart - Gray",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Planter Patio Balcony",
        productPrice: "6000",
        description: "3-Tier Raised Garden Bed Vertical Freestanding Elevated Planter Patio Balcony - Brown",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Box Shelf Standing",
        productPrice: "5700",
        description: "Raised Garden Bed Elevated Planter Box Shelf Standing Garden Herb Garden Wood - Natural",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Mini Walk In Outdoor ",
        productPrice: "3700",
        description: "Costway Portable Mini Walk In Outdoor 4 Tier 8 Shelves Greenhouse - Green",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 4,
        categoryId: 9,
    },
    {
        productName: "Gundam F91",
        productPrice: "2000",
        description: "Bandai Hobby MG 1/100 Gundam F91 (Ver 2.0) Gundam F91",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam Barbatos",
        productPrice: "2000",
        description: "Gundam IBO Gundam Barbatos, Bandai Spirits MG 1/100",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam 00V",
        productPrice: "2000",
        description: "Bandai Hobby MG 1/100 00 QAN[T] Full Saber Mobile Suit Gundam 00V: Battlefield Record",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam Age-II",
        productPrice: "2000",
        description: "Bandai Hobby MG Gundam Age-II Magnum Gundam Build Divers Model Kit",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam Sentinel FAZZ",
        productPrice: "2000",
        description: "Gundam Sentinel FAZZ (Ver.Ka), Bandai Spirits MG 1/100",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam Seed Eclipse",
        productPrice: "2000",
        description: "Bandai Hobby - Gundam Seed Eclipse - Eclipse Gundam, Bandai Spirits Hobby MG 1/100",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Wing Gundam Zero",
        productPrice: "2900",
        description: "Bandai Hobby Wing Gundam Zero (EW) Ver.Ka Endless Waltz, Bandai Spirits MG 1/100 Model Kit",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam Kyrios",
        productPrice: "2900",
        description: "Gundam 00: Gundam Kyrios, Bandai Spirits MG 1/100",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Gundam 111",
        productPrice: "3000",
        description: "Gundam",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 16,
    },
    {
        productName: "Klipsch Cinema 400 ",
        productPrice: "29999",
        description: "Klipsch Cinema 400 Sound Bar ลำโพงซาวด์บาร์ Black",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 7,
    },
    {
        productName: "Devialet Dione Soundbar",
        productPrice: "90000",
        description: "ลำโพง Devialet Dione Soundbar",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 7,
    },
    {
        productName: "Soundbar",
        productPrice: "99999",
        description: "ลำโพง ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 7,
    },

    {
        productName: "Tabletop Fire Pit",
        productPrice: "600",
        description:
            "Napoli Tabletop Fire Pit. Indoor Fire Pit and Balcony Decor. 5 Table Top Fire Pit Bowl",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 8,
    },
    {
        productName: "Microwave Popcorn",
        productPrice: "700",
        description:
            "The Original Salbree Microwave Popcorn Popper Machine, Silicone Popcorn Maker",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 8,
    },
    {
        productName: "Memory Keepsake Dish Set",
        productPrice: "7000",
        description: "Artist Melissa Reddick turns your cherished photos into a trio of tiny mementos.",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 6,
        categoryId: 8,
    },

    {
        productName: "Lesta Model X",
        productPrice: "2000000",
        description: "With the most power and quickest acceleration of any SUV",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "Tesla",
        vehicleModel: "X",
        vehicleYears: 2023,
        userId: 2,
        categoryId: 1,
    },
    {
        productName: "Donha e:NS1 2023",
        productPrice: "1300000",
        description: "First Donha EV car",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "Donha",
        vehicleModel: "e:NS1 2023",
        vehicleYears: 2023,
        userId: 5,
        categoryId: 1,
    },

    {
        productName: "WMB X1 2023",
        productPrice: "3000000",
        description: "พาคุณไปกับความมั่นใจในการเดินทางได้อย่างสบายใจด้วยดีไซน์",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "WMB",
        vehicleModel: "X1 2023",
        vehicleYears: 2023,
        userId: 5,
        categoryId: 1,
    },

    {
        productName: "Dorf Ranger PLATINUM",
        productPrice: "3000000",
        description:
            "เครื่องยนต์ดีเซล V6 สูบ ขนาด 3.0 ลิตร 2,993 ซีซี. พ่วงเทอร์โบ พละกำลังสูงสุด 250 แรงม้า ที่ 3,250 รอบ/นาที ",
        latitude: 13.758095,
        longitude: 100.535226,
        vehicleType: "CAR",
        vehicleBrand: "Dorf",
        vehicleModel: "Ranger PLATINUM",
        vehicleYears: 2023,
        userId: 5,
        categoryId: 1,
    },
    {
        productName: "Masters Of The Universe He-Man 40th Anni Figure",
        productPrice: "1500",
        description:
            "The Masters of the Universe Masterverse Collection celebrates MOTU content from Masters of the Universe Revelation to New Eternia.",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 4,
    },
    {
        productName: "Steve light messenger bag",
        productPrice: "230000",
        description:
            "Messenger bag in Togo calfskin with adjustable shoulder strap, two pockets and palladium-plated hardware Made in France",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 4,
    },
    {
        productName: "Eco-Friendly Bag",
        productPrice: "100",
        description: "An eco-friendly bag that is lightweight and can be folded up into a compact size.",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 4,
    },
    {
        productName: "Backpack, Navy Blue",
        productPrice: "100",
        description: "SPACIOUS AND LIGHTWEIGHT: Light weight & spacious laptop bag for men comes with 3 compartments",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 4,
    },
    {
        productName: "SANTOS DE CARTIER",
        productPrice: "48100",
        description: "Santos de Cartier sunglasses, half-rimmed metal, ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 3,
    },
    {
        productName: "Ophtus Zeo",
        productPrice: "1500",
        description: "แว่นสำหรับผู้รู้ความจริง",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 3,
    },
    {
        productName: "CK one",
        productPrice: "1500",
        description: "Just cologne",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 3,
    },
    {
        productName: "Club De Nuit Intense",
        productPrice: "1300",
        description: "Armaf Club de Nuit Intense Man is a woody, spicy fragrance with a citrusy twist",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 3,
    },
    {
        productName: "Cool Water Cologne",
        productPrice: "1500",
        description: "If you're looking for something alluring to wear on warm summer nights, you've come to the right place. ",
        latitude: 13.758095,
        longitude: 100.535226,
        userId: 5,
        categoryId: 3,
    },

];

const wishlist = [
    {
        productId: 1,
        userId: 3,
    },
    {
        productId: 2,
        userId: 5,
    },
    {
        productId: 1,
        userId: 4,
    },
    {
        productId: 2,
        userId: 4,
    },
];

const image = [
    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/ckfp3lqnuhyyo3pipxnn",
        productId: 1,
    },
    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/vp7vziogkgoqeb760far",
        productId: 2,
    },
    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/jpl8p2nn5z2gij0oyiev",
        productId: 3,
    },
    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/p8nvefxdck3kk6fnwl1w",
        productId: 4,
    },

    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/nmjhczrgujy2vmrgqkpb",
        productId: 5,
    },
    {
        image: "https://res.cloudinary.com/dyaznauq8/image/upload/f_auto,q_auto/kngzmdxzkzlsiaxwscuz",
        productId: 6,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699846737/slrpxxaturstl4tqvgnd.png",
        productId: 7,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699846589/x7i7rqz8qh0vofbblq1t.png",
        productId: 8,
    },

    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699846935/vjudiwcdhbqwgkyhrppy.webp",
        productId: 9,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699849681/bljtpabks3hpwijhcmze.jpg",
        productId: 10,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699850283/ytth3ry0psdd3zl5zsxo.jpg",
        productId: 11,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699856678/s14p1ymnlgyxrfkgxnwg.jpg",
        productId: 12,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699856973/aigopxtougoamupircew.jpg",
        productId: 13,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699857459/htrlxlmm8jjf7znqddbx.webp",
        productId: 14,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699857811/vitn9udckm5zdgbdj6bn.webp",
        productId: 15,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699857957/fm5qsnws67h3f4igoyyc.webp",
        productId: 16,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699858478/axqflm8l2zgj8ra1aksp.webp",
        productId: 17,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699858780/hp1yfz55212x7oessquy.jpg",
        productId: 18,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699860478/bo2bkcvq7gsdidgbgf4p.jpg",
        productId: 19,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699860610/sxxvjsu1snpf5e1mthet.webp",
        productId: 20,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699861002/j3hejfdu0oplr66b7xt2.webp",
        productId: 21,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699862209/k9yl5m4usceexkozeovx.jpg",
        productId: 22,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699862418/xregiyyqicu2dpr210hv.jpg",
        productId: 23,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699862512/zasc8tlceibtj95aavox.jpg",
        productId: 24,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699863092/kakqakuunx0eiyewhc1q.webp",
        productId: 25,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942090/xgtns62jzigfdt7lmpm8.webp",
        productId: 26,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940944/cucvydcjtosvvwedfivf.jpg",
        productId: 27,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940943/imk0nsdl3i0leircxmr6.jpg",
        productId: 28,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940944/vcdrqduxsbopofri04kq.jpg",
        productId: 29,
    },

    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940944/kjcg5wddnui3mu9qnemc.jpg",
        productId: 30,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940944/klykhx0i1w1by2etfpje.jpg",
        productId: 31,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699940945/c5wjjmvey12s9oteaadb.jpg",
        productId: 32,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942530/xjmuxurnbnez2em1qeky.jpg",
        productId: 33,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942530/w0x0z0nkpzryqzpfd9hj.jpg",
        productId: 34,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942530/hdv7zyd3t8p9evhwvkgk.jpg",
        productId: 35,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942531/xyqisycbnwqldjqoof8h.jpg",
        productId: 36,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942531/xyqisycbnwqldjqoof8h.jpg",
        productId: 37,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942531/wgyylbqapsci0ifs3fmg.jpg",
        productId: 38,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942531/efd2bszcnxsrs3wilmlj.jpg",
        productId: 39,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942531/bhefodpjq8qujnsogjio.jpg",
        productId: 40,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699942545/uqjbhs5n1xi28ojtuzwa.jpg",
        productId: 41,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699943907/ljemh4k9k8tcvcw7nsub.webp",
        productId: 42,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699943981/cailp71mojduq7ulmobs.jpg",
        productId: 43,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699943907/ytnpndqsjrk27kxjnqih.jpg",
        productId: 44,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699944209/v2aofqoxnp0gw2ndgsv1.jpg",
        productId: 45,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699944210/fqjyugabo6rd8izgltst.jpg",
        productId: 46,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699944211/wkxnceyqvu95d0bpvtil.webp",
        productId: 47,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699945189/ttkmm1uzpcgyqtjl0uvi.jpg",
        productId: 48,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699945189/ktov6jxfc3j6ez44edna.jpg",
        productId: 49,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699945189/fl738ohlliq9utnwng6x.jpg",
        productId: 50,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699945190/bpqof0emyfpgroxzjbib.jpg",
        productId: 51,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699950687/gswach4dyicnugvncgzo.jpg",
        productId: 52,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699950687/vlsleqgbjbbme6nl2v7m.webp",
        productId: 53,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699951763/c7tns55oanjqykq5lo30.webp",
        productId: 54,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699951763/tcxtgsjmk5nsuwlu6h26.jpg",
        productId: 55,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699953375/bgnscbbyr9pvwru6habu.webp",
        productId: 56,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699953376/fusgbvyuatjsyta8guoj.png",
        productId: 57,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699953687/xccuxc2luqw5sguexrgw.webp",
        productId: 58,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699953687/i6bznzngdhupk94mwq2f.webp",
        productId: 59,
    },
    {
        image: "https://res.cloudinary.com/dcvgoamhu/image/upload/v1699953688/sq8s3puimn9qsnkerzim.webp",
        productId: 60,
    },
    
];

async function seedDatabase() {
    await prisma.user.createMany({ data: user });
    await prisma.category.createMany({ data: category });
    await prisma.Product.createMany({ data: Product });
    await prisma.wishlist.createMany({ data: wishlist });
    await prisma.image.createMany({ data: image });
}

seedDatabase()
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        prisma.$disconnect();
    });
message.txt
31 KB