from django.shortcuts import render
from django.http import HttpRequest


# Create your views here.
def home(request: HttpRequest):
    return render(request=request, template_name="home.html")


def events(request: HttpRequest):
    return render(request=request, template_name="events.html")


def teams(request: HttpRequest):
    return render(request=request, template_name="teams.html")
