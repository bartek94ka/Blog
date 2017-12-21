from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from news.models import News
from news.serializers import NewsSerializer


def object1(request):
    json = { 'key' : 'value' }
    return JsonResponse(json)
   # return HttpResponse(simplejson.dumps(json), mimetype='application/json')

@csrf_exempt
def news_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = NewsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def news_detail(request, pk):
    """
    Retrieve, update or delete a code news.
    """
    try:
        news = News.objects.get(pk=pk)
    except News.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = NewsSerializer(news)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = NewsSerializer(news, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        news.delete()
        return HttpResponse(status=204)