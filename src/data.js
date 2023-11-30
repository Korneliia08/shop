import imageJewelery from "./assets/images/jewelery.webp";
import imageclothestMen from "./assets/images/clothestMen.jpg";
import imageclothestWoman from "./assets/images/clothestForWomen.jpg";

const data = {
  header: {
    nav: {
      title: "NORTH POLE",
      links: [
        {
          link: "/#header",
          name: "MAIN",
        },

        {
          link: "/#category",
          name: "SHOP",
        },

        {
          link: "/#about",
          name: "ABOUT",
        },

        {
          link: "/#contacts",
          name: "CONTACTS",
        },
      ],
    },
    title: "GET READY TO THE ADVENTURE",
  },
  subscribe: {
    titleFirst: "SUBSCRIBE TO THE NEWSLETTER",
    titleSecond: "AND BE THE FIRST TO KNOW THE NEWS",
  },
  chooseCategory: [
    {
      title: "Women's clothing",
      img: imageclothestWoman,
      url: "some",
    },
    {
      title: "Men's clothing",
      img: imageclothestMen,
      url: "some",
    },
    {
      title: "Jewelery",
      img: imageJewelery,
      url: "some",
    },
  ],
  footer: "© NORTH POLE. Site created by Korneliia Mushak",
};
export default data;
