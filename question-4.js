// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal) {
  // เริ่มเขียนโค้ดที่นี่
  // ตรวจสอบยอดคำสั่งซื้อ
  if (orderTotal >= 4000) {
    return "Shipping is free."; // ถ้ายอดคำสั่งซื้อ 4000 ขึ้นไป ค่า Shipping ฟรี
  } else if (orderTotal >= 2000) {
    return "Shipping cost is 250 Baht."; // ถ้ายอดคำสั่งซื้อ 2000 ขึ้นไปแต่ต่ำกว่า 4000 ค่า Shipping 250 บาท
  } else {
    return "Shipping cost is 500 Baht."; // สำหรับยอดคำสั่งซื้อที่น้อยกว่า 2000 ค่า Shipping 500 บาท
  }
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
