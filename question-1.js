// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
// 1. แก้ไขจำนวนสินค้า apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

// 2. เพิ่มสินค้าใหม่ชื่อ "orange" ที่มีราคา 20 บาท และจำนวน 300 ชิ้น
inventory.orange = { price: 20, quantity: 300 };

// 3. คำนวณมูลค่ารวมของสินค้าในสต็อกโดยใช้ Loop
let totalValue = 0;
for (const product in inventory) {
  const price = inventory[product].price;
  const quantity = inventory[product].quantity;
  totalValue += price * quantity;
}

// 4. แสดงผลมูลค่ารวมของสินค้าในสต็อกในรูปแบบที่ระบุบน Console
console.log(`Total inventory value: ${totalValue} baht`);
