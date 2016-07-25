package com.courseapp.security.hmac.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.courseapp.model.User;
import com.courseapp.repositories.UserRepository;
import com.courseapp.security.SecurityUser;

/**
 * Hmac user details service
 * 
 */
@Component
public class HmacUserDetailsService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //UserDTO userDTO = MockUsers.findByUsername(username);
    	User user = null;
		try {
			user = userRepository.findByUserName(username);
		} catch (Exception e) {
			e.printStackTrace();
		}
        if (user == null) {
            throw new UsernameNotFoundException("User "+username+" not found");
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        if(!user.getAuthorities().isEmpty()){
            for(String authority : user.getAuthorities()){
                authorities.add(new SimpleGrantedAuthority(authority));
            }
        }

        //return new SecurityUser(user.getId(),userDTO.getLogin(),userDTO.getPassword(),userDTO.getProfile(),authorities);
        return new SecurityUser(user.getUser_name(), user.getPassword(), authorities);
    }
}
