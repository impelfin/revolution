const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var fs = require('fs');
var mysql = require('mysql');
const path = require('path');
const {
	DbConnect,
  } = require("../config/dao.js");
  //const{dateCheck, } = require("../config/statRule.js")
  const holidays = require('holidays-kr');
  holidays.serviceKey = '2DA93J%2BpAcN2rk%2FqZFXmjsIem1Jp7ujROUeQReR8ER5NyVp2Khuuk4CBvmhl9iCiBHsf1UXC18Haf%2FTEILDNlQ%3D%3D';

/**
 * 파일 명 : stat.js
 * @author : 문승연
 * @date : 2022-03-22
 * @description : 상태코드에 따른 배정 룰
*/


//mysql connection configuration
const connection = new mysql.createConnection(DbConnect);
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//날짜 정의
let today = new Date();

year = today.getFullYear(); //올해년도
nextMonth = String(today.getMonth() + 2).padStart(2, "0");//작성일 기준 다음달
firstDate = new Date(year,parseInt(nextMonth),1).getDate(); //해당월 첫 날
lastDate = new Date(year,parseInt(nextMonth)+1,0).getDate(); //해당월 마지막날
if((year%4===0 && year % 100 !==0) || year%400===0) { //윤년 적용
    lastDate[1]=29;
}

//날짜 범위 안에서 랜덤한 숫자출력
function randomDate(min, max) {
    getDutyDates = Math.floor(Math.random() * (max - min + 1)) + min;
    return getDutyDates;
}

//중복체크 함수
function getDateArray(min,max,count){
    if(max - min +1 < count)
    return;

    var randomDateArray = [];

    while(1){
        var index = randomDate(min, max);
        if (randomDateArray.indexOf(index)>-1){
            continue;
        }
        randomDateArray.push(index);
        if (randomDateArray.length == count){
            break;
        }
    }
    //return randomDateArray;
    return randomDateArray.sort(function (a, b) {
        return a - b;
    });
}


//상근자용 날짜 함수
//한달 전체 리스트 출력
function wholeDates(startDate,endDate){
    var totalDate = [];
    let i=startDate;

    while(true){
        totalDate.push(i);
        if( i == endDate){
            break;
        }
        i++;
    }
    return totalDate;
}
//console.log("한달 날짜", wholeDates(firstDate,lastDate))


//그 달 주말 담기
function weekendPicker(year,month){
    var thisMonthDates=wholeDates(firstDate,lastDate)
    var wkndList=[]

    for (i=0; i<thisMonthDates.length; i++){
        wknd = new Date("'"+year+"-"+month+"-"+thisMonthDates[i]+"'").getDay();
        if (wknd==0 || wknd == 6){
            wkndList.push(thisMonthDates[i])
        }
    }
        return wkndList;
}

//console.log("주말", weekendPicker(year,nextMonth))

//해당월 공휴일 리스트=>수정필요

function hoPicker(year, month, callback) {
	var hoDates = []
  holidays.getHolidays({
    year : year,        // 수집 시작 연도
    month : parseInt(month),         // 수집 시작 월
    monthCount : 1     // 수집 월 갯수
    }).then(list => {
      for(var i=0; i<list.length; i++){
        hoDates.push(list[i][Object.keys(list[i])[3]]); //해당월 day의 value만 push
    };
		console.log(hoDates, "함수 내부");
		return callback(hoDates);
  });
};

hoPicker(year, nextMonth, function(hoDates) {
	console.log(hoDates, "함수 외부");
});


//
app.get('/api/emp/stat', function(res,req){
	var mdCodeSelector = "select empNo, teamNo, deptNo, statRule from emp where substring(statRule,3,1)=1"
  var prgCodeSelector = "select empNo, statRule from emp where substring(statRule, 1,1)=1"
  var nkCodeSelector = "select empNo, teamNo, deptNo, statRule from emp where substring(statRule,2,1)=1 and statRule not in (select statRule from emp where substring(statRule,1,1)=1)"

    //임산부 안내
  connection.query(prgCodeSelector, function(err, result){
        	for (var data of result){
           	console.log("[임산부]", data.empNo)
           	console.log("**나이트 근무 배치 불가**")
    	};
	});

	//상근근무자
	connection.query(mdCodeSelector, function(err, result){
		    console.log(hoPicker(),"콘솔")
		    for (var data of result){
		        var mdDates = []
		        var checkPlaced = getDateArray(firstDate,lastDate,20);
		        mdDates.push(nextMonth, checkPlaced)
		        //console.log(mdDates)
		        // for (var i = 0; i<mdDates.length; i++){
		        // console.log("[상근근무]", data.empNo)
		        //                     connection.query("insert into currentdutytest (month, date, teamno, deptno, empno, shiftCode) values (\"" + nextMonth + '","' + ("00" + mdDates[i].toString()).slice(-2) + '",'+data.teamNo+","+data.deptNo+","+data.empNo+", 'N')")
		        //                     console.log("상근근무는 MD로 표기됩니다.")
		        //                     }
		           };
		connection.end()
		console.log("DB커넥션 종료.")
		});
});

module.exports = app;
