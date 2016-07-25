package com.courseapp.model;

import java.util.Date;
import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

import com.courseapp.security.dto.Profile;
import com.datastax.driver.mapping.annotations.PartitionKey;
import com.datastax.driver.mapping.annotations.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Table(name = "users")
public class User {

	@PartitionKey
	private String user_name;
	private String password;
	private String first_name;
	private String last_name;
	private String middle_name;
	private String company;
	private List<String> registered_courses;
	private List<String> instructing_courses;	
	private Date created_date;
	private Date updated_date;

	@NotEmpty
    private List<String> authorities;

    @JsonIgnore
    private String secretKey;

    private Profile profile;


	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	
	public String getUser_name() {
		return user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getMiddle_name() {
		return middle_name;
	}

	public void setMiddle_name(String middle_name) {
		this.middle_name = middle_name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public List<String> getRegistered_courses() {
		return registered_courses;
	}
	
	public void setRegistered_courses(List<String> registered_courses) {
		this.registered_courses = registered_courses;
	}
	
	public void setInstructing_courses(List<String> instructing_courses) {
		this.instructing_courses = instructing_courses;
	}
	
	public List<String> getInstructing_courses() {
		return instructing_courses;
	}
	
	public Date getCreated_date() {
		return created_date;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}
		
	public List<String> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<String> authorities) {
		this.authorities = authorities;
	}

	public String getSecretKey() {
		return secretKey;
	}

	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}

	public Profile getProfile() {
		return profile;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((user_name == null) ? 0 : user_name.hashCode());
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
		User other = (User) obj;
		if (user_name == null) {
			if (other.user_name != null)
				return false;
		} else if (!user_name.equals(other.user_name))
			return false;
		return true;
	}

}
