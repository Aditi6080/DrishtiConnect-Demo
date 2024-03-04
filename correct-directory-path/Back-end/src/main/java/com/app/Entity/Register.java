package com.app.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "VolunteerRegister")
public class Register {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	@Column(nullable = false)
	private String Full_Name;
	@Column(nullable = false)
	private String Email;
	@Column(nullable = false)
	private String Password;
	@Column(nullable = false)
	private String Address;
	@Column(nullable = false)
	private String City;
	@Column(nullable = false)
	private String State;
	@Column(nullable = false)
	private String Country;
	@Column(nullable = false)
	private String Zip;
	
	

	public Register(int id, String full_Name, String email, String password, String address, String city,
			String state, String country, String zip) {
		super();
		this.Id = id;
		Full_Name = full_Name;
		Email = email;
		Password = password;
		Address = address;
		City = city;
		State = state;
		Country = country;
		Zip = zip;
	}

	public Register() {
	
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		this.Id = id;
	}

	public String getFull_Name() {
		return Full_Name;
	}

	public void setFull_Name(String full_Name) {
		Full_Name = full_Name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}
	
	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public String getZip() {
		return Zip;
	}

	public void setZip(String zip) {
		Zip = zip;
	}

	@Override
	public String toString() {
		return "Register [Id=" + Id + ", Full_Name=" + Full_Name + ", Email=" + Email + ", Password=" + Password
				+ ", Address=" + Address + ", City=" + City + ", State=" + State + ", Zip=" + Zip + "]";
	}
	
	
	
}


