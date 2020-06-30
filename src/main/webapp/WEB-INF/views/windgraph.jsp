<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/windbarb.js"></script>
<link rel = "stylesheet" href = "resources/css/chartStyle.css?version=20200417">
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<title>WindGraph</title>
</head>
<body>
	<div id= "header" class="center-block">
		<div id="nav">
			<button type="button" id="searchButton" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-cog"></span> 조회 설정</button>
			<button type="button" id="leftButton" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-chevron-left"></span> </button>
				<span id="nowDate"></span>
			<button type="button" id="rightButton" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-chevron-right"></span> </button>
			<div id="headerTitle">풍향/풍속 데이터 조회</div>
			<div id="buttonGroup">
				<div id="radioArea" style="display: inline;">
					<input type="radio" name="windSensorSelect" value="sensor1" checked="checked"><span style="color: red; font-size: 20px; font-weight: bold;">센서1</span>
					<input type="radio" name="windSensorSelect" value="sensor2"><span style="color: #111; font-size: 20px; font-weight: bold; margin-right: 10px">센서2</span>
				</div>
				<button class="btn btn-primary btn-lg" id="graphBtn">그래프</button>
				<button class="btn btn-default btn-lg" id="tableBtn">표</button>
				<button class="btn btn-default btn-lg btn-success" id="excelBtn">엑셀 출력</button>
			</div>	
		</div>
	</div>
	<div id="searchList">
		<form id="searchForm" action="searchData.do" method="post">
			<ul class="list-group">
				<li class="list-group-item">데이터 필터 : <br>
					<select id = "date" name = "date" class="form-control">
						<option value = "5M" id="5M">5분 데이터</option>
						<option value = "hour" id="hour">시간별 데이터</option>
						<option value="day" id="day">일별 데이터</option>
						<option value="3day" id="3day">3일 데이터</option>
						<option value="2Mon" id="2Mon">2개월 데이터</option>
						<option value="speed" id="speed">풍속별 데이터</option>
					</select>
				</li>
				<li class="list-group-item" id="sDateForm">날짜 선택 : <br>
					<input class="form-control" type="date"  name="sDate" id="sDate">
				</li>
				 <li class="list-group-item" id="eDateForm">날짜 선택2 : <br>
					<input class="form-control" type="date" name="eDate" id="eDate" readonly="readonly">
				</li>
				<li class="list-group-item" id="speedForm">풍속 선택 : <br>
					<select class="form-control" name="speed">
						<option value=1.0>1.0m/s 이상</option>
						<option value=1.5>1.5m/s 이상</option>
						<option value=2.0>2.0m/s 이상</option>
						<option value=2.5>2.5m/s 이상</option>
						<option value=3.0>3.0m/s 이상</option>
					</select>
				</li>
			</ul>
			<input id="formatData" name= "formatData" type="hidden">
			<br>
			<button id="cancelBtn" class="btn btn-default btn-lg">취소</button>
			<button id="submitBtn" class="btn btn-default btn-lg">조회</button>
		</form>
	</div>
	<div id="chartArea">
		<div id="chartList">	
			<div id="wind1" >
			</div>
			<div id="wind2">
			</div>
 			<div id="pm10">
			</div>
			<div id="pm25">
			</div>
		</div>
	</div>
	<div id="tableArea">
		<table id="mainTable" class="table table-striped table-hover table-bordered">
					
		</table>
	</div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script type="text/javascript">		
	var selectDate = "${selectDate}";
	var selectEDate = "${selecteDate}";
	var filterCase = ${filterCase};
	var formatData = ${formatData};
	var koreaData = ${koreaList};
	var windSensorData = ${windList};
	var airSensorData = ${airList};
</script>
<script src="resources/js/chart.js?version=20200417"></script>
</body>
</html>