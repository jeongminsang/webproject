let foodList = new Array(1);
let foodCount = 0;

function addList() {
    foodCount = foodCount + 1;
    console.log(foodCount);

    let tradFoodNm = document.getElementById("tradFoodNm").value;
    let docNm = document.getElementById("docNm").value;
    let transTxt = document.getElementById("transTxt").value;
  
    let tableObj = document.getElementById("table")
  
        let trObj = document.createElement('tr');

        let tdObj1 = document.createElement('td');
        tdObj1.innerText = tradFoodNm;

        let tdObj2 = document.createElement('td');
        tdObj2.innerText = docNm;

        let tdObj3 = document.createElement('td');
        tdObj3.innerText = transTxt;

        trObj.appendChild(tdObj1);
        trObj.appendChild(tdObj2);
        trObj.appendChild(tdObj3);

        tableObj.appendChild(trObj);
    

    /* document.getElementById("table").appendChild(trObj);  */// <tr> 추가
    }
    let currentFood = {};
    foodList.push(currentFood);
  
  
  function onReady() {
    fetch("/getFood")
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(function (jsonData) {
        for (let idx in jsonData) {
          document.getElementById("tradFoodNm").value = jsonData[idx][0];
          document.getElementById("docNm").value = jsonData[idx][1];
          document.getElementById("transTxt").value = jsonData[idx][2];
          addList();
        }
        console.log(jsonData);
      });
  }
  document.addEventListener("DOMContentLoaded", onReady);
  
