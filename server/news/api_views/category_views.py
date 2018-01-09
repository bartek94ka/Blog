from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from news.models import Category
from news.serializers import CategorySerializer

class CategoryViews():
    @csrf_exempt
    def get_all_categories(request):
        """
        List all code snippets, or create a new snippet.
        """
        if request.method == 'GET':
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return JsonResponse(serializer.data, safe=False)

    @csrf_exempt
    def add_new_category(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = CategorySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)

    @csrf_exempt
    def get_category(request, pk):
        """
        Retrieve, update or delete a code category.
        """
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'GET':
            serializer = CategorySerializer(category)
            return JsonResponse(serializer.data)
    
    @csrf_exempt
    def update_category(request, pk):
        """
        Retrieve, update or delete a code category.
        """
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return HttpResponse(status=404)
        if request.method == 'PUT':
            data = JSONParser().parse(request)
            serializer = CategorySerializer(category, data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)

    @csrf_exempt
    def delete_category(request, pk):
        """
        Retrieve, update or delete a code category.
        """
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return HttpResponse(status=404)
        
        if request.method == 'DELETE':
            category.delete()
            return HttpResponse(status=200)
