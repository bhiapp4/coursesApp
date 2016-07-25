package com.courseapp.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping(value="/test/get/json", method=RequestMethod.GET, produces="application/json")
	public String testGetJson() {
		return "hello world";
	}

}
