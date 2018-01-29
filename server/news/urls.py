from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from news import urls
from rest_framework import authentication
from rest_framework.authtoken import views
from news.api_views.user_views import UserViews
from news.api_views.post_views import PostViews
from news.api_views.comment_views import CommentViews
from news.api_views.category_views import CategoryViews
from news.api_views.session_views import SessionViews

urlpatterns = [
    url(r'^api/post/$', PostViews.create_post),
    url(r'^api/post/(?P<pk>[0-9]+)/$', PostViews.get_post_details),
    url(r'^api/post/delete/(?P<pk>[0-9]+)/$', PostViews.delete_post),
    url(r'^api/post/update/(?P<pk>[0-9]+)/$', PostViews.update_post),
    url(r'^api/post/page/(?P<page>[0-9]+)/$', PostViews.get_page_posts),
    url(r'^api/category/$', CategoryViews.add_new_category),
    url(r'^api/category/all/$', CategoryViews.get_all_categories),
    url(r'^api/category/(?P<pk>[0-9]+)/$', CategoryViews.get_category),
    url(r'^api/category/update/(?P<pk>[0-9]+)/$', CategoryViews.update_category),
    url(r'^api/category/delete/(?P<pk>[0-9]+)/$', CategoryViews.delete_category),
    url(r'^api/comment/$', CommentViews.create_comment),
    url(r'^api/comment/all/$', CommentViews.get_all_comments),
    url(r'^api/comment/(?P<pk>[0-9]+)/$', CommentViews.get_comment),
    url(r'^api/comment/post/(?P<pk>[0-9]+)/$', CommentViews.get_post_all_comments),
    url(r'^api/user/$', UserViews.get_all_users),
    url(r'^api/user/(?P<pk>[0-9]+)/$', UserViews.get_user_details),
    url(r'^api/user/update/(?P<pk>[0-9]+)/$', UserViews.update_user),
    url(r'^api/user/logged/$', UserViews.get_logged_user),
    url(r'^api/api-token-auth/$', views.obtain_auth_token),
    url(r'^api/signup/$', UserViews.create_user)
]