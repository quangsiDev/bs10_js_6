function submit() {
  var number = document.getElementById("txtNum").value * 1;
  var count = 0;
  var contentHTML = "";
  //   a+=10 ~ a=a+10
  while (number > 1) {
    number = Math.floor(number / 2);
    count++;
    // in kết quả
    var row = `<h3>Count :${count} - Number :${number}</h3>`;
    contentHTML += row;
  }
  document.getElementById("noti").innerHTML = contentHTML;
}
