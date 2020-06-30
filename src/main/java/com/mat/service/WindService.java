package com.mat.service;

import java.util.List;

import com.mat.vo.AirSensor5MVo;
import com.mat.vo.AirSensorDayVo;
import com.mat.vo.AirSensorHourVo;
import com.mat.vo.KoreaAirSensorHourVo;
import com.mat.vo.Wind5MVo;
import com.mat.vo.WindDayVo;
import com.mat.vo.WindHourVo;
import com.mat.vo.dateDTO;

public interface WindService {

	public List<AirSensor5MVo> getAirSensor(dateDTO date)throws Exception;
	public List<Wind5MVo> getWindSensor(dateDTO date)throws Exception;
	public List<AirSensorHourVo> getHourAirSensor(dateDTO date)throws Exception;
	public List<WindHourVo> getHourWindSensor(dateDTO date)throws Exception;
	public List<AirSensorDayVo> getDayAirSensor(dateDTO date)throws Exception;
	public List<WindDayVo> getDayWindSensor(dateDTO date)throws Exception;
	public List<WindHourVo> get3DayHourWind(dateDTO date)throws Exception;
	public List<AirSensorHourVo> get3DayHourAir(dateDTO date)throws Exception;
	public List<WindDayVo> get2MonDayWind(dateDTO date)throws Exception;
	public List<AirSensorDayVo> get2MonDayAir(dateDTO date)throws Exception;
	public List<KoreaAirSensorHourVo> getKoreaAirData(dateDTO date)throws Exception;
	public List<AirSensorDayVo> getJoinAir(dateDTO date)throws Exception;
	public List<WindDayVo> getJoinWind(dateDTO date)throws Exception;

}
