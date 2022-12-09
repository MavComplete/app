apiVersion: apps/v1
kind: Deployment
metadata:
  name: mavcomplete-build
  labels:
    app: mavcomplete-build
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mavcomplete-build
  template:
    metadata:
      labels:
        app: mavcomplete-build
    spec:
      volumes:
      - name: firestore-key-volume
        secret:
          secretName: firestore
      containers:
      - name: mavcomplete-build
        image: us-central1-docker.pkg.dev/heroic-cedar-370702/my-repository/mavcomplete-build:COMMIT_SHA
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: firestore-key-volume
          mountPath: /var/secrets/google
        env:
        - name: GOOGLE_APPLICATION_CREDENTIALS
          value: /var/secrets/google/heroic-cedar-370702-e5ded621956a.json
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
