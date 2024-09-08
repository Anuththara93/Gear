import home from '../admin/assests/home.svg';
import user from '../admin/assests/user.svg';
import product from '../admin/assests/product.svg';
import order from '../admin/assests/order.svg';
import post2 from '../admin/assests/post2.svg';
import element from '../admin/assests/element.svg';
import note from '../admin/assests/note.svg';
import form1 from '../admin/assests/note.svg';
import calendar from '../admin/assests/calendar.svg';
import setting from '../admin/assests/setting.svg';
import backup from '../admin/assests/backup.svg';
import chart from '../admin/assests/chart.svg';
import log from '../admin/assests/log.svg';
import adjustablebench from '../admin/assests/adjustablebench.png';
import adjustabledecline from '../admin/assests/adjustabledecline.png';
import airbike from '../admin/assests/airbike.png';
import fixedrubberdumbbell from '../admin/assests/fixedrubberdumbbell.jpg';
import fullglove from '../admin/assests/fullglove.png';
import kettlebell from '../admin/assests/kettlebell.jpg';
import standingbag from '../admin/assests/standingbag.png';
import treadmill from '../admin/assests/treadmill.png';

export const menu = [

  {
    id: 1,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/adminlogged",
        icon: user,
      },
      {
        id: 2,
        title: "Products",
        url: "/adminlogged/products",
        icon: product,
      },
      {
        id: 3,
        title: "Orders",
        url: "/adminlogged/orders",
        icon: order,
      },
      {
        id: 4,
        title: "Contact Form",
        url: "/adminlogged/problems",
        icon: post2,
      },
      {
        id: 5,
        title: "Workers",
        url: "/adminlogged/workers",
        icon: post2,
      },
    ],
  }
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1101,
    name: "Amila De Silva",
    email: "amila@gmail.com",
    password: "amila123",
    phone: "076 4456 789",
    address: "Piliyandala"
  },
  {
    id: 1102,
    name: "Kamal Perera",
    email: "kamal@gmail.com",
    password: "kamal123",
    phone: "076 2456 709",
    address: "Maligawatta"
  },
  {
    id: 1103,
    name: "Sunil Gamage",
    email: "sunil@gmail.com",
    password: "sunil123",
    phone: "071 4456 380",
    address: "Piliyandala"
  },
  {
    id: 1104,
    name: "Nihal Weerasingha",
    email: "nihal@gmail.com",
    password: "nihal123",
    phone: "070 4456 222",
    address: "Maharagama"
  },
  {
    id: 1105,
    name: "Pandula Karunarathne",
    email: "pandula@gmail.com",
    password: "pan123",
    phone: "071 4356 334",
    address: "Nugegoda"
  },
  {
    id: 1106,
    name: "Dilhani Ekanayaka",
    email: "dilhani@gmail.com",
    password: "hub123",
    phone: "076 3336 781",
    address: "Delkada"
  },
  {
    id: 1107,
    name: "Ranjan De Silva",
    email: "ranja@gmail.com",
    password: "ran123",
    phone: "077 0456 009",
    address: "Piliyandala"
  },
  {
    id: 1108,
    name: "Pathum Perera",
    email: "pathum@gmail.com",
    password: "apthum123",
    phone: "076 3056 999",
    address: "Thalawathugoda"
  },
  {
    id: 1109,
    name: "Binura Guruge",
    email: "binura@gmail.com",
    password: "binu123",
    phone: "076 9056 083",
    address: "Moratuwa"
  },
  {
    id: 1110,
    name: "Jehan Perera",
    email: "jehan@gmail.com",
    password: "jehan123",
    phone: "076 4456 789",
    address: "Wallawatta"
  }
];

export const products = [
  {
    id: 1,
    img: adjustablebench,
    title: "Adjustable Bench",
    price: 35000,
    quantity: 20,
    category: "Strengthening"
  },
  {
    id: 2,
    img: adjustabledecline,
    title: "Adjustable Decline Bench",
    price: 195000,
    quantity: 12,
    category: "Strengthening"
  },
  {
    id: 3,
    img: airbike,
    title: "Air Bike",
    price: 400000,
    quantity: 7,
    category: "Cardio"
  },
  {
    id: 4,
    img: treadmill,
    title: "Treadmill",
    price: 525000,
    quantity: 4,
    category: "Cardio"
  },
  {
    id: 5,
    img: fixedrubberdumbbell,
    title: "Fixed Rubber Dumbbell",
    price: 25000,
    quantity: 10,
    category: "Free Weight"
  },
  {
    id: 6,
    img: kettlebell,
    title: "Kettle Bell",
    price: 25000,
    quantity: 14,
    category: "Free Weight"
  },
  {
    id: 7,
    img: standingbag,
    title: "Standing Bag",
    price: 79000,
    quantity: 10,
    category: "Punching Range"
  },
  {
    id: 8,
    img: fullglove,
    title: "Full Glove",
    price: 11000,
    quantity: 23,
    category: "Punching Range"
  }
];

export const workers = [
  {
    id: 1,
    name: "Wenura Perera",
    nic: "87234576v",
    phone: "071 2256 799",
    address: "Nugegoda"
  },
  {
    id: 2,
    name: "Pehan De Silva",
    nic: "34523344v",
    phone: "070 3356 189",
    address: "Havelock"
  },
  {
    id: 3,
    name: "Binul Fernando",
    nic: "98234516v",
    phone: "072 4356 709",
    address: "Dehiwala"
  },
  {
    id: 4,
    name: "Lakruwan Weerasingha",
    nic: "99234416v",
    phone: "070 2456 708",
    address: "Moratuwa"
  },
  {
    id: 5,
    name: "Pahasara Perera",
    nic: "91823752v",
    phone: "072 2456 089",
    address: "Panadura"
  },
  {
    id: 6,
    name: "Anil Kulathunga",
    nic: "97231206v",
    phone: "076 2256 088",
    address: "Wallawatta"
  }
];

export const orders = [
  {
    id: 1,
    customerId: 1101,
    orderDescription: "Adjustable Bench",
    totalCost: 35000,
    deliveryAddress: "Piliyandala"
  },
  {
    id: 2,
    customerId: 1104,
    orderDescription: "Air Bike, Treadmill",
    totalCost: 925000,
    deliveryAddress: "Maharagama"
  },
  {
    id: 3,
    customerId: 1105,
    orderDescription: "Adjustable Bench",
    totalCost: 35000,
    deliveryAddress: "Nugegoda"
  },
  {
    id: 4,
    customerId: 1102,
    orderDescription: "Fixed Rubber Dumbbell",
    totalCost: 25000,
    deliveryAddress: "Maligawatta"
  },
  {
    id: 5,
    customerId: 1108,
    orderDescription: "Kettle Bell, Fixed Rubber Dumbbell",
    totalCost: 50000,
    deliveryAddress: "Thalawathugoda"
  },
  {
    id: 6,
    customerId: 1110,
    orderDescription: "Adjustable Bench, Standing Bag",
    totalCost: 114000,
    deliveryAddress: "Wallawatta"
  }
];

export const problems = [
  {
    id: 1,
    name: "Dimal Perera",
    phone: "070 2336 799",
    problems: "I have logging isue."
  },
  {
    id: 2,
    name: "Suren De Silva",
    phone: "072 2326 002",
    problems: "I want to know about delivery chargers."
  },
  {
    id: 3,
    name: "Minura Fernando",
    phone: "077 7726 993",
    problems: "Do you have 20p dumbells?"
  }
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};