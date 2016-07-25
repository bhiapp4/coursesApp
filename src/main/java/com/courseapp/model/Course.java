package com.courseapp.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.datastax.driver.mapping.annotations.FrozenValue;
import com.datastax.driver.mapping.annotations.PartitionKey;
import com.datastax.driver.mapping.annotations.Table;

@Table(name = "courses")
public class Course {

	@PartitionKey
	private String title;
	private String author;
	private String description;
	private BigDecimal fee;
	@FrozenValue
	private List<Module> modules;
	private Date created_date;
	private Date updated_date;
	private String category;
	private String end_goal;
	private String requirements;
	private CourseLevel level;
	private String duration;
	
	public void setDuration(String duration) {
		this.duration = duration;
	}
	
	public String getDuration() {
		return duration;
	}
	
	public void setLevel(CourseLevel level) {
		this.level = level;
	}
	
	public CourseLevel getLevel() {
		return level;
	}
	
	public String getEnd_goal() {
		return end_goal;
	}
	
	public void setEnd_goal(String end_goal) {
		this.end_goal = end_goal;
	}
	
	public String getRequirements() {
		return requirements;
	}
	
	public void setRequirements(String requirements) {
		this.requirements = requirements;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public BigDecimal getFee() {
		return fee;
	}
	
	public void setFee(BigDecimal fee) {
		this.fee = fee;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public List<Module> getModules() {
		return modules;
	}

	public void setModules(List<Module> modules) {
		this.modules = modules;
	}

	public Date getCreated_date() {
		return created_date;
	}

	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		Course other = (Course) obj;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	
	

}
