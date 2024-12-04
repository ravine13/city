from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
from flask_cors import CORS  
import os

load_dotenv()

app = Flask(__name__)

CORS(app)

# Configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()

    # Extract data from the request
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Basic validation
    if not name or not email or not message:
        return jsonify({'error': 'All fields are required'}), 400

    try:
        # Create and send the email
        msg = Message(
            subject=f"New Contact Form Submission from {name}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['kuriaderek@gmail.com'],  # Replace with your recipient email
            body=f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
        )
        mail.send(msg)
        return jsonify({'message': 'Message sent successfully!'}), 200

    except Exception as e:
        return jsonify({'error': f"Failed to send message. Error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)
