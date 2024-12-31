function GetPrint() {
  /*For Print*/
  window.print();
}

// new logic
function AddNewRow(v) {
  document.getElementById("amt1").value = 0;
  document.getElementById("FTotal").value = 0;

  const row1 = document.getElementById("row1");
  const row2 = document.getElementById("row2");
  const row3 = document.getElementById("row3");
  const row4 = document.getElementById("row4");

  // row1 data
  const robo = document.getElementById("robo1");
  const face = document.getElementById("face1");
  const hair = document.getElementById("hair1");
  const hairclip = document.getElementById("hairclip1");
  const body = document.getElementById("body1");
  const legs = document.getElementById("legs1");
  const hands = document.getElementById("hands1");
  const fingers = document.getElementById("fingers1");
  const total = document.getElementById("amt1");
  const ftotal = document.getElementById("FTotal");

  robo.readOnly = false;
  face.readOnly = false;
  hair.readOnly = false;
  hairclip.readOnly = false;
  body.readOnly = false;
  legs.readOnly = false;
  hands.readOnly = false;
  fingers.readOnly = false;

  // console.log(row1);
  // console.log(typeof(v));
  const robo_id = parseInt(v);
  switch (robo_id) {
    case 1:
      // console.log("case1=>" + robo_id);
      row1.style.display = "table-row";
      hair.readOnly = true;
      hairclip.readOnly = true;
      robo.readOnly = true;
      robo.innerHTML = "Die size Estimation";
      face.value = 0;
      hair.value = 0;
      hairclip.value = 0;
      body.value = 0;
      legs.value = 0;
      hands.value = 0;
      fingers.value = 0;
      // total.value = 630;
      // ftotal.value = 630;
      break;
    case 2:
      row1.style.display = "table-row";
      robo.readOnly = true;
      robo.innerHTML = "Wafer Yield/ Cost";
      face.value = 0;
      hair.value = 0;
      hairclip.value = 0;
      body.value = 0;
      legs.value = 0;
      hands.value = 0;
      fingers.value = 0;
      // total.value = 785;
      // ftotal.value = 785;
      break;
    case 3:
      row1.style.display = "table-row";
      robo.readOnly = true;
      robo.innerHTML = "Package Yield/Cost";
      face.value = 0;
      hair.value = 0;
      hairclip.value = 0;
      body.value = 0;
      legs.value = 0;
      hands.value = 0;
      fingers.value = 0;
      // total.value = 835;
      // ftotal.value = 835;
      break;
    case 4:
      row1.style.display = "table-row";
      body.readOnly = true;
      robo.readOnly = true;
      robo.innerHTML = "Test Yield/Cost";
      face.value = 0;
      hair.value = 0;
      hairclip.value = 0;
      body.value = 2;
      legs.value = 0;
      hands.value = 0;
      fingers.value = 0;
      total.value = 400;
      ftotal.value = 400;
  }
}


// after increase quantity 
function GetPrice(v) {
  const qty = v.value;
  // console.log('price val =>' + v);
  const robo_cat = document.getElementById("robo_cat").value;
  const robo_id = parseInt(robo_cat);
  const totalS = document.getElementById("amt1").value;
  const totalV = document.getElementById("amt1");
  const ftotal = document.getElementById("FTotal");

  // console.log(typeof(total));
  const total = parseInt(totalS);
  const parts = v.id;
  // console.log(qty);
  // switch (parts) {
  //   case "face1":
  //     // console.log(total);
  //     sum = total;
  //     sum = sum + qty * 100;
  //     // console.log(sum);
  //     totalV.value = sum;
  //     ftotal.value = sum;
  //     break;

  //   case "body1":
  //     sum = total;
  //     sum = sum + qty * 200;
  //     // console.log(sum);
  //     totalV.value = sum;
  //     ftotal.value = sum;
  //     break;

  //   case "legs1":
  //     sum = total;
  //     sum = sum + qty * 120;
  //     // console.log(sum);
  //     totalV.value = sum;
  //     ftotal.value = sum;
  //     break;
  //   case "hands1":
  //     sum = total;
  //     sum = sum + qty * 130;
  //     // console.log(sum);
  //     totalV.value = sum;
  //     ftotal.value = sum;
  //     break;

  //   case "fingers1":
  //     sum = total;
  //     sum = sum + qty * 80;
  //     // console.log(sum);
  //     totalV.value = sum;
  //     ftotal.value = sum;
  // }
  // console.log(robo_id);
  switch (robo_id) {
    case 1:
      switch (parts) {
        case "face1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 100;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "body1":
          sum = total;
          sum = sum + qty * 200;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "legs1":
          sum = total;
          sum = sum + qty * 120;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;
        case "hands1":
          sum = total;
          sum = sum + qty * 130;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "fingers1":
          sum = total;
          sum = sum + qty * 80;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
      }
      break;

    case 2:
      switch (parts) {
        case "face1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 120;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hair1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 60;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hairclip1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 30;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "body1":
          sum = total;
          sum = sum + qty * 230;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "legs1":
          sum = total;
          sum = sum + qty * 140;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;
        case "hands1":
          sum = total;
          sum = sum + qty * 135;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "fingers1":
          sum = total;
          sum = sum + qty * 70;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
      }
      break;

    case 3:
      switch (parts) {
        case "face1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 130;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hair1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 50;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hairclip1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 35;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "body1":
          sum = total;
          sum = sum + qty * 240;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "legs1":
          sum = total;
          sum = sum + qty * 150;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;
        case "hands1":
          sum = total;
          sum = sum + qty * 145;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "fingers1":
          sum = total;
          sum = sum + qty * 85;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
      }
      break;

    case 4:
      switch (parts) {
        case "face1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 140;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hair1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 70;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "hairclip1":
          // console.log(total);
          sum = total;
          sum = sum + qty * 45;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "body1":
          sum = total;
          sum = sum + qty * 300;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "legs1":
          sum = total;
          sum = sum + qty * 130;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;
        case "hands1":
          sum = total;
          sum = sum + qty * 150;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
          break;

        case "fingers1":
          sum = total;
          sum = sum + qty * 75;
          // console.log(sum);
          totalV.value = sum;
          ftotal.value = sum;
      }
  }
}

