package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"html/template"
	"math/rand"
	"net/http"

	rc "github.com/olow304/url-shorten/server"
)

var ctx = context.Background()

// create struct that holds the url and the short url
type Url struct {
	Url string `json:"url"`
}

// create a function that returns a six random number and characters to be used as short url
func GenerateShortUrl() string {
	var shortUrl string
	for i := 0; i < 7; i++ {
		// create a random numbers and characters to be used as short url
		shortUrl += string(rand.Intn(26) + 65)
		
	}
	return shortUrl
}

// create a function that handles that gets user url post request
// take http request and http response as parameter
func HandleUserUrlPostRequest() {
	// create http handler function that handles the post request
	http.HandleFunc("/url-shortener", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization")

		// check if the request is post request
		if r.Method == "POST" {
			// decode the request body into url struct
			url := Url {}
			err := json.NewDecoder(r.Body).Decode(&url)
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				return
			}
			fmt.Println(url)
			// create a client to connect to redis server
			client := rc.ConnectToRedis()

			// create a short url
			shortUrl := GenerateShortUrl()
			// set the key value pair in redis server
			success := rc.SetKeyValue(ctx, client, shortUrl, url.Url)
			if success == false {	
				w.WriteHeader(http.StatusInternalServerError)
				return
			}
			// create a response struct to send back to the user
			response := struct {
				ShortUrl string `json:"short_url"`
			}{
				ShortUrl: "http://localhost:8080/" + shortUrl,
			}
			// encode the response struct into json and send it to the user
			json.NewEncoder(w).Encode(response)
		}
	})
}

// create a function that handles the get request for the short url as a parameter
func HandleShortUrlGetRequest() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization")
		w.Header().Set("Content-Type", "text/html; charset=utf-8")

		// get the short url from the request
		shortUrl := r.URL.Path[1:]
		// create a client to connect to redis server
		client := rc.ConnectToRedis()
		// get the value of the key from the redis server
		value := rc.GetKeyValue(ctx, client, shortUrl)
		// check if the key is found in the redis server
		if value == "" {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		// create a response struct to send back to the user
		response := struct {
			Url string `json:"url"`
		}{
			Url: value,
		}

		t, err := template.ParseFiles("redirect.html")
		if err != nil {
			fmt.Println(err)
		}

		t.Execute(w, response.Url)
	})
}