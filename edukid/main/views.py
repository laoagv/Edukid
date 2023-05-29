from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin

from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication

# @permission_classes([IsAuthenticated])
# @authentication_classes([TokenAuthentication])
# def user(request: Request):
# 	return()
from .forms import *
from .models import *
from .utils import *
# Create your views here.

from rest_framework_simplejwt.views import TokenObtainPairView
# from .serializers import MyTokenObtainPairSerializer
#
# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer

# class RegisterUser(DataMixin, CreateView):
#
# 	form_class = RegisterUserForm
#
# 	template_name = 'sign/sign-in.html'
# 	success_url = reverse_lazy('login')
# 	def get_context_data(self, *, object_list=None, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		c_def = self.get_user_context(title = "Регистрация")
# 		return dict(list(context.items())+list(c_def.items()))

