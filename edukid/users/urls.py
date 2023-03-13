from django.contrib import admin
from django.urls import include, path

from django.conf import settings
from django.conf.urls.static import static
from .views import *


urlpatterns = [
    path('register/', RegisterUser.as_view(), name="register"),
    path('login/', LoginUser.as_view(), name="login"),
    path('logout/', logout_user, name="logout "),
]
