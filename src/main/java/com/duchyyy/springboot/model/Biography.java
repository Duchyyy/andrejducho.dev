package com.duchyyy.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Biography {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String event;
    private Date date;

    public Biography() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Biography{" +
                "id=" + id +
                ", event='" + event + '\'' +
                ", date=" + date +
                '}';
    }
}
