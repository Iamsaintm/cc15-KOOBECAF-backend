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
];

async function seedDatabase() {
    // await prisma.user.createMany({ data: user });
    // await prisma.category.createMany({ data: category });
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
