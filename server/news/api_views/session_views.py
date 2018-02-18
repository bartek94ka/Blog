from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from news.serializers import NewUserSerializer
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from rest_framework import authtoken
from rest_framework.authtoken import views
import json

class SessionViews():
    @csrf_exempt
    #@api_view(['POST'])
    def signup(request):
        if request.method == 'POST':
            try:
                #print(request.data)
                data = JSONParser().parse(request)
                username = data.get('username')
                email = data.get('email')
                raw_password = data.get('password')
                user = User.objects.create_user(username, email, raw_password)
                #user = Users.objects.get(username=username)
                return HttpResponse(status=200)
            except ValueError:
                print(ValueError.value)
        return HttpResponse(status=400)
