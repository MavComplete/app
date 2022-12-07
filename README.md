# MavComplete Application

## 1. Introduction

There are multiple reviewing and rating applications present on the internet which provides the overview and review of accommodation facilities for different universities. These applications are extensive but provides single utility of reviewing the housing facilities for different universities. By designing MavComplete we are planning to provide a personalized website that would provide ratings for on-campus housing to its users with an option to personalize their search for roommates. As this webapp is student oriented, it will provide a scheduler option for its user to maintain their class as well as their personal schedule.

### 1.1 Overview

The website is divided into small modules to begin with, we will initially design a website using HTML and JavaScript that would support SQL on backend which will initially store the database of the on-campus housing properties. After its completion we will create a database that would store the login information of the users and their profile details. Here the user will be able to write his own reviews about different housing options by the forms provided. This will be stored as document and the ratings on a star-based rating system. There will be a second tab in the housing options that would provide students forms to provide roommate matching options. The third part of this website will be to provide class scheduler which will be customizable and can be used to store class schedules as well as reminder for personal use.

## 2. Architecture

We developed our code locally on an IDE and using Git pushed that to GitHub. Now, we enabled Cloud Build in our GCP and configured a trigger. This trigger took action of building new container image and storing it in Container Registry whenever there is a push on GitHub. For this to work correctly, we used a yaml file in our GitHub repository.

After we got our container image in GCP’s container registry, our Kubernetes cluster orchestrate it and deploy it. Cluster’s external IP will used to access our application interface.

From user’s perspective, they will be able to login to our application and our application will be authenticating them using Firebase Authentication service. Their login information will be stored in Firestore. Once, they successfully login, our application will be hosting them different default images for Apartments and other services using Cloud Storage. Our application will also be utilizing Cloud SQL service to store ratings and other data.

All the components will make use of Google’s API and Client Libraries (where API not available) to connect with each other. Cloud Build will be using GitHub API as well to fetch the changes.
We have planned to develop this app using Javascript, HTML5, CSS and SQL.

As we have used GitOps methodology to develop this, in the end, we have a system where:

* The _candidate_ branch is a history of the deployment attempts.
* The _production_ branch is a history of the successful deployments.
* We have a view of successful and failed deployments in Cloud Build.
* We can rollback to any previous deployment by re-executing the corresponding job in Cloud Build. A rollback also updates the _production_ branch to truthfully reflect the history of deployments.
