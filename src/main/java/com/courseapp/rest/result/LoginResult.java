package com.courseapp.rest.result;

import com.courseapp.model.User;

public class LoginResult {
	
	public LoginResult(User user, boolean valid){
		this.user = user;
		this.valid = valid;
	}
	
	private User user;
	private boolean valid;
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
	
	public boolean isValid() {
		return valid;
	}
	
	public void setValid(boolean valid) {
		this.valid = valid;
	}
}
