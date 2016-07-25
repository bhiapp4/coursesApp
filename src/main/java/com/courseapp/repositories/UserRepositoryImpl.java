package com.courseapp.repositories;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.cassandra.config.CassandraSessionFactoryBean;
import org.springframework.stereotype.Repository;

import com.courseapp.model.User;
import com.courseapp.security.hmac.HmacSigner;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.mapping.Mapper;
import com.datastax.driver.mapping.MappingManager;
import com.datastax.driver.mapping.Result;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@Autowired
	public CassandraSessionFactoryBean session;

	private Mapper<User> mapper;

	@PostConstruct
	void initialize() {
		mapper = new MappingManager(session.getObject()).mapper(User.class);
	}

	@Override
	public User findByUserName(String username) throws Exception{
		String query = "select * from users where user_name=?";
		ResultSet results = session.getObject().execute(query, new Object[] { username });
		Result<User> users = mapper.map(results);
		return users.one();
	}

	@Override
	public List<User> findAllUsers() throws Exception{
		return performDbQuery("select * from users");
	}

	private List<User> performDbQuery(String query) throws Exception{
		ResultSet results = session.getObject().execute(query);
		Result<User> users = mapper.map(results);
		List<User> result = new ArrayList<>();
		for (User user : users) {
			result.add(user);
		}

		return result;

	}
	
	@Override
	public User validate(User user) throws Exception {
		User dbUser = findByUserName(user.getUser_name());
		if (dbUser.getPassword().equals(user.getPassword())) {
			return dbUser;
		} else {
			return null;
		}
	}

	@Override
	public User createUser(User user) throws Exception{
		String query = "insert into users(user_name,password,first_name,last_name,middle_name,company,created_date,updated_date,secretKey)values(?,?,?,?,?,?,?,?,?)";
		Date date = new Date();
		user.setCreated_date(date);
		user.setUpdated_date(date);
		user.setSecretKey(HmacSigner.generateSecret());
		session.getObject().execute(query,
				new Object[] { user.getUser_name(), user.getPassword(), user.getFirst_name(), user.getLast_name(),
						user.getMiddle_name(), user.getCompany(), user.getCreated_date(), user.getUpdated_date(),user.getSecretKey() });
		return user;
	}

}
