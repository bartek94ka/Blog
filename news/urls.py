from django.contrib import admin
from django.urls import path
from news import urls, views

urlpatterns = [
    path('object1', views.object1, name='object1'),
]