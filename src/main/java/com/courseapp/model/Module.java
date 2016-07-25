package com.courseapp.model;

import java.util.List;

import com.datastax.driver.mapping.annotations.FrozenValue;
import com.datastax.driver.mapping.annotations.UDT;

@UDT(name = "module")
public class Module {

	private Integer module_id;
	private String module_name;
	@FrozenValue
	private List<Clip> clips;

	public Integer getModule_id() {
		return module_id;
	}

	public void setModule_id(Integer module_id) {
		this.module_id = module_id;
	}

	public String getModule_name() {
		return module_name;
	}

	public void setModule_name(String module_name) {
		this.module_name = module_name;
	}

	public List<Clip> getClips() {
		return clips;
	}

	public void setClips(List<Clip> clips) {
		this.clips = clips;
	}

}
