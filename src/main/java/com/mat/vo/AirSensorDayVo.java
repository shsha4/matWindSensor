package com.mat.vo;

public class AirSensorDayVo {

	private String data_date;
	private int group_id;
	private int sensor_id;
	private double sensor_lat;
	private double sensor_lon;
	private double temp_avrg;
	private double humid_avrg;
	private int pm25_grm_avrg;
	private int pm10_grm_avrg;
	
	public String getData_date() {
		return data_date;
	}
	public void setData_date(String data_date) {
		this.data_date = data_date;
	}
	public int getGroup_id() {
		return group_id;
	}
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
	public int getSensor_id() {
		return sensor_id;
	}
	public void setSensor_id(int sensor_id) {
		this.sensor_id = sensor_id;
	}
	public double getSensor_lat() {
		return sensor_lat;
	}
	public void setSensor_lat(double sensor_lat) {
		this.sensor_lat = sensor_lat;
	}
	public double getSensor_lon() {
		return sensor_lon;
	}
	public void setSensor_lon(double sensor_lon) {
		this.sensor_lon = sensor_lon;
	}
	public double getTemp_avrg() {
		return temp_avrg;
	}
	public void setTemp_avrg(double temp_avrg) {
		this.temp_avrg = temp_avrg;
	}
	public double getHumid_avrg() {
		return humid_avrg;
	}
	public void setHumid_avrg(double humid_avrg) {
		this.humid_avrg = humid_avrg;
	}
	public int getPm25_grm_avrg() {
		return pm25_grm_avrg;
	}
	public void setPm25_grm_avrg(int pm25_grm_avrg) {
		this.pm25_grm_avrg = pm25_grm_avrg;
	}
	public int getPm10_grm_avrg() {
		return pm10_grm_avrg;
	}
	public void setPm10_grm_avrg(int pm10_grm_avrg) {
		this.pm10_grm_avrg = pm10_grm_avrg;
	}
	@Override
	public String toString() {
		return "AirSensorDayVo [data_date=" + data_date + ", group_id=" + group_id + ", sensor_id=" + sensor_id
				+ ", sensor_lat=" + sensor_lat + ", sensor_lon=" + sensor_lon + ", temp_avrg=" + temp_avrg
				+ ", humid_avrg=" + humid_avrg + ", pm25_grm_avrg=" + pm25_grm_avrg + ", pm10_grm_avrg=" + pm10_grm_avrg
				+ "]";
	}
	
	
	
}
