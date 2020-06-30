package com.mat.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mat.vo.AirSensor5MVo;
import com.mat.vo.AirSensorDayVo;
import com.mat.vo.AirSensorHourVo;
import com.mat.vo.KoreaAirSensorHourVo;
import com.mat.vo.Wind5MVo;
import com.mat.vo.WindDayVo;
import com.mat.vo.WindHourVo;
import com.mat.vo.dateDTO;

@Repository
public class WindDaoImpl implements WindDao{

	@Autowired
	SqlSession sqlSession;

	@Override
	public List<AirSensor5MVo> getAirSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getAirSensor", date);
	}

	@Override
	public List<Wind5MVo> getWindSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getWindSensor", date);
	}

	@Override
	public List<AirSensorHourVo> getHourAirSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getHourAirSensor", date);
	}

	@Override
	public List<WindHourVo> getHourWindSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getHourWindSensor", date);
	}

	@Override
	public List<AirSensorDayVo> getDayAirSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getDayAirSensor", date);
	}

	@Override
	public List<WindDayVo> getDayWindSensor(dateDTO date)throws Exception {
		return sqlSession.selectList("getDayWindSensor", date);
	}

	@Override
	public List<WindHourVo> get3DayHourWind(dateDTO date) throws Exception {
		return sqlSession.selectList("get3DayHourWind", date);
	}

	@Override
	public List<AirSensorHourVo> get3DayHourAir(dateDTO date) throws Exception {
		return sqlSession.selectList("get3DayHourAir", date);
	}

	@Override
	public List<WindDayVo> get2MonDayWind(dateDTO date) throws Exception {
		return sqlSession.selectList("get2MonDayWind", date);
	}

	@Override
	public List<AirSensorDayVo> get2MonDayAir(dateDTO date) throws Exception {
		return sqlSession.selectList("get2MonDayAir", date);
	}

	@Override
	public List<KoreaAirSensorHourVo> getKoreaAirData(dateDTO date) throws Exception {
		return sqlSession.selectList("getKoreaAirData", date);
	}

	@Override
	public List<AirSensorDayVo> getJoinAir(dateDTO date) throws Exception {
		return sqlSession.selectList("getJoinAir", date);
	}

	@Override
	public List<WindDayVo> getJoinWind(dateDTO date) throws Exception {
		return sqlSession.selectList("getJoinWind", date);
	}


	

}
