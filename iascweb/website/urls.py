from django.urls import path
from . import views

urlpatterns = [
    path("", view=views.home, name="home"),
    path("events", view=views.events, name="events"),
    path("teams", view=views.teams, name="teams"),
]
