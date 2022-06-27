# fullstack_tutorial
full stack development react plus django

## Installation 

```
pip install django
pip install djangorestframework
pip install django-cors-headers
npm install -g create-react-app
```

## Django for backend API server 

### Set up
```
mkdir backend 
cd backend 
django-admin startproject post_backend .
python manage.py startapp post_app 
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Create application 
* Define model `post_app`
* Register to admin and migrate model 
```
python manage.py makemigrations
python manage.py migrate  
```
* Try to add `Post` using the model
* Compose serializers for json 
* Write views for API request with urls
    * make urls.py in post_app 
    * include the urls into project's urls
* Try GET API by 
  * `http://127.0.0.1:8000/api/`
  * `http://127.0.0.1:8000/api/1/`
* Whitelist react server for getting http script 
  ```
  CORS_ORIGIN_WHITELIST = (
    'localhost:3000/'
)


## React for frontend server 

### Set up
```
cd 1_post_app
create-react-app frontend
npm start
```

## Communication 