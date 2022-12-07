apiVersion: apps/v1
kind: Deployment
metadata:
  name: mavcomplete-build
  labels:
    app: mavcomplete-build
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mavcomplete-build
  template:
    metadata:
      labels:
        app: mavcomplete-build
    spec:
      containers:
      - name: mavcomplete-build
        image: us-central1-docker.pkg.dev/GOOGLE_CLOUD_PROJECT/my-repository/mavcomplete-build:COMMIT_SHA
        ports:
        - containerPort: 8080
---
kind: Service
apiVersion: v1
metadata:
  name: mavcomplete-build
spec:
  selector:
    app: mavcomplete-build
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer
