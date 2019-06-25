package com.jpgl.lgs.common.response;

public class ContactResponse {
    
    private boolean operationSuccessful;
    
    public ContactResponse(boolean opsSuccessful) {
        this.operationSuccessful = opsSuccessful;
    }
    
    public boolean isOperationSuccessful() {
        return operationSuccessful;
    }
    
    public void setOperationSuccessful(boolean operationSuccessful) {
        this.operationSuccessful = operationSuccessful;
    }
}
