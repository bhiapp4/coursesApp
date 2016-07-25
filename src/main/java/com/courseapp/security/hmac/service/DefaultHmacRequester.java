package com.courseapp.security.hmac.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courseapp.model.User;
import com.courseapp.repositories.UserRepository;
import com.courseapp.security.hmac.HmacRequester;

/**
 * Hmac Requester service
 * 
 */
@Service
public class DefaultHmacRequester implements HmacRequester{
	
	@Autowired
	private UserRepository userRepository;

    @Override
    public Boolean canVerify(HttpServletRequest request) {
        return request.getRequestURI().contains("/api") && !request.getRequestURI().contains("/api/authenticate");
    }

    @Override
	public String getSecret(String iss) {
		User user = null;
		try {
			user = userRepository.findByUserName(iss);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (user != null) {
			return user.getSecretKey();
		}
		return null;
	}

    @Override
    public Boolean isSecretInBase64() {
        return true;
    }
}
