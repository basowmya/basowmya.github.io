/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var data = {
  "categories": [
    {
      "id": 1,
      "name": "Oil Paintings",
      "image": "img/items/oil-01-s.jpg"
    }, {
      "id": 2,
      "name": "Kalamkari",
      "image": "img/items/kal-01-s.jpg"
    }, {
      "id": 3,
      "name": "Zentangles",
      "image": "img/items/zen-01-s.jpg"
    }, {
      "id": 4,
      "name": "Miscellaneous",
      "image": "img/items/mur-01-s.jpg"
    }, {
      "id": 5,
      "name": "Hand Painted Vases",
      "image": "img/items/pot-01-s.jpg"
    }
  ],
  "items": [
    {
      "id": "oil-01",
      "name": "The Maharashtrian Lady",
      "category": 1,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Oil on canvas",
      "images": {
        "small": ["img/items/oil-01-s.jpg"],
        "large": ["img/items/oil-01-l.jpg"]
      }
    }, {
      "id": "oil-02",
      "name": "Lady Playing Swarbat",
      "category": 1,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Oil on canvas",
      "images": {
        "small": ["img/items/oil-02-s.jpg"],
        "large": ["img/items/oil-02-l.jpg"]
      }
    }, {
      "id": "oil-03",
      "name": "The Buddha",
      "category": 1,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Oil on canvas",
      "images": {
        "small": ["img/items/oil-03-s.jpg"],
        "large": ["img/items/oil-03-l.jpg"]
      }
    }, {
      "id": "oil-04",
      "name": "Toy Seller",
      "category": 1,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Oil on canvas",
      "images": {
        "small": ["img/items/oil-04-s.jpg"],
        "large": ["img/items/oil-04-l.jpg"]
      }
    }, {
      "id": "oil-05",
      "name": "Weeping Boy",
      "category": 1,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Oil on canvas",
      "images": {
        "small": ["img/items/oil-05-s.jpg"],
        "large": ["img/items/oil-05-l.jpg"]
      }
    }, {
      "id": "kal-01",
      "name": "Ganesha Dancing",
      "category": 2,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-01-s.jpg"],
        "large": ["img/items/kal-01-l.jpg"]
      }
    }, {
      "id": "kal-02",
      "name": "Saraswathi",
      "category": 2,
      "price": 12000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-02-s.jpg"],
        "large": ["img/items/kal-02-l.jpg"]
      }
    }, {
      "id": "kal-03",
      "name": "Peacock",
      "category": 2,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-03-s.jpg"],
        "large": ["img/items/kal-03-l.jpg"]
      }
    }, {
      "id": "kal-04",
      "name": "Radha Krishna",
      "category": 2,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-04-s.jpg"],
        "large": ["img/items/kal-04-l.jpg"]
      }
    }, {
      "id": "kal-05",
      "name": "The Buddha",
      "category": 2,
      "price": 10000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-05-s.jpg"],
        "large": ["img/items/kal-05-l.jpg"]
      }
    }, {
      "id": "kal-06",
      "name": "Twin Elephants",
      "category": 2,
      "price": 8000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-06-s.jpg"],
        "large": ["img/items/kal-06-l.jpg"]
      }
    }, {
      "id": "kal-07",
      "name": "Twin Horses",
      "category": 2,
      "price": 8000,
      "size": "24\" x 36\" (inches) with frame",
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": ["img/items/kal-07-s.jpg"],
        "large": ["img/items/kal-07-l.jpg"]
      }
    }, {
      "id": "zen-01",
      "name": "Humming Bird",
      "category": 3,
      "price": 2500,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": ["img/items/zen-01-s.jpg"],
        "large": ["img/items/zen-01-l.jpg"]
      }
    }, {
      "id": "zen-02",
      "name": "Bird 2",
      "category": 3,
      "price": 2500,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": ["img/items/zen-02-s.jpg"],
        "large": ["img/items/zen-02-l.jpg"]
      }
    }, {
      "id": "zen-03",
      "name": "Bird 3",
      "category": 3,
      "price": 2500,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": ["img/items/zen-03-s.jpg"],
        "large": ["img/items/zen-03-l.jpg"]
      }
    }, {
      "id": "zen-04",
      "name": "Bird 4",
      "category": 3,
      "price": 2500,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": ["img/items/zen-04-s.jpg"],
        "large": ["img/items/zen-04-l.jpg"]
      }
    }, {
      "id": "zen-05",
      "name": "Floral Girl",
      "category": 3,
      "price": 2500,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": ["img/items/zen-05-s.jpg"],
        "large": ["img/items/zen-05-l.jpg"]
      }
    }, {
      "id": "mur-01",
      "name": "Lady with Pot",
      "category": 4,
      "price": 8000,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Mural",
      "images": {
        "small": ["img/items/mur-01-s.jpg"],
        "large": ["img/items/mur-01-l.jpg"]
      }
    }, {
      "id": "mar-01",
      "name": "Lady Playing Instrument",
      "category": 4,
      "price": 8000,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Marble Painting",
      "images": {
        "small": ["img/items/mar-01-s.jpg"],
        "large": ["img/items/mar-01-l.jpg"]
      }
    }, {
      "id": "pcl-01",
      "name": "Fruit Seller",
      "category": 4,
      "price": 8000,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Colour Pencils",
      "images": {
        "small": ["img/items/pcl-01-s.jpg"],
        "large": ["img/items/pcl-01-l.jpg"]
      }
    }, {
      "id": "mnk-01",
      "name": "Rajasthani woman",
      "category": 4,
      "price": 8000,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Meenakari",
      "images": {
        "small": ["img/items/mnk-01-s.jpg"],
        "large": ["img/items/mnk-01-l.jpg"]
      }
    }, {
      "id": "acr-01",
      "name": "Egyptian Pharoah",
      "category": 4,
      "price": 8000,
      "size": "13\" x 15.5\" (inches) with frame",
      "description": "Media - Acrylic Paint",
      "images": {
        "small": ["img/items/acr-01-s.jpg"],
        "large": ["img/items/acr-01-l.jpg"]
      }
    }, {
      "id": "pot-01",
      "name": "Leopard Prints",
      "category": 5,
      "price": 300,
      "size": "6\" x 8\" (width x height in inches)",
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": ["img/items/pot-01-s.jpg"],
        "large": ["img/items/pot-01-l.jpg"]
      }
    }, {
      "id": "pot-02",
      "name": "Elephants at Sunset",
      "category": 5,
      "price": 400,
      "size": "6\" x 8\" (width x height in inches)",
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": ["img/items/pot2-0-s.jpg"],
        "large": ["img/items/pot2-0-l.jpg"]
      }
    }, {
      "id": "pot-03",
      "name": "Giraffes at Sunset",
      "category": 5,
      "price": 400,
      "size": "6\" x 8\" (width x height in inches)",
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": ["img/items/pot-03-s.jpg"],
        "large": ["img/items/pot-03-l.jpg"]
      }
    }, {
      "id": "pot-04",
      "name": "Kathakali face",
      "category": 5,
      "price": 600,
      "size": "6\" x 8\" (width x height in inches)",
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": ["img/items/pot-04-s.jpg"],
        "large": ["img/items/pot-04-l.jpg"]
      }
    }, {
      "id": "pot-05",
      "name": "Ajantha Ellora",
      "category": 5,
      "price": 800,
      "size": "6\" x 8\" (width x height in inches)",
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": ["img/items/pot-05-s.jpg"],
        "large": ["img/items/pot-05-l.jpg"]
      }
    }
  ]
};

module.exports = data;
