from django.shortcuts import render
from django.http import HttpResponse, HttpRequest


# Create your views here.
def home(request: HttpRequest):
    return render(request=request, template_name="home.html")


def events(request: HttpRequest):
    return render(request=request, template_name="events.html")


def teams(request: HttpRequest):
    return render(request=request, template_name="teams.html")


def about_us(request: HttpRequest):
    return render(request=request, template_name="about_us.html")
