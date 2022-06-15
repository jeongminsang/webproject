let kindList = new Array(1);
let kindCount = 0;

function addList() {
    kindCount = kindCount + 1;
    console.log(kindCount);

    let foodNm = document.getElementById("foodNm").value;
    let foodKindNm = document.getElementById("foodKindNm").value;
    let largeClsNm = document.getElementById("largeClsNm").value;
    let middleClsNm = document.getElementById("middleClsNm").value;
    let smallClsNm = document.getElementById("smallClsNm").value;
  
    let tableObj = document.getElementById("table")
  
        let trObj = document.createElement('tr');

        let tdObj1 = document.createElement('td');
        tdObj1.innerText = foodNm;

        let tdObj2 = document.createElement('td');
        tdObj2.innerText = foodKindNm;

        let tdObj3 = document.createElement('td');
        tdObj3.innerText = largeClsNm;

        let tdObj4 = document.createElement('td');
        tdObj4.innerText = middleClsNm;

        let tdObj5 = document.createElement('td');
        tdObj5.innerText = smallClsNm;

        trObj.appendChild(tdObj1);
        trObj.appendChild(tdObj2);
        trObj.appendChild(tdObj3);
        trObj.appendChild(tdObj4);
        trObj.appendChild(tdObj5);

        tableObj.appendChild(trObj);
    

    /* document.getElementById("table").appendChild(trObj);  */// <tr> 추가
    }
    let currentKind = {};
    kindList.push(currentKind);
  
  
  function onReady() {
    fetch("/getKind")
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(function (jsonData) {
        for (let idx in jsonData) {
          document.getElementById("foodNm").value = jsonData[idx][0];
          document.getElementById("foodKindNm").value = jsonData[idx][1];
          document.getElementById("largeClsNm").value = jsonData[idx][2];
          document.getElementById("middleClsNm").value = jsonData[idx][3];
          document.getElementById("smallClsNm").value = jsonData[idx][4];
          addList();
        }
        console.log(jsonData);
      });
  }
  document.addEventListener("DOMContentLoaded", onReady);