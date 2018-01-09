from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate
from rest_framework.renderers import JSONRenderer
from django.core.paginator import Paginator
from rest_framework.parsers import JSONParser
from news.serializers import UserSerializer, UserDetailsSerializer
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

class SessionViews():
    def signup(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = UserSerializer(data=data)
            if data.is_valid():
                serializer.save()
                username = data.get('username')
                raw_password = data.get('password1')
                user = authenticate(username=username, password=raw_password)
                login(request, user)
                return redirect('home')
            else:
                print('cos jest zle')
        return redirect('home')