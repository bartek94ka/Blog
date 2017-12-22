from rest_framework import serializers
from news.models import Category, News, Comments, LANGUAGE_CHOICES, STYLE_CHOICES

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'text', 'categories', 'posted_date', 'author')