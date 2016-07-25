package com.courseapp.model;

import java.util.List;

import com.datastax.driver.mapping.annotations.FrozenValue;
import com.datastax.driver.mapping.annotations.PartitionKey;
import com.datastax.driver.mapping.annotations.Table;

@Table(name="reviews")
public class CourseReview {
	
	@PartitionKey
	private String course_name;
	
	@FrozenValue
	private List<ReviewDetail>reviews;

	public String getCourse_name() {
		return course_name;
	}
	
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}	
		
	public List<ReviewDetail> getReviews() {
		return reviews;
	}
	
	public void setReviews(List<ReviewDetail> reviews) {
		this.reviews = reviews;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((course_name == null) ? 0 : course_name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CourseReview other = (CourseReview) obj;
		if (course_name == null) {
			if (other.course_name != null)
				return false;
		} else if (!course_name.equals(other.course_name))
			return false;
		return true;
	}
	
	
	
}
