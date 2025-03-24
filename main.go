package main

import (
	"fmt"
	"net/http"
	"net/smtp"
)

func sendEmail(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		// Parse form data
		r.ParseForm()
		name := r.FormValue("name")
		email := r.FormValue("email")
		message := r.FormValue("message")

		// Email setup
		from := "your_email@example.com" // Your email address
		password := "your_email_password" // Your email password
		to := "your_email@example.com"   // Where you want to receive the form

		// Email body
		subject := "New Contact Form Submission"
		body := fmt.Sprintf("Name: %s\nEmail: %s\nMessage: %s", name, email, message)
		msg := fmt.Sprintf("Subject: %s\n\n%s", subject, body)

		// SMTP server configuration
		smtpHost := "smtp.example.com"
		smtpPort := "587"
		auth := smtp.PlainAuth("", from, password, smtpHost)

		// Send email
		err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{to}, []byte(msg))
		if err != nil {
			http.Error(w, "Failed to send email", http.StatusInternalServerError)
			return
		}

		w.Write([]byte("Email sent successfully!"))
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

func main() {
	http.HandleFunc("/send-email", sendEmail)
	http.ListenAndServe(":8080", nil)
}