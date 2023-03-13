from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin

from .forms import *
from .models import *
from .utils import *
# Create your views here.
def index(request):
	return render(request, "main/index1.html")
def sign_in(request):
	return render(request, "sign/sign-in.html")
def sign_up(request):
	return render(request, "sign/sign-up.html")
def profile(request):
	return render(request, "profile/profile.html")
def my_classes(request):
	return render(request, "my_classes/my_classes.html")
def progress(request):
	return render(request, "progress/progress.html")

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