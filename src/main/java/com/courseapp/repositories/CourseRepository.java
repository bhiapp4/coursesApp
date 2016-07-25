package com.courseapp.repositories;

import java.util.List;

import com.courseapp.model.Course;

public interface CourseRepository {

	public Course findByTitle(String title) throws Exception;
	
	public List<Course>findCoursesByAuthor(String author) throws Exception;
	
	public List<Course>findAll() throws Exception;
	
	public List<Course>findCoursesByType(String type) throws Exception;
	
}
