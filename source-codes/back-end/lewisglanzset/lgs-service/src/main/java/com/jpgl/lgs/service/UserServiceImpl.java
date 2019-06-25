package com.jpgl.lgs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.jpgl.lgs.common.model.User;
import com.jpgl.lgs.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public List<User> getAllUsers() {
        return Lists.newArrayList(userRepository.findAll());
    }
    
    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean insertUser(User user) {
        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        User savedUser = userRepository.save(user);
        return savedUser != null;
    }

    @Override
    public boolean deleteUser(User user) {
        // TODO Auto-generated method stub
        return false;
    }
    
    @Override
    public int getUserCount(String username) {
        User user = userRepository.findByUsername(username);
        return user != null ? 1 : 0;
    }

}
