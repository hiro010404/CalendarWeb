const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
var days = 0;

// 初期表示
window.onload = function () {
    showProcess(today, calendar);
};
// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

function theday(date){
  console.log(date);
  var dayElement = document.getElementById("day"+date);
  if(dayElement.lastChild.value=="○"){
    dayElement.lastChild.value="△";
    dayElement.lastChild.style.fontSize="30px";
    dayElement.lastChild.style.lineHeight="1.75";
    dayElement.lastChild.style.color="Orange";
  }else if (dayElement.lastChild.value=="△") {
    dayElement.lastChild.value="×";
    dayElement.lastChild.style.fontSize="50px";
    dayElement.lastChild.style.lineHeight="0";
    dayElement.lastChild.style.width="45px";
    dayElement.lastChild.style.color="Red";
  }else if(dayElement.lastChild.value=="×"){
    dayElement.lastChild.value="○"
    dayElement.lastChild.style.fontSize="50px";
    dayElement.lastChild.style.lineHeight="0";
    dayElement.lastChild.style.width="null";
    dayElement.lastChild.style.color="LightGreen";
  }
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td id = day"+count+" class='today'>" + count + "<br><input TYPE='button' onclick='theday("+count+")' class='ok' VALUE='○'></td>";
                } else {
                    calendar += "<td id = day"+count+">" + count + "<br><input TYPE='button' onclick='theday("+count+")' class='ok' VALUE='○'></td>";
                }
            }
        }
        calendar += "</tr>";
    }

    return calendar;
}
