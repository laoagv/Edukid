from django.urls import path, include
from . import views
from .views import *
from rest_framework import routers
from .api import GraphicsViewSet
from .api import *
from users.api import UserViewSet


router = routers.DefaultRouter()
router.register("api/Graphics", GraphicsViewSet, "Graphics")
router.register("api/user", UserViewSet, "user")
# router.register("api/Users", UsersViewSet, "Users")



urlpatterns = [
    # path('login', login, name="login"),
    # path('register/', RegisterUser.as_view(), name="register"),
    path('api/v1/Classes/', ClassesAPIList.as_view()),
    path('api/v1/Classes/<int:pk>/', ClassesAPIUpdate.as_view()),
    path('api/v1/Classesdelete/<int:pk>/', ClassesAPIDestroy.as_view()),
    path('api/v1/Subject', SubjectAPIList.as_view()),
    path('api/v1/Subject/<int:pk>/', SubjectAPIUpdate.as_view()),
    path('api/v1/Subjectdelete/<int:pk>/', SubjectAPIDestroy.as_view()),
    path('api/v1/drf-auth/', include('rest_framework.urls'),)
] + router.urls



