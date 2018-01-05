from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from news import urls, views

urlpatterns = [
    path('object1', views.object1, name='object1'),
    url(r'^api/news/$', views.news_list),
    url(r'^api/news/page/(?P<page>[0-9]+)/$', views.news_page_list),
    url(r'^api/news/(?P<pk>[0-9]+)/$', views.news_detail),
    url(r'^api/categories/$', views.categories_list),
    url(r'^api/categories/(?P<pk>[0-9]+)/$', views.category_detail),
    url(r'^api/comments/(?P<pk>[0-9]+)/$', views.comment_detail),
    url(r'^api/user/(?P<pk>[0-9]+)/$', views.user_detail),
    url(r'^api/user/$', views.user)
]