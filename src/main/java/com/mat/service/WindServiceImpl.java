package com.mat.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.dao.WindDao;
import com.mat.vo.AirSensor5MVo;
import com.mat.vo.AirSensorDayVo;
import com.mat.vo.AirSensorHourVo;
import com.mat.vo.KoreaAirSensorHourVo;
import com.mat.vo.Wind5MVo;
import com.mat.vo.WindDayVo;
import com.mat.vo.WindHourVo;
import com.mat.vo.dateDTO;

@Service
public class WindServiceImpl implements WindService{

	@Autowired
	private WindDao dao;
	
	
	//현재 날짜 구하기 및 테이블 형식으로 포맷
	private Date nowDate = new Date();
	private SimpleDateFormat format1 = new SimpleDateFormat("yyyy/MM/dd");
	private String getSdate = format1.format(nowDate);
	
	@Override
	public List<AirSensorHourVo> getHourAirSensor(dateDTO date)throws Exception {
		
		if(date.getsDate() == null){
			date.setsDate(getSdate);
			String sDate = date.getsDate().replace("-", "/");
			date.setsDate(sDate);
			
		}else{
			String sDate = date.getsDate().replace("-", "/");
			date.setsDate(sDate);
		}

		
		return dao.getHourAirSensor(date);
	}
	
	@Override
	public List<WindHourVo> getHourWindSensor(dateDTO date)throws Exception {
		
		String sDate = date.getsDate().replace("-", "/");
		date.setsDate(sDate);

		
		return dao.getHourWindSensor(date);
	}
	
	@Override
	public List<AirSensor5MVo> getAirSensor(dateDTO date)throws Exception {
		
		String sDate = date.getsDate().replace("-", "/");
		String tableDate = "l_air_sensor_5m_";
		String tableMonth = (sDate.substring(0, 7)).replace("/", "");
		date.setDate(tableDate + tableMonth);
		date.setsDate(sDate);
	
		
		return dao.getAirSensor(date);
	}

	@Override
	public List<Wind5MVo> getWindSensor(dateDTO date)throws Exception {
		
		String sDate = date.getsDate().replace("-", "/");
		date.setsDate(sDate);

		return dao.getWindSensor(date);
	}

	@Override
	public List<AirSensorDayVo> getDayAirSensor(dateDTO date)throws Exception {
		
		String sDate = date.getsDate().replace("-", "/");
		date.setsDate(sDate);
		return dao.getDayAirSensor(date);
	}

	@Override
	public List<WindDayVo> getDayWindSensor(dateDTO date)throws Exception {
		
		String sDate = date.getsDate().replace("-", "/");
		date.setsDate(sDate);
			
		return dao.getDayWindSensor(date);
	}

	@Override
	public List<WindHourVo> get3DayHourWind(dateDTO date) throws Exception {
		String sDate = date.getsDate().replace("-", "/");
		String eDate = date.geteDate().replace("-", "/");
		date.setsDate(sDate);
		date.seteDate(eDate);
		return dao.get3DayHourWind(date);
	}

	@Override
	public List<AirSensorHourVo> get3DayHourAir(dateDTO date) throws Exception {
		String sDate = date.getsDate().replace("-", "/");
		String eDate = date.geteDate().replace("-", "/");
		date.setsDate(sDate);
		date.seteDate(eDate);
		return dao.get3DayHourAir(date);
	}

	@Override
	public List<WindDayVo> get2MonDayWind(dateDTO date) throws Exception {
		String sDate = date.getsDate().replace("-", "/");
		String eDate = date.geteDate().replace("-", "/");
		date.setsDate(sDate);
		date.seteDate(eDate);
		return dao.get2MonDayWind(date);
	}

	@Override
	public List<AirSensorDayVo> get2MonDayAir(dateDTO date) throws Exception {
		String sDate = date.getsDate().replace("-", "/");
		String eDate = date.geteDate().replace("-", "/");
		date.setsDate(sDate);
		date.seteDate(eDate);
		return dao.get2MonDayAir(date);
	}

	@Override
	public List<KoreaAirSensorHourVo> getKoreaAirData(dateDTO date) throws Exception {
		String sDate = date.getsDate().replace("/", "-");
		String eDate = date.geteDate().replace("/", "-");
		date.setsDate(sDate);
		date.seteDate(eDate);
		return dao.getKoreaAirData(date);
	}

	@Override
	public List<AirSensorDayVo> getJoinAir(dateDTO date) throws Exception {
		date.setsDate(getSdate);
		return dao.getJoinAir(date);
	}

	@Override
	public List<WindDayVo> getJoinWind(dateDTO date) throws Exception {
		date.setsDate(getSdate);
		return dao.getJoinWind(date);
	}


}
