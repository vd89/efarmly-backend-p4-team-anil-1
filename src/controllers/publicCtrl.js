const data = {};
export const getCategories = async (req, res) => {
 try {
  data.expenses = {
   data: {
    expenses: {
     _id: '12345646573416854',
     name: 'Expenses',
     icon: 'expenses_Icon',
     category: [
      {
       crops: {
        _id: '12345646573416854',
        name: 'crops',
        icon: 'Crop_icon',
        category: [
         {
          _id: '12345646573416854',
          name: 'Seeds',
          icon: 'Seed_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Fertilizer',
          icon: 'Fertilizer_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Pesticides',
          icon: 'Pesticides_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Labor',
          icon: 'Labor_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Miscellaneous',
          icon: 'Miscellaneous_icon',
         },
        ],
       },
       farm: {
        _id: '12345646573416854',
        name: 'Farm',
        icon: 'Crop_icon',
        category: [
         {
          _id: '12345646573416854',
          name: 'Tilling',
          icon: 'Tilling_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Electricity',
          icon: 'Tilling_icon',
         },
         {
          _id: '12345646573416854',
          name: 'Labor',
          icon: 'Labor_icon',
         },
        ],
       },
       transportation: {
        _id: '12345646573416854',
        name: 'Transportation',
        icon: 'Transportation_icon',
        category: [],
       },
      },
     ],
    },
    receivables: {
     _id: '12345646573416854',
     name: 'Receivables',
     icon: 'receivables_Icon',
     category: [
      {
       crops: {
        _id: '12345646573416854',
        name: 'Crops',
        icon: 'Crop_icon',
        category: [],
       },
      },
     ],
    },
    farmInventory: {
     _id: '12345646573416854',
     name: 'Farm Inventory',
     icon: 'farmInventory_Icon',
     category: [
      {
       machinery: {
        _id: '12345646573416854',
        name: 'Machinery',
        icon: 'Machinery_icon',
        category: [],
       },
      },
     ],
    },
    farmDetails: {
     _id: '12345646573416854',
     name: 'Farm Details',
     icon: 'farmDetails_Icon',
     category: [
      {
       balanceSheet: {
        _id: '12345646573416854',
        name: 'Farm Balance Sheet',
        icon: 'balanceSheet_icon',
        category: [],
       },
       profitDetails: {
        _id: '12345646573416854',
        name: 'Profit Details',
        icon: 'profitDetails_icon',
        category: [],
       },
      },
     ],
    },
   },
  };
  return res.created({ message: 'Got Categories', data });
 } catch (err) {
  res.error(err.message);
 }
};
