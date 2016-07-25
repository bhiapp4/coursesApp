package com.courseapp.model;

import java.util.Date;

import com.datastax.driver.mapping.annotations.UDT;

@UDT(name="reviewDetail")
public class ReviewDetail {

	private int no_of_stars;
	private Date review_date;
	private String full_name;
	private String review_comment;

	public int getNo_of_stars() {
		return no_of_stars;
	}
	
	public void setNo_of_stars(int no_of_stars) {
		this.no_of_stars = no_of_stars;
	}

	public Date getReview_date() {
		return review_date;
	}

	public void setReview_date(Date review_date) {
		this.review_date = review_date;
	}

	public String getFull_name() {
		return full_name;
	}
	
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getReview_comment() {
		return review_comment;
	}

	public void setReview_comment(String review_comment) {
		this.review_comment = review_comment;
	}

}
