package com.courseapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.cassandra.config.CassandraClusterFactoryBean;
import org.springframework.data.cassandra.config.CassandraSessionFactoryBean;
import org.springframework.data.cassandra.config.SchemaAction;
import org.springframework.data.cassandra.convert.CassandraConverter;
import org.springframework.data.cassandra.convert.MappingCassandraConverter;
import org.springframework.data.cassandra.core.CassandraOperations;
import org.springframework.data.cassandra.core.CassandraTemplate;
import org.springframework.data.cassandra.mapping.BasicCassandraMappingContext;
import org.springframework.data.cassandra.mapping.CassandraMappingContext;

@Configuration
//@EnableCassandraRepositories(basePackages={"org.courseapp.repositories"})
@ComponentScan(basePackages={"com.courseapp.repositories", "com.courseapp.rest", "com.courseapp.exceptionhandling","com.courseapp.security","com.courseapp.security.*"})
@PropertySource("cassandra.properties")
public class CassandraConfiguration {
	
	@Autowired
	private Environment environment;
	
	@Bean
	public CassandraOperations cassandraTemplate() throws Exception{
		return new CassandraTemplate(getCassandraSessionFactory().getObject());
	}
	
	@Bean
	public CassandraSessionFactoryBean getCassandraSessionFactory() throws Exception{
		CassandraSessionFactoryBean session = new CassandraSessionFactoryBean();
        session.setCluster(cluster().getObject());
        session.setKeyspaceName(environment.getProperty("cassandra.keyspace"));
        session.setConverter(converter());
        session.setSchemaAction(SchemaAction.NONE);
        return session;
	}
	
	@Bean
    public CassandraClusterFactoryBean cluster() {
        CassandraClusterFactoryBean cluster = new CassandraClusterFactoryBean();
        cluster.setContactPoints(environment.getProperty("cassandra.contactpoints"));
        cluster.setPort(Integer.parseInt(environment.getProperty("cassandra.port")));
        return cluster;
    }
	
	@Bean
    public CassandraMappingContext mappingContext() {
        return new BasicCassandraMappingContext();
    }
     
	@Bean
    public CassandraConverter converter() {
        return new MappingCassandraConverter(mappingContext());
    }
	
}
