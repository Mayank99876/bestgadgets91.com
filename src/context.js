import React, { Component } from "react";
import laptop1 from "./images/laptops/acer aspire 5 i5 gaming.png";
import laptop2 from "./images/laptops/asus vivobook.png";
import laptop3 from "./images/laptops/dell 15 i5.png";
import laptop4 from "./images/laptops/hp laptop 15.png";
import laptop5 from "./images/laptops/hp victus gaming.png";
import laptop6 from "./images/laptops/lenovo ideapad gaming 3 ryzen 1650.png";
import mobile1 from "./images/mobiles/iqoo neo 7 5g.png";
import mobile2 from "./images/mobiles/iqq neo 7.png";
import mobile3 from "./images/mobiles/redmi note 12 5g.png";
import mobile4 from "./images/mobiles/redmi note 12.png";
import mobile5 from "./images/mobiles/samsung galaxy m13.png";
import mobile6 from "./images/mobiles/samsung galaxy m14 5g.png";
import tablet1 from "./images/tablets/lenovo tab m10 fhd.png";
import tablet2 from "./images/tablets/lenovo tab m10.png";
import tablet3 from "./images/tablets/oneplus pad go.png";
import tablet4 from "./images/tablets/samsung galaxy tab a9+.png";
import tablet5 from "./images/tablets/samsung galaxy tab a8.png";
import tablet6 from "./images/tablets/xiaomi pad 6.png";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    laptops: [
      {
        id: 1,
        category: "Laptops",
        imageUrl: laptop1,
        title: "Acer Aspire 5",
        description:
          "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6' FHD Display, 1.8 Kg)",
        price: "₹51,990",
      },
      {
        id: 2,
        category: "Laptops",
        imageUrl: laptop2,
        title: "Asus vivobook",
        description:
          "ASUS Vivobook 15, IntelCore i3-1215U 12th Gen, 15.6' (39.62 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/Backlit/42WHr/1.70/Blue), X1504ZA-NJ326WS",
        price: "₹36,990",
      },
      {
        id: 3,
        category: "Laptops",
        imageUrl: laptop3,
        title: "Dell 15",
        description:
          "Dell 15 Laptop, Intel Core i5-1135G7 Processor/ 8GB/ 1TB+256GB SSD/15.6'(39.62cm) FHD with Comfort View, Mobile Connect/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Black Color/ 1.69kg",
        price: "₹45,990",
      },
      {
        id: 4,
        category: "Laptops",
        imageUrl: laptop4,
        title: "HP Pavilion 15",
        description:
          "HP Pavilion 15, AMD Ryzen 5 5625U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, AMD Radeon Graphics, FPR, Backlit KB, Audio by B&O, Thin & Light (Win 11, MSO 2021, Silver, 1.75 kg), eh2047AU",
        price: "₹61,070",
      },
      {
        id: 5,
        category: "Laptops",
        imageUrl: laptop5,
        title: "HP Victus",
        description:
          "HP Victus Gaming Latest 12th Gen Intel Core i5 12450H Processor 15.6 inch(39.6 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/GTX 1650 4GB Graphics/144Hz/BL KB/Win 11/MSO/B&O/Alexa/Xbox Pass), 15-fa0070TX",
        price: "₹56,990",
      },
      {
        id: 6,
        category: "Laptops",
        imageUrl: laptop6,
        title: "Lenovo Ideapad gaming 3",
        description:
          "Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6' (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA GTX 1650/120Hz/Win 11/Backlit Keyboard/3months Game Pass/Shadow Black/2.25Kg), 82K2025WIN",
        price: "₹47,990",
      },
    ],

    mobiles: [
      {
        id: 1,
        category: "Mobiles",
        imageUrl: mobile1,
        title: "IQOO Neo 7 5G",
        description:
          "iQOO Neo 7 5G (Interstellar Black, 8GB RAM, 128GB Storage) | Dimensity 8200, only 4nm Processor in The Segment| 50% Charge in 10 mins| Motion Control & 90 FPS Gaming",
        price: "₹27,999",
      },
      {
        id: 2,
        category: "Mobiles",
        imageUrl: mobile2,
        title: "IQOO Neo 7 Pro 5G",
        description:
          "iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP OIS Camera | AG Glass Design",
        price: "₹32,999",
      },
      {
        id: 3,
        category: "Mobiles",
        imageUrl: mobile3,
        title: "Redmi Note 12 5G",
        description:
          "Redmi Note 12 5G Frosted Green 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
        price: "₹15,998",
      },
      {
        id: 4,
        category: "Mobiles",
        imageUrl: mobile4,
        title: "Redmi Note 12",
        description: "Redmi Note 12 (Sunrise Gold, 6GB RAM, 64GB Storage)",
        price: "₹11,999",
      },
      {
        id: 5,
        category: "Mobiles",
        imageUrl: mobile5,
        title: "Samsung Galaxy M13",
        description:
          "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        price: "₹9,228",
      },
      {
        id: 6,
        category: "Mobiles",
        imageUrl: mobile6,
        title: "Samsung Galaxy M14 5G",
        description:
          "Samsung Galaxy M14 5G (Berry Blue,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
        price: "₹13,039",
      },
    ],

    tablets: [
        {
          id: 1,
          category: "Tablets",
          imageUrl: tablet1,
          title: "Lenovo tab M10",
          description: "Lenovo Tab M10 FHD 3rd Gen| 10.1 Inch (25.65 cm) | 4 GB RAM, 64 GB ROM| Wi-Fi | Full HD Display| Dual Speakers| Octa-Core Processor (Storm Grey)",
          price: "₹9,999",
    },
    {
        id: 2,
        category: "Tablets",
        imageUrl: tablet2,
        title: "Lenovo Tab M10",
        description: "Lenovo Tab M10 FHD Plus (3rd Gen) (10.61 inch (26.94 cm), 6 GB, 128 GB, Wi-Fi), Storm Grey with Qualcomm Snapdragon Processor, 7700 mAH Battery and Quad Speakers with Dolby Atmos",
        price: "₹14,999",
  },
  {
    id: 3,
    category: "Tablets",
    imageUrl: tablet3,
    title: "OnePlus Pad Go",
    description: "OnePlus Pad Go 28.85cm (11.35 inch) 2.4K 7:5 Ratio ReadFit Eye Care LCD Display, Dolby Atmos Quad Speakers,Wi-Fi Only, 8GB RAM 128 GB ROM Expandable Up-to 1TB, Twin Mint Colour",
    price: "₹19,999",
},
{
    id: 4,
    category: "Tablets",
    imageUrl: tablet4,
    title: "Samsung Galaxy Tab A9+",
    description: "Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Silver",
    price: "₹20,999",
},
{
    id: 5,
    category: "Tablets",
    imageUrl: tablet5,
    title: "Samsung Galaxy Tab A8",
    description: "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
    price: "₹16,999",
},
{
    id: 6,
    category: "Tablets",
    imageUrl: tablet6,
    title: "Xiaomi Pad 6",
    description: "Xiaomi Pad 6| Qualcomm Snapdragon 870| 144Hz Refresh Rate| 6GB, 128GB| 2.8K+ Display (11-inch/27.81cm)|1 Billion Colours| Dolby Vision Atmos| Quad Speakers| Wi-Fi| Gray",
    price: "₹24,999",
},
],
  };

  render(){
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;