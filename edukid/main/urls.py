from django.urls import path, include
from . import views
from .views import *
from rest_framework import routers
from .api import GraphicsViewSet, UsersViewSet


router = routers.DefaultRouter()
router.register("api/Graphics", GraphicsViewSet, "Graphics")
router.register("api/Users", UsersViewSet, "Users")



urlpatterns = [
    path('home', views.index),
    # path('login', login, name="login"),
    # path('register/', RegisterUser.as_view(), name="register"),
    path('profile', views.profile),
    path('my_classes', views.my_classes),
    path('progress', views.progress),
    path('api/v1/drf-auth/', include('rest_framework.urls'))
] + router.urls



