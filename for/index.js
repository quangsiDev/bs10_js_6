// in ra màn hình console helllo 5 lần

/** for ( khởi tạo ; điều kiện ;  bước nhảy){
 *          hành động
 *
 * } */

for (var i = 0; i < 5; i++) {
  console.log("hello", i);
}

var count = 0;

for (count; count <= 10; count++) {
  console.log("yes");
}
console.log("😀 - count", count);

function inChanLe() {
  var stringChan = "";
  var stringLe = "";

  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      stringChan = "-" + stringChan + i;
      // -0 ,      ---024
    } else {
      stringLe = stringLe + i + "-";
    }
  }

  document.getElementById("result_ex1").innerHTML = `
  <p>${stringChan}</p>
  <p>${stringLe}</p>

  `;
}

function showListDiv() {
  var listDiv = "";
  for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      listDiv += `<div style="padding:10px; background:red"></div>`;
    } else {
      listDiv += `<div style="padding:10px; background:green"></div>`;
    }
  }
  document.getElementById("list-div").innerHTML = `
  ${listDiv}
  `;
}

showListDiv();
