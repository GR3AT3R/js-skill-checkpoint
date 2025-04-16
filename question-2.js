// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
// 1. เพิ่ม Task ใหม่ "Walk the dog" ที่มี id เป็น 5 ไปที่ส่วนท้ายของ Array
userTaskList.push({ id: 5, task: "Walk the dog" });

// 2. แก้ไขชื่อ Task ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
userTaskList[3].task = "Go to the gym";

// 3. ลบ Task สุดท้ายใน Array (ซึ่งเป็น Task ที่มี id เป็น 5 หลังจากเพิ่มในขั้นตอนที่ 1)
userTaskList.pop();

// 4. Log ข้อความของ Task ตัวสุดท้ายที่เหลือใน Array โดยให้แสดงตามรูปแบบที่กำหนด
const lastTask = userTaskList[userTaskList.length - 1];
console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);
