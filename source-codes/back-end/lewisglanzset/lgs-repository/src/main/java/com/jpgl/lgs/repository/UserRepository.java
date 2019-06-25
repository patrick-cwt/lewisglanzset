package com.jpgl.lgs.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jpgl.lgs.common.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, ObjectId> {

    @Query("{ 'username': ?0 }")
    User findByUsername(String username);
}
