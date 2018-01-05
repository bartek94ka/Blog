from rest_framework import serializers
from news.models import Category, News, Comments, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User

class NewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'text', 'categories', 'posted_date', 'author')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'text', 'categories', 'posted_date', 'author')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'icon', 'created')

class NewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email')
        # fields = '__all__'
class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')