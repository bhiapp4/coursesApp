package com.courseapp.security.hmac.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.courseapp.model.User;
import com.courseapp.repositories.UserRepository;
import com.courseapp.security.SecurityUser;
import com.courseapp.security.dto.LoginDTO;
import com.courseapp.security.hmac.HmacException;
import com.courseapp.security.hmac.HmacSecurityFilter;
import com.courseapp.security.hmac.HmacSigner;
import com.courseapp.security.hmac.HmacToken;
import com.courseapp.security.hmac.HmacUtils;

/**
 * Authentication service
 * 
 */
@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;
    
    @Autowired
    private UserRepository userRepository;

    /**
     * Authenticate a user in Spring Security
     * The following headers are set in the response:
     * - X-TokenAccess: JWT
     * - X-Secret: Generated secret in base64 using SHA-256 algorithm
     * - WWW-Authenticate: Used algorithm to encode secret
     * The authenticated user in set ine the Spring Security context
     * The generated secret is stored in a static list for every user
     * @see MockUsers
     * @param loginDTO credentials
     * @param response http response
     * @return UserDTO instance
     * @throws HmacException
     */
    public User authenticate(LoginDTO loginDTO, HttpServletResponse response) throws Exception {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDTO.getLogin(),loginDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        //Retrieve security user after authentication
        SecurityUser securityUser = (SecurityUser) userDetailsService.loadUserByUsername(loginDTO.getLogin());

        //Get Hmac signed token
        Map<String,String> customClaims = new HashMap<>();
        customClaims.put(HmacSigner.ENCODING_CLAIM_PROPERTY, HmacUtils.HMAC_SHA_256);

        User user = userRepository.findByUserName(securityUser.getUsername());
        HmacToken hmacToken = HmacSigner.getSignedToken(user.getSecretKey(),securityUser.getUsername(), HmacSecurityFilter.JWT_TTL,customClaims);
        
        //Set all tokens in http response headers
        response.setHeader(HmacUtils.X_TOKEN_ACCESS, hmacToken.getJwt());
        response.setHeader(HmacUtils.X_SECRET, hmacToken.getSecret());
        response.setHeader(HttpHeaders.WWW_AUTHENTICATE, HmacUtils.HMAC_SHA_256);

        return user;
    }

    /**
     * Logout a user
     * - Clear the Spring Security context
     * - Remove the stored UserDTO secret
     */
    public void logout(){
        if(SecurityContextHolder.getContext().getAuthentication() != null
                && SecurityContextHolder.getContext().getAuthentication().isAuthenticated())
        {
        	SecurityContextHolder.clearContext();
        }
    }

    /**
     * Authentication for every request
     * - Triggered by every http request except the authentication
     * @see fr.redfroggy.hmac.configuration.security.XAuthTokenFilter
     * Set the authenticated user in the Spring Security context
     * @param username username
     */
    public void tokenAuthentication(String username){
        UserDetails details = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(details, details.getPassword(), details.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);
    }
}
