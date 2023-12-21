/**
 * do{
 * hành động
 * }while(Điều kiện)
 */

// nếu sai vẫn chạy ít nhất 1 lần

do {
  console.log("yes");
} while (false);

// Khởi tạo giá trị
var input = 15; // Giá trị đầu vào
var output = 0; // Biến lưu trữ tổng

// Bắt đầu vòng lặp để tính tổng các số từ 1 đến input
var count = 1; // Biến đếm bắt đầu từ 1
do {
  output = output + count; // Cộng giá trị của count vào tổng
  count++; // Tăng count lên 1 để chuyển sang số tiếp theo
} while (count <= input); // Lặp lại nếu count không vượt quá giá trị của input

// Hiển thị kết quả trong console
console.log("😀 - output", output);

// input 3 => output 6
