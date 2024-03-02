import json

from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def login(request):
    if request.method == 'POST':
        print(request.body)
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        print(username, password)
    return HttpResponse('登录成功')
