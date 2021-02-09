package com.duchyyy.springboot.model;



import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Admin implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;
    private String password;

    @OneToOne(mappedBy = "admin", fetch = FetchType.EAGER)
    private Profile profile;

    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
    private Set<Article> articles = new HashSet<>();

    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
    private Set<Project> projects = new HashSet<>();

    @OneToMany(mappedBy = "admin", fetch = FetchType.EAGER)
    private Set<BioEvent> bioEvents = new HashSet<>();

    public Admin() {
    }

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    public Set<Article> getArticles() {
        return articles;
    }

    public void setArticles(Set<Article> articles) {
        this.articles = articles;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    public Set<BioEvent> getBioEvents() {
        return bioEvents;
    }

    public void setBioEvents(Set<BioEvent> bioEvents) {
        this.bioEvents = bioEvents;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", articles=" + articles +
                ", projects=" + projects +
                ", bioEvents=" + bioEvents +
                '}';
    }
}
