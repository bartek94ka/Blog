from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from news.serializers import UserSerializer, UserDetailsSerializer, NewUserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import Token, AuthTokenSerializer
from rest_framework.response import Response

class UserViews():

    @csrf_exempt
    def get_user_details(request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'GET':
            serializer = UserDetailsSerializer(user)
            return JsonResponse(serializer.data)

    @csrf_exempt
    def get_all_users(request):
        if request.method == 'GET':
            users = User.objects.all()
            serializer = UserDetailsSerializer(users, many=True)
            return JsonResponse(serializer.data, safe=False)
    
    @csrf_exempt
    def update_user(request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'PUT':
            data = JSONParser().parse(request)
            serializer = UserDetailsSerializer(user, data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)

    @csrf_exempt
    def remove_user(request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'DELETE':
            user.delete()
            return HttpResponse(status=200)

    @csrf_exempt
    def create_user(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = NewUserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)
        return HttpResponse(status=400)

    @api_view(['GET'])
    @csrf_exempt
    @permission_classes((IsAuthenticated, ))
    def get_logged_user(request):
        if request.method == 'GET':
            userId = request.user.id
            return UserViews.get_user_details(request, userId)
            