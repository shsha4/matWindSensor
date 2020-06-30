package com.mat.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.mat.service.WindService;
import com.mat.vo.AirSensor5MVo;
import com.mat.vo.AirSensorDayVo;
import com.mat.vo.AirSensorHourVo;
import com.mat.vo.KoreaAirSensorHourVo;
import com.mat.vo.Wind5MVo;
import com.mat.vo.WindDayVo;
import com.mat.vo.WindHourVo;
import com.mat.vo.dateDTO;

@Controller
public class WindController {

	@Autowired
	private WindService service;
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String windGraphPage(Model model)throws Exception{
		int filterCase = 2;
		dateDTO date = new dateDTO();
		date.setFormatData(1);
		Gson gson = new Gson();
		List<AirSensorHourVo> list1 = service.getHourAirSensor(date);	
		String airList = gson.toJson(list1);
		List<WindHourVo> list2 = service.getHourWindSensor(date);
		String windList = gson.toJson(list2);
		
		model.addAttribute("airList", airList);
		model.addAttribute("windList", windList);
		model.addAttribute("filterCase", filterCase);
		model.addAttribute("selectDate", date.getsDate());
		model.addAttribute("koreaList", "0");
		model.addAttribute("formatData", date.getFormatData());
		return "windgraph";
	}
	
	@RequestMapping(value = "/searchData.do", method = RequestMethod.POST)
	public String searchData(@ModelAttribute dateDTO date, Model model){
		
		//Gson 라이브러리로 Json 객체로 변환
		Gson gson = new Gson();
		System.out.println(date.toString());
		//JSP 조회값 가져오기
		String filter = date.getDate();
		System.out.println(filter);
		//조회값 리턴 변수
		int filterCase = 0;
		
		//5분데이터 조회시
		if(filter.equals("5M")){
			System.out.println("5분 데이터 조회");
			List<AirSensor5MVo> list1 = new ArrayList<AirSensor5MVo>();
			List<Wind5MVo> list2 = new ArrayList<Wind5MVo>();
			try {				
				list1 = service.getAirSensor(date);
				list2 = service.getWindSensor(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			filterCase = 1;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("koreaList", "0");
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("selectDate", date.getsDate());
			model.addAttribute("formatData", date.getFormatData());
		//시간데이터 조회시
		}else if(filter.equals("hour")){
			System.out.println("시간별 데이터 조회");
			List<AirSensorHourVo> list1 = new ArrayList<AirSensorHourVo>();
			List<WindHourVo> list2 = new ArrayList<WindHourVo>();
			List<KoreaAirSensorHourVo> list3 = new ArrayList<KoreaAirSensorHourVo>();
			try {
				list1 = service.getHourAirSensor(date);
				list2 = service.getHourWindSensor(date);
				list3 = service.getKoreaAirData(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			String koreaList = gson.toJson(list3);
			filterCase = 2;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("koreaList", koreaList);
			model.addAttribute("selectDate", date.getsDate().replace("-", "/"));
			model.addAttribute("formatData", date.getFormatData());
		//일별 데이터 조회시	
		}else if(filter.equals("day")){
			System.out.println("일별 데이터 조회");
			List<AirSensorDayVo> list1 = new ArrayList<AirSensorDayVo>();
			List<WindDayVo> list2 = new ArrayList<WindDayVo>();
			try {
				list1 = service.getDayAirSensor(date);
				list2 = service.getDayWindSensor(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			filterCase = 3;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("koreaList", "0");
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("selectDate", date.getsDate());
			model.addAttribute("formatData", date.getFormatData());
		}else if(filter.equals("3day")){
			System.out.println("3일 데이터 조회");
			List<AirSensorHourVo> list1 = new ArrayList<AirSensorHourVo>();
			List<WindHourVo> list2 = new ArrayList<WindHourVo>();
			List<KoreaAirSensorHourVo> list3 = new ArrayList<KoreaAirSensorHourVo>();
			try {
				list1 = service.get3DayHourAir(date);
				list2 = service.get3DayHourWind(date);
				list3 = service.getKoreaAirData(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			String koreaList = gson.toJson(list3);
			filterCase = 4;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("koreaList", koreaList);
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("selectDate", date.getsDate().replace("-", "/"));
			model.addAttribute("selecteDate", date.geteDate().replace("-", "/"));
			model.addAttribute("formatData", date.getFormatData());
		}else if(filter.equals("2Mon")){
			System.out.println("2개월 데이터 조회");
			List<AirSensorDayVo> list1 = new ArrayList<AirSensorDayVo>();
			List<WindDayVo> list2 = new ArrayList<WindDayVo>();
			try {
				list1 = service.get2MonDayAir(date);
				list2 = service.get2MonDayWind(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			filterCase = 5;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("koreaList", "0");
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("selectDate", date.getsDate());
			model.addAttribute("selecteDate", date.geteDate());
			model.addAttribute("formatData", date.getFormatData());
		}else if(filter.equals("speed")){
			System.out.println("풍속별 데이터 조회");
			List<AirSensorDayVo> list1 = new ArrayList<AirSensorDayVo>();
			List<WindDayVo> list2 = new ArrayList<WindDayVo>();
			try {
				list1 = service.getJoinAir(date);
				list2 = service.getJoinWind(date);
			} catch (Exception e) {
				System.out.println("테이블 조회 실패");
			}
			String airList = gson.toJson(list1);
			String windList = gson.toJson(list2);
			filterCase = 6;
			model.addAttribute("airList", airList);
			model.addAttribute("windList", windList);
			model.addAttribute("koreaList", "0");
			model.addAttribute("filterCase", filterCase);
			model.addAttribute("selectDate", date.getsDate());
			model.addAttribute("selecteDate", date.geteDate());
			model.addAttribute("formatData", date.getFormatData());
		}else{
			System.out.println("filter 오류");
		}
		
		return "windgraph";
	}
	
}
