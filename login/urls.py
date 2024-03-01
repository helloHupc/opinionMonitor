from django.urls import re_path
from login.views import login


urlpatterns = [
    re_path('login', login),
]