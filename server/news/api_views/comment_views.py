from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from django.core.paginator import Paginator
from rest_framework.parsers import JSONParser
from news.serializers import CommentsSerializer, NewCommentSerializer
from news.models import Comments

class CommentViews():

    @csrf_exempt
    def create_comment(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            # data.news = 1
            serializer = NewCommentSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return HttpResponse(status=200)
            return JsonResponse(serializer.errors, status=400)

    @csrf_exempt
    def get_comment(request, pk):
        """
        Retrieve, update or delete a code comment.
        """
        try:
            comment = Comments.objects.get(pk=pk)
        except Comments.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'GET':
            serializer = CommentsSerializer(comment)
            return JsonResponse(serializer.data)
    
    @csrf_exempt
    def get_post_all_comments(request, pk):
        """
        Retrieve, update or delete a code comment.
        """
        try:
            comment = Comments.objects.all()
        except Comments.DoesNotExist:
            return HttpResponse(status=404)

        if request.method == 'GET':
            serializer = CommentsSerializer(comment)
            return JsonResponse(serializer.data)

    # @csrf_exempt
    # def comment_detail(request, pk):
    #     """
    #     Retrieve, update or delete a code comment.
    #     """
    #     try:
    #         comment = Comments.objects.get(pk=pk)
    #     except Comments.DoesNotExist:
    #         return HttpResponse(status=404)

    #     if request.method == 'GET':
    #         serializer = CommentsSerializer(comment)
    #         return JsonResponse(serializer.data)

    #     elif request.method == 'PUT':
    #         data = JSONParser().parse(request)
    #         serializer = CommentsSerializer(comment, data=data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return HttpResponse(status=200)
    #         return JsonResponse(serializer.errors, status=400)

    #     elif request.method == 'DELETE':
    #         comment.delete()
    #         return HttpResponse(status=200)