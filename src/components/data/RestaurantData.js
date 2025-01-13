export const restaurantData = [
  {
    id: 'SGR',
    restaurantDetails: {
      url: 'https://tinyurl.com/bdda83rr',
      title: 'Spice Garden Restaurant',
      currentOffer: '20% off on all dishes',
      rating: 4.5,
      deliveryTime: '30',
      distance: '2.5 km',
      avgPricePerHead: '500',
      location: {
        latitude: 37.761423,
        longitude: -122.424191,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'SGR_0',
        dishName: 'Butter Chicken',
        description: 'Creamy tomato-based curry',
        price: '₹1078',
        category: 'Main Course',
        restaurantId: 'SGR',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SGR_1',
        dishName: 'Garlic Naan',
        description: 'Soft naan with garlic flavor',
        price: '₹248',
        category: 'Bread',
        restaurantId: 'SGR',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'SGR_2',
        dishName: 'Mango Lassi',
        description: 'Sweet yogurt-based drink',
        price: '₹331',
        category: 'Beverage',
        restaurantId: 'SGR',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'SGR_3',
        dishName: 'Palak Paneer',
        description: 'Spinach and cottage cheese curry',
        price: '₹912',
        category: 'Main Course',
        restaurantId: 'SGR',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'SGR_4',
        dishName: 'Tandoori Chicken',
        description: 'Grilled chicken marinated with spices',
        price: '₹1245',
        category: 'Appetizer',
        restaurantId: 'SGR',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SGR_5',
        dishName: 'Gulab Jamun',
        description: 'Sweet milk-solid balls in syrup',
        price: '₹290',
        category: 'Dessert',
        restaurantId: 'SGR',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Spice Garden Restaurant',
      'Indian food',
      'Butter Chicken',
      'Garlic Naan',
      'Mango Lassi',
      'Palak Paneer',
      'Tandoori Chicken',
      'Gulab Jamun',
      'Spice Garden',
      'curry',
      'naan',
      'dessert',
      'beverage',
      'main course',
      'appetizer',
    ],
  },
  {
    id: 'TP',
    restaurantDetails: {
      url: 'https://shorturl.at/DisK5',
      title: 'Tandoori Palace',
      currentOffer: 'Free dessert with every meal',
      rating: 4.2,
      deliveryTime: '25',
      distance: '1.8 km',
      avgPricePerHead: '600',
      location: {
        latitude: 37.773583,
        longitude: -122.421675,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'TP_0',
        dishName: 'Paneer Tikka',
        description: 'Grilled cottage cheese with spices',
        price: '₹912',
        category: 'Appetizer',
        restaurantId: 'TP',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TP_1',
        dishName: 'Biryani',
        description: 'Fragrant rice with spices and herbs',
        price: '₹995',
        category: 'Main Course',
        restaurantId: 'TP',
        vegetarian: false,
        isGourmet: false,
      },
      {
        id: 'TP_2',
        dishName: 'Gulab Jamun',
        description: 'Sweet deep-fried milk balls',
        price: '₹374',
        category: 'Dessert',
        restaurantId: 'TP',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TP_3',
        dishName: 'Chicken Tikka',
        description: 'Spicy grilled chicken chunks',
        price: '₹1080',
        category: 'Appetizer',
        restaurantId: 'TP',
        vegetarian: false,
        isGourmet: false,
      },
      {
        id: 'TP_4',
        dishName: 'Raita',
        description: 'Yogurt with cucumber and spices',
        price: '₹207',
        category: 'Side',
        restaurantId: 'TP',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TP_5',
        dishName: 'Masala Tea',
        description: 'Spiced Indian tea',
        price: '₹248',
        category: 'Beverage',
        restaurantId: 'TP',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Indian food',
      'Paneer Tikka',
      'Biryani',
      'Gulab Jamun',
      'Chicken Tikka',
      'Raita',
      'Masala Tea',
      'Tandoori Palace',
      'cottage cheese',
      'spicy',
      'grilled',
      'tea',
      'side dish',
      'appetizer',
      'main course',
      'dessert',
      'beverage',
    ],
  },
  {
    id: 'RIC',
    restaurantDetails: {
      url: 'https://shorturl.at/1UuwE',
      title: 'Royal Indian Cuisine',
      currentOffer: 'Buy 1 Get 1 Free on Appetizers',
      rating: 4.7,
      deliveryTime: '40',
      distance: '3.0 km',
      avgPricePerHead: '200',
      location: {
        latitude: 39.076,
        longitude: -123.8777,
      },
      vegetarian: true,
    },
    menu: [
      {
        id: 'RIC_0',
        dishName: 'Samosa',
        description: 'Crispy pastry with spiced filling',
        price: '₹497',
        category: 'Appetizer',
        restaurantId: 'RIC',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'RIC_1',
        dishName: 'Lamb Vindaloo',
        description: 'Spicy and tangy lamb curry',
        price: '₹1245',
        category: 'Main Course',
        restaurantId: 'RIC',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'RIC_2',
        dishName: 'Masala Chai',
        description: 'Indian spiced tea',
        price: '₹248',
        category: 'Beverage',
        restaurantId: 'RIC',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'RIC_3',
        dishName: 'Chole Bhature',
        description: 'Spicy chickpeas with fried bread',
        price: '₹828',
        category: 'Main Course',
        restaurantId: 'RIC',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'RIC_4',
        dishName: 'Malai Kofta',
        description: 'Cottage cheese dumplings in gravy',
        price: '₹912',
        category: 'Main Course',
        restaurantId: 'RIC',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'RIC_5',
        dishName: 'Rasgulla',
        description: 'Soft cheese balls in sugar syrup',
        price: '₹290',
        category: 'Dessert',
        restaurantId: 'RIC',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Royal Indian Cuisine',
      'Indian food',
      'Samosa',
      'Lamb Vindaloo',
      'Masala Chai',
      'Chole Bhature',
      'Malai Kofta',
      'Rasgulla',
      'Appetizer',
      'Main Course',
      'Beverage',
      'Dessert',
      'cottage cheese',
      'spicy',
      'sweet',
      'fried bread',
      'curry',
      'dumplings',
      'cheese balls',
      'tangy',
      'tea',
      'buy 1 get 1 free',
    ],
  },
  {
    id: 'CH',
    distance: '2.2 km',
    restaurantDetails: {
      url: 'https://shorturl.at/0YJZh',
      title: 'The Curry House',
      currentOffer: '15% off on takeaways',
      rating: 4.3,
      deliveryTime: '35',
      avgPricePerHead: '300',
      location: {
        latitude: 37.41,
        longitude: -124.1025,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'CH_0',
        dishName: 'Chicken Korma',
        description: 'Mild curry with coconut and almonds',
        price: '₹1161',
        category: 'Main Course',
        restaurantId: 'CH',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'CH_1',
        dishName: 'Roti',
        description: 'Whole wheat flatbread',
        price: '₹165',
        category: 'Bread',
        restaurantId: 'CH',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'CH_2',
        dishName: 'Jalebi',
        description: 'Sweet, crispy spirals',
        price: '₹331',
        category: 'Dessert',
        restaurantId: 'CH',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'CH_3',
        dishName: 'Prawn Masala',
        description: 'Prawns cooked in a spicy tomato gravy',
        price: '₹1442',
        category: 'Main Course',
        restaurantId: 'CH',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'CH_4',
        dishName: 'Methi Thepla',
        description: 'Fenugreek-flavored flatbread',
        price: '₹248',
        category: 'Bread',
        restaurantId: 'CH',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'CH_5',
        dishName: 'Pineapple Lassi',
        description: 'Lassi made with pineapple',
        price: '₹299',
        category: 'Beverage',
        restaurantId: 'CH',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'The Curry House',
      'Indian food',
      'Chicken Korma',
      'Roti',
      'Jalebi',
      'Prawn Masala',
      'Methi Thepla',
      'Pineapple Lassi',
      'Curry House',
      'curry',
      'flatbread',
      'dessert',
      'spicy',
      'sweet',
      'beverage',
      'prawns',
      'takeaway',
      'almonds',
      'coconut',
      'tomato gravy',
    ],
  },
  {
    id: 'RCE', // Short ID for Royal Chaat Express
    restaurantDetails: {
      url: 'https://shorturl.at/FRUY8',
      title: 'Royal Chaat Express',
      currentOffer: 'Complimentary chutney with every chaat',
      rating: 4.1,
      deliveryTime: '15',
      distance: '1.2 km',
      avgPricePerHead: '400',
      vegetarian: true,
      location: {
        latitude: 35.9716,
        longitude: -120.5946,
      },
    },
    menu: [
      {
        id: 'RCE_0',
        dishName: 'Pani Puri',
        description: 'Crispy puris with spicy water',
        price: '₹124',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'RCE_1',
        dishName: 'Dahi Puri',
        description: 'Puris with yogurt and tamarind',
        price: '₹165',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'RCE_2',
        dishName: 'Bhel Puri',
        description: 'Crunchy mix with tamarind sauce',
        price: '₹165',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'RCE_3',
        dishName: 'Sev Puri',
        description: 'Puris topped with sev and chutney',
        price: '₹124',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'RCE_4',
        dishName: 'Aloo Chaat',
        description: 'Spiced potato chunks with chutney',
        price: '₹207',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'RCE_5',
        dishName: 'Papdi Chaat',
        description: 'Crispy papdi with toppings',
        price: '₹207',
        category: 'Street Food',
        restaurantId: 'RCE',
        vegetarian: true,
        isGourment: false,
      },
    ],
    keywords: [
      'Royal Chaat Express',
      'Pani Puri',
      'Dahi Puri',
      'Bhel Puri',
      'Sev Puri',
      'Aloo Chaat',
      'burgers',
      'burger',
      'Papdi Chaat',
      'crispy puris',
      'spicy water',
      'yogurt',
      'tamarind',
      'tamarind sauce',
      'sev',
      'chutney',
      'spiced potato',
      'papdi',
      'chutney',
      'street food',
      'vegetarian',
      'complimentary chutney',
    ],
  },
  {
    id: 'GDH', // Short ID for Golden Dragon Hub
    restaurantDetails: {
      url: 'https://shorturl.at/buEH2',
      title: 'Golden Dragon Hub',
      currentOffer: '25% off on orders above ₹1000',
      rating: 4.8,
      deliveryTime: '45',
      distance: '4.0 km',
      avgPricePerHead: '600',
      vegetarian: true,
      location: {
        latitude: 35.9716,
        longitude: -122.01,
      },
    },
    menu: [
      {
        id: 'GDH_0',
        dishName: 'Spring Rolls',
        description: 'Crispy rolls with vegetable stuffing',
        price: '₹540',
        category: 'Appetizer',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'GDH_1',
        dishName: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables',
        price: '₹830',
        category: 'Main Course',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'GDH_2',
        dishName: 'Manchow Soup',
        description: 'Spicy vegetable soup with crispy noodles',
        price: '₹415',
        category: 'Soup',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'GDH_3',
        dishName: 'Sweet and Sour Chicken',
        description: 'Chicken with sweet and tangy sauce',
        price: '₹1140',
        category: 'Main Course',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'GDH_4',
        dishName: 'Fried Ice Cream',
        description: 'Ice cream coated in crispy batter',
        price: '₹620',
        category: 'Dessert',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'GDH_5',
        dishName: 'Dim Sums',
        description: 'Steamed dumplings with assorted fillings',
        price: '₹830',
        category: 'Appetizer',
        restaurantId: 'GDH',
        vegetarian: true,
        isGourment: true,
      },
    ],
    keywords: [
      'Golden Dragon Hub',
      'Spring Rolls',
      'Hakka Noodles',
      'Manchow Soup',
      'Sweet and Sour Chicken',
      'Fried Ice Cream',
      'Dim Sums',
      'crispy rolls',
      'burgers',
      'burger',
      'vegetable stuffing',
      'stir-fried noodles',
      'spicy soup',
      'crispy noodles',
      'sweet and tangy sauce',
      'ice cream',
      'batter-coated ice cream',
      'steamed dumplings',
      'assorted fillings',
      'appetizer',
      'main course',
      'dessert',
      'vegetarian',
      '25% off',
      'vegetable',
    ],
  },
  {
    id: 'BBQ', // Short ID for BBQ Junction
    restaurantDetails: {
      url: 'https://shorturl.at/ghJO4',
      title: 'BBQ Junction',
      currentOffer: 'Free soft drink with BBQ combo',
      rating: 4.4,
      deliveryTime: '50',
      distance: '3.8 km',
      avgPricePerHead: '800',
      vegetarian: false,
      location: {
        latitude: 35.9716,
        longitude: -121.01,
      },
    },
    menu: [
      {
        id: 'BBQ_0',
        dishName: 'Grilled Pork Ribs',
        description: 'Smoky ribs with BBQ sauce',
        price: '₹1400',
        category: 'Main Course',
        restaurantId: 'BBQ',
        vegetarian: false,
        isGourment: false,
      },
      {
        id: 'BBQ_1',
        dishName: 'Chicken Wings',
        description: 'Spicy and tangy wings',
        price: '₹670',
        category: 'Appetizer',
        restaurantId: 'BBQ',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'BBQ_2',
        dishName: 'BBQ Chicken Pizza',
        description: 'Pizza topped with BBQ chicken',
        price: '₹1200',
        category: 'Main Course',
        restaurantId: 'BBQ',
        vegetarian: false,
        isGourment: false,
      },
      {
        id: 'BBQ_3',
        dishName: 'Coleslaw Salad',
        description: 'Fresh salad with creamy dressing',
        price: '₹330',
        category: 'Side',
        restaurantId: 'BBQ',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'BBQ_4',
        dishName: 'Brownie Sundae',
        description: 'Warm brownie with ice cream',
        price: '₹490',
        category: 'Dessert',
        restaurantId: 'BBQ',
        vegetarian: true,
        isGourment: true,
      },
      {
        id: 'BBQ_5',
        dishName: 'Lemon Iced Tea',
        description: 'Refreshing iced tea with lemon',
        price: '₹240',
        category: 'Beverage',
        restaurantId: 'BBQ',
        vegetarian: true,
        isGourment: false,
      },
    ],
    keywords: [
      'BBQ Junction',
      'Grilled Pork Ribs',
      'Chicken Wings',
      'BBQ Chicken Pizza',
      'Coleslaw Salad',
      'Brownie Sundae',
      'Lemon Iced Tea',
      'BBQ sauce',
      'smoky ribs',
      'spicy wings',
      'tangy wings',
      'pizza',
      'BBQ chicken',
      'fresh salad',
      'creamy dressing',
      'warm brownie',
      'ice cream',
      'iced tea',
      'lemon',
      'vegetarian',
      'non-vegetarian',
      'free soft drink',
      'BBQ combo',
    ],
  },
  {
    id: 'VDC', // Short ID for Vegan Delights Cafe
    restaurantDetails: {
      url: 'https://shorturl.at/ktyP6',
      title: 'Vegan Delights Cafe',
      currentOffer: 'Flat ₹100 off on orders above ₹500',
      rating: 4.9,
      deliveryTime: '30',
      distance: '2.2 km',
      avgPricePerHead: '250',
      vegetarian: true,
      location: {
        latitude: 35.9716,
        longitude: -125.5946,
      },
    },
    menu: [
      {
        id: 'VDC_0',
        dishName: 'Vegan Buddha Bowl',
        description: 'Mixed greens, quinoa, and tofu',
        price: '₹850',
        category: 'Main Course',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'VDC_1',
        dishName: 'Vegan Brownie',
        description: 'Dairy-free chocolate brownie',
        price: '₹350',
        category: 'Dessert',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'VDC_2',
        dishName: 'Vegan Smoothie Bowl',
        description: 'Mixed berries and granola',
        price: '₹520',
        category: 'Breakfast',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'VDC_3',
        dishName: 'Avocado Toast',
        description: 'Toast with mashed avocado and toppings',
        price: '₹450',
        category: 'Breakfast',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: true,
      },
      {
        id: 'VDC_4',
        dishName: 'Soy Milk Latte',
        description: 'Espresso with soy milk',
        price: '₹250',
        category: 'Beverage',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'VDC_5',
        dishName: 'Chickpea Salad',
        description: 'Chickpeas with veggies and dressing',
        price: '₹410',
        category: 'Side',
        restaurantId: 'VDC',
        vegetarian: true,
        isGourment: false,
      },
    ],
    keywords: [
      'Vegan Delights Cafe',
      'Vegan Buddha Bowl',
      'Vegan Brownie',
      'Vegan Smoothie Bowl',
      'Avocado Toast',
      'Soy Milk Latte',
      'Chickpea Salad',
      'mixed greens',
      'quinoa',
      'tofu',
      'dairy-free brownie',
      'chocolate brownie',
      'mixed berries',
      'granola',
      'mashed avocado',
      'espresso',
      'soy milk',
      'chickpeas',
      'veggies',
      'dressing',
      'main course',
      'dessert',
      'breakfast',
      'beverage',
      'side',
      'vegetarian',
      'flat ₹100 off',
      'healthy',
      'plant-based',
    ],
  },
  {
    id: 'TST', // Short ID for The Spice Tale
    restaurantDetails: {
      url: 'https://shorturl.at/0tDsG',
      title: 'The Spice Tale',
      currentOffer: '15% off on orders above ₹500',
      rating: 4.7,
      deliveryTime: '25',
      distance: '3.2 km',
      avgPricePerHead: '450',
      vegetarian: false,
      location: {
        latitude: 35.9716,
        longitude: -120.5946,
      },
    },
    menu: [
      {
        id: 'TST_0',
        dishName: 'Lamb Rogan Josh',
        description: 'Tender lamb cooked in a rich, spiced gravy',
        price: '₹1299',
        category: 'Main Course',
        restaurantId: 'TST',
        vegetarian: false,
        isGourment: true,
      },
      {
        id: 'TST_1',
        dishName: 'Paneer Butter Masala',
        description: 'Cottage cheese in a smooth, buttery tomato gravy',
        price: '₹850',
        category: 'Main Course',
        restaurantId: 'TST',
        vegetarian: true,
        isGourment: true,
      },
      {
        id: 'TST_2',
        dishName: 'Chole Bhature',
        description: 'Spicy chickpeas served with fried bread',
        price: '₹425',
        category: 'Main Course',
        restaurantId: 'TST',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'TST_3',
        dishName: 'Fish Amritsari',
        description: 'Deep-fried fish marinated with spices',
        price: '₹720',
        category: 'Appetizer',
        restaurantId: 'TST',
        vegetarian: false,
        isGourment: true,
      },
      {
        id: 'TST_4',
        dishName: 'Gulab Jamun',
        description: 'Deep-fried dough balls soaked in sugar syrup',
        price: '₹310',
        category: 'Dessert',
        restaurantId: 'TST',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'TST_5',
        dishName: 'Mint Lassi',
        description: 'Refreshing yogurt drink with mint flavor',
        price: '₹180',
        category: 'Beverage',
        restaurantId: 'TST',
        vegetarian: true,
        isGourment: false,
      },
    ],
    keywords: [
      'The Spice Tale',
      'Lamb Rogan Josh',
      'Paneer Butter Masala',
      'Chole Bhature',
      'Fish Amritsari',
      'Gulab Jamun',
      'Mint Lassi',
      'tender lamb',
      'spiced gravy',
      'cottage cheese',
      'buttery tomato gravy',
      'chickpeas',
      'fried bread',
      'deep-fried fish',
      'spices',
      'dough balls',
      'sugar syrup',
      'yogurt drink',
      'mint flavor',
      'main course',
      'appetizer',
      'dessert',
      'beverage',
      'vegetarian',
      'non-vegetarian',
      'gourmet',
      '15% off',
      'Indian cuisine',
    ],
  },
  {
    id: 'BFR', // Short ID for Biryanis & Flavors Restaurant
    restaurantDetails: {
      url: 'https://shorturl.at/vbjch',
      title: 'Biryanis & Flavors',
      currentOffer: '10% off on all biryanis',
      rating: 4.6,
      deliveryTime: '35',
      distance: '4.1 km',
      avgPricePerHead: '550',
      vegetarian: false,
      location: {
        latitude: 35.9716,
        longitude: -119.5946,
      },
    },
    menu: [
      {
        id: 'BFR_0',
        dishName: 'Hyderabadi Biryani',
        description: 'Aromatic basmati rice layered with spiced meat',
        price: '₹1100',
        category: 'Main Course',
        restaurantId: 'BFR',
        vegetarian: false,
        isGourment: true,
      },
      {
        id: 'BFR_1',
        dishName: 'Veg Biryani',
        description: 'Fragrant rice with mixed vegetables and spices',
        price: '₹650',
        category: 'Main Course',
        restaurantId: 'BFR',
        vegetarian: true,
        isGourment: true,
      },
      {
        id: 'BFR_2',
        dishName: 'Paneer Tikka',
        description: 'Marinated paneer cubes grilled to perfection',
        price: '₹420',
        category: 'Appetizer',
        restaurantId: 'BFR',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'BFR_3',
        dishName: 'Mutton Seekh Kebab',
        description: 'Minced mutton skewers grilled with spices',
        price: '₹750',
        category: 'Appetizer',
        restaurantId: 'BFR',
        vegetarian: false,
        isGourment: true,
      },
      {
        id: 'BFR_4',
        dishName: 'Lassi',
        description: 'A sweet yogurt drink to complement your meal',
        price: '₹180',
        category: 'Beverage',
        restaurantId: 'BFR',
        vegetarian: true,
        isGourment: false,
      },
      {
        id: 'BFR_5',
        dishName: 'Kesar Pista Kulfi',
        description: 'Frozen milk dessert flavored with saffron and pistachios',
        price: '₹280',
        category: 'Dessert',
        restaurantId: 'BFR',
        vegetarian: true,
        isGourment: true,
      },
    ],
    keywords: [
      'Biryanis & Flavors',
      'Hyderabadi Biryani',
      'Veg Biryani',
      'Paneer Tikka',
      'Mutton Seekh Kebab',
      'Lassi',
      'Kesar Pista Kulfi',
      'aromatic basmati rice',
      'spiced meat',
      'mixed vegetables',
      'grilled paneer cubes',
      'minced mutton skewers',
      'spices',
      'sweet yogurt drink',
      'frozen milk dessert',
      'saffron',
      'pistachios',
      'main course',
      'appetizer',
      'beverage',
      'dessert',
      'vegetarian',
      'non-vegetarian',
      'gourmet',
      '10% off',
      'Indian cuisine',
    ],
  },
  {
    id: 'TBB',
    restaurantDetails: {
      url: 'https://tinyurl.com/3zjshb9a',
      title: 'The Bombay Bistro',
      currentOffer: '10% off on orders above ₹1000',
      rating: 4.6,
      deliveryTime: '25',
      distance: '3.2 km',
      avgPricePerHead: '600',
      location: {
        latitude: 19.07609,
        longitude: 72.877426,
      },
      vegetarian: true,
    },
    menu: [
      {
        id: 'TBB_0',
        dishName: 'Paneer Tikka',
        description: 'Marinated cottage cheese grilled to perfection',
        price: '₹650',
        category: 'Appetizer',
        restaurantId: 'TBB',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'TBB_1',
        dishName: 'Dal Makhani',
        description: 'Rich black lentil curry cooked with cream',
        price: '₹495',
        category: 'Main Course',
        restaurantId: 'TBB',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'TBB_2',
        dishName: 'Stuffed Kulcha',
        description: 'Indian bread stuffed with spiced potatoes',
        price: '₹195',
        category: 'Bread',
        restaurantId: 'TBB',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TBB_3',
        dishName: 'Masala Chai',
        description: 'Traditional spiced tea',
        price: '₹150',
        category: 'Beverage',
        restaurantId: 'TBB',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TBB_4',
        dishName: 'Rasgulla',
        description: 'Syrupy soft cottage cheese balls',
        price: '₹120',
        category: 'Dessert',
        restaurantId: 'TBB',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'The Bombay Bistro',
      'Indian food',
      'Paneer Tikka',
      'Dal Makhani',
      'Kulcha',
      'Masala Chai',
      'Rasgulla',
      'vegetarian',
      'main course',
      'dessert',
    ],
  },
  {
    id: 'MSR',
    restaurantDetails: {
      url: 'https://tinyurl.com/46n3s7hx',
      title: 'Mysore Spice Route',
      currentOffer: 'Free dessert with orders above ₹1200',
      rating: 4.7,
      deliveryTime: '35',
      distance: '4.1 km',
      avgPricePerHead: '550',
      location: {
        latitude: 12.29581,
        longitude: 76.639381,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'MSR_0',
        dishName: 'Chicken Ghee Roast',
        description: 'Chicken cooked with flavorful spices and ghee',
        price: '₹850',
        category: 'Main Course',
        restaurantId: 'MSR',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'MSR_1',
        dishName: 'Mysore Masala Dosa',
        description: 'Crispy dosa filled with spicy potato masala',
        price: '₹200',
        category: 'Snacks',
        restaurantId: 'MSR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'MSR_2',
        dishName: 'Mangalore Buns',
        description: 'Sweet and fluffy banana puris',
        price: '₹150',
        category: 'Snacks',
        restaurantId: 'MSR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'MSR_3',
        dishName: 'Filter Coffee',
        description: 'Classic South Indian style coffee',
        price: '₹95',
        category: 'Beverage',
        restaurantId: 'MSR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'MSR_4',
        dishName: 'Payasam',
        description: 'Sweetened milk with rice and nuts',
        price: '₹125',
        category: 'Dessert',
        restaurantId: 'MSR',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Mysore Spice Route',
      'South Indian',
      'Chicken Ghee Roast',
      'Masala Dosa',
      'Filter Coffee',
      'Payasam',
      'Indian food',
    ],
  },
  {
    id: 'CSH',
    restaurantDetails: {
      url: 'https://tinyurl.com/4yns3t73',
      title: 'Cafe Spice Hub',
      currentOffer: 'Buy 2 pastries, get 1 free',
      rating: 4.4,
      deliveryTime: '35',
      distance: '4.0 km',
      avgPricePerHead: '450',
      location: {
        latitude: 28.459497,
        longitude: 77.026638,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'CSH_0',
        dishName: 'Chicken Ramen',
        description: 'Japanese noodle soup with chicken and soy-based broth',
        price: '₹560',
        category: 'Soups',
        restaurantId: 'CSH',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'CSH_1',
        dishName: 'Vegetable Sushi Roll',
        description: 'Sushi rolls with fresh vegetables and avocado',
        price: '₹480',
        category: 'Appetizer',
        restaurantId: 'CSH',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'CSH_2',
        dishName: 'Grilled Chicken Sandwich',
        description: 'Grilled chicken sandwich with lettuce and mayo',
        price: '₹320',
        category: 'Snacks',
        restaurantId: 'CSH',
        vegetarian: false,
        isGourmet: false,
      },
      {
        id: 'CSH_3',
        dishName: 'Penne Alfredo',
        description: 'Creamy pasta with Alfredo sauce',
        price: '₹450',
        category: 'Main Course',
        restaurantId: 'CSH',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'CSH_4',
        dishName: 'Seafood Platter',
        description: 'Mixed seafood platter with prawns, fish, and squid',
        price: '₹980',
        category: 'Main Course',
        restaurantId: 'CSH',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'CSH_5',
        dishName: 'Chocolate Truffle Pastry',
        description: 'Rich chocolate pastry with layers of truffle cream',
        price: '₹200',
        category: 'Dessert',
        restaurantId: 'CSH',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Cafe Spice Hub',
      'Chicken Ramen',
      'Sushi',
      'Sandwich',
      'Pasta',
      'Seafood',
      'Pastry',
      'Indian food',
      'Soups',
      'Main Course',
    ],
  },
  {
    id: 'TLS',
    restaurantDetails: {
      url: 'https://tinyurl.com/yezbhtcm',
      title: 'The Lotus Spot',
      currentOffer: '20% off on sushi orders above ₹800',
      rating: 4.5,
      deliveryTime: '30',
      distance: '2.8 km',
      avgPricePerHead: '700',
      location: {
        latitude: 13.08268,
        longitude: 80.270718,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'TLS_0',
        dishName: 'Spicy Tuna Sushi',
        description: 'Fresh tuna sushi rolls with spicy mayo',
        price: '₹620',
        category: 'Appetizer',
        restaurantId: 'TLS',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'TLS_1',
        dishName: 'Steak in Red Wine Sauce',
        description: 'Juicy steak served with red wine reduction',
        price: '₹1250',
        category: 'Main Course',
        restaurantId: 'TLS',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'TLS_2',
        dishName: 'Seafood Ramen',
        description: 'Ramen with prawns, fish, and scallops in miso broth',
        price: '₹760',
        category: 'Soups',
        restaurantId: 'TLS',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'TLS_3',
        dishName: 'Veggie Sandwich',
        description: 'Grilled sandwich with fresh vegetables and cheese',
        price: '₹280',
        category: 'Snacks',
        restaurantId: 'TLS',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'TLS_4',
        dishName: 'Blueberry Cheesecake',
        description: 'Creamy cheesecake topped with blueberry compote',
        price: '₹350',
        category: 'Dessert',
        restaurantId: 'TLS',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'The Lotus Spot',
      'Sushi',
      'Ramen',
      'Steak',
      'Sandwich',
      'Cheesecake',
      'Seafood',
      'Indian food',
      'Main Course',
    ],
  },
  {
    id: 'GBR',
    restaurantDetails: {
      url: 'https://tinyurl.com/3yxrt8ue',
      title: 'Golden Bite Retreat',
      currentOffer: '10% off on desserts',
      rating: 4.6,
      deliveryTime: '25',
      distance: '2.0 km',
      avgPricePerHead: '400',
      location: {
        latitude: 12.971599,
        longitude: 77.594566,
      },
      vegetarian: true,
    },
    menu: [
      {
        id: 'GBR_0',
        dishName: 'Ramen Bowl',
        description: 'Classic ramen noodles with soy-based broth',
        price: '₹490',
        category: 'Soups',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'GBR_1',
        dishName: 'Avocado Sushi Roll',
        description: 'Fresh sushi roll with creamy avocado',
        price: '₹420',
        category: 'Appetizer',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: true,
      },
      {
        id: 'GBR_2',
        dishName: 'Veggie Club Sandwich',
        description: 'Triple-layer sandwich with vegetables and mayo',
        price: '₹280',
        category: 'Snacks',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'GBR_3',
        dishName: 'Pasta Arrabbiata',
        description: 'Spicy tomato-based pasta',
        price: '₹350',
        category: 'Main Course',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'GBR_4',
        dishName: 'Seafood Pasta',
        description: 'Pasta with creamy sauce and mixed seafood',
        price: '₹780',
        category: 'Main Course',
        restaurantId: 'GBR',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'GBR_5',
        dishName: 'Glazed Donuts',
        description: 'Soft donuts with a sugary glaze',
        price: '₹150',
        category: 'Dessert',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'GBR_6',
        dishName: 'Chocolate Muffin',
        description: 'Rich chocolate muffin with molten center',
        price: '₹180',
        category: 'Dessert',
        restaurantId: 'GBR',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Golden Bite Retreat',
      'Ramen',
      'Sushi',
      'Sandwich',
      'Pasta',
      'Seafood',
      'Donuts',
      'Muffins',
      'Desserts',
      'Indian food',
      'Main Course',
    ],
  },
  {
    id: 'SSD',
    restaurantDetails: {
      url: 'https://tinyurl.com/4594h8r3',
      title: 'Seaside Delights',
      currentOffer: 'Free ice cream with every steak order',
      rating: 4.7,
      deliveryTime: '45',
      distance: '5.5 km',
      avgPricePerHead: '800',
      location: {
        latitude: 19.07609,
        longitude: 72.877426,
      },
      vegetarian: false,
    },
    menu: [
      {
        id: 'SSD_0',
        dishName: 'Tonkotsu Ramen',
        description: 'Rich pork-based ramen with boiled eggs',
        price: '₹650',
        category: 'Soups',
        restaurantId: 'SSD',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SSD_1',
        dishName: 'Salmon Nigiri Sushi',
        description: 'Sushi with fresh salmon slices',
        price: '₹780',
        category: 'Appetizer',
        restaurantId: 'SSD',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SSD_2',
        dishName: 'BBQ Steak',
        description: 'Grilled steak with BBQ sauce',
        price: '₹1200',
        category: 'Main Course',
        restaurantId: 'SSD',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SSD_3',
        dishName: 'Seafood Salad',
        description: 'Fresh salad with prawns, calamari, and greens',
        price: '₹650',
        category: 'Salads',
        restaurantId: 'SSD',
        vegetarian: false,
        isGourmet: true,
      },
      {
        id: 'SSD_4',
        dishName: 'Vanilla Ice Cream',
        description: 'Classic vanilla ice cream with chocolate chips',
        price: '₹200',
        category: 'Dessert',
        restaurantId: 'SSD',
        vegetarian: true,
        isGourmet: false,
      },
      {
        id: 'SSD_5',
        dishName: 'Blueberry Muffin',
        description: 'Soft muffin with fresh blueberry filling',
        price: '₹190',
        category: 'Dessert',
        restaurantId: 'SSD',
        vegetarian: true,
        isGourmet: false,
      },
    ],
    keywords: [
      'Seaside Delights',
      'Ramen',
      'Sushi',
      'Steak',
      'Seafood',
      'Ice Cream',
      'Muffins',
      'Indian food',
      'Main Course',
    ],
  },
];
