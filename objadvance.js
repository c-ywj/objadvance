function calculateSalesTax(salesData, taxRates) {
  var result = {};
  for (var i = 0; i < salesData.length; i++) {
    var co = salesData[i];
    var totalSales1 = calcSales(co.sales);
    var totalTax = calcTax(co.sales, getTaxRate(co.province));
    if (!result[co.name]) {
      result[co.name] = {totalSales: totalSales1, totalTaxes: totalTax};
    }
    else {
      var obj = result[co.name];
      obj.totalSales += totalSales1;
      obj.totalTaxes += totalTax;
    }
  }
  return result;
}

function getTaxRate (province) {
  return salesTaxRates[province];
}

function calcTax (sales, tr) {
    var totalTax = 0;
  for (var i = 0; i < sales.length; i++) {
    totalTax += (sales[i] * tr);
  }
  return totalTax;
}

function calcSales (sales) {
  var totalSales = 0;
  for (var i = 0; i < sales.length; i++) {
    totalSales += sales[i];
  }
  return totalSales;
}




var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


console.log(calculateSalesTax(companySalesData, salesTaxRates));

// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here
// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/