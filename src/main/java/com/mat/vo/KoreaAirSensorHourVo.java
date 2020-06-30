package com.mat.vo;

public class KoreaAirSensorHourVo {
	private String data_date;
	private String data_hour;
	private int group_id;
	private int pm10_grm;
	private int pm25_grm;
	public String getData_date() {
		return data_date;
	}
	public void setData_date(String data_date) {
		this.data_date = data_date;
	}
	public String getData_hour() {
		return data_hour;
	}
	public void setData_hour(String data_hour) {
		this.data_hour = data_hour;
	}
	public int getGroup_id() {
		return group_id;
	}
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
	public int getPm10_grm() {
		return pm10_grm;
	}
	public void setPm10_grm(int pm10_grm) {
		this.pm10_grm = pm10_grm;
	}
	public int getPm25_grm() {
		return pm25_grm;
	}
	public void setPm25_grm(int pm25_grm) {
		this.pm25_grm = pm25_grm;
	}
	
	@Override
	public String toString() {
		return "KoreaAirSensorHourVo [data_date=" + data_date + ", data_hour=" + data_hour + ", group_id=" + group_id
				+ ", pm10_grm=" + pm10_grm + ", pm25_grm=" + pm25_grm + "]";
	}
	
	
}
