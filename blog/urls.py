from django.contrib import admin
from django.urls import include, path
from django.conf.urls import url
from news import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/news/', include('news.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
