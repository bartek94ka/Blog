from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from django.core.paginator import Paginator
from rest_framework.parsers import JSONParser
from news.serializers import PostSerializer, NewPostSerializer
from news.models import Posts

class PostViews():

    @csrf_exempt
    def get_all_posts(request):
        if request.method == 'GET':
            try:
                posts_list = Posts.objects.all()
            except:
                return HttpResponse(status=404)
            serializer = PostSerializer(posts_list, many=True)
            return JsonResponse(serializer.data, safe=False)
        return HttpResponse(status=404)

    @csrf_exempt
    def get_posts_by_comment_id(request, pk):
        if request.method == 'GET':
            try:
                posts_list = Posts.objects.filter(categories__id__in=pk)
            except:
                return HttpResponse(status=404)  
            serializer = PostSerializer(posts_list, many=True)
            return JsonResponse(serializer.data, safe=False)
        return HttpResponse(status=404)

    @csrf_exempt
    def get_page_posts(request, page):
        """
        List all code snippets, or create a new snippet.
        """
        if request.method == 'GET':
            post_list = Posts.objects.all()
            paginator = Paginator(post_list, 2)
            posts = paginator.get_page(page)
            serializer = PostSerializer(posts, many=True)
            return JsonResponse(serializer.data, safe=False)

    @csrf_exempt
    def get_posts_count(request):
        if request.method == 'GET':
            count = Posts.objects.count()
            return JsonResponse(count, safe=False)
        else:
            return JsonResponse(0, safe=False)
            

    @csrf_exempt
    def get_post_details(request, pk):
        """
        Retrieve, update or delete a code news.
        """
        try:
            post = Posts.objects.get(pk=pk)
        except News.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'GET':
            serializer = PostSerializer(post)
            return JsonResponse(serializer.data)
    
    @csrf_exempt
    def update_post(request, pk):
        """
        Retrieve, update or delete a code news.
        """
        try:
            post = Posts.objects.get(pk=pk)
        except News.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'PUT':
            data = JSONParser().parse(request)
            serializer = NewPostSerializer(post, data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)

    @csrf_exempt
    def delete_post(request, pk):
        """
        Retrieve, update or delete a code news.
        """
        try:
            post = Posts.objects.get(pk=pk)
        except News.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'DELETE':
            post.delete()
            return HttpResponse(status=200)
    
    @csrf_exempt
    def create_post(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = NewPostSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)
    