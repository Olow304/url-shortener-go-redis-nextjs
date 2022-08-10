package server

import (
    "github.com/go-redis/redis/v8"
)

// create a function to connect to redis server and return a client 
func ConnectToRedis() *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
	})
	return client
}