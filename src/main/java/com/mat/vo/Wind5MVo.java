package com.mat.vo;

public class Wind5MVo {
	private String data_date;
	private String data_hour;
	private String data_min;
	private int group_id;
	private int sensor_id;
	private double speed_avrg;
	private double direction_avrg;
	
	
	@Override
	public String toString() {
		return "Wind5MVo [data_date=" + data_date + ", data_hour=" + data_hour + ", data_min=" + data_min
				+ ", group_id=" + group_id + ", sensor_id=" + sensor_id + ", speed_avrg=" + speed_avrg
				+ ", direction_avrg=" + direction_avrg + "]";
	}
	
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
	public String getData_min() {
		return data_min;
	}
	public void setData_min(String data_min) {
		this.data_min = data_min;
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

	
}
