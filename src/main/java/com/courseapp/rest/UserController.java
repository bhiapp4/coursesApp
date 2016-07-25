package com.courseapp.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.courseapp.model.User;
import com.courseapp.repositories.UserRepository;
import com.courseapp.rest.result.LoginResult;

@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@RequestMapping(value="/all",method = RequestMethod.GET)
	public List<User> getAll() throws Exception{
		return userRepository.findAllUsers();
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	public ResponseEntity<Boolean> checkIfUserAlreadyExists(@PathVariable("username") String username) throws Exception{
		User user = userRepository.findByUserName(username);
		return new ResponseEntity<Boolean>(user != null, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<User>createUser(@RequestBody User user) throws Exception{
		user = userRepository.createUser(user);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}

	@RequestMapping(value="/validate", method=RequestMethod.POST)
	public ResponseEntity<LoginResult>validateUserCredentials(@RequestBody User user) throws Exception{
		User dbUser = userRepository.validate(user);
		LoginResult result = new LoginResult(dbUser == null ? user:dbUser,dbUser != null);
		return new ResponseEntity<LoginResult>(result, HttpStatus.OK);
		
	}
}
