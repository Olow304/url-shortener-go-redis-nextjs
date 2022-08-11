package main

import (
	"fmt"
	"net/http"
	"github.com/olow304/url-shorten/handler"
)

func main() {
	handler.HandleUserUrlPostRequest()
	handler.HandleShortUrlGetRequest()

	http.ListenAndServe(":8080", nil)
	// print saying the server is running
	fmt.Println("Server is running")

}