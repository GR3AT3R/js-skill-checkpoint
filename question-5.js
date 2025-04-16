// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice() {
  // เริ่มเขียนโค้ดตรงนี้
  let total = 0;
  // ใช้ For ... of loop เพื่อ Loop ผ่านทุก Object ใน Array cart
  for (let item of cart) {
    // คำนวณราคาสินค้าของแต่ละ Object โดยนำ price คูณกับ quantity แล้วบวกเข้ากับ total
    total += item.price * item.quantity;
  }
  return total;
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
