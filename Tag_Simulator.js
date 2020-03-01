var selectedName;
var selectEquipment;
var tagName;
var tagCount = 0*1;
var blueDust = 0*1;
var option;
var recordName;
var option1;
var option2;

function draw() {
  var img = new Image();
  img.onload = function() {
    var ctx = document.getElementById("equipmentView").getContext("2d");
    ctx.drawImage(img,0,0,200,200);
  }
  img.src = "./default.PNG";
}

function show() {
  selectedName = document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex].text;
  selectedEquipment = document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex].value;
  var img = new Image();
  img.onload = function() {
    var ctx = document.getElementById("equipmentView").getContext("2d");
    ctx.drawImage(img,0,0,200,200);
  }
  if(selectedName != "장비선택") {
    var name = document.getElementById("equipmentName");
    name.innerHTML = selectedName;
    document.getElementById("tagCount").innerHTML = tagCount;
    document.getElementById("blueDustCount").innerHTML = blueDust;
    document.getElementById("optionOneName").innerHTML = "옵션1";
    document.getElementById("optionTwoName").innerHTML = "옵션2";
    document.getElementById("equipment").disabled = true;
  }

  if(selectedEquipment == "sword") {
    img.src = "./sword.PNG";
  } else if(selectedEquipment == "gun") {
    img.src = "./gun.PNG";
  } else if(selectedEquipment == "scythe") {
    img.src = "./scythe.PNG";
  } else if(selectedEquipment == "guitar") {
    img.src = "./guitar.PNG";
  } else if(selectedEquipment == "gauntlets") {
    img.src = "./gauntlets.PNG";
  } else if(selectedEquipment == "hammer") {
    img.src = "./hammer.PNG";
  } else if(selectedEquipment == "knife") {
    img.src = "./knife.PNG";
  } else if(selectedEquipment == "spear") {
    img.src = "./spear.PNG";
  }

}

function convert() {
  if(selectedName == "장비선택" || selectedName == undefined) {
    alert("장비선택");
  }
  else {
    tagCount++;
    blueDust = blueDust + 3645;
    option = Math.floor(Math.random() * 30);
    var newName;
    switch(option) {
      case 0:
        tagName = "자비의 ";
        option1 = "무기 공격력 증가 +451";
        option2 = "최대 HP +1800";
        break;
      case 1:
        tagName = "기괴한 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "공격력[%] +15%";
        break;
      case 2:
        tagName = "괴상한 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "공격력 +112";
        break;
      case 3:
        tagName = "난폭한 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "적 방어도 관통 +4%";
        break;
      case 4:
        tagName = "절규하는 ";
        option1 = "무기 공격력 증가 +511";
        option2 = "적 추가 피해 : 보스/네임드[%] +12%";
        break;
      case 5:
        tagName = "녹슨 ";
        option1 = "무기 공격력 증가 +662";
        option2 = "빗맞힘 시 피해 +55%";
        break;
      case 6:
        tagName = "급류의 ";
        option1 = "무기 공격력 증가 +601";
        option2 = "슈퍼아머 파괴력 +22%";
        break;
      case 7:
        tagName = "지친자의 ";
        option1 = "무기 공격력 증가 +541";
        option2 = "최대 스태미나 +6";
        break;
      case 8:
        tagName = "속죄의 ";
        option1 = "무기 공격력 증가 +541";
        option2 = "이동속도 +5%";
        break;
      case 9:
        tagName = "잃어버린 ";
        option1 = "무기 공격력 증가 +511";
        option2 = "적 추가 피해 : 일반[%] +12%";
        break;
      case 10:
        tagName = "방치된 ";
        option1 = "무기 공격력 증가 +541";
        option2 = "적중도 +315";
        break;
      case 11:
        tagName = "조잡한 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "치명타 피해 +384";
        break;
      case 12:
        tagName = "덧댄 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "치명타 +7%";
        break;
      case 13:
        tagName = "오만한 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "프라이멀 세력 추가 피해 +16%";
        break;
      case 14:
        tagName = "거짓의 ";
        option1 = "무기 공격력 증가 +481";
        option2 = "황금 세력 추가 피해 +16%";
        break;
      case 15:
        tagName = "집념의 ";
        option1 = "무기 공격력 증가[%] +13%";
        option2 = "최대 HP +1800";
        break;
      case 16:
        tagName = "강철의 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "공격력 +15%";
        break;
      case 17:
        tagName = "강직한 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "공격력 +112";
        break;
      case 18:
        tagName = "눈부신 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "적 방어도 관통 +4%";
        break;
      case 19:
        tagName = "새벽의 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "적 추가 피해 : 보스/네임드[%] +12%";
        break;
      case 20:
        tagName = "나선의 ";
        option1 = "무기 공격력 증가[%] +16%";
        option2 = "빗맞힘 시 피해 +55%";
        break;
      case 21:
        tagName = "태풍의 ";
        option1 = "무기 공격력 증가[%] +14%";
        option2 = "슈퍼아머 파괴력 +22%";
        break;
      case 22:
        tagName = "세련된 ";
        option1 = "무기 공격력 증가[%] +13%";
        option2 = "최대 스태미나 +6";
        break;
      case 23:
        tagName = "구름의 ";
        option1 = "무기 공격력 증가[%] +13%";
        option2 = "이동속도 +5%";
        break;
      case 24:
        tagName = "천둥의 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "적 추가 피해 : 일반[%] +12%";
        break;
      case 25:
        tagName = "도전자의 ";
        option1 = "무기 공격력 증가[%] +13%";
        option2 = "적중도 +315";
        break;
      case 26:
        tagName = "작열하는 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "치명타 피해 +384";
        break;
      case 27:
        tagName = "화산의 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "치명타 +7%";
        break;
      case 28:
        tagName = "오만한 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "프라이멀 세력 추가 피해 +16%";
        break;
      case 29:
        tagName = "거짓의 ";
        option1 = "무기 공격력 증가[%] +12%";
        option2 = "황금 세력 추가 피해 +16%";
        break;
      default:
        break;
    }
    newName = tagName + selectedName;
    recordName = newName;
    var name = document.getElementById("equipmentName");
    name.innerHTML = newName;
    document.getElementById("optionOneName").innerHTML = option1;
    document.getElementById("optionTwoName").innerHTML = option2;
    document.getElementById("tagCount").innerHTML = tagCount;
    document.getElementById("blueDustCount").innerHTML = blueDust;
    record(recordName);
  }
}

function newWindow() {
  tagCount = 0*1;
  blueDust = 0*1;
  selectedName = "장비선택";
  tagName = null;
  recordName = null;
  option = 0;
  document.getElementById("equipment").disabled = false;
  var recordNode = document.getElementById("optionRecord");
  document.getElementById("tagCount").innerHTML = tagCount;
  document.getElementById("blueDustCount").innerHTML = blueDust;
  document.getElementById("equipmentName").innerHTML = "";
  document.getElementById("optionOneName").innerHTML = "";
  document.getElementById("optionTwoName").innerHTML = "";
  document.getElementById("equipment").options[0].selected = true;
  while(recordNode.hasChildNodes()) {
    recordNode.removeChild(recordNode.firstChild);
  }
  var ctx = document.getElementById("equipmentView").getContext("2d");
  ctx.clearRect(0, 0, 200, 200);
  ctx.beginPath();
  draw();
}

function record(recordName) {
  var recordOption = document.createElement("p");
  var recordOptionName = document.createTextNode(recordName);
  recordOption.appendChild(recordOptionName);
  document.getElementById("optionRecord").appendChild(recordOption);
}
