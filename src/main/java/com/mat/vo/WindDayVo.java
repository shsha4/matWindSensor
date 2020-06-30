package com.mat.vo;

public class WindDayVo {

	private String data_date;
	private int group_id;
	private int sensor_id;
	private double speed_avrg;
	private double direction_avrg;
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
	public double getSpeed_avrg() {
		return speed_avrg;
	}
	public void setSpeed_avrg(double speed_avrg) {
		this.speed_avrg = speed_avrg;
	}
	public double getDirection_avrg() {
		return direction_avrg;
	}
	public void setDirection_avrg(double direction_avrg) {
		this.direction_avrg = direction_avrg;
	}
	@Override
	public String toString() {
		return "WindDayVo [data_date=" + data_date + ", group_id=" + group_id + ", sensor_id=" + sensor_id
				+ ", speed_avrg=" + speed_avrg + ", direction_avrg=" + direction_avrg + "]";
	}
	
	
}
