from rest_framework import serializers
from news.models import Category, Posts, Comments, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User

class NewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('title', 'text', 'categories', 'posted_date', 'author')

class PostSerializer(serializers.ModelSerializer):
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Posts
        fields = ('id', 'title', 'text', 'categories', 'posted_date', 'author', 'comments')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'icon', 'created')

class NewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('description', 'author', 'posted_date', 'post')

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        #fields = ('description', 'author', 'posted_date', 'post')
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email')
        # fields = '__all__'
class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_superuser')
        # fields = '__all__'