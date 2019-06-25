package com.jpgl.lgs.common.response;

public class UserResponse {
    private String message;
    private boolean registered;

    public UserResponse(String message, boolean registered) {
        super();
        this.message = message;
        this.registered = registered;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isRegistered() {
        return registered;
    }

    public void setRegistered(boolean registered) {
        this.registered = registered;
    }

}
