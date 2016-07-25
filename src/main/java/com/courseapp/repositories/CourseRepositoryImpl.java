package com.courseapp.repositories;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.cassandra.config.CassandraSessionFactoryBean;
import org.springframework.stereotype.Repository;

import com.courseapp.model.Course;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.mapping.Mapper;
import com.datastax.driver.mapping.MappingManager;
import com.datastax.driver.mapping.Result;

@Repository
public class CourseRepositoryImpl implements CourseRepository {

	@Autowired
	public CassandraSessionFactoryBean session;

	private Mapper<Course> mapper;

	@PostConstruct
	void initialize() {
		mapper = new MappingManager(session.getObject()).mapper(Course.class);
	}

	@Override
	public Course findByTitle(String title) throws Exception{
		String query = "select * from courses where title=?";
		ResultSet results = session.getObject().execute(query, new Object[] { title });
		Result<Course> courses = mapper.map(results);
		return courses.one();
	}

	@Override
	public List<Course> findCoursesByAuthor(String author) throws Exception{
		String query = "select * from courses where author=?";
		return performDbQuery(query, new Object[] { author });
	}

	@Override
	public List<Course> findAll() throws Exception{
		return performDbQuery("select * from courses", new Object[] {});
	}

	private List<Course> performDbQuery(String query, Object[] params) throws Exception{
		ResultSet results = session.getObject().execute(query, params);
		Result<Course> courses = mapper.map(results);
		List<Course> result = new ArrayList<>();
		for (Course course : courses) {
			result.add(course);
		}

		return result;

	}

	@Override
	public List<Course> findCoursesByType(String type) throws Exception{
		if ("Newest".equals(type)) {
			return getNewestCourses();
		}

		if ("Popular".equals(type)) {
			return getPopularCourses();
		}

		if ("Recommended".equals(type)) {
			return getRecommendedCourses();
		}

		return null;
	}

	private List<Course> getRecommendedCourses() throws Exception{
		return performDbQuery("select * from courses limit 10", new Object[] {});
	}

	private List<Course> getNewestCourses() throws Exception{
		return performDbQuery("select * from courses limit 10", new Object[] {});
	}

	private List<Course> getPopularCourses() throws Exception{
		return performDbQuery("select * from courses limit 10", new Object[] {});
	}

}
