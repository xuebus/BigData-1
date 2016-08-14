package com.bigdata.domain;


/**
 * Created by stone on 2016/4/15.
 */

public class Next {
    private int id;
    private String dataId;
    private String next;
    private String url;

    public Next(){};

    public Next(String dataId,String next,String url){
        this.dataId = dataId;
        this.next = next;
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }


    public String getNext() {
        return next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Next next1 = (Next) o;

        if (id != next1.id) return false;
        if (dataId != null ? !dataId.equals(next1.dataId) : next1.dataId != null) return false;
        if (next != null ? !next.equals(next1.next) : next1.next != null) return false;
        if (url != null ? !url.equals(next1.url) : next1.url != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (dataId != null ? dataId.hashCode() : 0);
        result = 31 * result + (next != null ? next.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Next{" +
                "id=" + id +
                ", dataId='" + dataId + '\'' +
                ", next='" + next + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
