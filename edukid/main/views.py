from django.shortcuts import render
from django.http import HttpResponse
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