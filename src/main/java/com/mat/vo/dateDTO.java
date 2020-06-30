package com.mat.vo;

public class dateDTO {
	private String date;
	private String sDate;
	private String eDate;
	private int formatData;
	private double speed;
	

	public double getSpeed() {
		return speed;
	}
	public void setSpeed(double speed) {
		this.speed = speed;
	}
	public int getFormatData() {
		return formatData;
	}
	public void setFormatData(int formatData) {
		this.formatData = formatData;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getsDate() {
		return sDate;
	}
	public void setsDate(String sDate) {
		this.sDate = sDate;
	}
	public String geteDate() {
		return eDate;
	}
	public void seteDate(String eDate) {
		this.eDate = eDate;
	}
	
	@Override
	public String toString() {
		return "dateDTO [date=" + date + ", sDate=" + sDate + ", eDate=" + eDate + ", formatData=" + formatData
				+ ", speed=" + speed + "]";
	}

}
