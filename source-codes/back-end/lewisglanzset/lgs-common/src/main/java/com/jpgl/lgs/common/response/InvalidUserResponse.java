package com.jpgl.lgs.common.response;

import com.jpgl.lgs.common.model.User;

public class InvalidUserResponse {
    private User user;
    private String message;

    public InvalidUserResponse(User user, String message) {
        super();
        this.user = user;
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