// new logic end



// function GetPrice2(v) {
//   const hair = document.getElementById("hair1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (hair * 100)
//   total.value = sum
//   ftotal.value = sum

// }
// function GetPrice3(v) {
//   const face = document.getElementById("face1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (face * 100)
//   total.value = sum
//   ftotal.value = sum

// }
// function GetPrice4(v) {
//   const face = document.getElementById("face1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (face * 100)
//   total.value = sum
//   ftotal.value = sum

// }
// function GetPrice5(v) {
//   const face = document.getElementById("face1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (face * 100)
//   total.value = sum
//   ftotal.value = sum

// }
// function GetPrice6(v) {
//   const face = document.getElementById("face1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (face * 100)
//   total.value = sum
//   ftotal.value = sum

// }
// function GetPrice7(v) {
//   const face = document.getElementById("face1").value;
//   const total = document.getElementById("amt1");
//   const ftotal = document.getElementById("FTotal");
//   sum = 530
//   sum = sum + (face * 100)
//   total.value = sum
//   ftotal.value = sum

// }

// new logic end

// function Item(v) {
//   var index = $(v).parent().parent().index();
//   const robo_val = v;
//   console.log(robo_val);
//   var rate2 = document.getElementsByName("item")[index].value;
//   //   document.getElementsByName("item")[index].val("");
//   //   console.log(rate2);
//   // console.log(typeof(rate2));
//   // var tt = parseInt(rate2);
//   //   var rt;
//   //   var qt;
//   //   switch (tt) {
//   //     case 0:
//   //       rt = 100;
//   //       qt = 1;
//   //       break;
//   //     case 1:
//   //       rt = 200;
//   //       qt = 1;
//   //       break;
//   //     case 2:
//   //       rt = 300;
//   //       qt = 1;
//   //       break;
//   //     case 3:
//   //       rt = 400;
//   //       qt = 'TSMC';
//   //       break;
//   //     case 4:
//   //       rt = 500;
//   //       qt = 1;
//   //       break;
//   //     case 5:
//   //       rt = 600;
//   //       qt = 1;
//   //   }
//   //   document.getElementsByName("qty")[index].value = qt;
//   //   document.getElementsByName("rate")[index].value = rt;
//   //   console.log(rt);
// }
// function BtnAdd(v) {
//   console.log(v);
//   /*Add Button*/
//   var v = $("#TRow").clone().appendTo("#TBody");
//   $(v).find("#qty").val("");
//   // $(v).find("#rate").val('');
//   $(v).find("#amt").val("");
//   // $(v).find("input").val('');
//   $(v).removeClass("d-none");
//   $(v)
//     .find("th")
//     .first()
//     .html($("#TBody tr").length - 1);
// }

// function BtnDel(v) {
//   /*Delete Button*/
//   $(v).parent().parent().remove();
//   GetTotal();

//   $("#TBody")
//     .find("tr")
//     .each(function (index) {
//       $(this).find("th").first().html(index);
//     });
// }

// function Calc(v) {
//   /*Detail Calculation Each Row*/
//   var index = $(v).parent().parent().index();

//   var qty = document.getElementsByName("qty")[index].value;
//   var rate = document.getElementsByName("rate")[index].value;

//   var amt = qty * rate;
//   document.getElementsByName("amt")[index].value = amt;

//   GetTotal();
// }




// after gst 
function GetTotal() {

  var FinalT = document.getElementById("FTotal").value;

  var finalAmt = parseInt(FinalT);
  var gst = document.getElementById("FGST").value;

  var newgst = parseInt(gst);
  // console.log(newgst);
  var net = finalAmt + (finalAmt * (newgst / 100));


  document.getElementById("FNet").value = net;
}
