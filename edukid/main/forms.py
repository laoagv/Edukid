from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from .models import *
from .admin import *
# class RegisterUserForm(CustomUserCreationForm):
#     # role = forms.CharField(label="Роль", widget = forms.TextInput(attrs={'class': 'form-input'}))
#     first_name = forms.CharField(label="Имя", widget = forms.TextInput(attrs={'class': 'form-input'}))
#     last_name = forms.CharField(label="Фамилия", widget = forms.TextInput(attrs={'class': 'form-input'}))
#     father_name = forms.CharField(label="Отчество", widget = forms.TextInput(attrs={'class': 'form-input'}))
#     username = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'form-input'}))
#     password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
#     password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
#
#     class Meta:
#         model = User
#
#         fields = ('first_name', 'last_name', 'father_name','username', 'password1', 'password2')
    # model = Users
    # name = forms.CharField(label='Имя', widget=forms.TextInput(attrs={'class': 'form-input'}))
    # surname = forms.CharField(label='Фамилия', widget=forms.TextInput(attrs={'class': 'form-input'}))
    # father_name = forms.CharField(label='Отчество', widget=forms.TextInput(attrs={'class': 'form-input'}))
    # type_of_useer = forms.CharField(label='Роль', widget=forms.TextInput(attrs={'class': 'form-input'}))
    # email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'form-input'}))
    # password = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
    #
    # class Meta:
    #     model = Users
    #     fields = ('name','surname','father_name','type_of_user', 'email', 'password')
