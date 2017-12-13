from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from news import urls, views

urlpatterns = [
    path('object1', views.object1, name='object1'),
    url(r'^news/$', views.news_list),
    url(r'^news/(?P<pk>[0-9]+)/$', views.news_detail),
]