package server

import (
	"context"
    "github.com/go-redis/redis/v8"
)
// create a function that sets a key value pair in redis server and returns a value 
// take ctx as parameter and client as parameter
// return a boolean if the key is set successfully
func SetKeyValue(ctx context.Context, client *redis.Client, key string, value string) (bool) {
	err := client.Set(ctx, key, value, 0).Err()
	if err != nil {
		return false
	}	
	return true
}

// create a function that gets a key value pair in redis server and returns a value
// take ctx as parameter and client as parameter
// return a value if the key is found successfully
func GetKeyValue(ctx context.Context, client *redis.Client, key string) (string) {
	value, err := client.Get(ctx, key).Result()
	if err != nil {
		return ""
	}
	return value
}