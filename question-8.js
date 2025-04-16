// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
// เมื่อ Function นี้ถูก Execute จะ Return ตัว Promise Object ที่เกิดจากการดึงข้อมูลผู้ใช้งานของ "https://jsonplaceholder.typicode.com/users"
const getUsersByName = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

// Function "handleResponse" ทำหน้าที่ในการเปลี่ยนข้อมูลที่ได้จาก Server ให้เป็น Object แล้วนำไปใช้ต่อในโค้ดได้
// เมื่อ Function นี้ถูก Execute จะ Return ตัว Promise Object ของ response ที่ถูกเปลี่ยนเป็น JSON ด้วย Function json()
const handleResponse = (response) => {
  return response.json();
};

// Function "onSuccess" แปลงข้อมูลที่ได้รับให้เป็น Array ของชื่อ User โดยใช้ Array.map
const onSuccess = (data) => {
  // Array Map คือ Built-in Function ที่สามารถเปลี่ยนแปลง Value แต่ละตัวใน Array ให้เป็น Value อันใหม่ได้ด้วย Parameter ที่ระบุลงไปเป็น Callback Function
  const usersName = data.map((user) => user.name);
  console.log(usersName);
};

getUsersByName().then(handleResponse).then(onSuccess);
