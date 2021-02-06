package com.duchyyy.springboot.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bio_events")
public class BioEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String event;
    private Date date;

    public BioEvent() {
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
