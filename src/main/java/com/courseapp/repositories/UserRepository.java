package com.courseapp.repositories;

import java.util.List;

import com.courseapp.model.User;

public interface UserRepository {

    public User findByUserName(String username) throws Exception;

	public List<User>findAllUsers() throws Exception;
	
	public User createUser(User user) throws Exception;
	
	public User validate(User user) throws Exception;

}
