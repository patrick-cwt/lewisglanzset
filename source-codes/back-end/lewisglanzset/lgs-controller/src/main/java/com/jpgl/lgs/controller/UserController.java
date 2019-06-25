package com.jpgl.lgs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jpgl.lgs.common.model.User;
import com.jpgl.lgs.common.response.UserResponse;
import com.jpgl.lgs.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> registerUser(@RequestBody User user) {
        String message = "";
        boolean result;
        int count = userService.getUserCount(user.getUsername());
        if (count > 0) {
            message = "User already exist!";
            result = false;
        } else {
            message = "User Registered!";
            result = userService.insertUser(user);
        }
        return new ResponseEntity<UserResponse>(new UserResponse(message, result), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> fetchAllUsers() {
        return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/count/{username}")
    public ResponseEntity<Integer> fetchAllUsers(@PathVariable String username) {
        return new ResponseEntity<Integer>(userService.getUserCount(username), HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> fetchUser(@PathVariable String username) {
        return new ResponseEntity<User>(userService.getUser(username), HttpStatus.OK);
    }
}
