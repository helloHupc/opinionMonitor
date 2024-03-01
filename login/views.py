from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def login(request):
    print(request.method)
    print(request.POST)
    print(request.POST.get('username'))
    print(request.POST.get('password'))
    return HttpResponse('登录成功')
