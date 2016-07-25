package com.courseapp.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.courseapp.model.Course;
import com.courseapp.repositories.CourseRepository;

@RestController
@RequestMapping("/courses")
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Course> getAll() throws Exception {
		return courseRepository.findAll();
	}

	@RequestMapping(value = "/{courseType}", method = RequestMethod.GET)
	public ResponseEntity<List<Course>> getCourseByTypes(@PathVariable("courseType") String courseType)
			throws Exception {
		return new ResponseEntity<List<Course>>(courseRepository.findCoursesByType(courseType), HttpStatus.OK);
	}
}
