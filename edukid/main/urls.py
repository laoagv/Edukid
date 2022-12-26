from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('sign-in', views.sign_in),
    path('sign-up', views.sign_up),
    path('profile', views.profile),
    path('my_classes', views.my_classes),
    path('progress', views.progress)
]
