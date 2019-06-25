package com.jpgl.lgs.service;

import java.util.List;

import com.jpgl.lgs.common.model.User;

public interface UserService {
    
    List<User> getAllUsers();
    
    boolean insertUser(User user);
    
    boolean deleteUser(User user);

    User getUser(String username);

    int getUserCount(String username);
}
