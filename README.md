# Assignment Submission Portal

This is a backend system for an assignment submission portal, supporting users and admins with various functionalities.

## Setup

1. Clone the repository:
   -> git clone <repository-url>
   -> cd assignment-portal
2. Install dependencies: command :: npm install express mongoose dotenv jsonwebtoken bcrypt

3. Create a `.env` file in the root directory with the following content:
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=your Port 
Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secure secret for JWT token generation.

4. Start the server:


# Documents Submission Portal  API Documentation

## 1. USER REGESTRATION 

- **Endpoint:** `api/users/register`
- **Method:** `POST`
- **Description:** REGISTER FOR USERs.
- **Response Format:**
  ```json
  {
    "users": [
      {
    "username": "testuser",
    "password": "password123",
    "isAdmin": false
    }
    ]
  }

  
  {
    "Messgae" :  "User registered successfully"
  }


## 2 ADMIN REGESTRATION 
- **Endpoint:** `api/users/register`
- **Method:** `POST`
- **Description:** REGISTER FOR ADMINs.
- **Response Format:**
  ```json
  {
    "users": [
      {
    "username": "Myuser",
    "password": "password123",
    "isAdmin": true
    }
    ]
  }

 
  {
    "Messgae" :  "Admin registered successfully"
  }

## 3 USER LOGIN  
- **Endpoint:** `api/users/login`
- **Method:** `POST`
- **Description:** LOGIN FOR USERs.
- **Response Format:**
  ```json
  {
    "users": [
      {
    "username": "testuser",
    "password": "password123"
    }
    ]
  }

  
  {
     "user": {
        "_id": "67075b94eab299b25f46a6ca",
        "username": "testuser",
        "password": "encrypted password",
        "isAdmin": false,
        "__v": 0
    },
    "token": "you token "
  }

## 4 ADMIN LOGIN 
- **Endpoint:** `api/users/register`
- **Method:** `POST`
- **Description:** REGISTER FOR ADMINs.
- **Response Format:**
  ```json
  {
    "users": [
      {
    {
    "username": "kpboss",
    "password": "hello"
    }
    }
    ]
  }

  
  {
   "user": {
        "_id": "670761a2eab299b25f46a6d6",
        "username": "kpboss",
        "password": "Your Encrypted Password",
        "isAdmin": true,
        "__v": 0
    },
    "token": "YOUR TOKEN "
  }

## 5 ALL ADMINS  
- **Endpoint:** `api/users/admins "Authorization: Bearer JWT TOKEN" :`
- **Method:** `GET`
- **Description:** ALL ADMINS .
- **Response Format:**
  ```json
  {
   
    {
        "_id": "67075d4eeab299b25f46a6ce",
        "username": "AdminUser"
    },
    {
        "_id": "670761a2eab299b25f46a6d6",
        "username": "kpboss"
    }

  }

## 6 UPLOAD  
- **Endpoint:** `/api/users/upload -H "Authorization: Bearer YOUR TOKEN" -H" Content-Type: application/json"`
- **Method:** `POST`
- **Description:** UPLOAD .
- **Response Format:**
  ```json
  {
   {"task": "Complete Hello World program", "adminId": "670761a2eab299b25f46a6d6"}

  }

  
  {
   
    "message": "Assignment uploaded successfully"
  }

## 7 VIEW ASSIGNMENT   
- **Endpoint:** `/api/admin/assignments -H "Authorization: Bearer YOUR TOKEN"1`
- **Method:** `GET`
- **Description:** ASSIGNMENT STATUS  .
- **Response Format:**

  ```json
  {
   
   {
        "_id": "67076adceab299b25f46a6e2",
        "userId": {
            "_id": "670761a2eab299b25f46a6d6",
            "username": "kpboss"
        },
        "task": "Complete Hello World program",
        "status": "pending",
        "createdAt": "2024-10-10T05:49:16.420Z"
    }
  }


## 8 ACCEPT ASSIGNMENT   
- **Endpoint:** `api/admin/assignments/YOUR_ASSIGNMENT_ID/accept`
- **Method:** `POST`
- **Description:** ACCEPT ASSIGNMENT   .
- **Response Format:**

  ```json
   
  {
    "message": "Assignment accepted successfully"
  }
  
## 9 REJECT ASSIGNMENT   
- **Endpoint:** `api/admin/assignments/YOUR_ASSIGNMENT_ID/reject`
- **Method:** `POST`
- **Description:** REJECT ASSIGNMENT
- **Response Format:**

  ```json
   
  
   {
    "message": "Assignment rejected successfully"
  }
  