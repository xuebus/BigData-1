package com.bigdata.domain;



/**
 * Created by stone on 2016/4/15.
 */
public class SendParam {
    private int pId;
    private String dataId;
    private String queryFrom;
    private String queryFor;
    private String requestId;
    private String reportUrl;

    public SendParam() {
    }

    public SendParam(String dataId, String queryFrom, String queryFor, String requestId,String reportUrl) {
        this.dataId = dataId;
        this.queryFrom = queryFrom;
        this.queryFor = queryFor;
        this.requestId = requestId;
        this.reportUrl = reportUrl;
    }


    public int getPId() {
        return pId;
    }

    public void setPId(int pId) {
        this.pId = pId;
    }


    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }


    public String getQueryFrom() {
        return queryFrom;
    }

    public void setQueryFrom(String queryFrom) {
        this.queryFrom = queryFrom;
    }


    public String getQueryFor() {
        return queryFor;
    }

    public void setQueryFor(String queryFor) {
        this.queryFor = queryFor;
    }


    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }


    public String getReportUrl() {
        return reportUrl;
    }

    public void setReportUrl(String reportUrl) {
        this.reportUrl = reportUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SendParam sendParam = (SendParam) o;

        if (pId != sendParam.pId) return false;
        if (dataId != null ? !dataId.equals(sendParam.dataId) : sendParam.dataId != null) return false;
        if (queryFrom != null ? !queryFrom.equals(sendParam.queryFrom) : sendParam.queryFrom != null)
            return false;
        if (queryFor != null ? !queryFor.equals(sendParam.queryFor) : sendParam.queryFor != null) return false;
        if (requestId != null ? !requestId.equals(sendParam.requestId) : sendParam.requestId != null)
            return false;
        return !(reportUrl != null ? !reportUrl.equals(sendParam.reportUrl) : sendParam.reportUrl != null);

    }

    @Override
    public int hashCode() {
        int result = pId;
        result = 31 * result + (dataId != null ? dataId.hashCode() : 0);
        result = 31 * result + (queryFrom != null ? queryFrom.hashCode() : 0);
        result = 31 * result + (queryFor != null ? queryFor.hashCode() : 0);
        result = 31 * result + (requestId != null ? requestId.hashCode() : 0);
        result = 31 * result + (reportUrl != null ? reportUrl.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "SendParam{" +
                "pId=" + pId +
                ", dataId='" + dataId + '\'' +
                ", queryFrom='" + queryFrom + '\'' +
                ", queryFor='" + queryFor + '\'' +
                ", requestId='" + requestId + '\'' +
                ", reportUrl='" + reportUrl + '\'' +
                '}';
    }
}
