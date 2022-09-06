function Customer(name) {
  this.name = name;
  this.address = address;
}

let count = 0;
let customerCount = 0;

function Order() {
  count += 1;
  let orderId = count;
  let date = new Date();

  this.status = "in progress";
  this.order = [];

  this.getOrder = function () {
    return this.order;
  };

  this.generateOrder = function (item) { 
    this.order.push({ orderId, status: this.status, date,item });
  };

  this.setStatus = function (statusToBeSet) {
    if (this.order.status != "delivered" || this.order.status != "in progress")
      this.order.status = statusToBeSet;
  };

  this.calSubTotal = function (mrp, quantity) {
    const subTotal = mrp * quantity;
    return this.order.push(subTotal);
  };

  this.calcTax = function (mrp, item) {
    if (this.order.status == "delivered") return;
    const gstAmount = (mrp * item.gstPercentage) / 100;
    return this.order.push(gstAmount);
  };

  this.calcTotal = function (mrp, gstAmount) {
    const netPrice = mrp + gstAmount;
    return this.order.push(netPrice);
  };

  //   TODO: need to know what is this and what's the formula
  this.calcTotalWeight = function () {
    return;
  };
}

Order.prototype.getOrderDetail = function (order) {
  return order.order;
};

function Item()

let order1 = new Order();
order1.generateOrder()
console.log(order1.getOrder())