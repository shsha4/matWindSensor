$(document).ready(function() {
	
	//데이터 영역
	var getTime = [];
	var windTime = [];
	
	//센서별 미세먼지 농도 받는 배열
	var airSensor1PM10Data = [];
	var airSensor2PM10Data = [];
	var airSensor3PM10Data = [];
	var airSensor4PM10Data = [];
	var airSensor5PM10Data = [];
	var korea10Data = [];
	
	//센서별 초미세먼지 농도 받는 배열
	var airSensor1PM25Data = [];
	var airSensor2PM25Data = [];
	var airSensor3PM25Data = [];
	var airSensor4PM25Data = [];
	var airSensor5PM25Data = [];
	var korea25Data = [];
	
	//센서별 wind 데이터를 받는 배열
	var windSensor1Data = [];
	var windSensor2Data = [];
	var windSensor1Lot = [];
	var windSensor2Lot = [];
	
	//5분 데이터 조회시 날짜 컬럼 값 초기화
	if(filterCase == 1){
		$('#5M').attr('selected', true);
		$('#sDate').attr('type', 'date');
		$('#eDateForm').hide();
		$('#speedForm').hide();
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				getTime.push(airSensorData[i].data_hour + " : " + airSensorData[i].data_min);
			}
		}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				windTime.push(windSensorData[i].data_hour + " : " + windSensorData[i].data_min);
			}
		}
	//시간별 데이터 조회시 날짜 컬럼 값 초기화
	}else if(filterCase == 2){
		$('#hour').attr('selected', true);
		$('#sDate').attr('type', 'date');
		$('#eDateForm').hide();
		$('#speedForm').hide();
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				getTime.push(airSensorData[i].data_hour +"시");										
			}
		}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				windTime.push(windSensorData[i].data_hour + "시");
			}
		}
	//일별 데이터 조회시 날짜 컬럼 값 초기화	
	}else if(filterCase == 3){
		$('#day').attr('selected', true);
		$('#sDate').attr('type', 'month');
		$('#eDateForm').hide();
		$('#speedForm').hide();
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				getTime.push(airSensorData[i].data_date);											
				}
			}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				windTime.push(windSensorData[i].data_date);
			}
		}
	}else if(filterCase == 4){
		$('#3day').attr('selected', true);
		$('#sDate').attr('type', 'date');
		$('#eDate').attr('type', 'date');
		$('#eDateForm').show();
		$('#speedForm').hide();
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				if(airSensorData[i].data_hour == "00"){
					getTime.push(airSensorData[i].data_date + " " + airSensorData[i].data_hour + "시");
				}else{					
					getTime.push(airSensorData[i].data_hour + "시");											
				}
				}
			}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				if(windSensorData[i].data_hour == "00"){
					windTime.push(windSensorData[i].data_date + " " + windSensorData[i].data_hour + "시");
				}else{	
					windTime.push(windSensorData[i].data_hour + "시");
				}				
			}
		}
	}else if(filterCase == 5){
		$('#2Mon').attr('selected', true);
		$('#sDate').attr('type', 'month');
		$('#eDate').attr('type', 'month');
		$('#eDateForm').show();
		$('#speedForm').hide();
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				getTime.push(airSensorData[i].data_date);											
				}
			}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				windTime.push(windSensorData[i].data_date);
			}
		}
	}else if(filterCase == 6){
		$('#speed').attr('selected', true);
		$('#sDate').attr('type', 'date');
		$('#eDate').attr('type', 'date');
		$('#eDateForm').hide();
		$('#sDateForm').hide();
		$('#speedForm').show();
		
		for(var i = 0; i < airSensorData.length; i++){
			if(airSensorData[i].sensor_id == 1){
				getTime.push(airSensorData[i].data_date);											
				}
			}
		for(var i = 0; i< windSensorData.length; i++){
			if(windSensorData[i].sensor_id == 30){
				windTime.push(windSensorData[i].data_date);
			}
		}
	}
	
	if(koreaData != "0"){		
		for(var i = 0; i < koreaData.length; i++){
			korea10Data.push(koreaData[i].pm10_grm);
			korea25Data.push(koreaData[i].pm25_grm);
		}
	}
	
	//미세먼지, 초미세먼지 값 초기화
	for(var i = 0; i < airSensorData.length; i++){
		if(airSensorData[i].sensor_id == 1){	
			airSensor1PM10Data.push(airSensorData[i].pm10_grm_avrg);
			airSensor1PM25Data.push(airSensorData[i].pm25_grm_avrg);
		}else if(airSensorData[i].sensor_id == 2){
			airSensor2PM10Data.push(airSensorData[i].pm10_grm_avrg);
			airSensor2PM25Data.push(airSensorData[i].pm25_grm_avrg);
		}else if(airSensorData[i].sensor_id == 3){
			airSensor3PM10Data.push(airSensorData[i].pm10_grm_avrg);
			airSensor3PM25Data.push(airSensorData[i].pm25_grm_avrg);
		}else if(airSensorData[i].sensor_id == 4){
			airSensor4PM10Data.push(airSensorData[i].pm10_grm_avrg);
			airSensor4PM25Data.push(airSensorData[i].pm25_grm_avrg);
		}else if(airSensorData[i].sensor_id == 5){
			airSensor5PM10Data.push(airSensorData[i].pm10_grm_avrg);
			airSensor5PM25Data.push(airSensorData[i].pm25_grm_avrg);
		}
	}
	
	//wind 센서별 데이터를 받는 배열
	var windS1 = [];
	var windS2 = [];
	
	//센서별 데이터 분류
	for(var i = 0; i < windSensorData.length; i++){
		
		if(windSensorData[i].sensor_id == 30){
			windSensor1Data.push(windSensorData[i].speed_avrg);
			windSensor1Lot.push(windSensorData[i].direction_avrg);
			
		}else if(windSensorData[i].sensor_id == 31){
			windSensor2Data.push(windSensorData[i].speed_avrg);
			windSensor2Lot.push(windSensorData[i].direction_avrg);
		}
	}
	
	//wind 데이터 최종 가공[m/s, rotate], highchart 방위가 반대 +- 180
	for(var i = 0; i < windSensor1Data.length; i++){
		if(windSensor1Lot[i] >= 180){			
			windS1.push([windSensor1Data[i], windSensor1Lot[i] - 180]);
		}else{
			windS1.push([windSensor1Data[i], windSensor1Lot[i] + 180]);
		}
	}

	for(var i = 0; i < windSensor2Data.length; i++){
		if(windSensor2Lot[i] >= 180){			
			windS2.push([windSensor2Data[i], windSensor2Lot[i] - 180]);
		}else {
			windS2.push([windSensor2Data[i], windSensor2Lot[i] + 180]);
		}
	}
	
	 
	
	//차트 설정
	//풍향/풍속 센서1 차트
 Highcharts.chart('wind1', {

	    title: {
	        text: '<span style="font-weight: bold;">풍향/풍속 [m/s]</span>'
	    },

	     xAxis: {
	        categories: windTime,
	        tickWidth: 1, 
	        minPadding: 1, 
	        maxPadding: 1,
	        offset: 40
	    },
	     yAxis:{
	    	title:{
	    		text: null
	    	},plotBands:[{		        	 
	        	 from: 0, to: 0.2,
	        	 color: '#FFFFFF',
	        	 label: {
	        		 text: '고요바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 0.3, to: 1.5,
	        	 color: '#CCFFFF',
	        	 label:{
	        		 text: '실바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 1.5, to: 3.3,
	        	 color: '#99FFFF',
	        	 label:{
	        		 text:'남실바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 3.3, to: 5.5,
	        	 color: '#66FFFF',
	        	 label:{
	        		 text:'산들바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 5.5, to: 8.0,
	        	 color: '#00FFFF',
	        	 label:{
	        		 text:'건들바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 8.0, to: 10.8,
	        	 color: '#00CCFF',
	        	 label:{
	        		 text:'흔들 바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 10.8, to: 13.9,
	        	 color: '#0099FF',
	        	 label:{
	        		 text:'된바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         }]
	    	
	     },
	    exporting: {
	        enabled: false
	    },
	    series: [{
	    	
	        type: 'windbarb',
	        data: windS1,
	        name: '풍향1',
	        color: Highcharts.getOptions().colors[8],
	        legend:{
	        	align: 'right'
	        },
	        tooltip: {
	            valueSuffix: ' m/s'
	        }
	    },{
	        type: 'spline', 
	        keys:['y', 'rotation'],
	        data: windS1,
	        color: Highcharts.getOptions().colors[8],
	        name: '센서1',
	        tooltip: {
	            valueSuffix: ' m/s'
	        }
	    }]

		});
	
	//풍향/풍속 센서2 차트
	Highcharts.chart('wind2', {
		
		title: {
			text: '<span style="font-weight: bold;">풍향/풍속 [m/s]</span>'
		},
		
		xAxis: {
			categories: windTime,
			tickWidth: 1, 
			minPadding: 1, 
			maxPadding: 1,
			offset: 40
		},
		yAxis:{
			title:{
				text: null
			},plotBands:[{		        	 
	        	 from: 0, to: 0.2,
	        	 color: '#FFFFFF',
	        	 label: {
	        		 text: '고요바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 0.3, to: 1.5,
	        	 color: '#CCFFFF',
	        	 label:{
	        		 text: '실바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 1.5, to: 3.3,
	        	 color: '#99FFFF',
	        	 label:{
	        		 text:'남실바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 3.3, to: 5.5,
	        	 color: '#66FFFF',
	        	 label:{
	        		 text:'산들바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 5.5, to: 8.0,
	        	 color: '#00FFFF',
	        	 label:{
	        		 text:'건들바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 8.0, to: 10.8,
	        	 color: '#00CCFF',
	        	 label:{
	        		 text:'흔들 바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         },{
	        	 from: 10.8, to: 13.9,
	        	 color: '#0099FF',
	        	 label:{
	        		 text:'된바람',
	        		 style:{
	        			 color: '#606060'
	        		 }
	        	 }
	         }]
			
		},
		exporting: {
			enabled: false
		},
		series: [{
	
			type: 'windbarb',
			data: windS2,
			name: '풍향2',
			color: Highcharts.getOptions().colors[1],
			legend:{
				align: 'right'
			},
			tooltip: {
				valueSuffix: ' m/s'
			},
			
		}, {
			type: 'spline', 
			keys:['y', 'rotation'],
			data: windS2,
			color: Highcharts.getOptions().colors[1],
			name: '센서2',
			tooltip: {
				valueSuffix: ' m/s'
			}
		}]
		
	});

   		
  		//미세먼지 차트
  		Highcharts.chart('pm10', {
		    chart: {
		        type: 'spline'
		    },
		    title: {
		        text: '<span style="font-weight: bold;">미세먼지 [µg/m³]</span>'
		    },
		    xAxis: {
		        categories: getTime,
		        tickWidth: 1, 
		        minPadding: 1, 
		        maxPadding: 1
		    },
		     yAxis: {
		         title: {
		           text: null
		         },
		         plotBands:[{		        	 
		        	 from: 0, to: 30,
		        	 color: 'rgba(0, 0, 255, 0.05)',
		        	 label: {
		        		 text: '좋음',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 30, to: 80,
		        	 color: 'rgba(0, 255, 0, 0.05)',
		        	 label:{
		        		 text: '보통',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 80, to: 150,
		        	 color: 'rgba(255, 210, 0, 0.05)',
		        	 label:{
		        		 text:'나쁨',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 150, to: 1000,
		        	 color: 'rgba(255, 0, 0, 0.05)',
		        	 label:{
		        		 text:'매우나쁨',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         }]
		         
		    },
		    tooltip: {
		        crosshairs: true,
		        shared: true
		    },
		    plotOptions: {
		        spline: {
		            marker: {
		                radius: 4,
		                lineColor: '#666666',
		                lineWidth: 1
		            }
		        }
		    },
		    series: [{
		        name: 'MAT 옥상[Seq #1]',
		        marker:{
		        	symbol:'diamond'
		        },
		        data: airSensor1PM10Data
		    },{
		    	name: 'MAT 옥상[Seq #2]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor2PM10Data
		    },
		    {
		    	name: 'MAT 창측[Seq #3]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor3PM10Data
		    },
		    {
		    	name: 'MAT 옥상[Seq #4]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor4PM10Data
		    },
		    {
		    	name: 'MAT 창측[Seq #5]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor5PM10Data
		    },
		    {
		    	name: '국가망[부림동] ',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: korea10Data
		    }]
		});
 		
  		
  		//초미세먼지 차트
 		Highcharts.chart('pm25', {
		    chart: {
		        type: 'spline'
		    },
		    title: {
		        text: '<span style="font-weight: bold;">초미세먼지 [µg/m³]</span>'
		    },
		    xAxis: {
		        categories: getTime,
		        tickWidth: 1, 
		        minPadding: 1, 
		        maxPadding: 1
		    },
		     yAxis: {
		         title: {
		           text: null,
		         },
		         plotBands:[{		        	 
		        	 from: 0, to: 15,
		        	 color: 'rgba(0, 0, 255, 0.05)',
		        	 label: {
		        		 text: '좋음',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 15, to: 35,
		        	 color: 'rgba(0, 255, 0, 0.05)',
		        	 label:{
		        		 text: '보통',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 35, to: 75,
		        	 color: 'rgba(255, 210, 0, 0.05)',
		        	 label:{
		        		 text:'나쁨',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         },{
		        	 from: 75, to: 1000,
		        	 color: 'rgba(255, 0, 0, 0.05)',
		        	 label:{
		        		 text:'매우나쁨',
		        		 style:{
		        			 color: '#606060'
		        		 }
		        	 }
		         }]
		    },
		    tooltip: {
		        crosshairs: true,
		        shared: true
		    },
		    plotOptions: {
		        spline: {
		            marker: {
		                radius: 4,
		                lineColor: '#666666',
		                lineWidth: 1
		            }
		        }
		    },
		    series: [{
		        name: 'MAT 옥상[Seq #1]',
		        marker:{
		        	symbol:'diamond'
		        },
		        data: airSensor1PM25Data
		    },{
		    	name: 'MAT 옥상[Seq #2]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor2PM25Data
		    },
		    {
		    	name: 'MAT 창측[Seq #3]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor3PM25Data
		    },
		    {
		    	name: 'MAT 옥상[Seq #4]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor4PM25Data
		    },
		    {
		    	name: 'MAT 창측[Seq #5]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: airSensor5PM25Data
		    },
		    {
		    	name: '국가망[부림동]',
		    	marker:{
		    		symbol:'diamond'    		
		    	},
		    	data: korea25Data
		    }]
		}); 
 	
 		
 		//페이지 스크립트 영역
 		//표, 그래프 버튼 값 확인
 		if(formatData == null){
 			$('#formatData').val(1);
 		}else { 			
 			if(formatData == 1){
 				$('#chartArea').show();
 				$('#radioArea').show();
 				$('#tableArea').hide();
 			}else if(formatData == 0) {
 				$('#tableArea').show();
 				$('#chartArea').hide();
 				$('#radioArea').hide();
 			}
 		}
 		
 		//데이터 조회 실패시 오류 메시지 출력
 		if(airSensorData.length == 0 || windSensorData.length == 0){
 			alert("조회된 데이터가 없습니다 조회 설정을 다시 해 주세요.");
 			
 			//배포 url은 wind.airruler.co.kr/wind/로 먹기때문에 배포시엔 로케이션을 "/"로 주어야 함.
 			location.href = "/wind/";
 		}
 		
 		//페이지 첫 로딩시 현재 날짜
 		$('#sDate').val(selectDate.replace(/\//g, "-"));
 		if(selectEDate != ""){ 			
 			$('#eDate').val(selectEDate.replace(/\//g, "-"));
 		}
 		
 		//조회된 날짜 가져오기
 		if(filterCase == 6){ 			
 			$('#nowDate').html("풍속별 데이터");
 		}else if(selectDate != null){
 			$('#nowDate').html(selectDate);
 		}
 		
 		var dynamicDate = selectDate.split("/");
 		
 		if($('#date').val() == "speed"){
 			$('#leftButton').hide();
 			$('#rightButton').hide();
 		}else {
 			$('#leftButton').show();
 			$('#rightButton').show();
 			
 		}
 		
 		
 		//날짜 왼쪽버튼 클릭시
 		$('#leftButton').on("click", function() {
 			var d1;
 			var d2;
 			
 			//일별 데이터 조회가 아닐시 날짜 데이터 포맷
 			if($('#date').val() == "5M" || $('#date').val() == "hour"){
 				d1 = new Date(dynamicDate[0], dynamicDate[1] -1, dynamicDate[2]);
 				d1.setDate(d1.getDate() -1);
 				$('#sDate').attr("type", "date");
 				$('#sDate').val(dateformat(d1));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "day"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1);
 				d2.setMonth(d2.getMonth() -1);
 				$('#date').val("day");
 				$('#sDate').attr("type", "month");
 				$('#sDate').val(dateformat(d2));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "3day"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1, dynamicDate[2]);
 				d2.setDate(d2.getDate() - 1);
 				d3 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
 				d3.setDate(d2.getDate() + 2);
 				$('#date').val("3day");
 				$('#sDate').attr("type", "date");
 				$('#eDate').attr("type", "date");
 				$('#sDate').val(dateformat(d2));
 				$('#eDate').val(dateformat(d3));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "2Mon"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1);
 				d2.setMonth(d2.getMonth() -1);
 				d3 = new Date(d2.getFullYear(), d2.getMonth());
 				d3.setMonth(d2.getMonth() +1);
 				$('#date').val("2Mon");
 				$('#sDate').attr("type", "month");
 				$('#eDate').attr("type", "month");
 				$('#sDate').val(dateformat(d2));
 				$('#eDate').val(dateformat(d3));
 				$('#searchForm').submit();
 			}
 		});
 			
 		//날짜 오른쪽 버튼 클릭시
 		$('#rightButton').on("click", function() {
 			var d1;
 			var d2;
 			
 			//일별 데이터 조회가 아닐시 날짜 포맷 
 			if($('#date').val() == "5M" || $('#date').val() == "hour"){
 				d1 = new Date(dynamicDate[0], dynamicDate[1] -1, dynamicDate[2]);
 				d1.setDate(d1.getDate() + 1);
 				$('#sDate').attr("type", "date");
 				$('#sDate').val(dateformat(d1));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "day"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1);
 				d2.setMonth(d2.getMonth() + 1);
 				$('#date').val("day");
 				$('#sDate').attr("type", "month");
 				$('#sDate').val(dateformat(d2));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "3day"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1, dynamicDate[2]);
 				d2.setDate(d2.getDate() + 1);
 				d3 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
 				d3.setDate(d2.getDate() + 2);
 				$('#date').val("3day");
 				$('#sDate').attr("type", "date");
 				$('#eDate').attr("type", "date");
 				$('#sDate').val(dateformat(d2));
 				$('#eDate').val(dateformat(d3));
 				$('#searchForm').submit();
 			}else if($('#date').val() == "2Mon"){
 				d2 = new Date(dynamicDate[0], dynamicDate[1] -1);
 				d2.setMonth(d2.getMonth() +1);
 				d3 = new Date(d2.getFullYear(), d2.getMonth());
 				d3.setMonth(d2.getMonth() +1);
 				$('#date').val("2Mon");
 				$('#sDate').attr("type", "month");
 				$('#eDate').attr("type", "month");
 				$('#sDate').val(dateformat(d2));
 				$('#eDate').val(dateformat(d3));
 				$('#searchForm').submit();
 			}
 		});
 		
 		//취소 버튼 클릭시 조회 설정 레이어 닫기
 		$('#cancelBtn').click(function(e) {
 			e.preventDefault();
 			$('#searchList').fadeOut();
 		});
 		
 		//form태그 submit()
 		$('#submitBtn').on("click", function(e) {
 			e.preventDefault();
 			//조회 날짜 범위 오류시 알럿 표시
 			if(!$('#date').val() == "5M" && $('#sDate').val() > $('#eDate').val()){
 				alert("조회하신 날짜를 다시 설정해 주세요.");
 			}else{
 				$('#searchForm').submit();
 			}
		});
 		
 		//센서2 기본 숨기기
 		$('#wind2').hide();
 		
 		//라디오로 센서 1, 2 분류 및 클릭시 차트 표시
 		$('input:radio').on("change", function() {			
 			if($('input:radio:checked').val() == "sensor1"){
 				$('#wind1').fadeIn();
 				$('#wind2').hide();
 			}else if($('input:radio:checked').val() == "sensor2"){
 				$('#wind2').fadeIn();
 				$('#wind1').hide();
 			}
		});
 		
 		//조회 설정 버튼 클릭시 조회 설정 레이어 보여주기, 닫기
 		$('#searchButton').on("click", function(e) {
 			if($('#searchList').css("display") == "none"){
 				$('#searchList').fadeIn(); 		
 			}else {
 				$('#searchList').fadeOut();
 			}			
 		});
 		
 		//조회 데이트 조건 마다 날짜 선택 input type 변경
 		$('#date').on("change", function() {
 			var today = new Date();
 			
			if($(this).val() == "5M"){
				$('#sDate').attr("type", "date");
				$('#sDateForm').show();
				$('#speedForm').hide();
				$('#eDateForm').hide();
				$('#sDate').val(selectDate.replace(/\//g, "-"));
			}else if($(this).val() == "hour"){
				$('#sDate').attr("type", "date");
				$('#sDateForm').show();
				$('#speedForm').hide();
				$('#eDateForm').hide();
				$('#sDate').val(selectDate.replace(/\//g, "-"));
			}else if($(this).val() == "day"){
				$('#sDate').attr("type", "month");
				$('#sDateForm').show();
				$('#speedForm').hide();
				$('#eDateForm').hide();
				$('#sDate').val(selectDate.replace(/\//g, "-").substring(0, 7));
			}else if($(this).val() == "3day"){
				var d3 = new Date(dynamicDate[0], dynamicDate[1], dynamicDate[2]);
				d3.setMonth(d3.getMonth() -1);
				d3.setDate(d3.getDate() +2);
				$('#sDate').attr("type", "date");
				$('#eDate').attr("type", "date");
				$('#sDateForm').show();
				$('#speedForm').hide();
				$('#eDateForm').show();
				$('#sDate').val(selectDate.replace(/\//g, "-"));
				$('#eDate').val(dateformat(d3));
			}else if($(this).val() == "2Mon"){
				var d3 = new Date(dynamicDate[0], dynamicDate[1]);
				$('#sDate').attr("type", "month");
				$('#eDate').attr("type", "month");
				$('#eDateForm').show();
				$('#sDateForm').show();
				$('#speedForm').hide();
				$('#sDate').val(selectDate.replace(/\//g, "-").substring(0, 7));
				$('#eDate').val(dateformat(d3).substring(0,7));
			}else if($(this).val() == "speed"){
				$('#sDate').attr("type", "date");
				$('#sDate').val(selectDate.replace(/\//g, "-"));
				$('#eDateForm').hide();
				$('#sDateForm').hide();
				$('#speedForm').show();
			}
			

			//일별데이터 submit후 날짜 포맷(검색한 날짜의 첫날로)
			if(selectDate.length < 10){
				if($(this).val()=="5M"){
					var testDate = selectDate + "-01"; 
					$('#sDate').val(testDate.replace(/\//g, "-"));
				}else if($(this).val()=="hour"){
					var testDate = selectDate + "-01";
					$('#sDate').val(testDate.replace(/\//g, "-"));
				}else if($(this).val()=="3day"){
					var testDate = selectDate + "-01";
					var testDate2 = selectDate + "-03";
					$('#sDate').val(testDate.replace(/\//g, "-"));
					$('#eDate').val(testDate2.replace(/\//g, "-"));
				}
			}
			
		});
 		
 		//조회 설정 레이어 외 다른 레이어 클릭시 조회 설정 레이어 닫기
 		$(document).mouseup(function(e) {
 			var layer = $('#searchList');
 			if(!layer.is(e.target) && layer.has(e.target).length === 0){
 				layer.fadeOut();
 			}
 			
 		});
 		
 		
 		//3일 데이터, 2달 데이터 자동 범위 지정
		$('#sDate').on('change', function() {
			if($('#date').val() == "3day"){
				var sDate = $(this).val();
				var dynamicSdate = sDate.split("-");
				var d4 = new Date(dynamicSdate[0], dynamicSdate[1], dynamicSdate[2]);
				d4.setMonth(d4.getMonth() - 1);
				d4.setDate(d4.getDate() + 2);
				console.log(dateformat(d4));
				$('#eDate').val(dateformat(d4));
			}else if($('#date').val() == "2Mon"){
				var sDate = $(this).val();
				var dynamicSdate = sDate.split("-");
				var d4 = new Date(dynamicSdate[0], dynamicSdate[1]);
				$('#eDate').val(dateformat(d4).substring(0, 7));
			}
		});
 		
 		//날짜 포맷 함수
 		function dateformat(date) {
 			var formatD;
			var yyyy = date.getFullYear();
			var MM = date.getMonth() + 1;
			if(selectDate.length >= 10){				
				if(MM < 10){
					MM = "0" + MM;
				}
				var dd = date.getDate();
				if(dd < 10){
					dd = "0" + dd;
				}
				formatD = yyyy +"-" + MM + "-" + dd;
				
			}else{
				if(MM < 10){
					MM = "0" + MM;
				}
				formatD = yyyy + "-" + MM;
			}
			
			return formatD;
		}
 		
 		//풍향 16방향 한글로 포맷
 		var r1;
 		var r2;
 		
 		//테이블 만들기 영역
 		var html;
 		html += '<tr class="warning">';
 		html += '<td style="font-weight:bold;">'+selectDate +'</td>';
 		html += '<td colspan=4 align="center" style="font-weight:bold;">' + '풍향 풍속 [m/s]' + '</td>';
 		html += '<td colspan=5 align="center" style="font-weight:bold;">' + '미세먼지 [µg/m³] ' + '</td>';
 		html += '<td colspan=5 align="center" style="font-weight:bold;">' + '초미세먼지 [µg/m³]' + '</td>';
 		html += '</tr>';
		html += '<tr class="info">';
 		html += '<td style="position: sticky; top:0;">' + '날짜 시간' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + '풍속 센서1' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + '풍향 센서1' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + '풍속 센서2' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + '풍향 센서2' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #1]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #2]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 창측[Seq #3]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #4]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 창측[Seq #5]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #1]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #2]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 창측[Seq #3]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 옥상[Seq #4]' + '</td>';
 		html += '<td style="position: sticky; top:0;">' + 'MAT 창측[Seq #5]' + '</td>';
 		html += '</tr>'

 		
 		//풍향 16방위 표시 변수 선언
 		var lot1Format = [];
 		var lot2Format = [];
 		
 		
 		//풍속데이터 조회시 컬럼값이 undefined라면 0으로 생성
 		for(var i = 0; i < getTime.length; i++){
 			if(windSensor1Data[i] === undefined){
 				windSensor1Data.push(0);
 				windSensor1Lot.push(0);
 			}
 			
 			if(windSensor2Data[i] === undefined){
 				windSensor2Data.push(0);
 				windSensor2Lot.push(0);
 			}
 		}
 		
 		//풍향 포맷 반복문
 		for(var i = 0; i < windSensor1Lot.length; i++){
 			var a =windSensor1Lot[i];
 			if(windSensor1Data[i] == 0 || a == 0){
 				windSensor1Data[i] = "데이터 없음";
 				lot1Format.push("데이터 없음");
 			}else if(a >= 348.76 || a <= 11.25){
 				lot1Format.push("북"); 				
 			}else if(a >= 11.26 && a <= 33.75){
 				lot1Format.push("북북동");
 			}else if(a >= 33.76 && a <= 56.25){
 				lot1Format.push("북동");
 			}else if(a >= 56.26 && a <= 78.75){
 				lot1Format.push("동북동");
 			}else if(a >= 78.76 && a <= 101.25){
 				lot1Format.push("동");
 			}else if(a >= 101.26 && a <= 123.75){
 				lot1Format.push("동남동");
 			}else if(a >= 123.76 && a <= 146.25){
 				lot1Format.push("남동");
 			}else if(a >= 146.26 && a <= 168.75){
 				lot1Format.push("남남동");
 			}else if(a >= 168.76 && a <= 191.25){
 				lot1Format.push("남");
 			}else if(a >= 191.26 && a <= 213.75){
 				lot1Format.push("남남서");
 			}else if(a >= 213.76 && a <= 236.25){
 				lot1Format.push("남서");
 			}else if(a >= 236.26 && a <= 258.75){
 				lot1Format.push("서남서");
 			}else if(a >= 258.76 && a <= 281.25){
 				lot1Format.push("서");
 			}else if(a >= 281.26 && a <= 303.75){
 				lot1Format.push("서북서");
 			}else if(a >= 303.76 && a <= 326.25){
 				lot1Format.push("북서");
 			}else if(a >= 326.26 && a <= 348.75){
 				lot1Format.push("북북서");
 			}
 		}
 		
 		//풍향 포맷 반복문
 		for(var i = 0; i < windSensor2Lot.length; i++){
 			var a =windSensor2Lot[i];
 			if(windSensor2Data[i] == 0 || a == 0){
 				windSensor2Data[i] = "데이터 없음";
 				lot2Format.push("데이터 없음");
 			}else if(a >= 348.76 || a <= 11.25){
 				lot2Format.push("북"); 				
 			}else if(a >= 11.26 && a <= 33.75){
 				lot2Format.push("북북동");
 			}else if(a >= 33.76 && a <= 56.25){
 				lot2Format.push("북동");
 			}else if(a >= 56.26 && a <= 78.75){
 				lot2Format.push("동북동");
 			}else if(a >= 78.76 && a <= 101.25){
 				lot2Format.push("동");
 			}else if(a >= 101.26 && a <= 123.75){
 				lot2Format.push("동남동");
 			}else if(a >= 123.76 && a <= 146.25){
 				lot2Format.push("남동");
 			}else if(a >= 146.26 && a <= 168.75){
 				lot2Format.push("남남동");
 			}else if(a >= 168.76 && a <= 191.25){
 				lot2Format.push("남");
 			}else if(a >= 191.26 && a <= 213.75){
 				lot2Format.push("남남서");
 			}else if(a >= 213.76 && a <= 236.25){
 				lot2Format.push("남서");
 			}else if(a >= 236.26 && a <= 258.75){
 				lot2Format.push("서남서");
 			}else if(a >= 258.76 && a <= 281.25){
 				lot2Format.push("서");
 			}else if(a >= 281.26 && a <= 303.75){
 				lot2Format.push("서북서");
 			}else if(a >= 303.76 && a <= 326.25){
 				lot2Format.push("북서");
 			}else if(a >= 326.26 && a <= 348.75){
 				lot2Format.push("북북서");
 			}
 		}
 		
 		//표 그리기
 		for(var i = 0; i < getTime.length; i++){
 			html += '<tr>';
 			html += '<td align="center">' + getTime[i] + '</td>';
 			html += '<td align="right">' + windSensor1Data[i] + '</td>';
 			html += '<td align="right">' + lot1Format[i] + '</td>';
 			html += '<td align="right">' + windSensor2Data[i] + '</td>';
 			html += '<td align="right">' + lot2Format[i] + '</td>';
 			html += '<td align="right">' + airSensor1PM10Data[i] + '</td>';
 			html += '<td align="right">' + airSensor2PM10Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor3PM10Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor4PM10Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor5PM10Data[i] + '</td>';
 			html += '<td align="right">' + airSensor1PM25Data[i] + '</td>';
 			html += '<td align="right">' + airSensor2PM25Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor3PM25Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor4PM25Data[i] +  '</td>';
 			html += '<td align="right">' + airSensor5PM25Data[i] +  '</td>';
 			html += '</tr>';
 		}
 		$('#mainTable').append(html);
 		
 		//기본 검색 조건을 테이블로할지 그래프로할지 조건문
 		if(formatData == 1){
 			$('#tableBtn').removeClass();
 			$('#tableBtn').addClass('btn btn-default btn-lg');
 			$('#graphBtn').addClass('btn btn-primary btn-lg');
 			$('#formatData').val(1);
 		}else{
 			$('#graphBtn').removeClass();
 			$('#graphBtn').addClass('btn btn-default btn-lg');
 			$('#tableBtn').addClass('btn btn-primary btn-lg');
 			$('#formatData').val(0);
 		}
 		
 		//그래프 버튼 클릭시 차트 영역 보여주기
 		$('#graphBtn').on("click", function(e) {
			e.preventDefault();
			$('#radioArea').show();
			$('#tableArea').fadeOut();
			$('#chartArea').fadeIn();
			$(this).removeClass();
			$(this).addClass('btn btn-primary btn-lg');			
			$('#tableBtn').removeClass();
			$('#tableBtn').addClass('btn btn-default btn-lg');
			$('#formatData').val(1);
		});
 		
 		//테이블 버튼 클릭시 표 영역 보여주기
 		$('#tableBtn').on("click", function(e) {
 			e.preventDefault();
 			$('#radioArea').hide();
 			$('#chartArea').fadeOut();
 			$('#tableArea').fadeIn();
 			$(this).removeClass();
 			$(this).addClass('btn btn-primary btn-lg');
 			$('#graphBtn').removeClass();
 			$('#graphBtn').addClass('btn btn-default btn-lg');
 			$('#formatData').val(0);
 		});
 		
 		
 		//표 엑셀 내보내기 (익스플로러, 크롬 확인)
 		$("#excelBtn").click(function() {
 			var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
 			tab_text = tab_text
 					+ '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
 			tab_text = tab_text
 					+ '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
 			tab_text = tab_text + '<x:Name>Wind Data</x:Name>';
 			tab_text = tab_text
 					+ '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
 			tab_text = tab_text
 					+ '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
 			tab_text = tab_text + "<table border='1px'>";
 			var exportTable = $('#mainTable').clone();
 			exportTable.find('input').each(function(index, elem) {
 				$(elem).remove();
 			});
 			tab_text = tab_text + exportTable.html();
 			tab_text = tab_text + '</table></body></html>';
 			var data_type = 'data:application/vnd.ms-excel';
 			var ua = window.navigator.userAgent;
 			var msie = ua.indexOf("MSIE ");
 			var fileName = '풍향/풍속데이터' + '.xls';
 			//Explorer 환경에서 다운로드
 			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
 				if (window.navigator.msSaveBlob) {
 					var blob = new Blob([ tab_text ], {
 						type : "application/csv;charset=utf-8;"
 					});
 					navigator.msSaveBlob(blob, fileName);
 				}
 			} else {
 				var blob2 = new Blob([ tab_text ], {
 					type : "application/csv;charset=utf-8;"
 				});
 				var filename = fileName;
 				var elem = window.document.createElement('a');
 				elem.href = window.URL.createObjectURL(blob2);
 				elem.download = filename;
 				document.body.appendChild(elem);
 				elem.click();
 				document.body.removeChild(elem);
 			}
 		});

});