# [START hello-app]
from flask import Flask
app = Flask('MavComplete')

@app.route('/')
def hello():
  return "Welcome to MavComplete!\n"

if __name__ == '__main__':
  app.run(host = '0.0.0.0', port = 8080)
# [END hello-app]
