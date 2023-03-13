from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .admin import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout
# Create your views here.
class RegisterUser(CreateView):
    form_class=UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'sign/sign-in.html'

class LoginUser(LoginView):
    form_class = AuthenticationForm
    template_name = "sign-up.html"
    # def get_success_url(self):
    #     return reverse_lazy('home', current_app="main")
def logout_user(request):
    logout(request)
    return redirect('login')