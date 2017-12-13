from django.http import JsonResponse
from django.http import HttpResponse


def object1(request):
    json = { 'key' : 'value' }
    return JsonResponse(json)
   # return HttpResponse(simplejson.dumps(json), mimetype='application/json')