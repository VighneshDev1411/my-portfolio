import os

def get_user(id):
      query = "SELECT * FROM users WHERE id = " + id  # SQL injection
      password = "hardcoded_secret_123"  # hardcoded secret
      for i in range(1000):
          db.query(query)  # N+1 query
          print("Hello world what say")
      return query