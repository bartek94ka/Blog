from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from news import urls, views
from news.api_views.user_views import UserViews
from news.api_views.post_views import PostViews

urlpatterns = [
    url(r'^api/post/$', PostViews.create_post),
    url(r'^api/post/(?P<pk>[0-9]+)/$', PostViews.get_post_details),
    url(r'^api/post/delete/(?P<pk>[0-9]+)/$', PostViews.delete_post),
    url(r'^api/post/update/(?P<pk>[0-9]+)/$', PostViews.update_post),
    url(r'^api/post/page/(?P<page>[0-9]+)/$', PostViews.get_page_posts),
    url(r'^api/categories/$', views.categories_list),
    url(r'^api/categories/(?P<pk>[0-9]+)/$', views.category_detail),
    url(r'^api/comments/(?P<pk>[0-9]+)/$', views.comment_detail),
    url(r'^api/user/(?P<pk>[0-9]+)/$', UserViews.get_user_details),
    url(r'^api/user/$', UserViews.get_all_users)
]